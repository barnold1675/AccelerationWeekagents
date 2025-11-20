# Agent Self-Scoring & Audit Logging Rubric

This document defines the scoring systems used by all PM agents to evaluate their outputs and provide actionable improvement recommendations.

## Overview

Every agent output includes:
- **Confidence Score** (0.0-1.0): Agent's certainty in its output quality
- **Relevance Score** (0.00-10.00): How well output addresses source input
- **Audit Log** (JSON): Detailed execution trace with decisions and assumptions
- **Score Improvement Recommendations**: Actionable steps to improve scores

---

## Scoring Scales

### Confidence Score (0.0-1.0)

Measures the agent's certainty in its output quality based on data availability, ambiguity, and decision clarity.

| Score | Rating | Interpretation |
|-------|--------|----------------|
| 0.95-1.0 | Very High | Direct data mapping, no interpretation needed |
| 0.85-0.94 | High | Clear data with minor inferences |
| 0.70-0.84 | Moderate | Some assumptions or gaps in source data |
| 0.50-0.69 | Low | Significant assumptions or limited data |
| 0.00-0.49 | Very Low | Major data gaps, high uncertainty |

**Scoring Factors:**
- Source data quality and completeness
- Number and severity of assumptions made
- Domain expertise availability
- Boundary compliance (not overstepping scope)

### Relevance Score (0.00-10.00)

Measures how well the agent output addresses and maps to the source input.

| Score | Rating | Interpretation |
|-------|--------|----------------|
| 9.00-10.00 | Excellent | Perfect or near-perfect mapping |
| 7.00-8.99 | Good | Strong mapping with minor gaps |
| 5.00-6.99 | Adequate | Acceptable but needs improvement |
| 3.00-4.99 | Poor | Major gaps or misalignments |
| 0.00-2.99 | Unacceptable | Minimal alignment, mostly wrong |

---

## Agent-Specific Rubrics

### Discovery PM: Ticket Relevance (0.00-10.00)

How well the PRD addresses the source Jira ticket.

| Score | Criteria |
|-------|----------|
| **10.00** | • All Jira requirements captured verbatim<br>• No hallucinated features<br>• Complete context from linked documents<br>• All acceptance criteria mapped to PRD sections |
| **8.00-9.99** | • 95%+ requirements captured<br>• Minor assumptions clearly labeled<br>• Context mostly complete<br>• 1-2 minor gaps in mapping |
| **6.00-7.99** | • 80%+ requirements captured<br>• Some missing context from linked docs<br>• 2-3 assumptions not explicitly labeled<br>• Minor misinterpretations |
| **4.00-5.99** | • 60%+ requirements captured<br>• Key acceptance criteria missed<br>• Significant assumptions unlabeled<br>• Some hallucinated requirements |
| **2.00-3.99** | • <60% requirements captured<br>• Major gaps in problem definition<br>• Wrong user segments<br>• Multiple hallucinations |
| **0.00-1.99** | • Minimal alignment with ticket<br>• Wrong problem statement<br>• Mostly hallucinated content<br>• Critical requirements missed |

### Feature PM: PRD Relevance (0.00-10.00)

How well epics/stories cover the source PRD requirements.

| Score | Criteria |
|-------|----------|
| **10.00** | • All PRD requirements traced to stories<br>• Perfect acceptance criteria mapping<br>• No orphaned stories<br>• Dependencies correctly identified |
| **8.00-9.99** | • 95%+ requirements covered<br>• Strong traceability<br>• Minor gaps in edge case stories<br>• Dependencies mostly complete |
| **6.00-7.99** | • 80%+ requirements covered<br>• Some stories missing ACs<br>• 2-3 requirements unclear mapping<br>• Some dependency gaps |
| **4.00-5.99** | • 60%+ requirements covered<br>• Missing stories for key features<br>• Poor INVEST compliance<br>• Significant dependency gaps |
| **2.00-3.99** | • <60% requirements covered<br>• Major features missing epics<br>• Poor prioritization rationale<br>• Wrong scope boundaries |
| **0.00-1.99** | • Minimal PRD alignment<br>• Wrong feature breakdown<br>• Stories for non-PRD features<br>• No traceability |

### Rollout PM: Feature Readiness (0.00-10.00)

How comprehensive the launch plan addresses all feature aspects.

| Score | Criteria |
|-------|----------|
| **10.00** | • All phases with specific go/no-go criteria<br>• All KPIs measurable with baselines<br>• Complete GTM materials<br>• Defined rollback triggers |
| **8.00-9.99** | • Clear phasing with criteria<br>• KPIs defined, minor baseline gaps<br>• GTM mostly complete<br>• Rollback approach defined |
| **6.00-7.99** | • Phasing defined but criteria vague<br>• Some KPIs lack measurement method<br>• GTM gaps in training/support<br>• Basic rollback mention |
| **4.00-5.99** | • Incomplete phasing<br>• KPIs not measurable<br>• Missing GTM components<br>• No rollback planning |
| **2.00-3.99** | • Single phase only<br>• Wrong or missing KPIs<br>• No GTM alignment<br>• No contingency planning |
| **0.00-1.99** | • No phasing<br>• No success metrics<br>• No GTM content<br>• No risk mitigation |

### VOC Analysis: Feedback Coverage (0.00-10.00)

How well the analysis captures themes from source feedback.

| Score | Criteria |
|-------|----------|
| **10.00** | • All themes identified (≥3 occurrences)<br>• Perfect quote attribution<br>• Accurate severity scoring<br>• Strong trend analysis |
| **8.00-9.99** | • Major themes captured<br>• Complete attribution<br>• Justified severity scores<br>• Good trend data |
| **6.00-7.99** | • Most themes captured<br>• Minor attribution gaps<br>• Some severity scores unclear<br>• Limited trend data |
| **4.00-5.99** | • Missing important themes<br>• Incomplete attribution<br>• Questionable severity<br>• No trend analysis |
| **2.00-3.99** | • Major themes missed<br>• Poor attribution<br>• Wrong severity levels<br>• Misrepresented feedback |
| **0.00-1.99** | • Wrong themes identified<br>• No attribution<br>• Fabricated quotes<br>• No connection to source |

---

## Audit Log Structure

Every agent generates a JSON audit log with this core structure:

```json
{
  "agent_execution_log": {
    "metadata": {
      "agent_name": "string",
      "agent_version": "string",
      "execution_id": "uuid",
      "timestamp": "ISO-8601",
      "source_input": "string",
      "output_artifact": "string"
    },
    "overall_assessment": {
      "overall_confidence_score": 0.0-1.0,
      "relevance_score": 0.00-10.00,
      "estimated_human_review_time_minutes": number,
      "generation_time_minutes": number,
      "reasoning": "string"
    },
    "section_assessments": [...],
    "data_sources_used": [...],
    "decisions_made": [...],
    "assumptions_made": [...],
    "quality_checks_performed": [...],
    "score_improvement_recommendations": [...],
    "recommended_review_sequence": [...]
  }
}
```

### Key Components

**Section Assessments**: Per-section confidence and relevance scores with reasoning.

**Decisions Made**: Key choices with alternatives considered and validation needs.

**Assumptions Made**: Explicit assumptions with risk-if-wrong and validation approach.

**Quality Checks**: Pass/Fail/Warning results for mandatory checks.

**Score Improvement Recommendations**: Actionable steps to improve scores.

**Recommended Review Sequence**: Prioritized human review plan.

---

## Score Improvement Recommendations

Every agent provides specific, actionable recommendations to improve scores:

```json
{
  "current_score": 8.2,
  "target_score": 9.0,
  "area": "Section 3: Target Users",
  "recommendation": "Add validated user research data",
  "implementation": "Conduct 3 user interviews per segment",
  "estimated_impact": "+0.8 relevance"
}
```

### Recommendation Quality Criteria

- **Specific**: Clear what needs to change
- **Actionable**: Concrete steps to implement
- **Measurable**: Expected impact quantified
- **Prioritized**: Highest impact first

---

## Human Review Guidance

Each audit log includes a recommended review sequence:

| Order | Reviewer Role | Focus Areas | Est. Time |
|-------|--------------|-------------|-----------|
| 1 | Product Manager | Business alignment, user segments | 15-20 min |
| 2 | Analytics Lead | Metrics, baselines, targets | 10-15 min |
| 3 | Engineering Lead | Feasibility, technical risks | 10-15 min |
| 4 | Design Lead | UX considerations | 5-10 min |

Review priority is determined by:
- Section confidence scores (lower = higher priority)
- Business impact of decisions
- Assumption risk levels

---

## Score Thresholds

### Minimum Acceptable Scores

| Agent | Confidence | Relevance | Action if Below |
|-------|------------|-----------|-----------------|
| Discovery PM | 0.70 | 6.0 | Manual review required |
| Feature PM | 0.70 | 6.0 | Product lead approval |
| Rollout PM | 0.75 | 7.0 | GTM team review |
| VOC Analysis | 0.75 | 7.0 | Re-analyze with more data |

### Target Scores for Production

| Agent | Confidence | Relevance | Notes |
|-------|------------|-----------|-------|
| Discovery PM | ≥0.85 | ≥8.0 | Ready for stakeholder review |
| Feature PM | ≥0.82 | ≥8.0 | Ready for sprint planning |
| Rollout PM | ≥0.85 | ≥8.5 | Ready for GTM execution |
| VOC Analysis | ≥0.85 | ≥8.5 | Ready for PRD integration |

---

## Calibration Over Time

Track agent scores over time to:

1. **Identify systematic biases**: Are scores consistently too high/low?
2. **Measure improvement**: Do recommendations lead to better scores?
3. **Calibrate expectations**: Adjust thresholds based on actual quality

### Recommended Tracking

- Log all scores per agent per execution
- Compare predicted vs actual review times
- Track which recommendations were implemented
- Measure if implemented recommendations improved subsequent scores

---

## Examples

See `examples/audit-logs/` for complete audit log examples:

- `AUDIT_ADX-196_discovery_example.json` - Discovery PM PRD generation
- `AUDIT_VOC_search_example.json` - VOC Analysis theme extraction
- `AUDIT_EPICS_ADX-196_feature_example.json` - Feature PM story breakdown
- `AUDIT_ROLLOUT_ADX-196_example.json` - Rollout PM launch planning

---

## Integration with Orchestrator

The PRD Orchestrator validates scores from each agent:

1. **Minimum Thresholds**: Block workflow if scores below minimum
2. **Warning Thresholds**: Flag for review but continue
3. **Aggregation**: Combine agent scores for overall package quality
4. **Recommendations**: Surface top improvement recommendations

```markdown
## Orchestrator Score Validation

If Discovery PM relevance < 6.0:
  BLOCK - "PRD requires manual review before proceeding"

If VOC confidence < 0.70:
  WARNING - "VOC analysis may be incomplete"

If all scores ≥ minimum:
  PROCEED - Pass to next agent
```

---

## Best Practices

### For Agents

1. **Be conservative**: When uncertain, score lower and explain why
2. **Be specific**: Generic reasoning reduces score usefulness
3. **Be actionable**: Every low score needs improvement path
4. **Be honest**: Don't inflate scores to avoid review

### For Reviewers

1. **Start with low scores**: Focus review time on flagged areas
2. **Validate assumptions**: Check assumption risk levels
3. **Implement recommendations**: Follow improvement suggestions
4. **Calibrate expectations**: Adjust thresholds based on outcomes

### For Orchestration

1. **Enforce minimums**: Don't bypass score thresholds
2. **Surface blockers**: Make score failures visible
3. **Track trends**: Monitor score patterns over time
4. **Iterate thresholds**: Adjust based on quality outcomes
