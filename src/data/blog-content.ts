// Full article content for each blog post — stored as structured sections
// to enable rich rendering and semantic HTML

export interface BlogSection {
  heading?: string;
  content: string; // supports basic markdown-style: **bold**, [link](/url)
}

export const blogContent: Record<string, BlogSection[]> = {
  "sirs-reporting-obligations-aged-care-act-2024": [
    {
      content:
        "The Serious Incident Response Scheme (SIRS) is one of the most operationally demanding compliance obligations for Australian aged care providers. Under the Aged Care Act 2024, providers must identify, report, investigate, and resolve serious incidents within strict timeframes — or face regulatory consequences from the Aged Care Quality and Safety Commission (ACQSC).",
    },
    {
      heading: "What is a reportable incident under SIRS?",
      content:
        "A reportable incident includes unreasonable use of force, unlawful sexual contact, psychological or emotional abuse, unexpected death, stealing or financial coercion, neglect, and inappropriate use of restrictive practices. The definition is broad by design — the ACQSC expects providers to report early and investigate thoroughly, rather than wait for certainty before notifying.\n\nProviders should note that the threshold is whether a reasonable person would consider the incident to be a serious incident, not whether the provider believes harm actually occurred. This is an important distinction that catches many providers off guard during assessment contacts.",
    },
    {
      heading: "Priority 1 vs Priority 2: understanding the deadlines",
      content:
        "SIRS incidents are classified into two priority levels, each with different notification deadlines.\n\nPriority 1 incidents must be reported to the ACQSC within 24 hours of the provider becoming aware. These include incidents that cause or could reasonably cause serious harm, death, or involve allegations of sexual contact. The 24-hour clock starts from the moment any staff member becomes aware — not from when management is informed.\n\nPriority 2 incidents must be reported within 30 calendar days. These cover incidents that did not result in serious harm but still meet the reportable threshold. While 30 days allows more time for investigation, providers should not delay notification until the investigation is complete.",
    },
    {
      heading: "Building a compliant incident management workflow",
      content:
        "An effective SIRS workflow typically follows six stages: incident reported, deadline countdown begins, ACQSC notification submitted, investigation commenced, remediation actions implemented, and evidence documented.\n\nThe most common compliance failures occur between stages one and two. If your staff report an incident verbally but it takes days to enter the system, your 24-hour or 30-day clock may have already started without your compliance team knowing. Digital incident capture at the point of care — rather than via paper forms or email — eliminates this gap.\n\nYour investigation process should document what happened, why it happened, what has been done to address it, and what systemic changes will prevent recurrence. The ACQSC expects root cause analysis, not just incident description.",
    },
    {
      heading: "Restrictive practices and behaviour support plans",
      content:
        "The Aged Care Act 2024 places additional obligations around restrictive practices. Any use of a restrictive practice — including physical restraint, chemical restraint, environmental restraint, mechanical restraint, or seclusion — must be recorded in a restrictive practices register and linked to an approved behaviour support plan.\n\nProviders must demonstrate that restrictive practices are used only as a last resort, with informed consent, and are regularly reviewed. The register should capture who authorised the practice, the duration, the clinical rationale, and whether a behaviour support plan is in place.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "Statura Care's SIRS & Incidents module automates deadline tracking from the moment an incident is recorded. Priority 1 and Priority 2 deadlines are calculated automatically, with escalating alerts as deadlines approach. The module includes structured ACQSC notification templates, investigation workflows with root cause analysis fields, remediation action tracking, and an integrated restrictive practices register linked to behaviour support plans.\n\nAll incident data feeds into the Quality Standards module as evidence for Standard 2 (The Organisation) and Standard 3 (The Care and Services), and compliance alerts ensure nothing slips through the cracks.",
    },
  ],

  "responsible-persons-register-guide": [
    {
      content:
        "Under sections 12 and 13 of the Aged Care Act 2024, every approved provider must maintain a register of responsible persons — the individuals who hold key positions of authority within the organisation. This is not just a governance formality. The ACQSC uses responsible person information to assess whether your organisation has suitable people in positions of influence, and failure to maintain an accurate register is a compliance risk.",
    },
    {
      heading: "Who is a responsible person?",
      content:
        "A responsible person includes any individual who is a member of the governing body (board directors), the CEO or equivalent, the company secretary, a nominee of the provider, and any individual in a position to exercise significant influence over the management or administration of the provider. For trust structures, this extends to trustees. For associations, it extends to committee members.\n\nThe definition is deliberately broad. If someone can influence how the organisation operates — even informally — they may meet the threshold.",
    },
    {
      heading: "The 10 matters suitability assessment",
      content:
        "Each responsible person must undergo a suitability assessment covering 10 specific matters defined in the Act. These include whether the person has been convicted of certain offences, whether they are an insolvent under administration, whether they have been involved in the management of an entity whose registration has been revoked, and whether they are of good character.\n\nThe assessment is not a one-time check. Providers must have ongoing monitoring arrangements to identify changes in suitability — for example, if a board member is charged with a relevant offence after their initial assessment.",
    },
    {
      heading: "Screening requirements",
      content:
        "All responsible persons must hold current police checks and NDIS Worker Screening Checks where applicable. Screening records must be maintained with expiry dates tracked and renewal alerts in place. A lapsed screening check for a responsible person is a serious compliance gap that the ACQSC will identify during assessment contacts.",
    },
    {
      heading: "ACQSC notification obligations",
      content:
        "Providers must notify the ACQSC of changes to responsible persons — including new appointments, departures, and changes to suitability status. These notifications must be submitted within the timeframes specified in the Act, and late notification is itself a compliance failure.\n\nMaintaining a real-time register that automatically flags when a notification is due eliminates the risk of missed deadlines.",
    },
    {
      heading: "Governing body skills matrix",
      content:
        "Best practice — and increasingly an expectation during ACQSC assessments — is to maintain a skills matrix for your governing body. This maps each board member's qualifications, experience, and expertise against the competencies needed to govern an aged care provider effectively.\n\nAreas typically covered include aged care operations, clinical governance, financial management, risk management, quality improvement, and cultural safety. Gaps in the skills matrix should drive recruitment and professional development priorities.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Responsible Persons module in Statura Care provides a centralised register with built-in suitability assessments for all 10 matters, screening record tracking with automated expiry alerts, ACQSC notification templates with deadline management, and a governing body skills matrix. All data is audit-trailed and feeds into Quality Standards evidence for governance reporting.",
    },
  ],

  "aged-care-quality-standards-self-assessment-checklist": [
    {
      content:
        "The seven Strengthened Aged Care Quality Standards form the backbone of quality regulation for Australian aged care providers. Since 1 November 2025, the ACQSC assesses providers against these standards during announced and unannounced assessment contacts — and providers who cannot demonstrate compliance risk sanctions, notice of non-compliance, or ultimately revocation of registration.\n\nA structured self-assessment process is the most effective way to identify and address compliance gaps before the ACQSC arrives.",
    },
    {
      heading: "The 7 Quality Standards at a glance",
      content:
        "Standard 1 (The Individual) focuses on how providers treat older people — with dignity, respect for choices, identity, culture, and autonomy. Standard 2 (The Organisation) covers governing body responsibility, culture of safety and quality, workforce governance, complaints handling, and continuous improvement.\n\nStandard 3 (The Care and Services) ensures personal care, clinical care, and support services are safe, effective, and person-centred. Standard 4 (The Environment) requires safe, comfortable, welcoming environments. Standard 5 (Clinical Care) covers clinical governance, medication management, infection prevention, wound care, and palliative care.\n\nStandard 6 (Food and Nutrition) addresses food service quality, dietary needs, preferences, and cultural food requirements. Standard 7 (The Residential Community) covers community life, social connections, and meaningful activities — this standard applies specifically to residential care. For Support at Home providers, Standards 1\u20136 apply.",
    },
    {
      heading: "How to conduct an effective self-assessment",
      content:
        "For each standard, rate your organisation's performance against every outcome requirement. Use a consistent scale — for example: compliant, partially compliant, non-compliant, or not yet assessed.\n\nThe critical step that many providers miss is evidence mapping. For each outcome, identify the specific evidence that demonstrates compliance. This might include policies, procedures, training records, incident data, complaints outcomes, staffing rosters, care plans, or audit results. If you cannot point to concrete evidence, your self-assessment rating should reflect that gap.\n\nConduct self-assessments on a regular cycle — quarterly is recommended. Annual assessments leave too much time for compliance drift, and ad-hoc assessments lack the consistency that the ACQSC expects.",
    },
    {
      heading: "Cross-module evidence mapping",
      content:
        "The quality standards do not exist in isolation. Evidence for Standard 2 (The Organisation) comes from your governance records, workforce compliance data (staffing rosters, training records, screening checks), responsible persons register, incident data, complaints trends, and quality improvement actions.\n\nThe most efficient approach is to map evidence sources across your compliance modules so that data entered once supports multiple standards. This eliminates duplication and ensures your evidence is always current.",
    },
    {
      heading: "Preparing for assessment contacts",
      content:
        "When the ACQSC conducts an assessment contact, they will ask for evidence. Having an audit preparation pack — a pre-assembled collection of evidence mapped to each standard — dramatically reduces the stress and operational disruption of an assessment.\n\nYour pack should include your most recent self-assessment results, the evidence referenced for each standard, your continuous improvement register showing actions taken, and trend data for key metrics like incidents, complaints, and staffing levels.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Quality Standards module provides a structured self-assessment engine covering all 7 standards and their outcomes, with automatic evidence mapping from other modules — SIRS data feeds Standard 2 (The Organisation) and Standard 3 (The Care and Services), workforce data feeds Standard 2, clinical data feeds Standard 5 (Clinical Care), and so on. The continuous improvement register tracks identified gaps through to resolution, and the audit preparation pack generator assembles your evidence into a ready-to-present format.",
    },
  ],

  "care-minutes-target-200-minutes-compliance": [
    {
      content:
        "Since 1 October 2024, residential aged care providers have been required to deliver a minimum of 215 care minutes per resident per day, including at least 44 minutes of registered nurse (RN) time. This is not a target — it is a legislated minimum, and the ACQSC monitors provider performance against it. The previous requirement of 200/40 minutes applied from October 2023 to September 2024.\n\nMeeting this obligation requires accurate staffing data, clear role classification, and ongoing monitoring. Providers who rely on manual tracking or end-of-month calculations are at significant risk of non-compliance.",
    },
    {
      heading: "Understanding the 215-minute requirement",
      content:
        "The 215 care minutes target applies per resident per day, averaged across the facility. It includes direct care provided by registered nurses, enrolled nurses, and personal care workers. Allied health minutes are counted separately and do not contribute to the 215-minute minimum.\n\nThe 44-minute RN component is a hard floor within the 215 minutes. Even if a facility delivers 250 total care minutes, it fails the requirement if RN minutes fall below 44.",
    },
    {
      heading: "24/7 RN coverage",
      content:
        "In addition to the care minutes target, providers must ensure a registered nurse is on-site and available 24 hours a day, 7 days a week. This means every shift — including overnight and weekends — must have at least one RN rostered and present.\n\nProviders should maintain a documented RN coverage register that records the RN on each shift. Gaps in coverage — even brief ones during shift changeovers — are compliance risks that the ACQSC may identify through unannounced visits.",
    },
    {
      heading: "Practical strategies for tracking compliance",
      content:
        "The most reliable approach is to pull actual roster and timesheet data rather than relying on planned rosters. Planned rosters often change due to sick leave, agency staff, and shift swaps. If your compliance reporting is based on the planned roster rather than actual hours worked, you may be reporting inaccurate care minutes.\n\nClassify each worker by their care role — RN, EN, or PCW — and calculate minutes per resident per day based on actual shift hours divided by occupied bed count. Track this daily rather than monthly to identify shortfalls in real time rather than retrospectively.",
    },
    {
      heading: "What happens if you fall short?",
      content:
        "The ACQSC reviews care minutes data submitted through the quarterly staffing reports. Providers who consistently fall short of the 215-minute or 44-minute RN targets may face regulatory action, including requirements to submit remediation plans, increased monitoring, and potential sanctions.\n\nIt is far better to identify shortfalls early through daily monitoring and adjust staffing before they become a pattern visible in quarterly data.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Workforce Compliance module includes a daily care minutes calculator that computes actual minutes per resident from staffing data, broken down by RN, EN, and PCW roles. A 24/7 RN coverage tracker highlights gaps in real time, and trend dashboards show your rolling performance against the 215-minute and 44-minute targets. When shortfalls are detected, compliance alerts fire immediately — giving you time to respond before the data reaches the ACQSC.",
    },
  ],

  "prudential-compliance-refundable-deposits-aged-care": [
    {
      content:
        "Prudential compliance is one of the most technically complex areas of aged care regulation. Sections 170 to 183 of the Aged Care Act 2024 impose strict obligations on how providers manage refundable accommodation deposits (RADs), maintain liquidity, track permitted uses of refundable funds, and report to their governing body.\n\nThe financial consequences of getting prudential compliance wrong are severe — both in regulatory terms and in the obligation to refund deposits within legislated timeframes.",
    },
    {
      heading: "What are refundable accommodation deposits?",
      content:
        "A refundable accommodation deposit (RAD) is a lump sum payment made by a care recipient (or their representative) as payment for accommodation in residential aged care. RADs must be refunded when the care recipient leaves the facility — within 14 days of the departure date.\n\nProviders hold RADs as both a liability and a source of working capital. The total RAD liability across the sector runs into billions of dollars, and the ACQSC takes prudential compliance extremely seriously as a result.",
    },
    {
      heading: "Permitted use of refundable deposits",
      content:
        "Providers cannot use RAD funds for any purpose. The Act specifies permitted uses, which include capital expenditure, debt repayment related to capital, and investment in financial products. The critical restriction is that RAD funds must not be used for operating expenses or to fund losses in the general business.\n\nEvery use of refundable funds must be documented and tracked against the permitted use categories. During assessment contacts, the ACQSC may ask providers to demonstrate how specific RAD funds were deployed and whether each use falls within the permitted categories.",
    },
    {
      heading: "Liquidity obligations",
      content:
        "Providers must maintain sufficient liquidity to refund all RADs that could become payable within a reasonable period. This means you need to know, at any given time, how much total RAD liability you hold, how much could become payable in the short term (based on departures, deaths, and transfers), and whether your cash and liquid assets are sufficient to cover those obligations.\n\nA liquidity dashboard that tracks your RAD liability against available liquid assets — updated in real time rather than monthly — is essential for demonstrating compliance.",
    },
    {
      heading: "Governance and reporting",
      content:
        "The governing body must receive regular reports on the provider's prudential position. This includes total RAD holdings, liquidity ratios, permitted use compliance, and any breaches or near-misses.\n\nThe governance checklist for prudential compliance covers whether the provider has a prudential compliance policy, whether the governing body receives regular prudential reports, whether there are adequate controls over the use of refundable funds, and whether the provider can demonstrate its ability to meet refund obligations.\n\nDocumenting compliance with each governance checklist item — with dates, evidence, and responsible persons — is the standard the ACQSC expects.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Prudential Compliance module provides a refundable deposits register with automated calculations, a real-time liquidity dashboard showing your position against refund obligations, permitted use tracking for every transaction, and a governance checklist that maps to ACQSC expectations. The module integrates with the Responsible Persons module for governance reporting and with Agreements & Consent for accommodation pricing transparency.",
    },
  ],

  "aged-care-governance-best-practices-2026": [
    {
      content:
        "Effective governance is the foundation of a compliant, high-performing aged care organisation. Under the Aged Care Act 2024, the governing body — whether a board of directors, committee, or equivalent — carries explicit responsibility for ensuring the provider meets all obligations under the Act, from incident reporting to quality standards to financial stewardship.\n\nThe ACQSC increasingly expects to see not just compliance with governance rules, but evidence of a governance culture: a board that understands aged care, oversees quality systematically, and drives continuous improvement. This guide outlines the governance obligations, best practice frameworks, and the audit trail that demonstrates to regulators that your board is genuinely leading aged care governance.",
    },
    {
      heading: "Governing body obligations under the Act",
      content:
        "The Aged Care Act 2024 imposes a tiered set of governing body responsibilities. At the broadest level, the governing body is accountable for the provider's compliance with the Act and the Aged Care Quality Standards. This is not a legalistic formality — it means the governing body must actively oversee compliance management and ensure remediation of identified gaps.\n\nMore specifically, the Act requires the governing body to ensure the provider has adequate systems and resources to meet workforce obligations (including the 215 care minutes target and 24/7 RN coverage), to maintain a responsible persons register and assess suitability, to establish and monitor quality assurance programs, to maintain consumer rights protections, to manage complaints effectively, and to ensure financial accountability and prudential compliance.\n\nThe ACQSC assesses whether the governing body demonstrates active oversight of these areas — not just passive awareness. Board minutes should record discussions of compliance performance, identification of risks, and approval of remediation actions.",
    },
    {
      heading: "Clinical governance framework",
      content:
        "Clinical governance is the structure through which governing bodies oversee the quality and safety of clinical care. A robust clinical governance framework includes: clear clinical policies and procedures aligned with current evidence and aged care standards; a robust incident management system (including SIRS compliance) that captures learning; a complaints mechanism that escalates clinical concerns to the board; and regular quality and safety reporting to the governing body.\n\nThe clinical governance framework should specify how clinical risks are identified, assessed, escalated, and managed. This includes restrictions on restraint use, infection control, medication safety, and end-of-life care. Each area should have a designated owner — typically a senior clinician — with accountability to the governing body.\n\nMany boards make the mistake of delegating clinical governance entirely to operational management, then being surprised when the ACQSC identifies clinical risks. Governance requires oversight, not operational management. At minimum, the board should receive a monthly clinical governance report covering incidents, complaints, SIRS status, and quality metrics.",
    },
    {
      heading: "Board skills and composition",
      content:
        "For boards to govern aged care effectively, they need members with relevant expertise. Best practice — and increasingly expected by the ACQSC — is to maintain a skills matrix that maps board members' qualifications and experience against the competencies needed to govern.\n\nEssential board competencies include aged care operations and regulatory requirements, clinical governance and quality assurance, financial management and governance, risk management and compliance, human resources and workforce strategy, and consumer rights and family engagement.\n\nA board with only financial expertise or only clinical expertise creates blind spots. The skills matrix should be reviewed annually, gaps identified, and recruitment or professional development undertaken to address them. Documentation that the board conducts this exercise demonstrates intentional governance to the ACQSC.",
    },
    {
      heading: "Compliance reporting to the board",
      content:
        "The board cannot exercise oversight without quality compliance data. A robust reporting cadence ensures the governing body receives information to make informed decisions. Monthly reporting is recommended and should include: SIRS incident tracking and remediation status, responsible persons register changes and suitability assessments, workforce compliance against 215 care minutes and RN coverage targets, complaints summary and trends, quality and safety metrics (infections, falls, medications), financial and prudential position, and identified risks and remediation plans.\n\nBoard papers should distinguish between routine operational reporting and items requiring board decision or escalation. If everything is marked 'for information', the board can lose sight of genuine risks. Colour-coding of performance (green/amber/red) helps the board identify areas requiring attention.",
    },
    {
      heading: "Governance policies and procedures",
      content:
        "The board should have clear policies covering its own operation: a board charter that defines roles and responsibilities, a conflicts of interest policy with a register of interests, a delegation schedule defining what the board retains vs. delegates to management, a board performance self-assessment framework, and a succession plan for board leadership.\n\nThese are not box-ticking exercises. A well-designed governance framework means the board can operate effectively, decision-making is clear, roles are understood, and accountability is transparent. During ACQSC assessments, auditors will often ask to see the board charter and conflicts register — having these in place demonstrates intentional governance.",
    },
    {
      heading: "Continuous improvement and board development",
      content:
        "Governance excellence is iterative. An effective board conducts annual self-assessments evaluating its effectiveness, identifies development needs for board members (including aged care-specific training), and implements improvements to board processes and decision-making.\n\nIndustry participation — membership in aged care governance networks, attendance at professional development, and engagement with peak bodies — keeps boards informed of emerging risks and best practices. This also builds relationships with other providers, creating peer accountability and learning opportunities.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Governance module in Statura Care provides a board skills matrix with competency mapping, a compliance reporting dashboard that aggregates data from across the platform (incidents, workforce, quality, financials) into board-ready reports, a governance checklist aligned to Act obligations, policy templates covering board operation and clinical governance, and an audit trail of board decisions and remediation actions.\n\nThe module integrates with all other modules — Incidents, Workforce Compliance, Quality Standards, Prudential Compliance, Complaints, and more — to ensure the board always has current, evidence-backed compliance data. This allows boards to move from passive information-receiving to active governance leadership.",
    },
  ],

  "open-disclosure-aged-care-guide": [
    {
      content:
        "Open disclosure — the practice of transparently and promptly communicating incidents and near-misses to residents, families, and support persons — is both a regulatory requirement and an ethical obligation in aged care. Under the Aged Care Act 2024, providers must have systems in place to ensure open disclosure occurs, and the Aged Care Quality Standards require disclosure to be done in a way that respects the emotional and practical needs of families.\n\nMany providers approach open disclosure reactively — only after an incident has occurred. The most effective approach is proactive, building a culture where transparency is the norm and families see the provider as a trusted partner in managing quality and safety.",
    },
    {
      heading: "Regulatory requirements for open disclosure",
      content:
        "The Aged Care Act 2024 does not prescribe a single open disclosure process, but it does require providers to have systems, policies, and procedures in place. The Aged Care Quality Standards specify that disclosure should be appropriate to the incident and communicated in a manner that respects the person's dignity and culture.\n\nBest practice open disclosure frameworks identify key elements: early communication (within 24-48 hours of discovery for serious incidents), honest acknowledgement of what happened, an expression of regret, and clarity about what the provider will do next. For incidents reported under SIRS, open disclosure should occur in parallel — you don't wait for investigation completion before communicating with families.",
    },
    {
      heading: "The open disclosure process: step-by-step",
      content:
        "An effective open disclosure process follows a structured sequence: the incident is identified and triaged; the resident and/or family are identified; a disclosure meeting is scheduled promptly; the disclosure is delivered by an appropriate staff member (usually a manager or clinician), supported by another staff member if needed; the family's questions and concerns are heard and documented; and a follow-up process is established.\n\nPreparation is critical. Before the disclosure meeting, the discloser should understand what happened, the likely cause, what has been done immediately to prevent recurrence, what investigation will occur, and what ongoing support is available. Having this information allows the discloser to answer questions and address concerns rather than deferring to 'we'll get back to you'.\n\nThe tone matters as much as the content. The discloser should be calm, empathetic, and non-defensive. Families are often in shock or distress after hearing of an incident. The goal is to convey genuine concern and commitment to managing the issue, not to minimise or justify the incident.",
    },
    {
      heading: "Documentation and record-keeping",
      content:
        "Every open disclosure should be documented in the resident's file and in the incident management system. The record should capture: the date and time of disclosure, who it was disclosed to, who conducted the disclosure, what was communicated, the family's response and concerns, and any agreed next steps.\n\nThis documentation serves multiple purposes: it provides an audit trail of the disclosure process, it supports any subsequent complaint or investigation, and it ensures consistency if follow-up conversations occur with other staff members or family members.",
    },
    {
      heading: "Open disclosure and SIRS reporting",
      content:
        "Open disclosure and SIRS reporting are separate but interconnected. A serious incident that is reportable to the ACQSC under SIRS should be disclosed to the resident and family — this is a transparency and ethical obligation independent of regulatory reporting. However, the timing and content of disclosure may differ from the SIRS notification.\n\nFor example, you might disclose an incident to a family within 24 hours while SIRS notification is being prepared. You should disclose what is known at the time ('We believe your mother fell and sustained a minor injury; we are investigating') rather than waiting for investigation completion. This builds trust and demonstrates commitment to transparency.",
    },
    {
      heading: "Managing complex disclosure conversations",
      content:
        "Some disclosures are more complex: where the incident is serious or fatal, where there are allegations of staff negligence, where the family is already distressed or has a history of complaints, or where the incident may lead to legal action.\n\nIn these situations, it is often wise to involve senior management or a designated disclosure lead, and to consider support from risk management, legal, or external advisors. The goal remains the same — honest, empathetic communication and commitment to addressing concerns — but the complexity requires careful handling.\n\nProviders should have escalation protocols that identify when complex disclosures require heightened oversight or external support. This is not about avoiding accountability — it is about ensuring the disclosure process itself is conducted professionally and that the provider's response is robust.",
    },
    {
      heading: "Building a disclosure culture",
      content:
        "Open disclosure happens routinely in organisations where transparency is valued. This requires staff training, clear policies, senior leadership modelling, and an incident management culture where disclosure is expected, not feared.\n\nStaff should understand that disclosure is not admitting fault — it is communicating about what happened and what the provider will do about it. Creating psychological safety — where staff don't fear punishment for honest disclosure — is essential to embedding this culture.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Incidents & Disclosure module in Statura Care includes an open disclosure workflow that triggers when an incident is logged, templates for disclosure communications tailored to incident severity, a disclosure checklist ensuring all required steps are completed, documentation fields that capture the disclosure conversation, and tracking of family concerns and agreed actions.\n\nThe module integrates with SIRS reporting to flag reportable incidents requiring disclosure, and with the complaints module to track whether disclosed incidents escalate to complaints. Reporting dashboards show disclosure timeliness, family concerns identified, and remediation actions arising from disclosure conversations.",
    },
  ],

  "aged-care-worker-screening-requirements": [
    {
      content:
        "Worker screening is a cornerstone of resident safety in aged care. Under the Aged Care Act 2024, providers must ensure that certain workers — including direct care workers, management staff, and others with access to residents — undergo screening for criminal history, suitability, and relevant disqualifications.\n\nSections 60-65 of the Act establish the framework, but the practical implementation is complex: screening requirements vary by role, timelines must be tracked carefully, exemptions are available in limited circumstances, and ongoing monitoring obligations continue throughout employment.",
    },
    {
      heading: "Screening requirements under the Aged Care Act 2024",
      content:
        "The Act requires workers who have direct contact with residents, or who have unsupervised access to resident information, to hold current police checks and NDIS Worker Screening Checks (where applicable). The definition of 'worker' is broad — it includes employees, contractors, volunteers, and students. The definition of 'direct contact' includes care delivery, visiting residents' rooms, and unsupervised access to sensitive information.\n\nProviders must obtain screening before a worker commences, and must maintain proof of screening. Screening records must be kept on file with expiry dates tracked. A lapsed screening check for a worker in scope is a compliance gap that the ACQSC will identify.",
    },
    {
      heading: "Types of checks required",
      content:
        "Police checks typically include national criminal history checks plus state-specific checks where applicable. These checks identify criminal convictions, pending charges, and certain types of findings against the worker.\n\nNDIS Worker Screening Checks are specifically designed for disability and aged care sectors. These checks not only examine criminal history but also identify whether the person has been excluded from working with vulnerable people. In some states, NDIS screening is replacing general police checks as the primary screening mechanism for aged care workers.\n\nWorking with Children Checks are not typically required for aged care workers (unless the facility provides care to children), but may be required in some state-specific contexts.\n\nReferees and identity verification are part of screening, though the Act does not specify the exact format. Best practice is to verify identity with original documents (passport, driver's license) and obtain at least two professional referees.",
    },
    {
      heading: "Timelines and commencement",
      content:
        "Screening must be obtained before a worker commences in their role. In practice, this means: the worker applies for the role, you initiate screening processes, you receive results, and only after clearance does the worker start.\n\nPolice checks typically take 5-10 working days depending on the jurisdiction. NDIS screening can take 10-15 working days. Planning ahead during recruitment is essential — don't plan commencement before screening is complete.\n\nIf screening results in concerns (a conviction or finding of unsuitability), the provider must assess whether the person is suitable despite the finding. This is not an automatic disqualification — it requires a judgment about whether the conviction or finding is relevant to working in aged care. Documenting this assessment is important.",
    },
    {
      heading: "Exemptions and special circumstances",
      content:
        "The Act allows exemptions from screening in limited circumstances, primarily where screening is not available or where the person is already screened under a comparable scheme in another setting. Exemptions must be documented and justified.\n\nProviders should be cautious about claiming exemptions. The ACQSC expects exemptions to be genuinely necessary, not simply convenient. Most aged care workers can obtain police checks and NDIS screening within reasonable timeframes.",
    },
    {
      heading: "Ongoing monitoring and rechecking",
      content:
        "Screening is not a one-time event. Providers must have systems to identify when screening checks expire and ensure renewal screening is obtained in time. Most jurisdictions recommend renewal every 3-5 years; some aged care schemes mandate shorter intervals.\n\nBeyond scheduled renewal, providers should have a mechanism to identify if a worker is charged with or convicted of a relevant offence during their employment. Some jurisdictions enable workers to declare changes, others allow police agencies to flag updates. Regardless, the provider should maintain awareness and take action if a worker's suitability changes.",
    },
    {
      heading: "Record-keeping and auditing",
      content:
        "Screening records must be kept securely and confidentially. Best practice is to maintain a screening register that tracks every worker, their screening type, date obtained, expiry date, and status (current, renewal in progress, lapsed). This register should be reviewed at least quarterly to identify expiries or gaps.\n\nDuring ACQSC assessments, auditors will often ask to see the screening register and may sample records to verify that screening is current for workers in scope. A well-maintained register demonstrates systems compliance.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Workforce Screening module in Statura Care maintains a centralised screening register for all workers, tracks screening type and status for each worker, calculates expiry dates and generates renewal alerts 60 days before expiry, documents exemptions with justification and approval, and provides audit reports showing screening status across the workforce.\n\nThe module integrates with recruitment workflows to flag when screening is outstanding, and with the Quality Standards module to provide evidence for Standard 2 (The Organisation). Compliance alerts ensure no screening lapses go unnoticed.",
    },
  ],

  "restrictive-practices-aged-care-compliance": [
    {
      content:
        "Restrictive practices — the use of force or constraint to limit a person's freedom of movement or behaviour — are an increasingly regulated area in aged care. The Aged Care Act 2024 takes a strong stance: restrictive practices should be used only as a last resort, when less restrictive alternatives have been exhausted, and only with appropriate governance and behaviour support planning.\n\nMany providers underestimate the regulatory scrutiny around restrictive practices. The ACQSC identifies failures in this area frequently during assessments, and restrictive practice incidents are common SIRS reportable incidents. Understanding the types of practices, the regulatory requirements, and the documentation obligations is essential.",
    },
    {
      heading: "Types of restrictive practices",
      content:
        "The Act recognises several categories of restrictive practices. Physical restraint is the use of force or physical constraint to prevent movement — for example, holding someone, preventing them from leaving, or using a physical restraint device.\n\nChemical restraint is the use of medication or psychotropic substances, not prescribed or administered for the person's immediate medical condition, but administered to control behaviour or movement. This is particularly concerning in aged care as it may mask underlying health issues or cause harm.\n\nEnvironmental restraint is the restriction of access or movement through environmental controls — for example, locking doors, removing mobility aids, or preventing access to particular areas.\n\nMechanical restraint is the use of devices (seatbelts, bed rails, chairs with tables) to prevent movement. Note that some mechanical devices have legitimate therapeutic uses (e.g., a specialised seating system for posture support); the distinction is whether the purpose is restraint (limiting freedom) or therapeutic (supporting function).\n\nSeclusion is the confinement of a person alone — typically in a locked room. This is rarely appropriate in aged care and requires exceptional justification.",
    },
    {
      heading: "Regulatory requirements for use",
      content:
        "The Act requires that restrictive practices be used only when less restrictive alternatives have been exhausted, that the use be documented and justified, that informed consent be obtained where possible, and that the practice be regularly reviewed.\n\nProviders must have a behaviour support plan in place before using a restrictive practice. The plan should document: the behaviour of concern and its triggers, the risk or harm if not addressed, the less restrictive strategies that have been tried, why they were insufficient, the specific restrictive practice being used, the duration and frequency, who is authorised to implement it, and the review schedule.\n\nInformed consent is a legal requirement. If the resident has capacity, they must agree to the practice. If they lack capacity, consent should be sought from their legally appointed representative (enduring power of attorney, guardian, or family if no formal representation exists). If consent cannot be obtained, the provider must document why and how the decision was made in the resident's best interest.",
    },
    {
      heading: "Behaviour support planning",
      content:
        "A behaviour support plan (BSP) is central to legitimate use of restrictive practices. The plan should be developed collaboratively with the resident (where possible), family, and staff who interact with the resident regularly. It should identify antecedents (what triggers the behaviour), the behaviour itself, and consequences (what happens after the behaviour).\n\nThe BSP should document positive behaviour support strategies: changes to the environment that reduce triggers, changes to staff interaction or communication, activities or engagement that prevent boredom or distress, and early intervention strategies to prevent escalation.\n\nOnly after documenting that positive strategies have been tried or are insufficient should the plan include restrictive practices. The plan should specify who can implement the practice (usually a nurse or trained staff member), in what circumstances, for how long, and when the practice will be reviewed.\n\nBehaviour support plans should be reviewed regularly (at least quarterly, or earlier if the person's behaviour or circumstances change). Trends should be tracked — are the restrictive practices becoming more or less frequent? Are positive strategies becoming more effective?",
    },
    {
      heading: "SIRS reporting and restrictive practices",
      content:
        "Any inappropriate use of a restrictive practice is a reportable serious incident under SIRS. This includes: use without a behaviour support plan, use without proper authorisation, use that causes injury or harm, use beyond the duration specified in the plan, and use of chemical or mechanical restraint without clear therapeutic rationale.\n\nMany restrictive practice incidents are Priority 2 incidents (reportable within 30 days), but those causing serious harm or involving allegations of inappropriate restraint use may be Priority 1 (24 hours).\n\nProviders often delay reporting restrictive practice incidents because they perceive them as 'normal practice'. This is a regulatory failure. If a restrictive practice incident occurs outside the parameters of the behaviour support plan, it must be reported.",
    },
    {
      heading: "Documentation and the restrictive practices register",
      content:
        "A centralised restrictive practices register should capture every instance of restrictive practice use. For each entry: the resident, the practice used, the date and time, duration, person who implemented it, reason/context, any authorisation obtained, outcome, and whether the practice was within the approved behaviour support plan.\n\nThis register serves multiple purposes: it provides an audit trail demonstrating compliance, it identifies trends (if a resident is frequently in chemical restraint, is the behaviour support plan working?), and it flags any uses that fall outside approved parameters — which should be reported as incidents.\n\nDuring ACQSC assessments, auditors will review the register and sample actual practices against documented plans. Discrepancies — uses not in the register, practices not in the BSP, unauthorised use — are compliance failures.",
    },
    {
      heading: "Minimisation strategies and alternatives",
      content:
        "Effective aged care providers focus on preventing the need for restrictive practices. This requires ongoing investment in positive behaviour support: staff training in de-escalation and therapeutic communication, environmental design that reduces triggers, activity and engagement programs that meet residents' needs, and proactive health management to address underlying causes of behaviour change (pain, infection, cognitive decline, medication side effects).\n\nWhen behaviour of concern emerges, the first response should be investigation and support, not restraint. Has the person's health status changed? Are they in pain? Is the environment overwhelming? Are they receiving appropriate activities? Addressing root causes often resolves behaviour without ever needing restraint.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "The Restrictive Practices & Behaviour Support module in Statura Care maintains behaviour support plans with structured documentation of triggers, positive strategies, and approved restrictive practices. The Restrictive Practices register captures every use with authorisation tracking, plan compliance checks, and alerts when use falls outside approved parameters.\n\nThe module integrates with SIRS reporting to automatically flag suspected reportable incidents (uses outside the BSP, unauthorised practices), with staffing to track who is trained in behaviour support, and with clinical systems to link behaviour changes to health events. Trend reports show the effectiveness of positive strategies over time, enabling continuous improvement in behaviour support.",
    },
  ],

  "aged-care-data-security-requirements": [
    {
      content:
        "Aged care providers hold some of the most sensitive personal information in Australia: residents' names, dates of birth, medical histories, financial information, and contact details for families and support persons. A data breach — whether through cybercriminal attack, employee negligence, or system failure — can expose residents to identity theft, fraud, or harm, and exposes the provider to regulatory action and reputational damage.\n\nThe Aged Care Act 2024 and the Australian Privacy Act establish data security and privacy obligations. Beyond these, providers must comply with My Aged Care data governance requirements and should implement security standards aligned with the Australian Government's Information Security Manual and industry best practice.",
    },
    {
      heading: "Information governance framework",
      content:
        "Information governance is the structure and accountability for how an organisation creates, uses, stores, and disposes of information. A robust information governance framework includes: a data inventory (what information do we hold, where, for how long), a privacy policy that explains how resident data is used, a data retention schedule specifying how long different types of information are kept, roles and responsibilities for data management, and training for all staff on data handling.",
    },
    {
      heading: "Privacy obligations under Australian law",
      content:
        "The Australian Privacy Act 1988 applies to aged care providers. It establishes the Australian Privacy Principles (APPs), which include collection of only necessary information, use of information only for the primary purpose (and related purposes with consent), data security obligations, and the right of individuals to access and correct their information.\n\nFor aged care, the critical privacy obligations are: collect only information necessary for the care plan and management of the service; use resident information only for care and service management (not for marketing or other purposes without consent); ensure information is accurate and up-to-date; store information securely; and allow residents (or their representatives) to access their information.\n\nProviders must have a process for responding to privacy complaints and data access requests. The ACQSC may receive privacy complaints from residents or families, and providers should be prepared to demonstrate compliance.",
    },
    {
      heading: "Data breach notification obligations",
      content:
        "If a data breach occurs that is likely to result in serious harm to an individual, the Privacy Act requires providers to notify affected individuals as soon as practicable. Notification should include what information was breached, what happened, what steps the individual can take, and what the provider is doing in response.\n\nProviders should also notify the Office of the Australian Information Commissioner (OAIC) if the breach is serious and affects a significant number of individuals. Internal procedures should specify who is responsible for breach detection, escalation, notification, and investigation.",
    },
    {
      heading: "My Aged Care data governance",
      content:
        "Providers who participate in My Aged Care (the government's referral system for aged care services) must comply with My Aged Care data governance requirements. This includes using My Aged Care credentials securely, reporting any suspected security incidents to the My Aged Care operator, and maintaining audit trails of access to My Aged Care data.\n\nMany providers treat My Aged Care as a simple referral system, not realising that failure to secure My Aged Care access can result in unauthorised access to resident contact information and care assessment data. Staff should be trained on secure password practices, multi-factor authentication where available, and escalation of security concerns.",
    },
    {
      heading: "System security and Australian hosting",
      content:
        "Aged care providers increasingly use cloud-based systems for clinical records, care planning, and administrative functions. When selecting these systems, providers should verify that: the system is hosted in Australia (not offshore), the hosting provider is security-certified (ISO 27001 or equivalent), data is encrypted in transit (using TLS/HTTPS) and at rest, access is controlled through role-based permissions, and audit trails capture all access.\n\nFor particularly sensitive information (such as financial details, enduring powers of attorney), additional security controls — such as multi-factor authentication, additional encryption, or offline storage — should be considered.\n\nProviders should also maintain secure practices for less obvious systems: email servers, shared drives, backup systems, and paper files. A breach can occur through any of these channels.",
    },
    {
      heading: "Encryption standards and secure configuration",
      content:
        "Sensitive data should be encrypted using standards recognised by cybersecurity agencies (AES-256 for data at rest, TLS 1.2+ for data in transit). Encryption keys should be managed securely and backed up appropriately.\n\nSystems should be configured securely: default passwords changed, unnecessary services disabled, security patches applied regularly, and firewalls appropriately configured. Providers should implement a patch management process that ensures security updates are applied promptly across all systems.\n\nMulti-factor authentication should be required for staff access to clinical and financial systems. This is a relatively simple control that significantly reduces unauthorised access risk.",
    },
    {
      heading: "Staff training and security culture",
      content:
        "Many data breaches result from human error — staff clicking phishing links, sharing passwords, or accidentally sending information to the wrong recipient. Annual security awareness training for all staff is essential.\n\nTraining should cover: recognising phishing and social engineering, secure password practices, appropriate handling of resident information, incident reporting procedures, and consequences of data breaches. Creating a security culture where staff understand that data security is everyone's responsibility helps embed secure practices.",
    },
    {
      heading: "Disaster recovery and business continuity",
      content:
        "Data security includes ensuring that data is protected against loss. Providers should have a backup and disaster recovery plan that ensures clinical and financial data can be recovered if systems fail or are compromised. Backups should be tested regularly to ensure they can actually be restored.\n\nFor aged care, loss of clinical data (resident care plans, medication records) is not just a security issue — it is a safety issue. Redundancy and recovery planning should be proportionate to the criticality of the data.",
    },
    {
      heading: "How Statura Care helps",
      content:
        "Statura Care is hosted in Australia with ISO 27001 security certification. All resident data is encrypted in transit and at rest using AES-256. Access to resident information is role-based and audit-trailed — every view, edit, or export of resident data is logged with timestamp and user details.\n\nThe platform includes privacy settings allowing residents (or their representatives) to control who can view different types of information, supports multi-factor authentication for staff access, includes automated data retention and secure deletion, and generates audit reports showing data access patterns. The Data Governance module provides templates for privacy policies, data retention schedules, and breach response procedures, enabling providers to demonstrate privacy and security compliance to residents and regulators.",
    },
  ],

  "support-at-home-program-guide": [
    {
      content:
        "The Support at Home (SAH) program is the most significant structural reform to home-based aged care in Australia's history. Launched on 1 November 2025, SAH replaced the Home Care Packages (HCP) program under the **Aged Care Act 2024**. The Commonwealth Home Support Programme (CHSP) has not yet transitioned — CHSP will move to Support at Home no earlier than 1 July 2027. For providers delivering HCP-equivalent services, the transition is not optional — every organisation delivering government-funded home care packages now operates under the SAH framework, and the compliance obligations are materially different from what came before.\n\nIn the months since launch, the operational reality is becoming clearer. Providers who adapted early are seeing the benefits of a more transparent funding model, while those who delayed system changes are struggling with quarterly budget cycles and per-service billing. This guide covers what you need to know to operate effectively under SAH.",
    },
    {
      heading: "What changed on 1 November 2025?",
      content:
        "Before SAH, home-based aged care operated across two separate programs. The **Home Care Packages** program offered 4 package levels with a pooled annual budget and an income-tested daily care fee. The **Commonwealth Home Support Programme** provided entry-level services funded through block grants to providers, with minimal client contributions.\n\nSAH replaced HCP with a new program that fundamentally changes how home care services are funded, delivered, and reported. CHSP continues to operate separately and will transition to Support at Home no earlier than 1 July 2027. The key structural differences from HCP are substantial. SAH uses **8 classification levels** instead of 4 package levels, providing more granular funding aligned to assessed need. Funding is allocated as **quarterly budgets** with strict carry-over limits, rather than a single package balance that accumulates indefinitely. Client contributions are calculated **per service** across 3 categories, rather than as a flat daily fee. There is a **mandatory wellness and reablement** focus with required goal-setting in every care plan. And new **short-term pathways** provide time-limited funding for restorative care, allied health, and assistive technology.\n\nFor providers, this means rethinking how services are planned, scheduled, invoiced, and reported. Systems built for HCP management require significant modification — or replacement — to handle SAH requirements.",
    },
    {
      heading: "The 8 classification levels and annual budgets",
      content:
        "SAH classifies clients into 8 levels based on assessed need, determined by the Aged Care Assessment Organisation (ACAT). Each level carries a defined annual budget:\n\n**Level 1** — **$10,732** per year. For people with low-level support needs, such as occasional domestic assistance or social support.\n\n**Level 2** — **$17,945** per year. For people who need regular but limited support, such as weekly cleaning and some personal care.\n\n**Level 3** — **$27,937** per year. For people with moderate support needs across multiple service types.\n\n**Level 4** — **$41,371** per year. For people needing regular personal care and domestic assistance, roughly equivalent to the former HCP Level 2.\n\n**Level 5** — **$52,673** per year. For people with higher care needs including clinical services.\n\n**Level 6** — **$63,442** per year. For complex care needs requiring frequent clinical intervention.\n\n**Level 7** — **$73,544** per year. For high-level complex care, often including nursing and allied health.\n\n**Level 8** — **$78,106** per year. The highest level, for people with the most complex care needs who would otherwise require residential care.\n\nClassification is determined by ACAT and reviewed periodically. Providers cannot self-assign classification levels. Reclassification requests can be submitted when a client's needs change materially, but the assessment must be conducted independently.",
    },
    {
      heading: "Quarterly budget allocation and carry-over rules",
      content:
        "Under SAH, the annual budget is divided into **quarterly allocations** — each quarter, the client receives one-quarter of their annual budget. This is a fundamental shift from HCP, where the full package balance accumulated over time and could be spent flexibly.\n\nUnspent funds at the end of a quarter can be carried over to the next quarter, but only up to a **carry-over cap of 10% of the quarterly allocation or $1,000, whichever is greater**. Any unspent amount above the carry-over cap is returned to the Commonwealth — it does not remain in the client's balance.\n\nTo illustrate: a Level 4 client has a quarterly allocation of $10,342.75 (one-quarter of $41,371). Their carry-over cap is $1,034.28 (10% of the quarterly allocation, which exceeds the $1,000 minimum). If the client has $2,500 unspent at quarter-end, $1,034.28 carries forward and $1,465.72 is returned.\n\nThis creates a fundamentally different cash flow dynamic for providers. Under HCP, large unspent balances were common. Under SAH, services need to be delivered within the quarter they are funded for, and both over-delivery and under-delivery have consequences. Providers need systems that track quarterly budget consumption in real time, alert care coordinators when spending is tracking behind schedule, and generate carry-over calculations automatically at each quarter-end.",
    },
    {
      heading: "Per-service contributions: 3 categories, 4 tiers",
      content:
        "The SAH contribution model replaces the income-tested care fee that applied under HCP. Instead of a single daily fee, clients pay a **contribution as a percentage of the cost of each individual service**, with the rate determined by the service category and the client's means-testing tier.\n\nServices fall into **3 categories**:\n\n**Clinical and Therapeutic** — nursing, allied health (physiotherapy, occupational therapy, speech pathology, dietetics, podiatry), wound care, continence management, medication management. These attract the lowest contribution rates because they are considered essential health services.\n\n**Independence** — personal care, social support, respite care, meal preparation and delivery. These attract moderate contribution rates.\n\n**Everyday Living** — domestic assistance, transport, home maintenance, garden maintenance, home modifications. These attract the highest contribution rates as they are considered more discretionary.\n\nClients are assessed into **4 means-testing tiers** by Services Australia. **Tier 1** (full-rate pensioners) pays **0%** across all categories. **Tier 2** (part pensioners) pays **0% clinical / 5% independence / 17% everyday living**. **Tier 3** (self-funded retirees, lower) pays **0% clinical / 10% independence / 33% everyday living**. **Tier 4** (self-funded retirees, higher) pays **5% clinical / 17% independence / 50% everyday living**.\n\nFor a detailed breakdown of how contributions, caps, and hardship provisions work in practice, see our guide on [Support at Home contributions explained](/blog/support-at-home-contributions-explained).",
    },
    {
      heading: "Wellness and reablement: a mandatory focus",
      content:
        "SAH places **mandatory emphasis on wellness and reablement** — a shift from the maintenance-oriented approach that characterised many HCP services. Every SAH care plan must include measurable wellness goals, and providers must demonstrate that services are directed toward maintaining or improving the client's independence rather than simply sustaining the status quo.\n\nIn practice, this means care plans must include specific, time-bound goals — not generic statements like 'maintain current function'. Providers must review goals regularly and document progress or barriers. Services should be adjusted when goals are met, when progress stalls, or when the client's needs change. And there must be evidence that the client was genuinely involved in setting their own goals.\n\nThe ACQSC assesses wellness and reablement as part of **Standard 2 (Ongoing assessment and planning)** and **Standard 4 (Services and supports for daily living)**. Providers who cannot demonstrate a genuine wellness approach — with documented goals, regular reviews, and evidence of client participation — risk adverse findings during [assessment contacts](/blog/acqsc-assessment-contact-preparation).",
    },
    {
      heading: "Short-term pathways",
      content:
        "SAH introduces **short-term pathways** that sit alongside the ongoing classification-based support. These are designed for time-limited, goal-oriented interventions and have their own budgets separate from the client's ongoing SAH classification budget:\n\n**Restorative care pathway** — up to 12 weeks of intensive support following a health event (such as a hospital discharge or fall) to help the person regain independence. This replaces the former Short-Term Restorative Care Programme.\n\n**Allied health pathway** — a focused block of allied health services (physiotherapy, occupational therapy, speech pathology) to address a specific clinical need within a defined timeframe.\n\n**Assistive technology pathway** — funding for assistive technology and home modifications that support independence, such as mobility aids, bathroom modifications, or communication devices.\n\nProviders delivering short-term pathway services need to track these budgets independently from the client's ongoing SAH budget, document measurable outcomes at the end of each pathway period, and report on whether the intervention achieved its goals. Short-term pathways are a key part of the SAH wellness philosophy — they provide intensive support with the explicit aim of reducing or delaying the need for ongoing services.",
    },
    {
      heading: "What providers need to do to comply",
      content:
        "Full SAH compliance is now expected of all providers delivering services under the program. Providers should ensure they have addressed the following:\n\n**Systems and billing.** Your care management system must support quarterly budget tracking, per-service contribution calculations across all 3 categories and 4 tiers, and carry-over cap enforcement. Systems built for HCP daily-fee billing are unlikely to handle SAH requirements without significant modification.\n\n**Care planning.** All care plans must include documented wellness and reablement goals with measurable outcomes. Plans should be reviewed at least quarterly, with progress against goals recorded.\n\n**Service catalogue.** Every service your organisation delivers must be mapped to the correct SAH category (clinical and therapeutic, independence, or everyday living). Incorrect categorisation results in incorrect contribution calculations and potential compliance issues.\n\n**Client communications.** Clients must receive clear statements showing each service delivered, its category, the contribution rate, the contribution amount, and the balance drawn from their government-funded budget.\n\n**Reporting.** Providers must submit data to Services Australia and the Department of Health and Aged Care, including DEX reporting and financial acquittal. Quarterly budget reconciliation reports are required at the end of each quarter.\n\nStatura Care's [Home Care module](/modules/home-care) is purpose-built for SAH, handling quarterly budget tracking, automatic carry-over calculations, per-service contribution billing, wellness goal management, and short-term pathway tracking. For contribution details, see our guide on [SAH contributions and caps](/blog/support-at-home-contributions-explained).",
    },
  ],

  "acqsc-assessment-contact-preparation": [
    {
      content:
        "Assessment contacts are how the Aged Care Quality and Safety Commission (ACQSC) determines whether a provider is meeting the Aged Care Quality Standards. They are not audits in the traditional sense — they are broader evaluations of how care is actually delivered, experienced by consumers, and governed by the organisation. Providers who treat assessment contacts as box-ticking exercises consistently perform worse than those who embed quality into their daily operations.",
    },
    {
      heading: "What is an assessment contact?",
      content:
        "An assessment contact is a visit (or series of visits) by ACQSC assessors to evaluate a provider's performance against the **7 Strengthened Aged Care Quality Standards**. There are three types:\n\n**Announced assessment contacts** are scheduled in advance. The ACQSC notifies the provider of the visit date, the standards being assessed, and the general scope. Providers typically receive 2–4 weeks' notice. These are the most common type and are part of the regular accreditation cycle.\n\n**Unannounced assessment contacts** arrive without warning. The ACQSC may conduct an unannounced visit at any time, for any reason. Common triggers include complaints, SIRS reports, whistleblower disclosures, or intelligence from other regulatory sources. Providers must be ready for an unannounced visit at all times.\n\n**Review assessment contacts** occur when the ACQSC is monitoring a provider's response to previously identified issues. These may be announced or unannounced and focus specifically on whether the provider has addressed the concerns raised in a prior assessment.\n\nUnder the Aged Care Act 2024, the ACQSC has expanded powers to conduct assessment contacts, request information, interview staff and consumers, and access records. Refusing or obstructing an assessment contact is a serious compliance breach.",
    },
    {
      heading: "What assessors look for",
      content:
        "Assessors evaluate performance against each of the [7 Aged Care Quality Standards](/blog/aged-care-quality-standards-overview) using a combination of evidence sources:\n\n**Documentation review** — policies, procedures, care plans, incident reports, meeting minutes, training records, complaints registers, and improvement plans. Assessors want to see that documentation is current, consistent, and reflects actual practice.\n\n**Staff interviews** — assessors speak with staff at all levels to understand whether they know and follow policies, can articulate their role in quality and safety, and can describe how they respond to incidents or concerns. Frontline staff interviews are particularly telling.\n\n**Consumer and family interviews** — assessors speak directly with residents, clients, and their families to understand their experience of care. This is increasingly weighted — the ACQSC is moving toward outcome-based assessment where consumer experience is the primary measure.\n\n**Observation** — assessors observe care delivery, environment, interactions between staff and consumers, and general operations. They are looking for consistency between what documentation says and what actually happens.\n\nThe most common finding in adverse assessment outcomes is **inconsistency** — policies that say one thing, documentation that shows another, and staff who describe a third approach. Alignment across all evidence sources is the single most important factor.",
    },
    {
      heading: "Organising your evidence",
      content:
        "Effective evidence organisation is about being able to demonstrate compliance quickly and confidently, not about producing voluminous documentation. The best-prepared providers maintain a **structured evidence framework** that maps each Quality Standard to specific evidence sources.\n\nFor each standard, you should be able to identify: which policies and procedures apply, where the evidence of compliance is stored (care plans, incident logs, training records, meeting minutes), how you monitor ongoing compliance (quality indicators, audits, feedback), and what improvement actions you have taken based on your monitoring.\n\nA practical approach is to maintain an **evidence register** that lists, for each standard, the key evidence items, their location, when they were last reviewed, and who is responsible for keeping them current. This register becomes your preparation checklist before any assessment contact.\n\nStatura Care's [Compliance module](/compliance-software) provides cross-module evidence mapping — linking care plans, incidents, training records, and quality indicator data to the relevant Quality Standards automatically. This means evidence is always current and accessible without manual compilation.",
    },
    {
      heading: "Common reasons providers struggle",
      content:
        "After working with dozens of aged care providers, we consistently see the same patterns in organisations that struggle with assessment contacts:\n\n**Reliance on spreadsheets and paper systems.** When evidence is scattered across spreadsheets, shared drives, filing cabinets, and individual staff members' knowledge, it is nearly impossible to demonstrate compliance quickly. Assessors do not have unlimited time — if you cannot produce evidence promptly, it may as well not exist.\n\n**Poor cross-referencing between modules.** An incident report that does not connect to a care plan update, a training record that does not link to a policy change, a complaint that does not trigger an improvement action — these disconnects signal systemic governance failures to assessors.\n\n**Last-minute preparation.** Providers who scramble to prepare in the weeks before an announced assessment contact are already behind. If policies need updating, if training is overdue, if improvement registers are empty — these gaps cannot be credibly filled in a few weeks. Assessors are experienced at spotting recently created documentation.\n\n**Treating standards in isolation.** The Quality Standards are interconnected. Standard 2 (The Organisation) underpins all others. An incident ([SIRS](/blog/sirs-reporting-obligations-aged-care-act-2024)) should trigger a care plan review (Standard 3), a workforce review (Standard 2), and an improvement action (Standard 2). Providers who manage each standard independently miss these connections.",
    },
    {
      heading: "Building continuous audit readiness",
      content:
        "The goal is not to prepare for assessment contacts — it is to operate in a way that makes preparation unnecessary. This is what continuous audit readiness means in practice:\n\n**Regular self-assessment.** Conduct internal self-assessments against each Quality Standard at least quarterly. Use the same evidence framework that assessors use. Identify gaps and address them before they become findings. Our [self-assessment checklist](/blog/aged-care-quality-standards-self-assessment-checklist) provides a practical framework.\n\n**Maintain an active improvement register.** The ACQSC expects to see evidence of continuous improvement — not perfection, but a cycle of identifying issues, acting on them, and evaluating results. An empty improvement register is worse than one with open actions, because it suggests the organisation is not looking for areas to improve.\n\n**Cross-module evidence trails.** Every significant event should create connected evidence across relevant modules. An incident should link to an investigation, which links to a finding, which links to a corrective action, which links to an improvement register entry, which links to a policy update if needed. This chain of evidence is what assessors find most compelling.\n\n**Staff capability.** Ensure staff at all levels can articulate the organisation's approach to quality and safety. This is not about memorising policy documents — it is about understanding the principles and being able to describe how they apply to daily work. Regular team discussions about quality topics, debriefs after incidents, and inclusion in improvement activities all build this capability.",
    },
    {
      heading: "Practical preparation strategies",
      content:
        "While continuous readiness is the goal, there are practical steps that help when an assessment contact is confirmed:\n\n**Prepare evidence packs.** For each standard being assessed, compile the key evidence items into an accessible format. This should not require creating new documentation — if your evidence is current, it is a matter of organisation and presentation.\n\n**Brief key staff.** Ensure staff who may be interviewed understand the scope of the assessment, know where to find relevant documentation, and can speak confidently about their role in quality and safety. This is not about coaching staff on what to say — assessors can detect rehearsed responses. It is about ensuring staff are not caught off guard and can represent the organisation's genuine practices.\n\n**Review recent incidents and complaints.** Assessors will often focus on recent incidents, complaints, and how the organisation responded. Ensure investigation outcomes are documented, corrective actions have been implemented (not just planned), and affected consumers have been communicated with appropriately (see our guide on [open disclosure](/blog/open-disclosure-aged-care-guide)).\n\n**Check documentation currency.** Policies should be within their review date. Care plans should reflect current needs and recent assessments. Training records should show compliance with mandatory training requirements. Quality indicator data should be current and show evidence of analysis and response.\n\n**Designate a contact person.** Identify a senior staff member who will be the primary liaison with assessors, can facilitate access to records and staff, and can answer organisational-level questions about governance and quality management.",
    },
  ],

  "support-at-home-contributions-explained": [
    {
      content:
        "One of the most significant changes in the Support at Home (SAH) program is the way client contributions are calculated and collected. The old Home Care Packages model used a basic daily fee plus an income-tested care fee — both applied as flat daily charges regardless of which services were delivered. SAH replaces this with a **per-service contribution** model where the amount a client pays depends on the type of service delivered and their financial means. For providers, this means fundamentally different billing processes, client communications, and financial reporting.",
    },
    {
      heading: "How per-service contributions differ from the old HCP model",
      content:
        "Under the former Home Care Packages program, client contributions were relatively straightforward. There was a **basic daily fee** (set at 17.5% of the single basic age pension) that all clients could be asked to pay, plus an **income-tested care fee** for clients whose income exceeded certain thresholds. These fees were calculated by Services Australia and applied as a flat daily charge — the same amount every day, regardless of whether the client received a nursing visit, a cleaning service, or no services at all.\n\nSAH takes a fundamentally different approach. Instead of a flat daily fee, clients pay a **percentage of the cost of each individual service** they receive. The percentage varies depending on two factors: the **category** of service being delivered and the client's **means-testing tier**. This means two clients receiving the same service may pay different contribution amounts, and the same client will pay different contribution rates for different types of services delivered on the same day.\n\nThe practical impact for providers is substantial. Contribution calculations now happen at the individual service level — every service delivered must be categorised, the client's tier must be applied, and the contribution amount must be calculated and communicated. Systems built for the HCP daily-fee model cannot handle this without significant modification.",
    },
    {
      heading: "The 3 service categories",
      content:
        "SAH divides all services into **3 categories**, each attracting different contribution rates. Correct categorisation is critical — if a service is mapped to the wrong category, the contribution calculation will be wrong.\n\n**Clinical and Therapeutic** services attract the **lowest contribution rates**. This category includes nursing services, allied health (physiotherapy, occupational therapy, speech pathology, dietetics, podiatry), wound care, continence assessment, medication management and review, and clinical monitoring. The rationale for lower rates is that clinical services are considered essential health care that should not be deterred by cost.\n\n**Independence** services attract **moderate contribution rates**. This category includes personal care (showering, dressing, grooming, toileting), social support and community access, respite care, and meal preparation and delivery. These services directly support a person's ability to remain living at home and maintain social connections.\n\n**Everyday Living** services attract the **highest contribution rates**. This category includes domestic assistance (cleaning, laundry), transport, home maintenance, garden maintenance, and home modifications. The higher rates reflect that these services, while valuable, are considered more discretionary than clinical or independence services.\n\nProviders must ensure their service catalogue correctly maps every service type to the appropriate category. The Department of Health and Aged Care publishes a definitive service classification list — providers should reference this rather than making their own categorisation decisions.",
    },
    {
      heading: "The 4 means-testing tiers",
      content:
        "Under SAH, clients are assessed into one of **4 means-testing tiers** by Services Australia, based on their income and assets. The tier determines what percentage the client pays for each service category:\n\n**Tier 1 — Full-rate pensioners.** Clients pay **0%** across all three service categories. No contribution is required for any service. This tier ensures the most financially vulnerable clients face no cost barrier to receiving care.\n\n**Tier 2 — Part pensioners.** Clients pay **0% for clinical and therapeutic**, **5% for independence**, and **17% for everyday living** services. Part-rate pensioners contribute modestly for non-clinical services while clinical care remains free.\n\n**Tier 3 — Self-funded retirees (lower).** Clients pay **0% for clinical and therapeutic**, **10% for independence**, and **33% for everyday living** services. Clinical care remains free, but contributions for other categories increase substantially.\n\n**Tier 4 — Self-funded retirees (higher).** Clients pay **5% for clinical and therapeutic**, **17% for independence**, and **50% for everyday living** services. This is the only tier where clinical services attract a contribution, and everyday living services are effectively co-funded equally between the client and the government.\n\nThe tier assessment is conducted by Services Australia and communicated to the provider via a **contribution determination letter**. Providers must not attempt to assess a client's tier themselves — the determination must come from Services Australia. If a client has not yet been assessed, they are treated as Tier 1 (no contribution) until the determination is received.",
    },
    {
      heading: "Contribution rates at a glance",
      content:
        "The following table summarises the contribution rates across all categories and tiers:\n\n**Clinical and Therapeutic:** Tier 1 = 0%, Tier 2 = 0%, Tier 3 = 0%, Tier 4 = 5%.\n**Independence:** Tier 1 = 0%, Tier 2 = 5%, Tier 3 = 10%, Tier 4 = 17%.\n**Everyday Living:** Tier 1 = 0%, Tier 2 = 17%, Tier 3 = 33%, Tier 4 = 50%.\n\nThe contribution is calculated as a percentage of the actual service cost — the amount the provider charges, subject to any price caps set by the Department. For example, if a Tier 3 client receives a 2-hour domestic assistance visit costing $120, and domestic assistance is an everyday living service at 33%, the client's contribution for that service is **$39.60**. The remaining $80.40 is drawn from their quarterly SAH budget.\n\nProviders must calculate and communicate contributions to clients for each service delivered, showing the service type, its category, the applicable rate, the contribution amount, and the amount drawn from the government-funded budget.",
    },
    {
      heading: "Lifetime contribution cap",
      content:
        "To protect clients from excessive cumulative costs, SAH applies a **lifetime contribution cap** that limits the total contributions a client can be asked to pay across their entire period of receiving aged care services.\n\nThe lifetime cap for **new entrants** (clients who commenced SAH services from 1 November 2025 onward) is **$135,318.69** (indexed annually). For **grandfathered clients** (those who transitioned from an existing Home Care Package), the lifetime cap is **$84,571.66** — a lower figure that accounts for contributions already paid under the HCP program and protects transitioned clients from disadvantage.\n\nImportantly, SAH does **not** apply an annual contribution cap. Unlike some other aged care funding models, there is no yearly reset — the lifetime cap is the only ceiling. Once a client's cumulative contributions reach the lifetime cap, their contribution drops to **0%** for all services permanently. They continue to receive their full SAH budget with no further client contribution required.\n\nIt is the provider's responsibility to track cumulative contributions against the lifetime cap and cease charging when the cap is reached. Services Australia provides cap tracking data, but providers should maintain their own records as a safeguard. Statura Care's contribution tracking automatically monitors each client's cumulative total and alerts providers when a client is approaching the cap threshold.",
    },
    {
      heading: "Hardship provisions",
      content:
        "SAH includes **financial hardship provisions** for clients whose contribution obligations cause genuine financial difficulty, even after means testing. A client (or their representative) can apply to Services Australia for a **hardship determination**, which may reduce or waive their contribution obligations.\n\nThe hardship assessment considers the client's income, assets, debts, essential living expenses, and any exceptional circumstances — such as high medical costs, supporting a dependent, or unexpected financial setbacks. If a hardship determination is granted, the client's effective contribution tier is reduced, sometimes to Tier 1 (no contributions). The determination is reviewed periodically, and the client may need to reapply if their circumstances change.\n\nProviders have a clear obligation to **inform clients about the hardship provisions** when a client expresses difficulty paying contributions. This is not optional — failure to inform clients about hardship options could be considered a failure to support consumer dignity and choice under **Standard 1** of the Aged Care Quality Standards, and may be raised during ACQSC [assessment contacts](/blog/acqsc-assessment-contact-preparation).\n\nIn practice, providers should include hardship information in their client welcome packs, raise the option proactively during care plan reviews if a client's circumstances appear to have changed, and document that the client was informed of their right to apply.",
    },
    {
      heading: "How Statura Care automates contribution calculations",
      content:
        "Calculating per-service contributions manually — across 3 categories, 4 tiers, varying service costs, and lifetime cap tracking — is operationally burdensome and error-prone. A single miscategorised service or missed cap threshold creates billing errors that are difficult to unwind and may trigger compliance concerns.\n\nStatura Care's [Home Care module](/modules/home-care) automates the entire contribution workflow. Every service in your catalogue is mapped to the correct SAH category (clinical and therapeutic, independence, or everyday living). When a service is delivered, the system automatically applies the client's means-testing tier, calculates the contribution amount, deducts it from the quarterly budget, and updates the client's cumulative lifetime contribution total.\n\nThe platform generates client-facing statements showing each service delivered, its category, the contribution rate applied, the client's contribution amount, and the amount drawn from their government-funded budget. Lifetime cap tracking runs continuously — when a client approaches their cap threshold, the system alerts the care coordinator so the transition to zero contributions is handled seamlessly.\n\nFor the broader SAH framework — including classification levels, quarterly budgets, wellness goals, and short-term pathways — see our [Support at Home program guide](/blog/support-at-home-program-guide). To see how Statura Care handles SAH billing end-to-end, visit our [SAH contributions and claims page](/sah-contributions-claims).",
    },
  ],

  "aged-care-quality-standards-overview": [
    {
      content:
        "The Strengthened Aged Care Quality Standards are the cornerstone of quality regulation in Australian aged care. Established under the **Aged Care Act 2024** and effective from **1 November 2025**, the 7 standards replaced the previous 8 standards. They define what consumers can expect from aged care services and what providers must deliver. Every registered aged care provider — whether delivering residential care, home care under the [Support at Home program](/blog/support-at-home-program-guide), or flexible care — must demonstrate compliance with all applicable standards at all times. Standards 1\u20136 apply to all providers; Standard 7 (The Residential Community) applies specifically to residential care.",
    },
    {
      heading: "What are the Aged Care Quality Standards?",
      content:
        "The 7 Strengthened Quality Standards set out the expectations for the quality of care and services delivered by aged care providers. They are legally enforceable under the Aged Care Act 2024 — non-compliance can result in regulatory action by the Aged Care Quality and Safety Commission (ACQSC), including sanctions, enforceable undertakings, and in serious cases, revocation of registration.\n\nThe standards are **outcome-focused**. This means the ACQSC does not prescribe exactly how providers must comply — instead, it assesses whether the outcomes for consumers meet the standard. This gives providers flexibility in how they achieve compliance, but also means that simply having policies and procedures is not sufficient. Providers must demonstrate that their policies produce the intended outcomes in practice.\n\nStandards 1\u20136 apply across all service types. A residential care provider and a [Support at Home](/blog/support-at-home-program-guide) provider are both assessed against Standards 1\u20136. Standard 7 (The Residential Community) applies specifically to residential care, covering community life, social connections, and meaningful activities.",
    },
    {
      heading: "Standard 1: The Individual",
      content:
        "Standard 1 focuses on how providers and workers treat older people. It requires that older people are treated with dignity, have their choices respected, and are supported to exercise autonomy. Cultural safety is a central element.\n\n**What it requires:** older people are treated with dignity and respect at all times; their identity, culture, religion, language, and life experiences are valued and supported; they have genuine choice and control over their care and services; cultural safety is embedded in care delivery; and their privacy and autonomy are respected.\n\n**Evidence types:** consumer feedback and satisfaction surveys; documented evidence of how consumer preferences are identified and respected; cultural safety policies and practices; privacy policies and consent processes; care plan documentation showing consumer involvement in decision-making; and complaint resolution records showing consumer-centred responses.\n\nStandard 1 is the foundation of the person-centred approach that underpins all other standards. Assessors often evaluate this standard through direct consumer and family interviews rather than documentation alone.",
    },
    {
      heading: "Standard 2: The Organisation",
      content:
        "Standard 2 covers the governing body's responsibility for the organisation. It brings together governance, safety culture, workforce governance, complaints handling, risk management, and continuous improvement — areas that were previously spread across the old Standards 2, 6, 7, and 8.\n\n**What it requires:** the governing body is accountable for the delivery of safe, quality care; the organisation has effective clinical governance, risk management, and quality improvement systems; leaders promote a culture of safety, inclusion, and continuous improvement; workforce planning, screening, training, and staffing levels (including [care minutes targets](/blog/care-minutes-target-200-minutes-compliance)) are adequate; complaints and feedback are managed effectively and used to drive improvement; and the [responsible persons register](/blog/responsible-persons-register-guide) is maintained.\n\n**Evidence types:** governing body meeting minutes showing oversight of quality, safety, and compliance; clinical governance framework documentation; [risk management](/governance-software) registers and treatment plans; workforce data including screening, training, and care minutes; complaints register with resolution evidence; continuous improvement register; and responsible persons register with suitability assessments.\n\nStandard 2 is the overarching organisational standard. The ACQSC considers that strong organisational governance is the foundation for compliance with all other standards.",
    },
    {
      heading: "Standard 3: The Care and Services",
      content:
        "Standard 3 requires that care and services are safe, effective, and person-centred. It covers assessments, care planning, personal care, and support services — bringing together elements from the previous Standards 2, 3, and 4.\n\n**What it requires:** consumers receive comprehensive assessments with care plans developed collaboratively; personal care meets each consumer's needs and preferences; support services promote independence and quality of life; incident management and restrictive practices are handled safely; consumers' pain is identified and managed effectively; and deterioration in a consumer's condition is identified and responded to promptly.\n\n**Evidence types:** assessment and care plan documentation showing consumer involvement; [incident reports](/incident-management-software) with investigation and corrective action documentation; restrictive practices register and behaviour support plans; records of regular care plan reviews; and documentation of how changes in consumer needs trigger reassessment.\n\nStandard 3 is broad in scope. Providers must demonstrate not only that care is delivered, but that it is planned, monitored, and improved in partnership with consumers.",
    },
    {
      heading: "Standard 4: The Environment",
      content:
        "Standard 4 requires that service environments are safe, comfortable, welcoming, and meet consumers' needs.\n\n**What it requires:** the service environment is safe and well-maintained; the environment meets the needs of consumers (including those with dementia, sensory impairment, or mobility limitations); equipment is appropriate, well-maintained, and available when needed; infection prevention and control measures are implemented effectively in the physical environment; and the environment supports consumers' independence, dignity, and quality of life.\n\n**Evidence types:** environmental audits and hazard registers; maintenance records and schedules; equipment maintenance and safety check records; work health and safety documentation; emergency and disaster preparedness plans; and for home care providers, risk assessments of the consumer's home environment.\n\nFor residential care providers, Standard 4 includes the physical building, grounds, furnishings, and shared spaces. For home care providers, it extends to the consumer's home environment and any equipment provided by the service.",
    },
    {
      heading: "Standard 5: Clinical Care",
      content:
        "Standard 5 covers clinical governance, medication management, infection prevention, wound care, palliative care, and response to clinical deterioration.\n\n**What it requires:** clinical care is delivered by appropriately qualified staff under a robust clinical governance framework; [medication management](/medications-software) is safe, with appropriate administration, reconciliation, and incident reporting; infection prevention and control measures are implemented and effective; wound care and vital signs monitoring follow evidence-based practice; palliative and end-of-life care meets consumers' needs and wishes; and clinical deterioration is identified and responded to promptly.\n\n**Evidence types:** clinical governance framework documentation; clinical care records showing evidence-based practice; medication management records including administration, reconciliation, and incident reporting; infection prevention and control procedures, training records, and outbreak logs; wound management and vital signs monitoring records; palliative care plans and end-of-life documentation; clinical handover records; and clinical audit results.\n\nStandard 5 is where clinical governance frameworks are most closely scrutinised. Providers must demonstrate not only that clinical care is delivered, but that it is governed — with oversight, quality monitoring, and continuous improvement.",
    },
    {
      heading: "Standard 6: Food and Nutrition",
      content:
        "Standard 6 focuses on meeting consumers' dietary needs, preferences, and cultural food requirements through quality food services.\n\n**What it requires:** food and nutrition services meet each consumer's assessed needs, preferences, and cultural requirements; nutritional assessments are conducted and regularly reviewed; menus offer variety, choice, and nutritional adequacy; meal environments are welcoming and support social dining; consumers' feedback on food services is actively sought and acted upon; and special dietary needs (texture modification, allergies, cultural requirements) are accommodated.\n\n**Evidence types:** menu planning records including dietary requirement documentation; nutritional assessment and monitoring records; consumer satisfaction surveys on food and meals; evidence of meeting cultural and religious food requirements; meal service quality records; and food safety and hygiene documentation.\n\nStandard 6 recognises that food and nutrition are fundamental to quality of life and clinical outcomes in aged care. Assessors look for evidence that food services are responsive to individual needs, not just institutionally adequate.",
    },
    {
      heading: "Standard 7: The Residential Community",
      content:
        "Standard 7 applies specifically to residential care. It covers community life, social connections, meaningful activities, and how the residential setting supports quality of life. Support at Home providers are assessed against Standards 1\u20136 only.\n\n**What it requires:** the residential community supports and promotes quality of life; consumers are supported to maintain and develop social connections; meaningful activities are available that reflect consumers' interests, preferences, and cultural backgrounds; the residential environment promotes a sense of belonging and community; and consumers are supported to participate in community life both within and outside the facility.\n\n**Evidence types:** activity programs showing variety and consumer participation; evidence of community engagement and social connection support; consumer feedback on community life and activities; records showing how consumer preferences shape community activities; evidence of connections with external community organisations; and volunteer and visitor engagement records.\n\nStandard 7 recognises that residential care is not just about clinical and personal care — it is about quality of life. Assessors look for evidence that the residential environment fosters genuine community, not just institutional routines.\n\n**Note:** Workforce governance (previously Standard 7 under the old standards) and organisational governance (previously Standard 8) are now consolidated under **Standard 2 (The Organisation)**. Complaints and feedback (previously Standard 6) are also part of Standard 2. For details on workforce compliance obligations, see our [workforce compliance guide](/blog/aged-care-workforce-compliance-guide).",
    },
    {
      heading: "Self-assessment and continuous improvement",
      content:
        "The ACQSC expects providers to conduct regular **self-assessment** against the 7 Strengthened Quality Standards — not just in preparation for assessment contacts, but as an ongoing practice of reflective governance.\n\nEffective self-assessment involves: evaluating performance against each standard using the same outcome-focused lens that assessors use; identifying gaps between current performance and the requirements of each standard; developing improvement actions to address gaps; implementing and tracking those actions; and evaluating whether the actions achieved the intended improvement.\n\nThe results of self-assessment should feed into the organisation's **improvement register** — a living document that tracks identified issues, planned actions, responsible persons, deadlines, and outcomes. An active improvement register is one of the strongest indicators of a quality-focused organisation.\n\nFor a practical framework for conducting self-assessment, see our [self-assessment checklist](/blog/aged-care-quality-standards-self-assessment-checklist). For guidance on preparing for assessment contacts, see our [ACQSC assessment contact preparation guide](/blog/acqsc-assessment-contact-preparation).\n\nStatura Care's [Compliance module](/compliance-software) supports self-assessment by providing cross-module evidence mapping, gap analysis tools, and improvement register tracking — all connected to the relevant Quality Standards and accessible in real time.",
    },
  ],

  "support-at-home-quarterly-budgets": [
    {
      content:
        "Quarterly budget management is one of the most operationally significant changes that the Support at Home (SAH) program introduces for home care providers. Under the former Home Care Packages program, providers managed a single cumulative balance that rolled over indefinitely. SAH replaces this with a structured quarterly allocation model that requires real-time budget tracking, proactive service planning, and careful carry-over management.",
    },
    {
      heading: "How SAH quarterly budgets work",
      content:
        "Under SAH, each client's **annual budget** (determined by their classification level) is divided into **4 equal quarterly allocations**. The quarters align with the financial year: Q1 (July–September), Q2 (October–December), Q3 (January–March), Q4 (April–June).\n\nAt the start of each quarter, the client's quarterly budget becomes available for service delivery. Services delivered during the quarter are drawn from that quarter's allocation. Any client contributions (calculated per service based on the client's [means-testing tier and service category](/blog/support-at-home-contributions-explained)) reduce the government-funded portion but do not reduce the total service value available to the client.\n\nThis quarterly structure means providers cannot front-load or back-load services across the year in the way that was possible under HCP. A client's July services must be funded from Q1's allocation, not from the annual total. This requires a fundamentally different approach to care planning and service scheduling.",
    },
    {
      heading: "Budget allocation by classification level",
      content:
        "The following table shows the approximate annual and quarterly budgets for each SAH classification level:\n\n**Level 1:** ~$11,500/year → ~$2,875/quarter\n**Level 2:** ~$17,000/year → ~$4,250/quarter\n**Level 3:** ~$25,000/year → ~$6,250/quarter\n**Level 4:** ~$36,500/year → ~$9,125/quarter\n**Level 5:** ~$42,000/year → ~$10,500/quarter\n**Level 6:** ~$52,000/year → ~$13,000/quarter\n**Level 7:** ~$62,000/year → ~$15,500/quarter\n**Level 8:** ~$78,000/year → ~$19,500/quarter\n\nThese amounts are indexed annually and may change. Providers should refer to the current Department of Health and Aged Care schedule for exact figures. The amounts above are indicative for the 2025–26 financial year.\n\nFor clients who enter SAH partway through a quarter, the budget is pro-rated based on the number of days remaining in the quarter.",
    },
    {
      heading: "Carry-over rules",
      content:
        "Not all clients will use their full quarterly allocation every quarter. SAH allows limited **carry-over** of unspent funds to the next quarter, subject to a cap:\n\nThe carry-over cap is **10% of the quarterly allocation** or **$1,000**, whichever is greater.\n\nFor example, a Level 4 client with a quarterly allocation of ~$9,125 has a carry-over cap of ~$912.50. Since this is below $1,000, the $1,000 minimum applies — so they can carry over up to $1,000. A Level 8 client with a quarterly allocation of ~$19,500 has a carry-over cap of ~$1,950 (10% of $19,500).\n\n**Any unspent amount above the carry-over cap is forfeited** — it is returned to the government and does not remain in the client's budget. This is a critical difference from HCP, where unspent funds accumulated indefinitely.\n\nThe carry-over creates an incentive for providers to actively manage service delivery throughout the quarter. Significant underspend means the client may not be receiving the services they need (a care quality concern) or the provider is not scheduling services effectively (an operational concern). Either way, the carry-over cap means the money is lost if services are not delivered.\n\nCarry-over funds are added to the next quarter's regular allocation. They are available for the same quarter only and do not carry over again — there is no compounding of carry-over amounts.",
    },
    {
      heading: "Care management deduction",
      content:
        "SAH allows providers to deduct a **care management fee** from the client's quarterly budget to cover the costs of care coordination, administration, and management. However, this deduction is **capped at 10% of the quarterly budget**.\n\nFor a Level 4 client with a quarterly budget of ~$9,125, the maximum care management deduction is ~$912.50 per quarter. This must cover all care coordination activities including care plan development and review, service scheduling, provider coordination, progress monitoring, and administrative overheads.\n\nThe 10% cap is significantly lower than the care management charges many providers applied under HCP (where 20–35% was common). This reflects the government's intention to maximise the proportion of funding that reaches the client as direct services.\n\nProviders need to carefully manage their care management costs within this cap. Those with high administrative overheads or inefficient coordination processes may find the 10% cap constraining. Investing in systems that automate care coordination tasks — scheduling, budget tracking, reporting — can help providers deliver effective care management within the cap.",
    },
    {
      heading: "Budget tracking best practices",
      content:
        "Effective quarterly budget management requires real-time visibility into budget consumption. Best practices include:\n\n**Real-time budget dashboards.** Care coordinators should be able to see, at any point in the quarter, how much of each client's budget has been consumed, how much remains, and what the projected end-of-quarter position is based on scheduled services. Waiting until the end of the quarter to calculate budget position is too late.\n\n**Alerts and thresholds.** Set up automated alerts when a client's budget consumption reaches key thresholds — for example, 50% consumed by mid-quarter (on track), 80% consumed with 4+ weeks remaining (potential overspend), or less than 25% consumed at mid-quarter (potential underspend and carry-over forfeiture).\n\n**Projected vs actual tracking.** Compare scheduled services (projected cost) against delivered services (actual cost) to identify discrepancies early. Cancelled services, changed service durations, and unplanned additional services all affect budget position.\n\n**Carry-over forecasting.** Before the end of each quarter, calculate the projected carry-over amount and compare it to the carry-over cap. If carry-over will exceed the cap, consider whether additional services could be meaningfully delivered before quarter-end. If carry-over is well below the cap, the budget is being managed effectively.\n\n**Client communication.** Keep clients informed about their budget position. Under SAH, clients have a right to understand how their funding is being used. Regular budget statements build trust and support informed decision-making about service priorities.",
    },
    {
      heading: "What happens when budgets are exceeded",
      content:
        "If a provider delivers services that exceed the client's quarterly budget (including any carry-over from the previous quarter), the provider bears the cost of the excess. The government does not provide additional funding for over-delivery.\n\nThis creates a direct financial risk for providers. Under HCP, over-delivery against the package could be offset by unspent balances from previous periods. Under SAH, the quarterly structure limits this flexibility.\n\nProviders should have clear policies for managing budget overruns, including: requiring care coordinator approval before delivering services that would take the client over budget; having a process for requesting reclassification when a client's needs consistently exceed their classification level; and documenting the clinical rationale when services must be delivered despite budget constraints (for example, in response to a health crisis).\n\nIn cases where a client's needs consistently exceed their classification level, the appropriate response is to request a **reclassification assessment** through the Aged Care Assessment Organisation. Continuing to absorb the cost of over-delivery without seeking reclassification is neither financially sustainable nor in the client's interest — a higher classification level provides more funding and better reflects the client's actual needs.\n\nStatura Care's [Support at Home module](/support-at-home-software) provides real-time quarterly budget tracking, carry-over calculations, overspend alerts, and budget forecasting — giving care coordinators the visibility they need to manage budgets proactively. For the full SAH framework overview, see our [Support at Home program guide](/blog/support-at-home-program-guide).",
    },
  ],

  "aged-care-workforce-compliance-guide": [
    {
      content:
        "Workforce compliance is one of the most complex and consequential areas of aged care regulation. Under the Aged Care Act 2024, providers face a web of interconnected obligations covering who can work in aged care, what qualifications and screening they need, how many staff must be on duty, what they must be paid, and how they must conduct themselves. Getting workforce compliance wrong can result in regulatory action, financial penalties, and — most importantly — harm to the people in your care.",
    },
    {
      heading: "Worker screening requirements",
      content:
        "Every person who works in aged care — including employees, contractors, volunteers, and agency staff — must undergo **worker screening** before commencing work. Under the Aged Care Act 2024 (sections 86–92), providers must not allow an unscreened person to deliver care or services to aged care consumers.\n\nThe screening requirements include:\n\n**National Police Check** — a criminal history check conducted through the Australian Criminal Intelligence Commission (ACIC). This must be completed before the worker commences and renewed every 3 years. A police check that reveals relevant criminal history does not automatically disqualify a person, but the provider must conduct a risk assessment to determine whether the person is suitable for the role.\n\n**NDIS Worker Screening Check** — in jurisdictions where this is accepted for aged care, an NDIS Worker Screening Check may satisfy the aged care screening requirement. This is a more comprehensive check that includes an assessment of whether the person poses an unacceptable risk to people with disability or older people.\n\n**Ongoing monitoring** — screening is not a one-off obligation. Providers must have processes to monitor whether a worker's circumstances have changed (for example, new criminal charges) between screening renewals. Many providers require workers to self-declare any changes and conduct periodic re-screening.\n\n**Record-keeping** — providers must maintain records of all screening checks, including the date of the check, the outcome, the expiry date, and any risk assessments conducted. These records must be available for inspection during [ACQSC assessment contacts](/blog/acqsc-assessment-contact-preparation).\n\nFor a detailed guide to screening requirements and timelines, see our dedicated [worker screening guide](/blog/aged-care-worker-screening-requirements).",
    },
    {
      heading: "Mandatory training obligations",
      content:
        "Aged care workers must complete mandatory training to ensure they have the knowledge and skills to deliver safe, quality care. While the Aged Care Act 2024 does not prescribe a specific training curriculum, the ACQSC expects providers to ensure their workforce is competent in key areas:\n\n**Dementia care** — all workers who deliver direct care must have training in understanding and responding to dementia, including communication strategies, behavioural support, and person-centred approaches.\n\n**Infection prevention and control** — particularly important since the COVID-19 pandemic, all workers must understand standard precautions, hand hygiene, personal protective equipment (PPE), and outbreak management.\n\n**Manual handling** — workers involved in personal care and mobility support must be trained in safe manual handling techniques to prevent injury to themselves and consumers.\n\n**Medication awareness** — workers who assist with medications must understand medication safety, the difference between assisting and administering, and when to escalate concerns.\n\n**Abuse recognition and reporting** — all workers must be trained to recognise signs of abuse, neglect, and exploitation, and understand their obligation to report through [SIRS](/blog/sirs-reporting-obligations-aged-care-act-2024) and internal reporting channels.\n\n**First aid and CPR** — clinical and personal care staff typically require current first aid and CPR certification.\n\nProviders must track training completion and expiry for all workers and ensure refresher training is completed on schedule. Training records are a key evidence source for **Standard 2 (The Organisation)** during assessment contacts.",
    },
    {
      heading: "Care minutes targets",
      content:
        "Residential aged care providers must meet the **215 care minutes per resident per day** target, which includes a **44-minute registered nurse (RN) component**. This target has applied since 1 October 2024 (the previous 200/40 target applied from October 2023 to September 2024). It is mandated under the Aged Care Act 2024 and monitored by the Department of Health and Aged Care.\n\n**What counts as care minutes:** direct care delivered by registered nurses, enrolled nurses, personal care workers, and allied health professionals. Care minutes include clinical care, personal care, medication administration, wound care, allied health interventions, and direct supervision of care activities.\n\n**What does not count:** administrative time, travel time, training time, meal breaks, and care management activities. The care minutes target measures only the time spent in direct care delivery.\n\n**How it is calculated:** total direct care hours delivered across all qualifying staff, divided by the number of occupied resident places, multiplied by 60 to convert to minutes. The target must be met on a quarterly average basis — individual days may vary, but the quarterly average must meet or exceed 215 minutes (including 44 RN minutes).\n\n**Reporting requirements:** providers must report care minutes data to the Department through the quarterly reporting process. The Department publishes care minutes data publicly, creating transparency about staffing levels across the sector.\n\nProviders who consistently fail to meet care minutes targets may face regulatory consequences including funding adjustments and, in serious cases, sanctions. For detailed guidance, see our [care minutes compliance guide](/blog/care-minutes-target-200-minutes-compliance).",
    },
    {
      heading: "24/7 registered nurse coverage",
      content:
        "Residential aged care providers must have at least one **registered nurse on duty and on site at all times** — 24 hours a day, 7 days a week, 365 days a year. This requirement is mandated under section 95 of the Aged Care Act 2024.\n\n**What this means in practice:** at no point should a residential aged care facility be without a registered nurse physically present and available to respond to clinical needs. This applies overnight, on weekends, on public holidays, and during periods of leave or absence.\n\n**Demonstrating compliance:** providers must be able to show through rosters and time-and-attendance records that an RN was on site for every hour of every day. Gaps in coverage — even short ones — constitute non-compliance.\n\n**Common compliance challenges:** small or regional facilities with limited RN availability; managing planned and unplanned RN absences; overnight shifts where agency RNs may be used; and ensuring that the RN on duty is genuinely available (not assigned to administrative tasks that prevent them from responding to clinical needs).\n\n**Contingency planning:** providers should have documented contingency plans for RN absences, including on-call arrangements, agreements with agency providers, and escalation procedures. The ACQSC does not accept that RN unavailability in rural or regional areas is a valid reason for non-compliance — providers must plan for this.",
    },
    {
      heading: "Code of Conduct obligations",
      content:
        "The **Code of Conduct for Aged Care** applies to all aged care workers (sections 100–105 of the Aged Care Act 2024). The Code sets out the standards of behaviour expected of anyone working in aged care, including employees, contractors, volunteers, and governing body members.\n\nThe Code requires workers to: act with respect for consumers' rights, dignity, and autonomy; provide care and services safely and competently; act with integrity and honesty; promptly report concerns about the safety or wellbeing of consumers; comply with the provider's policies and procedures; and not engage in conduct that could bring the aged care sector into disrepute.\n\n**Provider obligations around the Code of Conduct:**\n\n**Worker acknowledgement** — providers must ensure all workers acknowledge the Code of Conduct and understand their obligations under it. This should be documented and refreshed annually.\n\n**Breach investigation** — when a potential Code of Conduct breach is identified, the provider must investigate promptly and fairly. The investigation should be proportionate to the seriousness of the alleged breach and should protect the rights of both the consumer and the worker.\n\n**ACQSC reporting** — serious Code of Conduct breaches must be reported to the ACQSC, particularly where the breach involves harm or risk of harm to a consumer. This intersects with [SIRS reporting obligations](/blog/sirs-reporting-obligations-aged-care-act-2024) — a Code of Conduct breach that involves abuse, neglect, or use of restrictive practices is likely also a reportable incident.\n\n**Consequences** — providers must have a clear disciplinary framework for Code of Conduct breaches, ranging from counselling and retraining for minor breaches to termination and reporting for serious breaches. The framework should be documented in the provider's HR policies and communicated to all workers.",
    },
    {
      heading: "SCHADS Award basics",
      content:
        "Home care workers and many community-based aged care workers are employed under the **Social, Community, Home Care and Disability Services (SCHADS) Industry Award**. While the SCHADS Award is a Fair Work instrument rather than an aged care-specific regulation, non-compliance creates both industrial and aged care regulatory risk.\n\nKey aspects of the SCHADS Award that aged care providers must understand:\n\n**Pay levels** — the SCHADS Award has 8 pay levels (Level 1 through Level 8), each with multiple pay points. Workers must be classified at the correct level based on their qualifications, responsibilities, and experience. Incorrect classification is a common source of underpayment claims.\n\n**Penalty rates** — the SCHADS Award includes penalty rates for evening work (after 8pm), night work (after midnight), Saturday work, Sunday work, and public holiday work. Penalty rates are calculated on the worker's base hourly rate and can significantly increase labour costs for services delivered outside standard business hours.\n\n**Overtime** — workers who exceed their ordinary hours in a day or week are entitled to overtime rates. For full-time workers, this is generally 38 hours per week. Overtime must be authorised and recorded.\n\n**Travel time and allowances** — home care workers who travel between clients during a shift are entitled to payment for travel time and reimbursement of travel costs. This is a frequently audited area and a common source of non-compliance.\n\n**Minimum engagement** — part-time and casual workers have minimum engagement periods under the SCHADS Award. Providers cannot roster a worker for less than the minimum engagement period without incurring additional obligations.\n\nStatura Care's [Workforce module](/workforce-software) includes SCHADS Award pay calculation, penalty rate automation, and roster compliance checking to help providers meet their industrial obligations alongside their aged care regulatory requirements.",
    },
  ],
};
