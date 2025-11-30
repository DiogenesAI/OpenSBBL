import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BlueprintGenerator } from '../../src/core/generator';
import fs from 'fs-extra';
import path from 'path';

vi.mock('fs-extra');
vi.mock('handlebars', () => ({
    default: {
        compile: () => () => '# Mocked Markdown Content',
    },
}));

describe('BlueprintGenerator', () => {
    let generator: BlueprintGenerator;

    beforeEach(() => {
        generator = new BlueprintGenerator();
        vi.resetAllMocks();
        // Mock pathExists to return true for template check
        vi.mocked(fs.pathExists).mockResolvedValue(true);
        vi.mocked(fs.readFile).mockResolvedValue('template content');
    });

    it('should generate blueprint and memory structure', async () => {
        const mockBlueprint: any = {
            meta: { name: 'Test Project', createdAt: '2023' },
        };

        await generator.generate(mockBlueprint, '/output/dir');

        // Check if BLUEPRINT.md was written
        expect(fs.outputFile).toHaveBeenCalledWith(
            expect.stringContaining('BLUEPRINT.md'),
            expect.stringContaining('# Mocked Markdown Content'),
            'utf-8'
        );

        // Check if memory folders were created
        expect(fs.ensureDir).toHaveBeenCalledWith(expect.stringContaining('memory'));

        // Check if .sbblrc was created
        expect(fs.outputFile).toHaveBeenCalledWith(
            expect.stringContaining('.sbblrc'),
            expect.stringContaining('"name": "Test Project"'),
            'utf-8'
        );
    });
});
