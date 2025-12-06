/**
 * Task interface and types for TaskFlow-CLI
 * Part of OpenSBBL - Task management for the BUILD phase
 */

/**
 * Task status workflow
 */
export type TaskStatus =
    | 'pending'      // Not started
    | 'in-progress'  // Currently working on
    | 'review'       // Ready for review
    | 'done'         // Completed
    | 'deferred'     // Postponed
    | 'cancelled';   // Cancelled

/**
 * Task priority levels
 */
export type TaskPriority = 'high' | 'medium' | 'low';

/**
 * Subtask interface
 */
export interface Subtask {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    dependencies: number[]; // Can reference other subtask IDs or parent task IDs
    details?: string;
}

/**
 * Main Task interface
 */
export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    dependencies: number[]; // IDs of tasks that must be completed first
    priority: TaskPriority;
    details?: string; // Implementation details
    testStrategy?: string; // How to verify completion
    subtasks: Subtask[];
    blueprintSection?: string; // Link to blueprint section (e.g., "Implementation Roadmap - Week 1")
    createdAt: string; // ISO 8601 format
    updatedAt: string; // ISO 8601 format
}

/**
 * Tag interface for multi-context task management
 */
export interface Tag {
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * Tag data structure containing tasks
 */
export interface TagData {
    tasks: Task[];
}

/**
 * Root tasks data structure
 * Each key is a tag name, value contains tasks for that tag
 */
export interface TasksData {
    [tagName: string]: TagData;
}

/**
 * State data structure
 * Stores current application state
 */
export interface StateData {
    currentTag: string; // Currently active tag
    version: string; // TaskFlow-CLI version
}

/**
 * Configuration data structure
 */
export interface ConfigData {
    defaultTag: string;
    autoSave: boolean;
    version: string;
}

/**
 * Helper type for task creation (without auto-generated fields)
 */
export type TaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'subtasks'> & {
    subtasks?: Subtask[];
};

/**
 * Helper type for subtask creation
 */
export type SubtaskInput = Omit<Subtask, 'id'>;

/**
 * Task filter options
 */
export interface TaskFilter {
    status?: TaskStatus | TaskStatus[];
    priority?: TaskPriority | TaskPriority[];
    hasSubtasks?: boolean;
    hasDependencies?: boolean;
}

/**
 * Task sort options
 */
export type TaskSortBy = 'id' | 'priority' | 'status' | 'createdAt' | 'updatedAt';
export type TaskSortOrder = 'asc' | 'desc';

export interface TaskSortOptions {
    by: TaskSortBy;
    order: TaskSortOrder;
}
