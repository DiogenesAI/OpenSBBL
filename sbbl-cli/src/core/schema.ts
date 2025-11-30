import { z } from 'zod';

export const BlueprintSchema = z.object({
    meta: z.object({
        name: z.string().min(1, "Project name is required"),
        version: z.string().default("1.0.0"),
        createdAt: z.string().datetime().optional(), // Will be set automatically if not provided
        author: z.string().optional(),
    }),
    spark: z.object({
        vision: z.string().min(10, "Vision must be at least 10 characters"),
        targetAudience: z.string().min(5, "Target audience is required"),
        problem: z.string().min(10, "Problem description is required"),
        solution: z.string().min(10, "Solution description is required"),
    }),
    techStack: z.object({
        frontend: z.array(z.string()).default([]),
        backend: z.array(z.string()).default([]),
        database: z.array(z.string()).default([]),
        infrastructure: z.array(z.string()).default([]),
        ai: z.array(z.string()).default([]),
    }),
    architecture: z.object({
        auth: z.string().default("None"),
        dataFlow: z.string().optional(),
        diagram: z.string().optional(), // Mermaid or text
    }),
    database: z.object({
        schema: z.string().optional(), // Description or SQL/Prisma
    }),
    roadmap: z.array(z.object({
        phase: z.string(),
        duration: z.string(),
        goals: z.array(z.string()),
    })).default([]),
    businessRules: z.array(z.string()).default([]),
});

export type Blueprint = z.infer<typeof BlueprintSchema>;
