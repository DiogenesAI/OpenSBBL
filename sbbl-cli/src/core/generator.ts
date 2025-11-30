import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { Blueprint } from './schema.js';
import { writeFile, ensureDirectory, joinPaths, getTemplatePath } from '../utils/fs.js';

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class BlueprintGenerator {

    async generate(blueprint: Blueprint, outputDir: string): Promise<void> {
        // 1. Read Template
        let templateContent: string;
        try {
            const templatePath = await getTemplatePath('blueprint.hbs');
            templateContent = await fs.readFile(templatePath, 'utf-8');
        } catch (error) {
            throw new Error(`Could not find template. Error: ${error}`);
        }

        // 2. Compile Template
        const template = Handlebars.compile(templateContent);

        // 3. Render Content
        const markdownContent = template(blueprint);

        // 4. Write File
        const outputPath = joinPaths(outputDir, 'BLUEPRINT.md');
        await writeFile(outputPath, markdownContent);

        // 5. Create Memory Structure
        await this.createMemoryStructure(outputDir);

        // 6. Create Docs Structure (New Requirement)
        await this.createDocsStructure(outputDir);

        // 7. Create .sbblrc Config File
        const config = {
            version: '1.0.0',
            project: {
                name: blueprint.meta.name,
                created: blueprint.meta.createdAt
            },
            paths: {
                blueprint: './BLUEPRINT.md',
                memory: './memory',
                docs: './docs'
            }
        };

        await writeFile(joinPaths(outputDir, '.sbblrc'), JSON.stringify(config, null, 2));
    }

    private async createMemoryStructure(outputDir: string): Promise<void> {
        const memoryDirs = [
            'memory/0_past',
            'memory/1_present',
            'memory/2_future'
        ];

        for (const dir of memoryDirs) {
            const fullPath = joinPaths(outputDir, dir);
            await ensureDirectory(fullPath);
            await writeFile(joinPaths(fullPath, 'README.md'), `# ${dir.split('/')[1]} Context\n\nStore relevant documents here.`);
        }
    }

    private async createDocsStructure(outputDir: string): Promise<void> {
        const docsDirs = [
            'docs/docs_en',
            'docs/docs_vi'
        ];

        // English Content
        const enMethodology = `# SBBL Methodology

## 1. Philosophy
SBBL (Standard Blueprint-Based Learning) is a methodology designed to bridge the gap between human intent and AI execution.

## 2. Core Components
- **Blueprint**: The single source of truth.
- **Memory**: Context management (Past, Present, Future).
- **Docs**: Multilingual documentation.

## 3. Workflow
1. Define Blueprint.
2. Generate System Prompt.
3. Iterate with AI using Memory folders.
`;

        // Vietnamese Content
        const viMethodology = `# Phương Pháp Luận SBBL

## 1. Triết Lý
SBBL (Standard Blueprint-Based Learning) là phương pháp luận được thiết kế để thu hẹp khoảng cách giữa ý định của con người và khả năng thực thi của AI.

## 2. Thành Phần Cốt Lõi
- **Blueprint**: Nguồn sự thật duy nhất (Single Source of Truth).
- **Memory**: Quản lý ngữ cảnh (Quá khứ, Hiện tại, Tương lai).
- **Docs**: Tài liệu đa ngôn ngữ.

## 3. Quy Trình
1. Định nghĩa Blueprint.
2. Tạo System Prompt.
3. Tương tác với AI sử dụng thư mục Memory.
`;

        for (const dir of docsDirs) {
            const fullPath = joinPaths(outputDir, dir);
            await ensureDirectory(fullPath);

            const lang = dir.endsWith('vi') ? 'vi' : 'en';
            const readmeContent = lang === 'vi'
                ? `# Tài liệu dự án (Tiếng Việt)\n\nLưu trữ tài liệu chi tiết tại đây.`
                : `# Project Documentation (English)\n\nStore detailed documentation here.`;

            await writeFile(joinPaths(fullPath, 'README.md'), readmeContent);

            if (lang === 'vi') {
                await writeFile(joinPaths(fullPath, 'PHUONG_PHAP_SBBL.md'), viMethodology);
            } else {
                await writeFile(joinPaths(fullPath, 'SBBL_METHODOLOGY.md'), enMethodology);
            }
        }
    }
}
