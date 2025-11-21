# PM Agent Scoring Rubric

This document defines the 2-score assessment system for PRD quality evaluation.

## Overview

The final PRD is scored on exactly 2 dimensions:
1. **Translation Score** (0.00-10.00): How accurately the PRD captures the Jira Epic requirements
2. **Value Score** (0.00-10.00): How well the PRD demonstrates business value

**Important**: These scores apply to the **final PRD output only**, not to intermediate agent outputs like VOC analysis.

## Score Dimensions

### Translation Score (0.00-10.00)

**Purpose**: Measures Epic → PRD fidelity.

**Definition**: "Did the PRD accurately capture what was in the Jira Epic?"

| Score Range | Rating | Description |
|-------------|--------|-------------|
| 9.0-10.0 | Perfect | Complete capture of all Epic requirements, zero hallucinations, full traceability |
| 7.0-8.9 | Excellent | Minor gaps or assumptions that need validation |
| 5.0-6.9 | Good | Some requirements unclear or missing coverage |
| 3.0-4.9 | Adequate | Major gaps or poor translation |
| 1.0-2.9 | Poor | Significant misinterpretations |
| 0.0-0.9 | Minimal | Minimal translation accuracy |

**What to Measure**:
- All Epic requirements captured in PRD sections
- No hallucinated requirements (invented features not in Epic)
- Correct interpretation of acceptance criteria
- Success metrics match Epic targets exactly
- User stories preserved accurately
- Risks and mitigations from Epic included

### Value Score (0.00-10.00)

**Purpose**: Measures business value of the PRD.

**Definition**: "Is this work worth doing? Does the PRD justify investment?"

| Score Range | Rating | Description |
|-------------|--------|-------------|
| 9.0-10.0 | Exceptional | Clear business case with strong ROI indicators |
| 7.0-8.9 | High | Solid value proposition with quantified benefits |
| 5.0-6.9 | Moderate | Value present but not fully quantified |
| 3.0-4.9 | Low | Weak business case or unclear benefits |
| 1.0-2.9 | Minimal | No clear value proposition |
| 0.0-0.9 | None | Cannot justify investment |

**What to Measure**:
- **VOC Alignment**: Does PRD address actual customer pain points?
- **Revenue Lift Potential**: Conversion, basket size, LTV impact
- **Cost/Efficiency Gains**: Support reduction, automation benefits
- **Strategic Alignment**: Fits company goals and roadmap
- **Competitive Differentiation**: Creates market advantage
- **Risk-Adjusted ROI**: Benefits vs implementation risks

## Threshold Requirements

- **Minimum Translation Score**: 7.0
- **Minimum Value Score**: 7.0

Scores below 7.0 indicate the PRD needs revision before stakeholder review.

## Scoring Workflow

### When Scoring Happens

Scoring occurs **once** on the final PRD, after:
1. VOC analysis is complete (provides input for Value Score)
2. Discovery PM has generated the PRD
3. Both Jira Epic and VOC data are incorporated

### Who Scores

The **Discovery PM agent** scores the PRD it creates, evaluating:
- Translation: PRD vs Jira Epic accuracy
- Value: PRD business value assessment (incorporating VOC insights + business analysis)

### Intermediate Agents

VOC Analysis agent does NOT produce Translation/Value scores. It provides:
- Quality metrics (theme confidence, quote count, data coverage)
- These feed INTO the Value Score assessment of the final PRD

## Score Output

Saved to `Run_Scores/SCORES_{ticket_id}_{timestamp}.md` as a markdown file with:
- Translation Score with reasoning
- Value Score with component breakdown
- Improvement recommendations

**No JSON audit files are generated.** All scoring information is in the markdown file.

## Value Score Components

The Value Score is a holistic assessment including:

| Component | Weight | What to Assess |
|-----------|--------|----------------|
| VOC Alignment | 30% | Does PRD address customer pain points from feedback? |
| Revenue Impact | 25% | Conversion lift, basket size, retention improvements |
| Strategic Fit | 20% | Alignment with company goals, roadmap priorities |
| Efficiency Gains | 15% | Cost reduction, automation, support deflection |
| Competitive Edge | 10% | Market differentiation, barrier to entry |

## Examples

See `Examples/audit-logs/` for complete examples.
