# Manual Test Cases for SBBL CLI

Use this checklist to verify the functionality of the SBBL CLI manually.

## 1. Installation & Setup

- [ ] **Global Link**: Run `npm link` in the project root.
- [ ] **Verify Command**: Open a new terminal and run `sbbl --help`.
    - *Expected*: Should show the help menu with `init`, `validate`, `ai-prompt` commands.

## 2. Command: `sbbl init`

- [ ] **Run Init**: Run `sbbl init` in an empty folder.
- [ ] **Interactive Prompts**:
    - Enter Project Name: "TestApp"
    - Enter Vision: "A test application."
    - Select Tech Stack: Choose "React", "Node.js".
    - Select Auth: "None".
- [ ] **Output Verification**:
    - Check if `BLUEPRINT.md` exists.
    - Check if `.sbblrc` exists.
    - Check if `memory/` folder exists with `0_past`, `1_present`, `2_future`.
    - Check content of `BLUEPRINT.md`: verify "TestApp" and "React" are present.

## 3. Command: `sbbl validate`

- [ ] **Valid File**: Run `sbbl validate` on the newly created `BLUEPRINT.md`.
    - *Expected*: ✅ Validation Passed.
- [ ] **Invalid File**:
    - Edit `BLUEPRINT.md` and remove the "Vision" section.
    - Run `sbbl validate`.
    - *Expected*: ❌ Validation Failed (Missing Vision).
- [ ] **Restore**: Undo changes to `BLUEPRINT.md`.

## 4. Command: `sbbl ai-prompt`

- [ ] **Generate Prompt**: Run `sbbl ai-prompt`.
- [ ] **Clipboard Check**: Paste into a text editor.
    - *Expected*: Should contain "You are an expert Senior Software Engineer..." and details from your Blueprint.
- [ ] **Console Output**: Run `sbbl ai-prompt --no-copy`.
    - *Expected*: Should print the prompt to the terminal instead of copying.

## 5. Edge Cases

- [ ] **Missing File**: Run `sbbl validate` in a folder without `BLUEPRINT.md`.
    - *Expected*: Error "File not found".
- [ ] **Empty Input**: Run `sbbl init` and try to submit an empty name.
    - *Expected*: Validation error "Please enter a name".
