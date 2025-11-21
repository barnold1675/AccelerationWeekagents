# Product Requirements Document (PRD)

## ADX-196: Unauthenticated Homepage

---

## Document Information

| Field | Value |
|-------|-------|
| **Epic ID** | ADX-196 |
| **Document Version** | 2.0 |
| **Status** | Draft |
| **Author** | Discovery PM Agent |
| **Created** | 2025-11-20 |
| **Last Updated** | 2025-11-20 |
| **Reporter** | Courtney Johnson |
| **Project** | ADX Week |

---

## 1. Executive Summary

This PRD defines requirements for the Unauthenticated Homepage experience on SGProof.com. The initiative targets prospective customers, returning users, researchers, and competitors who cannot access pricing or place orders. The primary objective is to drive user registration by showcasing SGWS value proposition, inspiring product discovery, and building credibility as a trusted full-service distributor while leveraging existing authenticated homepage modules.

**Critical Context**: Voice of Customer analysis reveals that 45% of customer feedback cites site performance as a CRITICAL issue, with 35% reporting app/platform functionality problems. The unauthenticated homepage must address these foundational concerns while achieving conversion objectives.

---

## 2. Problem Statement

### 2.1 Customer Pain Points (Voice of Customer)

**VOC Analysis Summary**: Comprehensive analysis of customer feedback from November 2025 reveals critical themes directly impacting user satisfaction, conversion potential, and brand perception for the Proof platform.

#### Top Customer Pain Points

| Theme | Frequency | Severity | Impact on Unauthenticated Homepage |
|-------|-----------|----------|-----------------------------------|
| **Site Performance & Speed** | 45% | CRITICAL | First impressions destroyed by slow load times; users abandon before seeing value proposition |
| **App/Platform Functionality** | 35% | HIGH | Technical issues prevent basic browsing; erodes trust before registration |
| **Poor Usability & UX** | 32% | HIGH | Complex interfaces confuse new visitors; unclear paths to registration |
| **Navigation Issues** | 16% | MEDIUM | Users cannot find products or categories; reduces exploration and discovery |
| **Authentication Issues** | 13% | MEDIUM | Returning users frustrated by login difficulties; impacts retention |

#### Representative Customer Quotes

> "Website is slow and not responsive. Your dev team needs to focus on optimizing speed."
> -- PENTHOUSE AT HUNTLEY HOTEL (CA), Nov 14, 2025

> "Website needs a lot of work. Very very laggy, tons of missing pictures, overly complicated ways to search."
> -- WINE BAR GEORGE (FL), Nov 13, 2025

> "Proof website needs a lot of love. Very unfriendly for users to use."
> -- MOXY HOTEL CHERRY CREEK (CO), Nov 14, 2025

> "Your new app and online ordering portal are garbage they time out they don't bring up order numbers."
> -- RUBAIYAT (IA), Nov 8, 2025

> "please fix when you scroll and select an item to look at and you finish that it brings you back to where you left off"
> -- SPIRITS OF PAWLING THE (NY), Nov 14, 2025

#### VOC-Driven Design Imperatives

Based on customer feedback analysis, the unauthenticated homepage MUST:

1. **Performance First**: Target <2 second page load time to address the #1 pain point
2. **Mobile-First Design**: 65% of users are on mobile with low satisfaction scores
3. **Simplified Navigation**: Reduce complexity; clear visual hierarchy
4. **Visual Content Optimization**: Address missing images and laggy media loading
5. **Overcome Negative Word-of-Mouth**: Current dissatisfaction creates barrier to new user trust

### 2.2 Problem Definition

**Current State**: Users arriving at SGProof.com without authentication encounter an undefined experience with no clear path to understanding SGWS value proposition, discovering products, or converting to registered customers. VOC data indicates that existing platform issues (speed, usability) will compound conversion challenges if not addressed.

**User Challenges**:
- No age gate compliance mechanism
- Returning users lack easy login access
- Prospective customers have no clear account creation incentive
- Product discovery is limited without personalization
- Value proposition of SGWS and Proof platform is unclear
- Current performance issues create immediate negative impressions

**Business Challenges**:
- Unknown visitor intent and demographics
- No ability to personalize content for unauthenticated users
- Missed conversion opportunities due to abandonment
- Inability to showcase SGWS differentiators
- VOC indicates current platform perception is negative; new page must overcome this barrier

---

## 3. Target Users

### 3.1 Primary User Segments

| Segment | Description | Intent | Key Needs |
|---------|-------------|--------|-----------|
| **New Prospective Customers** | First-time visitors exploring SGWS | Curiosity to evaluation | Understand value, see products, easy registration, FAST experience |
| **Returning Users** | Existing customers not logged in | Quick access to account | Fast login, session recovery, reduced friction |
| **Researchers** | Industry professionals, journalists | Information gathering | Product catalog, company info, professional presentation |
| **Competitors** | Competitive intelligence | Market research | Limited but impressive experience |

### 3.2 User Constraints

1. **No User Identification**: Cannot determine visitor identity or intent
2. **Market Selection Required**: Users must select market for contextual information
3. **No Pricing Access**: Users cannot view pricing or place orders
4. **No Personalization**: Cannot leverage user history or preferences
5. **Value Communication Challenge**: Must convey benefits without revealing too much
6. **Performance Expectations**: Users expect <2 second load times based on industry standards

---

## 4. Goals and Objectives

### 4.1 Business Goals

| Goal | Description | Alignment | VOC Connection |
|------|-------------|-----------|----------------|
| **Drive Registration** | Convert visitors to registered users | Objective 3 (per Epic) | Smooth UX and fast performance reduce friction to signup |
| **Inspire Exploration** | Encourage product discovery and excitement | Customer acquisition | Simplified navigation addresses 16% pain point |
| **Build Credibility** | Establish SGWS as trusted full-service distributor | Brand positioning | Performance excellence overcomes negative word-of-mouth |
| **Leverage Existing Components** | Reuse authenticated homepage modules | Development efficiency | Must optimize modules for performance |

### 4.2 Success Metrics Framework

| Metric | Description | Target | Owner |
|--------|-------------|--------|-------|
| Registration Conversion Rate | % visitors who create account | [TBD - Pending Analytics input] | Analytics |
| Page Load Time | Time to interactive on homepage | <2 seconds (VOC-driven) | Engineering |
| Largest Contentful Paint (LCP) | Core Web Vital for perceived performance | <2.5 seconds | Engineering |
| Time to Registration | Average time from landing to signup | [TBD - Pending Analytics input] | Analytics |
| Page Engagement Rate | Scroll depth, module interactions | [TBD - Pending Analytics input] | Analytics |
| Bounce Rate | % single-page sessions | [TBD - Pending Analytics input] | Analytics |
| Login Completion Rate | % returning users successfully logging in | [TBD - Pending Analytics input] | Analytics |
| Mobile Conversion Rate | % mobile visitors who register | [TBD - Pending Analytics input] | Analytics |

---

## 5. Scope

### 5.1 In Scope

#### Core Features

| Feature | Description | Priority | VOC Alignment |
|---------|-------------|----------|---------------|
| **Age Gate** | Age compliance verification modal | P0 | Must not impact page load performance |
| **Quick Login Access** | Prominent, easily accessible login for returning users | P0 | Addresses 13% authentication issues |
| **Registration CTA** | Clear, compelling calls-to-action for account creation | P0 | Clear UX reduces 32% usability issues |
| **Performance Optimization** | Sub-2-second page load | P0 | Addresses #1 VOC pain point (45%) |
| **Market Selector** | Allow users to select market for contextual content | P1 | Enables contextual, relevant content |
| **Product Discovery Modules** | Surface key categories and popular products | P1 | Must load progressively to not block page |
| **Value Proposition Content** | Benefits of SGWS and Proof platform | P1 | Overcomes negative word-of-mouth |
| **Mobile-Optimized Experience** | Responsive design prioritizing mobile | P1 | 65% mobile users with low satisfaction |
| **Merchandising Content** | Supplier goals, Level ads, curated assortment | P2 | Lazy-loaded to preserve performance |
| **Corporate Credibility Content** | Trust-building content aligned with corporate positioning | P2 | Builds trust for skeptical prospects |

#### Module Reuse Strategy

The initiative should leverage existing authenticated homepage modules with performance optimizations:
- Category navigation modules (optimized for speed)
- Product carousel modules (lazy-loaded images)
- Merchandising content modules (deferred loading)
- Search functionality (limited, performance-optimized)

### 5.2 Out of Scope

| Item | Reason |
|------|--------|
| [TBD - Pending Scoping Agent input] | To be determined during scoping |
| [TBD - Pending Scoping Agent input] | To be determined during scoping |
| [TBD - Pending Scoping Agent input] | To be determined during scoping |

---

## 6. Feature Documentation

### 6.1 User Interface

[TBD - Pending Design/UX Agent input]

#### Wireframes
To be completed by Design Agent

#### Mockups
To be completed by Design Agent

#### UX Notes
To be completed by Design Agent

### 6.2 User Flows

[TBD - Pending Design/UX Agent input]

---

## 7. Analytics & Tracking

### 7.1 Event Definitions

| Event Name | Trigger | Properties | Owner |
|------------|---------|------------|-------|
| [TBD] | [TBD - Pending Analytics Agent input] | [TBD] | Analytics |
| [TBD] | [TBD - Pending Analytics Agent input] | [TBD] | Analytics |
| [TBD] | [TBD - Pending Analytics Agent input] | [TBD] | Analytics |

### 7.2 Dashboards

[TBD - Pending Analytics Agent input]

---

## 8. Technical Considerations

### 8.1 Dependencies

| Dependency | Type | Status | Impact |
|------------|------|--------|--------|
| Existing Homepage Modules | Internal | Available | Must be optimized for performance |
| Age Gate Component | New | To be built | Legal/compliance requirement |
| Market Selection Service | Internal | Available | Required for contextual content |
| Authentication Service | Internal | Available | Login and registration flows |
| CDN/Image Optimization | Infrastructure | Available | Critical for image loading issues |
| Performance Monitoring | Internal | Required | Track Core Web Vitals |

### 8.2 Constraints

1. **Performance**: Must achieve <2 second page load to address VOC feedback (45% cite speed issues)
2. **Mobile Responsiveness**: 65% mobile users with currently low satisfaction scores
3. **SEO Considerations**: Public pages must be search engine optimized
4. **Compliance**: Age verification required for alcohol products
5. **Image Optimization**: Must address VOC feedback on missing/slow-loading images

### 8.3 Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Performance degradation from new modules | High | Critical | Performance budget (200KB JS, 500KB total), lazy loading, Core Web Vitals monitoring |
| Low registration conversion | Medium | High | A/B testing CTAs, incentive messaging, simplified forms |
| Competitor intelligence gathering | Low | Low | Limit detailed product information |
| Age gate friction causing abandonment | Medium | Medium | Streamlined UX, remember preference via localStorage |
| Existing negative perception impacts new visitors | Medium | High | Excellence in performance to signal platform improvement |
| Mobile experience poor | High | High | Mobile-first design approach, progressive enhancement |

---

## 9. Launch Planning

### 9.1 Rollout Strategy

| Phase | Scope | Success Criteria |
|-------|-------|------------------|
| Alpha | Internal testing | Functionality validation, <2s load time achieved |
| Beta | Limited market rollout (5% traffic) | Performance metrics baseline, conversion tracking |
| GA | Full rollout | Target metrics achieved, positive VOC sentiment |

### 9.2 Feature Flags

| Flag | Purpose | Default State |
|------|---------|---------------|
| `unauthenticated_homepage_v2` | Enable new homepage experience | Off |
| `age_gate_enabled` | Control age verification modal | On |
| `performance_optimizations` | Enable lazy loading and deferred content | On |

---

## 10. Post-Launch

### 10.1 Monitoring

- Page load performance (Core Web Vitals: LCP, FID, CLS)
- Registration funnel conversion rates
- Module engagement rates by device type
- Error rates and user-reported issues
- VOC sentiment tracking for homepage feedback
- Mobile vs desktop performance comparison

### 10.2 Iteration Planning

- A/B test CTA messaging and placement
- Optimize product discovery algorithms based on engagement
- Refine value proposition content based on registration correlation
- Expand merchandising content based on supplier partnerships
- Progressive performance improvements based on RUM data
- Address any new VOC themes that emerge post-launch

---

## 11. Open Questions

| Question | Owner | Due Date | Status |
|----------|-------|----------|--------|
| What specific benefits should be highlighted to drive registration? | Product/Marketing | TBD | Open |
| Which existing modules are suitable for unauthenticated context without impacting performance? | Engineering | TBD | Open |
| What is the legal requirement for age gate implementation? | Legal/Compliance | TBD | Open |
| How will market selection affect content personalization? | Product | TBD | Open |
| What is the balance between "sneak peek" content and gated content? | Product/UX | TBD | Open |
| Should returning users see different experience than new visitors? | Product | TBD | Open |
| What is the performance budget for the unauthenticated homepage? | Engineering | TBD | Open |
| How do we measure and track VOC sentiment improvement post-launch? | Analytics | TBD | Open |

---

## 12. Glossary

| Term | Definition |
|------|------------|
| **Age Gate** | Compliance mechanism verifying user meets legal drinking age |
| **Core Web Vitals** | Google's metrics for user experience: LCP, FID, CLS |
| **LCP** | Largest Contentful Paint - measures loading performance |
| **Lazy Loading** | Deferring load of non-critical resources until needed |
| **Market** | Geographic region with specific product availability and regulations |
| **Level Ads** | Supplier-sponsored promotional content |
| **RUM** | Real User Monitoring - performance tracking from actual users |
| **Unauthenticated** | Users not logged into SGProof account |
| **VOC** | Voice of Customer - direct customer feedback and sentiment |
| **Proof** | SGWS digital ordering platform (SGProof.com) |
| **SGWS** | Southern Glazer's Wine and Spirits |

---

## Appendix A: Related Documents

- VOC Feedback Analysis: Provided in PRD request (November 2025 data)
- Linked Epics: ADX-197 (Search V2), ADX-199 (OOS Recommendation), ADX-202 (Merch Module)
- Corporate Brand Guidelines: [Link TBD]
- Technical Architecture: [Link TBD]

---

## Appendix B: Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-11-20 | Discovery PM Agent | Initial PRD creation |
| 2.0 | 2025-11-20 | Discovery PM Agent | Enhanced VOC integration with quantified pain points, customer quotes with attribution, performance requirements, mobile-first design imperatives |
