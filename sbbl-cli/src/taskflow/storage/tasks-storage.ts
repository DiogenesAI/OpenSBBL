/**
 * Task Storage - CRUD operations for tasks
 * Part of TaskFlow-CLI for OpenSBBL
 */

import type {
    Task,
    TaskInput,
    Subtask,
    SubtaskInput,
    TaskStatus,
    TaskFilter,
    TaskSortOptions,
    TasksData
} from '../models/task.js';
import {
    readTasksFile,
    writeTasksFile,
    readStateFile
} from './file-manager.js';

/**
 * Task Storage class
 * Handles all task CRUD operations
 */
export class TaskStorage {
    private cwd: string;

    constructor(cwd: string = process.cwd()) {
        this.cwd = cwd;
    }

    /**
     * Get current active tag
     */
    private async getCurrentTag(): Promise<string> {
        const state = await readStateFile(this.cwd);
        return state.currentTag;
    }

    /**
     * Get all tasks for current tag
     */
    async getTasks(tag?: string): Promise<Task[]> {
        const data = await readTasksFile(this.cwd);
        const currentTag = tag || await this.getCurrentTag();

        if (!data[currentTag]) {
            return [];
        }

        return data[currentTag].tasks;
    }

    /**
     * Get task by ID
     */
    async getTask(id: number, tag?: string): Promise<Task | null> {
        const tasks = await this.getTasks(tag);
        return tasks.find(t => t.id === id) || null;
    }

    /**
     * Get next available task ID
     */
    private async getNextId(tag?: string): Promise<number> {
        const tasks = await this.getTasks(tag);
        if (tasks.length === 0) return 1;
        return Math.max(...tasks.map(t => t.id)) + 1;
    }

    /**
     * Create a new task
     */
    async createTask(input: TaskInput, tag?: string): Promise<Task> {
        const data = await readTasksFile(this.cwd);
        const currentTag = tag || await this.getCurrentTag();

        // Ensure tag exists
        if (!data[currentTag]) {
            data[currentTag] = { tasks: [] };
        }

        const id = await this.getNextId(currentTag);
        const now = new Date().toISOString();

        const task: Task = {
            ...input,
            id,
            subtasks: input.subtasks || [],
            createdAt: now,
            updatedAt: now
        };

        data[currentTag].tasks.push(task);
        await writeTasksFile(data, this.cwd);

        return task;
    }

    /**
     * Update a task
     */
    async updateTask(
        id: number,
        updates: Partial<Omit<Task, 'id' | 'createdAt'>>,
        tag?: string
    ): Promise<Task | null> {
        const data = await readTasksFile(this.cwd);
        const currentTag = tag || await this.getCurrentTag();

        if (!data[currentTag]) {
            return null;
        }

        const taskIndex = data[currentTag].tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) {
            return null;
        }

        const task = data[currentTag].tasks[taskIndex];
        const updatedTask: Task = {
            ...task,
            ...updates,
            id: task.id, // Preserve ID
            createdAt: task.createdAt, // Preserve creation date
            updatedAt: new Date().toISOString()
        };

        data[currentTag].tasks[taskIndex] = updatedTask;
        await writeTasksFile(data, this.cwd);

        return updatedTask;
    }

    /**
     * Delete a task
     */
    async deleteTask(id: number, tag?: string): Promise<boolean> {
        const data = await readTasksFile(this.cwd);
        const currentTag = tag || await this.getCurrentTag();

        if (!data[currentTag]) {
            return false;
        }

        const initialLength = data[currentTag].tasks.length;
        data[currentTag].tasks = data[currentTag].tasks.filter(t => t.id !== id);

        if (data[currentTag].tasks.length === initialLength) {
            return false; // Task not found
        }

        await writeTasksFile(data, this.cwd);
        return true;
    }

    /**
     * Update task status
     */
    async updateTaskStatus(
        id: number,
        status: TaskStatus,
        tag?: string
    ): Promise<Task | null> {
        const task = await this.updateTask(id, { status }, tag);

        // If marking as done, mark all subtasks as done too
        if (task && status === 'done' && task.subtasks.length > 0) {
            const updatedSubtasks = task.subtasks.map(st => ({
                ...st,
                status: 'done' as TaskStatus
            }));
            return this.updateTask(id, { subtasks: updatedSubtasks }, tag);
        }

        return task;
    }

    /**
     * Add subtask to a task
     */
    async addSubtask(
        taskId: number,
        subtaskInput: SubtaskInput,
        tag?: string
    ): Promise<Task | null> {
        const task = await this.getTask(taskId, tag);
        if (!task) return null;

        const nextSubtaskId = task.subtasks.length > 0
            ? Math.max(...task.subtasks.map(st => st.id)) + 1
            : 1;

        const subtask: Subtask = {
            ...subtaskInput,
            id: nextSubtaskId
        };

        const updatedSubtasks = [...task.subtasks, subtask];
        return this.updateTask(taskId, { subtasks: updatedSubtasks }, tag);
    }

    /**
     * Update subtask
     */
    async updateSubtask(
        taskId: number,
        subtaskId: number,
        updates: Partial<Omit<Subtask, 'id'>>,
        tag?: string
    ): Promise<Task | null> {
        const task = await this.getTask(taskId, tag);
        if (!task) return null;

        const subtaskIndex = task.subtasks.findIndex(st => st.id === subtaskId);
        if (subtaskIndex === -1) return null;

        const updatedSubtasks = [...task.subtasks];
        updatedSubtasks[subtaskIndex] = {
            ...updatedSubtasks[subtaskIndex],
            ...updates
        };

        return this.updateTask(taskId, { subtasks: updatedSubtasks }, tag);
    }

    /**
     * Delete subtask
     */
    async deleteSubtask(
        taskId: number,
        subtaskId: number,
        tag?: string
    ): Promise<Task | null> {
        const task = await this.getTask(taskId, tag);
        if (!task) return null;

        const updatedSubtasks = task.subtasks.filter(st => st.id !== subtaskId);
        return this.updateTask(taskId, { subtasks: updatedSubtasks }, tag);
    }

    /**
     * Filter tasks
     */
    async filterTasks(filter: TaskFilter, tag?: string): Promise<Task[]> {
        let tasks = await this.getTasks(tag);

        if (filter.status) {
            const statuses = Array.isArray(filter.status) ? filter.status : [filter.status];
            tasks = tasks.filter(t => statuses.includes(t.status));
        }

        if (filter.priority) {
            const priorities = Array.isArray(filter.priority) ? filter.priority : [filter.priority];
            tasks = tasks.filter(t => priorities.includes(t.priority));
        }

        if (filter.hasSubtasks !== undefined) {
            tasks = tasks.filter(t =>
                filter.hasSubtasks ? t.subtasks.length > 0 : t.subtasks.length === 0
            );
        }

        if (filter.hasDependencies !== undefined) {
            tasks = tasks.filter(t =>
                filter.hasDependencies ? t.dependencies.length > 0 : t.dependencies.length === 0
            );
        }

        return tasks;
    }

    /**
     * Sort tasks
     */
    sortTasks(tasks: Task[], options: TaskSortOptions): Task[] {
        const sorted = [...tasks];

        sorted.sort((a, b) => {
            let comparison = 0;

            switch (options.by) {
                case 'id':
                    comparison = a.id - b.id;
                    break;
                case 'priority':
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    comparison = priorityOrder[b.priority] - priorityOrder[a.priority];
                    break;
                case 'status':
                    comparison = a.status.localeCompare(b.status);
                    break;
                case 'createdAt':
                    comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                    break;
                case 'updatedAt':
                    comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
                    break;
            }

            return options.order === 'desc' ? -comparison : comparison;
        });

        return sorted;
    }

    /**
     * Get all tags
     */
    async getTags(): Promise<string[]> {
        const data = await readTasksFile(this.cwd);
        return Object.keys(data);
    }

    /**
     * Create a new tag
     */
    async createTag(tagName: string): Promise<void> {
        const data = await readTasksFile(this.cwd);

        if (data[tagName]) {
            throw new Error(`Tag "${tagName}" already exists`);
        }

        data[tagName] = { tasks: [] };
        await writeTasksFile(data, this.cwd);
    }

    /**
     * Delete a tag
     */
    async deleteTag(tagName: string): Promise<void> {
        const data = await readTasksFile(this.cwd);

        if (!data[tagName]) {
            throw new Error(`Tag "${tagName}" does not exist`);
        }

        if (tagName === 'master') {
            throw new Error('Cannot delete the "master" tag');
        }

        delete data[tagName];
        await writeTasksFile(data, this.cwd);
    }
}
