# PM Agent Scoring Rubric

This document defines the 2-score self-assessment system used by all PM agents.

## Overview

Every PM agent output is scored on exactly 2 dimensions:
1. **Translation Score** (0.00-10.00): How accurately the source was translated into the output
2. **Value Score** (0.00-10.00): How well the output solves actual customer problems

## Score Dimensions

### Translation Score (0.00-10.00)

**Purpose**: Measures fidelity between input and output.

| Score Range | Rating | Description |
|-------------|--------|-------------|
| 9.0-10.0 | Perfect | Complete capture, zero hallucinations, full traceability |
| 7.0-8.9 | Excellent | Minor gaps or assumptions that need validation |
| 5.0-6.9 | Good | Some requirements unclear or missing coverage |
| 3.0-4.9 | Adequate | Major gaps or poor translation |
| 1.0-2.9 | Poor | Significant misinterpretations |
| 0.0-0.9 | Minimal | Minimal translation accuracy |

**Agent-Specific Focus**:

| Agent | Source | Output | Translation Measures |
|-------|--------|--------|---------------------|
| Discovery PM | Epic/Jira | PRD | All requirements captured, no hallucinations |
| Feature PM | PRD | Epics/Stories | All PRD sections converted to stories |
| Rollout PM | PRD/Epics | Launch Plan | All requirements have launch coverage |
| VOC Analysis | Feedback | Themes | All feedback categorized, quotes verbatim |

### Value Score (0.00-10.00)

**Purpose**: Measures customer impact.

| Score Range | Rating | Description |
|-------------|--------|-------------|
| 9.0-10.0 | Exceptional | Directly solves critical customer problems |
| 7.0-8.9 | High | Addresses major customer needs |
| 5.0-6.9 | Moderate | Solves some customer problems |
| 3.0-4.9 | Low | Tangential to customer needs |
| 1.0-2.9 | Minimal | Disconnected from customer problems |
| 0.0-0.9 | None | No clear customer value |

## Threshold Requirements

- **Minimum Translation Score**: 7.0
- **Minimum Value Score**: 7.0

Scores below 7.0 indicate the output needs revision.

## Output Format

Every agent output includes:

```markdown
## Self-Assessment

### Scores
- **Translation Score**: X.X / 10.0
- **Value Score**: X.X / 10.0

### Translation Analysis
- What I translated well
- Where translation could improve

### Value Analysis
- Customer problems addressed
- Where value could improve

### Human Review Needed
- Critical reviews
- Optional reviews
```

## Audit Logs

Saved to `docs/AUDIT_{type}_{id}_{timestamp}.json` with:
- Metadata
- Scores with reasoning
- Element-by-element breakdowns
- Quality checks
- Recommendations
- Human review guidance

## Examples

See `examples/audit-logs/` for complete examples.
