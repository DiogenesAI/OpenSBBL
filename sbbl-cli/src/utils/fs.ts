import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export async function ensureDirectory(dirPath: string): Promise<void> {
    await fs.ensureDir(dirPath);
}

export async function writeFile(filePath: string, content: string): Promise<void> {
    await fs.outputFile(filePath, content, 'utf-8');
}

export async function pathExists(filePath: string): Promise<boolean> {
    return fs.pathExists(filePath);
}

export function getCurrentDirectory(): string {
    return process.cwd();
}

export function joinPaths(...paths: string[]): string {
    return path.join(...paths);
}

export async function getTemplatePath(templateName: string): Promise<string> {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Strategy 1: Production (dist/templates next to dist/index.js or dist/utils/fs.js)
    // If bundled to dist/index.js, __dirname is dist. Templates are in dist/templates.
    let potentialPath = path.join(__dirname, 'templates', templateName);

    // If fs.js is in dist/utils/, then we need to go up one level
    if (!await fs.pathExists(potentialPath)) {
        potentialPath = path.join(__dirname, '../templates', templateName);
    }

    if (await fs.pathExists(potentialPath)) {
        return potentialPath;
    }

    // Strategy 2: Development (src/templates)
    // Assuming we are in src/utils, go up to src, then templates
    potentialPath = path.join(__dirname, '../../src/templates', templateName);
    if (await fs.pathExists(potentialPath)) {
        return potentialPath;
    }

    throw new Error(`Template ${templateName} not found. Checked paths relative to ${__dirname}`);
}
