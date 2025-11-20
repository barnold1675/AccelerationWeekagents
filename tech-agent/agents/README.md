# Local Agents

This directory contains agent configurations for all persona-based agents. Each agent configuration file references a persona file and includes agent-specific settings.

## Agent Structure

Each agent configuration includes:
- **agent_id**: Unique identifier for the agent
- **name**: Display name
- **persona_source**: Relative path to the persona file
- **persona_format**: Format of the persona file (json or json5)
- **category**: Category grouping (foundations, martech, neat-design-system, test-engineering)
- **settings**: Agent-specific runtime settings
- **capabilities**: List of capability tags from the persona
- **metadata**: Version and maintainer information

## Available Agents

### Foundations (2 agents)
- `foundations-platform-architect.json` - Platform architecture and monorepo expertise
- `frontend-web-engineer-ic.json` - Principal frontend engineer specializing in JSX/UI architecture

### Martech (2 agents)
- `martech-hops-developer.json` - AWS Lambda developer for Adobe Experience Platform APIs
- `martech-notifications-publisher.json` - Expert in transforming text to structured JSON for Adobe APIs

### Neat Design System (4 agents)
- `design-engineer.json` - Design system component support and implementation
- `ui-designer.json` - High-fidelity design with 100% design system compliance
- `ux-designer.json` - User-centered wireframes and interaction patterns
- `ux-researcher.json` - User research and usability testing

### Test Engineering (3 agents)
- `qa-backend-engineer.json` - Advanced API testing and virtualization expert
- `qa-mobile-engineer.json` - Mobile QA automation expert
- `qa-web-specialist.json` - Web QA expert

## Usage

Each agent configuration can be loaded along with its referenced persona file to create a fully configured agent instance.

