import { Command } from 'commander';
import { intro, outro, spinner, note } from '@clack/prompts';
import color from 'picocolors';
import path from 'path';
import fs from 'fs-extra';
import Handlebars from 'handlebars';
import clipboardy from 'clipboardy';
import { fileURLToPath } from 'url';
import { MarkdownParser } from '../core/parser.js';
import { pathExists, getCurrentDirectory, getTemplatePath } from '../utils/fs.js';

// Get current directory in ESM to locate templates
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const aiPromptCommand = new Command('ai-prompt')
    .description('Generate a System Prompt for AI based on the Blueprint')
    .argument('[file]', 'Path to BLUEPRINT.md', 'BLUEPRINT.md')
    .option('-c, --copy', 'Copy to clipboard automatically', true)
    .option('--no-copy', 'Do not copy to clipboard')
    .action(async (file, options) => {
        intro(color.bgCyan(color.black(' SBBL CLI - AI Prompt Generator ')));

        const filePath = path.resolve(getCurrentDirectory(), file);
        const s = spinner();

        s.start(`Reading ${file}...`);

        if (!await pathExists(filePath)) {
            s.stop('File not found');
            console.error(color.red(`❌ Error: Could not find file at ${filePath}`));
            process.exit(1);
        }

        try {
            // 1. Parse Blueprint
            const parser = new MarkdownParser();
            const blueprint = await parser.parse(filePath);

            // 2. Load Template
            const templatePath = await getTemplatePath('system-prompt.hbs');
            const templateContent = await fs.readFile(templatePath, 'utf-8');
            const template = Handlebars.compile(templateContent);

            // 3. Render Prompt
            const prompt = template(blueprint);

            s.stop('Prompt Generated');

            // 4. Output
            if (options.copy) {
                try {
                    await clipboardy.write(prompt);
                    note(color.green('✅ System Prompt copied to clipboard!'));
                } catch (err) {
                    console.warn(color.yellow('⚠️  Could not copy to clipboard (environment issue?). Printing to console instead:'));
                    console.log(color.dim('---------------------------------------------------'));
                    console.log(prompt);
                    console.log(color.dim('---------------------------------------------------'));
                }
            } else {
                console.log(color.dim('---------------------------------------------------'));
                console.log(prompt);
                console.log(color.dim('---------------------------------------------------'));
            }

            outro('Ready to paste into ChatGPT/Claude!');

        } catch (error) {
            s.stop('Error');
            console.error(color.red('An unexpected error occurred:'));
            console.error(error);
            process.exit(1);
        }
    });
