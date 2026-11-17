// Tarot essay plans: one spread per essay. Built 18 Nov 2026.
// grade: best | ok | weak. Cards are v12 card numbers. sup keys are main-card numbers.
// model: spoken model essay. f = spread position (i, c, m0, m0s0...), k = cue (card invocation) or say, a = [group, item] authorities cited.
window.TAROT_TITLES = {"1.1": "Can Parliament do anything?", "1.2": "Entrenchment", "1.3": "Late writs (Simpson)", "1.4": "Privilege shield (Prebble)", "1.5": "Courts can't stop a Bill (Westco)", "1.6": "Declarations (Taylor)", "1.7": "Sources of the constitution", "1.8": "Voting at 16 (Make It 16)", "1.9": "Passing a Bill", "1.10": "Conventions", "1.11": "Written constitution?", "1.12": "Party-hopping", "2.1": "Rule of law", "2.2": "No suspending law (Fitzgerald)", "2.3": "Express powers only (Payn)", "2.4": "Defective warrant (Dotcom)", "2.5": "Lockdown (Borrowdale)", "2.6": "Fettering (Christiansen)", "2.7": "The principles lens", "2.8": "Separation of powers", "3.1": "Grounds of review (GCHQ)", "3.2": "Deference", "3.3": "Contracts (Lab Tests)", "3.4": "Ranking (Univ v TEC)", "3.5": "Remedies", "3.6": "Should courts stay out?", "3.7": "Review checklist", "4.1": "Reading consistently (s 6)", "4.2": "Six steps (Hansen)", "4.3": "Family carers (Atkinson)", "4.4": "Prisoner's wig (Smith)", "4.5": "No retrospective penalty (Pora)", "4.6": "Who NZBORA binds", "4.7": "Prisoner voting 2025", "4.8": "Justified limits (MIQ)", "5.1": "Unreasonable search (Jefferies)", "5.2": "Excluding evidence", "5.3": "Compensation (Baigent)", "5.4": "Arrest rights (Noort)", "6.1": "International law ladder", "6.2": "Imperial law", "6.3": "No shield (Air Line Pilots)", "6.4": "Children in removal (Tavita)", "6.5": "Read to fit (Sellers)", "6.6": "Refugees & security (Zaoui)", "6.7": "Treaty-making process", "7.1": "Waitangi Tribunal", "7.2": "Lands case", "7.3": "Treaty clause (Trans-Tasman)", "7.4": "Settlements (NWO 2018)", "7.5": "Tikanga evidence (NWO 2022)", "7.6": "Two texts", "7.7": "Who defines principles?", "8.1": "Customary fishing (Te Weehi)", "8.2": "Foreshore (Ngāti Apa)", "8.3": "Burial (Takamore)", "8.4": "Tikanga & common law (Ellis)", "8.5": "Climate case & 2026 Act", "8.6": "Marine title", "8.7": "Three routes for tikanga", "9.1": "Governor-General", "9.2": "Ministers must be MPs", "9.3": "Public money", "9.4": "Ombudsmen", "9.5": "Official information", "9.6": "Privacy & whistleblowing", "9.7": "Reading statutes", "9.8": "Judicial independence", "9.9": "What a court is (Tangiora)", "9.10": "Officers of Parliament", "9.11": "After the election", "9.12": "Courts & declarations"};
window.SPREADS = [
 {
  "id": "smith",
  "essay": "P1",
  "title": "Smith v Fonterra and the 2026 Act",
  "prompt": "The Climate Change Response (Tort Liability) Amendment Act 2026 bars tort claims for emissions harm and ends the pending Smith v Fonterra proceedings. Assess it against parliamentary supremacy, separation of powers and the rule of law.",
  "intro": [
   [
    "2.7",
    "frame"
   ],
   [
    "8.5",
    "the facts"
   ]
  ],
  "concl": [
   "1.11",
   "limits are political"
  ],
  "mains": [
   {
    "card": "1.1",
    "cue": "",
    "sup": [
     [
      "1.5",
      "no court can question it"
     ]
    ]
   },
   {
    "card": "2.8",
    "cue": "",
    "sup": [
     [
      "1.10",
      "Clyde Dam convention"
     ],
     [
      "8.4",
      "closed a common-law route"
     ]
    ]
   },
   {
    "card": "2.1",
    "cue": "access to courts",
    "sup": [
     [
      "4.5",
      "by analogy"
     ],
     [
      "4.3",
      "2013 precedent"
     ]
    ]
   },
   {
    "card": "3.2",
    "cue": "polycentric policy",
    "sup": []
   }
  ],
  "auth": [
   [
    "The facts",
    0,
    [
     [
      "Smith v Fonterra Co-operative Group Ltd [2024] NZSC 5",
      "sent to trial"
     ],
     [
      "Climate Change Response (Tort Liability) Amendment Act 2026",
      "the override"
     ],
     [
      "Climate Change Response Act 2002 s 271",
      "tort bar"
     ],
     [
      "Sch 1AA cl 53 (check)",
      "Smith's case"
     ]
    ]
   ],
   [
    "Sovereignty",
    1,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 4",
      "no striking down"
     ],
     [
      "Westco Lagan Ltd v Attorney-General [2001] 1 NZLR 40 (HC)",
      "can't stop a Bill"
     ]
    ]
   ],
   [
    "Separation of powers",
    2,
    [
     [
      "Clutha Development (Clyde Dam) Empowering Act 1982",
      "overrode tribunal"
     ],
     [
      "Ellis v R [2022] NZSC 114",
      "tikanga in common law"
     ]
    ]
   ],
   [
    "Rule of law",
    3,
    [
     [
      "R v Pora [2001] 2 NZLR 37 (CA)",
      "minimum term quashed"
     ],
     [
      "Criminal Justice Act 1985 s 4(2)",
      "no heavier penalty"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 25(g)",
      "lesser penalty"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 26(1)",
      "no retrospective offence"
     ],
     [
      "Ministry of Health v Atkinson [2012] NZCA 184",
      "family carers"
     ],
     [
      "New Zealand Public Health and Disability Amendment Act 2013",
      "barred complaints"
     ],
     [
      "Regulatory Standards Act 2025 s 9 (check)",
      "principles"
     ],
     [
      "Regulatory Standards Act 2025 s 23 (check)",
      "no rights"
     ],
     [
      "Regulatory Standards Act 2025 s 24 (check)",
      "validity unaffected"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Climate Change Response Act 2002 (ETS, budgets, 2050 target, Commission)",
      "Parliament's scheme"
     ],
     [
      "Council of Civil Service Unions v Minister for the Civil Service [1985] AC 374 (HL) (GCHQ)",
      "deference"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "Geoffrey Palmer; rejected"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "2.7",
     "8.5"
    ],
    "grade": "best",
    "why": "The lens announces the three principles the question names; the climate card gives the facts. The written-constitution conclusion goes one step further: the only limits are political.",
    "concl": "1.11"
   },
   {
    "cards": [
     "8.5"
    ],
    "grade": "ok",
    "why": "Facts first works, but the lens belongs at the start to set up the three-part structure. Ending on the lens only restates it.",
    "concl": "2.7"
   },
   {
    "cards": [
     "8.4",
     "8.3"
    ],
    "grade": "weak",
    "why": "This frames a tikanga essay. Tikanga is one strand of the facts; the question asks about the three principles.",
    "concl": "8.7"
   },
   {
    "cards": [
     "1.6"
    ],
    "grade": "weak",
    "why": "The declaration-and-dialogue frame fits a court finding a rights breach. No court has declared anything here, and the question is about the three principles.",
    "concl": "4.7"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.1",
     "2.8",
     "2.1",
     "3.2"
    ],
    "grade": "best",
    "why": "One main card per principle the question names, then the counter-argument before the verdict."
   },
   {
    "cards": [
     "1.1",
     "2.8",
     "2.1"
    ],
    "grade": "ok",
    "why": "Covers the three principles but has no other side. The 'for and against' marks are lost."
   },
   {
    "cards": [
     "8.5",
     "8.4",
     "8.6"
    ],
    "grade": "weak",
    "why": "Three tikanga and customary-rights cards. Separation of powers and the rule of law never get their own paragraph."
   },
   {
    "cards": [
     "1.1",
     "1.2",
     "1.9",
     "3.2"
    ],
    "grade": "weak",
    "why": "Sovereignty three ways (power, entrenchment, passing a Bill). Separation of powers and the rule of law are missing."
   }
  ],
  "sup": {
   "1.1": [
    {
     "cards": [
      "1.5"
     ],
     "grade": "best",
     "why": "Westco: no court can question a Bill's content, and Parliament there ended an accord without compensation. Almost your facts."
    },
    {
     "cards": [
      "1.5",
      "1.2"
     ],
     "grade": "ok",
     "why": "Fine. Entrenchment shows the 2026 Act needed no special majority, but it costs time for a small point."
    },
    {
     "cards": [
      "1.8"
     ],
     "grade": "weak",
     "why": "Make It 16 is about the voting age and declarations. It doesn't show Parliament's power to end a case."
    },
    {
     "cards": [
      "9.8"
     ],
     "grade": "weak",
     "why": "Judicial independence belongs in the separation-of-powers paragraph, not sovereignty."
    }
   ],
   "2.8": [
    {
     "cards": [
      "1.10",
      "8.4"
     ],
     "grade": "best",
     "why": "The convention against legislative judgments (Clyde Dam) shows what was breached; Ellis shows the common-law development Parliament cut off."
    },
    {
     "cards": [
      "1.10"
     ],
     "grade": "ok",
     "why": "The convention point is the core. You miss the Ellis point about closing a developing area of law."
    },
    {
     "cards": [
      "1.4"
     ],
     "grade": "weak",
     "why": "Prebble protects Parliament from the courts. Here Parliament is the branch reaching into the courts' sphere."
    },
    {
     "cards": [
      "9.2"
     ],
     "grade": "weak",
     "why": "Ministers sitting in Parliament is the fused-executive point. It doesn't show the courts' sphere was invaded."
    }
   ],
   "2.1": [
    {
     "cards": [
      "4.5",
      "4.3"
     ],
     "grade": "best",
     "why": "Pora: legality and no retrospective penalty (by analogy). Atkinson: Parliament has shut down litigation before (2013)."
    },
    {
     "cards": [
      "4.5"
     ],
     "grade": "ok",
     "why": "Pora carries the retrospectivity point. Atkinson would show this is a pattern, not a one-off."
    },
    {
     "cards": [
      "2.2"
     ],
     "grade": "weak",
     "why": "Fitzgerald is the executive suspending a law without Parliament. Here Parliament legislated, so it cuts the other way."
    },
    {
     "cards": [
      "5.1"
     ],
     "grade": "weak",
     "why": "Unreasonable search has nothing to do with retrospective legislation."
    }
   ],
   "3.2": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. Cite Parliament's own scheme in the Climate Change Response Act 2002 (ETS, budgets, 2050 target, Commission) and the deference factors."
    },
    {
     "cards": [
      "3.6"
     ],
     "grade": "ok",
     "why": "Justiciability adds the institutional-competence point, but the counter is about policy, not whether courts may hear tort claims at all."
    },
    {
     "cards": [
      "6.1"
     ],
     "grade": "weak",
     "why": "International climate obligations push against the Act, not for it."
    },
    {
     "cards": [
      "2.6"
     ],
     "grade": "weak",
     "why": "Fettering a discretion is about officials applying rigid policy. Not relevant."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. The principles lens: three lenses, one target. And the climate case: up the river, then the gate slammed shut."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In Smith v Fonterra Co-operative Group Ltd, the Supreme Court allowed Mr Smith, of Ngāpuhi and Ngāti Kahu, to take his claims against seven large greenhouse gas emitters to trial.",
    "a": [
     [
      0,
      0
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "The High Court had struck out two of his three causes of action and the Court of Appeal all three; the Supreme Court reinstated them, holding that they were not clearly untenable and that tikanga may inform the torts.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Parliament then enacted the Climate Change Response (Tort Liability) Amendment Act 2026.",
    "a": [
     [
      0,
      1
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "It inserted section 271 into the Climate Change Response Act 2002, a statutory bar on tort liability for emissions-related climate change effects, and applied that bar to pending proceedings, including Mr Smith's.",
    "a": [
     [
      0,
      2
     ],
     [
      0,
      3
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay assesses the Act against the three principles that structure New Zealand's constitution: parliamentary sovereignty, the separation of powers and the rule of law.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that the Act is valid law, but that it strains both the separation of powers and the rule of law, and that the only real limits on Parliament here are political.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Can Parliament do anything? The lion on the throne. No one sits above Parliament."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Begin with sovereignty, because it settles validity.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 15(1) of the Constitution Act 1986 gives Parliament full power to make laws.",
    "a": [
     [
      1,
      0
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 4 of the New Zealand Bill of Rights Act 1990 confirms that no court may decline to apply an Act, or hold it invalid, because it is inconsistent with the Bill of Rights.",
    "a": [
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The courts have also accepted that they cannot interfere with the content of legislation.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Westco Lagan Ltd v Attorney-General, Parliament was ending the West Coast Accord without compensation, and Westco sought an injunction to stop the Bill being presented for royal assent.",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "McGechan J struck the claim out: a court may at most rule on mandatory manner and form, never on a Bill's content.",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The 2026 Act is closely analogous.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "It ends private claims, without compensation, by an ordinary majority, and nothing in it touches the provisions entrenched by section 268 of the Electoral Act 1993.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "On the orthodox view, the Act is lawful, and Mr Smith's case is over.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The harder question is whether it is constitutionally proper.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Separation of powers. Three pillars under one arch. Take one away and the roof falls."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The separation of powers in New Zealand is uneven: the executive and the legislature are fused, but the separation that matters most is between the political branches and the courts, whose judges have security of tenure and salary, and whose independence comity requires each branch to respect.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Part of that respect is a constitutional convention that Parliament does not legislate to decide particular litigation.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The standard example of the practice it condemns is the Clutha Development (Clyde Dam) Empowering Act 1982.",
    "a": [
     [
      2,
      0
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "After the High Court sent the dam's water rights back to the Planning Tribunal, and the Tribunal declined them, Parliament granted the rights by statute.",
    "a": [
     [
      2,
      0
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Conventions are not enforced by courts, and breach brings political rather than legal consequences, but they record what the constitution expects.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The 2026 Act breaches that expectation more directly than the Clyde Dam Act did: it does not override a planning decision but ends a tort claim that the Supreme Court had sent to trial.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "It also cuts off a line of judge-made development.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "In Ellis v R, the Supreme Court held unanimously that tikanga has been, and will continue to be, recognised in developing the common law.",
    "a": [
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "Smith was the next step in that development, testing whether tikanga could inform the law of torts.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "By legislating while the case was pending, Parliament decided not only Mr Smith's dispute but the direction of the common law itself, a function that ordinarily belongs to the courts.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Rule of law. The king and the beggar in the same tide. No one is above the law."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The Act also strains the rule of law.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "On a formal view it satisfies the rule of law: it is clear, public and enacted by Parliament.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "On a substantive view it does not, because it removes access to the courts for a claim already before them and changes the law in the middle of a case.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Parliament has itself listed rule of law principles in section 9 of the Regulatory Standards Act 2025, but section 23 of that Act creates no enforceable rights, and section 24 provides that it does not affect the validity of any legislation.",
    "a": [
     [
      3,
      6
     ],
     [
      3,
      7
     ],
     [
      3,
      8
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The courts have long treated retrospectivity as serious.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "In R v Pora, a seven-judge Court of Appeal unanimously quashed a minimum term of imprisonment imposed under an amendment that purported to reach earlier offending.",
    "a": [
     [
      3,
      0
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Three of the judges relied on section 4(2) of the Criminal Justice Act 1985, which barred heavier penalties than those available when the offence was committed, reasoning that Parliament must speak plainly to impose a retrospective penalty.",
    "a": [
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Sections 25(g) and 26(1) of the New Zealand Bill of Rights Act 1990 express the same principle.",
    "a": [
     [
      3,
      2
     ],
     [
      3,
      3
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Pora is a criminal case, so it applies here only by analogy, but the analogy is instructive: Mr Pora's rights survived because the statute left room for interpretation.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Mr Smith has no such option.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Section 271 is unambiguous, and his case is gone.",
    "a": [
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Nor is this the first time.",
    "a": []
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "In Ministry of Health v Atkinson, the Human Rights Review Tribunal, the High Court and the Court of Appeal all held that refusing to pay family members who cared for disabled adult children was discrimination.",
    "a": [
     [
      3,
      4
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Parliament responded with the New Zealand Public Health and Disability Amendment Act 2013, passed under urgency, which restricted the payments and barred new complaints.",
    "a": [
     [
      3,
      5
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "The pattern is the same: litigation succeeds, and Parliament closes the door.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Deference. Hands off the expert's tools."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "There is a respectable argument the other way.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Climate change is a polycentric problem with economic, cultural and international dimensions, and Parliament has already built a regime for it in the Climate Change Response Act 2002: the emissions trading scheme, emissions budgets, a 2050 target and the Climate Change Commission.",
    "a": [
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The Government's stated reason for the 2026 Act was that tort liability contradicted that regime.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Courts themselves defer on polycentric questions and on the allocation of public resources, a principle traceable to Council of Civil Service Unions v Minister for the Civil Service, and the lower courts had struck out some or all of Mr Smith's claims.",
    "a": [
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "On this view Parliament did not usurp the courts; it reclaimed a policy question for the democratic and expert scheme designed to answer it.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The difficulty lies in timing and method rather than in the policy: Parliament could have legislated prospectively and left the pending case to be decided.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Written constitution? Put it in writing, or let it blow in the wind."
   },
   {
    "f": "c",
    "k": "say",
    "t": "The 2026 Act shows the shape of New Zealand's uncodified constitution.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Legally, Parliament could do what it did: section 15(1) of the Constitution Act 1986, section 4 of the Bill of Rights Act and Westco Lagan leave no room for a court to intervene.",
    "a": [
     [
      1,
      0
     ],
     [
      1,
      1
     ],
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "Constitutionally, the Act breaches the convention against legislative judgments, closes a developing area of the common law, and removes access to the courts in the middle of a case.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Those costs can only be weighed politically.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "That is the strongest argument for a written, entrenched constitution of the kind proposed in the 1985 White Paper, A Bill of Rights for New Zealand, which was rejected in favour of an ordinary statute.",
    "a": [
     [
      5,
      0
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "Whether New Zealand should trade parliamentary sovereignty for judicial supremacy is uncertain.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "What the 2026 Act demonstrates is that, without such a change, the separation of powers and the rule of law depend on Parliament's own restraint.",
    "a": []
   }
  ],
  "modelWords": 1200
 },
 {
  "id": "treaty-clauses",
  "essay": "P4",
  "title": "The 2026 Treaty clause review",
  "prompt": "In 2026 the Government moved to repeal or cap Treaty clauses in 19 Acts, despite a Waitangi Tribunal finding that the review breached Treaty principles. Who should define what the principles require: Parliament, the courts, or the Tribunal?",
  "intro": [
   [
    "7.7",
    "the 2026 review"
   ],
   [
    "2.7",
    "legality v legitimacy"
   ]
  ],
  "concl": [
   "1.11",
   "settle the Treaty's place"
  ],
  "mains": [
   {
    "card": "1.1",
    "cue": "Parliament's claim",
    "sup": [
     [
      "6.1",
      "Te Heuheu: only via statute"
     ],
     [
      "1.5",
      "courts can't stop the Bills"
     ]
    ]
   },
   {
    "card": "7.2",
    "cue": "the courts' claim",
    "sup": [
     [
      "7.3",
      "read generously"
     ]
    ]
   },
   {
    "card": "7.1",
    "cue": "the Tribunal's claim",
    "sup": [
     [
      "7.6",
      "two texts, two partners"
     ]
    ]
   },
   {
    "card": "2.1",
    "cue": "certainty: Parliament decides",
    "sup": []
   }
  ],
  "auth": [
   [
    "The facts",
    0,
    [
     [
      "Cabinet decision, 23 February 2026",
      "19 Acts reviewed"
     ],
     [
      "7 clauses repealed, 2 made specific, 10 capped at \"take into account\" (check status)",
      "would, not has"
     ],
     [
      "Waitangi Tribunal, Wai 3565 (2026)",
      "review breached principles"
     ]
    ]
   ],
   [
    "Parliament",
    1,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ],
     [
      "Hoani Te Heuheu Tukino v Aotea District Maori Land Board [1941] AC 308 (PC)",
      "only through statute"
     ],
     [
      "Westco Lagan Ltd v Attorney-General [2001] 1 NZLR 40 (HC)",
      "can't stop a Bill"
     ]
    ]
   ],
   [
    "The courts",
    2,
    [
     [
      "New Zealand Maori Council v Attorney-General [1987] 1 NZLR 641 (CA)",
      "Lands case: principles"
     ],
     [
      "State-Owned Enterprises Act 1986 s 9",
      "not inconsistent with"
     ],
     [
      "Conservation Act 1987 s 4",
      "give effect to"
     ],
     [
      "Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board [2021] NZSC 127",
      "read generously"
     ]
    ]
   ],
   [
    "The Tribunal",
    3,
    [
     [
      "Treaty of Waitangi Act 1975 s 5(2)",
      "meaning of both texts"
     ],
     [
      "Treaty of Waitangi Act 1975 s 6",
      "claims"
     ],
     [
      "Treaty Principles Bill, voted down 10 April 2025",
      "Parliament said no"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Lord Bingham, The Rule of Law (2010)",
      "clarity"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "Treaty included, then dropped"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "7.7",
     "2.7"
    ],
    "grade": "best",
    "why": "The debate card states the issue and the 2026 facts; the lens sets up legality versus legitimacy. The written-constitution conclusion names the structural fix: settle the Treaty's place.",
    "concl": "1.11"
   },
   {
    "cards": [
     "7.7"
    ],
    "grade": "ok",
    "why": "The issue is stated, but there's no frame for weighing the three institutions. Ending on the Lands case restates the courts' claim instead of concluding.",
    "concl": "7.2"
   },
   {
    "cards": [
     "8.3",
     "8.7"
    ],
    "grade": "weak",
    "why": "This frames a tikanga essay. The question is about Treaty principles and who defines them.",
    "concl": "8.4"
   },
   {
    "cards": [
     "6.1"
    ],
    "grade": "weak",
    "why": "The international law ladder is about treaties between states. The Treaty of Waitangi is not handled that way in this question.",
    "concl": "6.7"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.1",
     "7.2",
     "7.1",
     "2.1"
    ],
    "grade": "best",
    "why": "One paragraph for each institution's claim (Parliament, courts, Tribunal), then the certainty argument against your view."
   },
   {
    "cards": [
     "1.1",
     "7.2",
     "7.1"
    ],
    "grade": "ok",
    "why": "All three claimants, but no counter-argument."
   },
   {
    "cards": [
     "7.2",
     "7.3",
     "7.4"
    ],
    "grade": "weak",
    "why": "Three court cases. Parliament's claim and the Tribunal's role never appear."
   },
   {
    "cards": [
     "1.1",
     "1.2",
     "1.5",
     "2.1"
    ],
    "grade": "weak",
    "why": "Sovereignty from every angle, but the courts and the Tribunal have no paragraph."
   }
  ],
  "sup": {
   "1.1": [
    {
     "cards": [
      "6.1",
      "1.5"
     ],
     "grade": "best",
     "why": "Te Heuheu: principles bind only through statute, so Parliament already decides when they apply. Westco: no court can stop the Bills."
    },
    {
     "cards": [
      "6.1"
     ],
     "grade": "ok",
     "why": "Te Heuheu is the key point. Westco would add that the courts can't intervene in the legislative process."
    },
    {
     "cards": [
      "1.8"
     ],
     "grade": "weak",
     "why": "Make It 16 is a Bill of Rights case about the voting age."
    },
    {
     "cards": [
      "7.4"
     ],
     "grade": "weak",
     "why": "NWO 2018 is about courts declaring rights before settlement legislation. It belongs with the courts' claim, if anywhere."
    }
   ],
   "7.2": [
    {
     "cards": [
      "7.3"
     ],
     "grade": "best",
     "why": "Trans-Tasman shows how far a generous reading goes, which is exactly what capping clauses at 'take into account' would narrow."
    },
    {
     "cards": [
      "7.3",
      "7.5"
     ],
     "grade": "ok",
     "why": "NWO 2022 adds the Crown's duty to understand tikanga in its process. Good if you have time."
    },
    {
     "cards": [
      "8.1"
     ],
     "grade": "weak",
     "why": "Te Weehi is customary fishing rights, not Treaty principles."
    },
    {
     "cards": [
      "3.1"
     ],
     "grade": "weak",
     "why": "The grounds of review are generic. They don't show what the principles mean."
    }
   ],
   "7.1": [
    {
     "cards": [
      "7.6"
     ],
     "grade": "best",
     "why": "The two texts make the Treaty bilateral: one partner redefining it alone is the legitimacy problem, and the Tribunal decides differences between the texts."
    },
    {
     "cards": [
      "7.6",
      "7.5"
     ],
     "grade": "ok",
     "why": "Adds tikanga process, but the bilateral point is the one that matters here."
    },
    {
     "cards": [
      "9.4"
     ],
     "grade": "weak",
     "why": "The Ombudsman is another body that recommends, but it has no Treaty role."
    },
    {
     "cards": [
      "6.7"
     ],
     "grade": "weak",
     "why": "The Cabinet Manual treaty process is for international treaties."
    }
   ],
   "2.1": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. The certainty argument (Bingham: law must be clear) supports Parliament specifying what clauses mean."
    },
    {
     "cards": [
      "9.7"
     ],
     "grade": "ok",
     "why": "Purposive interpretation shows courts read clauses in context, but it supports the courts more than the counter."
    },
    {
     "cards": [
      "2.5"
     ],
     "grade": "weak",
     "why": "Borrowdale is about clarity of public-health orders. Too remote."
    },
    {
     "cards": [
      "5.4"
     ],
     "grade": "weak",
     "why": "Arrest rights are not relevant."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Who defines the principles? Too many hands on one stone. And the principles lens: legality against legitimacy."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In February 2026 Cabinet agreed to review the Treaty of Waitangi clauses in New Zealand legislation, and in May the Government announced changes to 19 Acts: seven clauses would be repealed, two made more specific, and ten capped at an obligation to take into account the principles of the Treaty.",
    "a": [
     [
      0,
      0
     ],
     [
      0,
      1
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "The Waitangi Tribunal, in its Wai 3565 report, found that the review itself breached Treaty principles; the Government proceeded.",
    "a": [
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "The question is who should define what the principles require: Parliament, the courts, or the Tribunal.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Viewed through the principles of sovereignty, separation of powers and the rule of law, the answer depends on separating legality from legitimacy.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay argues that Parliament legally decides whether, and how strongly, the principles apply, but that the courts and the Tribunal have the better claim to say what the principles mean, because the Treaty is a bilateral agreement that one partner should not redefine alone.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Can Parliament do anything? The lion on the throne. Parliament's claim."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Parliament's claim rests on sovereignty.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 15(1) of the Constitution Act 1986 gives it full power to make laws, and nothing in New Zealand's constitution entrenches the Treaty.",
    "a": [
     [
      1,
      0
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "More importantly, the principles have legal force only because Parliament has put them into statute.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Hoani Te Heuheu Tukino v Aotea District Maori Land Board, the Privy Council held that rights under the Treaty cannot be enforced in the courts unless they have been incorporated by legislation.",
    "a": [
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Every principles clause the courts have applied, beginning with section 9 of the State-Owned Enterprises Act 1986, exists because Parliament chose to enact it.",
    "a": [
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "It follows that Parliament already decides when the principles apply and with what strength; capping clauses at take into account is an exercise of that same choice.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Parliament also has a democratic mandate, and specifying the content of an obligation in the statute itself promotes consistency and certainty.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Nor can the courts stop the process.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Westco Lagan Ltd v Attorney-General confirms that a court will not intervene in a Bill on the basis of its content.",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Legally, then, Parliament can redefine or remove the clauses, and the Tribunal's finding cannot prevent it.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: The Lands case. The rope round the mooring post. The courts' claim."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The courts' claim is that they gave the principles their content.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "In New Zealand Maori Council v Attorney-General, the Lands case, the Court of Appeal held that section 9 of the State-Owned Enterprises Act 1986, which provides that nothing in the Act permits the Crown to act inconsistently with the principles of the Treaty, bound the Crown.",
    "a": [
     [
      2,
      0
     ],
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Court identified principles of partnership, the duty to act reasonably and in utmost good faith, active protection of Māori interests to the fullest extent reasonably practicable, and redress, and it declared that the Crown had to establish a system of safeguards before transferring land.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The strength of the obligation depends on the wording.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "A clause that the Crown must not act inconsistently with the principles operates as a bar; a duty to give effect to them, as in section 4 of the Conservation Act 1987, is also strong; a duty to take them into account makes them a mandatory relevant consideration and no more.",
    "a": [
     [
      2,
      2
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The courts have also shown how generously they read such clauses.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "In Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board, the Supreme Court read the Treaty clause in the exclusive economic zone legislation broadly, not confined to the provisions it listed, and treated tikanga-based interests as existing interests to be weighed.",
    "a": [
     [
      2,
      3
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Capping clauses at take into account would narrow exactly that approach.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The courts' claim is not that they may override Parliament, but that when Parliament uses the language of the principles, the meaning of that language is a legal question, and on questions of meaning the courts decide.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: The Waitangi Tribunal. The forest path to the hall of advice. The Tribunal's claim."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The Tribunal's claim is different again.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Under section 6 of the Treaty of Waitangi Act 1975, any Māori may claim to be prejudicially affected by legislation, policy or Crown action inconsistent with the principles of the Treaty, and section 5(2) gives the Tribunal exclusive authority to determine the meaning and effect of the Treaty as embodied in its two texts.",
    "a": [
     [
      3,
      1
     ],
     [
      3,
      0
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Its findings are, with narrow exceptions, recommendations, as Wai 3565 shows: the Government heard that the review breached the principles, and continued.",
    "a": [
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Yet the two texts lie at the heart of the legitimacy problem.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "In article 1 of te Tiriti the rangatira ceded kāwanatanga, governance, rather than sovereignty; in article 2 they were guaranteed tino rangatiratanga over their taonga.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Most chiefs signed the te reo text, and on the principle of contra proferentem an ambiguity is resolved against the party that drafted it, the Crown.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The Treaty is therefore a bilateral agreement.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "When one partner redefines on its own what the agreement requires, the redefinition may be lawful, but it lacks the consent that gives the Treaty its constitutional authority.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Parliament itself appeared to accept this when it voted down the Treaty Principles Bill at its second reading on 10 April 2025.",
    "a": [
     [
      3,
      2
     ]
    ]
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Rule of law. The king and the beggar in the same tide. The case for certainty."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The best argument for Parliament is drawn from the rule of law itself.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Lord Bingham argued that the law must be accessible and, so far as possible, intelligible, clear and predictable.",
    "a": [
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Principles clauses are open-textured, and their content has been developed case by case, by courts applying general words and by a Tribunal whose findings are not binding.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Specifying in the statute what the Crown must do gives officials and citizens certainty, and leaves the choice with an elected body accountable to every voter.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "On this view the uncertainty comes from the generous readings of the courts, not from Parliament's attempt to state the obligations plainly.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Written constitution? Settle the Treaty's place."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Legally, Parliament defines the reach of the principles, because they bind only through statute and Parliament may amend any statute.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "But legality is not the end of the question.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The courts gave the principles their content, and the Tribunal is charged with determining the Treaty's meaning across both texts; their claim to say what the principles mean is stronger than Parliament's claim to redefine them alone.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The better model is a shared one: Parliament decides which clauses exist and how strong they are, and the courts and the Tribunal say what the principles require.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The deeper problem is that New Zealand has never settled the Treaty's constitutional place.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The 1985 White Paper, A Bill of Rights for New Zealand, proposed including the Treaty in an entrenched Bill of Rights, and that proposal was dropped.",
    "a": [
     [
      5,
      0
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "Until the question is settled, perhaps in a written constitution, the content of the principles will remain in the hands of the majority of the day.",
    "a": []
   }
  ],
  "modelWords": 1072
 },
 {
  "id": "comity",
  "essay": "J26-2",
  "title": "Comity and judicial independence",
  "prompt": "A judicial conduct panel found Judge Aitken's conduct toward a party leader a serious breach of comity but not misbehaviour. What is comity, and why does it matter to parliamentary supremacy, the separation of powers and the rule of law? (Also covers the Nov 2024 judicial independence question.)",
  "intro": [
   [
    "2.7",
    "three lenses"
   ],
   [
    "2.8",
    "comity: Aitken 2026"
   ]
  ],
  "concl": [
   "1.11",
   "codify comity?"
  ],
  "mains": [
   {
    "card": "1.1",
    "cue": "",
    "sup": [
     [
      "1.4",
      "courts out of the House"
     ],
     [
      "1.5",
      "a two-way street"
     ]
    ]
   },
   {
    "card": "9.8",
    "cue": "",
    "sup": [
     [
      "1.6",
      "dialogue, not combat"
     ],
     [
      "4.7",
      "Parliament answers back"
     ]
    ]
   },
   {
    "card": "2.1",
    "cue": "independent courts",
    "sup": [
     [
      "8.5",
      "ending a live case"
     ]
    ]
   },
   {
    "card": "1.10",
    "cue": "binds only politically",
    "sup": []
   }
  ],
  "auth": [
   [
    "The facts",
    0,
    [
     [
      "Judicial Conduct Panel report on Judge Ema Aitken (1 April 2026)",
      "serious breach of comity"
     ]
    ]
   ],
   [
    "Supremacy",
    1,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ],
     [
      "Bill of Rights 1688 art 9",
      "proceedings privileged"
     ],
     [
      "Prebble v Television New Zealand Ltd [1994] 3 NZLR 1 (PC)",
      "courts out of the House"
     ],
     [
      "Parliament Act 2025 s 17",
      "art 9 restated"
     ],
     [
      "Westco Lagan Ltd v Attorney-General [2001] 1 NZLR 40 (HC)",
      "two-way street"
     ]
    ]
   ],
   [
    "Separation",
    2,
    [
     [
      "Constitution Act 1986 ss 23–24",
      "tenure, salary"
     ],
     [
      "Judicial Conduct Commissioner and Judicial Conduct Panel Act 2004",
      "conduct process"
     ],
     [
      "Attorney-General v Taylor [2018] NZSC 104",
      "declaration"
     ],
     [
      "New Zealand Bill of Rights Act 1990 ss 7A–7B",
      "Government must respond"
     ],
     [
      "Electoral Amendment Act 2025",
      "prisoner ban back"
     ]
    ]
   ],
   [
    "Rule of law",
    3,
    [
     [
      "Senior Courts Act 2016 s 3(2)",
      "rule of law preserved"
     ],
     [
      "Climate Change Response Act 2002 s 271",
      "case ended"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Cabinet Manual 2023",
      "conventions recorded"
     ],
     [
      "Jennings test",
      "precedent, belief, reason"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "entrenchment rejected"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "2.7",
     "2.8"
    ],
    "grade": "best",
    "why": "The lens matches the three principles the question names; the separation card defines comity and carries the Aitken panel. The conclusion asks whether comity should be written down.",
    "concl": "1.11"
   },
   {
    "cards": [
     "9.8"
    ],
    "grade": "ok",
    "why": "Opening on independence works for the 2024 question, but comity is never defined at the start. Ending on the lens only restates it.",
    "concl": "2.7"
   },
   {
    "cards": [
     "3.1"
    ],
    "grade": "weak",
    "why": "This frames a judicial review essay. The question is about relations between the branches.",
    "concl": "3.5"
   },
   {
    "cards": [
     "1.12"
    ],
    "grade": "weak",
    "why": "Party-hopping and government formation are politics, not comity.",
    "concl": "9.11"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.1",
     "9.8",
     "2.1",
     "1.10"
    ],
    "grade": "best",
    "why": "One main card per principle, then the counter: comity binds only by convention."
   },
   {
    "cards": [
     "1.1",
     "9.8",
     "2.1"
    ],
    "grade": "ok",
    "why": "The three principles, but no counter-argument."
   },
   {
    "cards": [
     "1.4",
     "1.5",
     "1.6",
     "1.10"
    ],
    "grade": "weak",
    "why": "Good cases, but they don't map onto the three principles the question names."
   },
   {
    "cards": [
     "9.8",
     "9.12",
     "9.9",
     "1.10"
    ],
    "grade": "weak",
    "why": "Courts only. Parliament's side of comity (Prebble, Westco) is missing."
   }
  ],
  "sup": {
   "1.1": [
    {
     "cards": [
      "1.4",
      "1.5"
     ],
     "grade": "best",
     "why": "Prebble keeps courts out of the House; Westco calls comity 'a two-way street'. Together they show comity protects supremacy."
    },
    {
     "cards": [
      "1.5"
     ],
     "grade": "ok",
     "why": "Westco's 'two-way street' is the key line. Prebble would show the courts' side of the restraint."
    },
    {
     "cards": [
      "1.2"
     ],
     "grade": "weak",
     "why": "Entrenchment is about how laws are changed, not restraint between branches."
    },
    {
     "cards": [
      "1.9"
     ],
     "grade": "weak",
     "why": "Passing a Bill is legislative procedure, not comity."
    }
   ],
   "9.8": [
    {
     "cards": [
      "1.6",
      "4.7"
     ],
     "grade": "best",
     "why": "Taylor and the 2025 prisoner ban show the branches answering each other through law (dialogue), not attacks."
    },
    {
     "cards": [
      "1.6"
     ],
     "grade": "ok",
     "why": "Taylor shows dialogue. The 2025 Act shows Parliament having the last word."
    },
    {
     "cards": [
      "9.9"
     ],
     "grade": "weak",
     "why": "Tangiora is about what counts as a court, not independence."
    },
    {
     "cards": [
      "3.2"
     ],
     "grade": "weak",
     "why": "Deference is about how closely courts review, not comity between the branches."
    }
   ],
   "2.1": [
    {
     "cards": [
      "8.5"
     ],
     "grade": "best",
     "why": "The 2026 Climate Act shows the strain on the rule of law when Parliament ends a live case."
    },
    {
     "cards": [
      "8.5",
      "4.3"
     ],
     "grade": "ok",
     "why": "Atkinson's 2013 override adds weight. Good if you have time."
    },
    {
     "cards": [
      "5.2"
     ],
     "grade": "weak",
     "why": "Excluding evidence is criminal procedure."
    },
    {
     "cards": [
      "2.6"
     ],
     "grade": "weak",
     "why": "Fettering is about officials, not the branches."
    }
   ],
   "1.10": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. The Jennings test and the Cabinet Manual show comity is convention: political, not legal, sanctions."
    },
    {
     "cards": [
      "9.1"
     ],
     "grade": "ok",
     "why": "The cardinal convention shows conventions do work in practice, a fair point for the counter."
    },
    {
     "cards": [
      "6.7"
     ],
     "grade": "weak",
     "why": "The treaty-making convention is off topic."
    },
    {
     "cards": [
      "7.2"
     ],
     "grade": "weak",
     "why": "The Lands case is about Treaty principles."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. The principles lens: three lenses, one target. And separation of powers: three pillars under one arch."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In April 2026 a Judicial Conduct Panel found that Judge Ema Aitken's conduct toward a party leader was a serious breach of comity, but did not warrant her removal.",
    "a": [
     [
      0,
      0
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "Comity is the mutual respect and restraint that each branch of government owes the others.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Courts do not interfere in Parliament's proceedings; Parliament and ministers respect the courts' independence in deciding cases; and neither side attacks the other's legitimacy.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It is a constitutional convention, not a rule of law.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The finding matters because comity is usually discussed as a restraint on politicians; here a judge was found to have breached it.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay examines comity through the three principles that frame New Zealand's constitution, parliamentary sovereignty, the separation of powers and the rule of law.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that comity is the convention that allows those three principles to coexist, but that its force is only political.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Can Parliament do anything? The lion on the throne. Supremacy depends on the courts' restraint."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Parliamentary sovereignty depends on comity from the courts.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 15(1) of the Constitution Act 1986 gives Parliament full power to make laws, but sovereignty also requires that Parliament control its own proceedings.",
    "a": [
     [
      1,
      0
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Article 9 of the Bill of Rights 1688 provides that proceedings in Parliament ought not to be impeached or questioned in any court.",
    "a": [
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Prebble v Television New Zealand Ltd, the Privy Council held that article 9 protects parliamentary proceedings even when a defendant wishes to rely on them, and that the House cannot waive the protection; Hansard may prove what was said, but not its truth, motive or good faith.",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Section 17 of the Parliament Act 2025 now restates the effect of article 9.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "The restraint is mutual.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "In Westco Lagan Ltd v Attorney-General, McGechan J refused to stop a Bill and described comity as a two-way street: the courts stay out of the legislative process, and Parliament in turn respects the courts' independence when they decide cases.",
    "a": [
     [
      1,
      4
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Supremacy is therefore protected by the courts' self-restraint, not by any power Parliament could enforce against them.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Judicial independence. The judge alone on the bridge. Neither bank can push the judge off."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The separation of powers depends on judicial independence.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Under section 23 of the Constitution Act 1986, a High Court judge may be removed only by the Sovereign or Governor-General on an address of the House for misbehaviour or incapacity, and section 24 prevents a judge's salary being reduced during their commission.",
    "a": [
     [
      2,
      0
     ]
    ]
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Complaints about judges are handled under the Judicial Conduct Commissioner and Judicial Conduct Panel Act 2004, which is why the Aitken panel could find a serious breach of comity and still stop short of misbehaviour.",
    "a": [
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Comity binds the political branches too.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "By convention, members of Parliament do not attack judges personally, and when a minister did so in 2024 the remarks were treated as a test of that convention.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "When the branches disagree, comity channels the disagreement into law rather than attack.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "In Attorney-General v Taylor, the Supreme Court held by a majority that senior courts may declare an Act inconsistent with the Bill of Rights.",
    "a": [
     [
      2,
      2
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The Act remains valid, and sections 7A and 7B of the New Zealand Bill of Rights Act 1990 now require the Attorney-General to present the declaration to the House and the Government to respond.",
    "a": [
     [
      2,
      3
     ]
    ]
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "Parliament's response may be to disagree.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "The Electoral Amendment Act 2025 reinstated a ban on voting by sentenced prisoners, despite Taylor.",
    "a": [
     [
      2,
      4
     ]
    ]
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "That is dialogue, not combat: each branch acts within its own sphere, and Parliament has the last word.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "Comity therefore does not require the branches to agree.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "It requires them to disagree through the processes the constitution provides, such as appeal, declaration, report and legislation, rather than through personal attack.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Rule of law. The king and the beggar in the same tide. The rule of law needs independent courts."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The rule of law depends on courts that neither political branch controls.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Officials must be subject to the ordinary law, applied impartially, and section 3(2) of the Senior Courts Act 2016 expressly preserves both the rule of law and the sovereignty of Parliament.",
    "a": [
     [
      3,
      0
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "If a judge is seen to take sides in party politics, as the panel found Judge Aitken's conduct did, public confidence that the courts apply law without fear or favour suffers, and with it the authority of every judgment.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Comity also restrains what Parliament does to cases before the courts.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "When Parliament enacted section 271 of the Climate Change Response Act 2002 in 2026 and applied it to the pending Smith v Fonterra proceedings, it acted lawfully, but it stepped into a dispute that the Supreme Court had sent to trial.",
    "a": [
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "That is the converse of a judge stepping into politics.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Each strains comity from a different side, and each weakens the rule of law by making the outcome of legal disputes depend on political power rather than on law.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Conventions. The velvet rope held by nothing. Everyone stops, but nothing holds it."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The weakness of comity is that it is only a convention.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "On the Jennings test there are precedents, the actors believe themselves bound, and there is a constitutional reason for the rule, so comity qualifies; but courts recognise conventions without enforcing them, and the Cabinet Manual 2023 records conventions without making them law.",
    "a": [
     [
      4,
      1
     ],
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Breach brings only political consequences, as both the Aitken panel and the 2026 Act illustrate.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Comity can also be overstated.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Democratic criticism of judgments is legitimate, and the convention protects the integrity and independence of judges, not their reasoning from public debate.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "A comity that silenced criticism would weaken accountability, which the rule of law also requires.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Written constitution? Could comity be written down?"
   },
   {
    "f": "c",
    "k": "say",
    "t": "Comity is what allows a sovereign Parliament, independent courts and the rule of law to coexist in a constitution that has no supreme written text.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "It protects Parliament's proceedings, as Prebble and Westco show; it protects judges, through sections 23 and 24 of the Constitution Act and the conduct process; and it keeps disagreement within the law, as the declaration in Taylor and Parliament's response show.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "But it is fragile, because it binds only for as long as each branch chooses to observe it.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "A written constitution could codify parts of it, yet the 1985 White Paper's proposal for an entrenched Bill of Rights was rejected, and much of comity, like any convention, depends less on text than on the restraint of those who hold power.",
    "a": [
     [
      5,
      0
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "The Aitken finding also shows an asymmetry: there is a statutory process to hold judges to comity, but breaches by ministers and members of Parliament are answered only politically.",
    "a": []
   }
  ],
  "modelWords": 1023
 },
 {
  "id": "written-constitution",
  "essay": "N25-2",
  "title": "A written constitution",
  "prompt": "Sir Geoffrey Palmer argues New Zealand will need a written constitution because the present rules are loose and hard to find. Give arguments for and against adopting one, with statutes and cases.",
  "intro": [
   [
    "1.11",
    "Palmer's argument"
   ],
   [
    "1.7",
    "scattered sources"
   ]
  ],
  "concl": [
   "1.1",
   "trust voters or judges?"
  ],
  "mains": [
   {
    "card": "1.2",
    "cue": "for: protect rights",
    "sup": [
     [
      "8.5",
      "2026 override"
     ],
     [
      "4.3",
      "2013 override"
     ]
    ]
   },
   {
    "card": "7.7",
    "cue": "for: settle the Treaty",
    "sup": [
     [
      "7.6",
      "which text?"
     ]
    ]
   },
   {
    "card": "1.10",
    "cue": "against: flexibility",
    "sup": [
     [
      "1.6",
      "dialogue works"
     ],
     [
      "9.1",
      "conventions run the Crown"
     ]
    ]
   },
   {
    "card": "1.8",
    "cue": "against: judges decide",
    "sup": [
     [
      "3.6",
      "political questions"
     ]
    ]
   }
  ],
  "auth": [
   [
    "What we have",
    0,
    [
     [
      "Constitution Act 1986",
      "core structure"
     ],
     [
      "New Zealand Bill of Rights Act 1990",
      "ordinary statute"
     ],
     [
      "Electoral Act 1993 s 268",
      "75% or a poll"
     ],
     [
      "Imperial Laws Application Act 1988",
      "Magna Carta, Bill of Rights 1688"
     ],
     [
      "Cabinet Manual 2023",
      "conventions recorded"
     ],
     [
      "Palmer and Butler, A Constitution for Aotearoa New Zealand (2016)",
      "a draft"
     ]
    ]
   ],
   [
    "For",
    1,
    [
     [
      "Climate Change Response (Tort Liability) Amendment Act 2026",
      "case ended"
     ],
     [
      "Ministry of Health v Atkinson [2012] NZCA 184",
      "family carers"
     ],
     [
      "New Zealand Public Health and Disability Amendment Act 2013",
      "complaints barred"
     ],
     [
      "Electoral Amendment Act 2025",
      "prisoner ban back"
     ],
     [
      "Cabinet decision on Treaty clauses (23 February 2026)",
      "19 Acts"
     ],
     [
      "Treaty of Waitangi Act 1975 s 5(2)",
      "two texts"
     ]
    ]
   ],
   [
    "Against",
    3,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "entrenchment rejected"
     ],
     [
      "Attorney-General v Taylor [2018] NZSC 104",
      "declaration"
     ],
     [
      "New Zealand Bill of Rights Act 1990 ss 7, 7A–7B",
      "report and respond"
     ],
     [
      "Letters Patent 1983",
      "Governor-General's office"
     ]
    ]
   ],
   [
    "Judges",
    4,
    [
     [
      "Make It 16 Inc v Attorney-General [2022] NZSC 134",
      "voting age declared"
     ],
     [
      "Ngāti Whātua Ōrākei Trust v Attorney-General [2018] NZSC 84",
      "justiciability widening"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "1.11",
     "1.7"
    ],
    "grade": "best",
    "why": "The debate card carries Palmer's argument; the sources card shows how scattered the rules are. The conclusion returns to sovereignty: the real question is whom you trust.",
    "concl": "1.1"
   },
   {
    "cards": [
     "1.11"
    ],
    "grade": "ok",
    "why": "The issue is stated, but there's no picture of what New Zealand has now. Ending on the same card repeats instead of weighing.",
    "concl": "1.11"
   },
   {
    "cards": [
     "6.2"
    ],
    "grade": "weak",
    "why": "A history of Imperial law, not a for-and-against.",
    "concl": "6.1"
   },
   {
    "cards": [
     "1.9"
    ],
    "grade": "weak",
    "why": "Passing a Bill and party-hopping are procedure, not the constitutional question.",
    "concl": "1.12"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.2",
     "7.7",
     "1.10",
     "1.8"
    ],
    "grade": "best",
    "why": "Two arguments for (rights protection, the Treaty's place), two against (flexibility, unelected judges)."
   },
   {
    "cards": [
     "1.2",
     "1.10",
     "1.8"
    ],
    "grade": "ok",
    "why": "Balanced, but it leaves out the Treaty, the issue any written constitution has to settle."
   },
   {
    "cards": [
     "1.2",
     "7.7",
     "8.5"
    ],
    "grade": "weak",
    "why": "All arguments for. The question asks for and against."
   },
   {
    "cards": [
     "1.10",
     "1.8",
     "3.6"
    ],
    "grade": "weak",
    "why": "All arguments against."
   }
  ],
  "sup": {
   "1.2": [
    {
     "cards": [
      "8.5",
      "4.3"
     ],
     "grade": "best",
     "why": "Single entrenchment protects only electoral rules, so Parliament could end Smith's case (2026) and bar the carers' complaints (2013)."
    },
    {
     "cards": [
      "8.5"
     ],
     "grade": "ok",
     "why": "One override makes the point; two show a pattern."
    },
    {
     "cards": [
      "1.3"
     ],
     "grade": "weak",
     "why": "Simpson is about directory rules, not rights protection."
    },
    {
     "cards": [
      "1.12"
     ],
     "grade": "weak",
     "why": "Party-hopping is not about rights protection."
    }
   ],
   "7.7": [
    {
     "cards": [
      "7.6"
     ],
     "grade": "best",
     "why": "The two texts are the unresolved question a written constitution would have to answer."
    },
    {
     "cards": [
      "7.6",
      "7.2"
     ],
     "grade": "ok",
     "why": "The Lands case adds the principles, but the two-text point carries the argument."
    },
    {
     "cards": [
      "6.1"
     ],
     "grade": "weak",
     "why": "The international law ladder is about treaties between states."
    },
    {
     "cards": [
      "8.6"
     ],
     "grade": "weak",
     "why": "Marine title is too narrow for this argument."
    }
   ],
   "1.10": [
    {
     "cards": [
      "1.6",
      "9.1"
     ],
     "grade": "best",
     "why": "Taylor shows the courts and Parliament already restrain each other through dialogue; the Governor-General shows conventions running the Crown reliably."
    },
    {
     "cards": [
      "1.6"
     ],
     "grade": "ok",
     "why": "Dialogue is the strongest point. The Crown example shows conventions work day to day."
    },
    {
     "cards": [
      "2.2"
     ],
     "grade": "weak",
     "why": "Fitzgerald shows courts enforcing law, not conventions."
    },
    {
     "cards": [
      "5.3"
     ],
     "grade": "weak",
     "why": "Baigent is about compensation for rights breaches."
    }
   ],
   "1.8": [
    {
     "cards": [
      "3.6"
     ],
     "grade": "best",
     "why": "A supreme-law constitution would hand political questions to judges; the justiciability debate shows the line is already moving."
    },
    {
     "cards": [
      "3.6",
      "4.2"
     ],
     "grade": "ok",
     "why": "Hansen shows the courts' method, but it's detail for this argument."
    },
    {
     "cards": [
      "2.5"
     ],
     "grade": "weak",
     "why": "Borrowdale is about lockdown orders."
    },
    {
     "cards": [
      "7.5"
     ],
     "grade": "weak",
     "why": "Tikanga evidence is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Written constitution? Loose pages beside one clasped volume. And the sources of the constitution: roots in many soils."
   },
   {
    "f": "i",
    "k": "say",
    "t": "Sir Geoffrey Palmer argues that New Zealand will need a written constitution because its present rules are loose and hard to find.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "He has a point.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "New Zealand's constitution is drawn from many sources: statutes such as the Constitution Act 1986, the New Zealand Bill of Rights Act 1990 and the Electoral Act 1993; English enactments kept in force by the Imperial Laws Application Act 1988, including Magna Carta and the Bill of Rights 1688; the prerogative and the Letters Patent 1983; the common law, including tikanga; conventions recorded in the Cabinet Manual 2023; the Treaty of Waitangi; and international law.",
    "a": [
     [
      0,
      0
     ],
     [
      0,
      3
     ],
     [
      0,
      4
     ],
     [
      2,
      3
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "Almost all of it can be changed by a simple majority.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay weighs the arguments for and against a single written constitution.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that the case turns on whom New Zealanders trust to restrain power: voters and conventions, or judges.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Entrenchment. The blue chest with two locks. Under lock and two keys."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The first argument for a written constitution is the protection of rights against a single-chamber Parliament.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Only a narrow set of electoral rules is entrenched.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Under section 268 of the Electoral Act 1993, reserved provisions such as the three-year term and the voting age may be changed only by 75 per cent of the House or by a majority at a referendum.",
    "a": [
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Even that entrenchment is single, because section 268 does not protect itself, and it has been obeyed as a matter of political obligation.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Everything else, including the Bill of Rights Act, is an ordinary statute that a bare majority may amend.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Recent legislation shows what that means in practice.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The Climate Change Response (Tort Liability) Amendment Act 2026 ended a tort claim that the Supreme Court had sent to trial.",
    "a": [
     [
      1,
      0
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "In 2013, after the courts held in Ministry of Health v Atkinson that refusing to pay family carers of disabled adult children was discrimination, Parliament passed the New Zealand Public Health and Disability Amendment Act 2013 under urgency, restricting the payments and barring new complaints.",
    "a": [
     [
      1,
      1
     ],
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "And the Electoral Amendment Act 2025 reinstated a ban on prisoner voting that the Supreme Court had declared inconsistent with the Bill of Rights.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Each of these Acts was lawful, and each passed by a simple majority.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "A supreme, entrenched constitution would allow courts to strike down such laws, or at least require a special majority to pass them.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Who defines the principles? Too many hands on one stone."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The second argument for a written constitution is that it would settle the place of the Treaty of Waitangi.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "At present the Treaty binds only through statute, and its principles are defined in turn by the courts, the Tribunal and Parliament.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "In 2026 the Government moved to repeal or cap Treaty clauses in 19 Acts, despite a Tribunal finding that the review breached Treaty principles.",
    "a": [
     [
      1,
      4
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Beneath that dispute lies the problem of the two texts.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The te reo text ceded kāwanatanga, governance, where the English text speaks of sovereignty, and section 5(2) of the Treaty of Waitangi Act 1975 leaves the Tribunal to determine the meaning and effect of both.",
    "a": [
     [
      1,
      5
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The Treaty Principles Bill, voted down in 2025, and the 2026 clause review both show how contested that place remains.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "A written constitution could state the Treaty's status once, ending the cycle in which each Parliament redefines it.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Palmer and Butler's draft, A Constitution for Aotearoa New Zealand, attempted exactly that.",
    "a": [
     [
      0,
      5
     ]
    ]
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Conventions. The velvet rope held by nothing. Toe the line."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Against this, the flexibility of the present constitution is a strength.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Much of it runs on conventions that work without courts to enforce them.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The Prime Minister is whoever commands the confidence of the House, ministers are collectively responsible, and caretaker conventions govern the period after an election.",
    "a": [
     [
      0,
      4
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "The Governor-General's legal powers are wide, but by the cardinal convention they are exercised on ministerial advice, and the system adapted to MMP without any constitutional amendment.",
    "a": [
     [
      2,
      3
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Flexibility also allowed Parliament to close a gap in ministerial tenure quickly in 2026, by ordinary amendment to the Constitution Act.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Rights already have institutional protection short of judicial supremacy.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Section 7 of the New Zealand Bill of Rights Act 1990 requires the Attorney-General to report inconsistent Bills to Parliament, and since Attorney-General v Taylor the courts may declare an Act inconsistent with the Bill of Rights, after which sections 7A and 7B require the declaration to be presented to the House and the Government to respond.",
    "a": [
     [
      2,
      1
     ],
     [
      2,
      2
     ]
    ]
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "This dialogue, together with MMP and select committee scrutiny, restrains Parliament while leaving the last word with elected representatives.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Voting at sixteen. The young bird on the nest under a full moon. Who decides: judges or voters?"
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The second argument against is that a supreme constitution would hand political questions to unelected judges.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "That was the main objection to the 1985 White Paper, A Bill of Rights for New Zealand, which proposed an entrenched, supreme-law Bill of Rights and was rejected in favour of an ordinary statute.",
    "a": [
     [
      2,
      0
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Make It 16 Inc v Attorney-General illustrates the difference.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The Supreme Court declared that the voting age of 18 was an unjustified limit on the right to freedom from age discrimination, but the declaration left the decision with Parliament.",
    "a": [
     [
      3,
      0
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Under a supreme constitution, the court would decide.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Judges are not representative of the community in the way Parliament is, and their decisions cannot be reversed at an election.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The courts are already moving into contested territory.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Since Ngāti Whātua Ōrākei Trust v Attorney-General, fewer questions are treated as beyond the courts' reach, and judges increasingly rely on deference rather than refusing to decide.",
    "a": [
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Entrenchment would accelerate that shift, and it would freeze today's settlement against future change.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Can Parliament do anything? Trust the voters, or the judges?"
   },
   {
    "f": "c",
    "k": "say",
    "t": "Legally, nothing prevents Parliament adopting a written constitution, but because section 15(1) of the Constitution Act 1986 gives every Parliament full power to make laws, a constitution would bind future Parliaments only if it were entrenched and politically respected.",
    "a": [
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "The arguments for, certainty, protection of minorities and settling the Treaty's place, are strong, and recent overrides show the risk of relying on a single chamber.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The arguments against, flexibility, democratic control and the absence of agreement on the Treaty, are also real.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "On balance, a codifying constitution that gathers the existing rules into one accessible text has much to commend it, and entrenching only its core provisions would capture most of the benefit of certainty while keeping the last word with Parliament.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Whether it should also be supreme law depends on whether New Zealanders trust courts more than voters to protect them, and so far the country has answered in favour of voters.",
    "a": []
   }
  ],
  "modelWords": 1041
 }
];
