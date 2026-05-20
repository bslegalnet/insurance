import type { Question } from './types';

type SampleQuestion = Omit<Question, 'chapterId'>;

export type SampleChapter = {
  name: string;
  questions: SampleQuestion[];
  source?: string;
};

const CHAPTER_1: SampleQuestion[] = [
  {
    id: 'q-newborn-coverage',
    text: 'Florida requires that coverage for newborns begins "from the moment of birth" and continues for',
    choices: {
      A: '12 months',
      B: '6 months',
      C: '31 days',
      D: '18 months',
    },
    correct: 'D',
    explanation:
      'Florida requires that newborn coverage begins "from the moment of birth" and continues for eighteen (18) months.',
  },
  {
    id: 'q-quarterly-grace-period',
    text: 'In Florida, a health policy that is paid on a quarterly basis requires a grace period of',
    choices: {
      A: '31 days',
      B: '10 days',
      C: '7 days',
      D: '45 days',
    },
    correct: 'A',
    explanation:
      'Florida law requires that the minimum grace period on a health insurance policy paid on a quarterly basis is 31 days.',
  },
  {
    id: 'q-group-life-conversion',
    text: "T is an employee covered under a Group Life policy. If T's employment is terminated, the conversion privilege gives T the right to convert",
    choices: {
      A: 'to an individual policy upon employment termination',
      B: 'to an individual policy, only if the employer pays the premiums',
      C: 'to an individual policy with a higher amount of coverage',
      D: 'to an individual policy, only by providing evidence of insurability',
    },
    correct: 'A',
    explanation:
      'When an employee covered on a Group Life policy leaves the group, the conversion privilege gives the employee the right to convert to an individual policy upon termination of employment.',
  },
  {
    id: 'q-min-age-life-app',
    text: 'The minimum age at which a person can sign a life insurance application is',
    choices: {
      A: '17 years',
      B: '16 years',
      C: '18 years',
      D: '15 years',
    },
    correct: 'D',
    explanation:
      'A person 15 years or older may contract for life insurance on his/her own life.',
  },
  {
    id: 'q-misstatement-of-age',
    text:
      "W gave W's age as 50 when W purchased a Life policy. At the time of W's death seven years later, the company discovered W's true age at issue had been 59. What would the normal procedure be under the misstatement of age provision in regard to the payment of the death claim?",
    choices: {
      A: "The policy's full death benefit would be paid, due to the expiration of the incontestable period",
      B: 'The insurer is only obligated to refund all premiums paid',
      C: 'The proceeds would be reduced based on whatever the premium would have been if purchased at age 59',
      D: 'There would be no death proceeds paid out by the insurer',
    },
    correct: 'C',
    explanation:
      'In this situation, the proceeds will be reduced based on whatever the premium would have been if purchased at age 59.',
  },
  {
    id: 'q-fl-practitioners-not-covered',
    text:
      'In Florida, which of the following practitioners normally do NOT receive payment from health insurance policies?',
    choices: {
      A: 'Pediatricians',
      B: 'Naturopaths',
      C: 'Dentists',
      D: 'Optometrists',
    },
    correct: 'B',
    explanation:
      'Health insurance policies in Florida must cover payment to all of these practitioners EXCEPT naturopaths.',
  },
  {
    id: 'q-fl-policy-loan-rate',
    text: 'What are adjustable rates for life policy loans in Florida based on?',
    choices: {
      A: "Moody's corporate bond index",
      B: '90-day treasury bill rate',
      C: "National average of other states' variable rate",
      D: 'Prime lending rate',
    },
    correct: 'A',
    explanation:
      "Adjustable rates for life insurance policy loans in Florida are based on Moody's corporate bond index.",
  },
  {
    id: 'q-erisa-savings-clause',
    text:
      'Which of the following areas of state regulation is NOT protected by the savings clause in ERISA?',
    choices: {
      A: 'Insurance',
      B: 'Commerce',
      C: 'Banking',
      D: 'Securities',
    },
    correct: 'B',
    explanation:
      'All of these areas of state regulation are protected by the savings clause in ERISA EXCEPT for commerce.',
  },
  {
    id: 'q-peo-tasks',
    text:
      'Which of the following employer tasks does a Professional Employer Organization normally handle?',
    choices: {
      A: 'Hiring staff',
      B: 'Marketing strategies',
      C: 'Setting sales quotas',
      D: 'Administration tasks',
    },
    correct: 'D',
    explanation:
      'A Professional Employer Organization typically handles administration functions.',
  },
  {
    id: 'q-group-life-not-excluded',
    text:
      'Which of the following employees may NOT be excluded from a group life plan?',
    choices: {
      A: 'Part-time employees',
      B: 'Full-time employees before the probationary period',
      C: 'Full-time employees after the probationary period',
      D: 'Seasonal workers',
    },
    correct: 'C',
    explanation:
      'All of these employees may be excluded from a group life plan except for "Full-time employees after the probationary period".',
  },
  {
    id: 'q-ltc-free-look',
    text:
      'The free-look period for all qualified Long-term care policies sold in Florida is __ days.',
    choices: {
      A: '40',
      B: '10',
      C: '20',
      D: '30',
    },
    correct: 'D',
    explanation:
      'The free-look period for all qualified Long-term care policies sold in Florida is 30 days.',
  },
  {
    id: 'q-agent-home-agency',
    text:
      "Which of the following factors is NOT considered when the Department of Financial Services determines if an agent's home is an insurance agency?",
    choices: {
      A: 'Clients are met at this location',
      B: 'The amount of premium collected at this location',
      C: 'Business solicitation is done at this location',
      D: "Listing the address on the agent's business cards",
    },
    correct: 'B',
    explanation:
      "The Department of Financial Services does not take into consideration the amount of premium collected at an agent's home when determining whether or not the home is an insurance agency.",
  },
  {
    id: 'q-medsupp-preex-wait',
    text:
      'The waiting period for a pre-existing condition under a Medicare Supplement policy may NOT go beyond',
    choices: {
      A: '12 months',
      B: '1 month',
      C: '6 months',
      D: '3 months',
    },
    correct: 'C',
    explanation:
      'Under a Medicare Supplement policy, the waiting period for pre-existing conditions may not exceed 6 months.',
  },
  {
    id: 'q-unfair-trade-practice',
    text: 'Which of the following is an example of an Unfair Trade Practice?',
    choices: {
      A: 'Fiduciary',
      B: 'Coercion',
      C: 'Shared commissions',
      D: 'Replacement',
    },
    correct: 'B',
    explanation: 'Coercion is considered an unfair trade practice in this state.',
  },
  {
    id: 'q-fl-life-laws-scope',
    text:
      'Which of the following situations are NOT subject to Florida life insurance laws?',
    choices: {
      A: "Insurance companies' life policy replacement requirements",
      B: "Insurance companies' setting of life insurance policy rates",
      C: "Insurance companies' day-to-day operations",
      D: "Insurance companies' guidelines for paying a life insurance claim",
    },
    correct: 'C',
    explanation:
      'Florida life insurance laws apply to all of these situations EXCEPT "Insurance companies\' day-to-day operations".',
  },
  {
    id: 'q-disabled-dependent-extension',
    text:
      'Upon reaching the limiting age, a disabled child may extend their health insurance coverage as a dependent',
    choices: {
      A: 'only if physically disabled',
      B: 'for up to an additional 10 years only',
      C: 'only if mentally disabled',
      D: 'only if the child is incapable of employment and chiefly dependent on the policyowner',
    },
    correct: 'D',
    explanation:
      'Coverage may be extended if the handicapped child is incapable of employment and chiefly dependent on the policyowner.',
  },
  {
    id: 'q-variable-annuity-regulators',
    text: 'Which two entities regulate variable annuities?',
    choices: {
      A: 'National Association of Insurance Commissioners; and Department of Financial Services',
      B: 'National Association of Insurance and Financial Advisors; and Securities Exchange Commission',
      C: 'Financial Industry Regulatory Authority; and Department of Financial Services',
      D: 'Department of Financial Services; and Securities Exchange Commission',
    },
    correct: 'D',
    explanation:
      'Variable annuities are regulated by both the Department of Financial Services and the Securities Exchange Commission.',
  },
  {
    id: 'q-dread-disease',
    text: 'What do Dread Disease policies cover?',
    choices: {
      A: 'A specific disease or illness',
      B: 'Only terminal illnesses',
      C: 'Only heart-related diseases',
      D: 'All diseases or illnesses',
    },
    correct: 'A',
    explanation: 'Dread Disease policies cover only a single disease or illness.',
  },
  {
    id: 'q-agent-primary-responsibility',
    text: "During the application process, the agent's primary responsibility is to",
    choices: {
      A: 'the State of Florida',
      B: 'the insurance company',
      C: 'the Department of Financial Services',
      D: 'the applicant',
    },
    correct: 'B',
    explanation:
      "The agent's primary responsibility in the application process is to the insurer.",
  },
  {
    id: 'q-fl-healthy-kids-payment',
    text: 'What do families pay that are covered by the Florida Healthy Kids Corporation?',
    choices: {
      A: 'Full premium',
      B: 'A portion of the premium',
      C: 'Nothing',
      D: 'The first initial premium',
    },
    correct: 'B',
    explanation:
      'Families with children covered by the Florida Healthy Kids Corporation program pay only a portion of the premium.',
  },
  {
    id: 'q-outline-of-coverage-not-required',
    text:
      'Which of the following is NOT required in the Outline of Coverage for a health insurance policy?',
    choices: {
      A: "Explanation of the policy's benefits",
      B: "Explanation of the policy's renewal and cancellation provisions",
      C: "Projection of the policy's future costs",
      D: "Listing of the policy's exclusions and limitations",
    },
    correct: 'C',
    explanation:
      "A table indicating the policy's projected future costs is not required in an Outline of Coverage.",
  },
  {
    id: 'q-agent-in-charge-locations',
    text: 'How can an agent-in-charge have more than one location?',
    choices: {
      A: 'Only if the agent-in-charge is present when insurance activity occurs',
      B: 'An agent-in-charge can only have one location',
      C: 'By keeping all locations within a close proximity',
      D: 'Only if the locations are in Florida',
    },
    correct: 'A',
    explanation:
      'Multiple locations are allowed as long as the agent-in-charge is present when insurance activity occurs.',
  },
  {
    id: 'q-medsupp-outline-required',
    text:
      "Which of the following MUST be included in a Medicare Supplement policy's Outline of Coverage?",
    choices: {
      A: "The agent's contact information",
      B: 'A copy of the MIB report',
      C: "The policy's limitations and exceptions",
      D: "The policy's projection of future costs",
    },
    correct: 'C',
    explanation:
      "A Medicare Supplement's Outline of Coverage MUST include the policy's exceptions and limitations.",
  },
  {
    id: 'q-concealment-def',
    text:
      'Omitting information that affects the issuance or the rate of an insurance contract is called:',
    choices: {
      A: 'sliding',
      B: 'concealment',
      C: 'twisting',
      D: 'coercion',
    },
    correct: 'B',
    explanation:
      'Concealment is the omission of information which would affect the issuance or the rate of an insurance contract.',
  },
  {
    id: 'q-medsupp-free-look',
    text:
      'Within how many days after policy delivery can a Medicare Supplement policy be returned for a 100% premium refund?',
    choices: {
      A: '20',
      B: '15',
      C: '25',
      D: '30',
    },
    correct: 'D',
    explanation:
      'Medicare Supplement policies may be returned for a premium refund within a MAXIMUM of 30 days.',
  },
  {
    id: 'q-life-rate-discrimination',
    text:
      'Which of the following types of insureds are life insurance companies allowed to make policy rate discriminations against?',
    choices: {
      A: 'People that are married',
      B: 'People of different races',
      C: 'People that smoke',
      D: 'People of different religions',
    },
    correct: 'C',
    explanation:
      'A life insurance company may make policy rate discriminations against people that smoke.',
  },
  {
    id: 'q-element-of-insurance-transaction',
    text: 'In Florida, an element of an insurance transaction would be',
    choices: {
      A: 'ordering an MIB report',
      B: 'issuing an insurance contract',
      C: 'determining how much coverage is needed',
      D: 'setting up the sales appointment',
    },
    correct: 'B',
    explanation:
      'The issuance of an insurance contract is considered to be an element of an insurance transaction.',
  },
  {
    id: 'q-not-legal-entity-life',
    text: 'Which of these is NOT a legal entity for selling life insurance in Florida?',
    choices: {
      A: 'Risk management advisers',
      B: 'Career agency system',
      C: 'Personal producing general agency',
      D: 'Independent agency system',
    },
    correct: 'A',
    explanation:
      'Risk management advisers do not qualify as a legal entity for selling life insurance.',
  },
  {
    id: 'q-churning-def',
    text:
      '__________ can be defined as "using the contract values of an existing policy to purchase a new policy with an existing insurer".',
    choices: {
      A: 'Defamation',
      B: 'Churning',
      C: 'Misrepresentation',
      D: 'Twisting',
    },
    correct: 'B',
    explanation:
      'Churning can be defined as "using the contract values of an existing policy to purchase a new policy with an existing insurer".',
  },
  {
    id: 'q-insurer-def',
    text: "Which of the following is the best description of 'insurer'?",
    choices: {
      A: 'A professional organization that typically handles only administration functions',
      B: 'Any business location where insurance discussions take place',
      C: 'Any person, corporation, association, or society that only manages insurance claims',
      D: 'Any person, corporation, association, or society that writes insurance contracts',
    },
    correct: 'D',
    explanation:
      'An insurer is any person, corporation, association, or society that writes insurance contracts.',
  },
  {
    id: 'q-small-employer-guaranteed-issue',
    text:
      'Insurers/agents must, in Florida, offer and issue all small employer health plans on a __________ basis:',
    choices: {
      A: 'guaranteed-issue',
      B: 'discounted',
      C: 'fair',
      D: 'nonrenewal',
    },
    correct: 'A',
    explanation:
      'Insurers/agents must, in Florida, offer and issue all small employer health plans on a guaranteed-issue basis.',
  },
  {
    id: 'q-deceptive-advertising',
    text: 'In Florida, deceptive advertising is considered to be',
    choices: {
      A: 'a form of rebating',
      B: 'a form of coercion',
      C: 'a form of misrepresentation',
      D: 'a form of sliding',
    },
    correct: 'C',
    explanation:
      'According to Florida law, deceptive advertising is considered a form of misrepresentation.',
  },
  {
    id: 'q-mutual-vs-stock',
    text:
      'A mutual insurance company and a stock insurance company have one main difference between them. What is this major contrast?',
    choices: {
      A: 'Stock company is owned by its policyholders. Mutual company is owned by its shareholders.',
      B: 'Stock company is owned by its shareholders. Mutual company is owned by its policyholders.',
      C: 'Stock company is considered an authorized insurer. Mutual company is considered an unauthorized insurer.',
      D: "Stock company is regulated by the state where it's incorporated. Mutual company is regulated by its policyholders.",
    },
    correct: 'B',
    explanation:
      'A stock company is owned by its shareholders and a mutual company is owned by its policyholders.',
  },
  {
    id: 'q-group-life-min-insureds',
    text:
      'According to Florida law, a Group Life insurance policy requires a minimum of how many insureds?',
    choices: {
      A: 'No minimum',
      B: '2',
      C: '100',
      D: '25',
    },
    correct: 'A',
    explanation:
      'In Florida, there is no minimum number of insureds required for a group life insurance policy.',
  },
  {
    id: 'q-buyers-guide',
    text:
      'Which required disclosure helps a buyer choose the amount and type of insurance to buy, and how to save money by comparing the cost of similar policies?',
    choices: {
      A: "Buyer's Guide",
      B: 'Certificate of Coverage',
      C: 'Policy Summary',
      D: 'Outline of Coverage',
    },
    correct: 'A',
    explanation:
      "Buyer's Guide provides basic information about an insurance policy. It helps a buyer choose the amount and type of insurance to buy, and how to save money by comparing the cost of similar policies. It is required.",
  },
  {
    id: 'q-stock-insurer-def',
    text: 'A stock insurance company',
    choices: {
      A: 'elects a governing body by its policyowners',
      B: 'guarantees dividends to its shareholders',
      C: 'is owned exclusively by its shareholders',
      D: 'is owned exclusively by its policyowners',
    },
    correct: 'C',
    explanation:
      'A stock insurance company is best defined as an incorporated company that has its capital divided into shares and is owned exclusively by its shareholders.',
  },
  {
    id: 'q-annuity-info-not-required',
    text:
      'According to Florida law, which of the following information does NOT need to be obtained by an agent recommending an annuity purchase?',
    choices: {
      A: 'Annual income',
      B: 'Age',
      C: 'Marital status',
      D: 'Financial objectives',
    },
    correct: 'C',
    explanation:
      "Florida law requires an agent who is recommending the purchase of an annuity to a person to obtain information regarding all of these EXCEPT the person's marital status.",
  },
  {
    id: 'q-agent-represents',
    text: 'Who does an agent represent during the solicitation of insurance?',
    choices: {
      A: 'The Department of Financial Services',
      B: 'The State of Florida',
      C: 'The client',
      D: 'The insurance company',
    },
    correct: 'D',
    explanation:
      'When soliciting insurance to a client, an agent represents their insurance company.',
  },
  {
    id: 'q-fl-lapse-notice-age',
    text:
      'According to Florida law, an additional lapse notice must be issued after the standard grace period has expired for policyowners age',
    choices: {
      A: '64 years or older',
      B: '59 1/2 or older',
      C: '21 and under',
      D: '69 or older',
    },
    correct: 'A',
    explanation:
      'In Florida, insurers are required to issue an additional lapse notice after the applicable statutory grace period has expired for policyholders 64 years of age or older.',
  },
  {
    id: 'q-mutual-insurer-owner',
    text: 'Who is a mutual insurance company owned by?',
    choices: {
      A: 'Its employees',
      B: 'Its board of directors',
      C: 'Its policyholders',
      D: 'The State of Florida',
    },
    correct: 'C',
    explanation: 'A mutual insurance company is owned by its policyholders.',
  },
];

const CHAPTER_2: SampleQuestion[] = [
  {
    id: 'q2-fl-disclosure-buyers-policy',
    text:
      "According to Florida's rules on disclosure, a life insurance applicant is expected to be provided with",
    choices: {
      A: "a Buyer's Guide and Policy Summary",
      B: "a Certificate of Coverage and Buyer's Guide",
      C: "a Summary Statement and Buyer's Guide",
      D: 'a Written Comparison and Policy Summary',
    },
    correct: 'A',
    explanation:
      "Florida's rules on disclosure require an insurance company to provide a purchaser of life insurance with a Buyer's Guide and a Policy Summary.",
  },
  {
    id: 'q2-nonforfeiture-except',
    text: 'All of the following are Nonforfeiture Options EXCEPT',
    choices: {
      A: 'Reduced Paid-Up Option',
      B: 'Cash Surrender Option',
      C: 'Automatic Premium Loan Option',
      D: 'Extended Term Option',
    },
    correct: 'C',
    explanation:
      'An automatic premium loan is not considered a Nonforfeiture Option.',
  },
  {
    id: 'q2-association-group-eligibility',
    text:
      'All of the following are eligibility requirements for an association group EXCEPT',
    choices: {
      A: 'Contributory plans require a minimum of 25 participants',
      B: 'Group must hold regular meetings at least on an annual basis',
      C: 'Must have been organized for some reason other than to obtain group insurance',
      D: 'Group must have been in existence for two years',
    },
    correct: 'A',
    explanation:
      'A minimum of 100 participants is required for a contributory plan.',
  },
  {
    id: 'q2-mewa-benefits',
    text: 'A Multiple Employer Welfare Arrangement (MEWA) provides what type of benefits?',
    choices: {
      A: 'Retirement',
      B: 'Insurance',
      C: 'Unemployment',
      D: 'Banking',
    },
    correct: 'B',
    explanation:
      'A Multiple Employer Welfare Arrangement (MEWA) provides insurance benefits.',
  },
  {
    id: 'q2-contestability-fraud',
    text:
      'An insurance company can contest a life insurance contract due to application fraud within',
    choices: {
      A: '1 year',
      B: '2 years',
      C: '3 years',
      D: '60 days',
    },
    correct: 'B',
    explanation:
      'There is a 2 year time limit for an insurer to contest a life insurance contract due to application fraud.',
  },
  {
    id: 'q2-notice-of-claim',
    text:
      'A person insured under a health policy is required to give the insurance company a Notice of Claim within how many days after a covered loss?',
    choices: {
      A: 'Twenty',
      B: 'Thirty',
      C: 'Ten',
      D: 'Five',
    },
    correct: 'A',
    explanation: 'Written notice of a claim must be given to the insurer within 20 days.',
  },
  {
    id: 'q2-fl-14-day-free-look',
    text: "Florida's 14-day free-look period for life insurance policies begins at the",
    choices: {
      A: 'date of approval',
      B: 'date of physical examination',
      C: 'date of application',
      D: 'date of delivery',
    },
    correct: 'D',
    explanation:
      'In Florida, the free-look period for life insurance contracts is 14 days from policy delivery.',
  },
  {
    id: 'q2-fl-contestability-period',
    text: 'In Florida, most life insurance policies have a contestability period of',
    choices: {
      A: '2 years',
      B: '4 years',
      C: '3 years',
      D: '1 year',
    },
    correct: 'A',
    explanation:
      'The maximum contestability period for most life insurance policies is 2 years.',
  },
  {
    id: 'q2-group-term-life-eligible',
    text: "In Florida, which employee is eligible for an employer's group term life plan?",
    choices: {
      A: 'Employee who works more than 40 hours per week',
      B: 'Employee who works seasonally during the summer',
      C: 'Full time employee not actively at work',
      D: 'Employee who works part-time',
    },
    correct: 'A',
    explanation:
      'All of these employees may be EXCLUDED for group term life coverage EXCEPT "Employee who works more than 40 hours per week".',
  },
  {
    id: 'q2-twisting',
    text:
      'J is an agent who has induced an insured through misrepresentation to surrender an existing insurance policy. What is J guilty of?',
    choices: {
      A: 'Rebating',
      B: 'Twisting',
      C: 'Coercion',
      D: 'Sliding',
    },
    correct: 'B',
    explanation:
      'Twisting is the unfair trade practice of replacing an insurance policy from one insurer to another based on misrepresentation.',
  },
  {
    id: 'q2-annuity-corrective-action',
    text:
      'K is an agent who made an improper sale of an annuity to a client. Which of the following corrective actions would the Department of Financial Services likely order K to take?',
    choices: {
      A: 'Sell the client a more appropriate annuity',
      B: 'Provide a written apology letter',
      C: 'Pay monetary restitution to the client',
      D: "Pay a penalty of three times the client's loss",
    },
    correct: 'C',
    explanation:
      'The Department of Financial Services may order the agent to pay monetary restitution to the client.',
  },
  {
    id: 'q2-ltc-partnership-asset-protection',
    text:
      'Asset protection can be provided by a long-term care partnership policy if the policyholder qualifies for',
    choices: {
      A: 'Medicaid',
      B: 'Medicare Part C',
      C: 'Disability',
      D: 'Social Security',
    },
    correct: 'A',
    explanation:
      'Asset protection can be provided by a long-term care partnership policy if the policyholder qualifies for Medicaid.',
  },
  {
    id: 'q2-fl-healthy-kids-eligibility',
    text:
      'Eligibility for coverage under the Florida Healthy Kids Corporation requires a family to be within ____ of the federal poverty level.',
    choices: {
      A: '400%',
      B: '300%',
      C: '200%',
      D: '500%',
    },
    correct: 'C',
    explanation:
      'The primary recipients of coverage provided by the Florida Healthy Kids Corporation are school-age children in families with incomes within 200% of the federal poverty level.',
  },
  {
    id: 'q2-unclaimed-property-bureau',
    text: 'The Bureau of Unclaimed Property is overseen by the',
    choices: {
      A: 'Insurance Department',
      B: 'Governor',
      C: 'Chief Financial Officer',
      D: 'Unclaimed Property Commissioner',
    },
    correct: 'C',
    explanation: 'The Chief Financial Officer oversees the Bureau of Unclaimed Property.',
  },
  {
    id: 'q2-licensing-not-requested',
    text: 'The Department may request all of these during the licensing application process EXCEPT',
    choices: {
      A: 'fees',
      B: 'fingerprints',
      C: 'drug test',
      D: 'proof of citizenship',
    },
    correct: 'C',
    explanation:
      'The Department will not request a drug test during the licensing application process.',
  },
  {
    id: 'q2-key-employee-death-proceeds',
    text:
      'A Key Employee policy is taken out by Company X on its vice president. Ten years later, this employee leaves Company X and begins working for Company Y. If this individual were to die and the policy is still in force and unchanged, where would the death proceeds be directed?',
    choices: {
      A: 'Company X',
      B: 'Company Y',
      C: "The employee's estate",
      D: "The employee's family",
    },
    correct: 'A',
    explanation:
      'With Key Person Insurance, the company purchases, owns, pays the premiums and is the beneficiary of the life insurance policy on the key person.',
  },
  {
    id: 'q2-key-employee-not-true',
    text: 'Which statement regarding a Key Employee Life policy is NOT true?',
    choices: {
      A: 'The application must be signed by the key employee',
      B: 'The beneficiary is named by the key employee',
      C: 'The company purchases, owns, pays the premiums and is the beneficiary',
      D: 'Its purpose is to prevent the financial loss that may ensue if a key employee dies',
    },
    correct: 'B',
    explanation: 'The company names the beneficiary, not the employee.',
  },
];

const CHAPTER_3: SampleQuestion[] = [
  {
    id: 'q3-buy-sell-agreement',
    text:
      'What is considered a valid reason for small businesses to insure the lives of its major shareholders?',
    choices: {
      A: "Reduce the company's tax liability",
      B: 'To pay for final expenses',
      C: 'Fund a buy-sell agreement',
      D: 'To provide an income for the surviving dependents',
    },
    correct: 'C',
    explanation:
      'Life insurance is purchased to fund a buy-sell agreement in the event of the death of a major shareholder in a business.',
  },
  {
    id: 'q3-key-person-not-reason',
    text: 'Which of these is NOT a reason for a business to buy key person life insurance?',
    choices: {
      A: 'The loss of company revenues while a replacement is being sought',
      B: 'A void in leadership if the key person were to die',
      C: 'The reduction in sales as a direct result from death of the key employee',
      D: 'A pension deficiency if the key employee dies',
    },
    correct: 'D',
    explanation:
      'All of these are reasons for a business organization to purchase key person life insurance EXCEPT "A pension deficiency if the key employee dies".',
  },
  {
    id: 'q3-third-party-ownership',
    text: 'Which statement regarding third-party ownership of a life insurance policy is true?',
    choices: {
      A: 'Beneficiary is required to be irrevocable',
      B: 'Policy cannot be assigned once issued',
      C: 'It is illegal in most states',
      D: 'It is used extensively in estate-planning as well as business circumstances',
    },
    correct: 'D',
    explanation:
      'Third-party ownership of a life insurance policy is widely used in business settings and estate-planning situations.',
  },
  {
    id: 'q3-medsupp-buyer',
    text: 'The individual most likely to buy a Medicare Supplement policy would be a(n):',
    choices: {
      A: '62-year old male covered by Medicaid',
      B: 'uninsured 60-year old male',
      C: '68-year old male covered by Medicare',
      D: 'unemployed 64-year old female',
    },
    correct: 'C',
    explanation: 'Medicare Supplements are available to those covered by Medicare.',
  },
  {
    id: 'q3-ltc-home-health-care',
    text: 'Which of the following will a Long Term Care plan typically provide benefits for?',
    choices: {
      A: 'unemployment',
      B: 'disability income',
      C: 'death',
      D: 'home health care',
    },
    correct: 'D',
    explanation: 'A Long Term Care policy will typically pay for home health care.',
  },
  {
    id: 'q3-family-max-deductible',
    text:
      'This type of deductible provision waives the deductible for all family members after some of them have satisfied individual deductibles within the same year:',
    choices: {
      A: 'Family maximum deductible',
      B: 'Common accident deductible',
      C: 'Individual deductible',
      D: 'Corridor deductible',
    },
    correct: 'A',
    explanation:
      'A family maximum deductible provision waives the deductible for all family members after some of them have satisfied individual deductibles within the same year.',
  },
  {
    id: 'q3-agent-check-handling',
    text:
      'Agent J takes an application and initial premium from an applicant and sends the application and premium check to the insurance company. The insurance company returns the check back to J because the check is made out to J instead of the insurance company. What action should J take?',
    choices: {
      A: "Deposit the applicant's check into his account and make a personal check out to the insurance company from his personal account",
      B: 'Return to the customer, collect a new check made out to the insurance company, and send the new check out to the insurance company',
      C: 'Deposit the check in to his personal account, use the funds to purchase a cashiers check, and send the new cashiers check back to the insurance company',
      D: 'Cross off his name on the "pay to" portion of the check, write the name of the insurance company, and send the check back to the insurance company',
    },
    correct: 'B',
    explanation:
      'If an agent receives a check made out to them instead of the insurance company, they should return the check to the customer and collect a new check properly made out to the insurance company.',
  },
  {
    id: 'q3-coinsurance',
    text:
      'A Major Medical policy typically contains a provision that requires the insurer to pay only part of a loss, while the balance is paid by the insured. This provision is called',
    choices: {
      A: 'Co-deductible',
      B: 'Assignment of Benefits',
      C: 'Coinsurance',
      D: 'Indemnity',
    },
    correct: 'C',
    explanation:
      'The provision in a Major Medical policy that requires the insurance company pay only part of a loss and the insured to pay the balance is known as coinsurance.',
  },
  {
    id: 'q3-whole-life-rate-factor',
    text:
      'Which factors are taken into consideration when an insurance company determines the premium rate for a Whole Life policy on an applicant?',
    choices: {
      A: 'Geographical location',
      B: 'Marital status',
      C: 'Risk classification',
      D: 'Source of income',
    },
    correct: 'C',
    explanation:
      'To determine the premium rate on a Whole Life policy, an insurance company will consider the risk classification of the applicant.',
  },
  {
    id: 'q3-social-security-benefit-except',
    text: 'All of these are considered to be a benefit under Social Security, EXCEPT for:',
    choices: {
      A: 'survivorship',
      B: 'unemployment',
      C: 'disability',
      D: 'retirement',
    },
    correct: 'B',
    explanation:
      'All of these are considered benefits of Social Security EXCEPT for unemployment.',
  },
  {
    id: 'q3-basic-hospital',
    text:
      "B's policy provides coverage on an in-hospital basis only and contains a limited daily room and board benefit. Which of these policies does B have?",
    choices: {
      A: 'Comprehensive Major Medical',
      B: 'Basic Surgical',
      C: 'Critical illness',
      D: 'Basic Hospital',
    },
    correct: 'D',
    explanation:
      'A Basic Hospital policy typically contains a limited daily room and board benefit and provides coverage on an in-hospital basis only.',
  },
  {
    id: 'q3-comprehensive-major-medical',
    text: 'Comprehensive Major Medical policies usually combine:',
    choices: {
      A: 'Major Medical with Basic Hospital/Surgical coverage',
      B: 'Basic/Hospital/Surgical with Disability Income coverage',
      C: 'Basic Hospital/Surgical with Accidental coverage',
      D: 'Major Medical with Disability Income coverage',
    },
    correct: 'A',
    explanation:
      'A Comprehensive Major Medical Policy combines Basic Hospital/Surgical and Major Medical insurance.',
  },
  {
    id: 'q3-qualified-retirement-contributions',
    text:
      "In a qualified retirement plan, the yearly contributions to an employee's account:",
    choices: {
      A: 'are restricted to maximum levels set by the IRS',
      B: 'are not tax-deductible',
      C: 'are restricted to minimum levels set by the IRS',
      D: 'must be matched dollar-for-dollar by the employer',
    },
    correct: 'A',
    explanation:
      "Annual limits to an employee's qualified retirement plan are based on maximum limits set by the IRS.",
  },
  {
    id: 'q3-credit-policy-type',
    text: 'What type of life insurance are credit policies issued as?',
    choices: {
      A: 'Universal',
      B: 'Whole',
      C: 'Term',
      D: 'Variable',
    },
    correct: 'C',
    explanation:
      'The type of insurance used is decreasing term, with the term matched to the length of the loan period (though usually limited to 10 years or less) and the decreasing insurance amount matched to the declining loan balance.',
  },
  {
    id: 'q3-group-term-conversion-privilege',
    text:
      'Which of the following features of a group Term Life policy enables an individual to leave the group and continue his or her insurance without providing evidence of insurability?',
    choices: {
      A: 'Insuring Agreement',
      B: "Owner's Rights clause",
      C: 'Conversion privilege',
      D: 'Incontestable Period',
    },
    correct: 'C',
    explanation:
      'The conversion privilege allows an individual to leave the group term plan and continue his or her insurance without providing evidence of insurability.',
  },
  {
    id: 'q3-basic-medical-expense',
    text: 'Basic Medical Expense insurance:',
    choices: {
      A: 'normally has a deductible and coinsurance',
      B: 'covers an illness but not an accident',
      C: 'has lower benefit limits than Major Medical insurance',
      D: 'pays for lost wages while hospitalized',
    },
    correct: 'C',
    explanation:
      'Basic Medical Expense insurance typically has lower benefit limits than Major Medical insurance.',
  },
  {
    id: 'q3-social-security-funding',
    text: 'Which of these is NOT a source of funding for Social Security benefits?',
    choices: {
      A: 'Federal Government',
      B: 'Self employed individuals',
      C: 'Employers',
      D: 'Employees',
    },
    correct: 'A',
    explanation:
      'All of these are sources of Social Security benefit funding EXCEPT the Federal Government.',
  },
  {
    id: 'q3-finra-registration-except',
    text:
      'All of these insurance products require an agent to have proper FINRA securities registration in order to sell them, EXCEPT for:',
    choices: {
      A: 'Variable Annuity',
      B: 'Variable Life',
      C: 'Universal Variable life',
      D: 'Modified Whole Life',
    },
    correct: 'D',
    explanation:
      'An agent must have proper FINRA securities registration to sell all of these products EXCEPT Modified Whole Life.',
  },
  {
    id: 'q3-mec',
    text:
      'When a life insurance policy exceeds certain IRS table values, the result would create which of the following?',
    choices: {
      A: 'Endowment',
      B: '1035 Exchange',
      C: 'Modified Endowment Contract (MEC)',
      D: 'An investment',
    },
    correct: 'C',
    explanation:
      'When a life insurance policy exceeds certain IRS table values, the result would create a Modified Endowment Contract (MEC).',
  },
  {
    id: 'q3-basic-hospital-surgical-claim',
    text:
      'M is insured under a basic Hospital/Surgical Expense policy. A physician performs surgery on M. What determines the claim M is eligible for?',
    choices: {
      A: 'Determined by the terms of the policy',
      B: "Claim payment is equal to physician's actual charges",
      C: 'Claim payment is negotiated between physician and patient',
      D: 'Determined by the schedule of benefits from the hospital',
    },
    correct: 'A',
    explanation:
      "Under a basic hospital/surgical expense policy, the amount of the patient's claim payment will be based on the terms of the policy.",
  },
  {
    id: 'q3-life-app-signers',
    text: 'A life insurance application must be signed by all of these, EXCEPT:',
    choices: {
      A: 'the policyowner',
      B: 'beneficiary',
      C: 'the insured (if an adult)',
      D: 'the agent',
    },
    correct: 'B',
    explanation: 'Beneficiaries are not required to sign an insurance application.',
  },
  {
    id: 'q3-delivery-health-statement',
    text:
      'On August 6, D submitted an application for a $50,000 Life Insurance policy and did not pay the initial premium. On August 18, D went to his doctor complaining of chest pains and some tests were given by the doctor. The life policy was delivered by the producer on August 20 and D explains what had recently taken place with the doctor. What action should the producer then take?',
    choices: {
      A: 'Collect initial premium and leave a binding receipt',
      B: 'Explain to the applicant the policy is no longer in effect due to change in health condition',
      C: 'Collect initial premium',
      D: 'Collect initial premium along with a signed health statement',
    },
    correct: 'D',
    explanation:
      'In this situation, the producer should deliver the policy and obtain the premium payment along with a signed health statement.',
  },
  {
    id: 'q3-straight-life-meaning',
    text:
      'Whole Life insurance is sometimes referred to as "Straight Life". What does the word "Straight" indicate when using this phrase?',
    choices: {
      A: 'The Grace Period',
      B: 'The duration of premium payments',
      C: 'The incontestable period',
      D: 'The ability to borrow against the cash value',
    },
    correct: 'B',
    explanation:
      "The word “straight” denotes the duration of premium payments, usually for the rest of the owner's life.",
  },
  {
    id: 'q3-third-party-no-rights',
    text: 'K is an insured under a life insurance policy owned by a third party. Which of these statements is true?',
    choices: {
      A: "K may borrow against the policy's cash value",
      B: 'K has no ownership rights',
      C: 'K may change the premium mode',
      D: 'K may change the beneficiary',
    },
    correct: 'B',
    explanation:
      'When a life insurance policy is owned by a third party, the insured has no ownership rights.',
  },
  {
    id: 'q3-conditional-receipt',
    text:
      'T applies for a life insurance policy and is told by the producer that the insurer is bound to the coverage as of the date of the application or medical examination, whichever is later. Assuming that T is an acceptable risk, what item is given to T?',
    choices: {
      A: 'Warranty receipt',
      B: 'Backdated receipt',
      C: 'Conditional receipt',
      D: 'Binding receipt',
    },
    correct: 'C',
    explanation:
      'A conditional receipt binds the insurer to coverage as of the date of the application or medical exam, provided the proposed insured is determined to be an acceptable risk.',
  },
  {
    id: 'q3-universal-life-not-possible',
    text: 'Which of the following actions is NOT possible with a Universal Life policy?',
    choices: {
      A: 'Premium payments may be made at unscheduled times',
      B: "Policy's cash value may be used to pay premiums",
      C: 'Premiums may be applied as a credit against income tax',
      D: 'Face amount may be adjusted',
    },
    correct: 'C',
    explanation:
      'All of these actions are possible with a Universal Life policy EXCEPT "Premiums may be applied as a credit against income tax".',
  },
  {
    id: 'q3-employer-group-premium-tax',
    text:
      "The premiums paid by an employer for his employee's group life insurance are usually considered to be:",
    choices: {
      A: 'tax-deductible to the employer',
      B: 'partially deductible to the employee',
      C: 'taxable income to the employee',
      D: 'tax-deductible to the employee',
    },
    correct: 'A',
    explanation:
      "The amount an employer pays for his employee's life insurance is typically deductible to the business.",
  },
  {
    id: 'q3-whole-life-guaranteed-except',
    text:
      'Whole Life insurance policies are contractually guaranteed to provide each of the following, EXCEPT:',
    choices: {
      A: 'nonforfeiture benefit options',
      B: 'premiums that remain fixed for the life of the policy',
      C: 'partial withdrawal features beyond a surrender charge period',
      D: 'cash value that will ultimately replace the death benefit',
    },
    correct: 'C',
    explanation:
      'All of these are contractually guaranteed to be provided in a whole life insurance policy EXCEPT "partial withdrawal features beyond a surrender charge period".',
  },
  {
    id: 'q3-entire-contract-provision',
    text:
      'Which provision prevents an insurer from changing the terms of the contract with the policyowner by referring to documents not found within the policy itself?',
    choices: {
      A: 'Policy Exclusion',
      B: 'Entire Contract Provision',
      C: 'Incontestable',
      D: 'Assignment',
    },
    correct: 'B',
    explanation:
      'The entire contract provision, found at the beginning of the policy, states that the policy document, the application (which is attached to the policy), and any attached riders constitute the entire contract. Nothing may be "incorporated by reference," meaning that the policy cannot refer to any outside documents as being part of the contract.',
  },
  {
    id: 'q3-equity-index-insurance',
    text:
      'S is close to retiring and would like to purchase a policy that will yield greater gains than bonds, but will still protect the principal with a minimum level or risk. Which product would S be advised to purchase?',
    choices: {
      A: 'Equity index insurance',
      B: 'Graded whole life policy',
      C: 'Return of premium policy',
      D: 'Endowment',
    },
    correct: 'A',
    explanation:
      'Equity index insurance yields greater gains than bonds but will still protect the principal with a minimum of risk.',
  },
  {
    id: 'q3-fcra-disclosure',
    text:
      'P has recently signed an application for insurance. The insurer MUST advise her in writing that an investigative consumer report may be conducted according to the',
    choices: {
      A: "Life Insurance Buyer's Guide",
      B: 'Part lll of the application',
      C: 'Fair Credit Reporting Act',
      D: 'Medical Information Bureau',
    },
    correct: 'C',
    explanation:
      'The Fair Credit Reporting Act requires that an insurance application state that an investigative consumer report may be obtained on an applicant.',
  },
  {
    id: 'q3-grace-period-death',
    text:
      'An insured is past due on his life insurance premium, but is still within the Grace Period. What will the beneficiary receive if the insured dies during this Grace Period?',
    choices: {
      A: 'Refund of all premiums paid',
      B: 'Full face amount minus any past due premiums',
      C: 'Refund of all premiums paid, plus interest',
      D: 'Full face amount',
    },
    correct: 'B',
    explanation:
      'If an insured dies during the Grace Period of a life insurance policy before paying the past due premium, the beneficiary will receive the face amount of the policy less any past due premiums.',
  },
  {
    id: 'q3-child-life-insurance-not-reason',
    text: 'Which of these is NOT a reason for purchasing life insurance on the life of a minor?',
    choices: {
      A: 'Provides funds for final expenses if the child were to die',
      B: 'Provides child with insurance now, in case the child becomes uninsurable later',
      C: "Provides living benefits for the child's college education",
      D: 'If both parents were to die, it would provide death benefits to the child',
    },
    correct: 'D',
    explanation:
      'An insurance policy on a child would not pay any benefits if one or both of the parents died. All of the other answers are valid reasons for buying life insurance on a child.',
  },
  {
    id: 'q3-applicant-signature-purpose',
    text: "Why is an applicant's signature required on a life insurance application?",
    choices: {
      A: 'To give Power of Attorney to the producer if needed',
      B: 'To attest that the statements on the application are warranties',
      C: 'To attest that all statements on the application are guaranteed to be true',
      D: "To attest that the statements on the application are accurate to the best of the applicant's knowledge",
    },
    correct: 'D',
    explanation:
      "An applicant's signature represents that the statements on the application are true to the best of the applicant's knowledge.",
  },
  {
    id: 'q3-variable-universal-life',
    text:
      'Which type of life policy contains a monthly mortality charge as well as self-directed investment choices?',
    choices: {
      A: 'Joint Life',
      B: 'Universal Life',
      C: 'Variable Universal Life',
      D: 'Adjustable Life',
    },
    correct: 'C',
    explanation:
      'Variable Universal Life is comprised of monthly mortality charges and self directed investment choices.',
  },
  {
    id: 'q3-common-accident-deductible',
    text:
      'This type of deductible provision states that should more than one family member be involved in a common accident, or suffer the same illness, only one individual deductible amount shall be applied.',
    choices: {
      A: 'Common accident deductible',
      B: 'Corridor deductible',
      C: 'Individual deductible',
      D: 'Family maximum deductible',
    },
    correct: 'A',
    explanation:
      'A common accident deductible provision states that should more than one family member be involved in a common accident, or suffer the same illness, only one individual deductible amount shall be applied.',
  },
  {
    id: 'q3-split-dollar-plan',
    text:
      'Which type of plan allows an employer to give money to an employee for buying a life insurance policy and also permits the employee to select the beneficiary?',
    choices: {
      A: 'Employer purchase plan',
      B: 'Split-dollar plan',
      C: 'Key employee plan',
      D: 'Deferred compensation plan',
    },
    correct: 'B',
    explanation:
      'A split-dollar plan is an arrangement where an employer and an employee share in the cost of purchasing a life insurance policy on the employee. The employee is also allowed to name the policy beneficiary.',
  },
  {
    id: 'q3-cost-of-living-rider',
    text: 'A Cost of Living rider gives the insured',
    choices: {
      A: 'additional death benefits',
      B: 'decreasing premiums',
      C: 'tax incentives',
      D: 'monthly income',
    },
    correct: 'A',
    explanation:
      'The Cost of Living rider can be purchased with many different types of life insurance. This type of coverage is designed to help you hedge your bets against inflation. For example, if you purchase this rider, your policy is going to increase in value if inflation increases.',
  },
  {
    id: 'q3-settlement-options-except',
    text: 'All of these statements concerning Settlement Options are true, EXCEPT:',
    choices: {
      A: 'Proceeds can be administered by the insurance company',
      B: 'Rapid depletion of proceeds can be avoided',
      C: 'Only the beneficiary may select',
      D: 'Increased proceeds can be provided through accumulation of interest',
    },
    correct: 'C',
    explanation: 'Settlement options may be selected by the policyowner.',
  },
  {
    id: 'q3-application-changes-initials',
    text: 'Any changes made on an insurance application requires the initials of whom?',
    choices: {
      A: 'Applicant',
      B: 'Insured',
      C: 'Beneficiary',
      D: 'Agent',
    },
    correct: 'A',
    explanation:
      'When an applicant makes a mistake in the information given to an agent in completing the application, the applicant can have the agent correct the information, but the applicant must initial the correction.',
  },
  {
    id: 'q3-aviation-exclusion',
    text:
      'A pilot applies for Life insurance. The insurer approves the application with a $10 additional monthly premium modification due to the risk involved. The pilot declines the additional premium modification. The insurer will then likely issue the coverage with a(n)',
    choices: {
      A: 'Graded Benefit',
      B: 'Waiver of Premium',
      C: 'Aviation Exclusion',
      D: 'Disability Rider',
    },
    correct: 'C',
    explanation: 'The policy in this situation will likely require an Aviation Exclusion.',
  },
  {
    id: 'q3-war-exclusion-leave',
    text:
      "D was actively serving in the Marines when he was killed in an automobile accident while on leave. His $100,000 Whole life policy contains a War Exclusion clause. How much will D's beneficiary's receive?",
    choices: {
      A: 'Refund of premiums paid plus interest',
      B: 'The full face amount',
      C: 'Nothing, due to actively serving in the armed forces',
      D: 'Double the face amount because cause of death was accidental',
    },
    correct: 'B',
    explanation:
      'In this situation, the beneficiary will receive the full death benefit stated in the policy.',
  },
];

const CHAPTER_4: SampleQuestion[] = [
  {
    id: 'q4-universal-life-cash-value',
    text:
      'The cash value in a(n) ____________ Life policy may fluctuate to reflect changing assumptions regarding mortality cost, interest, and expense factors.',
    choices: {
      A: 'Term',
      B: 'Universal',
      C: 'Graded',
      D: 'Endowment',
    },
    correct: 'B',
    explanation:
      'A Universal Life policy has a cash value that may fluctuate to reflect changing assumptions regarding mortality cost, interest, and expense factors.',
  },
  {
    id: 'q4-trustee-to-trustee',
    text:
      'A trustee-to-trustee transfer of rollover funds in a qualified plan allows a participant to avoid:',
    choices: {
      A: 'paying trustee fees',
      B: 'paying transfer fees',
      C: 'ever paying income taxes on the distributions',
      D: 'mandatory income tax withholding on the transfer amount',
    },
    correct: 'D',
    explanation:
      'There is no federal tax withholding involved in a transfer of funds from one qualified plan into another. Rollovers, however, involve a 20% withholding. Once the rollover takes place to the new custodian, the remainder of the distribution is made.',
  },
  {
    id: 'q4-agent-application-procedure',
    text:
      'Which of the following correctly explains the actions an agent should take if a customer wants to apply for an insurance policy?',
    choices: {
      A: 'Complete the application over the phone with the customer, sign the application for the customer, then send the application off to the insurance company',
      B: "Complete the application and review the information with the customer prior to obtaining the customer's signature, then send the application off to the insurance company",
      C: 'Have the customer sign a blank application, then take the application back to his office to complete prior to sending it off to the insurance company',
      D: 'Have the customer fill out the application and send it to his office for him to sign, then send it off to the insurance company',
    },
    correct: 'B',
    explanation:
      "If a customer wants to apply for an insurance policy, the agent should complete the application and review the information with the customer prior to obtaining the customer's signature, then send the application off to the insurance company.",
  },
  {
    id: 'q4-top-heavy-plan',
    text: 'Which of the following is TRUE about a qualified retirement that is "top heavy"?',
    choices: {
      A: 'More than 40% of annual additions are for key employee accounts',
      B: 'More than 50% of plan assets are in key employee accounts',
      C: 'More than 30% of plan assets are in key employee accounts',
      D: 'More than 60% of plan assets are in key employee accounts',
    },
    correct: 'D',
    explanation:
      'A plan is considered to be top heavy if more than 60% of plan assets are attributable to “key employees” as of the last day of the prior plan year.',
  },
  {
    id: 'q4-settlement-not-systematic',
    text:
      "All of these Settlement options involve the systematic liquidation of the death proceeds in the event of the insured's death, EXCEPT:",
    choices: {
      A: 'Fixed Period',
      B: 'Life Income',
      C: 'Interest Only',
      D: 'Fixed Amount',
    },
    correct: 'C',
    explanation:
      'The Interest Only option does NOT involve the systematic liquidation of the death proceeds.',
  },
  {
    id: 'q4-family-maintenance',
    text:
      'P is looking to purchase a life insurance policy that will pay a stated monthly income to his beneficiaries for 20 years after he dies and a lump sum of $20,000 at the end of that 20 year period. What type of policy should P purchase?',
    choices: {
      A: 'Family Income policy',
      B: 'Family Maintenance policy',
      C: 'Family Benefit policy',
      D: 'Family Survivor policy',
    },
    correct: 'B',
    explanation:
      'In this situation, a Family Maintenance policy should be purchased. A Family Maintenance policy pays a monthly income from the date of death of the insured to the end of the preselected period. The payment of the face amount of the policy is payable at the end of such preselected period.',
  },
  {
    id: 'q4-other-insured-rider',
    text:
      'Y purchased $100,000 worth of permanent protection on himself and $50,000 worth of 10-year Term coverage for his wife on the same policy. Which of these policies did Y purchase?',
    choices: {
      A: 'Endowment with a Payor Benefit',
      B: 'Endowment with Extended Term',
      C: 'Whole Life policy with an Other Insured Rider',
      D: 'Family Income policy',
    },
    correct: 'C',
    explanation:
      'In this situation, the applicant purchased a Whole Life Policy with an Other Insured Rider.',
  },
  {
    id: 'q4-vul-mortality-investments',
    text:
      'A life policy that contains a monthly mortality charge as well as self-directed investment choices is called a(n)',
    choices: {
      A: 'Joint Life policy',
      B: 'Endowment',
      C: 'Variable Universal Life policy',
      D: 'Universal Life policy',
    },
    correct: 'C',
    explanation:
      'Variable Universal Life is comprised of monthly mortality charges and self directed investment choices.',
  },
  {
    id: 'q4-reinstatement-except',
    text:
      "K's whole life insurance policy lapsed two months ago due to nonpayment. She would now like to reinstate the policy. All of these statements are correct about the policy's reinstatement EXCEPT",
    choices: {
      A: 'K must provide evidence of insurability',
      B: 'K must pay back interest and premiums',
      C: 'K must reinstate within a stated period',
      D: 'K will forfeit the right to use the automatic loan provision upon reinstatement',
    },
    correct: 'D',
    explanation:
      'All of these statements concerning reinstatement is correct EXCEPT "K will forfeit the right to use the automatic loan provision upon reinstatement".',
  },
  {
    id: 'q4-graded-premium-whole-life',
    text: 'Under a Graded Premium Whole Life policy,',
    choices: {
      A: 'the premium decreases each year during the early years of the contract and remains the same after that time',
      B: 'the premium increases each year during the early years of the contract and remains the same after that time',
      C: 'the premium always remains the same while the death benefit increases during the early years',
      D: 'the premium can be adjusted by the policyowner at anytime',
    },
    correct: 'B',
    explanation:
      'With a graded premium whole life policy, the premium increases each year during the early years of the contract (usually five years) and remains the same after that time.',
  },
  {
    id: 'q4-fsa-allowable',
    text:
      'Which of these options can an individual use their medical flexible spending account to pay for?',
    choices: {
      A: 'Vitamins and supplements',
      B: 'Household expenditures',
      C: 'Prescription drugs',
      D: 'Cosmetic procedures',
    },
    correct: 'C',
    explanation:
      'Prescription drugs are an allowable expense when paid for by a medical flexible spending account.',
  },
  {
    id: 'q4-face-amount-plus-cash-value',
    text: "What does a Face Amount Plus Cash Value Policy pay upon the insured's death?",
    choices: {
      A: "Face amount plus the policy's cash value",
      B: 'Face amount plus total premium paid throughout the life of the policy',
      C: "Face amount plus the policy's dividends",
      D: "The greater amount of the policy's death benefit or the cash value",
    },
    correct: 'A',
    explanation:
      "A Face Amount Plus Cash Value Policy is a contract that promises to pay at the insured's death the face amount of the policy plus a sum equal to the policy's cash value.",
  },
  {
    id: 'q4-rejection-except-gender',
    text: 'A life insurance application may be rejected on the basis of all of these factors EXCEPT',
    choices: {
      A: 'Medical history',
      B: 'Hobbies',
      C: 'Weight',
      D: 'Gender',
    },
    correct: 'D',
    explanation:
      "An insurance company may NOT reject a prospective insured's life application on the basis of gender.",
  },
  {
    id: 'q4-dread-disease',
    text:
      'What type of policy would only provide coverage for specific types of illnesses (cancer, stroke, etc.)?',
    choices: {
      A: 'MEWA',
      B: 'Dread disease insurance',
      C: 'Disability insurance',
      D: 'Blanket insurance',
    },
    correct: 'B',
    explanation:
      'Dread disease insurance provides benefits for ONLY specific types of illnesses such as cancer or stroke.',
  },
  {
    id: 'q4-variable-no-guarantee',
    text: 'A variable insurance policy:',
    choices: {
      A: 'does not allow the policyowner to assume the investment risk',
      B: 'does not guarantee a return on its investment accounts',
      C: 'does not guarantee an assignment provision',
      D: 'guarantees a minimum rate of return',
    },
    correct: 'B',
    explanation:
      'In contrast, variable insurance products do not guarantee contract cash values, and it is the policyowner who assumes the investment risk. Variable life insurance contracts do not make any promises as to either interest rates or minimum cash values.',
  },
  {
    id: 'q4-term-life-maturity',
    text: 'A term life insurance policy matures:',
    choices: {
      A: 'upon endowment of the contract',
      B: 'upon death of the insured',
      C: 'when the cash value equals the death benefit',
      D: "upon the insured's death during the term of the policy",
    },
    correct: 'D',
    explanation:
      'Term life policies can only mature (pay out the face amount) if death occurs during the term of the policy.',
  },
  {
    id: 'q4-basic-hosp-surg-benefits',
    text: 'Basic Hospital and Surgical policy benefits are:',
    choices: {
      A: 'lower than the actual expenses incurred',
      B: 'higher than the actual expenses incurred',
      C: 'normally subject to deductibles',
      D: 'normally subject to coinsurance',
    },
    correct: 'A',
    explanation:
      'Basic Hospital and Surgical policy benefits are typically lower than the actual expenses incurred.',
  },
  {
    id: 'q4-health-app-signature-required',
    text:
      'Before a health insurance policy is issued, which of these components of the contract is required?',
    choices: {
      A: 'A conditional receipt',
      B: 'Attending Physician Statement (APS)',
      C: "Applicant's signature on application",
      D: "Beneficiary's signature",
    },
    correct: 'C',
    explanation:
      'A signature on an application is required before a health policy will be issued.',
  },
  {
    id: 'q4-misrep-void-contestable',
    text:
      'When a misrepresentation on a life insurance policy application is discovered, what action may an insurance company take?',
    choices: {
      A: 'Void the policy, no matter when it is discovered',
      B: 'Void the policy if found during the Contestable period',
      C: 'Void the policy only if it is discovered during the Contestable period and proven to be material',
      D: 'Void the policy at any time only if it is found to be material',
    },
    correct: 'C',
    explanation:
      'An insurer may void the policy only if the misrepresentation is discovered during the Contestable period and proven to be material.',
  },
  {
    id: 'q4-major-medical-claim-calc',
    text:
      'Q is hospitalized for 3 days and receives a bill for $10,100. Q has a Major Medical policy with a $100 deductible and 80/20 coinsurance. How much will Q be responsible for paying on this claim?',
    choices: {
      A: '$2,100',
      B: '$2,000',
      C: '$2,020',
      D: '$100',
    },
    correct: 'A',
    explanation:
      'In this situation, $10,000 x 20% coinsurance + $100 deductible = $2,100.',
  },
  {
    id: 'q4-rated-policy-delivery-except',
    text:
      'Upon delivery of a rated life insurance policy, the Producer must obtain each of the following, EXCEPT:',
    choices: {
      A: 'Signed amendment',
      B: 'Signed HIPAA disclosure',
      C: 'The required premium',
      D: 'Signed statement of Good Health',
    },
    correct: 'B',
    explanation:
      'Upon delivery of a rated life insurance policy, the Producer must obtain all of these EXCEPT a "Signed HIPAA disclosure". The HIPAA disclosure should be taken at the time of sale with the application.',
  },
  {
    id: 'q4-change-of-beneficiary',
    text: 'Which statement regarding the Change of Beneficiary provision is true?',
    choices: {
      A: 'The beneficiary can only be changed with the consent of the insurer',
      B: 'A beneficiary change is subject to underwriting procedures',
      C: 'The insured can change the beneficiary',
      D: 'The policyowner can change the beneficiary',
    },
    correct: 'D',
    explanation:
      'A policyowner may change a beneficiary at any time. However, consent may be needed by the current beneficiary if designated as irrevocable.',
  },
  {
    id: 'q4-risk-classification',
    text:
      "Which of these terms accurately defines an underwriter's assessment of information on a life insurance application?",
    choices: {
      A: 'Warranty review',
      B: 'Risk classification',
      C: 'Insurable interest',
      D: 'Inspection report',
    },
    correct: 'B',
    explanation:
      'Underwriting, another term for risk selection, is the process of reviewing the many characteristics that make up the risk profile of an applicant to determine if the applicant is insurable and, if so, at standard or substandard rates.',
  },
  {
    id: 'q4-revocable-beneficiary',
    text:
      'M purchased an Accidental Death and Dismemberment (AD&D) policy and named his son as beneficiary. M has the right to change the beneficiary designation at anytime. What type of beneficiary is his son?',
    choices: {
      A: 'Revocable',
      B: 'Tertiary',
      C: 'Contingent',
      D: 'Irrevocable',
    },
    correct: 'A',
    explanation:
      'With a revocable beneficiary designation, the policyowner may change the beneficiary at any time without notifying or getting permission from the beneficiary.',
  },
  {
    id: 'q4-exclusion-student-pilot',
    text:
      "N is a student pilot with a large life insurance policy. Which of these features would limit the insurer's obligation in the event N was killed while flying as a student pilot?",
    choices: {
      A: 'Misrepresentation',
      B: 'Exclusion',
      C: 'Concealment',
      D: 'Collateral assignment',
    },
    correct: 'B',
    explanation:
      'Exclusions are specified hazards listed in a policy for which benefits will not be paid.',
  },
  {
    id: 'q4-basic-hospital-cosmetic',
    text: 'Which of the following costs would a Basic Hospital/Surgical policy likely cover?',
    choices: {
      A: 'Care given at a nursing home',
      B: 'Lost income caused by a hospital stay',
      C: 'Surgically removing a facial birthmark',
      D: 'Treating a wound from a soldier injured at war',
    },
    correct: 'C',
    explanation:
      'A Basic Hospital/Surgical policy would most likely cover cosmetic surgery to remove a facial birthmark.',
  },
  {
    id: 'q4-variable-life-investments',
    text:
      'A(n) ______ Life policy offers the owner investment in products such as money-market funds, long-term bonds and equities.',
    choices: {
      A: 'Term',
      B: 'Adjustable',
      C: 'Variable',
      D: 'Universal',
    },
    correct: 'C',
    explanation:
      'A Variable Life policy offers the owner investment in products such as money-market funds, long-term bonds, or equities.',
  },
  {
    id: 'q4-conditional-coverage',
    text:
      'T is given a receipt after completing a life insurance application and paying the initial premium. Under this situation, T\'s coverage is',
    choices: {
      A: 'effective upon delivery of the policy',
      B: 'effective upon completion of the Free-Look period',
      C: "conditional, depending on the insurer's underwriting guidelines",
      D: 'guaranteed, no matter what is found during the underwriting process',
    },
    correct: 'C',
    explanation:
      "In this situation, the life insurance coverage is conditional, depending on the insurer's underwriting guidelines.",
  },
  {
    id: 'q4-contract-elements',
    text: 'Which of these require an offer, acceptance, and consideration?',
    choices: {
      A: 'Contract',
      B: 'Warranty',
      C: 'Representation',
      D: 'Estoppel',
    },
    correct: 'A',
    explanation: 'Offer, acceptance, and consideration are all elements of a contract.',
  },
  {
    id: 'q4-major-medical-claim-2',
    text:
      'An individual has a Major Medical policy with a $5,000 deductible and an 80/20 Coinsurance clause. How much will the INSURED have to pay if a total of $15,000 in covered medical expenses are incurred?',
    choices: {
      A: '$7,000',
      B: '$2,000',
      C: '$5,000',
      D: '$10,000',
    },
    correct: 'A',
    explanation: 'In this situation, $5,000 + 20% of the remaining bill = $7,000.',
  },
  {
    id: 'q4-children-term-rider',
    text: "What kind of life insurance product covers children under their parent's policy?",
    choices: {
      A: 'Term rider',
      B: 'Payor benefit',
      C: 'Family Maintenance rider',
      D: 'Family Income rider',
    },
    correct: 'A',
    explanation:
      'Family plan policies usually cover the family head with permanent insurance and the coverage on the spouse and children is term insurance in the form of a rider.',
  },
  {
    id: 'q4-irrevocable-beneficiary',
    text:
      'A policyowner would like to change the beneficiary on a Life insurance policy and make the change permanent. Which type of designation would fulfill this need?',
    choices: {
      A: 'Primary',
      B: 'Irrevocable',
      C: 'Contingent',
      D: 'Revocable',
    },
    correct: 'B',
    explanation:
      'An irrevocable designation may not be changed without the written consent of the beneficiary.',
  },
  {
    id: 'q4-entire-contract-health',
    text:
      'A producer does not have the authority to change a policy or waive any of its provisions. The health provision that best describes this statement is called the',
    choices: {
      A: 'Incontestable',
      B: 'Grace Period',
      C: 'Entire Contract',
      D: 'Time Limit on Certain Defenses',
    },
    correct: 'C',
    explanation:
      'The Entire Contract provision states that the producer does NOT have the authority to change the policy or waive any of its provisions.',
  },
  {
    id: 'q4-short-term-medical-nonrenewable',
    text: 'Which of the following BEST describes a short-term medical expense policy?',
    choices: {
      A: 'Noncancellable',
      B: 'Guaranteed renewable',
      C: 'Nonrenewable',
      D: 'Conditionally renewable',
    },
    correct: 'C',
    explanation:
      'A typical short-term medical expense policy is best described as nonrenewable.',
  },
  {
    id: 'q4-insuring-agreement',
    text:
      "The agreement in a life insurance contract that states a specific sum of money will be paid to a designated person upon an insured's death is called a(n):",
    choices: {
      A: 'Consideration clause',
      B: 'Assignment agreement',
      C: 'Entire Contract provision',
      D: 'Insuring agreement',
    },
    correct: 'D',
    explanation:
      "The insuring clause or provision sets forth the company's basic promise to pay benefits upon the insured's death.",
  },
  {
    id: 'q4-backdating-purpose',
    text: 'The reason for backdating a policy is',
    choices: {
      A: 'to avoid being considered a substandard risk due to a recent cancer diagnosis',
      B: 'to decrease the Contestable period',
      C: 'to obtain a premium rate based on an earlier age',
      D: 'to decrease the face amount',
    },
    correct: 'C',
    explanation:
      'The purpose of backdating a life insurance policy is to use premiums based on an earlier age.',
  },
  {
    id: 'q4-renewability-no-insurability',
    text: 'If a 10-Year Term Life policy contains a Renewability provision, the policy will renew',
    choices: {
      A: 'at the option of the insurer',
      B: 'only with evidence of insurability',
      C: 'along with a decrease in premium',
      D: 'without evidence of insurability',
    },
    correct: 'D',
    explanation:
      "Renewable term refers to a provision in many term life insurance policies that allow for its renewal without the need for new underwriting. With renewable term, coverage can be extended even if the insured's health has declined, but the new premiums will reflect their older age.",
  },
  {
    id: 'q4-free-look-begins',
    text: 'The free-look provision begins',
    choices: {
      A: 'upon receipt of the policy by the producer',
      B: 'upon receipt of the policy by the policyowner',
      C: 'upon the date of the sales presentation',
      D: 'upon the completion of the application',
    },
    correct: 'B',
    explanation:
      'When delivering the policy, the agent needs to explain that the free-look provision begins upon receipt of the policy by the policyowner.',
  },
  {
    id: 'q4-mandatory-grace-period',
    text:
      'According to the Mandatory Uniform Policy Provisions, what is the maximum amount of time after the premium due date during which the policy remains in force even though the premium has not been paid?',
    choices: {
      A: '31 days',
      B: '60 days',
      C: '7 days',
      D: '10 days',
    },
    correct: 'A',
    explanation:
      'According to the Mandatory Uniform Policy Provisions, the maximum amount of time after the premium due date during which the policy remains in force even though the premium has not been paid is 31 days.',
  },
  {
    id: 'q4-reinstatement-provision',
    text:
      'The provision that can be used to put an insurance policy back in force after it has lapsed due to nonpayment is called:',
    choices: {
      A: 'Grace period',
      B: 'Reinstatement',
      C: 'Waiver of premium',
      D: 'Automatic premium loan',
    },
    correct: 'B',
    explanation:
      'In cases where a policyowner wishes to reinstate a lapsed policy, the reinstatement provision allows the policyowner to do so with some limitations.',
  },
  {
    id: 'q4-ul-investment-cash-value',
    text: 'The investment gains from a Universal Life Policy usually go toward:',
    choices: {
      A: 'paying off a policy loan',
      B: 'the dividends',
      C: 'the death benefit',
      D: 'the cash value',
    },
    correct: 'D',
    explanation:
      'In a Universal Life Policy, income is usually directed toward the cash value.',
  },
  {
    id: 'q4-ltc-preex-6-months',
    text:
      "Qualified Long-Term Care policies may take into consideration an applicant's pre-existing conditions for a maximum of not more than __ month(s) prior to the effective date of coverage.",
    choices: {
      A: '6',
      B: '24',
      C: '1',
      D: '12',
    },
    correct: 'A',
    explanation:
      'If a pre-existing condition waiting period applies, the policy must not exclude coverage for any pre-existing conditions that occurred more than 6 months prior to the effective date of coverage. These conditions cannot be excluded beyond 6 months after the policy is issued.',
  },
  {
    id: 'q4-policy-face-not-included',
    text: 'Which of the following is NOT included in the policy face?',
    choices: {
      A: 'Name of the insurer',
      B: 'Free Look provision',
      C: 'Name of the insured',
      D: 'Exclusions',
    },
    correct: 'D',
    explanation:
      'The exclusions section is NOT included in the policy face (first page of an insurance policy).',
  },
  {
    id: 'q4-agent-check-handling-2',
    text:
      'Agent J takes an application and initial premium from an applicant and sends the application and premium check to the insurance company. The insurance company returns the check back to J because the check is made out to J instead of the insurance company. What action should J take?',
    choices: {
      A: 'Cross off his name on the "pay to" portion of the check, write the name of the insurance company, and send the check back to the insurance company',
      B: "Deposit the applicant's check into his account and make a personal check out to the insurance company from his personal account",
      C: 'Return to the customer, collect a new check made out to the insurance company, and send the new check out to the insurance company',
      D: 'Deposit the check in to his personal account, use the funds to purchase a cashiers check, and send the new cashiers check back to the insurance company',
    },
    correct: 'C',
    explanation:
      'If an agent receives a check made out to them instead of the insurance company, they should return the check to the customer and collect a new check properly made out to the insurance company.',
  },
  {
    id: 'q4-insuring-clause-ah',
    text:
      'The clause in an Accident and Health policy which defines the benefit amounts the insurer will pay is called the:',
    choices: {
      A: 'Insuring clause',
      B: 'Consideration clause',
      C: 'Free-look provision',
      D: 'Contestable clause',
    },
    correct: 'A',
    explanation:
      'The Insuring clause states the amount of benefits to be paid in an Accident and Health policy.',
  },
  {
    id: 'q4-automatic-premium-loan',
    text: 'The Automatic Premium Loan provision is designed to:',
    choices: {
      A: 'provide a source of revenue to the insurance company',
      B: 'allow a policyowner to request a policy loan',
      C: 'allow a policyowner to take out additional coverage without evidence of insurability',
      D: 'avoid a policy lapse',
    },
    correct: 'D',
    explanation: 'The purpose of the automatic premium loan is to keep the policy from lapsing.',
  },
];

const CHAPTER_5: SampleQuestion[] = [
  {
    id: 'q5-key-person-architect',
    text:
      'An architecture firm would stand to lose a lot of money in the event of the death of its project manager. Which type of policy should the firm purchase on its project manager?',
    choices: {
      A: 'Executive insurance',
      B: 'Graded insurance',
      C: 'Universal life insurance',
      D: 'Key Person insurance',
    },
    correct: 'D',
    explanation:
      'Key person insurance is a type of life insurance policy that provides a death benefit to a business if its owner or another significant employee passes away.',
  },
  {
    id: 'q5-conversion-term-to-whole',
    text:
      'When a policyowner exchanges a term policy for a whole life policy without providing proof of good health, which of these apply?',
    choices: {
      A: 'Extended term option',
      B: 'Incontestable period',
      C: 'Conversion provision',
      D: '1035 Exchange',
    },
    correct: 'C',
    explanation:
      'The option to convert gives the insured the right to convert or exchange the term policy for a whole life (or permanent) plan without evidence of insurability.',
  },
  {
    id: 'q5-variable-life-license',
    text: 'Variable Life products require a producer to',
    choices: {
      A: 'hold a Life Insurance license and a Securities license',
      B: 'be regulated solely by State Law',
      C: 'hold a Life and Health Insurance license',
      D: 'guarantee not more than a 12% return per annum',
    },
    correct: 'A',
    explanation:
      'Variable Life products require a producer to hold a Life Insurance license and a Securities license.',
  },
  {
    id: 'q5-whole-life-not-required',
    text: 'Which of the following information is NOT required to be included in a Whole Life policy?',
    choices: {
      A: "Policy's premium",
      B: "Policy's loan interest rate",
      C: "Policy's guaranteed dividend table",
      D: "Policy's cash value table",
    },
    correct: 'C',
    explanation:
      'All of this information must be included in a Whole Life policy EXCEPT for "Policy\'s guaranteed dividend table".',
  },
  {
    id: 'q5-simultaneous-death-act-1',
    text:
      'If the insured and primary beneficiary are both killed in the same accident and it cannot be determined who died first, where are the death proceeds to be directed under the Uniform Simultaneous Death Act?',
    choices: {
      A: "Primary beneficiary's next of kin",
      B: "Insured's estate",
      C: "Primary beneficiary's estate",
      D: "Insured's contingent beneficiary",
    },
    correct: 'D',
    explanation:
      'Under the Uniform Simultaneous Death Act, if both insured and primary beneficiary are killed in the same accident and there is insufficient evidence to show who died first, policy proceeds will be paid as if the insured died last. In other words, the proceeds will be paid to the secondary or contingent beneficiary.',
  },
  {
    id: 'q5-variable-whole-life',
    text: 'Variable Whole Life Insurance can be described as:',
    choices: {
      A: 'a securities product only',
      B: 'the insurance company assumes the investment risk',
      C: 'both an insurance and securities product',
      D: 'an insurance product only',
    },
    correct: 'C',
    explanation: 'Variable Whole Life Insurance is both an insurance and securities product.',
  },
  {
    id: 'q5-student-pilot-aviation-exclusion',
    text:
      'A student pilot can pay regular premium costs for her life insurance policy with the addition of which of the following?',
    choices: {
      A: 'Guaranteed Insurability rider',
      B: 'Accidental Death Benefit rider',
      C: 'Impairment rider',
      D: 'Aviation exclusion',
    },
    correct: 'D',
    explanation:
      'A student pilot can pay standard premium costs for her life insurance policy with the addition of an aviation exclusion.',
  },
  {
    id: 'q5-fiduciary-responsibility',
    text: 'Taking receipt of premiums and holding them for the insurance company is an example of:',
    choices: {
      A: 'Misappropriation',
      B: 'Theft',
      C: 'Commingling',
      D: 'Fiduciary responsibility',
    },
    correct: 'D',
    explanation:
      'Taking receipt of premiums and holding them for the insurance company is an example of fiduciary responsibility.',
  },
  {
    id: 'q5-renewability-extend-coverage',
    text: 'What advantage does the renewability feature give to a term policy?',
    choices: {
      A: 'The insured may extend the coverage period',
      B: 'The insured may borrow against the cash value',
      C: 'The insured may apply for this policy with little or no underwriting',
      D: 'The insured may extend the coverage period at no additional cost',
    },
    correct: 'A',
    explanation:
      'The advantage a renewability feature gives to the insured is it allows him/her to extend the coverage period. Usually a premium increase is involved upon renewal.',
  },
  {
    id: 'q5-nonforfeiture-reduced-paid-up',
    text: 'Which of the following is an example of a nonforfeiture option?',
    choices: {
      A: 'Conversion option',
      B: 'Reduced Paid-Up option',
      C: 'Inflation option',
      D: 'Guaranteed insurability option',
    },
    correct: 'B',
    explanation: '"Reduced Paid-Up option" is an example of a nonforfeiture option.',
  },
  {
    id: 'q5-revocable-no-consent',
    text:
      'A(n) _________ beneficiary may be changed by the policyowner WITHOUT the consent of the beneficiary.',
    choices: {
      A: 'Irrevocable',
      B: 'Tertiary',
      C: 'Revocable',
      D: 'Replaceable',
    },
    correct: 'C',
    explanation:
      'A revocable beneficiary may be changed by the policyowner WITHOUT the consent of the beneficiary.',
  },
  {
    id: 'q5-business-overhead-expense',
    text: 'A Business Overhead Expense policy:',
    choices: {
      A: 'covers business expenses such as rent and utilities',
      B: 'covers any loss of income by the business owner',
      C: "reimburses the company for any reduction in sales due to the owner's disability",
      D: 'covers employee wages only',
    },
    correct: 'A',
    explanation:
      'Business Overhead Expense insurance covers eligible expenses for utilities, rent, and staff.',
  },
  {
    id: 'q5-not-policyowner-right',
    text: 'Which of these is NOT considered to be a right given to a policyowner?',
    choices: {
      A: 'Change the beneficiary, if revocable',
      B: 'Modify a provision in the insurance contract',
      C: "Surrendering the policy's cash value",
      D: 'Assignment of ownership',
    },
    correct: 'B',
    explanation: 'Changing contract provisions is not a policyowner right.',
  },
  {
    id: 'q5-policy-loan-interest',
    text: 'Which statement is TRUE in regards to a policy loan?',
    choices: {
      A: 'Insurance companies can send delinquent interest accounts to a collection agency',
      B: 'Past-due interest on a policy loan is added to the total debt',
      C: 'Past-due interest payments not paid after 3 months will void the policy',
      D: "Insurance companies can charge an interest rate based on the policyowner's credit report",
    },
    correct: 'B',
    explanation: 'Interest on a loan which is not paid when due is added to the total debt.',
  },
  {
    id: 'q5-health-no-single-premium',
    text: 'Which mode of payment is NOT used by health insurance policies?',
    choices: {
      A: 'Single premium',
      B: 'Semi-annual premium',
      C: 'Monthly premium',
      D: 'Annual premium',
    },
    correct: 'A',
    explanation: 'Single premium is not used when paying for health insurance policies.',
  },
  {
    id: 'q5-waiver-of-premium-disability',
    text:
      'A life insurance policy which ensures that the premium will be paid if the insured becomes disabled has what kind of rider attached?',
    choices: {
      A: 'Cost of Living',
      B: 'Waiver of Premium',
      C: 'Return of Premium',
      D: 'Accelerated Benefits',
    },
    correct: 'B',
    explanation:
      'The Waiver of Premium is a rider on a life insurance policy that guarantees that the premium will be paid if the insured is disabled for a specified period of time.',
  },
  {
    id: 'q5-level-premium',
    text: 'A level premium indicates:',
    choices: {
      A: "the premium stays level until the policy's renewal date",
      B: 'the premium is fixed for a period stated in the contract, then becomes variable',
      C: 'the premium is fixed for the entire duration of the contract',
      D: 'the premium can only be changed with the consent of the insurer',
    },
    correct: 'C',
    explanation: 'A level premium means that the premium remains fixed through the life of a policy.',
  },
  {
    id: 'q5-basic-cancer-plan',
    text:
      'P is insured under a basic cancer plan. Which of the following conditions would be covered under this plan?',
    choices: {
      A: 'Stroke',
      B: 'Operation for a malignant tumor',
      C: 'Heart Attack',
      D: 'Broken leg',
    },
    correct: 'B',
    explanation:
      'A basic cancer plan would pay the claim if the insured needed surgery for a malignant tumor.',
  },
  {
    id: 'q5-endowment-death-benefit',
    text:
      'K pays on a $20,000 20-Year Endowment policy for 10 years and dies from an automobile accident. How much will the insurance company pay the beneficiary?',
    choices: {
      A: '$20,000 death benefit',
      B: 'Return of premiums paid',
      C: 'Cash value plus interest',
      D: 'Face amount plus interest',
    },
    correct: 'A',
    explanation:
      'If the insured dies before the endowment\'s maturity, the policy\'s face value — also known as the "death benefit" — is paid in a lump sum to any beneficiaries.',
  },
  {
    id: 'q5-trustee-group-certificate',
    text: 'Under a trustee group life policy, who would be eligible for a certificate of coverage?',
    choices: {
      A: 'Corporation',
      B: 'Labor union',
      C: 'Employee',
      D: 'Employer',
    },
    correct: 'C',
    explanation:
      'An employee would be a certificate holder under a trustee group life policy.',
  },
  {
    id: 'q5-contract-not-bilateral',
    text:
      'All of the following are considered to be typical characteristics describing the nature of an insurance contract, EXCEPT:',
    choices: {
      A: 'Aleatory',
      B: 'Unilateral',
      C: 'Bilateral',
      D: 'Adhesion',
    },
    correct: 'C',
    explanation:
      'Unilateral, aleatory, and adhesion are all special features of insurance contracts. Bilateral is not.',
  },
  {
    id: 'q5-partners-insurable-interest',
    text:
      "E and F are business partners. Each takes out a $500,000 life insurance policy on the other, naming himself as primary beneficiary. E and F eventually terminate their business, and four months later E dies. Although E was married with three children at the time of death, the primary beneficiary is still F. However, an insurable interest no longer exists. Where will the proceeds from E's life insurance policy be directed to?",
    choices: {
      A: 'The dissolved partnership',
      B: "E's estate",
      C: "E's family",
      D: 'F',
    },
    correct: 'D',
    explanation:
      "In this situation, the proceeds from E's life insurance policy will go to F. Insurable interest only needs to exist at the time of application.",
  },
  {
    id: 'q5-simultaneous-death-act-2',
    text:
      'If the insured and primary beneficiary are both killed in the same accident and it cannot be determined who died first, where are the death proceeds to be directed under the Uniform Simultaneous Death Act?',
    choices: {
      A: "Primary beneficiary's estate",
      B: "Insured's estate",
      C: "Primary beneficiary's next of kin",
      D: "Insured's contingent beneficiary",
    },
    correct: 'D',
    explanation:
      'Under the Uniform Simultaneous Death Act, if both insured and primary beneficiary are killed in the same accident and there is insufficient evidence to show who died first, policy proceeds will be paid as if the insured died last. In other words, the proceeds will be paid to the secondary or contingent beneficiary.',
  },
  {
    id: 'q5-group-term-conversion-coverage',
    text: 'When an employee is terminated, which statement about a group term life conversion is true?',
    choices: {
      A: 'Employee must convert group term life coverage into an individual term life policy',
      B: 'Employee must provide evidence of insurability for conversion',
      C: 'Policy proceeds will be paid if the employee dies during the conversion period',
      D: 'Policy proceeds will NOT be paid if the employee dies during the conversion period',
    },
    correct: 'C',
    explanation:
      'An individual must apply for individual permanent coverage within 31 days after the date of group coverage termination. An individual is covered under the group policy during the conversion period.',
  },
  {
    id: 'q5-notice-of-claims',
    text: 'The Notice of Claims provision requires a policyowner to:',
    choices: {
      A: 'notify their physician of a claim within a specified time',
      B: 'notify an insurer of a claim within a specified time',
      C: 'wait 60 days after filing a claim to initiate a lawsuit against an insurer',
      D: 'provide proof of loss to an insurer within a specified time',
    },
    correct: 'B',
    explanation:
      "The Notice of Claims provision spells out the insured's duty to provide the insurer with reasonable notice in the event of a loss.",
  },
  {
    id: 'q5-cancer-not-cover-arthritis',
    text: 'Which of the following medical expenses does Cancer insurance NOT cover?',
    choices: {
      A: 'Arthritis',
      B: 'Chemotherapy',
      C: 'Physician visit',
      D: 'Radiation treatment',
    },
    correct: 'A',
    explanation:
      'Cancer insurance typically covers all of these medical expenses except for arthritis.',
  },
  {
    id: 'q5-proof-of-loss-no-forms',
    text:
      'After an insured gives notice of loss, what must he/she do if the insurer does not furnish forms?',
    choices: {
      A: 'File a lawsuit',
      B: 'Contact the insurer again requesting forms',
      C: 'Nothing',
      D: 'File written proof of loss',
    },
    correct: 'D',
    explanation:
      'The insured may file written proof of loss in any form if the insurer does NOT furnish forms after the insured gives notice of loss.',
  },
  {
    id: 'q5-aleatory-contract',
    text:
      'Q purchases a $500,000 life insurance policy and pays $900 in premiums over the first six months. Q dies suddenly and the beneficiary is paid $500,000. This exchange of unequal values reflects which of the following insurance contract features?',
    choices: {
      A: 'Unilateral',
      B: 'Consideration',
      C: 'Adhesion',
      D: 'Aleatory',
    },
    correct: 'D',
    explanation:
      'Insurance contracts are aleatory in that the amount the insured will pay in premiums is unequal to the amount that the insurer will pay in the event of a loss.',
  },
  {
    id: 'q5-group-term-certificate-of-insurance',
    text:
      'Company XYZ offers a group Term Life insurance plan to its employees. What does each employee covered under this plan receive?',
    choices: {
      A: 'Receipt of coverage',
      B: 'Certificate of insurance',
      C: 'Master policy',
      D: 'Individual policy',
    },
    correct: 'B',
    explanation:
      'Employees covered by an employer-sponsored group Term Life plan all receive a certificate of insurance.',
  },
  {
    id: 'q5-claim-any-form',
    text:
      'What should an insured do if the insurer does not send claims forms within the time period set forth in a health policy’s Claims Forms provision?',
    choices: {
      A: 'Resubmit the request for a claim form',
      B: 'Submit the claim in any form',
      C: 'File a lawsuit',
      D: 'Wait for the claim form to arrive',
    },
    correct: 'B',
    explanation:
      'If forms are not furnished, the insured should submit the claim in any form, which must be accepted by the company as adequate proof of loss.',
  },
  {
    id: 'q5-disability-elimination-period',
    text: 'Which of these statements concerning an individual Disability Income policy is TRUE?',
    choices: {
      A: 'Premiums are normally tax-deductible',
      B: 'Normally includes an Elimination period',
      C: 'Age of the insured determines the amount of the benefits',
      D: 'Benefits are normally taxable',
    },
    correct: 'B',
    explanation: 'Disability Income policies typically contain an Elimination period.',
  },
  {
    id: 'q5-disability-app-spouse-occupation',
    text:
      'An individual Disability Income insurance applicant may be required to submit all of the following information, EXCEPT:',
    choices: {
      A: 'occupation',
      B: 'medical history',
      C: 'gross income',
      D: "spouse's occupation",
    },
    correct: 'D',
    explanation: "In this situation, a spouse's occupation is not necessary for the application.",
  },
  {
    id: 'q5-co-primary-beneficiary',
    text:
      'T and S are named co-primary beneficiaries on a $500,000 Accidental Death and Dismemberment policy insuring their father. Their mother was named contingent beneficiary. Five years later, S dies of natural causes and the father is killed in a scuba accident shortly afterwards. How much of the death benefit will the mother receive?',
    choices: {
      A: '$250,000',
      B: '$0',
      C: '$500,000',
      D: '$1,000,000',
    },
    correct: 'B',
    explanation:
      'The mother receives $0 because T is still alive and the sole primary beneficiary, while the mother is still the contingent beneficiary.',
  },
  {
    id: 'q5-group-life-not-required-provision',
    text: 'Which provision is NOT a requirement in a group life policy?',
    choices: {
      A: 'Accidental',
      B: 'Grace period',
      C: 'Conversion',
      D: 'Incontestable period',
    },
    correct: 'A',
    explanation: 'An AD&D provision is not required in a group life policy.',
  },
  {
    id: 'q5-recurrent-disability',
    text:
      'P received Disability income benefits for 3 months then returns to work. She is able to work one month before her condition returns, leaving her disabled once again. What would the insurance company most likely regard this second period of disability as?',
    choices: {
      A: 'A recurrent disability',
      B: 'An occupational disability',
      C: 'A residual disability',
      D: 'A presumptive disability',
    },
    correct: 'A',
    explanation:
      'A second period of disability from the same or related cause of a prior disability is called a recurrent disability.',
  },
];

const CHAPTER_6: SampleQuestion[] = [
  {
    id: 'q6-noncontributory-group-life',
    text: 'A noncontributory group term life plan is characterized by:',
    choices: {
      A: 'the cost of the plan is shared by both employer and employee',
      B: 'the entire cost of the plan is paid for by the employee',
      C: 'both employer and employee must provide evidence of insurability',
      D: 'the entire cost of the plan is paid for by the employer',
    },
    correct: 'D',
    explanation:
      "Noncontributory means the employer pays 100% of the premium — employees contribute nothing. Because employees pay nothing there's no reason to opt out, so 100% participation of eligible employees is required.\n\nExam key: Noncontributory = employer pays ALL = 100% participation required. Contributory = employer and employee share cost = 75% participation required.",
  },
  {
    id: 'q6-single-premium-annuity',
    text:
      'S recently received a $500,000 lump sum retirement buyout from her employer. She would like to buy an annuity that will immediately furnish her with a guaranteed income for life. What type of annuity is best suited for her situation?',
    choices: {
      A: 'Period Certain',
      B: 'Deferred Premium',
      C: 'Single Premium',
      D: '403(b) Plan',
    },
    correct: 'C',
    explanation:
      'S has a lump sum she wants to convert immediately into lifetime income — a Single Premium Immediate Annuity (SPIA) is funded with one lump sum payment and begins paying income right away.\n\nExam key: Lump sum + immediate income = Single Premium Immediate Annuity. Deferred annuities accumulate first then pay later.',
  },
  {
    id: 'q6-group-conversion-individual-rate',
    text:
      "An employee of 20 years recently retired at age 59 1/2. This employee's group life contract can be:",
    choices: {
      A: 'continued at a group rate',
      B: 'continued at an individual rate',
      C: 'converted to an individual permanent policy at a group rate',
      D: 'converted to an individual permanent policy at an individual rate',
    },
    correct: 'D',
    explanation:
      'Upon leaving the group (retirement counts as leaving), the employee can convert group term coverage to an individual permanent policy without evidence of insurability — but at individual rates (higher than group rates) based on their attained age.\n\nExam key: Group conversion = individual permanent policy at INDIVIDUAL rates. No medical exam needed but expect to pay significantly more than the group rate.',
  },
  {
    id: 'q6-variable-annuity-not-corp-account',
    text: 'Variable annuities may invest premiums in each of the following, EXCEPT:',
    choices: {
      A: "Insurer's corporate business account",
      B: 'Money Market securities',
      C: 'Common Stock',
      D: 'Junk bonds',
    },
    correct: 'A',
    explanation:
      "Variable annuity premiums are invested in separate account subaccounts (money market, stocks, bonds, etc.) — completely segregated from the insurer's general account. The general account is used for fixed products, not variable.\n\nExam key: Variable = separate account. Fixed = general account. Variable premiums never go into the insurer's general/corporate account.",
  },
  {
    id: 'q6-contributory-plan-shared-cost',
    text: 'What type of group insurance plan involves employees sharing the cost?',
    choices: {
      A: 'non-contributory plan',
      B: 'non-qualified plan',
      C: 'qualified plan',
      D: 'contributory plan',
    },
    correct: 'D',
    explanation:
      'A contributory plan is one where both employer and employee share the premium cost — employees "contribute" toward their own coverage.\n\nExam key: Contributory = employees contribute (share cost) = 75% participation required. Noncontributory = employer pays all = 100% participation required.',
  },
  {
    id: 'q6-association-group-purpose',
    text: 'Which requirement must be met for an association to be eligible for a group life plan?',
    choices: {
      A: 'Group was formed for a purpose other than acquiring insurance',
      B: 'Group must have at least 10 members',
      C: 'Group must establish a President',
      D: 'Group was formed for the purpose of acquiring insurance',
    },
    correct: 'A',
    explanation:
      "One of the core eligibility requirements for association group insurance is that the group's primary purpose must be something other than obtaining insurance. This prevents shell organizations from forming purely to access group coverage.\n\nExam key: Non-insurance purpose = key association group requirement. Florida has no minimum member count for group insurance.",
  },
  {
    id: 'q6-variable-annuity-equity',
    text: 'A Variable Annuity has which of the following characteristics?',
    choices: {
      A: 'Underlying equity investments',
      B: 'Only available with Single Premium',
      C: 'Offers a fixed interest rate',
      D: 'Does not require an insurance license',
    },
    correct: 'A',
    explanation:
      'Variable annuities invest premiums in separate account subaccounts consisting of underlying equity investments (stocks, bonds, money market funds) — the policyowner bears the investment risk and returns fluctuate with market performance.\n\nExam key: Variable = underlying equity investments in separate account. Fixed rate = Fixed annuity. Variable annuities require both insurance AND securities licenses.',
  },
  {
    id: 'q6-straight-life-no-further',
    text:
      'T purchased a $100,000 single premium, Straight Life annuity 5 years ago. He has received monthly payments since the inception of the annuity. If T dies, the insurance company',
    choices: {
      A: 'MUST make half-payments to the beneficiary',
      B: 'MUST make full payments to the beneficiary',
      C: 'does NOT have to make any further payments',
      D: 'has the option to continue making payments based on what has already been paid out',
    },
    correct: 'C',
    explanation:
      "A Straight Life annuity pays income for the annuitant's lifetime only — payments cease at death with no further obligation to anyone. No beneficiary receives anything after the annuitant dies, regardless of how much or how little was paid out.\n\nExam key: Straight Life annuity = payments stop at death. This is why Straight Life pays the highest monthly income of all annuity options — the insurer assumes no ongoing obligation after death.",
  },
  {
    id: 'q6-immediate-annuity-one-period',
    text: 'What is considered to be a characteristic of an immediate annuity?',
    choices: {
      A: 'Normally tied to a specific equity or stock index',
      B: 'Benefit payments start within 5 years of initial purchase',
      C: 'Benefit payments start within one payment period of purchase',
      D: 'Periodical contributions begin immediately',
    },
    correct: 'C',
    explanation:
      "An immediate annuity begins paying benefits within one payment period after purchase — if monthly, payments start within one month. It's funded with a single lump sum and income begins almost immediately.\n\nExam key: Immediate annuity = payments begin within ONE payment period. 5 years = deferred. Tied to an index = indexed.",
  },
  {
    id: 'q6-hmo-subscribers',
    text: 'Which of the following is another name for individuals who participate in an HMO plan?',
    choices: {
      A: 'Certificate holders',
      B: 'Beneficiaries',
      C: 'Subscribers',
      D: 'Policyowners',
    },
    correct: 'C',
    explanation:
      'Individuals enrolled in an HMO (Health Maintenance Organization) are called subscribers — not policyowners or beneficiaries, since HMOs operate differently from traditional insurance with membership-based enrollment.\n\nExam key: HMO members = Subscribers. HMOs use subscribers, primary care physicians (PCPs), gatekeepers, and capitation payments.',
  },
  {
    id: 'q6-pre-admission-cert',
    text: 'Which of the following BEST describes how pre-admission certification is used?',
    choices: {
      A: 'Used to minimize hospital lawsuits',
      B: 'Used to assist in underwriting',
      C: 'Used to help process claims',
      D: 'Used to prevent nonessential medical costs',
    },
    correct: 'D',
    explanation:
      'Pre-admission certification (also called pre-authorization) requires the insured to get approval from the insurer before being admitted to a hospital for non-emergency treatment — preventing unnecessary hospitalizations and controlling costs.\n\nExam key: Pre-admission certification = cost control tool. The insurer reviews whether the hospitalization is medically necessary before approving it.',
  },
  {
    id: 'q6-out-of-area-prior-approval',
    text:
      'Which of the following actions is required by an insured who leaves the primary area of medical coverage and seeks medical care?',
    choices: {
      A: 'Obtain prior approval from the insurer for the medical service',
      B: 'Sign a liability waiver from the insurer prior to receiving medical care',
      C: 'Obtain prior approval from the NAIC for the medical service',
      D: 'Take a physical examination prior to leaving the primary area',
    },
    correct: 'A',
    explanation:
      'When an insured seeks medical care outside their primary coverage area, they typically must obtain prior authorization/approval from the insurer before receiving non-emergency services to ensure coverage applies.\n\nExam key: Out of area + non-emergency = prior approval from insurer. Emergency care outside the coverage area is generally covered without prior approval.',
  },
  {
    id: 'q6-second-surgical-opinion',
    text:
      'When a health insurance policy includes a Mandatory Second Surgical Opinion provision, the insured must:',
    choices: {
      A: 'get a second opinion if the insurer requests one',
      B: 'get a second opinion for specified elective surgeries',
      C: 'get a second opinion for all surgeries',
      D: 'cover the cost of the second opinion',
    },
    correct: 'B',
    explanation:
      'A Mandatory Second Surgical Opinion provision requires the insured to obtain a second opinion before undergoing specific elective (non-emergency) surgeries listed in the policy — the insurer wants confirmation the surgery is medically necessary before paying.\n\nExam key: Mandatory Second Opinion = specified elective surgeries only. Insurer covers the cost of the second opinion — not the insured.',
  },
  {
    id: 'q6-multi-state-master-contract',
    text:
      'J is covered by an employer-provided group health insurance plan, which covers employees in multiple states. This plan is governed by the laws of which state?',
    choices: {
      A: 'Where the certificate of coverage was mailed to',
      B: 'Where the master contract was issued',
      C: 'Where most of the employees reside',
      D: "Where the insurer's home office is located",
    },
    correct: 'B',
    explanation:
      'Group health insurance plans are governed by the laws of the state where the master policy was issued — not where employees live, where mail is sent, or where the insurer is headquartered.\n\nExam key: Multi-state group plan = governed by state where MASTER CONTRACT was issued.',
  },
  {
    id: 'q6-stop-loss-contract',
    text:
      'A group major medical policyholder that provides benefits on a self-funding basis may limit its total liability for claims by purchasing',
    choices: {
      A: 'A deductible',
      B: 'Supplementary coverage',
      C: 'A stop-loss contract',
      D: 'Coinsurance',
    },
    correct: 'C',
    explanation:
      "A stop-loss contract caps the self-funded employer's total claims liability — once claims reach a specified threshold, the stop-loss insurer covers everything above that amount, protecting the employer from catastrophic claim years.\n\nExam key: Self-funded plan + limit total liability = Stop-loss contract. Two forms: specific (caps per individual claim) and aggregate (caps total plan claims).",
  },
  {
    id: 'q6-ppo-sponsors-network',
    text: 'A Preferred Provider Organization (PPO) _____.',
    choices: {
      A: 'offers medical insurance through all licensed health care providers.',
      B: 'offers medical insurance by recommending health care providers.',
      C: 'offers medical insurance by sponsoring a network of health care providers.',
      D: 'offers medical insurance by employing a network of health care providers.',
    },
    correct: 'C',
    explanation:
      'A PPO sponsors a network of preferred providers who agree to discounted rates — members can use in-network providers at lower cost or go out-of-network at higher cost without needing a referral.\n\nExam key: PPO = network of providers, no referral required, can go out-of-network. HMO = restricted network + gatekeeper. PPO providers are independent (sponsored, not employed).',
  },
];

const CHAPTER_7: SampleQuestion[] = [
  {
    id: 'q7-controlled-business-def',
    text: 'What would be an accurate definition of "controlled business"?',
    choices: {
      A: 'Insurance business obtained by an agent through coercion, intimidation, or boycotting',
      B: "Insurance business that is written on the agent's own life, property, or interests",
      C: 'Insurance business that is obtained by replacing an existing policy through misrepresentation',
      D: 'Insurance business that is obtained through false advertising',
    },
    correct: 'B',
    explanation:
      "Controlled business is insurance the agent writes on themselves, family, employer, or own business interests. Florida restricts this to prevent people from getting licensed solely to collect commissions on their own insurance needs.\n\nExam key: Controlled business = self/family/own interests. Coercion = unfair trade practice. Twisting = misrepresentation to replace. False advertising = misleading info.",
  },
  {
    id: 'q7-owner-names-beneficiary',
    text: 'Under a life insurance policy, the ________ has the authority to name the beneficiary.',
    choices: {
      A: 'agent',
      B: 'underwriter',
      C: 'beneficiary',
      D: 'owner',
    },
    correct: 'D',
    explanation:
      "The policyowner holds all contractual rights including naming/changing beneficiary (unless irrevocable), taking loans, surrendering, assigning. The owner isn't always the insured.\n\nExam key: Owner controls the beneficiary designation, not the insured or the insurer.",
  },
  {
    id: 'q7-dfs-hearing-unlicensed',
    text: 'Which action could result in a hearing being ordered by the Department of Financial Services?',
    choices: {
      A: 'Sharing commissions with another licensed agent',
      B: 'Representing a foreign insurer',
      C: 'Conducting insurance business in this state while being a resident of another',
      D: 'Performing insurance transactions without a license',
    },
    correct: 'D',
    explanation:
      'Transacting insurance without a license is a third-degree felony in Florida and triggers DFS hearings, fines, and cease-and-desist orders.\n\nExam key: Unlicensed transactions = DFS hearing. Sharing commissions between licensed agents is legal. Representing a foreign insurer and non-resident licenses are legal.',
  },
  {
    id: 'q7-variable-annuity-annual-notice',
    text: 'Under Florida law, a variable annuity policyowner must be notified of the accumulated value of the contract',
    choices: {
      A: 'once each year',
      B: 'once each month',
      C: 'only when requested by the policyowner',
      D: 'twice each year',
    },
    correct: 'A',
    explanation:
      'Florida requires insurers to provide an annual statement showing the accumulated value of variable annuity contracts so owners stay informed about separate account performance.\n\nExam key: Variable annuity = annual statement required.',
  },
  {
    id: 'q7-oir-approves-forms',
    text: 'Which entity approves the insurance policy forms used in Florida?',
    choices: {
      A: 'Department of Financial Services (DFS)',
      B: 'Financial Services Commission (FSC)',
      C: 'Office of Insurance Regulation (OIR)',
      D: 'National Association of Insurance Commissioners (NAIC)',
    },
    correct: 'C',
    explanation:
      'OIR reviews and approves policy forms, rates, and contracts before insurers can sell in Florida.\n\nExam key: OIR = forms/rates/solvency. DFS = agent licensing/consumer complaints/fraud. FSC = Governor + Cabinet, sets policy. NAIC = no direct Florida authority.',
  },
  {
    id: 'q7-agent-not-authorize-claims',
    text: 'Which of the following acts is an agent NOT authorized to do on behalf of an insurer?',
    choices: {
      A: 'Complete insurance applications',
      B: 'Authorize claim payments',
      C: 'Ask health related questions',
      D: 'Accept premiums from policyowners',
    },
    correct: 'B',
    explanation:
      "Authorizing claim payments belongs to the claims adjuster and the insurer's claims department. Agents handle the front-end: solicit, negotiate, sell.\n\nExam key: Agent = front-end work (applications, premiums, field underwriting). Claims authorization = adjuster only.",
  },
  {
    id: 'q7-rebating-example',
    text: 'An example of rebating would be',
    choices: {
      A: 'reducing the premiums across the board for a specific risk class',
      B: 'a mutual insurance company paying dividends to its policyowners',
      C: 'offering a client something of value not stated in the contract in exchange for their business',
      D: 'using intimidation in order to restrain or monopolize the business of insurance.',
    },
    correct: 'C',
    explanation:
      'Rebating is offering anything of value not in the policy as an inducement to buy. Florida allows promotional gifts up to $100/person/year as advertising.\n\nExam key: Rebating = inducements not in the contract. Mutual dividends are a legal return of premium. Coercion is a separate practice.',
  },
  {
    id: 'q7-employee-health-care-access-act',
    text: 'The Florida Employee Health Care Access Act was established to make',
    choices: {
      A: 'health insurance affordable for families with children',
      B: 'health insurance affordable to retired individuals',
      C: 'individual health insurance available to all Floridians',
      D: 'group health insurance available to employers with up to 50 employees',
    },
    correct: 'D',
    explanation:
      'The Act promotes group health coverage for small employers (1-50 employees) regardless of claims experience or employee health status. Includes guaranteed issue, guaranteed renewability, and rating limits.\n\nExam key: Employee Health Care Access Act = small employer (1-50) group plans, guaranteed issue.',
  },
  {
    id: 'q7-ltc-free-look-30',
    text: 'The free-look period for all qualified Long-term care policies sold in Florida is __ days.',
    choices: {
      A: '40',
      B: '20',
      C: '10',
      D: '30',
    },
    correct: 'D',
    explanation:
      'Florida requires a 30-day free-look for qualified LTC policies — longer than the standard 14-day free-look — due to the complexity and long-term commitment.\n\nExam key: LTC free-look = 30 days. Standard life/health = 14 days.',
  },
  {
    id: 'q7-dfs-financial-institutions-code',
    text: 'Any violations of the Florida financial institutions code may be investigated by the',
    choices: {
      A: 'Department of Financial Services (DFS)',
      B: 'Department of Homeland Security (DHS)',
      C: 'Office of Insurance Regulation (OIR)',
      D: "Attorney General's office",
    },
    correct: 'A',
    explanation:
      'DFS, headed by the CFO, has broad investigative authority over the Florida Insurance Code and financial institutions code violations through its Division of Investigative and Forensic Services.\n\nExam key: DFS investigates violations of the Florida Insurance Code and financial institutions code.',
  },
  {
    id: 'q7-medsupp-preex-6-max',
    text: 'The waiting period for a pre-existing condition under a Medicare Supplement policy may NOT go beyond',
    choices: {
      A: '3 months',
      B: '6 months',
      C: '1 month',
      D: '12 months',
    },
    correct: 'B',
    explanation:
      'Florida/federal law caps the Medicare Supplement pre-existing waiting period at 6 months. Prior creditable coverage must be credited toward that period.\n\nExam key: Medicare Supplement pre-existing limit = 6 months MAX.',
  },
  {
    id: 'q7-di-claims-monthly',
    text: 'Under an Individual Disability policy in Florida, what is the minimum schedule of time in which claims must be made to an insured?',
    choices: {
      A: 'Weekly',
      B: 'Daily',
      C: 'Annually',
      D: 'Monthly',
    },
    correct: 'D',
    explanation:
      'Florida requires individual DI policies to pay claims at least monthly once approved. Insurer can pay more often but monthly is the minimum.\n\nExam key: DI claims = at least monthly under Florida law.',
  },
  {
    id: 'q7-medsupp-not-required-12',
    text: 'Under Florida law, which of the following provisions is NOT required in a Medicare Supplement policy?',
    choices: {
      A: 'Suitability form',
      B: 'Limitation on pre-existing conditions for up to 12 months',
      C: 'Guaranteed issue',
      D: 'Free-look period of 30 days',
    },
    correct: 'B',
    explanation:
      'Florida caps Medicare Supplement pre-existing exclusions at 6 months MAX, not 12. The others ARE required: suitability form, guaranteed issue during open enrollment, 30-day free-look.\n\nExam key: 12-month pre-existing exceeds the 6-month max for Medicare Supplements.',
  },
  {
    id: 'q7-disabled-child-extension',
    text: 'Upon reaching the limiting age, a disabled child may extend their health insurance coverage as a dependent',
    choices: {
      A: 'only if mentally disabled',
      B: 'for up to an additional 10 years only',
      C: 'only if the child is incapable of employment and chiefly dependent on the policyowner',
      D: 'only if physically disabled',
    },
    correct: 'C',
    explanation:
      'Coverage continues past the limiting age if the child is incapable of self-sustaining employment AND chiefly dependent. Mental OR physical disability qualifies; no 10-year cap.\n\nExam key: Disabled dependent = incapable + chiefly dependent. Either mental or physical. Indefinite extension.',
  },
  {
    id: 'q7-variable-annuity-regulators',
    text: 'Which two entities regulate variable annuities?',
    choices: {
      A: 'National Association of Insurance and Financial Advisors; and Securities Exchange Commission',
      B: 'Department of Financial Services; and Securities Exchange Commission',
      C: 'Financial Industry Regulatory Authority; and Department of Financial Services',
      D: 'National Association of Insurance Commissioners; and Department of Financial Services',
    },
    correct: 'B',
    explanation:
      'Variable annuities are dual-regulated. DFS = state insurance side (contract, licensing, suitability). SEC = federal securities side (separate accounts).\n\nExam key: Variable annuity = DFS (state insurance) + SEC (federal securities). Agents need both an insurance license and a FINRA Series 6/7.',
  },
  {
    id: 'q7-noncontributory-fl-min',
    text: 'What is the required minimum percentage of employee participation for a noncontributory group health insurance plan according to Florida Law?',
    choices: {
      A: '75%',
      B: '0%',
      C: '25%',
      D: '100%',
    },
    correct: 'B',
    explanation:
      'Florida law does not impose a specific minimum participation percentage for employee group health insurance. Industry/carrier practice is typically 100% for noncontributory, but statutorily Florida has no minimum.\n\nExam key: Florida statutory minimum = 0% (none). Industry standard = 100% noncontributory, 75% contributory. Watch for "Florida law" wording.',
  },
  {
    id: 'q7-viatical-settlement-provider',
    text: "A life insurance policyowner may sell their policy to a(n) _____ in order to receive a percentage of the policy's face value.",
    choices: {
      A: 'insurer',
      B: 'broker',
      C: 'viator agent',
      D: 'viatical settlement provider',
    },
    correct: 'D',
    explanation:
      'A viatical settlement is when a terminally/chronically ill policyowner sells the policy to a viatical settlement provider for a lump sum (less than face, more than cash surrender). Florida providers must be licensed by OIR.\n\nExam key: Viator sells to a viatical settlement PROVIDER (not broker — the broker just negotiates).',
  },
  {
    id: 'q7-insurance-transaction-element',
    text: 'In Florida, an element of an insurance transaction would be',
    choices: {
      A: 'ordering an MIB report',
      B: 'determining how much coverage is needed',
      C: 'issuing an insurance contract',
      D: 'setting up the sales appointment',
    },
    correct: 'C',
    explanation:
      'Florida defines an "insurance transaction" as soliciting, negotiating, selling, advising on existing coverage — and issuing a contract. MIB ordering, needs analysis, and appointment setting are not transactions.\n\nExam key: Insurance transaction = solicit/negotiate/sell/issue/advise. Pre-transaction admin work does not count.',
  },
  {
    id: 'q7-complaint-oversight',
    text: 'A life insurance policyowner would like to file a complaint against a life insurance agent. In Florida, the entity that oversees these complaints is called the',
    choices: {
      A: 'Securities Exchange Commission',
      B: 'Office of Insurance Regulation',
      C: 'Department of Financial Services',
      D: 'Department of Homeland Security',
    },
    correct: 'C',
    explanation:
      'DFS (Division of Consumer Services) handles consumer complaints against agents, agencies, and adjusters. DFS can investigate fraud and discipline agents.\n\nExam key: Complaints against agents = DFS. OIR regulates insurers, not agent conduct.',
  },
  {
    id: 'q7-domestic-company',
    text: 'In Florida, an insurer domiciled and incorporated in this state is called a(n)',
    choices: {
      A: 'foreign company',
      B: 'alien company',
      C: 'domestic company',
      D: 'admitted company',
    },
    correct: 'C',
    explanation:
      'Domestic = incorporated/headquartered in the state where doing business. Foreign = another U.S. state. Alien = another country. Admitted = has a Certificate of Authority (any of the above can be admitted).\n\nExam key: Domestic = home state. Foreign = other U.S. state. Alien = other country.',
  },
  {
    id: 'q7-policy-loan-10-max',
    text: 'A life policy loan in Florida cannot charge a fixed rate of interest higher than',
    choices: {
      A: '9%',
      B: '10%',
      C: '7%',
      D: '8%',
    },
    correct: 'B',
    explanation:
      "Florida caps fixed life policy loan rates at 10%. Adjustable rates must follow Moody's Corporate Bond Yield Average per statute.\n\nExam key: Florida fixed policy loan max = 10%. Outstanding loans + interest are deducted from the death benefit.",
  },
  {
    id: 'q7-foreign-company-nj',
    text: 'In Florida, an insurer licensed to conduct business in Florida, but domiciled in New Jersey, is called a(n)',
    choices: {
      A: 'domestic company',
      B: 'alien company',
      C: 'non-admitted company',
      D: 'foreign company',
    },
    correct: 'D',
    explanation:
      'Foreign = incorporated in another U.S. state but admitted in Florida. A New Jersey-domiciled insurer doing business in Florida = foreign.\n\nExam key: Another U.S. state = foreign. Another country = alien.',
  },
  {
    id: 'q7-agent-appointment-48-months',
    text: "A licensed agent must be appointed by an insurance company to solicit insurance in Florida. The agent's license will terminate if a certain period of time elapses without being appointed. How long is this period of time?",
    choices: {
      A: '36 months',
      B: '24 months',
      C: '48 months',
      D: '12 months',
    },
    correct: 'C',
    explanation:
      'Florida agent licenses auto-terminate after 48 months (4 years) without an appointment. Reapplication requires pre-licensing education, exam, and the full process.\n\nExam key: 48 months without appointment = license termination.',
  },
  {
    id: 'q7-controlled-business-max-50',
    text: 'In Florida, what is the maximum percentage of controlled business an agent may produce?',
    choices: {
      A: '30%',
      B: '60%',
      C: '50%',
      D: '40%',
    },
    correct: 'C',
    explanation:
      'Florida caps controlled business at 50% of total volume in a 12-month period. More than half of business must come from the general public to maintain the license.\n\nExam key: Controlled business max = 50% of total business.',
  },
  {
    id: 'q7-group-life-conversion-no-evidence',
    text: 'According to Florida law, group life insurance conversion privileges must NOT',
    choices: {
      A: 'allow the converted policy to exceed 75% of the original group life amount',
      B: 'allow a time period to convert group life coverage to an individual life policy',
      C: 'require evidence of insurability',
      D: 'require a rate increase',
    },
    correct: 'C',
    explanation:
      'Florida group conversion cannot require evidence of insurability. A time limit (31 days) and individual rates (higher than group) ARE allowed.\n\nExam key: Group life conversion = no evidence of insurability; 31-day window; individual rates allowed.',
  },
  {
    id: 'q7-health-cancel-45-day',
    text: 'A __ day notice to the policyholder is required for any health insurer that wishes to cancel a health insurance policy.',
    choices: {
      A: '45',
      B: '90',
      C: '60',
      D: '30',
    },
    correct: 'A',
    explanation:
      'Florida requires 45 days written notice before a health insurer can cancel or non-renew. Gives the policyholder time to find alternative coverage.\n\nExam key: Health cancellation = 45-day notice.',
  },
  {
    id: 'q7-group-life-certificate-holder',
    text: 'An individual covered under a Group Life insurance policy is considered to be a(n)',
    choices: {
      A: 'annuitant',
      B: 'policyowner',
      C: 'certificate holder',
      D: 'contingent',
    },
    correct: 'C',
    explanation:
      "Master policy is issued to the group sponsor (policyowner). Individuals get certificates = certificate holders. They name their own beneficiaries and have conversion rights but can't change master policy terms.\n\nExam key: Group life individual = certificate holder. Master policy goes to employer/sponsor.",
  },
  {
    id: 'q7-ltc-lapse-secondary-addressee',
    text: 'A long-term care lapse notice must be delivered to both the applicant and',
    choices: {
      A: 'secondary addressee',
      B: 'beneficiary',
      C: 'MIB',
      D: 'personal physician',
    },
    correct: 'A',
    explanation:
      "Florida requires LTC lapse notice to the applicant AND a designated secondary addressee. Applicant can decline (with a written waiver). Insurer must re-offer this every 2 years. Notice goes out at least 30 days before lapse. Protects older insureds who may develop cognitive issues.\n\nExam key: LTC lapse notice = applicant + secondary addressee.",
  },
  {
    id: 'q7-four-principal-areas-except',
    text: 'All of the following entries are classified under the four principal areas of Florida insurance law EXCEPT',
    choices: {
      A: 'Policy provisions',
      B: "Policyowner's rights",
      C: "An agent's licensing requirements",
      D: "An agent's commission",
    },
    correct: 'D',
    explanation:
      "Four principal areas: marketing practices, policy provisions, policyowner's rights, agent licensing requirements. Commissions are private contracts, not a regulatory category.\n\nExam key: Four areas = Marketing / Policy provisions / Policyowner rights / Licensing. Commissions are not one.",
  },
  {
    id: 'q7-suspension-except-fiduciary',
    text: "All of the following will result in the suspension of an agent's license EXCEPT",
    choices: {
      A: 'being convicted of a felony',
      B: 'intentionally misrepresenting the provisions of a policy',
      C: 'acting with fiduciary responsibility',
      D: 'forging a name on an insurance application',
    },
    correct: 'C',
    explanation:
      "Fiduciary responsibility is REQUIRED behavior, not a violation. Felony conviction, misrepresentation (twisting), and forgery all result in suspension or revocation.\n\nExam key: Fiduciary duty = expected behavior. Felony/misrepresentation/forgery = violations.",
  },
  {
    id: 'q7-medsupp-outline-at-app',
    text: 'According to Florida law, when must an agent deliver the Outline of Coverage to a Medicare Supplement applicant?',
    choices: {
      A: 'Within 14 days of the time of application',
      B: 'At the time of policy delivery',
      C: 'At the time of application',
      D: 'Within 14 days of policy delivery',
    },
    correct: 'C',
    explanation:
      'The Outline of Coverage for a Medicare Supplement must be delivered AT TIME OF APPLICATION — before the applicant decides. Standardized format including plan comparison (A-N).\n\nExam key: Medicare Supplement Outline = AT application (not delivery). Different from many other coverages.',
  },
  {
    id: 'q7-variable-license-exam',
    text: 'If an agent would like to sell Variable annuities, which state examination must the agent pass?',
    choices: {
      A: 'Accident and Health insurance',
      B: 'Variable annuities',
      C: 'Life insurance',
      D: 'Life and Variable contracts',
    },
    correct: 'D',
    explanation:
      'Florida 2-14 (Life Including Variable Annuity) or 2-15 (Life Including Variable Annuity & Health) license is required. Plus FINRA Series 6 or 7 and broker-dealer registration.\n\nExam key: Variable annuity sale = Life and Variable Annuity license + FINRA. A plain life license is NOT enough.',
  },
];

const CHAPTER_8: SampleQuestion[] = [
  {
    id: 'q8-medsupp-open-enrollment-6',
    text: 'An application for Medicare Supplement coverage may NOT be denied by the insurer if the application was submitted within ___ month(s) after the applicant reaches the age of 65.',
    choices: {
      A: 'three',
      B: 'one',
      C: 'nine',
      D: 'six',
    },
    correct: 'D',
    explanation:
      'The 6-month Medicare Supplement Open Enrollment Period starts on the first day of the month an applicant is 65+ AND enrolled in Part B. Guaranteed issue, no medical underwriting, max 6-month pre-existing limit.\n\nExam key: Medicare Supplement open enrollment = 6 months, guaranteed issue.',
  },
  {
    id: 'q8-group-life-cancel-notify-employees',
    text: 'J owns a business and has a Group Life policy covering her employees. J decides to cancel the policy by letting it lapse on the renewal date. What action must be taken?',
    choices: {
      A: 'No obligation is required from either the insurance company nor J',
      B: 'J must cover the group with another policy at cancellation',
      C: "The insurance company must replace the existing policy with one to J's liking",
      D: 'All of the employees must be notified of the cancellation either by the insurance company or through J',
    },
    correct: 'D',
    explanation:
      'All certificate holders must be notified so they can exercise conversion rights (31 days) or seek other coverage. Notification can come from insurer OR employer.\n\nExam key: Group life cancellation = employees notified by insurer OR employer.',
  },
  {
    id: 'q8-coercion-rights-impaired',
    text: 'J is an agent who recently told a claimant that his rights might be impaired if he does not complete a release form within a specified time. What could this agent be found guilty of?',
    choices: {
      A: 'Defamation',
      B: 'Twisting',
      C: 'Coercion',
      D: 'Rebating',
    },
    correct: 'C',
    explanation:
      'Coercion is using threats, intimidation, or pressure to influence insurance decisions. Telling a claimant "rights might be impaired" is a threat. Twisting = policy replacement misrepresentation. Defamation = false statements harming reputation. Rebating = giving inducements.\n\nExam key: Threats/pressure = coercion. Twisting is about policy replacement, not claims.',
  },
  {
    id: 'q8-k-certificate-holder',
    text: 'K is insured under a Group Life insurance policy. K is considered to be a(n)',
    choices: {
      A: 'certificate holder',
      B: 'policyowner',
      C: 'annuitant',
      D: 'beneficiary',
    },
    correct: 'A',
    explanation:
      'Group life insureds = certificate holders. Master policy goes to the group sponsor; certificates go to members.\n\nExam key: Insured under group life = certificate holder.',
  },
  {
    id: 'q8-fiduciary-responsibility',
    text: "T is an agent and when hired, is reminded that he has a responsibility to handle clients' funds in an honest and ethical manner. This responsibility is referred to as",
    choices: {
      A: 'fiduciary responsibility',
      B: 'reasonable trust',
      C: 'legal competence',
      D: 'ethical behavior',
    },
    correct: 'A',
    explanation:
      "Fiduciary responsibility is the duty to act in the client's best interest, handle premium funds properly, no commingling, accurate records. Commingling/embezzlement is among the most serious violations.\n\nExam key: Handling client funds = fiduciary responsibility (prompt deposit/forwarding, no commingling).",
  },
  {
    id: 'q8-false-advertising',
    text: "The act of an insurance company publishing misleading information about its policy's provisions is called",
    choices: {
      A: 'false advertising',
      B: 'intimidation',
      C: 'coercion',
      D: 'twisting',
    },
    correct: 'A',
    explanation:
      'False advertising is publishing/distributing misleading information about policy provisions, benefits, dividends, or financial condition. Twisting specifically = misrepresentation to induce policy replacement.\n\nExam key: Misleading policy info to the public = false advertising. Misrepresenting to replace a policy = twisting.',
  },
  {
    id: 'q8-cross-purchase-buy-sell',
    text: 'Two partners own equal shares in a business worth a total of $1,000,000. If they both commit to the purchase of a life insurance policy that will fund a Buy-Sell Agreement, which of the following is TRUE?',
    choices: {
      A: 'Each partner owns a $1,000,000 policy on their own life',
      B: 'Each partner owns a $500,000 policy on their own life',
      C: "Each partner owns a $500,000 policy on their partner's life",
      D: "Each partner owns a $1,000,000 policy on their partner's life",
    },
    correct: 'C',
    explanation:
      "Cross-Purchase Buy-Sell: each partner owns/pays/is beneficiary of a policy on the OTHER partner's life. Face amount = value of that partner's share ($500K each since 50/50 of $1M).\n\nExam key: Cross-Purchase = policies on partner's life equal to that partner's share value.",
  },
  {
    id: 'q8-hospital-surgical-deductibles',
    text: "A Hospital/Surgical Expense policy was purchased for a family of four in March of 2013. The policy was issued with a $500 deductible and a limit of four deductibles per calendar year. Two claims were paid in September 2013, each incurring medical expenses in excess of the deductible. Two additional claims were filed in 2014, each in excess of the deductible amount as well. What would be this family's out-of-pocket medical expenses for 2013?",
    choices: {
      A: '$1,500',
      B: '$1,000',
      C: '$500',
      D: '$2,000',
    },
    correct: 'B',
    explanation:
      "2 claims × $500 = $1,000. The 4-deductible/year cap caps annual exposure at $2,000, but only 2 claims happened. 2014 claims don't affect 2013.\n\nExam key: Per-claim deductible × number of claims = annual out-of-pocket (up to the cap).",
  },
  {
    id: 'q8-aids-hiv-not-discriminatory',
    text: 'All are true statements regarding the underwriting process, EXCEPT:',
    choices: {
      A: 'The cost of any examination is paid for by the insurer',
      B: 'The original application is the primary source of information used in the underwriting process',
      C: 'AIDS and HIV virus exams can be conducted in a discriminatory fashion',
      D: 'Signed consent from the applicant must be provided in order to test for AIDS and HIV virus',
    },
    correct: 'C',
    explanation:
      'HIV/AIDS testing must NOT be discriminatory. Insurer pays for exams. Application is the primary source. Written consent required for HIV testing.\n\nExam key: HIV testing in insurance = non-discriminatory + written consent required.',
  },
  {
    id: 'q8-ss-not-dismemberment',
    text: 'Which of the following does Social Security NOT provide benefits for?',
    choices: {
      A: 'Retirement',
      B: 'Disability',
      C: 'Dismemberment',
      D: 'Survivorship',
    },
    correct: 'C',
    explanation:
      "OASDI = Old Age (retirement), Survivors, Disability Insurance. Dismemberment is covered by AD&D, accident policies, or workers' comp — not SS.\n\nExam key: Social Security = OASDI (retirement/survivors/disability). NOT dismemberment.",
  },
  {
    id: 'q8-conditional-receipt-premium',
    text: 'In order for coverage on a non-medical insurance application to take effect the same day, the producer must collect a signed application and',
    choices: {
      A: 'a Medical Information Report',
      B: 'the initial premium',
      C: 'Attending Physician Statement',
      D: 'forward it immediately to the insurer',
    },
    correct: 'B',
    explanation:
      'A conditional receipt is triggered by a signed application + initial premium = interim coverage from the application date (subject to underwriting).\n\nExam key: Same-day coverage = signed application + initial premium = conditional receipt.',
  },
  {
    id: 'q8-credit-life-term',
    text: 'What type of life insurance are credit policies issued as?',
    choices: {
      A: 'Variable',
      B: 'Whole',
      C: 'Term',
      D: 'Universal',
    },
    correct: 'C',
    explanation:
      'Credit life = decreasing term. The death benefit decreases with the loan balance. Creditor is beneficiary. Coverage cannot exceed the loan amount.\n\nExam key: Credit life = decreasing term, lender as beneficiary, limited to loan balance.',
  },
  {
    id: 'q8-finra-variable',
    text: 'In order to sell a(n) ________ Life policy, a producer is required to register with the Financial Industry Regulatory Authority (FINRA).',
    choices: {
      A: 'Variable',
      B: 'Straight',
      C: 'Term',
      D: 'Adjustable',
    },
    correct: 'A',
    explanation:
      'Variable products are securities. Need state insurance license + FINRA Series 6/7 + broker-dealer registration.\n\nExam key: Variable = security = FINRA required.',
  },
  {
    id: 'q8-401k-lump-sum-withholding',
    text: 'An employee requested that the balance of her 401(k) account be sent directly to her in one lump sum. Upon receipt of the distribution, she immediately has the funds rolled over into an IRA. What is the tax consequence of the distribution sent to this employee?',
    choices: {
      A: 'Distribution is subject to a tax penalty',
      B: 'Distribution is subject to capital gains tax',
      C: 'Distribution is subject to ordinary income tax',
      D: 'Distribution is subject to federal income tax withholding',
    },
    correct: 'D',
    explanation:
      'Direct distribution to employee = mandatory 20% federal withholding even if rolled over within 60 days. Direct trustee-to-trustee transfer avoids withholding.\n\nExam key: Indirect rollover = 20% mandatory federal withholding. Direct rollover = none.',
  },
  {
    id: 'q8-ltc-rider-2-adls',
    text: 'A long-term care rider in a life insurance policy pays a daily benefit in the event of which of the following?',
    choices: {
      A: 'Terminal illness',
      B: 'Inability of the insured to maintain insurance premiums due to unemployment',
      C: "Inability of the insured to perform more than 2 Activities of Daily Living (ADL's)",
      D: 'Critical illness',
    },
    correct: 'C',
    explanation:
      'LTC benefits trigger when the insured can\'t perform 2+ of 6 ADLs (bathing, dressing, eating, toileting, transferring, continence) OR has severe cognitive impairment.\n\nExam key: LTC = 2 of 6 ADLs OR cognitive impairment.',
  },
  {
    id: 'q8-hospital-indemnity-daily',
    text: 'Which of the following BEST describes a Hospital Indemnity policy?',
    choices: {
      A: 'Coverage that replaces lost income due to hospitalization',
      B: 'Coverage that pays for hospital room and board',
      C: 'Coverage that pays a stated amount per day of a covered hospitalization',
      D: 'Coverage that reimburses an insured for surgeon expenses',
    },
    correct: 'C',
    explanation:
      'Hospital Indemnity pays a fixed daily cash amount directly to the insured for each hospitalized day. Use it for any purpose. Supplemental coverage.\n\nExam key: Hospital Indemnity = flat daily benefit, paid to insured, any use.',
  },
  {
    id: 'q8-dividend-accumulation-taxable',
    text: 'A policyowner may generate taxable income from which of the following Dividend Options?',
    choices: {
      A: 'Cash',
      B: 'Reduced Premium',
      C: 'Accumulation at Interest',
      D: 'Nonforfeiture',
    },
    correct: 'C',
    explanation:
      'Dividends themselves are not taxable (return of premium). Interest earned on dividends left to accumulate IS taxable as ordinary income.\n\nExam key: Dividends = not taxable; interest on accumulated dividends = taxable.',
  },
  {
    id: 'q8-wl-not-partial-withdrawals',
    text: 'Whole Life insurance policies are contractually guaranteed to provide each of the following, EXCEPT:',
    choices: {
      A: 'premiums that remain fixed for the life of the policy',
      B: 'partial withdrawal features beyond a surrender charge period',
      C: 'cash value that will ultimately replace the death benefit',
      D: 'nonforfeiture benefit options',
    },
    correct: 'B',
    explanation:
      'Partial withdrawals are a Universal Life feature, not Whole Life. WL accesses cash via loans or surrender only.\n\nExam key: Whole Life = loans only; Universal Life = partial withdrawals.',
  },
  {
    id: 'q8-preex-disclosed-12-month',
    text: 'T was treated for an ailment 2 months prior to applying for a health insurance policy. This condition was noted on the application and the policy was issued shortly afterwards. How will the insurer likely consider this condition?',
    choices: {
      A: 'Insurer will permanently exclude the condition from the policy',
      B: 'Insurer will require a higher deductible for any claims resulting from this condition',
      C: 'Insurer is required to initially cover this pre-existing condition',
      D: 'Insurer will likely treat as a pre-existing condition which may not be covered for one year',
    },
    correct: 'D',
    explanation:
      "Disclosed pre-existing condition = waiting period (commonly 12 months). After waiting period, covered like any condition. ACA major medical can't exclude pre-existing, but supplemental products (DI, LTC, etc.) still can.\n\nExam key: Disclosed pre-existing = up to 12-month waiting period.",
  },
  {
    id: 'q8-wl-cash-value-borrow',
    text: 'Which statement about a whole life policy is true?',
    choices: {
      A: 'Death benefit can usually be adjusted',
      B: 'Cash value may be borrowed against',
      C: 'Premiums are flexible',
      D: 'Beneficiary may be changed only with the consent of the premium payor',
    },
    correct: 'B',
    explanation:
      'WL = fixed premiums, fixed death benefit, guaranteed cash value (loanable). Policyowner controls beneficiary changes (unless irrevocable).\n\nExam key: Whole Life = everything fixed; access cash value via loans.',
  },
  {
    id: 'q8-stoli-third-party',
    text: 'Stranger-Owned Life Insurance (STOLI) is when a person purchases life insurance only to sell to a(n):',
    choices: {
      A: 'relative with insurable interest',
      B: 'sole proprietor with insurable interest',
      C: 'underwriter',
      D: 'third-party with no insurable interest',
    },
    correct: 'D',
    explanation:
      'STOLI is illegal. Buying life insurance with intent to sell to a third-party investor lacking insurable interest. Different from legitimate viatical/life settlements (existing policies sold by terminally/chronically ill insureds).\n\nExam key: STOLI = stranger-owned, no insurable interest at inception = illegal.',
  },
  {
    id: 'q8-cola-rider-death-benefit',
    text: 'A Cost of Living rider gives the insured',
    choices: {
      A: 'decreasing premiums',
      B: 'tax incentives',
      C: 'additional death benefits',
      D: 'monthly income',
    },
    correct: 'C',
    explanation:
      'COLA rider increases the death benefit periodically (tied to CPI) to keep pace with inflation. No proof of insurability needed for increases. Premium rises with each increase.\n\nExam key: COLA = inflation-adjusted death benefit increases.',
  },
  {
    id: 'q8-inspection-report-phone',
    text: 'Information obtained from a phone conversation to the proposed insured can be found in which of these reports?',
    choices: {
      A: 'Inspection report',
      B: 'MIB report',
      C: "Attending physician's report",
      D: "Agent's report",
    },
    correct: 'A',
    explanation:
      "Inspection report = third-party investigator including phone interviews with insured, neighbors, employers covering lifestyle, finances, character.\n\nExam key: Inspection = phone interviews + lifestyle investigation. APS = doctor's written report. MIB = coded medical info.",
  },
  {
    id: 'q8-hospitalization-not-surgical',
    text: 'Which of the following services is NOT included under hospitalization expense coverage?',
    choices: {
      A: 'surgical fees',
      B: 'daily room and board',
      C: 'intensive care',
      D: 'miscellaneous expenses',
    },
    correct: 'A',
    explanation:
      "Surgical fees are covered under a separate Surgical Expense policy. Hospitalization Expense covers room/board, ICU, hospital miscellaneous (lab, x-ray, drugs).\n\nExam key: Hospital = building/stay; Surgical = doctor's fees.",
  },
  {
    id: 'q8-fcra-inspection',
    text: 'Which Federal law allows an insurer to obtain an inspection report on a potential insured?',
    choices: {
      A: 'Fair Credit Reporting Act',
      B: 'Medical Information Bureau Act',
      C: 'Medical Information Act',
      D: 'Freedom of Information Act',
    },
    correct: 'A',
    explanation:
      'FCRA governs how insurers obtain consumer/inspection reports. Requires written notice to applicant, right to copy, right to know about adverse decisions, ability to dispute inaccuracies.\n\nExam key: FCRA = governs inspection/consumer reports. Insurer must notify applicant.',
  },
  {
    id: 'q8-key-person-abc-owner',
    text: 'C is a key employee at ABC Incorporated. If a Key Employee life policy is purchased on her life, which of these statements would be true?',
    choices: {
      A: 'ABC is the policyowner, C is the insured, and her husband is the beneficiary',
      B: 'C is the policyowner, the insured, and the beneficiary',
      C: 'C is the policyowner and the insured, and ABC is the beneficiary',
      D: 'ABC is the policyowner, C is the insured, and ABC is the beneficiary',
    },
    correct: 'D',
    explanation:
      'Key Person life: business owns, pays premiums, is beneficiary. Employee is just the insured life. Premiums not deductible; death benefit tax-free to business.\n\nExam key: Key Person = business owns/pays/collects; employee is insured.',
  },
  {
    id: 'q8-renewable-term-insured',
    text: 'Who has the option to renew a Renewable Term policy?',
    choices: {
      A: 'Agency',
      B: 'Insured',
      C: 'Agent',
      D: 'Beneficiary',
    },
    correct: 'B',
    explanation:
      'Renewable Term gives the insured the right to renew without evidence of insurability. Premium increases at each renewal based on attained age.\n\nExam key: Renewable Term = insured\'s option, no health questions, premiums rise.',
  },
  {
    id: 'q8-substandard-extra-premium',
    text: "An underwriter determines that a life insurance applicant's risk should be reclassified due to a health issue. This policy may be issued with a(n):",
    choices: {
      A: 'extended Contestable period',
      B: 'extra premium',
      C: 'Concealment clause',
      D: 'exclusion for the medical condition',
    },
    correct: 'B',
    explanation:
      'Substandard options: rate up (extra premium), exclusion rider, lower face amount, or decline. Extra premium is the most common.\n\nExam key: Substandard = higher premium (rate up) or exclusion or decline.',
  },
  {
    id: 'q8-marital-deduction',
    text: 'Rick recently died and left behind an individual IRA account in his name. His widow was forwarded the balance of the IRA. The widow qualifies for the:',
    choices: {
      A: 'capital gains tax rate',
      B: 'death benefits',
      C: 'marital deduction',
      D: 'Section 1035 exchange',
    },
    correct: 'C',
    explanation:
      'Marital deduction = unlimited tax-free transfer of assets between spouses at death. Widow can also roll the IRA into her own to defer taxes.\n\nExam key: Spousal inheritance = marital deduction (unlimited, estate tax-free).',
  },
  {
    id: 'q8-grace-period-premium-deduct',
    text: 'M had an annual life insurance premium payment due January 1. She died January 10 without making the premium payment. What action will the insurer take?',
    choices: {
      A: 'Subtract past due premium from cash value',
      B: "Collect premium from M's estate",
      C: 'Deny the claim',
      D: 'Pay face amount minus the past due premium',
    },
    correct: 'D',
    explanation:
      'Death within the 31-day grace period = claim must be paid. Unpaid premium is deducted from the death benefit.\n\nExam key: Death in grace period = paid minus past-due premium.',
  },
  {
    id: 'q8-ltc-goi-buy-more',
    text: 'The guarantee of insurability option provides a long-term care policyowner the ability to:',
    choices: {
      A: 'buy additional coverage at a later date',
      B: "add the insured's spouse at a later date",
      C: 'pay the same premium for life',
      D: 'cancel the policy at anytime',
    },
    correct: 'A',
    explanation:
      'GOI rider lets the policyowner buy additional coverage at specified future dates without evidence of insurability. Premium based on attained age.\n\nExam key: GOI = buy more coverage later, no health questions.',
  },
];

const CHAPTER_9: SampleQuestion[] = [
  {
    id: 'q9-incontestable-contest-period',
    text: 'The incontestable clause allows an insurer to:',
    choices: {
      A: 'contest a claim during the Contestable Period',
      B: 'disallow a change of beneficiary during the Contestable period',
      C: 'disallow a change of ownership throughout the Contestable period',
      D: 'contest a claim at anytime if the cause of death was accidental',
    },
    correct: 'A',
    explanation:
      'Insurer can contest based on misrepresentation only during the contestable period (typically 2 years). After that = incontestable; insurer must pay. Fraud may be contestable beyond 2 years in some states.\n\nExam key: Incontestable = 2 years; insurer locked in afterward.',
  },
  {
    id: 'q9-dividend-interest-taxed',
    text: 'How are policyowner dividends treated in regards to income tax?',
    choices: {
      A: 'Taxed as ordinary income',
      B: 'Dividends are not taxable',
      C: 'Interest on accumulations is taxed',
      D: 'Taxed as capital gains',
    },
    correct: 'C',
    explanation:
      'Dividends are generally a return of premium and not taxable. BUT interest earned on accumulated dividends IS taxable, and dividends exceeding total premiums paid are also taxable.\n\nExam key: Dividends generally not taxable; interest on accumulations IS taxed; excess over premiums = taxable.',
  },
  {
    id: 'q9-equity-indexed-not-flexible',
    text: 'All of these statements about Equity Indexed Life Insurance are correct, EXCEPT:',
    choices: {
      A: 'Tied to an equity index such as the S&P 500',
      B: "If the gain on the index goes beyond the policy's minimum rate of return, the cash value will mirror that of the index",
      C: 'The premiums can be lowered or raised, based on investment performance',
      D: 'Cash value has a minimum rate of accumulation',
    },
    correct: 'C',
    explanation:
      'Equity Indexed Life has FIXED premiums — not flexible (that\'s Universal Life). Cash value is linked to an index with a floor (minimum) and ceiling (cap).\n\nExam key: Equity Indexed Life = fixed premiums + indexed cash value with floor and cap.',
  },
  {
    id: 'q9-policy-loan-provision',
    text: 'A provision in a life insurance policy that pays the policyowner an amount that does not surpass the guaranteed cash value is called the:',
    choices: {
      A: 'Policy Loan provision',
      B: 'Accelerated Benefits provision',
      C: 'Consideration clause',
      D: 'Automatic Premium Loan provision',
    },
    correct: 'A',
    explanation:
      'Policy Loan provision = borrow up to (not exceeding) the guaranteed cash value at a stated rate. Unpaid balance + interest are deducted from the death benefit.\n\nExam key: Policy Loan = borrow against cash value, capped at cash value.',
  },
  {
    id: 'q9-di-employer-paid-taxable',
    text: "T is receiving $3,000/month from a Disability Income policy in which T's employer had paid the premiums. How are the $3,000 benefit payments taxable?",
    choices: {
      A: 'Benefits are tax-free to T',
      B: 'Benefits are taxable to T',
      C: "Benefits are taxable to T's employer",
      D: 'Benefits are partially taxable to T',
    },
    correct: 'B',
    explanation:
      'Employer paid premiums = benefits fully taxable to employee. Employee paid premiums with after-tax dollars = benefits tax-free. Shared = partially taxable.\n\nExam key: Who paid the premiums determines who pays the tax on benefits.',
  },
  {
    id: 'q9-patriot-act-10000',
    text: 'Under the USA Patriot Act, insurers are required to report receipt of cash payments in excess of:',
    choices: {
      A: '$10,000',
      B: '$5,000',
      C: '$2,500',
      D: '$7,500',
    },
    correct: 'A',
    explanation:
      'USA Patriot Act requires insurers to report cash payments over $10,000 to FinCEN. Structuring (breaking up payments to avoid reporting) is also illegal.\n\nExam key: $10,000 = reporting threshold (same as IRS/bank CTR).',
  },
  {
    id: 'q9-mib-not-notify-declination',
    text: 'A prepaid application for individual Disability Income insurance was recently submitted to an insurer. When the insurer received the Medical Information Bureau (MIB) report, the report showed that the applicant had suffered a stroke 18 months ago, something that was not disclosed on the application. Which of the following actions would the insurance company NOT take?',
    choices: {
      A: 'Send a notice to the agent that the applicant was declined',
      B: 'Send a notice to the applicant that the coverage was declined',
      C: 'Send a notice to the MIB that the applicant was declined',
      D: 'Send the initial premium back to the applicant',
    },
    correct: 'C',
    explanation:
      'MIB receives reports of significant medical conditions, NOT underwriting decisions. Declinations are never reported to MIB.\n\nExam key: MIB = medical info only, NOT declinations.',
  },
  {
    id: 'q9-major-medical-2100',
    text: 'Q is hospitalized for 3 days and receives a bill for $10,100. Q has a Major Medical policy with a $100 deductible and 80/20 coinsurance. How much will Q be responsible for paying on this claim?',
    choices: {
      A: '$100',
      B: '$2,020',
      C: '$2,000',
      D: '$2,100',
    },
    correct: 'D',
    explanation:
      '$10,100 − $100 deductible = $10,000. Insurer pays 80% ($8,000), insured pays 20% ($2,000) + deductible ($100) = $2,100.\n\nExam key: Total OOP = deductible + coinsurance share of remainder.',
  },
  {
    id: 'q9-exclusion-provision',
    text: 'In a life insurance policy, which feature states that the policy will not cover certain risks?',
    choices: {
      A: 'Ejection',
      B: 'Exclusion',
      C: 'Expulsion',
      D: 'Exception',
    },
    correct: 'B',
    explanation:
      'Exclusions identify risks, conditions, or causes specifically not covered. Common life exclusions: war, aviation (non-commercial), suicide (within 2 years), felony participation.\n\nExam key: Exclusion = carved-out, never covered.',
  },
  {
    id: 'q9-principal-not-authority',
    text: 'Which of these is NOT a type of agent authority?',
    choices: {
      A: 'Principal',
      B: 'Apparent',
      C: 'Express',
      D: 'Implied',
    },
    correct: 'A',
    explanation:
      'Three types: Express (stated in contract), Implied (reasonably assumed), Apparent (public perception). Principal = the insurer that grants authority, not a type of authority.\n\nExam key: Three authorities = Express, Implied, Apparent. Principal = the boss.',
  },
  {
    id: 'q9-delivery-except-hipaa',
    text: 'Upon delivery of a rated life insurance policy, the Producer must obtain each of the following, EXCEPT:',
    choices: {
      A: 'Signed statement of Good Health',
      B: 'Signed amendment',
      C: 'The required premium',
      D: 'Signed HIPAA disclosure',
    },
    correct: 'D',
    explanation:
      'HIPAA disclosure is obtained at application, not delivery. At delivery: statement of good health (if no premium at app), signed amendment (if policy issued differently), required premium (if not collected at app).\n\nExam key: HIPAA = application time. Delivery = good health, amendment, premium.',
  },
  {
    id: 'q9-conditional-receipt-coverage',
    text: 'T is given a receipt after completing a life insurance application and paying the initial premium. Under this situation, T\'s coverage is',
    choices: {
      A: "conditional, depending on the insurer's underwriting guidelines",
      B: 'guaranteed, no matter what is found during the underwriting process',
      C: 'effective upon completion of the Free-Look period',
      D: 'effective upon delivery of the policy',
    },
    correct: 'A',
    explanation:
      'Conditional receipt = interim coverage from app date, subject to underwriting approval as a standard risk. If approved, backdates to app date. If declined, premium refunded.\n\nExam key: Conditional receipt = covered if underwriting approves.',
  },
  {
    id: 'q9-insuring-clause-promise-pay',
    text: "In a Life insurance contract, an insurance company's promise to pay stated benefits is called the:",
    choices: {
      A: 'Consideration clause',
      B: 'Insuring clause',
      C: "Owner's rights",
      D: 'Entire Contract',
    },
    correct: 'B',
    explanation:
      "Insuring clause = the insurer's promise to pay the death benefit in exchange for premium. Consideration = what each party gives. Entire Contract = policy + application = complete contract.\n\nExam key: Insuring clause = insurer's core promise to pay.",
  },
  {
    id: 'q9-limited-pay-life',
    text: "Life insurance that covers an insured's whole life with level premiums paid over a limited time is called:",
    choices: {
      A: 'Joint Life',
      B: 'Limited Pay Life',
      C: 'Renewable Term',
      D: 'Adjustable Life',
    },
    correct: 'B',
    explanation:
      "Limited Pay Life = WL where premiums are paid over a shorter period (10/20/65), but coverage lasts for life. Premiums are higher than straight WL. Policy is fully paid-up after the payment period.\n\nExam key: Limited Pay = short premium period + lifetime coverage.",
  },
  {
    id: 'q9-part-b-not-inpatient',
    text: 'Medicare Part B does NOT cover:',
    choices: {
      A: 'physician and surgeon services',
      B: 'medical equipment rental',
      C: 'occupational therapy',
      D: 'inpatient hospital services',
    },
    correct: 'D',
    explanation:
      'Part A = inpatient (hospital, SNF, hospice, home health). Part B = outpatient (physician, equipment, therapy, preventive).\n\nExam key: Part A = Admitted (inpatient); Part B = Bills (outpatient/doctor).',
  },
  {
    id: 'q9-time-of-payment-not-alter',
    text: 'Which of the following actions will an insurance company most likely NOT take if an applicant, who has diabetes, applies for a Disability Income policy?',
    choices: {
      A: 'Issue the policy with an altered Time of Payment of Claims provision',
      B: 'Issue the policy with a rating',
      C: 'Decline the applicant',
      D: 'Issue the policy with a diabetes exclusion',
    },
    correct: 'A',
    explanation:
      'Time of Payment of Claims is a mandatory provision and cannot be altered by the insurer. Insurer CAN: rate up, decline, add exclusion rider.\n\nExam key: Mandatory provisions = untouchable. Underwriting affects premiums/scope, not required clauses.',
  },
  {
    id: 'q9-joint-life-first',
    text: 'What type of life policy covers two lives and pays the face amount after the first one dies?',
    choices: {
      A: 'Family Income Policy',
      B: 'Joint Life Policy',
      C: 'Group Life',
      D: 'Last Survivor Policy',
    },
    correct: 'B',
    explanation:
      "Joint Life pays on the FIRST insured's death. Last Survivor pays on the LAST death. Joint Life is often used for business buy-sell; Last Survivor for estate planning.\n\nExam key: Joint = first to die; Survivorship = last to die.",
  },
  {
    id: 'q9-80-vested-20-forfeit',
    text: 'Tom has a qualified retirement plan with his employer that is currently considered to be 80% "vested". How can this be interpreted?',
    choices: {
      A: '80% of the funds are invested in a separate account',
      B: "If Tom's employment is terminated, 80% of the funds would be forfeited",
      C: '20% of the funds are subject to taxes',
      D: "If Tom's employment is terminated, 20% of the funds would be forfeited",
    },
    correct: 'D',
    explanation:
      "Vesting = ownership of employer contributions. 80% vested = keep 80% of employer contributions, forfeit 20% if leaving. Employee's own contributions are always 100% vested.\n\nExam key: Vested % = what you KEEP of employer contributions.",
  },
  {
    id: 'q9-modified-whole-life',
    text: 'K buys a policy where the premium stays fixed for the first 5 years. The premium then increases in year 6 and stays level thereafter, all the while the death benefit remains the same. What kind of policy is this?',
    choices: {
      A: 'Adjustable Life',
      B: 'Variable Life',
      C: 'Modified Whole Life',
      D: 'Graded Premium Whole Life',
    },
    correct: 'C',
    explanation:
      'Modified Whole Life = lower premium for an initial period (3-5 years), then a single step up to a higher level premium for life. Graded = gradual increases over more years.\n\nExam key: Modified = one step up; Graded = gradual staircase.',
  },
  {
    id: 'q9-survivorship-policy',
    text: 'What type of life policy covers two people and pays upon the death of the last insured?',
    choices: {
      A: 'Survivorship',
      B: 'Joint',
      C: 'Adjustable',
      D: 'Shared',
    },
    correct: 'A',
    explanation:
      'Survivorship (Last Survivor) pays only after both insureds die. Used for estate planning — covers estate tax due on the second death.\n\nExam key: Survivorship = both must die first; estate planning tool.',
  },
  {
    id: 'q9-key-person-architect',
    text: 'An architecture firm would stand to lose a lot of money in the event of the death of its project manager. Which type of policy should the firm purchase on its project manager?',
    choices: {
      A: 'Key Person insurance',
      B: 'Executive insurance',
      C: 'Universal life insurance',
      D: 'Graded insurance',
    },
    correct: 'A',
    explanation:
      'Key Person policy: business owns/pays/is beneficiary; key employee is the insured. Protects the business from financial loss.\n\nExam key: Business + critical employee = Key Person insurance.',
  },
  {
    id: 'q9-conversion-provision',
    text: 'When a policyowner exchanges a term policy for a whole life policy without providing proof of good health, which of these apply?',
    choices: {
      A: 'Incontestable period',
      B: 'Conversion provision',
      C: 'Extended term option',
      D: '1035 Exchange',
    },
    correct: 'B',
    explanation:
      'Conversion provision = convertible term policyholder converts to permanent without evidence of insurability. Premium is based on attained age at conversion.\n\nExam key: Term to permanent without health proof = conversion provision.',
  },
  {
    id: 'q9-irrevocable-beneficiary-consent',
    text: 'T is the policyowner for a Life Insurance policy with an Irrevocable beneficiary designation. If T wishes to change the beneficiary, T must obtain permission from the',
    choices: {
      A: 'agent',
      B: 'Commissioner of Insurance',
      C: 'beneficiary',
      D: 'payor',
    },
    correct: 'C',
    explanation:
      "Irrevocable beneficiary has a vested interest. Policyowner needs the beneficiary's written consent to change beneficiary, take loans, surrender, or assign.\n\nExam key: Irrevocable beneficiary = locks the policy; consent required for changes.",
  },
  {
    id: 'q9-gir-future-dates',
    text: 'When does a Guaranteed Insurability Rider allow the insured to buy additional coverage?',
    choices: {
      A: 'at future dates specified in the contract with no evidence of insurability required',
      B: 'at future dates specified in the contract with proof of insurability required',
      C: 'at any time while policy is active',
      D: '10 year increments',
    },
    correct: 'A',
    explanation:
      'GI Rider = buy more coverage at predetermined dates (age milestones or life events) without insurability proof. Missed option = forfeited.\n\nExam key: GI Rider = specified dates, no health questions, miss it and lose it.',
  },
  {
    id: 'q9-contracts-of-adhesion',
    text: 'Insurance policies are offered on a "take it or leave it" basis, which make them:',
    choices: {
      A: 'Aleatory Contracts',
      B: 'Conditional Contracts',
      C: 'Unilateral Contracts',
      D: 'Contracts of Adhesion',
    },
    correct: 'D',
    explanation:
      'Adhesion = drafted entirely by one party, presented take-it-or-leave-it. Aleatory = unequal exchange. Conditional = conditions for payment. Unilateral = only insurer makes an enforceable promise.\n\nExam key: Adhesion = no negotiation, stuck with their terms.',
  },
  {
    id: 'q9-child-term-rider',
    text: 'S is covered by a whole life policy. Which insurance product can cover his children?',
    choices: {
      A: 'Assignment provision',
      B: 'Child term rider',
      C: 'Payor benefit',
      D: 'Accelerated benefit rider',
    },
    correct: 'B',
    explanation:
      'Child Term Rider adds term coverage for all eligible children under one flat premium. Convertible to permanent at age limit, no evidence needed.\n\nExam key: Child Term Rider = covers all kids under one rider.',
  },
  {
    id: 'q9-insuring-clause-health-services',
    text: 'Which of the following health insurance policy provisions specifies the health care services a policy will provide?',
    choices: {
      A: 'Consideration clause',
      B: 'Insuring clause',
      C: 'Benefit clause',
      D: 'Usual, Customary, and Reasonable clause',
    },
    correct: 'B',
    explanation:
      'Insuring clause identifies the specific services/conditions covered by the policy. Benefit clause = dollar amounts payable. UCR limits reimbursement to usual/customary/reasonable.\n\nExam key: Insuring clause (health) = what services are covered; Benefit clause = dollar amounts.',
  },
  {
    id: 'q9-variable-wl-both',
    text: 'Variable Whole Life Insurance can be described as:',
    choices: {
      A: 'the insurance company assumes the investment risk',
      B: 'an insurance product only',
      C: 'both an insurance and securities product',
      D: 'a securities product only',
    },
    correct: 'C',
    explanation:
      'Variable WL = separate account investments + life coverage. POLICYOWNER bears investment risk. Requires state insurance license + FINRA registration.\n\nExam key: Variable = dual product (insurance + securities) = dual licensing.',
  },
  {
    id: 'q9-beneficiary-no-signature',
    text: 'Who is NOT required to sign a health insurance application?',
    choices: {
      A: 'Producer',
      B: 'Beneficiary',
      C: 'Adult insured',
      D: 'Policyowner',
    },
    correct: 'B',
    explanation:
      'Beneficiary has no contractual role in the application. Required signatures: producer, adult insured, policyowner (if different from insured).\n\nExam key: Beneficiary just receives benefits — no signature on the application.',
  },
  {
    id: 'q9-noncancellable-di',
    text: 'A Disability Income policy that only the policyowner can terminate and which the rates will never go up is considered to be',
    choices: {
      A: 'Optionally Renewable',
      B: 'Guaranteed Renewable',
      C: 'Noncancellable',
      D: 'Cancellable',
    },
    correct: 'C',
    explanation:
      "Noncancellable = insurer can't cancel, can't raise rates, can't change provisions. Strongest possible. Guaranteed Renewable = can't cancel but rates can rise by class.\n\nExam key: Noncancellable = locked rates AND continuation; Guaranteed Renewable = continuation only.",
  },
  {
    id: 'q9-adjustable-life-flexible',
    text: 'Which of these needs is satisfied by Adjustable Life insurance?',
    choices: {
      A: "Insured's need for flexible premiums",
      B: "Insured's need for flexible nonforfeiture options",
      C: "Insured's need for level death benefits",
      D: "Insured's need for level premiums",
    },
    correct: 'A',
    explanation:
      'Adjustable Life = flexible premiums, flexible face amount, flexible premium payment period, flexible policy period (term vs. permanent).\n\nExam key: Adjustable Life = most flexible traditional policy.',
  },
];

const CHAPTER_10: SampleQuestion[] = [
  {
    id: 'q10-boe-utilities-rent',
    text: 'A Business Overhead Expense policy would cover which of the following if a business owner becomes disabled?',
    choices: {
      A: 'Contributions to employee retirement plans',
      B: 'Meals and entertainment',
      C: "Owner's salary",
      D: 'Utilities and office rent',
    },
    correct: 'D',
    explanation:
      "BOE = fixed business overhead (rent, utilities, employee salaries, insurance premiums, leased equipment). Does NOT cover owner's salary (separate DI for that).\n\nExam key: BOE = lights on + staff paid; not owner's personal income.",
  },
  {
    id: 'q10-level-premium-fixed',
    text: 'A level premium indicates:',
    choices: {
      A: 'the premium is fixed for the entire duration of the contract',
      B: 'the premium is fixed for a period stated in the contract, then becomes variable',
      C: 'the premium can only be changed with the consent of the insurer',
      D: "the premium stays level until the policy's renewal date",
    },
    correct: 'A',
    explanation:
      'Level premium = same amount the entire life of the policy. Early years overpay relative to risk; later years underpay. Overpayment builds cash value in permanent policies.\n\nExam key: Level = flat line, same amount every year.',
  },
  {
    id: 'q10-convertible-term-cost',
    text: 'C is trying to determine whether to convert her convertible term life policy to whole life insurance using her original age or attained age. What factor would affect her decision the most?',
    choices: {
      A: 'The assignment of ownership',
      B: 'The nonforfeiture options',
      C: 'The contestable period',
      D: 'The cost',
    },
    correct: 'D',
    explanation:
      'Original age conversion = lower ongoing premium but requires back-payment of premium difference. Attained age = higher premium but no back-payment. Purely a financial trade-off.\n\nExam key: Original age cheaper long-term + back-payment; attained age higher premium + no catch-up.',
  },
  {
    id: 'q10-disability-buy-sell',
    text: 'Which contract permits the remaining partners to buy-out the interest of a disabled business partner?',
    choices: {
      A: 'Business Continuation',
      B: 'Disability Buy-Sell',
      C: 'Key Person Disability',
      D: 'Group Disability',
    },
    correct: 'B',
    explanation:
      "Disability Buy-Sell funds the partner buyout when one becomes permanently disabled. Key Person Disability reimburses the business for financial loss (no ownership transfer).\n\nExam key: Disability Buy-Sell = ownership transfers; Key Person = business compensated.",
  },
  {
    id: 'q10-trustee-group-employee',
    text: 'Under a trustee group life policy, who would be eligible for a certificate of coverage?',
    choices: {
      A: 'Employer',
      B: 'Corporation',
      C: 'Labor union',
      D: 'Employee',
    },
    correct: 'D',
    explanation:
      'Trustee group = trust holds master policy. Employees (union members) get certificates of coverage. Taft-Hartley structure.\n\nExam key: Group life individuals always get certificates regardless of who holds the master policy.',
  },
  {
    id: 'q10-change-occupation-less-hazard',
    text: 'T owns an Accident & Health policy and notifies her insurance company that she has chosen a less hazardous occupation. Under the Change of Occupation provision, which of the following actions may her insurance company take?',
    choices: {
      A: "Decrease her policy's coverage amount",
      B: "Increase her policy's coverage amount",
      C: 'Nothing',
      D: 'Allow her to take a tax deduction on unearned premiums',
    },
    correct: 'B',
    explanation:
      'Less hazardous = better risk. Insurer may increase coverage for same premium OR reduce premium for same coverage. More hazardous = reduce coverage to reflect risk.\n\nExam key: Less hazardous = more coverage/lower premium; more hazardous = reduced coverage.',
  },
  {
    id: 'q10-claim-forms-any-form',
    text: "What should an insured do if the insurer does not send claims forms within the time period set forth in a health policy's Claims Forms provision?",
    choices: {
      A: 'Wait for the claim form to arrive',
      B: 'File a lawsuit',
      C: 'Resubmit the request for a claim form',
      D: 'Submit the claim in any form',
    },
    correct: 'D',
    explanation:
      "Claim Forms provision: insurer must provide forms within 15 days. If they don't, the insured may submit the claim in any written form. No penalty on the insured.\n\nExam key: No forms in 15 days = submit in any written form.",
  },
  {
    id: 'q10-gi-rider-di',
    text: 'What does a Guaranteed Insurability rider provide a Disability Income policyowner?',
    choices: {
      A: 'The guarantee that the policy will never be cancelled',
      B: 'The ability to periodically increase the amount of coverage only with evidence of insurability',
      C: 'The guarantee that the premiums will never increase',
      D: 'The ability to periodically increase the amount of coverage without evidence of insurability',
    },
    correct: 'D',
    explanation:
      'GI rider on DI = increase monthly benefit at specified intervals without proving good health. Premium based on attained age. Miss the option = forfeit it.\n\nExam key: GI rider DI = scheduled benefit increases, no health questions.',
  },
  {
    id: 'q10-add-primary-survives',
    text: "P and Q are married and have three children. P is the primary beneficiary on Q's Accidental Death and Dismemberment (AD&D) policy and Q's sister R is the contingent beneficiary. P, Q, and R are involved in a car accident and Q and R are killed instantly. The Accidental Death benefits will be paid to:",
    choices: {
      A: 'P only',
      B: "Q's estate",
      C: "P and Q's estate",
      D: "R's estate",
    },
    correct: 'A',
    explanation:
      "Primary beneficiary (P) is alive and collects the death benefit. Contingent (R) only triggers if primary cannot collect. R's death is irrelevant since P survived.\n\nExam key: Contingent activates only if primary unavailable; primary survives = contingent never matters.",
  },
  {
    id: 'q10-dental-not-income',
    text: 'Dental care coverage is designed to cover the costs of all of the following EXCEPT:',
    choices: {
      A: 'Orthodontia',
      B: 'Preventative care',
      C: 'loss of income',
      D: 'Oral Surgery',
    },
    correct: 'C',
    explanation:
      'Dental covers dental services only (preventive, basic restorative, oral surgery, orthodontia). Loss of income = Disability Income coverage.\n\nExam key: Dental = mouth only; income = DI policy.',
  },
  {
    id: 'q10-di-overseas',
    text: 'K becomes ill after traveling overseas and is unable to work for 3 months. What kind of policy would cover her loss of income?',
    choices: {
      A: 'Disability Income',
      B: 'Travel',
      C: 'Indemnity',
      D: 'Major Medical',
    },
    correct: 'A',
    explanation:
      'DI replaces lost income when can\'t work due to illness/injury. Foreign illness still qualifies if it meets the policy\'s disability definition. Pays a monthly benefit (typically 60-70% of pre-disability income).\n\nExam key: Can\'t work = lost income = DI policy.',
  },
  {
    id: 'q10-annuity-surrender-value',
    text: 'A contract owner terminates an annuity before the income payment period begins. The owner will then receive',
    choices: {
      A: 'the current contract surrender value',
      B: 'the premiums paid to date',
      C: 'nothing',
      D: 'half of the current surrender value',
    },
    correct: 'A',
    explanation:
      'Annuity surrendered during accumulation = current surrender value (accumulated value minus surrender charges). May owe ordinary income tax on gains + 10% penalty if under 59½.\n\nExam key: Surrender = cash value minus surrender charges.',
  },
  {
    id: 'q10-group-health-no-individual-policy',
    text: 'All of the following statements regarding group health insurance is true, EXCEPT:',
    choices: {
      A: 'A master contract is issued for the group',
      B: 'Premiums are usually determined by the claims experience of the group',
      C: 'Group health insurance premiums are typically lower than individual health insurance premiums',
      D: 'An individual policy is given to each member',
    },
    correct: 'D',
    explanation:
      'Group health = individuals get certificates of coverage, NOT individual policies. Master policy goes to the group sponsor.\n\nExam key: Group = one master + member certificates.',
  },
  {
    id: 'q10-insuring-clause-losses',
    text: 'The ________ clause identifies which losses resulting from an accident or sickness are insured by the policy.',
    choices: {
      A: 'Identification',
      B: 'Payment',
      C: 'Benefit',
      D: 'Insuring',
    },
    correct: 'D',
    explanation:
      "Insuring clause identifies what losses/conditions are covered. Defines what is and isn't covered under the contract.\n\nExam key: Insuring clause = the what-we-cover promise.",
  },
  {
    id: 'q10-consideration-pay-death-benefit',
    text: 'What is the consideration given by an insurer in the Consideration clause of a life policy?',
    choices: {
      A: "Promise to accept an insured's assignment of benefits",
      B: 'Promise to not raise premiums',
      C: 'Promise to pay a death benefit to a named beneficiary',
      D: 'Promise to never cancel coverage',
    },
    correct: 'C',
    explanation:
      'Consideration exchange: insured gives application + premium; insurer gives promise to pay the death benefit to the named beneficiary.\n\nExam key: Insurer\'s consideration = pay the death benefit.',
  },
  {
    id: 'q10-di-elimination-period',
    text: 'R becomes disabled and owns an individual Disability Income policy. When is R eligible to receive disability benefits?',
    choices: {
      A: 'Upon satisfying the elimination period requirement',
      B: 'Upon being examined by a physician',
      C: 'Upon being laid off from employer',
      D: 'Upon paying a deductible',
    },
    correct: 'A',
    explanation:
      'Elimination period = time the disability must continue before benefits begin (typical: 30/60/90/180 days). Like a time deductible. Longer EP = lower premium.\n\nExam key: DI benefits begin AFTER the elimination period is satisfied.',
  },
  {
    id: 'q10-preex-5-years-incontestable',
    text: 'A Disability Income policyowner recently submitted a claim for a chronic neck problem that has now resulted in total disability. The original neck injury occurred before the application was taken 5 years prior. The neck injury was never disclosed to the insurer at the time of application. How will the insurer handle this claim?',
    choices: {
      A: 'Claim will be paid and coverage will remain in force',
      B: 'Claim will be denied and coverage will be cancelled',
      C: 'Claim will be denied, the coverage cancelled, and all premiums paid will be refunded',
      D: 'Claim will be denied and coverage will remain in force',
    },
    correct: 'A',
    explanation:
      'After the 2-year contestable period, the policy becomes incontestable — insurer cannot deny or cancel for misrepresentation or concealment, even if the claim is related to the concealed condition. 5 years = past contestable.\n\nExam key: After 2 years = incontestable = claim paid, no rescission.',
  },
  {
    id: 'q10-guaranteed-renewable-nonpayment',
    text: 'Under a Guaranteed Renewable health insurance policy, the insurer',
    choices: {
      A: 'is permitted to require proof of insurability upon policy renewal',
      B: 'may cancel the policy for nonpayment only',
      C: 'may refuse to continue coverage upon policy renewal',
      D: 'will typically decrease the premium upon policy renewal',
    },
    correct: 'B',
    explanation:
      'Guaranteed Renewable = insurer must renew as long as premium is paid. Cancellation only for nonpayment. Rates can rise (by class). No insurability proof.\n\nExam key: Guaranteed Renewable = pay premium = stay covered; rates can rise.',
  },
  {
    id: 'q10-deferred-fixed-annuity',
    text: 'A 45 year-old woman won $100,000 in a scratch-off lottery ticket. She purchased an annuity that will pay her $1,500 per month beginning at age 60. Which of these annuities did this woman purchase?',
    choices: {
      A: 'Immediate annuity',
      B: 'Immediate Variable annuity',
      C: 'Deferred Fixed annuity',
      D: 'Variable annuity',
    },
    correct: 'C',
    explanation:
      'Deferred = payments begin in the future (age 60, 15 years out). Fixed = guaranteed set amount ($1,500/month).\n\nExam key: Deferred = later; Fixed = guaranteed amount.',
  },
  {
    id: 'q10-two-disabilities-march',
    text: 'Z owns a Disability Income policy with a 30-day Elimination period. Z contracts pneumonia that leaves him unable to work from January 1 until January 15. Z then becomes disabled from an accident on February 1 and the disability lasts until July 1 the same year. Z will become eligible to receive benefits starting on:',
    choices: {
      A: '1-Mar',
      B: '1-Jan',
      C: '1-Feb',
      D: '15-Jan',
    },
    correct: 'A',
    explanation:
      "First disability (Jan 1-15) = only 15 days, doesn't satisfy the 30-day EP. Second disability starts Feb 1 with a fresh 30-day EP = March 1 benefits begin.\n\nExam key: Separate unrelated disabilities = elimination period resets.",
  },
  {
    id: 'q10-di-primary-factor-wages',
    text: 'What is the primary factor that determines the benefits paid under a disability income policy?',
    choices: {
      A: 'Age',
      B: 'Wages',
      C: 'Type of occupation',
      D: 'Education level',
    },
    correct: 'B',
    explanation:
      'DI replaces income, so wages drive the benefit (typically 60-70% of pre-disability income). Insurers cap benefits relative to income to maintain the incentive to return to work.\n\nExam key: Wages = primary factor in DI benefit amount.',
  },
  {
    id: 'q10-di-war-exclusion',
    text: 'Disability policies do NOT normally pay for disabilities arising from which of the following?',
    choices: {
      A: 'Sickness',
      B: 'War',
      C: 'Accidents',
      D: 'Negligence',
    },
    correct: 'B',
    explanation:
      'War is a standard DI exclusion. Other exclusions: self-inflicted injuries, pre-existing conditions (during waiting period), criminal acts, sometimes normal pregnancy.\n\nExam key: War + self-inflicted + pre-existing = the big DI exclusions.',
  },
  {
    id: 'q10-variable-annuity-not-corp',
    text: 'Variable annuities may invest premiums in each of the following, EXCEPT:',
    choices: {
      A: "Insurer's corporate business account",
      B: 'Money Market securities',
      C: 'Junk bonds',
      D: 'Common Stock',
    },
    correct: 'A',
    explanation:
      "Variable annuity premiums go into a separate account, kept segregated from the insurer's general/corporate account. Can invest in money market, bonds, stocks, mutual fund-like sub-accounts.\n\nExam key: Variable = separate account; Fixed = general account. Never mix.",
  },
  {
    id: 'q10-time-of-payment-immediately',
    text: 'T sends proof of loss to her insurer for an acceptable medical expense claim under her individual Health Insurance policy. Upon receipt, the insurer must pay the benefits',
    choices: {
      A: 'immediately',
      B: 'within 6 months',
      C: "at the insurer's discretion",
      D: 'within 3 months',
    },
    correct: 'A',
    explanation:
      'Time of Payment of Claims (mandatory provision): once due proof of loss is received, benefits must be paid immediately. Periodic DI benefits = at least monthly.\n\nExam key: Proof received = pay immediately. Mandatory provision, cannot be altered.',
  },
  {
    id: 'q10-gio-rider-income-grows',
    text: 'A physician opens up a new practice and qualifies for a $7,000/month Disability Income policy. What rider would the physician add if he wants the ability to increase his policy benefit as his practice and income grow?',
    choices: {
      A: 'Extended Term rider',
      B: 'Cost of Living Adjustment rider',
      C: 'Guaranteed Insurability Option rider',
      D: 'Waiver of Premium rider',
    },
    correct: 'C',
    explanation:
      'GIO rider = increase monthly benefit at specified future dates as income grows, without evidence of insurability. COLA adjusts for inflation AFTER disability begins (different purpose).\n\nExam key: GIO = scheduled coverage increases as income grows; COLA = inflation-adjusted benefits during disability.',
  },
  {
    id: 'q10-annuity-liquidates-estate',
    text: 'Which type of contract liquidates an estate through recurrent payments?',
    choices: {
      A: 'Annuity',
      B: 'Whole life insurance',
      C: '401(k)',
      D: 'Universal life insurance',
    },
    correct: 'A',
    explanation:
      'Annuity = liquidates an estate via systematic payments. Life insurance = creates an estate at death. Opposite functions.\n\nExam key: Annuity = liquidates (spend down); Life = creates (builds up).',
  },
  {
    id: 'q10-ppo-is-managed-care',
    text: 'Which of these statements is INCORRECT regarding a Preferred Provider Organization (PPO)?',
    choices: {
      A: "PPO's are NOT a type of managed care systems",
      B: 'In-network PPO providers offer members better coverage of incurred expenses',
      C: "PPO's normally have more providers to chose from as compared to an HMO",
      D: 'Prices are negotiated in advance for PPO providers',
    },
    correct: 'A',
    explanation:
      'PPOs ARE managed care, like HMOs and POS. The incorrect statement is the answer.\n\nExam key: PPO = managed care + flexibility (no referral needed, can go out-of-network). HMO = managed care with restrictions.',
  },
  {
    id: 'q10-cobra-quitters-eligible',
    text: 'Which statement concerning the Consolidated Omnibus Budget Reconciliation Act of 1985 (COBRA) is INCORRECT?',
    choices: {
      A: 'Continued insurance coverage under COBRA must be paid for by the ex-employee',
      B: 'Continued insurance coverage under COBRA is available to dependents of deceased employees for up to 36 months',
      C: 'Continued insurance coverage under COBRA is available to terminated employees for up to 18 months',
      D: 'Continued insurance coverage under COBRA is not available to employees who quit their jobs',
    },
    correct: 'D',
    explanation:
      'COBRA IS available to employees who quit. Qualifying events include voluntary resignation, involuntary termination (except gross misconduct), reduction in hours, divorce, death of employee, dependent aging off.\n\nExam key: COBRA applies broadly — including voluntary quitters. Only gross misconduct disqualifies.',
  },
  {
    id: 'q10-hipaa-portability-limits',
    text: 'Which of the following statements BEST describes what HIPAA portability rules offer a person who decides to change from one group medical plan to another group plan?',
    choices: {
      A: 'Limits the preexisting condition exclusion period for late enrollees to 12 months',
      B: 'Requires that an employer offer health coverage',
      C: 'Guarantees coverage to new employees with pre-existing health conditions',
      D: 'Limits the ability of a new employer plan to exclude coverage for preexisting conditions',
    },
    correct: 'D',
    explanation:
      "HIPAA portability credits prior continuous coverage toward a new plan's pre-existing waiting period. Requires Certificate of Creditable Coverage from prior insurer. Does NOT mandate employer coverage or guarantee individual coverage.\n\nExam key: HIPAA portability = your prior coverage credit transfers, reducing/eliminating new plan's pre-existing exclusion.",
  },
  {
    id: 'q10-taft-hartley-negotiated',
    text: 'Taft-Hartley Trusts are also known as:',
    choices: {
      A: '501(c)(9)',
      B: 'Lodges',
      C: 'Negotiated Trusteeships',
      D: 'Trade associations',
    },
    correct: 'C',
    explanation:
      'Taft-Hartley Trusts (Negotiated Trusteeships) are multi-employer welfare arrangements via collective bargaining. Trust is the policyowner; members get certificates. Managed by joint employer/union board.\n\nExam key: Taft-Hartley = Negotiated Trusteeship = union/employer multi-employer trust.',
  },
  {
    id: 'q10-group-health-no-evidence',
    text: 'Under most group health insurance plans, which underwriting requirement applies to covered individuals?',
    choices: {
      A: 'Pre‑existing conditions are permanently excluded.',
      B: 'Evidence of insurability is generally not required.',
      C: 'Evidence of insurability is always required.',
      D: 'Medical underwriting is performed on each employee annually.',
    },
    correct: 'B',
    explanation:
      'Group health underwriting is done on the group as a whole, not individual members. No medical exam or health questions for individuals. Late enrollees may need to provide evidence.\n\nExam key: Group = underwrite the group, not individuals. Major advantage of group coverage.',
  },
];

export const SAMPLE_CHAPTERS: SampleChapter[] = [
  { name: 'Chapter 1', questions: CHAPTER_1 },
  { name: 'Chapter 2', questions: CHAPTER_2 },
  { name: 'Chapter 3', questions: CHAPTER_3 },
  { name: 'Chapter 4', questions: CHAPTER_4 },
  { name: 'Chapter 5', questions: CHAPTER_5 },
  { name: 'Chapter 6', questions: CHAPTER_6 },
  { name: 'Chapter 7', questions: CHAPTER_7, source: 'exam2' },
  { name: 'Chapter 8', questions: CHAPTER_8, source: 'exam2' },
  { name: 'Chapter 9', questions: CHAPTER_9, source: 'exam2' },
  { name: 'Chapter 10', questions: CHAPTER_10, source: 'exam2' },
];
