import { Command } from 'commander';
import { intro, outro, text, select, multiselect, confirm, spinner, isCancel, cancel } from '@clack/prompts';
import color from 'picocolors';
import { BlueprintSchema, Blueprint } from '../core/schema.js';
import { BlueprintGenerator } from '../core/generator.js';
import { getCurrentDirectory } from '../utils/fs.js';

// Helper to handle cancellation
function handleCancel(value: any) {
    if (isCancel(value)) {
        cancel('Operation cancelled.');
        process.exit(0);
    }
    return value;
}

export const initCommand = new Command('init')
    .description('Initialize a new SBBL Blueprint')
    .action(async () => {
        intro(color.bgCyan(color.black(' SBBL CLI - Blueprint Generator ')));

        const projectInfo = await group({
            name: () => text({
                message: 'What is the name of your project?',
                placeholder: 'my-awesome-app',
                validate: (value) => {
                    if (!value) return 'Please enter a name.';
                },
            }),
            vision: () => text({
                message: 'What is your 1-sentence vision?',
                placeholder: 'To revolutionize the way people...',
            }),
            targetAudience: () => text({
                message: 'Who is your target audience?',
                placeholder: 'Developers, Students, etc.',
            }),
            problem: () => text({
                message: 'What problem are you solving?',
            }),
            solution: () => text({
                message: 'What is your solution?',
            }),
        });

        const techStack = await group({
            frontend: () => multiselect({
                message: 'Select Frontend Technologies',
                options: [
                    { value: 'React', label: 'React' },
                    { value: 'Next.js', label: 'Next.js' },
                    { value: 'Vue', label: 'Vue' },
                    { value: 'Svelte', label: 'Svelte' },
                    { value: 'TailwindCSS', label: 'TailwindCSS' },
                    { value: 'TypeScript', label: 'TypeScript' },
                ],
                required: false,
            }),
            backend: () => multiselect({
                message: 'Select Backend Technologies',
                options: [
                    { value: 'Node.js', label: 'Node.js' },
                    { value: 'Express', label: 'Express' },
                    { value: 'NestJS', label: 'NestJS' },
                    { value: 'Python', label: 'Python' },
                    { value: 'Go', label: 'Go' },
                    { value: 'Supabase', label: 'Supabase' },
                    { value: 'Firebase', label: 'Firebase' },
                ],
                required: false,
            }),
            database: () => multiselect({
                message: 'Select Database',
                options: [
                    { value: 'PostgreSQL', label: 'PostgreSQL' },
                    { value: 'MongoDB', label: 'MongoDB' },
                    { value: 'MySQL', label: 'MySQL' },
                    { value: 'Redis', label: 'Redis' },
                    { value: 'SQLite', label: 'SQLite' },
                ],
                required: false,
            }),
            ai: () => multiselect({
                message: 'Select AI Providers',
                options: [
                    { value: 'OpenAI', label: 'OpenAI' },
                    { value: 'Anthropic', label: 'Anthropic' },
                    { value: 'Google Gemini', label: 'Google Gemini' },
                    { value: 'HuggingFace', label: 'HuggingFace' },
                    { value: 'Local LLM', label: 'Local LLM' },
                ],
                required: false,
            }),
        });

        const architecture = await group({
            auth: () => select({
                message: 'Authentication Strategy?',
                options: [
                    { value: 'None', label: 'None' },
                    { value: 'JWT', label: 'JWT Custom' },
                    { value: 'NextAuth', label: 'NextAuth.js' },
                    { value: 'Clerk', label: 'Clerk' },
                    { value: 'Supabase Auth', label: 'Supabase Auth' },
                    { value: 'Firebase Auth', label: 'Firebase Auth' },
                ],
            }),
        });

        const s = spinner();
        s.start('Generating Blueprint...');

        // Construct Blueprint Object
        const blueprintData: Blueprint = {
            meta: {
                name: projectInfo.name,
                version: '0.1.0',
                createdAt: new Date().toISOString(),
                author: 'User', // Could ask for this too
            },
            spark: {
                vision: projectInfo.vision,
                targetAudience: projectInfo.targetAudience,
                problem: projectInfo.problem,
                solution: projectInfo.solution,
            },
            techStack: {
                frontend: techStack.frontend as string[],
                backend: techStack.backend as string[],
                database: techStack.database as string[],
                infrastructure: [], // skipped for brevity
                ai: techStack.ai as string[],
            },
            architecture: {
                auth: architecture.auth as string,
            },
            database: {
                schema: '',
            },
            roadmap: [
                { phase: 'Phase 1', duration: 'Week 1', goals: ['MVP Development'] }
            ],
            businessRules: [],
        };

        // Validate (Optional but good practice)
        // const result = BlueprintSchema.safeParse(blueprintData);
        // if (!result.success) { ... }

        try {
            const generator = new BlueprintGenerator();
            await generator.generate(blueprintData, getCurrentDirectory());
            s.stop('Blueprint Generated Successfully!');

            outro(`
${color.green('Success!')} Your SBBL project structure is ready.
Next steps:
1. Open ${color.bold('BLUEPRINT.md')} and refine the details.
2. Use ${color.bold('sbbl ai-prompt')} (coming soon) to get the system prompt.
3. Start coding!
      `);
        } catch (error) {
            s.stop('Generation Failed');
            console.error(error);
            process.exit(1);
        }
    });

// Polyfill for group if not available in the version of @clack/prompts installed
// Actually @clack/prompts has a 'group' function in newer versions. 
// Let's check if I can use it. If not, I'll just chain them.
// The installed version is ^0.7.0 which supports group.
import { group } from '@clack/prompts';
