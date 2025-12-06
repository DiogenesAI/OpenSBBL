/**
 * File Manager for TaskFlow-CLI
 * Handles all file I/O operations for tasks, state, and config
 */

import fs from 'fs-extra';
import path from 'path';
import type { TasksData, StateData, ConfigData } from '../models/task.js';

/**
 * Default paths for TaskFlow files
 */
export const TASKFLOW_DIR = '.sbbl';
export const TASKS_FILE = 'tasks.json';
export const STATE_FILE = 'state.json';
export const CONFIG_FILE = 'config.json';

/**
 * Get the .sbbl directory path
 */
export function getTaskflowDir(cwd: string = process.cwd()): string {
    return path.join(cwd, TASKFLOW_DIR);
}

/**
 * Get the tasks.json file path
 */
export function getTasksFilePath(cwd: string = process.cwd()): string {
    return path.join(getTaskflowDir(cwd), TASKS_FILE);
}

/**
 * Get the state.json file path
 */
export function getStateFilePath(cwd: string = process.cwd()): string {
    return path.join(getTaskflowDir(cwd), STATE_FILE);
}

/**
 * Get the config.json file path
 */
export function getConfigFilePath(cwd: string = process.cwd()): string {
    return path.join(getTaskflowDir(cwd), CONFIG_FILE);
}

/**
 * Check if .sbbl directory exists
 */
export async function taskflowDirExists(cwd: string = process.cwd()): Promise<boolean> {
    return fs.pathExists(getTaskflowDir(cwd));
}

/**
 * Create .sbbl directory if it doesn't exist
 */
export async function ensureTaskflowDir(cwd: string = process.cwd()): Promise<void> {
    await fs.ensureDir(getTaskflowDir(cwd));
}

/**
 * Read tasks.json file
 */
export async function readTasksFile(cwd: string = process.cwd()): Promise<TasksData> {
    const filePath = getTasksFilePath(cwd);

    if (!await fs.pathExists(filePath)) {
        // Return default structure with 'master' tag
        return {
            master: {
                tasks: []
            }
        };
    }

    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content) as TasksData;
}

/**
 * Write tasks.json file
 */
export async function writeTasksFile(
    data: TasksData,
    cwd: string = process.cwd()
): Promise<void> {
    await ensureTaskflowDir(cwd);
    const filePath = getTasksFilePath(cwd);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Read state.json file
 */
export async function readStateFile(cwd: string = process.cwd()): Promise<StateData> {
    const filePath = getStateFilePath(cwd);

    if (!await fs.pathExists(filePath)) {
        // Return default state
        return {
            currentTag: 'master',
            version: '1.0.0'
        };
    }

    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content) as StateData;
}

/**
 * Write state.json file
 */
export async function writeStateFile(
    data: StateData,
    cwd: string = process.cwd()
): Promise<void> {
    await ensureTaskflowDir(cwd);
    const filePath = getStateFilePath(cwd);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Read config.json file
 */
export async function readConfigFile(cwd: string = process.cwd()): Promise<ConfigData> {
    const filePath = getConfigFilePath(cwd);

    if (!await fs.pathExists(filePath)) {
        // Return default config
        return {
            defaultTag: 'master',
            autoSave: true,
            version: '1.0.0'
        };
    }

    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content) as ConfigData;
}

/**
 * Write config.json file
 */
export async function writeConfigFile(
    data: ConfigData,
    cwd: string = process.cwd()
): Promise<void> {
    await ensureTaskflowDir(cwd);
    const filePath = getConfigFilePath(cwd);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Initialize TaskFlow directory structure
 */
export async function initializeTaskflow(cwd: string = process.cwd()): Promise<void> {
    await ensureTaskflowDir(cwd);

    // Create default files if they don't exist
    if (!await fs.pathExists(getTasksFilePath(cwd))) {
        await writeTasksFile({
            master: {
                tasks: []
            }
        }, cwd);
    }

    if (!await fs.pathExists(getStateFilePath(cwd))) {
        await writeStateFile({
            currentTag: 'master',
            version: '1.0.0'
        }, cwd);
    }

    if (!await fs.pathExists(getConfigFilePath(cwd))) {
        await writeConfigFile({
            defaultTag: 'master',
            autoSave: true,
            version: '1.0.0'
        }, cwd);
    }
}
