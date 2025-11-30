import { Command } from 'commander';
import { intro, outro, spinner, note } from '@clack/prompts';
import color from 'picocolors';
import path from 'path';
import { MarkdownParser } from '../core/parser.js';
import { BlueprintSchema } from '../core/schema.js';
import { pathExists, getCurrentDirectory } from '../utils/fs.js';
import { z } from 'zod';

export const validateCommand = new Command('validate')
    .description('Validate an existing Blueprint file')
    .argument('[file]', 'Path to BLUEPRINT.md', 'BLUEPRINT.md')
    .action(async (file) => {
        intro(color.bgCyan(color.black(' SBBL CLI - Validator ')));

        const filePath = path.resolve(getCurrentDirectory(), file);
        const s = spinner();

        s.start(`Reading ${file}...`);

        if (!await pathExists(filePath)) {
            s.stop('File not found');
            console.error(color.red(`❌ Error: Could not find file at ${filePath}`));
            process.exit(1);
        }

        try {
            const parser = new MarkdownParser();
            const parsedData = await parser.parse(filePath);

            s.message('Validating content...');

            // Validate against Zod Schema
            const result = BlueprintSchema.safeParse(parsedData);

            if (result.success) {
                s.stop('Validation Passed');
                note(color.green('✅ Blueprint is valid and follows SBBL standards!'));
            } else {
                s.stop('Validation Failed');
                console.error(color.red('❌ Blueprint has errors:'));

                result.error.issues.forEach((issue) => {
                    const path = issue.path.join(' -> ');
                    console.error(color.yellow(`  • [${path}]: ${issue.message}`));
                });

                process.exit(1);
            }

        } catch (error) {
            s.stop('Error');
            console.error(color.red('An unexpected error occurred during validation:'));
            console.error(error);
            process.exit(1);
        }

        outro('Validation complete.');
    });
