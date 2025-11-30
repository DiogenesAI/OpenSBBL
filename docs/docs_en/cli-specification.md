# SBBL CLI Technical Specification

## 1. Overview
**Name**: `sbbl-cli`
**Purpose**: Interactive command-line tool to help users create high-quality SBBL Blueprint documents.
**Language**: TypeScript (Node.js)

---

## 2. Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Package Manager**: pnpm (recommended) or npm
- **CLI Framework**: `commander`
- **Interactive UI**: `@clack/prompts` (for modern, beautiful UI)
- **Validation**: `zod`
- **Templating**: `handlebars`
- **File System**: `fs-extra`
- **Clipboard**: `clipboardy`
- **Bundler**: `tsup`
- **Testing**: `vitest`

---

## 3. Architecture

```
sbbl-cli/
├── src/
│   ├── commands/          # Commands (init, validate, etc.)
│   ├── templates/         # Default templates (.md, .json)
│   ├── utils/             # Helper functions (fs, validation)
│   ├── core/              # Core logic (Blueprint generation)
│   └── index.ts           # Entry point
├── tests/                 # Unit & Integration tests
├── package.json
└── tsconfig.json
```

---

## 4. Commands

### 4.1 `sbbl init`
Main command to start creating a new Blueprint.

**Workflow**:
1. **Welcome**: Display SBBL banner.
2. **Project Name**: Ask for project name (default: current directory name).
3. **Template Selection**: Allow choosing from template list or "Blank".
4. **Interactive Wizard** (if Blank selected):
   - **Spark Phase**:
     - "Describe your idea in 1 sentence?"
     - "Who is the target audience?"
   - **Tech Stack**:
     - Multiselect: Frontend, Backend, Database, AI Provider.
   - **Architecture**:
     - "Do you need Authentication?"
     - "Do you need Real-time features?"
5. **Generation**:
   - Create `BLUEPRINT.md` file.
   - Create `.sbblrc` file (config file).
6. **Completion**:
   - Display success message.
   - Automatically copy Blueprint content to clipboard (optional).
   - Suggest next step: "Paste this into ChatGPT/Claude".

### 4.2 `sbbl validate <file>`
Check if a Blueprint file meets SBBL standards.

**Validation Criteria**:
- Contains all required sections (Vision, Tech Stack, Schema, Roadmap).
- Minimum content length for each section.
- Valid Markdown syntax.

**Output**:
- ✅ Pass: "Valid Blueprint! Quality Score: 95/100"
- ❌ Fail: List of errors to fix.

### 4.3 `sbbl template`
Manage templates.

- `sbbl template list`: List available templates.
- `sbbl template create <name>`: Create a new template from current blueprint.

### 4.4 `sbbl ai-prompt`
Generate an optimized System Prompt for AI based on the current Blueprint.

**Output**:
- Print to console or copy to clipboard a model prompt to paste into ChatGPT/Claude before sending the Blueprint.

---

## 5. Data Structure (Internal)

```typescript
interface Blueprint {
  meta: {
    name: string;
    version: string;
    createdAt: string;
  };
  spark: {
    vision: string;
    targetAudience: string;
    problem: string;
    solution: string;
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
    ai: string[];
  };
  architecture: {
    diagram?: string; // Mermaid or text description
    auth: string;
    dataFlow: string;
  };
  database: {
    schema: string; // SQL or Prisma schema
  };
  roadmap: RoadmapItem[];
  businessRules: string[];
}
```

---

## 6. CLI Development Roadmap

### Phase 1: MVP (Week 1)
- [ ] Setup project structure
- [ ] Implement `sbbl init` with basic prompts
- [ ] Basic template system (SaaS, Blank)
- [ ] Generate `BLUEPRINT.md`

### Phase 2: Enhancement (Week 2)
- [ ] Implement `sbbl validate`
- [ ] Add more templates
- [ ] Improve UI with `@clack/prompts`
- [ ] Clipboard integration

### Phase 3: Advanced (Week 3)
- [ ] `sbbl ai-prompt` command
- [ ] Config file `.sbblrc`
- [ ] Plugin system (optional)

---

## 7. Contribution Guide

1. Clone repo: `git clone ...`
2. Install dependencies: `pnpm install`
3. Run dev mode: `pnpm dev`
4. Build: `pnpm build`
5. Test: `pnpm test`
