import fs from 'fs-extra';
import { Blueprint } from './schema.js';

export class MarkdownParser {
    async parse(filePath: string): Promise<Partial<Blueprint>> {
        const content = await fs.readFile(filePath, 'utf-8');
        const lines = content.split('\n');

        const blueprint: any = {
            meta: {},
            spark: {},
            techStack: { frontend: [], backend: [], database: [], infrastructure: [], ai: [] },
            architecture: {},
            database: {},
            roadmap: [],
            businessRules: []
        };

        // Helper to extract value between markers or headers
        // This is a simplified parser. A robust one would use an AST (like unified/remark).
        // For MVP, we use regex and line scanning.

        // 1. Parse Meta (from blockquote or top section)
        // > **Version**: 1.0.0
        const versionMatch = content.match(/\*\*Version\*\*:\s*(.+)/);
        if (versionMatch) blueprint.meta.version = versionMatch[1].trim();

        const createdMatch = content.match(/\*\*Created\*\*:\s*(.+)/);
        if (createdMatch) blueprint.meta.createdAt = createdMatch[1].trim();

        const authorMatch = content.match(/\*\*Author\*\*:\s*(.+)/);
        if (authorMatch) blueprint.meta.author = authorMatch[1].trim();

        // Parse Name from H1
        const titleMatch = content.match(/^#\s+(.+)\s-\sBlueprint/m);
        if (titleMatch) blueprint.meta.name = titleMatch[1].trim();


        // 2. Parse Spark
        blueprint.spark.vision = this.extractSection(content, 'Vision');
        blueprint.spark.targetAudience = this.extractSection(content, 'Target Audience');
        blueprint.spark.problem = this.extractSection(content, 'The Problem');
        blueprint.spark.solution = this.extractSection(content, 'The Solution');

        // 3. Parse Tech Stack (Lists)
        blueprint.techStack.frontend = this.extractList(content, 'Frontend');
        blueprint.techStack.backend = this.extractList(content, 'Backend');
        blueprint.techStack.database = this.extractList(content, 'Database');
        blueprint.techStack.infrastructure = this.extractList(content, 'Infrastructure');
        blueprint.techStack.ai = this.extractList(content, 'AI Components');

        // 4. Architecture
        blueprint.architecture.auth = this.extractSection(content, 'Authentication');
        blueprint.architecture.dataFlow = this.extractSection(content, 'Data Flow');
        // Diagram is tricky, usually inside ```mermaid block
        const diagramMatch = content.match(/```mermaid([\s\S]*?)```/);
        if (diagramMatch) blueprint.architecture.diagram = diagramMatch[1].trim();

        // 5. Database Schema
        // Usually inside a code block under Database Schema section
        // Simplified: just check if section exists

        // 6. Roadmap
        // Complex parsing needed for roadmap items. 
        // For MVP validation, we might just check if the section exists and has content.

        return blueprint;
    }

    private extractSection(content: string, headerName: string): string {
        // Match content between ### HeaderName and the next ### or ---
        const regex = new RegExp(`###\\s+${headerName}\\s+([\\s\\S]*?)(?=(###|---|##|$))`, 'i');
        const match = content.match(regex);
        return match ? match[1].trim() : '';
    }

    private extractList(content: string, headerName: string): string[] {
        const sectionContent = this.extractSection(content, headerName);
        if (!sectionContent) return [];

        return sectionContent
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.startsWith('-'))
            .map(line => line.replace(/^-\s*/, '').trim())
            .filter(item => item !== '(Not specified)');
    }
}
