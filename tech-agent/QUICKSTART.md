# Quick Start: Generating Technical Requirements from PRDs

This guide will help you get started with generating technical requirements documents from Product Requirements Documents (PRDs) using multi-agent collaboration.

## Setup

### Option 1: Node.js (Recommended)

1. **Install Node.js dependencies**:
   ```bash
   cd tools
   npm install
   cd ..
   ```

2. **Verify agent configurations**:
   ```bash
   ls agents/*.json
   ```
   You should see all agent configuration files.

### Option 2: Python (Alternative)

1. **Install Python dependencies**:
   ```bash
   pip install -r tools/requirements.txt
   ```

2. **Verify agent configurations**:
   ```bash
   ls agents/*.json
   ```
   You should see all agent configuration files.

## Basic Workflow

### Step 1: Create a PRD

Use the PRD template to create your product requirements document:

```bash
cp templates/prd-template.md my-feature-prd.md
```

Edit `my-feature-prd.md` with your product requirements. See `examples/example-prd.md` for a complete example.

### Step 2: Generate Technical Requirements

Run the generator script:

**Using Node.js (Recommended)**:
```bash
node tools/generate-technical-requirements.js my-feature-prd.md
```

**Using Python (Alternative)**:
```bash
python tools/generate-technical-requirements.py my-feature-prd.md
```

This will:
- Analyze your PRD
- Automatically detect which agents are needed
- Generate `technical-requirements.md` with contributions from relevant agents

### Step 3: Review and Refine

The generated technical requirements document will include:
- System architecture recommendations
- Frontend/backend requirements
- Testing strategies
- Design system usage
- And more, based on your PRD content

Review the document and refine as needed.

## Example

**Using Node.js**:
```bash
# 1. Use the example PRD
node tools/generate-technical-requirements.js examples/example-prd.md -o example-tech-requirements.md

# 2. Check which agents were auto-detected
# The script will print: "Auto-detected agents: foundations-platform-architect, frontend-web-engineer-ic, ..."

# 3. Review the generated technical requirements
cat example-tech-requirements.md
```

**Using Python**:
```bash
# 1. Use the example PRD
python tools/generate-technical-requirements.py examples/example-prd.md -o example-tech-requirements.md

# 2. Check which agents were auto-detected
# The script will print: "Auto-detected agents: foundations-platform-architect, frontend-web-engineer-ic, ..."

# 3. Review the generated technical requirements
cat example-tech-requirements.md
```

## Advanced Usage

### Specify Agents Manually

If you want to use specific agents regardless of auto-detection:

**Node.js**:
```bash
node tools/generate-technical-requirements.js my-prd.md \
  --agents foundations-platform-architect,frontend-web-engineer-ic,qa-web-specialist
```

**Python**:
```bash
python tools/generate-technical-requirements.py my-prd.md \
  --agents foundations-platform-architect,frontend-web-engineer-ic,qa-web-specialist
```

### Custom Output Location

**Node.js**:
```bash
node tools/generate-technical-requirements.js my-prd.md -o output/tech-reqs.md
```

**Python**:
```bash
python tools/generate-technical-requirements.py my-prd.md -o output/tech-reqs.md
```

## Agent Selection

The tool automatically selects agents based on PRD content:

| PRD Content | Selected Agents |
|------------|----------------|
| Frontend/UI keywords | `frontend-web-engineer-ic`, `ui-designer`, `ux-designer` |
| Design system mentions | `design-engineer` |
| Backend/API keywords | `martech-hops-developer` (if Adobe-related), backend agents |
| Testing requirements | `qa-web-specialist`, `qa-mobile-engineer`, `qa-backend-engineer` |
| Architecture decisions | `foundations-platform-architect` (always included) |

## Next Steps

1. **Integrate with LLM**: The current implementation generates templates. To generate actual content, integrate with an LLM provider (OpenAI, Anthropic, etc.) in the `TechnicalRequirementsGenerator._add_section_content()` method.

2. **Customize Templates**: Modify `templates/technical-requirements-template.md` to match your organization's requirements format.

3. **Add More Agents**: Create additional agent configurations in the `agents/` directory as needed.

## Troubleshooting

**Error: "Agents directory not found"**
- Ensure you're running the script from the project root
- Check that `agents/` directory exists

**Error: "Template not found"**
- Verify `templates/technical-requirements-template.md` exists
- Use `--template` flag to specify custom template path

**No agents detected**
- Check that your PRD contains relevant keywords
- Use `--agents` flag to manually specify agents

## Support

For more details, see:
- `tools/README.md` - Full documentation
- `templates/prd-template.md` - PRD template
- `templates/technical-requirements-template.md` - Technical requirements template
- `examples/example-prd.md` - Example PRD

