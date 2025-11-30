import { Command } from 'commander';
import { intro, outro, note } from '@clack/prompts';
import color from 'picocolors';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { getCurrentDirectory, pathExists } from '../utils/fs.js';

// Define global template storage path: ~/.sbbl/templates
const HOME_DIR = os.homedir();
const TEMPLATE_STORAGE_DIR = path.join(HOME_DIR, '.sbbl', 'templates');

export const templateCommand = new Command('template')
    .description('Manage SBBL templates');

templateCommand
    .command('list')
    .description('List all available templates')
    .action(async () => {
        intro(color.bgCyan(color.black(' SBBL CLI - Template Manager ')));

        try {
            await fs.ensureDir(TEMPLATE_STORAGE_DIR);
            const files = await fs.readdir(TEMPLATE_STORAGE_DIR);
            const templates = files.filter(f => f.endsWith('.md'));

            if (templates.length === 0) {
                console.log(color.yellow('No templates found.'));
                console.log(color.dim(`Create one using: sbbl template create <name>`));
            } else {
                console.log(color.green(`Found ${templates.length} template(s):`));
                templates.forEach(t => {
                    console.log(`- ${color.bold(t.replace('.md', ''))}`);
                });
            }
        } catch (error) {
            console.error(color.red('Failed to list templates.'));
        }
        outro('Done');
    });

templateCommand
    .command('create')
    .description('Create a new template from the current BLUEPRINT.md')
    .argument('<name>', 'Name of the template (e.g., saas-starter)')
    .action(async (name) => {
        intro(color.bgCyan(color.black(' SBBL CLI - Save Template ')));

        const currentBlueprintPath = path.join(getCurrentDirectory(), 'BLUEPRINT.md');
        const targetPath = path.join(TEMPLATE_STORAGE_DIR, `${name}.md`);

        if (!await pathExists(currentBlueprintPath)) {
            console.error(color.red('❌ Error: No BLUEPRINT.md found in current directory.'));
            process.exit(1);
        }

        try {
            await fs.ensureDir(TEMPLATE_STORAGE_DIR);

            // Check if template exists
            if (await pathExists(targetPath)) {
                console.warn(color.yellow(`⚠️  Template "${name}" already exists. Overwriting...`));
            }

            await fs.copy(currentBlueprintPath, targetPath);

            note(color.green(`✅ Template saved to: ${targetPath}`));
            console.log(color.dim('You can now use this template in future projects (feature coming soon).'));

        } catch (error) {
            console.error(color.red('Failed to create template.'));
            console.error(error);
        }
        outro('Done');
    });
