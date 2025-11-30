# SBBL Evaluation Criteria

## 🎯 Purpose

This evaluation system is designed to measure the quality of both the **Blueprint** (input) and **Code Implementation** (output). The goal is to ensure AI has enough context to work effectively and the result meets production standards.

---

## 📊 1. Blueprint Score

**Scale**: 0 - 100
**Goal**: > 85 points to start coding with AI.

### 1.1 Project Meta (10 points)
- [ ] **Clear Project Name** (2pts)
- [ ] **Vision Statement**: Clear, concise, highlights value (4pts)
- [ ] **Target Audience**: Clearly defined users (2pts)
- [ ] **Success Metrics**: Measurable success indicators (2pts)

### 1.2 Tech Stack (15 points)
- [ ] **Frontend**: Framework, UI library, State management (4pts)
- [ ] **Backend**: Language, Framework, API style (REST/GraphQL) (4pts)
- [ ] **Database**: DB type, ORM/Query builder (4pts)
- [ ] **Deployment/Infra**: Hosting, CI/CD, Services (3pts)

### 1.3 Architecture (20 points)
- [ ] **System Diagram/Flow**: Data flow description (5pts)
- [ ] **Authentication**: Clear auth mechanism (5pts)
- [ ] **Integrations**: List of 3rd party services (5pts)
- [ ] **Security**: Basic security measures (5pts)

### 1.4 Database Schema (25 points)
- [ ] **Tables**: Complete list of tables (5pts)
- [ ] **Columns**: Data types, constraints (NOT NULL, UNIQUE) (5pts)
- [ ] **Relationships**: FKs, 1:1, 1:N, N:M relationships (5pts)
- [ ] **SQL**: Sample CREATE TABLE statements (5pts)
- [ ] **Indexes**: Index definitions for performance (5pts)

### 1.5 Implementation Roadmap (15 points)
- [ ] **Phasing**: Clear Weeks/Sprints (5pts)
- [ ] **Logical Order**: Foundation -> Core -> Polish (5pts)
- [ ] **Specific Tasks**: Detailed checklist for each phase (5pts)

### 1.6 Business Rules (15 points)
- [ ] **User Tiers/Roles**: Clear permissions (5pts)
- [ ] **Limits/Constraints**: System limits (5pts)
- [ ] **Business Logic**: Data processing rules (5pts)

---

## 💻 2. Implementation Score

**Scale**: 0 - 100
**Goal**: > 90 points to deploy.

### 2.1 Correctness (30 points)
- [ ] **Buildable**: Builds and starts without errors (10pts)
- [ ] **Functional**: Meets requirements in Blueprint (10pts)
- [ ] **Logic**: Handles edge cases correctly (10pts)

### 2.2 Code Quality (25 points)
- [ ] **Type Safety**: No `any`, full types (TypeScript) (10pts)
- [ ] **Clean Code**: Clear variable names, concise functions, DRY (5pts)
- [ ] **Structure**: Logical folder structure, modular (5pts)
- [ ] **Comments**: JSDoc for complex functions (5pts)

### 2.3 Testing (20 points)
- [ ] **Unit Tests**: Coverage > 80% for core logic (10pts)
- [ ] **Integration Tests**: Test main flows (API, DB) (5pts)
- [ ] **E2E Tests**: Test critical user flows (5pts)

### 2.4 Performance & Security (15 points)
- [ ] **Performance**: No N+1 queries, lazy loading (5pts)
- [ ] **Security**: Input sanitization, Auth checks, RLS (5pts)
- [ ] **Best Practices**: Correct usage of framework features (5pts)

### 2.5 Documentation (10 points)
- [ ] **README**: Setup and run instructions (5pts)
- [ ] **API Docs**: Endpoint descriptions (if applicable) (5pts)

---

## 🤖 3. AI Efficiency

This metric measures the effectiveness of using AI in the project.

### Metrics
1. **Zero-shot Accuracy (%)**: Percentage of code generated correctly on the first try.
   - > 80%: Excellent
   - 60-80%: Good
   - < 60%: Blueprint needs improvement

2. **Iteration Count**: Number of re-prompts needed to complete 1 task.
   - 1 time: Excellent
   - 2-3 times: Normal
   - > 3 times: Poor Prompt or Context

3. **Human Intervention (%)**: Percentage of code manually fixed.
   - < 10%: Excellent
   - 10-30%: Acceptable
   - > 30%: Process needs review

---

## 🏆 Ranking System

Based on average of Blueprint and Code scores:

| Grade | Avg Score | Description | Action |
|-------|-----------|-------------|--------|
| **S** (Elite) | 95-100 | Perfect, ready to scale | Deploy immediately |
| **A** (High) | 85-94 | High quality, minor issues | Light review & Deploy |
| **B** (Good) | 70-84 | MVP standard, needs polish | Refactor weak parts |
| **C** (Fair) | 50-69 | Functional but risky | Major refactor needed |
| **D** (Poor) | < 50 | Substandard | Rewrite Blueprint |

---

## 🛠️ Automated Evaluation Tool

We are developing `sbbl evaluate` tool for automated scoring:

```bash
# Evaluate Blueprint
sbbl evaluate blueprint ./BLUEPRINT.md

# Evaluate Codebase
sbbl evaluate code ./src

# Evaluate entire project
sbbl evaluate project .
```

**Sample Output**:
```
📊 SBBL Evaluation Report
-------------------------
Blueprint Score: 92/100 (Grade A)
Code Score:      88/100 (Grade A)
-------------------------
Overall Grade:   A (High Quality)

Recommendations:
- [Code] Add unit tests for `auth.service.ts` (+5 pts)
- [Blueprint] Add indexes for `orders` table (+3 pts)
```
