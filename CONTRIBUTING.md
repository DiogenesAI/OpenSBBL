# Contributing to OpenSBBL

Thank you for your interest in contributing to OpenSBBL! 🎉

OpenSBBL is a community-driven project, and we welcome contributions from everyone. Whether you're fixing bugs, adding features, improving documentation, or creating templates - your contribution matters!

## 🌟 Ways to Contribute

### 1. Report Bugs 🐛
Found a bug? Please [open an issue](https://github.com/DiogenesAI/OpenSBBL/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

### 2. Suggest Features 💡
Have an idea? [Start a discussion](https://github.com/DiogenesAI/OpenSBBL/discussions) or open an issue with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach

### 3. Improve Documentation 📝
Help make our docs better:
- Fix typos or unclear explanations
- Add examples
- Translate to other languages
- Create tutorials or guides

### 4. Create Templates 🎨
Share your blueprint templates:
- Create a new template in `sbbl-cli/src/templates/`
- Add documentation
- Submit a PR

### 5. Submit Code 💻
Fix bugs or add features:
- Fork the repository
- Create a feature branch
- Make your changes
- Write tests
- Submit a PR

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git
- A GitHub account

### Setup Development Environment

1. **Fork the repository**
   - Click "Fork" on [OpenSBBL repository](https://github.com/DiogenesAI/OpenSBBL)

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/OpenSBBL.git
   cd OpenSBBL
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/DiogenesAI/OpenSBBL.git
   ```

4. **Install dependencies**
   ```bash
   cd sbbl-cli
   npm install
   ```

5. **Run in development mode**
   ```bash
   npm run dev
   ```

---

## 📋 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments where necessary
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run tests
npm test

# Test CLI manually
npm start init
npm start validate
npm start ai-prompt
```

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new template for e-commerce"
# or
git commit -m "fix: resolve date validation issue"
# or
git commit -m "docs: improve CLI documentation"
```

**Commit message format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your feature branch
4. Fill in the PR template:
   - Description of changes
   - Related issues
   - Testing done
   - Screenshots (if applicable)

---

## 🎯 Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for new code
- Follow existing code style
- Use meaningful variable names
- Add JSDoc comments for functions
- Prefer `const` over `let`
- Use async/await over promises

### Example:
```typescript
/**
 * Validates a blueprint file
 * @param filePath - Path to the blueprint file
 * @returns Validation result with errors if any
 */
async function validateBlueprint(filePath: string): Promise<ValidationResult> {
  // Implementation
}
```

### Documentation
- Use clear, concise language
- Include code examples
- Add screenshots where helpful
- Keep formatting consistent

---

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Writing Tests
- Add tests for new features
- Update tests when changing existing code
- Aim for good test coverage
- Use descriptive test names

Example:
```typescript
describe('Blueprint Validator', () => {
  it('should validate a correct blueprint', async () => {
    // Test implementation
  });

  it('should return errors for invalid blueprint', async () => {
    // Test implementation
  });
});
```

---

## 📝 Documentation Guidelines

### When to Update Documentation
- Adding new features
- Changing existing behavior
- Fixing bugs that affect usage
- Adding new templates

### Documentation Locations
- **README.md** - Main project overview
- **docs/docs_en/** - English documentation
- **docs/docs_vi/** - Vietnamese documentation
- **docs/vi/guides/** - Vietnamese guides
- **sbbl-cli/README.md** - CLI-specific docs

---

## 🎨 Creating Templates

Templates help users get started quickly. Here's how to create one:

1. **Create template file**
   ```bash
   cd sbbl-cli/src/templates/
   # Create your template file
   ```

2. **Follow template structure**
   - Include all required sections
   - Add helpful comments
   - Provide realistic examples

3. **Document the template**
   - Add to `docs/docs_en/templates.md`
   - Add to `docs/docs_vi/templates.md`
   - Include use case and example

4. **Test the template**
   ```bash
   npm start init --template your-template-name
   ```

---

## 🌍 Translation Guidelines

Help make OpenSBBL accessible to more people!

### Adding a New Language
1. Create new directory: `docs/docs_XX/` (XX = language code)
2. Translate all documents from `docs/docs_en/`
3. Update main README.md with new language badge
4. Submit PR

### Updating Existing Translations
- Keep translations up-to-date with English docs
- Maintain consistent terminology
- Preserve formatting and structure

---

## ❓ Questions?

- **General questions**: [GitHub Discussions](https://github.com/DiogenesAI/OpenSBBL/discussions)
- **Bug reports**: [GitHub Issues](https://github.com/DiogenesAI/OpenSBBL/issues)
- **Feature requests**: [GitHub Discussions](https://github.com/DiogenesAI/OpenSBBL/discussions)

---

## 🙏 Thank You!

Every contribution, no matter how small, helps make OpenSBBL better for everyone. We appreciate your time and effort!

---

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive experience for everyone.

### Our Standards
- Be respectful and considerate
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

### Enforcement
Violations may result in temporary or permanent ban from the project.

---

**Happy Contributing! 🚀**
