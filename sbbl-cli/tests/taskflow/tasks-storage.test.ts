/**
 * Tests for tasks-storage.ts
 * Testing Task CRUD operations
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import { TaskStorage } from '../src/taskflow/storage/tasks-storage.js';
import { initializeTaskflow } from '../src/taskflow/storage/file-manager.js';
import type { Task, TaskInput, SubtaskInput } from '../src/taskflow/models/task.js';

const TEST_DIR = path.join(process.cwd(), 'test-temp-storage');

describe('TaskStorage', () => {
    let storage: TaskStorage;

    beforeEach(async () => {
        await fs.ensureDir(TEST_DIR);
        await initializeTaskflow(TEST_DIR);
        storage = new TaskStorage(TEST_DIR);
    });

    afterEach(async () => {
        await fs.remove(TEST_DIR);
    });

    describe('Task CRUD operations', () => {
        it('should create a task with auto-generated ID', async () => {
            const input: TaskInput = {
                title: 'Test Task',
                description: 'Test description',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            };

            const task = await storage.createTask(input);

            expect(task.id).toBe(1);
            expect(task.title).toBe('Test Task');
            expect(task.status).toBe('pending');
            expect(task.subtasks).toEqual([]);
            expect(task.createdAt).toBeDefined();
            expect(task.updatedAt).toBeDefined();
        });

        it('should auto-increment task IDs', async () => {
            const input: TaskInput = {
                title: 'Task',
                description: 'Description',
                status: 'pending',
                dependencies: [],
                priority: 'medium'
            };

            const task1 = await storage.createTask(input);
            const task2 = await storage.createTask(input);
            const task3 = await storage.createTask(input);

            expect(task1.id).toBe(1);
            expect(task2.id).toBe(2);
            expect(task3.id).toBe(3);
        });

        it('should get task by ID', async () => {
            const input: TaskInput = {
                title: 'Find Me',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'low'
            };

            const created = await storage.createTask(input);
            const found = await storage.getTask(created.id);

            expect(found).toEqual(created);
        });

        it('should return null for non-existent task', async () => {
            const task = await storage.getTask(999);
            expect(task).toBeNull();
        });

        it('should get all tasks', async () => {
            await storage.createTask({
                title: 'Task 1',
                description: 'Desc 1',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            });

            await storage.createTask({
                title: 'Task 2',
                description: 'Desc 2',
                status: 'in-progress',
                dependencies: [],
                priority: 'medium'
            });

            const tasks = await storage.getTasks();

            expect(tasks).toHaveLength(2);
            expect(tasks[0].title).toBe('Task 1');
            expect(tasks[1].title).toBe('Task 2');
        });

        it('should update a task', async () => {
            const task = await storage.createTask({
                title: 'Original',
                description: 'Original desc',
                status: 'pending',
                dependencies: [],
                priority: 'low'
            });

            const updated = await storage.updateTask(task.id, {
                title: 'Updated',
                status: 'in-progress',
                priority: 'high'
            });

            expect(updated).not.toBeNull();
            expect(updated!.title).toBe('Updated');
            expect(updated!.status).toBe('in-progress');
            expect(updated!.priority).toBe('high');
            expect(updated!.description).toBe('Original desc'); // Unchanged
            expect(updated!.updatedAt).not.toBe(task.updatedAt);
        });

        it('should preserve ID and createdAt when updating', async () => {
            const task = await storage.createTask({
                title: 'Test',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'medium'
            });

            const updated = await storage.updateTask(task.id, {
                title: 'Updated'
            });

            expect(updated!.id).toBe(task.id);
            expect(updated!.createdAt).toBe(task.createdAt);
        });

        it('should delete a task', async () => {
            const task = await storage.createTask({
                title: 'Delete Me',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'low'
            });

            const deleted = await storage.deleteTask(task.id);
            expect(deleted).toBe(true);

            const found = await storage.getTask(task.id);
            expect(found).toBeNull();
        });

        it('should return false when deleting non-existent task', async () => {
            const deleted = await storage.deleteTask(999);
            expect(deleted).toBe(false);
        });
    });

    describe('Task status operations', () => {
        it('should update task status', async () => {
            const task = await storage.createTask({
                title: 'Test',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'medium'
            });

            const updated = await storage.updateTaskStatus(task.id, 'in-progress');

            expect(updated).not.toBeNull();
            expect(updated!.status).toBe('in-progress');
        });

        it('should cascade done status to all subtasks', async () => {
            const task = await storage.createTask({
                title: 'Parent',
                description: 'Test',
                status: 'in-progress',
                dependencies: [],
                priority: 'high'
            });

            // Add subtasks
            await storage.addSubtask(task.id, {
                title: 'Subtask 1',
                description: 'Test',
                status: 'in-progress',
                dependencies: []
            });

            await storage.addSubtask(task.id, {
                title: 'Subtask 2',
                description: 'Test',
                status: 'pending',
                dependencies: []
            });

            // Mark parent as done
            const updated = await storage.updateTaskStatus(task.id, 'done');

            expect(updated!.status).toBe('done');
            expect(updated!.subtasks).toHaveLength(2);
            expect(updated!.subtasks[0].status).toBe('done');
            expect(updated!.subtasks[1].status).toBe('done');
        });
    });

    describe('Subtask operations', () => {
        let parentTask: Task;

        beforeEach(async () => {
            parentTask = await storage.createTask({
                title: 'Parent Task',
                description: 'Parent',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            });
        });

        it('should add subtask to task', async () => {
            const subtaskInput: SubtaskInput = {
                title: 'Subtask 1',
                description: 'First subtask',
                status: 'pending',
                dependencies: []
            };

            const updated = await storage.addSubtask(parentTask.id, subtaskInput);

            expect(updated).not.toBeNull();
            expect(updated!.subtasks).toHaveLength(1);
            expect(updated!.subtasks[0].id).toBe(1);
            expect(updated!.subtasks[0].title).toBe('Subtask 1');
        });

        it('should auto-increment subtask IDs', async () => {
            await storage.addSubtask(parentTask.id, {
                title: 'Sub 1',
                description: 'Test',
                status: 'pending',
                dependencies: []
            });

            await storage.addSubtask(parentTask.id, {
                title: 'Sub 2',
                description: 'Test',
                status: 'pending',
                dependencies: []
            });

            const task = await storage.getTask(parentTask.id);

            expect(task!.subtasks[0].id).toBe(1);
            expect(task!.subtasks[1].id).toBe(2);
        });

        it('should update subtask', async () => {
            await storage.addSubtask(parentTask.id, {
                title: 'Original',
                description: 'Original desc',
                status: 'pending',
                dependencies: []
            });

            const updated = await storage.updateSubtask(parentTask.id, 1, {
                title: 'Updated',
                status: 'done'
            });

            expect(updated!.subtasks[0].title).toBe('Updated');
            expect(updated!.subtasks[0].status).toBe('done');
            expect(updated!.subtasks[0].description).toBe('Original desc');
        });

        it('should delete subtask', async () => {
            await storage.addSubtask(parentTask.id, {
                title: 'Sub 1',
                description: 'Test',
                status: 'pending',
                dependencies: []
            });

            await storage.addSubtask(parentTask.id, {
                title: 'Sub 2',
                description: 'Test',
                status: 'pending',
                dependencies: []
            });

            const updated = await storage.deleteSubtask(parentTask.id, 1);

            expect(updated!.subtasks).toHaveLength(1);
            expect(updated!.subtasks[0].id).toBe(2);
        });

        it('should return null when updating non-existent subtask', async () => {
            const updated = await storage.updateSubtask(parentTask.id, 999, {
                title: 'Updated'
            });

            expect(updated).toBeNull();
        });
    });

    describe('Filtering operations', () => {
        beforeEach(async () => {
            await storage.createTask({
                title: 'Task 1',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            });

            await storage.createTask({
                title: 'Task 2',
                description: 'Test',
                status: 'in-progress',
                dependencies: [1],
                priority: 'medium'
            });

            await storage.createTask({
                title: 'Task 3',
                description: 'Test',
                status: 'done',
                dependencies: [],
                priority: 'low'
            });
        });

        it('should filter by single status', async () => {
            const tasks = await storage.filterTasks({ status: 'pending' });

            expect(tasks).toHaveLength(1);
            expect(tasks[0].title).toBe('Task 1');
        });

        it('should filter by multiple statuses', async () => {
            const tasks = await storage.filterTasks({
                status: ['pending', 'done']
            });

            expect(tasks).toHaveLength(2);
            expect(tasks.map(t => t.title)).toContain('Task 1');
            expect(tasks.map(t => t.title)).toContain('Task 3');
        });

        it('should filter by priority', async () => {
            const tasks = await storage.filterTasks({ priority: 'high' });

            expect(tasks).toHaveLength(1);
            expect(tasks[0].title).toBe('Task 1');
        });

        it('should filter by hasDependencies', async () => {
            const withDeps = await storage.filterTasks({ hasDependencies: true });
            const withoutDeps = await storage.filterTasks({ hasDependencies: false });

            expect(withDeps).toHaveLength(1);
            expect(withDeps[0].title).toBe('Task 2');
            expect(withoutDeps).toHaveLength(2);
        });

        it('should combine multiple filters', async () => {
            const tasks = await storage.filterTasks({
                status: ['pending', 'in-progress'],
                priority: 'high'
            });

            expect(tasks).toHaveLength(1);
            expect(tasks[0].title).toBe('Task 1');
        });
    });

    describe('Sorting operations', () => {
        beforeEach(async () => {
            await storage.createTask({
                title: 'C',
                description: 'Test',
                status: 'done',
                dependencies: [],
                priority: 'low'
            });

            await storage.createTask({
                title: 'A',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            });

            await storage.createTask({
                title: 'B',
                description: 'Test',
                status: 'in-progress',
                dependencies: [],
                priority: 'medium'
            });
        });

        it('should sort by ID ascending', async () => {
            const tasks = await storage.getTasks();
            const sorted = storage.sortTasks(tasks, { by: 'id', order: 'asc' });

            expect(sorted.map(t => t.id)).toEqual([1, 2, 3]);
        });

        it('should sort by ID descending', async () => {
            const tasks = await storage.getTasks();
            const sorted = storage.sortTasks(tasks, { by: 'id', order: 'desc' });

            expect(sorted.map(t => t.id)).toEqual([3, 2, 1]);
        });

        it('should sort by priority', async () => {
            const tasks = await storage.getTasks();
            const sorted = storage.sortTasks(tasks, { by: 'priority', order: 'asc' });

            expect(sorted.map(t => t.priority)).toEqual(['high', 'medium', 'low']);
        });

        it('should sort by status', async () => {
            const tasks = await storage.getTasks();
            const sorted = storage.sortTasks(tasks, { by: 'status', order: 'asc' });

            expect(sorted.map(t => t.status)).toEqual(['done', 'in-progress', 'pending']);
        });
    });

    describe('Tag operations', () => {
        it('should get all tags', async () => {
            const tags = await storage.getTags();

            expect(tags).toContain('master');
            expect(tags).toHaveLength(1);
        });

        it('should create new tag', async () => {
            await storage.createTag('feature-branch');

            const tags = await storage.getTags();

            expect(tags).toContain('master');
            expect(tags).toContain('feature-branch');
            expect(tags).toHaveLength(2);
        });

        it('should throw error when creating duplicate tag', async () => {
            await storage.createTag('test');

            await expect(storage.createTag('test')).rejects.toThrow('already exists');
        });

        it('should delete tag', async () => {
            await storage.createTag('temp');
            await storage.deleteTag('temp');

            const tags = await storage.getTags();

            expect(tags).not.toContain('temp');
        });

        it('should throw error when deleting master tag', async () => {
            await expect(storage.deleteTag('master')).rejects.toThrow('Cannot delete');
        });

        it('should throw error when deleting non-existent tag', async () => {
            await expect(storage.deleteTag('nonexistent')).rejects.toThrow('does not exist');
        });

        it('should isolate tasks between tags', async () => {
            // Create task in master
            await storage.createTask({
                title: 'Master Task',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            });

            // Create new tag and task
            await storage.createTag('feature');
            await storage.createTask({
                title: 'Feature Task',
                description: 'Test',
                status: 'pending',
                dependencies: [],
                priority: 'high'
            }, 'feature');

            const masterTasks = await storage.getTasks('master');
            const featureTasks = await storage.getTasks('feature');

            expect(masterTasks).toHaveLength(1);
            expect(masterTasks[0].title).toBe('Master Task');
            expect(featureTasks).toHaveLength(1);
            expect(featureTasks[0].title).toBe('Feature Task');
        });
    });
});
