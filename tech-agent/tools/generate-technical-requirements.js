#!/usr/bin/env node
/**
 * Multi-Agent Technical Requirements Generator (Node.js)
 * 
 * This script takes a PRD (Product Requirements Document) in Markdown format
 * and uses multiple specialized agents to generate comprehensive technical requirements.
 * 
 * Usage:
 *     node generate-technical-requirements.js <prd-file.md> [--output <output-file.md>] [--agents <agent1,agent2,...>]
 */

const fs = require('fs');
const path = require('path');
const { parse: parseJson5 } = require('json5');

class AgentLoader {
    constructor(agentsDir = 'agents') {
        this.agentsDir = path.resolve(agentsDir);
        this.agents = {};
        this.loadAllAgents();
    }

    loadAllAgents() {
        if (!fs.existsSync(this.agentsDir)) {
            throw new Error(`Agents directory not found: ${this.agentsDir}`);
        }

        const files = fs.readdirSync(this.agentsDir);
        for (const file of files) {
            if (!file.endsWith('.json') || file === 'README.md') {
                continue;
            }

            try {
                const filePath = path.join(this.agentsDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                const agentConfig = JSON.parse(content);
                const agentId = agentConfig.agent_id;
                if (agentId) {
                    this.agents[agentId] = agentConfig;
                }
            } catch (error) {
                console.error(`Warning: Failed to load agent ${file}: ${error.message}`);
            }
        }
    }

    getAgent(agentId) {
        return this.agents[agentId] || null;
    }

    getAgentsByCategory(category) {
        return Object.values(this.agents).filter(agent => agent.category === category);
    }

    getAgentsByCapability(capability) {
        return Object.values(this.agents).filter(agent => 
            (agent.capabilities || []).includes(capability)
        );
    }
}

class PRDAnalyzer {
    constructor(agentLoader) {
        this.agentLoader = agentLoader;
    }

    analyzePRD(prdContent) {
        const prdLower = prdContent.toLowerCase();
        const recommendedAgents = new Set();

        // Always include platform architect for architecture decisions
        recommendedAgents.add('foundations-platform-architect');

        // Frontend/UI indicators
        const frontendKeywords = [
            'frontend', 'ui', 'user interface', 'component', 'react', 
            'web app', 'mobile app', 'design system', 'wireframe', 
            'prototype', 'ux', 'user experience'
        ];
        if (frontendKeywords.some(keyword => prdLower.includes(keyword))) {
            recommendedAgents.add('frontend-web-engineer-ic');
            if (prdLower.includes('design') || prdLower.includes('figma')) {
                recommendedAgents.add('ui-designer');
                recommendedAgents.add('ux-designer');
            }
            if (prdLower.includes('research') || prdLower.includes('user interview')) {
                recommendedAgents.add('ux-researcher');
            }
            if (prdLower.includes('design system') || prdLower.includes('component')) {
                recommendedAgents.add('design-engineer');
            }
        }

        // Backend/API indicators
        const backendKeywords = [
            'api', 'backend', 'server', 'database', 'lambda', 
            'microservice', 'endpoint', 'rest', 'graphql', 
            'adobe', 'hops'
        ];
        if (backendKeywords.some(keyword => prdLower.includes(keyword))) {
            if (prdLower.includes('adobe') || prdLower.includes('hops') || 
                prdLower.includes('journey optimizer')) {
                recommendedAgents.add('martech-hops-developer');
                recommendedAgents.add('martech-notifications-publisher');
            }
        }

        // Testing indicators
        const testingKeywords = ['test', 'qa', 'quality', 'automation', 'testing', 'validation'];
        if (testingKeywords.some(keyword => prdLower.includes(keyword))) {
            if (prdLower.includes('mobile') || prdLower.includes('ios') || 
                prdLower.includes('android')) {
                recommendedAgents.add('qa-mobile-engineer');
            } else if (prdLower.includes('api') || prdLower.includes('backend')) {
                recommendedAgents.add('qa-backend-engineer');
            } else {
                recommendedAgents.add('qa-web-specialist');
            }
        }

        return Array.from(recommendedAgents);
    }
}

class TechnicalRequirementsGenerator {
    constructor(agentLoader, templatePath = 'templates/technical-requirements-template.md') {
        this.agentLoader = agentLoader;
        this.templatePath = path.resolve(templatePath);
        if (!fs.existsSync(this.templatePath)) {
            throw new Error(`Template not found: ${this.templatePath}`);
        }
    }

    generate(prdContent, prdFilename, agentIds) {
        // Load template
        const template = fs.readFileSync(this.templatePath, 'utf8');

        // Get agent configs
        const agents = [];
        for (const agentId of agentIds) {
            const agent = this.agentLoader.getAgent(agentId);
            if (agent) {
                agents.push(agent);
            } else {
                console.error(`Warning: Agent '${agentId}' not found, skipping`);
            }
        }

        if (agents.length === 0) {
            throw new Error('No valid agents found');
        }

        // Generate sections using agents
        const sections = {};
        const contributingAgents = [];

        for (const agent of agents) {
            const agentId = agent.agent_id;
            const agentName = agent.name;
            contributingAgents.push(agentName);

            // Determine which sections this agent should contribute to
            const agentSections = this.getAgentSections(agent);

            for (const section of agentSections) {
                if (!sections[section]) {
                    sections[section] = [];
                }
                sections[section].push({
                    agent: agentName,
                    agent_id: agentId,
                    capabilities: agent.capabilities || []
                });
            }
        }

        // Build the document
        let output = template.replace('[PRD Name/ID]', path.basename(prdFilename, '.md'));
        output = output.replace('[Date]', this.getCurrentDate());
        output = output.replace('[List of agents that contributed]', contributingAgents.join(', '));

        // Add agent contribution details
        const agentContributions = this.formatAgentContributions(sections);
        output = output.replace(
            '[Detailed breakdown of which agents contributed to which sections]',
            agentContributions
        );

        // Add placeholder content for each section
        output = this.addSectionContent(output, prdContent, agents);

        return output;
    }

    getAgentSections(agent) {
        const agentId = agent.agent_id;
        const category = agent.category || '';
        const capabilities = agent.capabilities || [];
        const sections = [];

        // Architecture sections
        if (agentId.includes('foundations-platform-architect') || 
            capabilities.includes('monorepo-architecture')) {
            sections.push('2. System Architecture', '5. Infrastructure & DevOps');
        }

        // Frontend sections
        if (agentId.includes('frontend-web-engineer-ic') || 
            capabilities.includes('component-architecture')) {
            sections.push('3. Frontend Requirements', '7. Design System & UI Components');
        }

        // Design sections
        if (['ui-designer', 'ux-designer', 'design-engineer'].some(id => agentId.includes(id))) {
            sections.push('3. Frontend Requirements', '7. Design System & UI Components');
        }

        // Backend/API sections
        if (['martech-hops-developer', 'martech-notifications-publisher'].some(id => 
            agentId.includes(id))) {
            sections.push('4. Backend/API Requirements');
        }

        // Testing sections
        if (agentId.includes('qa') || capabilities.some(cap => cap.includes('test'))) {
            sections.push('6. Testing Strategy');
        }

        return [...new Set(sections)]; // Remove duplicates
    }

    formatAgentContributions(sections) {
        const lines = [];
        for (const [section, contributors] of Object.entries(sections)) {
            const agentNames = contributors.map(c => c.agent);
            lines.push(`- **${section}**: ${agentNames.join(', ')}`);
        }
        return lines.length > 0 ? lines.join('\n') : 'No agent contributions specified.';
    }

    addSectionContent(output, prdContent, agents) {
        const placeholderNote = `
> **Note**: This is a template output. In a full implementation, each section would be populated by calling the appropriate agent's LLM with the PRD content and agent-specific prompts.

> **Implementation Required**: Integrate with your LLM provider (OpenAI, Anthropic, etc.) to generate actual content based on:
> - PRD content analysis
> - Agent persona and capabilities
> - Agent-specific prompts from persona files
`;

        // Find first section and add note
        const sectionPattern = /(### \d+\.\d+ [^\n]+\n)/;
        const match = output.match(sectionPattern);
        
        if (match) {
            const insertPos = match.index + match[0].length;
            output = output.slice(0, insertPos) + placeholderNote + output.slice(insertPos);
        }

        return output;
    }

    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    }
}

// CLI parsing
function parseArgs() {
    const args = process.argv.slice(2);
    const result = {
        prdFile: null,
        output: 'technical-requirements.md',
        agents: null,
        agentsDir: 'agents',
        template: 'templates/technical-requirements-template.md'
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '-o' || arg === '--output') {
            result.output = args[++i];
        } else if (arg === '-a' || arg === '--agents') {
            result.agents = args[++i].split(',').map(a => a.trim());
        } else if (arg === '--agents-dir') {
            result.agentsDir = args[++i];
        } else if (arg === '--template') {
            result.template = args[++i];
        } else if (arg === '--help' || arg === '-h') {
            console.log(`
Usage: node generate-technical-requirements.js <prd-file.md> [options]

Options:
  -o, --output <file>     Output file path (default: technical-requirements.md)
  -a, --agents <list>      Comma-separated list of agent IDs (default: auto-detect)
  --agents-dir <dir>       Directory containing agent configs (default: agents)
  --template <file>        Path to technical requirements template
  -h, --help               Show this help message
            `);
            process.exit(0);
        } else if (!arg.startsWith('-') && !result.prdFile) {
            result.prdFile = arg;
        }
    }

    if (!result.prdFile) {
        console.error('Error: PRD file is required');
        console.error('Usage: node generate-technical-requirements.js <prd-file.md> [options]');
        process.exit(1);
    }

    return result;
}

// Main execution
function main() {
    const args = parseArgs();

    // Load PRD
    const prdPath = path.resolve(args.prdFile);
    if (!fs.existsSync(prdPath)) {
        console.error(`Error: PRD file not found: ${prdPath}`);
        process.exit(1);
    }

    const prdContent = fs.readFileSync(prdPath, 'utf8');

    // Load agents
    let agentLoader;
    try {
        agentLoader = new AgentLoader(args.agentsDir);
    } catch (error) {
        console.error(`Error loading agents: ${error.message}`);
        process.exit(1);
    }

    // Determine which agents to use
    let agentIds;
    if (args.agents) {
        agentIds = args.agents;
    } else {
        // Auto-detect agents from PRD
        const analyzer = new PRDAnalyzer(agentLoader);
        agentIds = analyzer.analyzePRD(prdContent);
        console.error(`Auto-detected agents: ${agentIds.join(', ')}`);
    }

    // Generate technical requirements
    try {
        const generator = new TechnicalRequirementsGenerator(agentLoader, args.template);
        const output = generator.generate(prdContent, path.basename(prdPath), agentIds);

        // Write output
        const outputPath = path.resolve(args.output);
        fs.writeFileSync(outputPath, output, 'utf8');

        console.log(`Technical requirements generated: ${outputPath}`);
        console.log(`Used ${agentIds.length} agents: ${agentIds.join(', ')}`);
    } catch (error) {
        console.error(`Error generating technical requirements: ${error.message}`);
        console.error(error.stack);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { AgentLoader, PRDAnalyzer, TechnicalRequirementsGenerator };

