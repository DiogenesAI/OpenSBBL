# TaskFlow-CLI Implementation Plan

## Phase 1: Core Task Management (Week 1-2)

### Milestone 1.1: Task Storage & Data Model (Day 1-2)

#### Files to Create
```
src/
├── taskflow/
│   ├── models/
│   │   ├── task.ts          # Task interface & types
│   │   ├── subtask.ts       # Subtask interface
│   │   └── tag.ts           # Tag interface
│   ├── storage/
│   │   ├── tasks-storage.ts # Task CRUD operations
│   │   └── file-manager.ts  # File I/O operations
│   └── utils/
│       ├── validator.ts     # Task validation
│       └── id-generator.ts  # ID generation
```

#### Tasks
- [x] Define Task interface
- [x] Define Subtask interface
- [x] Define Tag interface
- [x] Create tasks.json schema
- [x] Implement file read/write operations
- [x] Add validation logic

---

### Milestone 1.2: Blueprint → Tasks Parser (Day 3-4)

#### Files to Create
```
src/
├── taskflow/
│   ├── parsers/
│   │   ├── blueprint-parser.ts  # Parse BLUEPRINT.md
│   │   ├── roadmap-parser.ts    # Extract Implementation Roadmap
│   │   └── task-generator.ts    # Generate tasks from sections
```

#### Tasks
- [ ] Parse BLUEPRINT.md structure
- [ ] Extract Implementation Roadmap section
- [ ] Map roadmap items to tasks
- [ ] Generate task IDs and dependencies
- [ ] Preserve blueprint context in tasks

---

### Milestone 1.3: Dependency Management (Day 5-6)

#### Files to Create
```
src/
├── taskflow/
│   ├── dependencies/
│   │   ├── dependency-manager.ts  # Add/remove dependencies
│   │   ├── validator.ts           # Validate dependencies
│   │   └── resolver.ts            # Resolve dependency order
```

#### Tasks
- [ ] Implement add/remove dependency
- [ ] Validate dependency references
- [ ] Detect circular dependencies
- [ ] Calculate "next task" based on dependencies
- [ ] Auto-fix invalid dependencies

---

### Milestone 1.4: CLI Commands (Day 7-10)

#### Files to Create
```
src/
├── commands/
│   ├── build/
│   │   ├── index.ts       # Build command group
│   │   ├── parse.ts       # sbbl build parse
│   │   ├── list.ts        # sbbl build list
│   │   ├── show.ts        # sbbl build show
│   │   ├── status.ts      # sbbl build status
│   │   ├── next.ts        # sbbl build next
│   │   └── validate-deps.ts # sbbl build validate-deps
```

#### Tasks
- [ ] Create `sbbl build` command group
- [ ] Implement `sbbl build parse BLUEPRINT.md`
- [ ] Implement `sbbl build list`
- [ ] Implement `sbbl build show <id>`
- [ ] Implement `sbbl build status <id> <status>`
- [ ] Implement `sbbl build next`
- [ ] Implement `sbbl build validate-deps`

---

### Milestone 1.5: Testing & Documentation (Day 11-14)

#### Files to Create
```
tests/
├── taskflow/
│   ├── storage.test.ts
│   ├── parser.test.ts
│   ├── dependencies.test.ts
│   └── commands.test.ts
```

#### Tasks
- [ ] Write unit tests for storage
- [ ] Write unit tests for parser
- [ ] Write unit tests for dependencies
- [ ] Write integration tests for commands
- [ ] Create usage documentation
- [ ] Add examples

---

## Implementation Details

### 1. Task Data Model

```typescript
// src/taskflow/models/task.ts

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dependencies: number[];
  priority: TaskPriority;
  details?: string;
  testStrategy?: string;
  subtasks: Subtask[];
  blueprintSection?: string; // Link to blueprint section
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = 
  | 'pending' 
  | 'in-progress' 
  | 'review' 
  | 'done' 
  | 'deferred' 
  | 'cancelled';

export type TaskPriority = 'high' | 'medium' | 'low';

export interface Subtask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dependencies: number[];
  details?: string;
}

export interface Tag {
  name: string;
  description?: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

export interface TasksData {
  [tagName: string]: {
    tasks: Task[];
  };
}
```

---

### 2. File Structure

```
.sbbl/
├── BLUEPRINT.md           # Strategic blueprint
├── tasks.json             # Task storage
├── config.json            # Configuration
└── state.json             # Current state (active tag, etc.)
```

**tasks.json format:**
```json
{
  "master": {
    "tasks": [
      {
        "id": 1,
        "title": "Week 1: Foundation",
        "description": "Setup database, API, and authentication",
        "status": "pending",
        "dependencies": [],
        "priority": "high",
        "details": "- Setup PostgreSQL\n- Create Express.js API\n- Implement JWT auth",
        "testStrategy": "Test auth flow and database connections",
        "subtasks": [],
        "blueprintSection": "Implementation Roadmap - Week 1",
        "createdAt": "2025-12-02T10:00:00Z",
        "updatedAt": "2025-12-02T10:00:00Z"
      }
    ]
  }
}
```

---

### 3. Blueprint Parser Logic

```typescript
// src/taskflow/parsers/blueprint-parser.ts

export class BlueprintParser {
  /**
   * Parse BLUEPRINT.md and extract Implementation Roadmap
   */
  async parse(blueprintPath: string): Promise<Task[]> {
    const content = await readFile(blueprintPath);
    const roadmap = this.extractRoadmap(content);
    const tasks = this.generateTasks(roadmap);
    return tasks;
  }

  /**
   * Extract Implementation Roadmap section
   */
  private extractRoadmap(content: string): RoadmapItem[] {
    // Find ## Implementation Roadmap section
    // Parse ### Week X: Title format
    // Extract bullet points as details
  }

  /**
   * Generate tasks from roadmap items
   */
  private generateTasks(roadmap: RoadmapItem[]): Task[] {
    // Create task for each roadmap item
    // Set dependencies (Week 2 depends on Week 1)
    // Preserve blueprint section reference
  }
}
```

---

### 4. Command Examples

#### `sbbl build parse BLUEPRINT.md`
```bash
$ sbbl build parse BLUEPRINT.md

📋 Parsing blueprint...
✓ Found Implementation Roadmap
✓ Generated 5 tasks

Tasks created:
  1. Week 1: Foundation (high priority)
  2. Week 2: Core Features (high priority, depends on 1)
  3. Week 3: Polish (medium priority, depends on 2)
  4. Week 4: Testing (high priority, depends on 3)
  5. Week 5: Deployment (high priority, depends on 4)

💾 Saved to .sbbl/tasks.json
```

#### `sbbl build list`
```bash
$ sbbl build list

┌────┬─────────────────────┬──────────┬──────────────┬──────────┐
│ ID │ Title               │ Status   │ Dependencies │ Priority │
├────┼─────────────────────┼──────────┼──────────────┼──────────┤
│ 1  │ Week 1: Foundation  │ pending  │ -            │ high     │
│ 2  │ Week 2: Core        │ pending  │ 1 ⏱️         │ high     │
│ 3  │ Week 3: Polish      │ pending  │ 2 ⏱️         │ medium   │
│ 4  │ Week 4: Testing     │ pending  │ 3 ⏱️         │ high     │
│ 5  │ Week 5: Deployment  │ pending  │ 4 ⏱️         │ high     │
└────┴─────────────────────┴──────────┴──────────────┴──────────┘

Total: 5 tasks (5 pending, 0 in-progress, 0 done)
```

#### `sbbl build show 1`
```bash
$ sbbl build show 1

📋 Task #1: Week 1: Foundation

Status: pending
Priority: high
Dependencies: None
Blueprint Section: Implementation Roadmap - Week 1

Description:
Setup database, API, and authentication

Details:
- Setup PostgreSQL
- Create Express.js API
- Implement JWT auth

Test Strategy:
Test auth flow and database connections

Created: 2025-12-02 10:00:00
Updated: 2025-12-02 10:00:00

Suggested Actions:
  sbbl build status 1 in-progress  # Start working on this task
  sbbl build expand 1              # Break down into subtasks
```

#### `sbbl build next`
```bash
$ sbbl build next

📋 Next Task: #1 - Week 1: Foundation

Priority: high
Dependencies: None (ready to start!)

Description:
Setup database, API, and authentication

Details:
- Setup PostgreSQL
- Create Express.js API
- Implement JWT auth

Suggested Actions:
  sbbl build status 1 in-progress  # Mark as in-progress
  sbbl research "PostgreSQL best practices" --save-to=1
```

#### `sbbl build status 1 in-progress`
```bash
$ sbbl build status 1 in-progress

✓ Task #1 marked as in-progress
```

---

## Dependencies to Add

```json
{
  "dependencies": {
    "@clack/prompts": "^0.7.0",      // Already have
    "chalk": "^5.3.0",                // Already have
    "commander": "^11.1.0",           // Already have
    "fs-extra": "^11.2.0",            // Already have
    "zod": "^3.22.4",                 // Already have
    "cli-table3": "^0.6.5",           // NEW - For table output
    "date-fns": "^3.0.0"              // NEW - For date formatting
  }
}
```

---

## Success Criteria

### Phase 1 Complete When:
- [x] Can parse BLUEPRINT.md and generate tasks
- [x] Can list all tasks in a table
- [x] Can show task details
- [x] Can update task status
- [x] Can find next task based on dependencies
- [x] Can validate dependencies
- [x] All tests passing
- [x] Documentation complete

---

## Next Steps (Phase 2)

After Phase 1 is complete:
- [ ] AI Integration (expand, analyze, research)
- [ ] Multi-provider AI support
- [ ] Complexity analysis
- [ ] Research command

---

**Status**: 🚧 In Progress  
**Start Date**: 2025-12-02  
**Target Completion**: 2025-12-16 (2 weeks)
