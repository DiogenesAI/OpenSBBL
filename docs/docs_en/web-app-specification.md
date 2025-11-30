# SBBL Web App Technical Specification

## 1. Overview
**Name**: `sbbl-app`
**Purpose**: Web platform to create, manage, collaborate on, and evaluate SBBL Blueprints. Provides a Visual Builder interface and AI integration to assist the process.
**Type**: SaaS Web Application

---

## 2. Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Editor**: Tiptap (Rich text/Markdown editor)
- **Visualization**: React Flow (for architecture diagrams), Mermaid.js
- **Charts**: Recharts

### Backend
- **Framework**: Next.js API Routes (Serverless)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage (for images, attachments)
- **Real-time**: Supabase Realtime (for collaboration)
- **AI Integration**: Vercel AI SDK (OpenAI, Anthropic, Google)

### DevOps
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, Vercel Analytics

---

## 3. Database Architecture

### 3.1 Tables

**`users`** (extends Supabase Auth)
- `id`: UUID
- `email`: String
- `full_name`: String
- `avatar_url`: String
- `plan`: Enum (free, pro, team)

**`projects`**
- `id`: UUID
- `owner_id`: UUID (FK -> users)
- `name`: String
- `description`: String
- `status`: Enum (spark, blueprint, build, launch)
- `created_at`: Timestamp

**`blueprints`**
- `id`: UUID
- `project_id`: UUID (FK -> projects)
- `version`: Integer
- `content`: JSONB (Structured blueprint data)
- `score`: Integer (0-100)
- `is_active`: Boolean

**`blueprint_sections`** (Optional, for granular comments)
- `id`: UUID
- `blueprint_id`: UUID
- `section_type`: Enum (vision, tech_stack, schema, etc.)
- `content`: Text

**`ai_interactions`**
- `id`: UUID
- `project_id`: UUID
- `prompt`: Text
- `response`: Text
- `model`: String
- `cost`: Float

---

## 4. Key Features

### 4.1 Blueprint Builder (Visual Editor)
- **Drag & Drop Interface**: Drag and drop blueprint sections.
- **Real-time Preview**: Preview the generated Markdown file.
- **AI Assistant**: "Magic Button" for AI to auto-fill or suggest content for each section.
- **Templates Gallery**: Choose a template and apply it to the project.

### 4.2 AI Integration Dashboard
- **Chat with Blueprint**: Chatbot understands the current blueprint context.
- **Prompt Generator**: Generate optimized prompts for each task in the roadmap.
- **Code Reviewer**: Paste code for AI to compare against the blueprint and score.

### 4.3 Project Evaluation System
- **Automated Scoring**: Score blueprint based on detail and completeness.
- **Recommendations**: Suggest improvements (e.g., "Missing indexes in database schema").
- **Progress Tracking**: Track project completion %.

### 4.4 Collaboration
- **Team Workspaces**: Invite members to the project.
- **Comments**: Comment directly on each part of the blueprint.
- **Version History**: View and restore old versions.

---

## 5. UI/UX Design

### 5.1 Theme
- **Primary Color**: Indigo/Violet (Creative, Tech)
- **Style**: Clean, Modern, Light Glassmorphism
- **Dark Mode**: Fully supported

### 5.2 Key Screens
1. **Dashboard**: Project list, overview metrics.
2. **Project View**: Kanban board or List view for phases.
3. **Blueprint Editor**: Main screen, split view (Input | Preview).
4. **AI Chat**: Floating chat window or sidebar.
5. **Settings**: Profile management, API keys, billing.

---

## 6. API Routes

- `GET /api/projects`: Get project list
- `POST /api/projects`: Create new project
- `GET /api/blueprints/:id`: Get blueprint content
- `POST /api/blueprints/generate`: Use AI to generate blueprint content
- `POST /api/evaluate`: Score blueprint or code

---

## 7. Web App Development Roadmap

### Phase 1: Foundation (Weeks 4-5)
- [ ] Setup Next.js + Supabase
- [ ] Authentication & User Profile
- [ ] Database Schema Setup
- [ ] Basic Project Management (CRUD)

### Phase 2: Blueprint Editor (Week 6)
- [ ] Markdown Editor Integration
- [ ] Template System
- [ ] Export to Markdown/PDF

### Phase 3: AI & Evaluation (Week 7)
- [ ] Vercel AI SDK Integration
- [ ] Blueprint Scoring Logic
- [ ] AI Suggestions

### Phase 4: Polish & Launch (Week 8)
- [ ] UI/UX Refinement
- [ ] Landing Page
- [ ] Deployment

---

## 8. Security

- **RLS (Row Level Security)**: Mandatory for every table in Supabase.
- **API Protection**: Rate limiting for AI endpoints.
- **Data Privacy**: Do not send sensitive data to AI unless user consents.
