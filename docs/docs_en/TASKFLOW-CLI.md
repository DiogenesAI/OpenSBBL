# TaskFlow-CLI - OpenSBBL's Task Management System

## 📋 Overview

**TaskFlow-CLI** is OpenSBBL's task management system for the BUILD phase of the SBBL methodology. It enables developers to track and execute implementation tasks generated from OpenSBBL blueprints.

**Inspiration**: Architecture and patterns from [claude-task-master](https://github.com/eyaltoledano/claude-task-master), the #1 open-source AI task management system on GitHub.

**License**: MIT (fully open source, part of OpenSBBL)

---

## 🎯 Purpose

TaskFlow-CLI bridges the gap between:
- **Blueprint** (strategic planning) → **Build** (execution)
- **What to build** (from blueprint) → **How to track progress** (with tasks)

---

## ✨ Key Features

### 1. Blueprint-Aware Task Management
- Parse SBBL blueprints into executable tasks
- Maintain link between tasks and blueprint sections
- Auto-generate tasks from Implementation Roadmap

### 2. AI-Powered Task Operations
- **Expand**: Break down complex tasks into subtasks using AI
- **Analyze**: Complexity scoring (1-10) with subtask recommendations
- **Research**: Fresh information gathering with Perplexity AI
- **Update**: AI-powered task refinement

### 3. Dependency Management
- Task dependencies with visual indicators (✅ done, ⏱️ pending)
- Circular dependency detection
- Smart "next task" recommendation
- Auto-fix invalid dependencies

### 4. Multi-Context Support (Tags)
- Tagged task lists for different contexts (branches, features)
- Git branch-based tag creation
- Independent task sequences per tag

### 5. MCP Server Integration
- Work directly in Cursor, Windsurf, VS Code
- Natural language task management
- Tool loading optimization (21k → 5k tokens)

### 6. Multi-Provider AI Support
- Anthropic, OpenAI, Google, Perplexity, xAI, Mistral, Groq, OpenRouter, Ollama
- Configurable models (main/research/fallback)
- Token counting and cost tracking

---

## 🚀 Quick Start

### Installation
```bash
# Install OpenSBBL (includes TaskFlow-CLI)
npm install -g opensbbl
```

### Basic Workflow
```bash
# 1. Create blueprint
sbbl init
# → Creates: .sbbl/BLUEPRINT.md

# 2. Generate tasks from blueprint
sbbl build parse BLUEPRINT.md
# → Creates: .sbbl/tasks.json

# 3. Analyze task complexity
sbbl build analyze
# → Creates: .sbbl/complexity-report.json

# 4. Expand complex tasks
sbbl build expand --all
# → Updates: .sbbl/tasks.json (with subtasks)

# 5. Show next task
sbbl build next
# → Shows: Task #1 - Setup Database

# 6. Research if needed
sbbl research "PostgreSQL best practices" --save-to=1

# 7. Mark task as done
sbbl build status 1 done

# 8. Repeat steps 5-7
```

---

## 📁 File Structure

```
your-project/
├── .sbbl/
│   ├── BLUEPRINT.md           # Strategic blueprint
│   ├── tasks.json             # Execution tasks
│   ├── config.json            # OpenSBBL config
│   ├── state.json             # Current state
│   ├── complexity-report.json # Complexity analysis
│   └── docs/
│       └── research/          # Research findings
```

---

## 🎨 Commands

### Blueprint Management
```bash
sbbl init                      # Create blueprint
sbbl validate BLUEPRINT.md     # Validate blueprint
sbbl ai-prompt                 # Generate AI prompt
```

### Task Management (TaskFlow-CLI)
```bash
sbbl build parse BLUEPRINT.md  # Generate tasks from blueprint
sbbl build list                # List all tasks
sbbl build show <id>           # Show task details
sbbl build next                # Show next task
sbbl build status <id> <status> # Update task status
sbbl build expand <id>         # Expand task into subtasks
sbbl build analyze             # Analyze task complexity
sbbl build validate-deps       # Validate dependencies
sbbl build fix-deps            # Fix dependencies
```

### Research
```bash
sbbl research <query>          # Research with fresh info
sbbl research <query> --save-to=<id> # Save to task
sbbl research <query> --files=<paths> # With file context
```

### AI Configuration
```bash
sbbl models                    # View current models
sbbl models --set-main=<model> # Set main model
sbbl models --set-research=<model> # Set research model
sbbl models --setup            # Interactive setup
```

### Tags (Multi-Context)
```bash
sbbl build tags                # List all tags
sbbl build use-tag <name>      # Switch to tag
sbbl build add-tag <name>      # Create new tag
```

---

## 📊 Example: Blueprint → Tasks

### Input: BLUEPRINT.md
```markdown
## Implementation Roadmap

### Week 1: Foundation
- Setup database (PostgreSQL)
- Create API structure (Express.js)
- Implement authentication (JWT)

### Week 2: Core Features
- User management
- Data CRUD operations
- Real-time updates (WebSocket)
```

### Output: tasks.json
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
        "blueprintSection": "Implementation Roadmap - Week 1"
      },
      {
        "id": 2,
        "title": "Week 2: Core Features",
        "description": "User management, CRUD, real-time",
        "status": "pending",
        "dependencies": [1],
        "priority": "high",
        "blueprintSection": "Implementation Roadmap - Week 2"
      }
    ]
  }
}
```

---

## 🔄 Complete Workflow

```
SPARK (Idea)
    ↓
BLUEPRINT (Planning)
    ↓ sbbl init
    .sbbl/BLUEPRINT.md
    ↓
BUILD (Execution) ← TaskFlow-CLI
    ↓ sbbl build parse BLUEPRINT.md
    .sbbl/tasks.json
    ↓ sbbl build analyze
    .sbbl/complexity-report.json
    ↓ sbbl build expand --all
    .sbbl/tasks.json (with subtasks)
    ↓ sbbl build next
    Task #1
    ↓ sbbl research "..." --save-to=1
    Research findings
    ↓ Implement in AI editor
    Code
    ↓ sbbl build status 1 done
    Task completed
    ↓ Repeat
    ↓
LAUNCH (Deployment)
    ↓
    Production
```

---

## 🎯 MCP Integration

### Setup
```json
// .cursor/mcp.json
{
  "mcpServers": {
    "opensbbl": {
      "command": "npx",
      "args": ["-y", "opensbbl-mcp"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-...",
        "OPENAI_API_KEY": "sk-...",
        "PERPLEXITY_API_KEY": "pplx-..."
      }
    }
  }
}
```

### Usage in AI Chat
```
You: "Initialize OpenSBBL in my project"
AI: ✓ Created .sbbl/BLUEPRINT.md

You: "Parse my blueprint and create tasks"
AI: ✓ Created 5 tasks from blueprint

You: "What's the next task?"
AI: 📋 Task #1: Setup Database (Priority: high)

You: "Research PostgreSQL best practices and save to task 1"
AI: 🔍 Researching... ✓ Saved findings to Task #1

You: "Mark task 1 as done"
AI: ✓ Task #1 marked as done. Next: Task #2
```

---

## 💡 Why TaskFlow-CLI?

### Before (OpenSBBL without TaskFlow-CLI)
- ✅ Create strategic blueprints
- ✅ Template system
- ✅ Methodology framework
- ❌ No execution tracking
- ❌ No AI task expansion
- ❌ No research capabilities

### After (OpenSBBL with TaskFlow-CLI)
- ✅ Create strategic blueprints
- ✅ Template system
- ✅ Methodology framework
- ✅ Execution tracking with tasks
- ✅ AI task expansion
- ✅ Research capabilities
- ✅ MCP integration
- ✅ Multi-provider AI

---

## 🏗️ Implementation Status

### Phase 1: Core Task Management (Week 1-2)
- [ ] Task storage & CRUD
- [ ] Blueprint → Tasks parser
- [ ] Dependency management
- [ ] `sbbl build` commands

### Phase 2: AI Integration (Week 3-4)
- [ ] Multi-provider AI support
- [ ] Task expansion with AI
- [ ] Complexity analysis
- [ ] Research command

### Phase 3: MCP Server (Week 5-6)
- [ ] MCP server
- [ ] Blueprint tools
- [ ] Task tools
- [ ] Editor integration

### Phase 4: Advanced Features (Week 7-8)
- [ ] Tagged task lists
- [ ] Rule profiles
- [ ] Enhanced UX
- [ ] Documentation

---

## 📚 Documentation

- 📖 [Full Design Document](./taskflow-cli-design.md)
- 📖 [Quick Reference](./taskflow-cli-quick-ref.md)
- 📖 [Tài Liệu Tiếng Việt](../docs_vi/taskflow-cli-design.md)

---

## 🙏 Acknowledgments

TaskFlow-CLI's design is inspired by the excellent architecture of [claude-task-master](https://github.com/eyaltoledano/claude-task-master). We thank the claude-task-master team for pioneering AI-powered task management.

**Key Differences**:
- **Integration**: TaskFlow-CLI is built specifically for OpenSBBL blueprints
- **License**: MIT (fully open source) vs MIT with Commons Clause
- **Implementation**: Clean-room implementation, not a fork
- **Focus**: Blueprint-driven workflow vs PRD-driven workflow

---

**Version**: 1.0  
**Status**: Design Phase  
**License**: MIT  
**Part of**: OpenSBBL Community Edition
