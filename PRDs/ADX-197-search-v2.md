# Product Brief: ADX Week Search V2

## 1. Overview

| Field | Details |
| --- | --- |
| **Feature/Project Name** | ADX Week Search V2 |
| **Author** | Courtney Johnson |
| **Date Created** | 2025-11-19 |
| **Last Updated** | 2025-11-19 |
| **Status** | Draft |
| **Stakeholders** | Product (Courtney Johnson), Engineering, Design/UX, QA, Analytics, Merchandising Team, Marketing |
| **Jira Reference** | ADX-197 (Epic) |
| **Linked Issues** | Clones ADX-196 (Unauthenticated Homepage) |

---

## 2. Background / Context

### Business Problem

The current implementation of Proof Search presents significant challenges that limit our ability to scale, optimize, and maintain the feature effectively:

1. **Technical Debt**: Proof Search is not built on the web foundations tech stack, creating maintenance overhead and integration challenges
2. **Stability Concerns**: The current architecture lacks long-term stability, resulting in production defects that impact customer experience
3. **Limited Capabilities**: Missing key merchandising and analytics capabilities prevent business users from optimizing search performance

### Strategic Importance

Proof Search is a critical driver of customer engagement and revenue, **powering approximately 75% of add-to-cart (ATC) actions**. This makes search optimization one of the highest-impact opportunities for improving digital commerce performance.

### Solution Approach

Upgrading to Coveo's Commerce API and Merchandising Hub will:
- Unlock **no-code merchandising capabilities**, enabling faster iteration and optimization by business users
- Align with strategic goals of improving UX through the **Neat Design System**
- Enhance analytics for better decision-making through **Adobe Analytics coverage and schema compliance**
- Ensure long-term scalability, stability, and competitive advantage in the digital commerce space

### Related Discovery

This initiative clones ADX-196 (Unauthenticated Homepage), indicating shared architectural patterns and user experience considerations for browse and search functionality.

### Voice of Customer (VOC) Insights

Analysis of November 2025 Medallia/SurveySparrow feedback (887+ comments) reveals critical customer pain points that directly validate this initiative. **89% of feedback sentiment is negative**, with the following themes identified:

#### Theme 1: Performance & Speed Issues (Critical - P0)
**Frequency:** Very High | **Sentiment:** Strongly Negative

Customers consistently report slow loading times, lag, and timeouts as their primary frustration. This directly impacts conversion and satisfaction scores.

**Customer Verbatims:**
- *"Website is slow and not responsive. Your dev team needs to focus on optimizing speed."* - CA South
- *"The site is getting very slow to load, I'd prefer less flash faster loads"* - FL
- *"Too slow and too many changes"* - FL
- *"Very very laggy, tons of missing pictures"* - FL

**Impact:** Users abandoning sessions, reduced ATC conversion, increased support tickets

**Search V2 Addressal:** Coveo's optimized API architecture will significantly improve response times and reduce latency.

---

#### Theme 2: Search Functionality Failures (Critical - P0)
**Frequency:** High | **Sentiment:** Strongly Negative

Search results are unreliable, often returning nothing or irrelevant results. Users must repeatedly log in/out to get search to function.

**Customer Verbatims:**
- *"The search function is not working well on the update"* - NE
- *"Half the time it doesn't show up (nothing shows up) or the thing you're looking for isn't the first thing shown"* - OH
- *"I have to sign out of the app every time I look up something different"* - NY

**Impact:** Users unable to find products, lost sales, frustration with core platform functionality

**Search V2 Addressal:** Coveo Commerce API provides industry-leading relevance algorithms and reliable search infrastructure.

---

#### Theme 3: App Stability & Crashes (High - P1)
**Frequency:** High | **Sentiment:** Strongly Negative

The mobile app experiences frequent crashes, glitches, and session terminations—particularly on iOS devices.

**Customer Verbatims:**
- *"Mobile app is garbage"* - CA North
- *"Your new app and online ordering portal are garbage - they time out, don't bring up order numbers"* - IA
- *"Since you updated my proof app sucks! Can't get products to show and cuts me out before done ordering"* - IL
- *"I hate the updated app"* - NV

**Impact:** Mobile users (majority of traffic) unable to complete orders, brand perception damage

**Search V2 Addressal:** Stable, well-tested search infrastructure with graceful error handling and fallback behaviors.

---

#### Theme 4: Navigation & State Management (High - P1)
**Frequency:** Medium-High | **Sentiment:** Negative

Users lose their place when navigating back from product details, forcing them to scroll through results again.

**Customer Verbatims:**
- *"Please fix when you scroll and select an item to look at and you finish that it brings you back to where you left off"* - NY
- *"After ordering promo item it goes back to main screen instead of staying on that same product list"* - DE
- *"Seems like you've got to hit a lot of back buttons after accepting a proof proposal before you can get to your cart"* - NE

**Impact:** Increased time to complete tasks, user frustration, abandoned sessions

**Search V2 Addressal:** Modern state management with Neat Design System components will preserve scroll position and navigation state.

---

#### Theme 5: UX Complexity (Medium - P2)
**Frequency:** Medium | **Sentiment:** Negative

Users find the interface unintuitive and overly complex, especially for common tasks like viewing past orders.

**Customer Verbatims:**
- *"Proof website needs a lot of love. Very unfriendly for users to use"* - CO
- *"Website needs a lot of work - overly complicated ways to search for past purchases and saved items"* - FL
- *"I found the new update to be less intuitive than the old interface"* - NE

**Impact:** Increased cognitive load, slower task completion, reduced satisfaction scores

**Search V2 Addressal:** Neat Design System alignment will provide consistent, intuitive UI patterns.

---

#### VOC Summary Statistics

| Metric | Value |
|--------|-------|
| Total Comments Analyzed | 887+ |
| Negative Sentiment | 89% |
| Primary Device | Mobile (iOS) |
| Avg. Satisfaction Score | 6.1/10 |
| Top Tags | Issues, Speed, App, Usability |

**Geographic Spread:** FL, CA, TX, NY, OH, IL, NV, KY, NE, DE, LA, IA, OR, IN, OK, MO, CO

---

## 3. Target Users

### Primary Segments

* **Segment A: Merchandisers**
  - Internal SGWS team members responsible for search result optimization
  - Need tools to control filter behavior, search result rankings, and promotional content
  - Currently constrained by limited no-code capabilities and manual processes
  - Primary goal: Drive conversions through optimized search experiences

* **Segment B: Customers (Authenticated)**
  - Registered users with pricing and ordering capabilities
  - High-intent buyers using search to find specific products
  - Expect fast, accurate search results with relevant filtering options
  - Primary goal: Find products quickly and add to cart

* **Segment C: Customers (Unauthenticated)**
  - Browsing visitors who can search but cannot see pricing or place orders
  - Intent ranges from curiosity to readiness to work with SGWS
  - May be evaluating SGWS catalog and capabilities
  - Primary goal: Explore product availability and determine fit

### User Behavior / Intent

**Current User Journey Pain Points:**

1. **Merchandisers** face friction when attempting to customize search results:
   - Limited control over filter behavior (cannot easily adjust facet display, ordering, or defaults)
   - Restricted ability to boost, bury, or pin specific products in search results
   - No self-service tools for A/B testing search configurations

2. **Customers** experience suboptimal search experiences:
   - Search stability issues cause intermittent failures or slow performance
   - Filter options may not surface the most relevant refinements
   - Search result relevance varies inconsistently

**User Constraints (from discovery):**

1. Merchandisers have limited control over filter behavior
2. Merchandisers have limited control over search result customization

---

## 4. Objective / Goals

_What are we trying to achieve?_

### Business Goals

* **Improve Digital Customer Experience**: Deliver faster, more stable, and more relevant search results aligned with the Neat Design System
* **Increase Revenue Through Search**: Improve add-to-cart conversion rates from search by enabling merchandising optimization
* **Reduce Technical Debt**: Migrate search to web foundations tech stack for improved maintainability and scalability
* **Empower Business Users**: Provide no-code merchandising tools for faster iteration without engineering dependencies
* **Enhance Data-Driven Decisions**: Achieve complete Adobe Analytics coverage for search behavior analysis

### Success Metrics Framework

* **Stability Metrics**: Reduction in production defects related to search functionality
* **Conversion Metrics**: Increase in ATC conversion rate from search results
* **Engagement Metrics**: Higher interaction rates with filters and merchandising features
* **Analytics Coverage**: 100% Adobe Analytics schema compliance for search events

### OKR Alignment

This initiative directly supports the following organizational OKRs:
- Improve digital customer experience
- Increase conversion rate from search
- Reduce tech debt in core commerce features

---

## 5. Scope

### In Scope

* **Coveo Commerce API Integration**
  - Migration from current search implementation to Coveo Commerce API
  - Implementation of Coveo Merchandising Hub for business user controls
  - Search query processing and result ranking via Coveo

* **Merchandising Capabilities**
  - Filter behavior configuration (facet display, ordering, defaults)
  - Search result customization (boosting, burying, pinning products)
  - No-code tools for merchandisers to iterate without engineering support
  - Promotional banner and featured product capabilities in search

* **User Interface Updates**
  - Search results page aligned with Neat Design System
  - Enhanced filter/facet UI components
  - Improved search result cards with consistent styling
  - Responsive design for all device types

* **Analytics Implementation**
  - Adobe Analytics event tracking for all search interactions
  - Schema compliance for standardized reporting
  - Search performance and conversion tracking

* **Performance and Stability**
  - Performance benchmarking and optimization
  - Error handling and graceful degradation
  - Load testing to ensure scalability

* **De-risking Implementation**
  - Feature flag infrastructure for controlled rollout
  - Incremental traffic ramping capabilities
  - Rollback procedures

### Out of Scope

> _To be completed by Agent_

* [TBD - Pending Agent input]
* [TBD - Pending Agent input]

---

## 6. Feature Documentation

> _To be completed by Agent_

| Item | Link or Description |
| --- | --- |
| **Wireframes** | [TBD - Pending Agent input] |
| **Mockups** | [TBD - Pending Agent input] |
| **UX Notes** | [TBD - Pending Agent input] |

---

## 7. Success Metrics / KPIs

> Define how success will be measured post-launch:

### Metric Framework

* **Stability & Reliability**
  - Production defect rate for search functionality
  - Search API response time (p50, p95, p99)
  - Search availability/uptime percentage
  - Error rate reduction compared to baseline

* **Adoption & Engagement**
  - Filter interaction rate (clicks on facets/filters)
  - Search refinement rate (subsequent searches after initial)
  - Merchandiser tool adoption (active users of Coveo Merchandising Hub)
  - Feature utilization (which merchandising capabilities are most used)

* **Conversion & Revenue Impact**
  - Add-to-cart (ATC) conversion rate from search results
  - Click-through rate on search results
  - Revenue attributed to search-initiated sessions
  - Average order value for search-initiated purchases

* **User Satisfaction**
  - Search result relevance scores (if surveyed)
  - Support ticket volume related to search issues
  - Merchandiser feedback on tool usability (CSAT)

### Baseline & Target Values

> _Specific baseline measurements and target values to be determined by Analytics agents based on current performance data_

| Metric | Current Baseline | Target | Measurement Method |
| --- | --- | --- | --- |
| ATC Conversion from Search | [TBD - Pending Agent input] | [TBD - Pending Agent input] | Adobe Analytics |
| Search-related Defects | [TBD - Pending Agent input] | [TBD - Pending Agent input] | Jira defect tracking |
| Filter Engagement Rate | [TBD - Pending Agent input] | [TBD - Pending Agent input] | Adobe Analytics |
| Search Response Time (p95) | [TBD - Pending Agent input] | [TBD - Pending Agent input] | APM monitoring |

---

## 8. Analytics & Tracking

> _To be completed by Agent_

| Event Name | Description | Properties |
| --- | --- | --- |
| [TBD - Pending Agent input] | [TBD - Pending Agent input] | [TBD - Pending Agent input] |

---

## 9. Risks & Considerations

| Risk / Assumption | Impact | Mitigation |
| --- | --- | --- |
| **Coveo API performance under load** | High - Could impact 75% of ATC actions if search degrades | Performance benchmarking before launch; load testing with realistic traffic patterns; establish SLA with Coveo |
| **Data migration from current search** | Medium - Loss of search configurations could impact relevance | Document all current configurations; create migration plan with validation checkpoints; maintain rollback capability |
| **Merchandiser learning curve** | Medium - Delayed adoption could limit business value realization | Develop training materials; conduct hands-on workshops; establish merchandiser champions for peer support |
| **Adobe Analytics integration complexity** | Medium - Incomplete tracking could limit data-driven optimization | Early analytics team engagement; schema validation in QA; staged rollout to verify event capture |
| **Neat Design System alignment** | Low-Medium - Visual inconsistencies could impact UX perception | Design review checkpoints; component library validation; UX approval gates |
| **Traffic ramping coordination** | Medium - Uncoordinated rollout could confuse users or corrupt data | Clear rollout plan with stakeholder alignment; feature flag strategy; communication plan for each phase |
| **Third-party dependency on Coveo** | High - Vendor issues directly impact core functionality | Establish support escalation paths; monitor Coveo status; define fallback procedures |

### Assumptions Requiring Validation

1. Coveo Commerce API can handle SGWS query volume and complexity
2. Merchandising Hub provides sufficient control granularity for SGWS use cases
3. Current search configurations can be fully replicated in Coveo
4. Adobe Analytics can capture all required events with current implementation approach

---

## 10. Launch Plan

### Feature Flag Strategy

* **Feature flag**: Yes - Required for incremental rollout
* **Flag configuration**: Percentage-based traffic allocation with user segment targeting capabilities
* **Monitoring**: Real-time dashboards for conversion and error metrics during rollout

### Rollout Strategy (Incremental Traffic Ramping)

1. **Phase 1 - Internal Testing (0% external traffic)**
   - Internal team validation
   - Merchandiser UAT for Coveo Merchandising Hub

2. **Phase 2 - Limited Beta (5-10% traffic)**
   - Monitor stability and performance metrics
   - Gather initial conversion data
   - Address critical issues

3. **Phase 3 - Expanded Rollout (25-50% traffic)**
   - Continue monitoring key metrics
   - A/B comparison with existing search
   - Stakeholder review checkpoint

4. **Phase 4 - Full Rollout (100% traffic)**
   - Complete migration
   - Deprecate legacy search infrastructure

### Training & Enablement

* **Internal training needed**: Yes
  - Merchandiser training on Coveo Merchandising Hub
  - Engineering team onboarding for maintenance and support
  - QA team training on test scenarios

* **Support docs / Help Center articles**:
  - Merchandiser quick-start guide
  - Troubleshooting common issues
  - Best practices for search optimization

### Communications Plan

* **Internal stakeholders**: Launch timeline and feature capabilities briefing
* **Merchandising team**: Hands-on training sessions and documentation
* **Support team**: Knowledge base updates and escalation procedures
* **Marketing**: If applicable, customer-facing communications about improved search experience

---

## 11. Post-Launch Plan

### Monitoring & Optimization

* **Week 1-2: Intensive Monitoring**
  - Daily review of stability metrics (errors, response times)
  - Daily review of conversion metrics (ATC rate, click-through)
  - Rapid response process for critical issues

* **Week 3-4: Performance Analysis**
  - Comprehensive analytics review vs. baseline
  - Merchandiser feedback collection
  - Initial optimization recommendations

* **Month 2+: Continuous Improvement**
  - A/B testing of merchandising configurations
  - Iterative optimization based on data
  - Feature enhancement prioritization

### Success Validation

* Compare actual metrics against targets defined in Section 7
* Stakeholder review meeting to assess business value realization
* Document lessons learned for future migrations

### Follow-up Enhancements (v1.1+)

* Advanced merchandising rules based on user segments
* Machine learning-driven personalization
* Additional filter/facet types based on merchandiser requests
* Enhanced analytics dashboards for merchandiser self-service insights

### Deprecation of Legacy System

* Timeline for decommissioning old search infrastructure
* Data archival procedures
* Final migration validation

---

## 12. Open Questions

| # | **Question** | **Owner** | **Status** | **Notes** |
| --- | --- | --- | --- | --- |
| 1 | What is the current baseline ATC conversion rate from search to measure improvement against? | Analytics | Open | Required for success metric definition |
| 2 | What specific merchandising configurations exist in current search that must be migrated to Coveo? | Merchandising Team | Open | Critical for migration planning |
| 3 | What is the expected traffic volume and peak load patterns for performance testing? | Engineering | Open | Required for load testing scenarios |
| 4 | Are there specific Adobe Analytics events from ADX-196 (Unauthenticated Homepage) that should be reused or aligned? | Analytics | Open | Ensure schema consistency across initiatives |
| 5 | What is the rollout timeline expectation and are there any hard deadlines (e.g., seasonal events)? | Product/Stakeholders | Open | Impacts de-risking strategy and resourcing |
| 6 | Will authenticated and unauthenticated users see identical search experiences, or are there differentiation requirements? | Product/UX | Open | May impact scope and testing |
| 7 | What is the SLA and support model with Coveo for production issues? | Engineering/Vendor Management | Open | Critical for risk mitigation |
| 8 | Are there any compliance or data privacy considerations for search query logging and analytics? | Legal/Compliance | Open | May impact analytics implementation |
| 9 | What training format do merchandisers prefer (live sessions, self-paced documentation, videos)? | Merchandising Team | Open | Informs enablement planning |
| 10 | How will success of this initiative impact prioritization of related search enhancements? | Product Leadership | Open | Strategic roadmap alignment |

---

## Appendix: Discovery Summary

### Problem Validation

The problems identified in this initiative are well-validated:
- **Technical Debt**: Confirmed - current search not on web foundations creates maintenance burden
- **Stability Issues**: Confirmed - production defects impact customer experience
- **Limited Capabilities**: Confirmed - merchandisers lack no-code tools for optimization

### Strategic Alignment

This initiative strongly aligns with organizational strategy:
- Direct OKR alignment with digital experience, conversion, and tech debt reduction goals
- High revenue impact potential given 75% of ATC actions originate from search
- Foundation for future search enhancements and personalization

### De-risking Approach

The proposed de-risking strategies are appropriate:
- Incremental rollout with traffic ramping enables controlled risk exposure
- QA and performance benchmarking validate technical readiness
- Stakeholder UAT and feedback loops ensure business requirements are met

### Recommendations for Next Steps

1. **Stakeholder Alignment Session**: Convene key stakeholders to review this PRD and resolve open questions
2. **Technical Discovery**: Engineering spike to validate Coveo API capabilities and integration approach
3. **Baseline Metrics**: Analytics team to establish current performance baselines
4. **Design Handoff**: UX team to create wireframes and mockups (Section 6)
5. **Analytics Specification**: Analytics team to define event tracking schema (Section 8)
6. **Scoping Refinement**: Define explicit out-of-scope items (Section 5)

---

*Document generated by Discovery Product Manager Agent*
*PRD Version: 1.0*
*Last Updated: 2025-11-19*
