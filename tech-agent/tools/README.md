# Technical Requirements Generator

This tool generates comprehensive technical requirements documents from Product Requirements Documents (PRDs) using multi-agent collaboration.

## Overview

The tool analyzes a PRD and automatically determines which specialized agents should contribute to different sections of the technical requirements document. Each agent brings their domain expertise (frontend, backend, testing, design, etc.) to create a complete technical specification.

## Prerequisites

**Option 1: Node.js (Recommended)**
- Node.js 14.0+ and npm
- Agent configurations in the `agents/` directory
- PRD template (optional, see `templates/prd-template.md`)
- Technical requirements template (see `templates/technical-requirements-template.md`)

**Option 2: Python (Alternative)**
- Python 3.8+
- Agent configurations in the `agents/` directory
- PRD template (optional, see `templates/prd-template.md`)
- Technical requirements template (see `templates/technical-requirements-template.md`)

## Installation

### Node.js Installation

```bash
# Install required Node.js packages
cd tools
npm install
cd ..
```

### Python Installation

```bash
# Install required Python packages
pip install json5

# Make script executable (Unix/Mac)
chmod +x tools/generate-technical-requirements.py
```

## Usage

### Basic Usage (Auto-detect Agents)

**Node.js**:
```bash
node tools/generate-technical-requirements.js path/to/prd.md
```

**Python**:
```bash
python tools/generate-technical-requirements.py path/to/prd.md
```

This will:
1. Analyze the PRD content
2. Automatically determine which agents are needed
3. Generate `technical-requirements.md` with contributions from relevant agents

### Specify Output File

**Node.js**:
```bash
node tools/generate-technical-requirements.js path/to/prd.md -o output/tech-requirements.md
```

**Python**:
```bash
python tools/generate-technical-requirements.py path/to/prd.md -o output/tech-requirements.md
```

### Specify Agents Manually

**Node.js**:
```bash
node tools/generate-technical-requirements.js path/to/prd.md \
  --agents foundations-platform-architect,frontend-web-engineer-ic,qa-web-specialist
```

**Python**:
```bash
python tools/generate-technical-requirements.py path/to/prd.md \
  --agents foundations-platform-architect,frontend-web-engineer-ic,qa-web-specialist
```

### Available Options

**Node.js**:
```bash
node tools/generate-technical-requirements.js --help
```

**Python**:
```bash
python tools/generate-technical-requirements.py --help
```

Options:
- `prd_file`: Path to PRD Markdown file (required)
- `-o, --output`: Output file path (default: `technical-requirements.md`)
- `-a, --agents`: Comma-separated list of agent IDs (default: auto-detect)
- `--agents-dir`: Directory containing agent configs (default: `agents`)
- `--template`: Path to technical requirements template (default: `templates/technical-requirements-template.md`)

## Agent Auto-Detection

The tool automatically detects which agents are needed based on PRD content:

- **Frontend/UI keywords** → `frontend-web-engineer-ic`, `ui-designer`, `ux-designer`, `design-engineer`
- **Backend/API keywords** → `martech-hops-developer`, `martech-notifications-publisher`
- **Testing keywords** → `qa-web-specialist`, `qa-mobile-engineer`, `qa-backend-engineer`
- **Architecture** → Always includes `foundations-platform-architect`

## Workflow

1. **PM creates PRD** using `templates/prd-template.md`
2. **Run generator** with the PRD file
3. **Tool analyzes PRD** and determines relevant agents
4. **Multi-agent collaboration** generates technical requirements
5. **Output** is a comprehensive technical requirements document

## Example

**Node.js**:
```bash
# Create a PRD (using the template)
cp templates/prd-template.md my-feature-prd.md
# Edit my-feature-prd.md with your requirements

# Generate technical requirements
node tools/generate-technical-requirements.js my-feature-prd.md -o my-feature-tech-requirements.md
```

**Python**:
```bash
# Create a PRD (using the template)
cp templates/prd-template.md my-feature-prd.md
# Edit my-feature-prd.md with your requirements

# Generate technical requirements
python tools/generate-technical-requirements.py my-feature-prd.md -o my-feature-tech-requirements.md
```

## Integration with LLM Providers

**Note**: The current implementation generates a template with placeholders. To generate actual content, you need to:

1. Integrate with an LLM provider (OpenAI, Anthropic, etc.)
2. Load agent personas from their config files
3. Use agent-specific prompts to generate section content
4. Combine agent outputs into the final document

The script structure is designed to make this integration straightforward - you would modify the `_add_section_content` method in `TechnicalRequirementsGenerator` to make actual LLM calls.

## Agent Contributions

Each agent contributes to specific sections based on their capabilities:

- **Foundations Platform Architect**: System Architecture, Infrastructure & DevOps
- **Frontend Web Engineer IC**: Frontend Requirements, Design System & UI Components
- **UI/UX Designers**: Frontend Requirements, Design System & UI Components
- **Design Engineer**: Design System & UI Components
- **Martech Developers**: Backend/API Requirements
- **QA Engineers**: Testing Strategy

## Next Steps

To make this fully functional:

1. Add LLM integration (OpenAI, Anthropic, etc.)
2. Load persona files and extract prompts
3. Implement section content generation using agent prompts
4. Add validation and quality checks
5. Support for iterative refinement based on feedback

