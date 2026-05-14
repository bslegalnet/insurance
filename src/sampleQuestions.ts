import type { Question } from './types';

type SampleQuestion = Omit<Question, 'chapterId'>;

export type SampleChapter = {
  name: string;
  questions: SampleQuestion[];
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

export const SAMPLE_CHAPTERS: SampleChapter[] = [
  { name: 'Chapter 1', questions: CHAPTER_1 },
  { name: 'Chapter 2', questions: CHAPTER_2 },
  { name: 'Chapter 3', questions: CHAPTER_3 },
  { name: 'Chapter 4', questions: CHAPTER_4 },
  { name: 'Chapter 5', questions: CHAPTER_5 },
  { name: 'Chapter 6', questions: CHAPTER_6 },
];
