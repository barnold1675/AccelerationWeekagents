# Product Brief: ADX Week Unauthenticated Homepage

## 1. Overview

| Field | Details |
| --- | --- |
| **Feature/Project Name** | ADX Week Unauthenticated Homepage |
| **Author** | Courtney Johnson |
| **Date Created** | 2025-11-19 |
| **Last Updated** | 2025-11-19 |
| **Status** | Draft |
| **Stakeholders** | Product (ADX Week Team), Design, Engineering, QA, Marketing, Legal/Compliance |
| **Jira Issue** | ADX-196 |

---

## 2. Background / Context

### Business Problem

Southern Glazer's Wine & Spirits (SGWS) currently lacks a compelling entry point for unauthenticated users visiting the ADX Week platform. Without a dedicated unauthenticated homepage experience, the platform misses critical opportunities to:

- Convert prospective customers into registered users
- Showcase SGWS's extensive product assortment and value proposition
- Build trust and credibility with new visitors
- Provide a guided path from discovery to registration

### Why This Matters Now

The unauthenticated homepage serves as the digital storefront for SGWS's Proof ordering platform. First impressions significantly impact conversion rates and brand perception. Currently, visitors without accounts have limited ability to explore the platform's value, creating friction in the customer acquisition funnel.

### User Research Insights

Four distinct user segments visit the platform in an unauthenticated state, each with different intents ranging from casual curiosity to readiness to establish a business relationship with SGWS. Understanding these varied motivations is essential to designing an experience that serves all segments while prioritizing conversion to registered accounts.

### Strategic Alignment

This initiative aligns with SGWS's broader digital transformation goals:
- Expanding customer base through digital channels
- Reducing friction in the customer onboarding journey
- Differentiating from competitors through superior digital experience
- Showcasing the breadth and depth of SGWS's product portfolio

---

## 3. Target Users

### Primary Segments

* **New, Prospective Customers**
  - Businesses exploring distributor options for wine and spirits
  - May be comparing SGWS to competitors
  - Need clear value proposition and easy path to registration
  - Intent: Evaluate SGWS as a potential supplier

* **Returning Users (Logged Out)**
  - Existing account holders who need to re-authenticate
  - Familiar with the platform and SGWS offerings
  - Need quick, frictionless access to login
  - Intent: Access their account and resume ordering activities

* **Researchers**
  - Industry analysts, journalists, or business researchers
  - Interested in understanding SGWS's market position and offerings
  - May not have immediate intent to create an account
  - Intent: Gather information about SGWS and product availability

* **Competitors**
  - Other distributors researching SGWS's digital capabilities
  - Will browse but unlikely to convert
  - Represent minimal conversion opportunity but high observation
  - Intent: Competitive intelligence gathering

### User Behavior / Intent

**Behavioral Spectrum:**
- Users range from casual browsing to active evaluation of SGWS as a business partner
- Prospective customers often compare multiple distributors before committing
- Returning users prioritize speed and efficiency in accessing their accounts
- All segments benefit from clear navigation and compelling content

**Key User Needs:**
- Quick understanding of what SGWS and Proof offer
- Ability to explore products without commitment
- Clear path to registration when ready
- Market-specific information for relevant assortment context
- Trust signals that establish SGWS credibility

**User Constraints:**
- Cannot access pricing information (requires authentication)
- Cannot place orders (requires authentication)
- No personalized recommendations available
- Limited visibility into full platform capabilities

---

## 4. Objective / Goals

_What are we trying to achieve?_

### Business Goals:

**1. Drive Registration**
- Make benefits of creating an account clear and prominent throughout the experience
- Implement strategic friction points that encourage registration (e.g., "Create an account to see pricing")
- Showcase value locked behind authentication to create urgency
- Reduce barriers to account creation while maintaining necessary compliance

**2. Inspire Exploration and Discovery**
- Highlight SGWS's extensive wine and spirits assortment
- Surface key categories and popular products to demonstrate breadth
- Feature supplier goals through Level ads and merchandising content
- Promote SGWS goals through curated content, recommendations, and editorial features

**3. Build Credibility and Trust**
- Establish SGWS as a trusted, full-service distributor
- Align messaging with corporate positioning and brand language
- Use high-quality content to reinforce expertise and reliability
- Showcase testimonials, partnerships, or industry recognition where applicable

**4. Ensure Compliance**
- Implement age gate to confirm age compliance before accessing content
- Meet all regulatory requirements for alcohol industry digital platforms
- Protect SGWS from legal liability related to underage access

**5. Maximize Development Efficiency**
- Leverage existing authenticated homepage modules where possible
- Minimize net-new component development
- Ensure consistency between authenticated and unauthenticated experiences

### Success Metrics:

* **Adoption Rate:** [TBD - Pending Analytics Agent input for specific targets]
* **Task Completion Rate:** [TBD - Pending Analytics Agent input for specific targets]
* **Engagement / Conversion:** [TBD - Pending Analytics Agent input for specific targets]
* **Feedback or CSAT/NPS:** [TBD - Pending Analytics Agent input for specific targets]

---

## 5. Scope

### In Scope

* **Age Gate Implementation**
  - Modal or interstitial confirming user is of legal drinking age
  - Compliance with alcohol industry regulations
  - Clear, accessible UI that doesn't create excessive friction
  - Appropriate error handling and messaging

* **Login/Authentication Access**
  - Prominent, easily accessible login button/link for returning users
  - Clear visual hierarchy prioritizing login for returning users
  - Seamless handoff to authentication flow

* **Registration Call-to-Action**
  - Strategic placement of registration prompts throughout the page
  - Clear articulation of account benefits
  - Multiple entry points to registration flow
  - Contextual prompts (e.g., "Sign up to see pricing" on product cards)

* **Market Selection**
  - Allow users to select their market/region
  - Display contextual information based on market selection
  - Store preference for session persistence
  - Clear indication of which market is currently selected

* **Product Discovery Experience**
  - Browsable product categories without authentication
  - Featured/popular products showcase
  - Search functionality for product exploration
  - Category navigation and filtering
  - Product detail pages (without pricing)

* **Merchandising Content Display**
  - Supplier-sponsored content (Level ads)
  - SGWS-curated editorial content
  - Featured collections and recommendations
  - Seasonal or promotional highlights

* **Brand/Trust Building Content**
  - Corporate positioning and value proposition messaging
  - SGWS differentiators and service offerings
  - Industry expertise and heritage
  - Service capabilities overview

* **Responsive Design**
  - Desktop, tablet, and mobile optimized layouts
  - Consistent experience across devices
  - Touch-friendly interactions for mobile users

* **Leverage Authenticated Homepage Modules**
  - Reuse existing component library where applicable
  - Maintain design consistency across authenticated/unauthenticated states
  - Adapt modules to work without user-specific data

### Out of Scope

> _To be completed by Scoping Agent_

* [TBD - Pending Agent input]
* [TBD - Pending Agent input]

---

## 6. Feature Documentation

> _To be completed by Design/UX Agent_

| Item | Link or Description |
| --- | --- |
| **Wireframes** | [TBD - Pending Agent input] |
| **Mockups** | [TBD - Pending Agent input] |
| **UX Notes** | [TBD - Pending Agent input] |

---

## 7. Success Metrics / KPIs

> Define how success will be measured post-launch:

* **Adoption Rate:**
  - Registration conversion rate from unauthenticated homepage visits
  - Percentage of visitors who complete age gate
  - Return visitor login rate
  - [TBD - Pending Analytics Agent input for specific target values]

* **Task Completion Rate:**
  - Successful navigation to product detail pages
  - Market selection completion rate
  - Registration funnel completion rate
  - [TBD - Pending Analytics Agent input for specific target values]

* **Engagement / Conversion:**
  - Average session duration for unauthenticated users
  - Pages per session
  - Bounce rate reduction
  - Click-through rate on registration CTAs
  - Product search usage rate
  - [TBD - Pending Analytics Agent input for specific target values]

* **Feedback or CSAT/NPS:**
  - User feedback on unauthenticated experience
  - Support ticket volume related to access issues
  - [TBD - Pending Analytics Agent input for specific target values]

---

## 8. Analytics & Tracking

> _To be completed by Analytics Agent_

| Event Name | Description | Properties |
| --- | --- | --- |
| [TBD - Pending Agent input] | [TBD - Pending Agent input] | [TBD - Pending Agent input] |

---

## 9. Risks & Considerations

| Risk / Assumption | Impact | Mitigation |
| --- | --- | --- |
| **Age gate creates friction and increases bounce rate** | High | Design streamlined, user-friendly age verification that minimizes steps while maintaining compliance. Test with users to optimize. |
| **Users frustrated by content limitations (no pricing/ordering)** | High | Clearly communicate value of registration throughout experience. Ensure "locked" content teases value without frustrating users. |
| **Competitive intelligence exposure** | Medium | Accept that some information will be visible to competitors. Focus on showcasing strengths rather than hiding capabilities. Avoid exposing proprietary pricing or strategic data. |
| **Market selection complexity** | Medium | Provide clear UI for market selection with helpful defaults (e.g., geolocation suggestion). Ensure users understand why market matters. |
| **Performance impact from content-heavy homepage** | Medium | Implement lazy loading, image optimization, and caching strategies. Test performance across devices and connection speeds. |
| **Inconsistency between auth/unauth experiences** | Medium | Leverage shared component library. Conduct design review to ensure visual and functional consistency. |
| **Legal/compliance requirements for age gate** | High | Engage legal team early to confirm requirements. Research industry best practices. Implement robust solution that meets all regulatory needs. |
| **Low registration conversion despite traffic** | High | A/B test CTA placements, messaging, and value propositions. Implement analytics to understand drop-off points. Iterate based on data. |
| **Difficulty showcasing value without personalization** | Medium | Use market selection to provide some contextual relevance. Highlight popular/trending products. Feature editorial content that demonstrates expertise. |
| **Backend dependencies for market-specific content** | Medium | Coordinate with backend team early. Ensure APIs support market-based content delivery. Have fallback content strategy. |

---

## 10. Launch Plan

* **Feature flag:** Yes - Recommend phased rollout with feature flag control
* **Beta / pilot group:**
  - Consider soft launch to limited traffic percentage (10-20%)
  - Gather initial user feedback and monitor analytics
  - Scale up based on performance and user response
* **Internal training needed:**
  - Customer support team training on new user flows
  - Sales team awareness of unauthenticated experience capabilities
  - Marketing team briefing on available content placement opportunities
* **Support docs / Help Center articles:**
  - FAQ on account creation benefits
  - Guide for market selection
  - Troubleshooting for age gate issues
  - Registration walkthrough
* **Comms / Marketing Plan:**
  - Coordinate with marketing on promotional content for unauthenticated homepage
  - Ensure supplier partners are aware of ad placement opportunities
  - Plan any external communications about enhanced digital experience
  - Social media and email campaigns to drive traffic to new experience

---

## 11. Post-Launch Plan

* **Monitor key metrics:**
  - Daily monitoring of registration conversion rates
  - Bounce rate and session duration tracking
  - Age gate completion rates
  - CTA click-through rates
  - Error rates and technical issues

* **Review analytics after 1-2 weeks:**
  - Comprehensive analysis of user behavior patterns
  - Funnel analysis to identify drop-off points
  - Heat mapping and session recording review (if implemented)
  - Market selection usage patterns
  - Content engagement metrics

* **Plan for v1.1 or follow-up fixes:**
  - Address any usability issues identified through analytics
  - Optimize underperforming CTAs or content areas
  - Enhance market-specific content based on user interest
  - Consider additional personalization opportunities
  - Evaluate need for additional product discovery features

* **Comms / Marketing Plan:**
  - Share performance results with stakeholders
  - Communicate wins and learnings to broader organization
  - Plan follow-up campaigns based on initial results
  - Gather supplier partner feedback on ad performance

* **Continuous Improvement:**
  - Establish regular review cadence (weekly for first month, then bi-weekly)
  - Create feedback loop with customer support for user issues
  - Benchmark against industry standards for conversion rates
  - Plan quarterly content refresh for merchandising sections

---

## 12. Open Questions

| # | **Question** | **Notes** |
| --- | --- | --- |
| 1 | What are the specific legal requirements for the age gate implementation? | Need legal team input on compliance requirements by market. Different states/countries may have different requirements. |
| 2 | How will market selection persist across sessions for unauthenticated users? | Need to determine cookie/local storage strategy and privacy implications. |
| 3 | What content will be available for each market initially? | Need to confirm content availability and any gaps that need to be filled before launch. |
| 4 | Are there specific supplier (Level) ad placements that need to be prioritized? | Coordinate with advertising/partnerships team on initial ad inventory. |
| 5 | What is the fallback experience if a user doesn't select a market? | Need to define default behavior - show all markets, require selection, or use geolocation. |
| 6 | How do we handle users who attempt to access authenticated features? | Define UX for redirects to login/registration from locked features. |
| 7 | What is the minimum viable content needed for launch? | Define content requirements to avoid launching with sparse experience. |
| 8 | Are there SEO considerations for the unauthenticated homepage? | Coordinate with marketing/SEO team on metadata, structured data, and indexing strategy. |
| 9 | How will we measure the difference between user segments (prospects vs. researchers vs. competitors)? | May not be fully measurable, but need analytics strategy to infer intent where possible. |
| 10 | What is the timeline for authenticated homepage module availability for reuse? | Need engineering input on current state of component library. |
| 11 | Are there accessibility (ADA/WCAG) requirements specific to the age gate or market selection? | Confirm accessibility standards and testing requirements. |
| 12 | How will promotional/seasonal content be managed and updated? | Define content management workflow and update frequency. |
| 13 | What is the expected traffic volume and are there infrastructure considerations? | Coordinate with infrastructure team on capacity planning. |

---

## Document History

| Date | Author | Changes |
| --- | --- | --- |
| 2025-11-19 | Discovery PM Agent | Initial PRD creation based on ADX-196 Jira issue |

---

## Appendix

### Related Documents
- ADX-196 Jira Epic
- Authenticated Homepage Design Specifications (if available)
- SGWS Brand Guidelines
- Proof Platform Architecture Documentation

### Glossary
- **SGWS**: Southern Glazer's Wine & Spirits
- **Proof**: SGWS's digital ordering platform
- **Level ads**: Supplier-sponsored advertising placements
- **Age gate**: Compliance mechanism to verify user is of legal drinking age
- **CTA**: Call-to-action

