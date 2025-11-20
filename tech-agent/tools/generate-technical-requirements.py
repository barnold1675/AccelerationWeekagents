#!/usr/bin/env python3
"""
Multi-Agent Technical Requirements Generator

This script takes a PRD (Product Requirements Document) in Markdown format
and uses multiple specialized agents to generate comprehensive technical requirements.

Usage:
    python generate-technical-requirements.py <prd-file.md> [--output <output-file.md>] [--agents <agent1,agent2,...>]
"""

import json
import os
import re
import sys
import argparse
from pathlib import Path
from typing import List, Dict, Set, Optional
import json5  # For parsing JSON5 files


class AgentLoader:
    """Loads and manages agent configurations"""
    
    def __init__(self, agents_dir: str = "agents"):
        self.agents_dir = Path(agents_dir)
        self.agents: Dict[str, Dict] = {}
        self.load_all_agents()
    
    def load_all_agents(self):
        """Load all agent configurations from the agents directory"""
        if not self.agents_dir.exists():
            raise FileNotFoundError(f"Agents directory not found: {self.agents_dir}")
        
        for agent_file in self.agents_dir.glob("*.json"):
            if agent_file.name == "README.md":
                continue
            try:
                with open(agent_file, 'r') as f:
                    agent_config = json.load(f)
                    agent_id = agent_config.get('agent_id')
                    if agent_id:
                        self.agents[agent_id] = agent_config
            except Exception as e:
                print(f"Warning: Failed to load agent {agent_file}: {e}", file=sys.stderr)
    
    def get_agent(self, agent_id: str) -> Optional[Dict]:
        """Get agent configuration by ID"""
        return self.agents.get(agent_id)
    
    def get_agents_by_category(self, category: str) -> List[Dict]:
        """Get all agents in a category"""
        return [agent for agent in self.agents.values() if agent.get('category') == category]
    
    def get_agents_by_capability(self, capability: str) -> List[Dict]:
        """Get all agents that have a specific capability"""
        matching = []
        for agent in self.agents.values():
            capabilities = agent.get('capabilities', [])
            if capability in capabilities:
                matching.append(agent)
        return matching


class PRDAnalyzer:
    """Analyzes PRD content to determine which agents are needed"""
    
    def __init__(self, agent_loader: AgentLoader):
        self.agent_loader = agent_loader
    
    def analyze_prd(self, prd_content: str) -> Set[str]:
        """Analyze PRD content and return set of recommended agent IDs"""
        prd_lower = prd_content.lower()
        recommended_agents = set()
        
        # Always include platform architect for architecture decisions
        recommended_agents.add('foundations-platform-architect')
        
        # Frontend/UI indicators
        frontend_keywords = ['frontend', 'ui', 'user interface', 'component', 'react', 'web app', 'mobile app', 
                           'design system', 'wireframe', 'prototype', 'ux', 'user experience']
        if any(keyword in prd_lower for keyword in frontend_keywords):
            recommended_agents.add('frontend-web-engineer-ic')
            if 'design' in prd_lower or 'figma' in prd_lower:
                recommended_agents.add('ui-designer')
                recommended_agents.add('ux-designer')
            if 'research' in prd_lower or 'user interview' in prd_lower:
                recommended_agents.add('ux-researcher')
            if 'design system' in prd_lower or 'component' in prd_lower:
                recommended_agents.add('design-engineer')
        
        # Backend/API indicators
        backend_keywords = ['api', 'backend', 'server', 'database', 'lambda', 'microservice', 
                          'endpoint', 'rest', 'graphql', 'adobe', 'hops']
        if any(keyword in prd_lower for keyword in backend_keywords):
            if 'adobe' in prd_lower or 'hops' in prd_lower or 'journey optimizer' in prd_lower:
                recommended_agents.add('martech-hops-developer')
                recommended_agents.add('martech-notifications-publisher')
            else:
                # General backend - would need a backend engineer agent
                pass
        
        # Testing indicators
        testing_keywords = ['test', 'qa', 'quality', 'automation', 'testing', 'validation']
        if any(keyword in prd_lower for keyword in testing_keywords):
            if 'mobile' in prd_lower or 'ios' in prd_lower or 'android' in prd_lower:
                recommended_agents.add('qa-mobile-engineer')
            elif 'api' in prd_lower or 'backend' in prd_lower:
                recommended_agents.add('qa-backend-engineer')
            else:
                recommended_agents.add('qa-web-specialist')
        
        return recommended_agents


class TechnicalRequirementsGenerator:
    """Generates technical requirements using multi-agent collaboration"""
    
    def __init__(self, agent_loader: AgentLoader, template_path: str = "templates/technical-requirements-template.md"):
        self.agent_loader = agent_loader
        self.template_path = Path(template_path)
        if not self.template_path.exists():
            raise FileNotFoundError(f"Template not found: {self.template_path}")
    
    def generate(self, prd_content: str, prd_filename: str, agent_ids: List[str]) -> str:
        """Generate technical requirements document using specified agents"""
        
        # Load template
        with open(self.template_path, 'r') as f:
            template = f.read()
        
        # Get agent configs
        agents = []
        for agent_id in agent_ids:
            agent = self.agent_loader.get_agent(agent_id)
            if agent:
                agents.append(agent)
            else:
                print(f"Warning: Agent '{agent_id}' not found, skipping", file=sys.stderr)
        
        if not agents:
            raise ValueError("No valid agents found")
        
        # Generate sections using agents
        sections = {}
        contributing_agents = []
        
        for agent in agents:
            agent_id = agent['agent_id']
            agent_name = agent['name']
            contributing_agents.append(agent_name)
            
            # Determine which sections this agent should contribute to
            agent_sections = self._get_agent_sections(agent)
            
            for section in agent_sections:
                if section not in sections:
                    sections[section] = []
                sections[section].append({
                    'agent': agent_name,
                    'agent_id': agent_id,
                    'capabilities': agent.get('capabilities', [])
                })
        
        # Build the document
        output = template.replace('[PRD Name/ID]', Path(prd_filename).stem)
        output = output.replace('[Date]', self._get_current_date())
        output = output.replace('[List of agents that contributed]', ', '.join(contributing_agents))
        
        # Add agent contribution details
        agent_contributions = self._format_agent_contributions(sections)
        output = output.replace(
            '[Detailed breakdown of which agents contributed to which sections]',
            agent_contributions
        )
        
        # Add placeholder content for each section
        # In a real implementation, this would call the actual agent LLMs
        output = self._add_section_content(output, prd_content, agents)
        
        return output
    
    def _get_agent_sections(self, agent: Dict) -> List[str]:
        """Determine which sections an agent should contribute to based on their capabilities"""
        agent_id = agent['agent_id']
        category = agent.get('category', '')
        capabilities = agent.get('capabilities', [])
        sections = []
        
        # Architecture sections
        if 'foundations-platform-architect' in agent_id or 'monorepo-architecture' in capabilities:
            sections.extend(['2. System Architecture', '5. Infrastructure & DevOps'])
        
        # Frontend sections
        if 'frontend-web-engineer-ic' in agent_id or 'component-architecture' in capabilities:
            sections.extend(['3. Frontend Requirements', '7. Design System & UI Components'])
        
        # Design sections
        if any(x in agent_id for x in ['ui-designer', 'ux-designer', 'design-engineer']):
            sections.extend(['3. Frontend Requirements', '7. Design System & UI Components'])
        
        # Backend/API sections
        if any(x in agent_id for x in ['martech-hops-developer', 'martech-notifications-publisher']):
            sections.extend(['4. Backend/API Requirements'])
        
        # Testing sections
        if 'qa' in agent_id or any('test' in cap for cap in capabilities):
            sections.extend(['6. Testing Strategy'])
        
        return list(set(sections))  # Remove duplicates
    
    def _format_agent_contributions(self, sections: Dict) -> str:
        """Format agent contributions for the appendix"""
        lines = []
        for section, contributors in sections.items():
            agent_names = [c['agent'] for c in contributors]
            lines.append(f"- **{section}**: {', '.join(agent_names)}")
        return '\n'.join(lines) if lines else "No agent contributions specified."
    
    def _add_section_content(self, output: str, prd_content: str, agents: List[Dict]) -> str:
        """Add placeholder content to sections (in real implementation, this would call agent LLMs)"""
        # This is a placeholder - in a real implementation, you would:
        # 1. Extract relevant PRD sections
        # 2. Call each agent's LLM with appropriate prompts
        # 3. Generate section content based on agent responses
        
        placeholder_note = """
> **Note**: This is a template output. In a full implementation, each section would be populated by calling the appropriate agent's LLM with the PRD content and agent-specific prompts.

> **Implementation Required**: Integrate with your LLM provider (OpenAI, Anthropic, etc.) to generate actual content based on:
> - PRD content analysis
> - Agent persona and capabilities
> - Agent-specific prompts from persona files
"""
        
        # Find sections and add placeholder
        section_pattern = r'(### \d+\.\d+ [^\n]+\n)'
        matches = list(re.finditer(section_pattern, output))
        
        if matches:
            # Insert note after first section
            first_match = matches[0]
            insert_pos = first_match.end()
            output = output[:insert_pos] + placeholder_note + output[insert_pos:]
        
        return output
    
    def _get_current_date(self) -> str:
        """Get current date in readable format"""
        from datetime import datetime
        return datetime.now().strftime("%Y-%m-%d")


def main():
    parser = argparse.ArgumentParser(
        description='Generate technical requirements from a PRD using multi-agent collaboration'
    )
    parser.add_argument('prd_file', help='Path to PRD Markdown file')
    parser.add_argument('-o', '--output', help='Output file path (default: technical-requirements.md)',
                       default='technical-requirements.md')
    parser.add_argument('-a', '--agents', help='Comma-separated list of agent IDs to use (default: auto-detect)',
                       default=None)
    parser.add_argument('--agents-dir', help='Directory containing agent configs (default: agents)',
                       default='agents')
    parser.add_argument('--template', help='Path to technical requirements template (default: templates/technical-requirements-template.md)',
                       default='templates/technical-requirements-template.md')
    
    args = parser.parse_args()
    
    # Load PRD
    prd_path = Path(args.prd_file)
    if not prd_path.exists():
        print(f"Error: PRD file not found: {prd_path}", file=sys.stderr)
        sys.exit(1)
    
    with open(prd_path, 'r') as f:
        prd_content = f.read()
    
    # Load agents
    try:
        agent_loader = AgentLoader(args.agents_dir)
    except Exception as e:
        print(f"Error loading agents: {e}", file=sys.stderr)
        sys.exit(1)
    
    # Determine which agents to use
    if args.agents:
        agent_ids = [a.strip() for a in args.agents.split(',')]
    else:
        # Auto-detect agents from PRD
        analyzer = PRDAnalyzer(agent_loader)
        agent_ids = list(analyzer.analyze_prd(prd_content))
        print(f"Auto-detected agents: {', '.join(agent_ids)}", file=sys.stderr)
    
    # Generate technical requirements
    try:
        generator = TechnicalRequirementsGenerator(agent_loader, args.template)
        output = generator.generate(prd_content, prd_path.name, agent_ids)
        
        # Write output
        output_path = Path(args.output)
        with open(output_path, 'w') as f:
            f.write(output)
        
        print(f"Technical requirements generated: {output_path}")
        print(f"Used {len(agent_ids)} agents: {', '.join(agent_ids)}")
        
    except Exception as e:
        print(f"Error generating technical requirements: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()

