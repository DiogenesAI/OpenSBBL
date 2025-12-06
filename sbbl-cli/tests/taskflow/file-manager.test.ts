/**
 * Tests for file-manager.ts
 * Testing file I/O operations for TaskFlow-CLI
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import {
    getTaskflowDir,
    getTasksFilePath,
    getStateFilePath,
    getConfigFilePath,
    taskflowDirExists,
    ensureTaskflowDir,
    readTasksFile,
    writeTasksFile,
    readStateFile,
    writeStateFile,
    readConfigFile,
    writeConfigFile,
    initializeTaskflow
} from '../src/taskflow/storage/file-manager.js';
import type { TasksData, StateData, ConfigData } from '../src/taskflow/models/task.js';

const TEST_DIR = path.join(process.cwd(), 'test-temp');

describe('file-manager', () => {
    beforeEach(async () => {
        // Create test directory
        await fs.ensureDir(TEST_DIR);
    });

    afterEach(async () => {
        // Clean up test directory
        await fs.remove(TEST_DIR);
    });

    describe('Path helpers', () => {
        it('should return correct taskflow directory path', () => {
            const dir = getTaskflowDir(TEST_DIR);
            expect(dir).toBe(path.join(TEST_DIR, '.sbbl'));
        });

        it('should return correct tasks file path', () => {
            const filePath = getTasksFilePath(TEST_DIR);
            expect(filePath).toBe(path.join(TEST_DIR, '.sbbl', 'tasks.json'));
        });

        it('should return correct state file path', () => {
            const filePath = getStateFilePath(TEST_DIR);
            expect(filePath).toBe(path.join(TEST_DIR, '.sbbl', 'state.json'));
        });

        it('should return correct config file path', () => {
            const filePath = getConfigFilePath(TEST_DIR);
            expect(filePath).toBe(path.join(TEST_DIR, '.sbbl', 'config.json'));
        });
    });

    describe('Directory operations', () => {
        it('should check if taskflow directory exists', async () => {
            expect(await taskflowDirExists(TEST_DIR)).toBe(false);

            await ensureTaskflowDir(TEST_DIR);

            expect(await taskflowDirExists(TEST_DIR)).toBe(true);
        });

        it('should create taskflow directory', async () => {
            await ensureTaskflowDir(TEST_DIR);

            const dirPath = getTaskflowDir(TEST_DIR);
            expect(await fs.pathExists(dirPath)).toBe(true);
        });

        it('should not fail if directory already exists', async () => {
            await ensureTaskflowDir(TEST_DIR);
            await ensureTaskflowDir(TEST_DIR); // Should not throw

            expect(await taskflowDirExists(TEST_DIR)).toBe(true);
        });
    });

    describe('tasks.json operations', () => {
        it('should return default tasks data when file does not exist', async () => {
            const data = await readTasksFile(TEST_DIR);

            expect(data).toEqual({
                master: {
                    tasks: []
                }
            });
        });

        it('should write and read tasks data', async () => {
            const testData: TasksData = {
                master: {
                    tasks: [
                        {
                            id: 1,
                            title: 'Test Task',
                            description: 'Test description',
                            status: 'pending',
                            dependencies: [],
                            priority: 'high',
                            subtasks: [],
                            createdAt: '2025-12-02T10:00:00Z',
                            updatedAt: '2025-12-02T10:00:00Z'
                        }
                    ]
                }
            };

            await writeTasksFile(testData, TEST_DIR);
            const readData = await readTasksFile(TEST_DIR);

            expect(readData).toEqual(testData);
        });

        it('should create .sbbl directory when writing tasks', async () => {
            const testData: TasksData = {
                master: { tasks: [] }
            };

            await writeTasksFile(testData, TEST_DIR);

            expect(await taskflowDirExists(TEST_DIR)).toBe(true);
        });

        it('should format JSON with proper indentation', async () => {
            const testData: TasksData = {
                master: { tasks: [] }
            };

            await writeTasksFile(testData, TEST_DIR);

            const filePath = getTasksFilePath(TEST_DIR);
            const content = await fs.readFile(filePath, 'utf-8');

            // Check for proper indentation (2 spaces)
            expect(content).toContain('  "master"');
        });
    });

    describe('state.json operations', () => {
        it('should return default state when file does not exist', async () => {
            const data = await readStateFile(TEST_DIR);

            expect(data).toEqual({
                currentTag: 'master',
                version: '1.0.0'
            });
        });

        it('should write and read state data', async () => {
            const testData: StateData = {
                currentTag: 'feature-branch',
                version: '1.0.0'
            };

            await writeStateFile(testData, TEST_DIR);
            const readData = await readStateFile(TEST_DIR);

            expect(readData).toEqual(testData);
        });
    });

    describe('config.json operations', () => {
        it('should return default config when file does not exist', async () => {
            const data = await readConfigFile(TEST_DIR);

            expect(data).toEqual({
                defaultTag: 'master',
                autoSave: true,
                version: '1.0.0'
            });
        });

        it('should write and read config data', async () => {
            const testData: ConfigData = {
                defaultTag: 'main',
                autoSave: false,
                version: '1.0.0'
            };

            await writeConfigFile(testData, TEST_DIR);
            const readData = await readConfigFile(TEST_DIR);

            expect(readData).toEqual(testData);
        });
    });

    describe('initializeTaskflow', () => {
        it('should create all necessary files and directories', async () => {
            await initializeTaskflow(TEST_DIR);

            // Check directory exists
            expect(await taskflowDirExists(TEST_DIR)).toBe(true);

            // Check all files exist
            expect(await fs.pathExists(getTasksFilePath(TEST_DIR))).toBe(true);
            expect(await fs.pathExists(getStateFilePath(TEST_DIR))).toBe(true);
            expect(await fs.pathExists(getConfigFilePath(TEST_DIR))).toBe(true);
        });

        it('should create files with default data', async () => {
            await initializeTaskflow(TEST_DIR);

            const tasks = await readTasksFile(TEST_DIR);
            const state = await readStateFile(TEST_DIR);
            const config = await readConfigFile(TEST_DIR);

            expect(tasks).toEqual({ master: { tasks: [] } });
            expect(state).toEqual({ currentTag: 'master', version: '1.0.0' });
            expect(config).toEqual({ defaultTag: 'master', autoSave: true, version: '1.0.0' });
        });

        it('should not overwrite existing files', async () => {
            // Create custom data
            const customTasks: TasksData = {
                master: {
                    tasks: [
                        {
                            id: 1,
                            title: 'Existing Task',
                            description: 'Should not be overwritten',
                            status: 'done',
                            dependencies: [],
                            priority: 'high',
                            subtasks: [],
                            createdAt: '2025-12-01T10:00:00Z',
                            updatedAt: '2025-12-01T10:00:00Z'
                        }
                    ]
                }
            };

            await writeTasksFile(customTasks, TEST_DIR);

            // Initialize (should not overwrite)
            await initializeTaskflow(TEST_DIR);

            // Check data is preserved
            const tasks = await readTasksFile(TEST_DIR);
            expect(tasks).toEqual(customTasks);
        });
    });
});
