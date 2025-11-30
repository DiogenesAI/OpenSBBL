# SBBL Best Practices

## 🎯 Core Principles

### 1. Document First, Code Later
**Never** write code before having a complete Blueprint.

**Why?**
- AI needs full context to generate accurate code
- Reduces debugging and refactoring time by 70%
- Team alignment from day one

**Pre-coding Checklist**:
- [ ] Clear Vision statement (who, what, why)
- [ ] Tech stack selected with justification
- [ ] Complete Database schema with relationships
- [ ] Business rules documented
- [ ] Implementation roadmap with specific timeline

---

## 📝 Writing Effective Blueprints

### Vision Statement

**❌ Bad**:
```
"A task management app"
```

**✅ Good**:
```
TaskFlow is a real-time task management platform designed for remote-first 
teams (10-50 people) struggling with timezone coordination. 
It solves the visibility problem between distributed teams by providing 
instant updates, smart notifications, and timezone-aware scheduling.

Target Audience: Project managers and team leads in tech startups.
Success Metrics: Reduce "status update" meetings by 50%.
```

**Formula**:
```
[Product Name] is a [type] designed for [target audience] who [pain point].
It solves [problem] by [solution approach].

Target Audience: [specific role]
Success Metrics: [measurable outcome]
```

---

### Tech Stack Selection

**Selection Principles**:

1. **Start with Constraints**:
   - Team expertise (TypeScript? Python?)
   - Budget (serverless vs dedicated servers)
   - Timeline (proven stack vs experimental)
   - Scale requirements (100 users vs 1M users)

2. **Default Recommendations**:
   - **MVP (< 3 months)**: Next.js + Supabase
   - **High Performance**: Go + PostgreSQL
   - **AI-heavy**: Python + FastAPI + Pinecone
   - **Mobile**: React Native + Supabase

3. **State WHY**:
   ```markdown
   ## Tech Stack
   
   **Frontend**: Next.js 14
   - Reason: Team knows React, need SSR for SEO, fast deploy on Vercel
   
   **Database**: Supabase
   - Reason: Built-in auth, real-time, generous free tier for MVP
   ```

---

### Database Schema

**Best Practices**:

1. **Always Include**:
   - Primary keys (UUID recommended)
   - Foreign keys with ON DELETE behavior
   - Timestamps (created_at, updated_at)
   - Indexes for common queries

2. **Example - Good Schema**:
   ```sql
   -- Users Table
   CREATE TABLE users (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     email VARCHAR(255) UNIQUE NOT NULL,
     full_name VARCHAR(255),
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Projects Table
   CREATE TABLE projects (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
     name VARCHAR(255) NOT NULL,
     status VARCHAR(50) DEFAULT 'active',
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Indexes
   CREATE INDEX idx_projects_owner ON projects(owner_id);
   CREATE INDEX idx_projects_status ON projects(status);
   ```

3. **Document Relationships**:
   ```markdown
   ## Relationships
   - users 1:N projects (one user owns multiple projects)
   - projects 1:N tasks
   - users N:M projects (via project_members for collaboration)
   ```

---

### Business Rules

**Standard Format**:
```markdown
## Business Rules

### User Tiers
- **Free**: Max 3 projects, 100 tasks/project
- **Pro** ($19/mo): Unlimited projects, unlimited tasks
- **Enterprise**: Custom limits, dedicated support

### Data Retention
- Free users: 30 days history
- Pro users: 1 year history
- Deleted items: Soft delete, hard delete after 90 days

### Rate Limits
- API: 100 requests/minute per user
- File uploads: Max 10MB per file, 100MB total per user

### Security
- Session timeout: 30 minutes inactivity
- Password: Min 8 chars, must include number + special char
- 2FA: Optional for Free, required for Enterprise
```

---

## 🤖 Working with AI

### Crafting AI Prompts

**Standard Structure**:
```
You are a [role].

CONTEXT:
[Paste entire BLUEPRINT.md content here]

TASK:
Implement [specific feature] following these requirements:
1. [Requirement 1]
2. [Requirement 2]

CONSTRAINTS:
- Use TypeScript
- Strictly follow database schema
- Include error handling
- Add JSDoc comments

OUTPUT FORMAT:
Provide complete, production-ready code with:
- File structure
- All necessary imports
- Type definitions
- Error handling
```

**Example - Good Prompt**:
```
You are a Senior Full-Stack Developer specializing in Next.js and Supabase.

CONTEXT:
[Blueprint content...]

TASK:
Implement user authentication flow including:
1. Registration with email verification
2. Login with email/password
3. OAuth (Google, GitHub)
4. Password reset flow

CONSTRAINTS:
- Use Supabase Auth
- TypeScript with strict mode
- Follow Next.js 14 App Router conventions
- Include loading states and error handling
- Add Zod validation for forms

OUTPUT FORMAT:
Provide:
1. File structure (which files to create/modify)
2. Complete code for each file
3. Required environment variables
4. Testing instructions
```

---

### Iterating with AI

**Best Workflow**:

1. **Round 1 - Generate**:
   - Provide full blueprint
   - Request complete implementation
   - Review results carefully

2. **Round 2 - Refine**:
   ```
   Code looks good, but please:
   1. Add loading skeletons for better UX
   2. Implement optimistic updates for task list
   3. Add error boundaries
   ```

3. **Round 3 - Test**:
   ```
   Generate unit tests for:
   - User auth flow
   - Task CRUD operations
   - Edge cases (network error, invalid data)
   ```

4. **Track Iterations**:
   - Record what worked
   - Note what needed manual fixing
   - Update blueprint if initial assumptions were wrong

---

## 📊 Measuring Success

### Key Metrics to Track

1. **Development Speed**:
   - Time from blueprint to first deploy
   - Number of AI iterations needed
   - Manual bug fixes needed (%)

2. **Code Quality**:
   - TypeScript coverage (target: 100%)
   - Test coverage (target: >80%)
   - Linting errors (target: 0)

3. **Blueprint Quality**:
   - AI first-try accuracy (target: >70%)
   - Number of blueprint revisions
   - Number of clarifying questions from team

4. **Product Success**:
   - User adoption rate
   - Feature usage metrics
   - User feedback score

---

## 🚨 Common Pitfalls

### 1. Vague Vision
**Problem**: "Build a social media app"

**Solution**: 
```
Build InstaPet - an Instagram clone specifically for pet owners 
to share daily photos, connect with other owners in the city, 
and discover pet-friendly places.

Target: Pet owners 25-45 in urban areas.
Differentiator: Location-based pet meetups + vet recommendations.
```

### 2. Missing Business Rules
**Problem**: AI generates code without validation

**Solution**: Document every constraint:
```
- Username: 3-20 chars, alphanumeric + underscore only
- Bio: Max 500 chars
- Profile pic: Max 5MB, JPG/PNG only
- Posts: Max 10 photos per post
- Free users: Max 100 posts
```

### 3. Incomplete Database Schema
**Problem**: AI "hallucinates" table structures

**Solution**: Provide full SQL:
```sql
-- Not just table names, but full CREATE statements
-- Include all columns, data types, constraints
-- Explicitly state relationships
-- Add indexes for performance
```

### 4. No Implementation Roadmap
**Problem**: Unclear what to build first

**Solution**: Prioritize features:
```
## MVP (Weeks 1-2)
- [ ] Auth (email only)
- [ ] Create post (single image)
- [ ] View feed
- [ ] Basic profile

## V1.1 (Weeks 3-4)
- [ ] OAuth (Google)
- [ ] Multiple images per post
- [ ] Comments
- [ ] Likes

## V2.0 (Month 2)
- [ ] Location tagging
- [ ] Pet meetups
- [ ] Direct messaging
```

---

## 🎨 UI/UX Best Practices

### Design System in Blueprint

Include design tokens:
```markdown
## Design System

### Colors
- Primary: #FF6B6B (Coral Red)
- Secondary: #4ECDC4 (Turquoise)
- Background: #F7F7F7 (Light Gray)
- Text: #2C3E50 (Dark Blue Gray)

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Code: JetBrains Mono

### Spacing
- Base unit: 8px
- Sizes: xs(4px), sm(8px), md(16px), lg(24px), xl(32px)

### Components
- Buttons: Rounded (8px), shadow on hover
- Cards: White bg, light shadow, rounded 12px
- Inputs: Border on focus, red on error
```

**Why?** AI can generate consistent UI code that matches your design.

---

## 🔒 Security Best Practices

### Always Include in Blueprint

```markdown
## Security Requirements

### Authentication
- Use Supabase Auth (or specify alternative)
- Implement Row Level Security (RLS)
- Session management: 30 min timeout

### Data Protection
- Encrypt sensitive fields (e.g., payment info)
- Sanitize all user inputs
- Use parameterized queries (prevent SQL injection)

### API Security
- Rate limiting: 100 req/min per user
- API key rotation: Every 90 days
- CORS: Whitelist specific domains only

### Compliance
- GDPR: Data export + deletion on request
- Privacy Policy: Link in footer
- Cookie consent: Mandatory for EU users
```

---

## 📈 Optimization Tips

### 1. Start Small, Iterate Fast
- MVP in 2 weeks > Perfect product in 6 months
- Launch with core features only
- Add features based on user feedback

### 2. Use Templates
- Don't reinvent the wheel
- Customize proven templates
- Build your own template library

### 3. Automate Everything
- Use CLI to generate blueprints
- Auto-deploy on push (Vercel, Railway)
- Automated testing in CI/CD

### 4. Document as You Go
- Update blueprint when requirements change
- Track effective AI prompt patterns
- Build a knowledge base for the team

---

## 🎯 Checklist: Ready to Build?

Before asking AI to code, verify:

- [ ] Specific Vision (who, what, why, success metrics)
- [ ] Tech stack selected with reasons
- [ ] Complete Database schema with SQL
- [ ] All relationships documented
- [ ] Comprehensive Business rules
- [ ] Prioritized Implementation roadmap
- [ ] Design system defined (colors, fonts, spacing)
- [ ] Security requirements specified
- [ ] Success metrics defined

**If all checked**: You are ready! 🚀

**If missing**: Spend 30 more minutes on the blueprint. It will save you days later.

---

## 📚 Resources

- [SBBL Methodology](./methodology.md)
- [Template Library](./templates.md)
- [CLI Tool Guide](./cli-specification.md)
- [Web App Guide](./web-app-specification.md)

---

**Remember**: 1 hour on blueprint = 10 hours saved in development.
