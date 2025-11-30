#!/usr/bin/env node
import { Command } from 'commander';
import { intro, outro } from '@clack/prompts';
import color from 'picocolors'; // @clack/prompts uses picocolors internally usually, but let's stick to simple console for now or use chalk if installed. I added chalk to package.json.
import chalk from 'chalk';

import { initCommand } from './commands/init.js';
import { validateCommand } from './commands/validate.js';
import { aiPromptCommand } from './commands/ai-prompt.js';
import { templateCommand } from './commands/template.js';

const program = new Command();

program
    .name('sbbl')
    .description('SBBL CLI - Create high-quality Blueprints')
    .version('0.0.1');

program.addCommand(initCommand);
program.addCommand(validateCommand);
program.addCommand(aiPromptCommand);
program.addCommand(templateCommand);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
