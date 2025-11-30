import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MarkdownParser } from '../../src/core/parser';
import fs from 'fs-extra';

vi.mock('fs-extra');

describe('MarkdownParser', () => {
    let parser: MarkdownParser;

    beforeEach(() => {
        parser = new MarkdownParser();
        vi.resetAllMocks();
    });

    it('should parse a valid blueprint markdown file', async () => {
        const mockContent = `
# My Project - Blueprint

> **Version**: 1.0.0
> **Created**: 2023-01-01
> **Author**: Test User

### Vision
To change the world.

### Target Audience
Developers

### The Problem
Coding is hard.

### The Solution
Make it easy.

### Frontend
- React
- TypeScript

### Backend
- Node.js

### Authentication
JWT

### Data Flow
Client -> Server

\`\`\`mermaid
graph TD
A --> B
\`\`\`
    `;

        vi.mocked(fs.readFile).mockResolvedValue(mockContent);

        const result = await parser.parse('dummy/path.md');

        expect(result.meta?.name).toBe('My Project');
        expect(result.meta?.version).toBe('1.0.0');
        expect(result.spark?.vision).toBe('To change the world.');
        expect(result.techStack?.frontend).toContain('React');
        expect(result.techStack?.backend).toContain('Node.js');
        expect(result.architecture?.auth).toBe('JWT');
        expect(result.architecture?.diagram).toContain('graph TD');
    });

    it('should handle missing sections gracefully', async () => {
        const mockContent = `
# Empty Project - Blueprint
    `;

        vi.mocked(fs.readFile).mockResolvedValue(mockContent);

        const result = await parser.parse('dummy/path.md');

        expect(result.meta?.name).toBe('Empty Project');
        expect(result.techStack?.frontend).toEqual([]);
    });
});
