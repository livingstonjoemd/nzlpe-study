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
  "modelWords": 1200,
  "audio": {
   "src": "data/smith.mp3?v=20261118c",
   "starts": [
    0.0,
    7.75,
    19.48,
    31.45,
    38.4,
    53.72,
    63.43,
    73.73,
    79.64,
    82.97,
    90.28,
    101.95,
    106.88,
    117.97,
    125.31,
    128.96,
    141.55,
    146.09,
    150.61,
    156.52,
    173.7,
    180.76,
    188.69,
    197.16,
    206.04,
    218.15,
    221.53,
    230.34,
    235.88,
    247.38,
    252.99,
    255.79,
    261.72,
    269.95,
    286.65,
    290.45,
    300.41,
    315.73,
    324.07,
    334.91,
    337.41,
    342.14,
    344.38,
    356.63,
    367.15,
    372.56,
    376.59,
    379.45,
    397.29,
    404.41,
    419.28,
    427.54,
    437.26,
    442.94,
    448.47,
    460.69,
    471.46,
    474.32,
    487.74,
    493.48
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
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
    "t": "On 23 February 2026 Cabinet made its policy decisions on the review of Treaty of Waitangi clauses in New Zealand legislation, and in May the Government announced changes to 19 Acts: seven clauses would be repealed, two made more specific, and ten capped at an obligation to take into account the principles of the Treaty.",
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
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Three Bills making the changes were introduced on 14 September 2026 and are before the Justice Committee: they are proposals, not yet law.",
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
  "modelWords": 1100,
  "audio": {
   "src": "data/treaty-clauses.mp3?v=20261120c",
   "starts": [
    0.0,
    8.26,
    28.8,
    38.36,
    47.79,
    53.42,
    61.78,
    77.46,
    82.56,
    85.27,
    95.51,
    101.42,
    113.32,
    124.14,
    133.57,
    142.47,
    144.94,
    152.39,
    159.68,
    164.37,
    168.0,
    185.24,
    202.47,
    205.76,
    223.87,
    227.75,
    244.63,
    248.98,
    261.59,
    267.71,
    270.36,
    291.75,
    302.83,
    306.52,
    317.42,
    326.4,
    329.41,
    339.41,
    349.05,
    355.11,
    359.38,
    366.1,
    376.49,
    385.47,
    393.64,
    398.31,
    406.23,
    409.15,
    421.56,
    430.57,
    435.62,
    445.31
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
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
    "t": "By convention, members of Parliament do not attack judges personally.",
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
  "modelWords": 1005,
  "audio": {
   "src": "data/comity.mp3?v=20261120c",
   "starts": [
    0.0,
    7.68,
    18.97,
    24.26,
    34.73,
    38.59,
    46.08,
    55.55,
    63.53,
    70.19,
    74.05,
    85.48,
    94.49,
    110.81,
    117.61,
    119.72,
    134.93,
    142.38,
    148.74,
    152.58,
    170.07,
    183.23,
    186.2,
    190.44,
    195.65,
    204.01,
    217.07,
    219.93,
    227.8,
    234.11,
    237.65,
    248.38,
    255.27,
    259.8,
    272.21,
    285.01,
    289.47,
    306.54,
    310.01,
    320.25,
    327.02,
    330.51,
    347.84,
    355.01,
    357.63,
    367.04,
    373.97,
    378.81,
    387.88,
    403.54,
    408.68,
    424.02
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
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
  "modelWords": 1041,
  "audio": {
   "src": "data/written-constitution.mp3?v=20261118c",
   "starts": [
    0.0,
    9.01,
    16.39,
    18.09,
    54.61,
    58.21,
    62.89,
    70.31,
    75.39,
    81.59,
    85.01,
    99.83,
    109.18,
    115.28,
    119.03,
    128.02,
    147.47,
    157.2,
    161.77,
    170.57,
    174.99,
    181.01,
    188.81,
    199.05,
    202.62,
    216.97,
    226.57,
    233.23,
    240.1,
    244.81,
    249.06,
    253.3,
    262.84,
    274.3,
    284.17,
    288.57,
    310.05,
    319.16,
    326.43,
    333.24,
    345.7,
    349.69,
    360.67,
    364.17,
    371.25,
    374.5,
    385.29,
    391.73,
    396.87,
    414.05,
    423.78,
    430.77,
    445.09
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
 },
 {
  "id": "review",
  "essay": "N24UK-2",
  "title": "Is judicial review worth it?",
  "prompt": "Judicial review is costly, and the decision under review is often simply remade. Is it worth pursuing? Discuss the positives and negatives, and when it is worthwhile.",
  "intro": [
   [
    "3.7",
    "the client's route"
   ],
   [
    "3.1",
    "three grounds"
   ]
  ],
  "concl": [
   "9.4",
   "the cheaper route"
  ],
  "mains": [
   {
    "card": "2.6",
    "cue": "speed: interim relief",
    "sup": [
     [
      "4.8",
      "rights raise intensity"
     ]
    ]
   },
   {
    "card": "3.4",
    "cue": "better process",
    "sup": [
     [
      "3.3",
      "public in substance"
     ]
    ]
   },
   {
    "card": "3.5",
    "cue": "the negatives",
    "sup": [
     [
      "2.5",
      "declaration only"
     ]
    ]
   },
   {
    "card": "3.2",
    "cue": "when it is worth it",
    "sup": [
     [
      "3.6",
      "the line moves out"
     ]
    ]
   }
  ],
  "auth": [
   [
    "Framework",
    0,
    [
     [
      "Council of Civil Service Unions v Minister for the Civil Service [1985] AC 374 (HL) (GCHQ)",
      "three grounds"
     ],
     [
      "Judicial Review Procedure Act 2016",
      "High Court review"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 27(2)",
      "right to apply for review"
     ],
     [
      "High Court Rules 2016 Part 30",
      "procedure and time"
     ]
    ]
   ],
   [
    "Speed and rights",
    1,
    [
     [
      "Christiansen v Director-General of Health [2020] NZHC 887",
      "released within days"
     ],
     [
      "Judicial Review Procedure Act 2016 s 15",
      "interim orders"
     ],
     [
      "Grounded Kiwis Group Inc v Minister of Health [2022] NZHC 832",
      "the lottery failed"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 18(2)",
      "right to enter"
     ]
    ]
   ],
   [
    "Better process",
    2,
    [
     [
      "University of Auckland v Tertiary Education Commission [2004] 2 NZLR 668 (HC)",
      "consult first"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 27(1)",
      "natural justice"
     ],
     [
      "Lab Tests Auckland Ltd v Auckland District Health Board [2008] NZCA 385",
      "contract reviewable, claim lost"
     ]
    ]
   ],
   [
    "Negatives",
    3,
    [
     [
      "Judicial Review Procedure Act 2016 s 16",
      "quash, declare, reconsider"
     ],
     [
      "Borrowdale v Director-General of Health [2020] NZHC 2090",
      "declaration only"
     ]
    ]
   ],
   [
    "When worthwhile",
    4,
    [
     [
      "Attorney-General v Zaoui [2005] NZSC 38",
      "security still reviewable"
     ],
     [
      "Ngāti Whātua Ōrākei Trust v Attorney-General [2018] NZSC 84",
      "only Parliament's process excluded"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "Ombudsmen Act 1975 s 13",
      "investigates administration"
     ],
     [
      "Ombudsmen Act 1975 s 22",
      "unjust or wrong"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "3.7",
     "3.1"
    ],
    "grade": "best",
    "why": "The checklist frames the client's route to court and the grounds set the test. The Ombudsman conclusion answers 'when is it worthwhile' by naming the cheaper alternative.",
    "concl": "9.4"
   },
   {
    "cards": [
     "3.1"
    ],
    "grade": "ok",
    "why": "The grounds are stated, but there is no client's-eye view of cost and route. Ending on remedies repeats a negative instead of answering when review is worth it.",
    "concl": "3.5"
   },
   {
    "cards": [
     "1.6"
    ],
    "grade": "weak",
    "why": "Declarations against Acts belong to the Bill of Rights. Judicial review here is of executive decisions, not legislation.",
    "concl": "1.11"
   },
   {
    "cards": [
     "7.1"
    ],
    "grade": "weak",
    "why": "The Waitangi Tribunal is a different forum. The question is about judicial review.",
    "concl": "7.4"
   }
  ],
  "skel": [
   {
    "cards": [
     "2.6",
     "3.4",
     "3.5",
     "3.2"
    ],
    "grade": "best",
    "why": "Two positives (urgent relief and rights; better process), the negatives, then when review is worth it: the three limbs of the question."
   },
   {
    "cards": [
     "2.6",
     "3.4",
     "3.5"
    ],
    "grade": "ok",
    "why": "Positives and negatives, but the 'when is it worthwhile' limb has no paragraph."
   },
   {
    "cards": [
     "3.1",
     "3.2",
     "3.6"
    ],
    "grade": "weak",
    "why": "Explains doctrine (grounds, deference, justiciability) but never weighs whether review is worth the cost."
   },
   {
    "cards": [
     "2.6",
     "4.8",
     "3.4",
     "3.3"
    ],
    "grade": "weak",
    "why": "A list of wins. The cost and limited-remedy problem never gets a paragraph."
   }
  ],
  "sup": {
   "2.6": [
    {
     "cards": [
      "4.8"
     ],
     "grade": "best",
     "why": "Grounded Kiwis adds the rights point: a right raises the intensity of review, and a declaration sets a standard for the future."
    },
    {
     "cards": [
      "4.8",
      "2.5"
     ],
     "grade": "ok",
     "why": "Borrowdale fits the negatives paragraph better, where its declaration-only result makes the point."
    },
    {
     "cards": [
      "6.4"
     ],
     "grade": "weak",
     "why": "Tavita is about international obligations in removal decisions. Off point."
    },
    {
     "cards": [
      "5.1"
     ],
     "grade": "weak",
     "why": "Unreasonable search is criminal procedure."
    }
   ],
   "3.4": [
    {
     "cards": [
      "3.3"
     ],
     "grade": "best",
     "why": "Lab Tests shows amenability ('public in substance') and its limit: the claim still lost."
    },
    {
     "cards": [
      "3.3",
      "3.1"
     ],
     "grade": "ok",
     "why": "The grounds card repeats the introduction."
    },
    {
     "cards": [
      "9.5"
     ],
     "grade": "weak",
     "why": "Official information is a different regime."
    },
    {
     "cards": [
      "1.4"
     ],
     "grade": "weak",
     "why": "Parliamentary privilege has nothing to do with reviewing executive decisions."
    }
   ],
   "3.5": [
    {
     "cards": [
      "2.5"
     ],
     "grade": "best",
     "why": "Borrowdale: a finely balanced declaration after the event. The clearest example of a modest payoff."
    },
    {
     "cards": [
      "2.5",
      "5.3"
     ],
     "grade": "ok",
     "why": "Baigent compensation is a Bill of Rights remedy, not the ordinary review remedy."
    },
    {
     "cards": [
      "1.6"
     ],
     "grade": "weak",
     "why": "Declarations against statutes are a different remedy for a different problem."
    },
    {
     "cards": [
      "7.4"
     ],
     "grade": "weak",
     "why": "Settlement declarations are a Treaty point. Off topic."
    }
   ],
   "3.2": [
    {
     "cards": [
      "3.6"
     ],
     "grade": "best",
     "why": "Ngāti Whātua Ōrākei 2018 shows the reviewable area widening: practical advice on where review can still reach."
    },
    {
     "cards": [
      "3.6",
      "6.6"
     ],
     "grade": "ok",
     "why": "The Zaoui card repeats the case already on the deference card."
    },
    {
     "cards": [
      "1.5"
     ],
     "grade": "weak",
     "why": "Westco is about Parliament's proceedings, not executive action."
    },
    {
     "cards": [
      "8.3"
     ],
     "grade": "weak",
     "why": "Takamore is about tikanga and burial."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Review checklist: hopscotch to the courthouse, one square at a time. And the grounds of review: three lights on one decision."
   },
   {
    "f": "i",
    "k": "say",
    "t": "Judicial review is the High Court's supervisory jurisdiction over public power.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It asks not whether a decision was right, but whether it was lawful.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Those are Lord Diplock's three grounds in Council of Civil Service Unions v Minister for the Civil Service: illegality, irrationality and procedural impropriety.",
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
    "t": "Claims are brought in the High Court under the Judicial Review Procedure Act 2016, and section 27(2) of the New Zealand Bill of Rights Act 1990 affirms the right to apply for review of a determination affecting a person's rights.",
    "a": [
     [
      0,
      1
     ],
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "i",
    "k": "say",
    "t": "A full claim is expensive, can take months to reach a final hearing, and ends in a discretionary remedy, so the question whether it is worth pursuing is a fair one.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay argues that review is worthwhile where urgent interim relief, rights or fair process matter most, and least worthwhile where the claimant really wants a different result on the merits, because the court will usually send the decision back to be made again.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Fettering a discretion. Going by the book, the wrong book."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The strongest positive is that, although a full claim is slow, the court can act within days when it must.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 15 of the Judicial Review Procedure Act 2016 allows interim orders to protect a claimant until the claim is decided.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In Christiansen v Director-General of Health, a man in managed isolation sought an exemption to visit his dying father.",
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
    "t": "The governing order allowed exemptions on compassionate grounds and in exceptional circumstances, but officials applied a narrower Ministry framework and never addressed exceptional circumstances.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Walker J found a strong case of error of law and of failure to consider a mandatory relevant consideration, and made an interim order under section 15 releasing him, on conditions, to see his father.",
    "a": [
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "No other process could have acted in time.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The case also shows why review matters to the rule of law: a policy cannot narrow a discretion that Parliament conferred, even in an emergency.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Review is also worthwhile where rights are engaged, because rights raise the intensity of review.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Grounded Kiwis Group Inc v Minister of Health, citizens stranded abroad challenged the managed isolation booking system.",
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
    "t": "Mallon J held that most of the system was justified, but that the virtual lobby, which allocated rooms at random with narrow emergency criteria and no way to prioritise by need, was not a justified limit on the right of every citizen to enter New Zealand under section 18(2) of the Bill of Rights Act.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The court made a declaration, setting a standard for any future scheme.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Publishing a ranking. Top of the ladder? Ask before you rank."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "A second positive is that review improves the way government decides.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "In University of Auckland v Tertiary Education Commission, the Commission planned to publish a comparison ranking New Zealand universities against British ones, and the universities learned of it only weeks before release.",
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
    "t": "Williams J held that publication was a reviewable exercise of statutory power.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The universities won on natural justice and legitimate expectation, because they had no real notice or chance to respond and their data had been supplied for another purpose, but lost on irrationality and mistake of fact.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Interim orders stopped publication until the Commission consulted.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The remedy matched the ground won: the court did not ban the ranking, it required a fair process first.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Section 27(1) of the Bill of Rights Act gives the right to natural justice statutory footing.",
    "a": [
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Review also reaches decisions that look commercial.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "In Lab Tests Auckland Ltd v Auckland District Health Board, the Court of Appeal accepted that a health board's award of a laboratory contract was reviewable, because a decision that is in substance public is reviewable whatever its source.",
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
    "t": "But the court held that the standard depends on the body, its function and the alleged wrong, rejected the High Court's broad probity standard, and restored the contract.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Reviewability does not guarantee success.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Remedies. Hold your horses. The court holds the rein."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The negatives are real.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Every remedy in judicial review is discretionary.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Under section 16 of the Judicial Review Procedure Act 2016 the court may quash a decision, make a declaration, or set the decision aside and direct the decision-maker to reconsider it, and relief can be refused for delay, futility or the availability of another remedy.",
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
    "t": "The usual result of success is that the decision is made again, lawfully, and it may be made the same way.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "A claimant who wants a different outcome on the merits will often be disappointed, because review is not an appeal.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Borrowdale v Director-General of Health shows how modest the payoff can be.",
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
    "t": "A full High Court held that for the first nine days of the 2020 lockdown, official announcements told people the law required them to stay home when no order yet did, so those limits were not prescribed by law, although they were necessary and proportionate.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The only remedy was a declaration, and the court described the case for relief as finely balanced.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Add the cost of High Court litigation, the months a defended claim can take to reach a final hearing under Part 30 of the High Court Rules 2016, and the risk of paying costs if the claim fails, and review is a poor choice for many claimants whose matter is not urgent.",
    "a": [
     [
      0,
      3
     ]
    ]
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Card: Deference. Hands off the expert's tools."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Whether review is worthwhile also depends on how closely the court will look.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Courts defer more on national security, high policy and the allocation of public resources, and less where fundamental rights or fairness to an individual are at stake; on the meaning of a statute they do not defer at all.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Even so, little is now beyond review.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "In Attorney-General v Zaoui, the Supreme Court held that a security risk certificate was reviewable, and read the immigration legislation consistently with the rights not to be deprived of life or subjected to torture.",
    "a": [
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The boundary of what courts will hear is also moving outward.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "In Ngāti Whātua Ōrākei Trust v Attorney-General, the Supreme Court held that only decisions proximately connected to proceedings in Parliament are excluded, so a claim for declarations about the trust's rights could proceed even though settlement legislation was planned.",
    "a": [
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "For a client the lesson is practical: review is most likely to succeed where the claim is framed around legality, procedure or rights, and least likely where it asks the court to second-guess a policy judgment.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Ombudsmen. The people's ear at the window."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Judicial review is worth pursuing in identifiable situations: where urgent interim relief is needed, as in Christiansen, because the court can act fast even though a full claim is slow; where a right is engaged and a declaration will shape future conduct, as in Grounded Kiwis; and where a fair process is the real goal, as in the Tertiary Education Commission case.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "It is rarely worthwhile where the claimant wants a different merits result, because the remedy is discretionary and the decision is usually remade.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "For many complaints a cheaper route is better.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Under section 13 of the Ombudsmen Act 1975 an Ombudsman can investigate matters of administration, and under section 22 can find a decision unreasonable, unjust or simply wrong, grounds wider than review, although the result is only a recommendation.",
    "a": [
     [
      5,
      0
     ],
     [
      5,
      1
     ]
    ]
   },
   {
    "f": "c",
    "k": "say",
    "t": "The sensible advice to a client is to treat review as one tool among several: powerful when time, rights or fairness are at stake, and expensive when they are not.",
    "a": []
   }
  ],
  "modelWords": 1191,
  "audio": {
   "src": "data/review.mp3?v=20261121a",
   "starts": [
    0.0,
    8.24,
    13.17,
    17.22,
    27.1,
    43.05,
    52.67,
    67.9,
    72.15,
    78.15,
    87.47,
    94.93,
    106.52,
    119.11,
    122.03,
    130.5,
    136.32,
    143.72,
    162.37,
    167.23,
    171.86,
    176.15,
    188.76,
    193.88,
    207.0,
    211.09,
    216.9,
    222.85,
    226.13,
    239.72,
    248.85,
    252.5,
    256.79,
    258.75,
    262.06,
    279.7,
    285.95,
    292.14,
    296.83,
    311.79,
    317.65,
    334.57,
    338.11,
    342.55,
    355.47,
    358.31,
    371.07,
    374.78,
    390.7,
    403.21,
    407.53,
    429.52,
    437.8,
    440.76,
    458.73
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
 },
 {
  "id": "prisoner-vote",
  "essay": "P2",
  "title": "Prisoner voting 2025 and the Bill of Rights",
  "prompt": "In 2025 Parliament reinstated a ban on prisoner voting, despite the declaration in Taylor and an Attorney-General's section 7 report. How far does the Bill of Rights restrain Parliament?",
  "intro": [
   [
    "4.7",
    "the 2025 ban"
   ],
   [
    "1.1",
    "section 4: Parliament wins"
   ]
  ],
  "concl": [
   "1.11",
   "supreme law?"
  ],
  "mains": [
   {
    "card": "4.2",
    "cue": "the method",
    "sup": [
     [
      "4.1",
      "section 6"
     ],
     [
      "4.8",
      "section 5"
     ]
    ]
   },
   {
    "card": "1.9",
    "cue": "the s 7 warning",
    "sup": [
     [
      "1.2",
      "s 80 not reserved"
     ]
    ]
   },
   {
    "card": "1.6",
    "cue": "the declaration",
    "sup": [
     [
      "1.8",
      "second declaration"
     ]
    ]
   },
   {
    "card": "2.8",
    "cue": "the dialogue defence",
    "sup": []
   }
  ],
  "auth": [
   [
    "The facts",
    0,
    [
     [
      "Attorney-General v Taylor [2018] NZSC 104",
      "declaration, 3–2"
     ],
     [
      "Electoral (Disqualification of Sentenced Prisoners) Amendment Act 2010",
      "blanket ban"
     ],
     [
      "Electoral Amendment Act 2025",
      "ban reinstated"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 12",
      "right to vote"
     ]
    ]
   ],
   [
    "The method",
    1,
    [
     [
      "Hansen v R [2007] NZSC 7",
      "six steps"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 5",
      "justified limits"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 6",
      "consistent meaning"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 4",
      "Act still applies"
     ],
     [
      "Moonen v Film and Literature Board of Review [2000] 2 NZLR 9 (CA)",
      "least limiting meaning"
     ]
    ]
   ],
   [
    "Parliament",
    2,
    [
     [
      "New Zealand Bill of Rights Act 1990 s 7",
      "warns the House"
     ],
     [
      "Constitution Act 1986 s 16",
      "royal assent"
     ],
     [
      "Electoral Act 1993 s 268",
      "reserved provisions"
     ],
     [
      "Electoral Act 1993 s 80",
      "not reserved"
     ]
    ]
   ],
   [
    "The courts",
    3,
    [
     [
      "New Zealand Bill of Rights Act 1990 ss 7A–7B",
      "Government must respond"
     ],
     [
      "Make It 16 Inc v Attorney-General [2022] NZSC 134",
      "voting age declared"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Taylor (Court of Appeal): a collaborative enterprise",
      "each branch in its sphere"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "supreme law rejected"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "4.7",
     "1.1"
    ],
    "grade": "best",
    "why": "The 2025 Act is the facts; section 4 and sovereignty set the legal answer. The written-constitution conclusion names the only route to a legal restraint.",
    "concl": "1.11"
   },
   {
    "cards": [
     "4.7"
    ],
    "grade": "ok",
    "why": "The facts are there, but the sovereignty frame is missing. Ending on Taylor restates instead of concluding.",
    "concl": "1.6"
   },
   {
    "cards": [
     "5.1",
     "5.4"
    ],
    "grade": "weak",
    "why": "Search and arrest rights are criminal procedure. The question is whether the Bill of Rights restrains Parliament.",
    "concl": "5.2"
   },
   {
    "cards": [
     "1.12"
    ],
    "grade": "weak",
    "why": "Party-hopping and government formation are electoral politics, not rights.",
    "concl": "9.11"
   }
  ],
  "skel": [
   {
    "cards": [
     "4.2",
     "1.9",
     "1.6",
     "2.8"
    ],
    "grade": "best",
    "why": "The method (ss 4–6), the warning before enactment (s 7), the declaration after it, then the dialogue defence."
   },
   {
    "cards": [
     "4.2",
     "1.6",
     "2.8"
    ],
    "grade": "ok",
    "why": "Misses the s 7 report, the warning Parliament overrode in 2025."
   },
   {
    "cards": [
     "4.3",
     "4.4",
     "4.5"
    ],
    "grade": "weak",
    "why": "Other rights cases. The voting ban and Parliament's response disappear."
   },
   {
    "cards": [
     "1.1",
     "1.2",
     "1.5",
     "1.11"
    ],
    "grade": "weak",
    "why": "Sovereignty from every angle; the Bill of Rights mechanisms are never explained."
   }
  ],
  "sup": {
   "4.2": [
    {
     "cards": [
      "4.1",
      "4.8"
     ],
     "grade": "best",
     "why": "Section 6 (Moonen) is the courts' main tool; the s 5 test (Grounded Kiwis steps) shows why a blanket ban fails minimal impairment."
    },
    {
     "cards": [
      "4.1"
     ],
     "grade": "ok",
     "why": "Section 6 is covered, but the s 5 test is where the ban fails."
    },
    {
     "cards": [
      "4.6"
     ],
     "grade": "weak",
     "why": "Who the Bill of Rights binds is not in issue."
    },
    {
     "cards": [
      "6.5"
     ],
     "grade": "weak",
     "why": "The international law presumption is a parallel you don't need."
    }
   ],
   "1.9": [
    {
     "cards": [
      "1.2"
     ],
     "grade": "best",
     "why": "Section 268 reserves the voting age but not s 80, so a simple majority was enough."
    },
    {
     "cards": [
      "1.2",
      "1.3"
     ],
     "grade": "ok",
     "why": "Simpson is about procedural slips; it adds little."
    },
    {
     "cards": [
      "1.4"
     ],
     "grade": "weak",
     "why": "Privilege is not in issue."
    },
    {
     "cards": [
      "9.3"
     ],
     "grade": "weak",
     "why": "Public money is off topic."
    }
   ],
   "1.6": [
    {
     "cards": [
      "1.8"
     ],
     "grade": "best",
     "why": "Make It 16 is the second franchise declaration: in both, the final decision stayed with Parliament."
    },
    {
     "cards": [
      "1.8",
      "9.12"
     ],
     "grade": "ok",
     "why": "The Declaratory Judgments Act is background, not needed here."
    },
    {
     "cards": [
      "5.3"
     ],
     "grade": "weak",
     "why": "Baigent compensation is not a declaration about an Act."
    },
    {
     "cards": [
      "3.5"
     ],
     "grade": "weak",
     "why": "Judicial review remedies concern executive decisions."
    }
   ],
   "2.8": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. Taylor (CA)'s 'collaborative enterprise' and the dialogue model carry the counter."
    },
    {
     "cards": [
      "1.10"
     ],
     "grade": "ok",
     "why": "Conventions of comity support the dialogue, but they are a side point."
    },
    {
     "cards": [
      "9.8"
     ],
     "grade": "weak",
     "why": "Judicial independence is not in issue."
    },
    {
     "cards": [
      "2.3"
     ],
     "grade": "weak",
     "why": "Payn is about officers on private property."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Prisoner voting 2025: the alarm sounded and Parliament marched on. And can Parliament do anything? The lion on the throne."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In Attorney-General v Taylor, the Supreme Court declared that the ban on all sentenced prisoners voting was inconsistent with the New Zealand Bill of Rights Act 1990.",
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
    "t": "In 2025 Parliament reinstated a ban.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The Electoral Amendment Act 2025 again disqualified sentenced prisoners from voting, and it passed even though the Attorney-General had reported that parts of the Bill were inconsistent with the right to vote in section 12.",
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
    "t": "The episode tests how far the Bill of Rights restrains Parliament.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay argues that it does not restrain Parliament legally, because section 4 preserves every Act, but that it does impose a real political discipline: it forces Parliament to make its choice openly, after warning, and to answer for it.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Hansen. Six stone steps; climb in order."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The Bill of Rights works through interpretation, not invalidation.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Hansen v R sets out the method.",
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
    "t": "The court identifies Parliament's intended meaning and asks whether it limits a right; if so, whether the limit is justified under section 5; if not, whether section 6 allows a consistent meaning; and if none is available, section 4 requires the court to apply the Act anyway.",
    "a": [
     [
      1,
      1
     ],
     [
      1,
      2
     ],
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In Hansen itself a reverse onus was an unjustified limit on the presumption of innocence, but the words could not be read down, so the Act was applied.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Section 6 is the courts' main tool.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Moonen v Film and Literature Board of Review, the Court of Appeal required the Board to adopt the meaning of the classification statute that limited freedom of expression least.",
    "a": [
     [
      1,
      4
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "But section 6 cannot rewrite clear words, and a blanket disqualification of prisoners admits only one meaning.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "Section 5 asks whether a limit is demonstrably justified: an important purpose, a rational connection, minimal impairment and proportionality.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "A ban that removes the vote from everyone serving a sentence, however short, is hard to defend at the minimal impairment step, which is why the Crown accepted in Taylor that the 2010 ban was not a justified limit.",
    "a": []
   },
   {
    "f": "m0s1",
    "k": "say",
    "t": "In practice, then, the Bill of Rights changes how statutes are read far more often than it changes whether they apply.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Passing a Bill. No plain sailing: one lock at a time."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Bill of Rights also works before a Bill becomes law.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Section 7 requires the Attorney-General to bring to the attention of the House any provision of a Bill that appears inconsistent with the Bill of Rights.",
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
    "t": "The report is a warning, not a veto.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The 2025 Bill went through the ordinary stages, first reading, select committee, second and third readings and royal assent under section 16 of the Constitution Act 1986, with the report on the record.",
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
    "t": "The House chose to proceed.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Nothing in the constitution required more.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Section 268 of the Electoral Act 1993 entrenches a small set of reserved provisions, including the voting age, so that they may be changed only by 75 per cent of the House or by a referendum.",
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
    "t": "The disqualification of prisoners in section 80 of the Electoral Act is not reserved.",
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
    "t": "A simple majority could therefore reinstate the ban, as Parliament did in 2010 and again in 2025.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The contrast is telling: the age at which people may vote is entrenched, but whether prisoners may vote is left to the majority of the day.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Declaration and response. The court rings the bell; Parliament decides whether to answer."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The courts' strongest response is the declaration of inconsistency.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "In Taylor, the Supreme Court held by three to two that senior courts have power to declare an Act inconsistent with the Bill of Rights.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The majority reasoned that declarations fall within the courts' ordinary remedial powers, that the Bill of Rights requires an effective remedy, and that a declaration respects section 4 because the Act remains valid.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The minority held that no such power existed without statute.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The power matters even without a legal consequence: a declaration is a formal finding by the highest court that Parliament has limited a right without justification.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Parliament then inserted sections 7A and 7B, which require the Attorney-General to present a declaration to the House and the Government to respond.",
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
    "t": "The model was used again in Make It 16 Inc v Attorney-General, where the Supreme Court declared that the voting age of 18 was an unjustified limit on freedom from age discrimination.",
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
    "t": "Both declarations concern the franchise, and in both the final decision stayed with Parliament.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The 2025 Act shows what that means in practice: Parliament heard the bell and chose not to answer it in the way the court would have preferred.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Separation of powers. Three pillars under one arch."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "There is a respectable case that this is how the system should work.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "On the dialogue model, each branch acts within its own sphere: the courts identify inconsistency and say so publicly, the Attorney-General warns the House, and elected members decide, accountable to voters.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The Court of Appeal in Taylor described government as a collaborative enterprise in which each branch respects the others.",
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
    "t": "Parliament did not ignore the courts; it disagreed with them, on the record, after a statutory process that required it to engage.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Under MMP a Bill that limits rights must usually win the support of more than one party, which adds a further check.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "That is accountability of a political kind, and it leaves contested social questions, such as who should vote, with the institution that voters themselves elect.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The weakness of the answer is plain, however: the people whose rights are limited are the people who cannot vote.",
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
    "t": "The 2025 Act shows that the Bill of Rights informs Parliament but does not restrain it.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Section 4 preserves the Act, section 6 cannot rewrite clear words, section 7 reports can be overridden, and declarations leave the final word with the House.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The weakness is sharpest on the franchise, because those whose right is removed cannot vote against the government that removed it.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Anyone who wants a legal restraint must argue for supreme law, which the 1985 White Paper, A Bill of Rights for New Zealand, proposed and which was rejected in favour of an ordinary statute.",
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
    "t": "Until then the Bill of Rights is a powerful guide to interpretation and a public alarm bell, but whether Parliament answers the bell is a political choice.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "In 2025 that choice was made openly, and voters can judge it.",
    "a": []
   }
  ],
  "modelWords": 1012,
  "audio": {
   "src": "data/prisoner-vote.mp3?v=20261118d",
   "starts": [
    0.0,
    10.2,
    21.25,
    25.22,
    39.23,
    43.25,
    57.71,
    61.53,
    65.58,
    68.5,
    85.31,
    94.49,
    97.26,
    107.12,
    113.92,
    123.14,
    136.24,
    143.4,
    147.75,
    151.17,
    160.15,
    162.86,
    177.58,
    179.69,
    182.57,
    197.29,
    202.62,
    210.65,
    219.15,
    225.45,
    229.74,
    237.23,
    249.53,
    253.55,
    263.08,
    272.32,
    283.65,
    289.28,
    298.6,
    303.27,
    307.15,
    320.02,
    326.8,
    334.35,
    341.29,
    350.76,
    357.39,
    363.07,
    369.32,
    379.26,
    386.56,
    399.25,
    407.97
   ],
   "voice": ""
  }
 },
 {
  "id": "election",
  "essay": "P3",
  "title": "After the 2026 election",
  "prompt": "Between the 7 November 2026 election and the formation of a new government, what rules govern the executive, and should they be codified?",
  "intro": [
   [
    "9.11",
    "the 2026 count"
   ],
   [
    "2.8",
    "executive and House"
   ]
  ],
  "concl": [
   "1.1",
   "Parliament can codify"
  ],
  "mains": [
   {
    "card": "1.10",
    "cue": "the caretaker rules",
    "sup": [
     [
      "9.2",
      "2026 fix for ministers"
     ]
    ]
   },
   {
    "card": "9.1",
    "cue": "forming a government",
    "sup": [
     [
      "9.3",
      "supply is confidence"
     ]
    ]
   },
   {
    "card": "1.11",
    "cue": "for codifying",
    "sup": [
     [
      "1.7",
      "scattered sources"
     ]
    ]
   },
   {
    "card": "3.6",
    "cue": "against: keep courts out",
    "sup": []
   }
  ],
  "auth": [
   [
    "The facts",
    0,
    [
     [
      "Electoral Commission preliminary results, 7 November 2026",
      "67 of 131 seats; 66 needed"
     ],
     [
      "Official results due 27 November 2026",
      "specials counted"
     ],
     [
      "Cabinet Manual 2023",
      "conventions recorded"
     ],
     [
      "Cabinet Office circular CO (23) 10",
      "caretaker decisions"
     ]
    ]
   ],
   [
    "Caretaker rules",
    1,
    [
     [
      "1984 constitutional crisis",
      "origin of the rule"
     ],
     [
      "Jennings test",
      "precedent, belief, reason"
     ],
     [
      "Constitution Act 1986 s 6",
      "ministers must be MPs"
     ],
     [
      "Constitution Amendment Act 2026",
      "ministers stay until list declared"
     ]
    ]
   ],
   [
    "Formation",
    2,
    [
     [
      "Constitution Act 1986 ss 2–3",
      "Governor-General's powers"
     ],
     [
      "Constitution Act 1986 s 22",
      "no spending without an Act"
     ],
     [
      "Public Finance Act 1989 ss 4–5",
      "appropriations"
     ]
    ]
   ],
   [
    "Codify?",
    3,
    [
     [
      "Letters Patent Constituting the Office of Governor-General 1983",
      "the office"
     ],
     [
      "Palmer and Butler, A Constitution for Aotearoa New Zealand (2016)",
      "a draft"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Council of Civil Service Unions v Minister for the Civil Service [1985] AC 374 (HL) (GCHQ)",
      "unsuited prerogatives"
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
     "9.11",
     "2.8"
    ],
    "grade": "best",
    "why": "The 2026 count is the facts; the fused executive and House frame who governs in the gap. The sovereignty conclusion says Parliament can codify whenever it chooses.",
    "concl": "1.1"
   },
   {
    "cards": [
     "9.11"
    ],
    "grade": "ok",
    "why": "The facts are there, but the frame is missing. Ending on conventions restates the problem.",
    "concl": "1.10"
   },
   {
    "cards": [
     "1.12"
    ],
    "grade": "weak",
    "why": "Party-hopping and entrenchment are electoral rules, not government formation.",
    "concl": "1.2"
   },
   {
    "cards": [
     "9.8"
    ],
    "grade": "weak",
    "why": "Courts and judicial independence are not the executive.",
    "concl": "9.12"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.10",
     "9.1",
     "1.11",
     "3.6"
    ],
    "grade": "best",
    "why": "The caretaker rules, formation under MMP, the case for codifying, then the case against."
   },
   {
    "cards": [
     "1.10",
     "9.1",
     "1.11"
    ],
    "grade": "ok",
    "why": "No counter to codification."
   },
   {
    "cards": [
     "9.2",
     "9.3",
     "9.10"
    ],
    "grade": "weak",
    "why": "Offices and money, but neither the caretaker convention nor formation."
   },
   {
    "cards": [
     "1.11",
     "1.7",
     "1.2"
    ],
    "grade": "weak",
    "why": "All about codification; the actual rules are never explained."
   }
  ],
  "sup": {
   "1.10": [
    {
     "cards": [
      "9.2"
     ],
     "grade": "best",
     "why": "Section 6 and the 2026 amendment show Parliament fixing one gap by statute without codifying the rest."
    },
    {
     "cards": [
      "9.2",
      "9.5"
     ],
     "grade": "ok",
     "why": "OIA s 9(2)(f) protects conventions, but it is detail here."
    },
    {
     "cards": [
      "7.2"
     ],
     "grade": "weak",
     "why": "The Lands case is about Treaty principles."
    },
    {
     "cards": [
      "1.4"
     ],
     "grade": "weak",
     "why": "Privilege is off topic."
    }
   ],
   "9.1": [
    {
     "cards": [
      "9.3"
     ],
     "grade": "best",
     "why": "Confidence is tested through supply: no Act, no money (Constitution Act s 22)."
    },
    {
     "cards": [
      "9.3",
      "1.12"
     ],
     "grade": "ok",
     "why": "Party-hopping protects proportionality, a side point here."
    },
    {
     "cards": [
      "6.7"
     ],
     "grade": "weak",
     "why": "Treaty-making is a different convention."
    },
    {
     "cards": [
      "9.4"
     ],
     "grade": "weak",
     "why": "The Ombudsman has no role in formation."
    }
   ],
   "1.11": [
    {
     "cards": [
      "1.7"
     ],
     "grade": "best",
     "why": "The scattered sources are the argument for writing the rules down."
    },
    {
     "cards": [
      "1.7",
      "1.2"
     ],
     "grade": "ok",
     "why": "Entrenchment matters only if codified rules were also entrenched."
    },
    {
     "cards": [
      "8.6"
     ],
     "grade": "weak",
     "why": "Marine title is off topic."
    },
    {
     "cards": [
      "5.2"
     ],
     "grade": "weak",
     "why": "Excluding evidence is off topic."
    }
   ],
   "3.6": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. GCHQ's list of prerogatives unsuited to review (appointing ministers, dissolution) carries the point."
    },
    {
     "cards": [
      "3.2"
     ],
     "grade": "ok",
     "why": "Deference is related, but justiciability is the sharper point."
    },
    {
     "cards": [
      "3.3"
     ],
     "grade": "weak",
     "why": "Lab Tests is about public contracts."
    },
    {
     "cards": [
      "4.4"
     ],
     "grade": "weak",
     "why": "The prisoner's wig is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. After the election: steady as she goes, until the new captain is chosen. And separation of powers: three pillars under one arch."
   },
   {
    "f": "i",
    "k": "say",
    "t": "New Zealand voted on 7 November 2026.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Preliminary results gave the incumbent National, ACT and New Zealand First coalition 67 seats in a projected 131-seat House, where 66 are needed for a majority, and the official result, including special votes, will not be declared until 27 November.",
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
    "t": "Until a government is formed, the existing ministers continue as a caretaker government.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Almost none of the rules that govern this period are law.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "They are constitutional conventions, recorded in the Cabinet Manual and in Cabinet Office guidance, and they depend on the political actors' willingness to follow them.",
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
    "t": "Because the executive is drawn from and answerable to the House, the uncertainty in the House becomes uncertainty in government.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay explains who governs and under what rules, how a government is formed under MMP, and whether those rules should be codified.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that the core should remain convention, with targeted statutory fixes of the kind Parliament has already made.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Conventions. The velvet rope held by nothing. Everyone stops."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The caretaker convention applies from an election until a new government takes office.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Where the result is clear, the outgoing government makes no significant new policy decisions and follows the incoming government's wishes on urgent matters.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Where, as now, the result is unclear, it continues routine business, defers significant decisions where it can, and consults other parties where a decision cannot wait.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The convention's modern form traces to the 1984 constitutional crisis, when the outgoing Prime Minister at first refused to act on the incoming government's advice on devaluing the currency.",
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
    "t": "On the Jennings test it is a true convention: there are precedents, the actors regard themselves as bound, and there is a constitutional reason for it, because a government whose majority is uncertain should not bind its successor.",
    "a": [
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The 2026 result illustrates the difficulty of applying it: the incumbent coalition appears to have a majority, so the result is probably clear, but until special votes are counted it cannot be certain, and ministers should act accordingly.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "No court would enforce it.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "One part of the period is now governed by statute.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Section 6 of the Constitution Act 1986 requires ministers to be members of Parliament.",
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
    "t": "The Constitution Amendment Act 2026 now allows a minister who vacates a seat at a general election to remain in office until the day after list members are declared elected.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Parliament fixed one specific gap by statute without codifying the convention around it.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Governor-General. The candle burns, but ministers strike the match."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Formation is governed by the principle that the Prime Minister is whoever commands the confidence of the House.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Governor-General, who exercises the Sovereign's powers under sections 2 and 3 of the Constitution Act 1986, appoints the Prime Minister and ministers, but by the cardinal convention acts on advice.",
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
    "t": "Under MMP the Governor-General does not choose a government.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The parties negotiate, and the Governor-General waits for a clear public indication, usually written agreements, of who can command a majority.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Formation can take time: about eight weeks in 1996, and 26 days in 2017.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Governor-General's personal discretion matters only if the parties cannot agree, and in that event it is the only real check.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Confidence is ultimately tested through money.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Section 22 of the Constitution Act forbids the Crown to spend public money except by or under an Act of Parliament, and the Public Finance Act 1989 requires appropriations.",
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
    "f": "m1s0",
    "k": "say",
    "t": "A government that cannot obtain supply cannot govern.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "That is why confidence and supply agreements are the currency of MMP formation, and why a fresh election is possible if no government can be formed.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "In 2026 the arithmetic is tight: a one-seat margin means a single defection or a shift in special votes could change who commands confidence.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Written constitution? Loose pages beside one clasped volume."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The case for codifying these rules is certainty.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "A tight result under MMP, with a projected majority of one or two seats and an overhang that enlarges the House, is exactly when unwritten rules are most likely to be tested.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "If coalition partners fell out, or special votes changed the result, the Governor-General might have to exercise personal judgment, and the public would have no authoritative text against which to judge that decision.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Clear written rules would also protect the Governor-General from any suggestion of partisanship.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The rules are also scattered.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "They are found in the Constitution Act, the Electoral Act 1993, the Letters Patent constituting the office of Governor-General, the Cabinet Manual and Cabinet Office circulars, and in the practice of past formations.",
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
    "t": "Palmer and Butler's draft constitution would write much of this down.",
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
    "t": "Codification would make the rules accessible to citizens, not only to officials and party negotiators.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Should courts stay out? A foot in the door."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The case against codification is strong.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Conventions adapt; statutes harden.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The caretaker convention has been refined after successive MMP elections without legislation, and formation has always been resolved without crisis.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Codification would also raise the question of enforcement.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "If the rules became law, a disappointed party could ask a court to review the Governor-General's choice of Prime Minister, a decision that the House of Lords in Council of Civil Service Unions v Minister for the Civil Service listed among the prerogative powers unsuited to judicial review by their nature, alongside dissolution and the appointment of ministers.",
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
    "t": "Moving those questions from Parliament and the voters to the courts would make government formation slower and more adversarial, and less accountable, not more.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The current system's real safeguard is political: parties that breach the conventions answer to the House and, at the next election, to voters.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Can Parliament do anything? The lion on the throne."
   },
   {
    "f": "c",
    "k": "say",
    "t": "The rules that govern New Zealand after an election are almost entirely convention, and so far they have worked.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Parliament has full power under section 15(1) of the Constitution Act 1986 to codify any of them at any time, and it has done so where a specific problem appeared, as with the 2026 amendment to section 6.",
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
    "t": "That targeted approach is the right one.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Stating the confidence principle and the caretaker rules in a public text, without making them enforceable in court, would give certainty without inviting litigation.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The rest should remain what it is: a rope that nothing holds, but at which everyone stops.",
    "a": []
   }
  ],
  "modelWords": 1002,
  "audio": {
   "src": "data/election.mp3?v=20261118d",
   "starts": [
    0.0,
    9.09,
    13.38,
    31.3,
    36.61,
    39.87,
    49.37,
    56.6,
    64.66,
    72.23,
    77.19,
    82.22,
    91.35,
    101.74,
    114.56,
    127.62,
    142.66,
    144.81,
    148.29,
    155.29,
    167.28,
    173.33,
    178.11,
    184.38,
    197.61,
    201.56,
    209.83,
    217.69,
    225.34,
    228.42,
    241.26,
    244.76,
    253.55,
    264.42,
    269.52,
    272.72,
    283.48,
    295.72,
    301.2,
    303.49,
    317.46,
    321.49,
    328.74,
    332.58,
    335.49,
    338.28,
    347.45,
    351.23,
    371.6,
    380.46,
    389.24,
    393.85,
    400.38,
    415.46,
    418.21,
    427.94
   ],
   "voice": ""
  }
 },
 {
  "id": "tikanga",
  "essay": "J25-2",
  "title": "Tikanga as part of the fabric",
  "prompt": "Glazebrook J in Ellis said tikanga is now part of the fabric of New Zealand law and institutions through legislation, the common law and policy. Discuss how far that is true for each, with statutes, cases and examples of tikanga.",
  "intro": [
   [
    "8.7",
    "statute, common law, policy"
   ]
  ],
  "concl": [
   "1.1",
   "Parliament holds the scissors"
  ],
  "mains": [
   {
    "card": "8.6",
    "cue": "legislation",
    "sup": [
     [
      "7.3",
      "tikanga as applicable law"
     ]
    ]
   },
   {
    "card": "8.4",
    "cue": "common law",
    "sup": [
     [
      "8.3",
      "relevant consideration"
     ],
     [
      "8.1",
      "customary rights survive"
     ]
    ]
   },
   {
    "card": "7.5",
    "cue": "policy and practice",
    "sup": []
   },
   {
    "card": "8.2",
    "cue": "the limit: override",
    "sup": [
     [
      "8.5",
      "2026 bar names tikanga"
     ]
    ]
   }
  ],
  "auth": [
   [
    "The question",
    0,
    [
     [
      "Ellis v R [2022] NZSC 114",
      "Glazebrook J: the fabric"
     ],
     [
      "Law Commission, He Poutama (2023)",
      "tikanga on its own terms"
     ]
    ]
   ],
   [
    "Legislation",
    1,
    [
     [
      "Marine and Coastal Area (Takutai Moana) Act 2011 s 58",
      "held under tikanga"
     ],
     [
      "Marine and Coastal Area (Takutai Moana) (Customary Marine Title) Amendment Act 2025",
      "harder to prove"
     ],
     [
      "Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board [2021] NZSC 127",
      "tikanga as applicable law"
     ],
     [
      "Exclusive Economic Zone and Continental Shelf (Environmental Effects) Act 2012 s 59(2)(l)",
      "other applicable law"
     ]
    ]
   ],
   [
    "Common law",
    2,
    [
     [
      "Takamore v Clarke [2012] NZSC 116",
      "relevant consideration"
     ],
     [
      "Te Weehi v Regional Fisheries Officer [1986] 1 NZLR 680 (HC)",
      "customary right survives"
     ],
     [
      "Fisheries Act 1983 s 88(2)",
      "Māori fishing rights"
     ]
    ]
   ],
   [
    "Policy",
    3,
    [
     [
      "Te Ao Mārama (District Court)",
      "court practice"
     ],
     [
      "Cabinet Manual 2023",
      "Treaty analysis of Bills"
     ],
     [
      "Ngāti Whātua Ōrākei Trust v Attorney-General [2022] NZHC 843",
      "pūkenga evidence"
     ]
    ]
   ],
   [
    "The limit",
    4,
    [
     [
      "Attorney-General v Ngāti Apa [2003] 3 NZLR 643 (CA)",
      "title survives"
     ],
     [
      "Foreshore and Seabed Act 2004",
      "vested in the Crown"
     ],
     [
      "Climate Change Response Act 2002 s 271",
      "tort bar"
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
     "8.7"
    ],
    "grade": "best",
    "why": "Glazebrook J's three routes are the structure the question gives you. The sovereignty conclusion states the limit on all three.",
    "concl": "1.1"
   },
   {
    "cards": [
     "8.4"
    ],
    "grade": "ok",
    "why": "Ellis is the source of the quote, but the three-route structure only arrives at the end.",
    "concl": "8.7"
   },
   {
    "cards": [
     "7.6",
     "7.2"
    ],
    "grade": "weak",
    "why": "This frames a Treaty principles essay. Tikanga is distinct from the Treaty.",
    "concl": "7.7"
   },
   {
    "cards": [
     "6.1"
    ],
    "grade": "weak",
    "why": "International and Imperial law are off topic.",
    "concl": "6.2"
   }
  ],
  "skel": [
   {
    "cards": [
     "8.6",
     "8.4",
     "7.5",
     "8.2"
    ],
    "grade": "best",
    "why": "One paragraph per route (legislation, common law, policy), then Parliament's override as the limit."
   },
   {
    "cards": [
     "8.6",
     "8.4",
     "7.5"
    ],
    "grade": "ok",
    "why": "The three routes, but no limit, so 'how far is that true' is only half answered."
   },
   {
    "cards": [
     "8.3",
     "8.4",
     "8.1"
    ],
    "grade": "weak",
    "why": "All common law. Legislation and policy are missing."
   },
   {
    "cards": [
     "7.2",
     "7.3",
     "7.4"
    ],
    "grade": "weak",
    "why": "Treaty cases. The question is about tikanga."
   }
  ],
  "sup": {
   "8.6": [
    {
     "cards": [
      "7.3"
     ],
     "grade": "best",
     "why": "Trans-Tasman shows tikanga as 'other applicable law' in a general environmental statute."
    },
    {
     "cards": [
      "7.3",
      "8.1"
     ],
     "grade": "ok",
     "why": "Te Weehi is common law; it fits better under Ellis."
    },
    {
     "cards": [
      "6.3"
     ],
     "grade": "weak",
     "why": "International treaties are off topic."
    },
    {
     "cards": [
      "9.6"
     ],
     "grade": "weak",
     "why": "Privacy is off topic."
    }
   ],
   "8.4": [
    {
     "cards": [
      "8.3",
      "8.1"
     ],
     "grade": "best",
     "why": "Takamore (tikanga as a relevant consideration) and Te Weehi (customary rights survive) show the common law route before and after Ellis."
    },
    {
     "cards": [
      "8.3"
     ],
     "grade": "ok",
     "why": "Takamore is essential; Te Weehi adds the customary-rights strand."
    },
    {
     "cards": [
      "7.7"
     ],
     "grade": "weak",
     "why": "Who defines Treaty principles is a different question."
    },
    {
     "cards": [
      "4.6"
     ],
     "grade": "weak",
     "why": "Who the Bill of Rights binds is off topic."
    }
   ],
   "7.5": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. Te Ao Mārama and the Cabinet Manual are named in the paragraph itself."
    },
    {
     "cards": [
      "7.4"
     ],
     "grade": "ok",
     "why": "NWO 2018 is the earlier procedural ruling; the 2022 trial is the tikanga point."
    },
    {
     "cards": [
      "3.3"
     ],
     "grade": "weak",
     "why": "Lab Tests is about public contracts."
    },
    {
     "cards": [
      "9.4"
     ],
     "grade": "weak",
     "why": "The Ombudsman is off topic."
    }
   ],
   "8.2": [
    {
     "cards": [
      "8.5"
     ],
     "grade": "best",
     "why": "The 2026 bar names tikanga conceptions of harm and ended Smith: the override continues."
    },
    {
     "cards": [
      "8.5",
      "4.3"
     ],
     "grade": "ok",
     "why": "Atkinson's override is about carers, not tikanga."
    },
    {
     "cards": [
      "1.5"
     ],
     "grade": "weak",
     "why": "Westco is about Parliament's proceedings."
    },
    {
     "cards": [
      "6.1"
     ],
     "grade": "weak",
     "why": "The international law ladder is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Three routes for tikanga: three lamps light the way."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In Ellis v R, Glazebrook J observed that tikanga has become part of the fabric of New Zealand's law and institutions through legislation, the common law and policy.",
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
    "t": "Tikanga is the body of Māori law and custom: values and practices such as mana, whanaungatanga and kaitiakitanga, and the tikanga that governs tangihanga and burial.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The Law Commission's study paper He Poutama urges that tikanga be understood on its own terms, not merely as a set of facts to be proved in state courts.",
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
    "t": "The distinction matters: tikanga treated as evidence is filtered through common law tests, while tikanga treated as law can shape the rules themselves.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay takes Glazebrook J's three routes in turn.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that the statement is largely true for each, but that every route remains subject to Parliament, which has narrowed it more than once.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Marine and coastal title. Plot it on the chart."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Legislation weaves tikanga into law in several ways: as a relevant consideration, as part of the test for legal rights, and as a direction to decision-makers.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The clearest example is section 58 of the Marine and Coastal Area (Takutai Moana) Act 2011, under which customary marine title exists only if an applicant group holds the area in accordance with tikanga and has exclusively used and occupied it from 1840 without substantial interruption.",
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
    "t": "Tikanga is part of the legal test itself.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Yet Parliament has also narrowed that route: the Marine and Coastal Area (Takutai Moana) (Customary Marine Title) Amendment Act 2025 amended sections 58, 59 and 106 to make title harder to prove.",
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
    "t": "Tikanga also operates through general environmental statutes.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board, the Supreme Court held that tikanga is other applicable law under section 59(2)(l) of the Exclusive Economic Zone and Continental Shelf (Environmental Effects) Act 2012, and that interests grounded in tikanga, including kaitiakitanga over the marine environment, were existing interests the decision-making committee had to weigh.",
    "a": [
     [
      1,
      2
     ],
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The Court dismissed the mining company's appeal against the quashing of its consent.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The statute did not mention tikanga by name; the Court read a general phrase to include it, which shows legislation and judicial interpretation working together.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Ellis. Not set in stone. Judges are still carving the common law."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The common law route is where the fabric metaphor is most accurate.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "In Ellis, the question was whether Peter Ellis's appeal against his 1993 convictions could continue after his death.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Supreme Court allowed it to continue under an interests of justice test, and all the judges accepted that tikanga has been, and will continue to be, recognised in developing the common law.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The majority went further, holding that the colonial-era tests for recognising custom no longer apply, while warning that courts must not exceed their proper function.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The earlier and more cautious approach is Takamore v Clarke.",
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
    "t": "James Takamore, of Tūhoe, died in Christchurch, and his whānau took his body and buried him at Kutarere urupā, against the wishes of his partner, who was his executor.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The Supreme Court held that the executor has the right and duty to decide on burial, but must consider the deceased's cultural and spiritual values, including tikanga.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Tikanga entered as a relevant consideration, not as a rule displacing the common law.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "The oldest strand is customary rights.",
    "a": []
   },
   {
    "f": "m1s1",
    "k": "say",
    "t": "In Te Weehi v Regional Fisheries Officer, a customary right to gather shellfish survived the Fisheries Act, because section 88(2) provided that nothing in the Act affected Māori fishing rights, and customary rights survive until clearly extinguished.",
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
    "f": "m1s1",
    "k": "say",
    "t": "Taken together, these cases show the common law moving from recognising tikanga as a fact, to weighing it as a value, to treating it as a source of law in its own right.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Tikanga as evidence. Listen at the fire."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Policy and practice form the third strand.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The District Court's Te Ao Mārama approach draws on tikanga in how courts engage with the people and communities before them, and the Cabinet Manual requires Treaty analysis of government Bills.",
    "a": [
     [
      3,
      0
     ],
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "In the courts, tikanga is now proved through expert evidence from pūkenga, and it is treated as a living system rather than one frozen in 1840.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Ngāti Whātua Ōrākei Trust v Attorney-General is the leading example.",
    "a": [
     [
      3,
      2
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "After an eleven-week hearing with evidence from 35 pūkenga, Palmer J held that tikanga did not of itself legally bind the Crown, but that the Treaty required the Crown to understand the relevant tikanga when settling overlapping claims and to allow reasonable time for tikanga processes to run.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The case shows tikanga shaping how the state must act, even where it does not supply an enforceable rule.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Policy is the weakest of the three routes in legal terms, because it can be changed by a new government without legislation, but it reaches the most people day to day.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Customary title and override. Still standing after the tide."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The limit on the fabric is that Parliament holds the last word.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "In Attorney-General v Ngāti Apa, the Court of Appeal overruled In re the Ninety-Mile Beach and held that the Māori Land Court had jurisdiction to decide whether the foreshore and seabed were Māori customary land, because customary property survives the Crown's acquisition of sovereignty until it is lawfully extinguished.",
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
    "t": "Parliament responded with the Foreshore and Seabed Act 2004, which vested the area in the Crown.",
    "a": [
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The pattern continues.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Section 271 of the Climate Change Response Act 2002, inserted in 2026, bars tort liability for emissions-related climate change effects, including harm understood through a tikanga conception, and ended the claim in Smith v Fonterra that the Supreme Court had allowed to go to trial.",
    "a": [
     [
      4,
      2
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Each override shows tikanga as a thread that Parliament can cut.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The courts can weave tikanga into the common law, but they cannot protect it from a clear statute.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Can Parliament do anything? The lion on the throne."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Glazebrook J's statement is largely true.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Tikanga is part of the legal test for customary marine title, part of the applicable law in environmental decisions, a relevant consideration and a source of development in the common law, and a guide to how the Crown and the courts must act.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "But it is woven into a cloth that Parliament can still cut.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Under section 15(1) of the Constitution Act 1986, Parliament can narrow or remove any statutory route, and it did so in 2004, 2025 and 2026.",
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
    "t": "Tikanga is now part of the fabric of New Zealand law; whether it becomes part of its foundation depends on Parliament rather than the courts.",
    "a": []
   }
  ],
  "modelWords": 1032,
  "audio": {
   "src": "data/tikanga.mp3?v=20261118d",
   "starts": [
    0.0,
    4.44,
    14.85,
    25.3,
    34.05,
    42.9,
    46.51,
    55.17,
    59.22,
    69.23,
    89.64,
    92.72,
    107.99,
    112.34,
    137.86,
    142.61,
    152.55,
    157.48,
    161.49,
    169.69,
    180.48,
    189.95,
    193.6,
    203.48,
    213.27,
    218.79,
    221.55,
    236.29,
    247.04,
    250.88,
    253.8,
    264.96,
    275.16,
    280.0,
    297.43,
    303.57,
    313.72,
    318.93,
    322.77,
    341.37,
    347.69,
    349.63,
    370.0,
    374.06,
    380.35,
    384.96,
    388.16,
    402.39,
    405.95,
    419.69
   ],
   "voice": ""
  }
 },
 {
  "id": "partnership",
  "essay": "N23OS-1",
  "title": "Treaty partnership in 2026",
  "prompt": "Cooke P in the Lands case said the Treaty signified a partnership between races. What does partnership mean now, and who decides? Use the quote, statutes and cases.",
  "intro": [
   [
    "7.2",
    "Cooke P's partnership"
   ],
   [
    "7.6",
    "two texts"
   ]
  ],
  "concl": [
   "1.11",
   "settle the Treaty's place"
  ],
  "mains": [
   {
    "card": "7.3",
    "cue": "statute gives it force",
    "sup": [
     [
      "6.1",
      "Te Heuheu: only via statute"
     ]
    ]
   },
   {
    "card": "7.1",
    "cue": "the Tribunal's partnership",
    "sup": [
     [
      "7.4",
      "settlements"
     ]
    ]
   },
   {
    "card": "7.7",
    "cue": "Parliament redefines",
    "sup": [
     [
      "1.9",
      "Bill voted down"
     ]
    ]
   },
   {
    "card": "8.7",
    "cue": "beyond the Crown: tikanga",
    "sup": []
   }
  ],
  "auth": [
   [
    "The quote",
    0,
    [
     [
      "New Zealand Maori Council v Attorney-General [1987] 1 NZLR 641 (CA) (Lands case)",
      "partnership between races"
     ],
     [
      "State-Owned Enterprises Act 1986 s 9",
      "not inconsistent"
     ],
     [
      "Treaty of Waitangi Act 1975 s 5(2)",
      "Tribunal: both texts"
     ]
    ]
   ],
   [
    "Statute",
    1,
    [
     [
      "Conservation Act 1987 s 4",
      "give effect to"
     ],
     [
      "Ngāi Tai ki Tāmaki Tribal Trust v Minister of Conservation [2018] NZSC 122",
      "substantive, not procedural"
     ],
     [
      "Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board [2021] NZSC 127",
      "clause read broadly"
     ],
     [
      "Hoani Te Heuheu Tukino v Aotea District Maori Land Board [1941] AC 308 (PC)",
      "unenforceable unless enacted"
     ]
    ]
   ],
   [
    "The Tribunal",
    2,
    [
     [
      "Treaty of Waitangi Act 1975 s 6",
      "claims of prejudice"
     ],
     [
      "Waitangi Tribunal, He Whakaputanga me te Tiriti (Wai 1040, 2014)",
      "sovereignty not ceded"
     ],
     [
      "Ngāti Whātua Ōrākei Trust v Attorney-General [2018] NZSC 84",
      "rights declared first"
     ]
    ]
   ],
   [
    "Parliament",
    3,
    [
     [
      "Principles of the Treaty of Waitangi Bill 2024",
      "voted down 10 April 2025"
     ],
     [
      "Treaty clause Bills (introduced 14 September 2026)",
      "cap at 'take into account'"
     ],
     [
      "Waitangi Tribunal, Wai 3565 (2026)",
      "review breached principles"
     ]
    ]
   ],
   [
    "Tikanga",
    4,
    [
     [
      "Ellis v R [2022] NZSC 114",
      "tikanga in the common law"
     ],
     [
      "Law Commission, He Poutama (2023)",
      "tikanga on its own terms"
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
     "7.2",
     "7.6"
    ],
    "grade": "best",
    "why": "The quote's source and the two texts set what partnership started as and why it is contested. The written-constitution conclusion asks whether its place should be settled in law.",
    "concl": "1.11"
   },
   {
    "cards": [
     "7.2"
    ],
    "grade": "ok",
    "why": "The quote is placed, but without the two texts the essay cannot say what each partner thought it agreed to.",
    "concl": "7.7"
   },
   {
    "cards": [
     "2.1",
     "1.1"
    ],
    "grade": "weak",
    "why": "Rule of law and sovereignty frame a principles essay. This question asks what partnership means.",
    "concl": "2.8"
   },
   {
    "cards": [
     "8.2"
    ],
    "grade": "weak",
    "why": "The foreshore is one dispute, not a definition of partnership.",
    "concl": "8.6"
   }
  ],
  "skel": [
   {
    "cards": [
     "7.3",
     "7.1",
     "7.7",
     "8.7"
    ],
    "grade": "best",
    "why": "How statute gives partnership force, how the Tribunal reads it, Parliament redefining it, then partnership beyond Crown–Māori relations through tikanga."
   },
   {
    "cards": [
     "7.3",
     "7.1",
     "7.7"
    ],
    "grade": "ok",
    "why": "Covers who defines partnership, but not what it means beyond Crown–Māori dealings."
   },
   {
    "cards": [
     "7.4",
     "7.5",
     "8.1"
    ],
    "grade": "weak",
    "why": "Cases on settlements and fishing. The meaning of partnership is never stated."
   },
   {
    "cards": [
     "1.1",
     "1.2",
     "1.11"
    ],
    "grade": "weak",
    "why": "Constitutional structure, with no Treaty law."
   }
  ],
  "sup": {
   "7.3": [
    {
     "cards": [
      "6.1"
     ],
     "grade": "best",
     "why": "Te Heuheu: Treaty rights bind only when Parliament enacts them. Partnership is as strong as the clause."
    },
    {
     "cards": [
      "6.1",
      "7.2"
     ],
     "grade": "ok",
     "why": "The Lands case card repeats the introduction."
    },
    {
     "cards": [
      "6.4"
     ],
     "grade": "weak",
     "why": "Tavita concerns international obligations to children."
    },
    {
     "cards": [
      "5.3"
     ],
     "grade": "weak",
     "why": "Baigent compensation is off topic."
    }
   ],
   "7.1": [
    {
     "cards": [
      "7.4"
     ],
     "grade": "best",
     "why": "Settlements are partnership in practice: negotiated with the Crown and enacted; NWO 2018 lets rights be declared first."
    },
    {
     "cards": [
      "7.4",
      "7.5"
     ],
     "grade": "ok",
     "why": "NWO 2022 is about overlapping claims, a narrower point."
    },
    {
     "cards": [
      "9.4"
     ],
     "grade": "weak",
     "why": "The Ombudsman is a different watchdog."
    },
    {
     "cards": [
      "3.5"
     ],
     "grade": "weak",
     "why": "Review remedies are off topic."
    }
   ],
   "7.7": [
    {
     "cards": [
      "1.9"
     ],
     "grade": "best",
     "why": "The Treaty Principles Bill went through the stages and was voted down at second reading: Parliament's process deciding against redefinition."
    },
    {
     "cards": [
      "1.9",
      "1.12"
     ],
     "grade": "ok",
     "why": "Party-hopping is a side point."
    },
    {
     "cards": [
      "4.2"
     ],
     "grade": "weak",
     "why": "Hansen is about the Bill of Rights."
    },
    {
     "cards": [
      "9.8"
     ],
     "grade": "weak",
     "why": "Judicial independence is off topic."
    }
   ],
   "8.7": [
    {
     "cards": [],
     "grade": "best",
     "why": "No card needed. Ellis and He Poutama are named in the paragraph."
    },
    {
     "cards": [
      "8.3"
     ],
     "grade": "ok",
     "why": "Takamore fits, but it is a burial case; Ellis is the broader point."
    },
    {
     "cards": [
      "2.3"
     ],
     "grade": "weak",
     "why": "Payn is off topic."
    },
    {
     "cards": [
      "6.2"
     ],
     "grade": "weak",
     "why": "Imperial law is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. The Lands case: tied to the post. The Crown is bound to the principles only by a statutory rope. And two texts: two scrolls, two stories. Kāwanatanga is not sovereignty."
   },
   {
    "f": "i",
    "k": "say",
    "t": "In New Zealand Maori Council v Attorney-General, the Lands case, Cooke P said that the Treaty of Waitangi signified a partnership between races.",
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
    "t": "The case arose under section 9 of the State-Owned Enterprises Act 1986, which provided that nothing in the Act permitted the Crown to act inconsistently with the principles of the Treaty.",
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
    "t": "The Court of Appeal held that the principles required the partners to act reasonably and in utmost good faith, imposed duties analogous to fiduciary duties, and required active protection of Māori interests to the fullest extent reasonably practicable.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Partnership was a way of reading two texts that say different things.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "In the English text the chiefs ceded sovereignty; in te Tiriti they granted kāwanatanga, governance, and were guaranteed tino rangatiratanga, full chieftainship, over their lands and taonga.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The Waitangi Tribunal has exclusive authority to determine the meaning of the Treaty as embodied in both texts under section 5(2) of the Treaty of Waitangi Act 1975.",
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
    "t": "This essay argues that partnership in 2026 means a legal duty only where statute imposes it, a broader relationship in the Tribunal's work and in tikanga, and a concept Parliament is now trying to narrow.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Trans-Tasman. Weigh tikanga interests before taking from the seabed."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Partnership has legal force only through statute.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Treaty clauses vary in strength.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 4 of the Conservation Act 1987 requires the Act to be interpreted and administered to give effect to the principles of the Treaty, and in Ngāi Tai ki Tāmaki Tribal Trust v Minister of Conservation the Supreme Court held that this requires substantive, not merely procedural, attention to Māori interests.",
    "a": [
     [
      1,
      0
     ],
     [
      1,
      1
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In Trans-Tasman Resources Ltd v Taranaki-Whanganui Conservation Board, the Court read the Treaty clause in the exclusive economic zone legislation broadly, so that tikanga-based interests had to be weighed in a seabed mining consent.",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Partnership in these cases means a real duty to take Māori interests seriously in decisions under the statute.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Without a clause, however, the Treaty is not directly enforceable.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "In Hoani Te Heuheu Tukino v Aotea District Maori Land Board, the Privy Council held that Treaty rights cannot be enforced in the courts unless incorporated by statute.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Partnership in law is therefore only as strong as the words Parliament chooses, and those words can be changed by a simple majority.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Waitangi Tribunal. The door opens on a hall of advice, not a courtroom."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Tribunal takes a wider view.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Under section 6 of the Treaty of Waitangi Act 1975, any Māori may claim to be prejudiced by legislation, policy or Crown action inconsistent with the principles.",
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
    "t": "In He Whakaputanga me te Tiriti, its report on the Te Paparahi o Te Raki inquiry, the Tribunal found that the rangatira who signed te Tiriti in February 1840 did not cede sovereignty; they agreed to share power with the Governor, each with authority over their own people.",
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
    "t": "On that view partnership is not a metaphor laid over Crown sovereignty but a description of what was actually agreed.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The Tribunal's findings, however, are mostly recommendations.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Settlements are where partnership is practised.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "They are negotiated directly with the Crown, enacted as full and final, and include an apology, cultural redress and commercial redress.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The courts can protect the process: in Ngāti Whātua Ōrākei Trust v Attorney-General, the Supreme Court held that the trust could seek declarations of its rights before the settlement legislation for other groups was enacted.",
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
    "t": "Even so, the final word in each settlement belongs to Parliament.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Who defines the principles? Too many hands on one stone."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Parliament has twice moved to redefine partnership.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The Principles of the Treaty of Waitangi Bill 2024 would have replaced the courts' principles with three of its own, including that the Crown has full power to govern and that everyone is equal before the law.",
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
    "t": "The second effort is the Treaty clause review: Bills introduced on 14 September 2026 would repeal some principles references and cap others at a duty to take the principles into account, even though the Waitangi Tribunal found in 2026 that the review itself breached Treaty principles.",
    "a": [
     [
      3,
      1
     ],
     [
      3,
      2
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Legally Parliament may do this under section 15(1) of the Constitution Act 1986.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The objection is one of legitimacy: one partner should not unilaterally redefine a bilateral agreement.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The Treaty Principles Bill shows the ordinary process working as a check.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "It passed its first reading under a coalition agreement, went to select committee, which received hundreds of thousands of submissions, and was voted down at its second reading on 10 April 2025.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Partnership survived not because a court protected it but because a majority in the House would not abandon it.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Card: Three routes for tikanga. Three lamps light the way."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Partnership in 2026 also reaches beyond the Crown's statutory duties.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "In Ellis v R, the Supreme Court accepted that tikanga has been recognised in developing the common law and will continue to be, and Glazebrook J described tikanga as part of the fabric of New Zealand law through legislation, the common law and policy.",
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
    "t": "The Law Commission's He Poutama urges that tikanga be understood on its own terms.",
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
    "t": "On this view partnership is not only a set of duties owed by the Crown to Māori, but the recognition of two legal traditions within one legal system.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "That is closer to what te Tiriti promised than the Lands case formula, because it treats tino rangatiratanga as a source of law and not merely an interest to be weighed.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The limit, again, is that each route can be narrowed by statute, as Parliament did in the Foreshore and Seabed Act 2004 and in the 2026 climate tort bar.",
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
    "t": "Partnership in 2026 means three things.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "In law, it is a duty imposed by particular statutes, as strong as their words.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "In the Tribunal's reading of te Tiriti, it is a sharing of authority that was agreed in 1840.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "In the common law, it is the growing recognition of tikanga as law.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "What it is not is protected: Parliament can rewrite every Treaty clause by ordinary majority, as the 2026 Bills propose.",
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
    "t": "The only way to give partnership a secure legal place would be a written constitution that settled the Treaty's status, which is the question on which every past constitutional review has stalled.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Until then, partnership depends on the continuing political judgment that Cooke P's description remains right.",
    "a": []
   }
  ],
  "modelWords": 1007,
  "audio": {
   "src": "data/partnership.mp3?v=20261118e",
   "starts": [
    0.0,
    11.71,
    20.78,
    33.11,
    47.92,
    51.76,
    63.13,
    75.25,
    89.92,
    95.21,
    98.65,
    101.19,
    121.99,
    136.17,
    142.89,
    146.88,
    157.21,
    165.61,
    171.14,
    173.59,
    185.56,
    203.39,
    209.96,
    213.82,
    216.81,
    225.05,
    237.89,
    242.71,
    247.12,
    250.49,
    263.08,
    282.13,
    288.87,
    295.12,
    299.58,
    311.74,
    318.54,
    322.64,
    328.7,
    344.04,
    348.93,
    357.63,
    367.21,
    378.7,
    384.38,
    388.28,
    393.36,
    400.59,
    404.69,
    413.46,
    424.76
   ],
   "voice": ""
  }
 },
 {
  "id": "unreasonable",
  "essay": "N23-2",
  "title": "Unreasonableness: the most problematic ground?",
  "prompt": "Joseph says: 'Unreasonableness is the most problematic of the grounds of [judicial] review. There are difficulties in articulating standards of unreasonableness as would justify the courts intervening.' Do you agree? If yes, why? If no, what other ground might be more problematic?",
  "intro": [
   [
    "3.1",
    "Diplock's three grounds"
   ]
  ],
  "concl": [
   "2.1",
   "agree, but keep the backstop"
  ],
  "mains": [
   {
    "card": "3.4",
    "cue": "irrationality: the high, vague bar",
    "sup": [
     [
      "3.2",
      "intensity slides"
     ]
    ]
   },
   {
    "card": "2.6",
    "cue": "illegality: one right answer",
    "sup": [
     [
      "2.3",
      "express powers only"
     ]
    ]
   },
   {
    "card": "3.3",
    "cue": "procedural impropriety: fairness in context",
    "sup": []
   },
   {
    "card": "4.8",
    "cue": "counter: proportionality",
    "sup": [
     [
      "6.6",
      "rights raise intensity"
     ]
    ]
   }
  ],
  "auth": [
   [
    "The question",
    0,
    [
     [
      "Joseph, Constitutional and Administrative Law (5th ed, 2021) at 1067",
      "'most problematic'"
     ],
     [
      "Council of Civil Service Unions v Minister for the Civil Service [1985] AC 374 (HL) (GCHQ)",
      "three heads, at 410"
     ],
     [
      "Associated Provincial Picture Houses Ltd v Wednesbury Corporation [1948] 1 KB 223 (CA)",
      "no reasonable authority"
     ]
    ]
   ],
   [
    "Irrationality",
    1,
    [
     [
      "Wellington City Council v Woolworths New Zealand Ltd (No 2) [1996] 2 NZLR 537 (CA)",
      "high threshold"
     ],
     [
      "University of Auckland v Tertiary Education Commission [2004] 2 NZLR 668 (HC)",
      "flawed, not irrational"
     ],
     [
      "Joseph at 908",
      "'not in the nature of an appeal'"
     ]
    ]
   ],
   [
    "Illegality",
    2,
    [
     [
      "Christiansen v Director-General of Health [2020] NZHC 887",
      "wrong test; mandatory factor"
     ],
     [
      "Transport Ministry v Payn [1977] 2 NZLR 50 (CA)",
      "power must be found in law"
     ]
    ]
   ],
   [
    "Procedural impropriety",
    3,
    [
     [
      "New Zealand Bill of Rights Act 1990 s 27(1)",
      "natural justice"
     ],
     [
      "Lab Tests Auckland Ltd v Auckland District Health Board [2008] NZCA 385",
      "standard depends on context"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "Grounded Kiwis Group Inc v Minister of Health [2022] NZHC 832",
      "structured s 5 test"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 5",
      "justified limits"
     ],
     [
      "Attorney-General v Zaoui [2005] NZSC 38",
      "security still reviewable"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "New Zealand Bill of Rights Act 1990 s 27(2)",
      "right to review"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "3.1"
    ],
    "grade": "best",
    "why": "Lord Diplock's three heads are the comparison the question asks for: is irrationality worse than illegality and procedural impropriety? The rule-of-law conclusion says why the ground is kept.",
    "concl": "2.1"
   },
   {
    "cards": [
     "3.1",
     "3.7"
    ],
    "grade": "ok",
    "why": "The grounds are there, but the checklist is a client's route, not a way to compare grounds.",
    "concl": "3.5"
   },
   {
    "cards": [
     "1.1"
    ],
    "grade": "weak",
    "why": "Sovereignty frames review of statutes. This question is about review of decisions.",
    "concl": "1.6"
   },
   {
    "cards": [
     "3.2"
    ],
    "grade": "weak",
    "why": "Deference is part of the answer, not the frame: start with the grounds the question names.",
    "concl": "3.3"
   }
  ],
  "skel": [
   {
    "cards": [
     "3.4",
     "2.6",
     "3.3",
     "4.8"
    ],
    "grade": "best",
    "why": "Diplock's order: irrationality (why it is hard), then illegality and procedural impropriety (why they are easier), then the possible rival, proportionality."
   },
   {
    "cards": [
     "3.4",
     "2.6",
     "3.3"
    ],
    "grade": "ok",
    "why": "Compares the three grounds, but never asks whether a newer ground might be worse."
   },
   {
    "cards": [
     "3.2",
     "3.3",
     "3.5"
    ],
    "grade": "weak",
    "why": "Deference, contracts and remedies: the other two grounds never get a paragraph, so the comparison the question asks for is missing."
   },
   {
    "cards": [
     "2.6",
     "3.4",
     "3.6"
    ],
    "grade": "weak",
    "why": "Cases in turn with no argument about which ground is most problematic."
   }
  ],
  "sup": {
   "3.4": [
    {
     "cards": [
      "3.2"
     ],
     "grade": "best",
     "why": "Deference explains why the bar moves: intensity slides with the subject matter, which is Joseph's 'difficulties in articulating standards'."
    },
    {
     "cards": [
      "3.2",
      "3.5"
     ],
     "grade": "ok",
     "why": "Remedies add little to the definition problem."
    },
    {
     "cards": [
      "1.4"
     ],
     "grade": "weak",
     "why": "Privilege is off topic."
    },
    {
     "cards": [
      "9.5"
     ],
     "grade": "weak",
     "why": "Official information is off topic."
    }
   ],
   "2.6": [
    {
     "cards": [
      "2.3"
     ],
     "grade": "best",
     "why": "Payn: officials need power found in law. Illegality asks a legal question with one right answer, the court's."
    },
    {
     "cards": [
      "2.3",
      "2.5"
     ],
     "grade": "ok",
     "why": "Borrowdale is a legality case, but adds little here."
    },
    {
     "cards": [
      "7.2"
     ],
     "grade": "weak",
     "why": "The Lands case is Treaty law."
    },
    {
     "cards": [
      "8.3"
     ],
     "grade": "weak",
     "why": "Takamore is off topic."
    }
   ],
   "3.3": [
    {
     "cards": [],
     "grade": "best",
     "why": "Lab Tests carries the point alone: the content of fairness depends on context, but courts are at home deciding it."
    },
    {
     "cards": [
      "3.4"
     ],
     "grade": "ok",
     "why": "University of Auckland is already used for irrationality."
    },
    {
     "cards": [
      "1.3"
     ],
     "grade": "weak",
     "why": "Simpson is about electoral timing."
    },
    {
     "cards": [
      "8.6"
     ],
     "grade": "weak",
     "why": "Marine title is off topic."
    }
   ],
   "4.8": [
    {
     "cards": [
      "6.6"
     ],
     "grade": "best",
     "why": "Zaoui: where rights are at stake courts look harder, which is why a structured test may replace bare unreasonableness."
    },
    {
     "cards": [
      "6.6",
      "4.2"
     ],
     "grade": "ok",
     "why": "Hansen is about statutes, not decisions."
    },
    {
     "cards": [
      "1.8"
     ],
     "grade": "weak",
     "why": "Make It 16 is a declaration about an Act."
    },
    {
     "cards": [
      "9.3"
     ],
     "grade": "weak",
     "why": "Public money is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. Grounds of review: three lights on one decision. Illegal, irrational, unfair."
   },
   {
    "f": "i",
    "k": "say",
    "t": "Judicial review asks whether a public decision was lawful, not whether it was right.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "In Council of Civil Service Unions v Minister for the Civil Service, Lord Diplock grouped the grounds of review under three heads: illegality, irrationality and procedural impropriety.",
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
    "t": "Irrationality is the ground usually called Wednesbury unreasonableness.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Joseph writes that unreasonableness is \"the most problematic of the grounds\", because of the difficulty of stating a standard that would justify the courts intervening.",
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
    "t": "The question is whether he is right, or whether another ground is more problematic.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay compares unreasonableness with the other two heads in turn.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that Joseph is right: of Lord Diplock's three grounds, unreasonableness is the most problematic, because its standard is both very high and hard to state, and because it sits closest to the merits of a decision.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The other two grounds raise difficulties, but courts can state and apply them with more confidence.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Publishing a ranking. Top of the ladder? Ask before you rank. Irrationality: the high, vague bar."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Start with the ground itself.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In Associated Provincial Picture Houses Ltd v Wednesbury Corporation, a decision was unreasonable only if it was so unreasonable that no reasonable authority could ever have come to it.",
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
    "t": "Lord Diplock described irrationality as a decision so outrageous in its defiance of logic or accepted moral standards that no sensible person could have reached it.",
    "a": [
     [
      0,
      1
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The New Zealand courts have kept the threshold high.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In Wellington City Council v Woolworths New Zealand Ltd (No 2), the Court of Appeal stressed that where a decision involves policy and is made by an elected body, the courts will intervene only in a clear case.",
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
    "t": "Three problems follow.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "First, the test is circular: it defines unreasonableness by what no reasonable decision-maker would do.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Second, it looks at the outcome rather than the process, although review is, in Joseph's words, \"not in the nature of an appeal\".",
    "a": [
     [
      1,
      2
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Third, claimants rarely win on it alone.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "In University of Auckland v Tertiary Education Commission, the universities succeeded on natural justice and legitimate expectation, but failed on irrationality: Williams J held that comparing them with British universities was difficult and even flawed, but not one that no reasonable commission could make.",
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
    "t": "The standard also moves.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Courts defer more on security, policy and resource allocation, and less where rights are at stake.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "That sliding scale has no fixed points, which is exactly the difficulty of articulating standards that Joseph describes.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Fettering a discretion. Going by the book, the wrong book. Illegality: one right answer."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Illegality is less problematic.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Lord Diplock defined it as a failure to understand correctly the law that regulates the decision-making power and to give effect to it.",
    "a": [
     [
      0,
      1
     ]
    ]
   },
   {
    "f": "m1",
    "k": "say",
    "t": "That is a question of law, and on questions of law the court does not defer: there is one right answer, the court's.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Christiansen v Director-General of Health shows how cleanly the ground works.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "A man in managed isolation sought an exemption to visit his dying father.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The governing order allowed exemptions in exceptional circumstances, but officials applied a narrower Ministry framework and never considered them.",
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
    "t": "Walker J found a strong case of error of law and of failure to consider a mandatory relevant consideration, and made an interim order releasing him on conditions.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "No court needed to ask whether the refusal was irrational.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The ground rests on the principle that public power must be found in law.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "In Transport Ministry v Payn, officers who had been told to leave private land needed an express power to stay, and had none.",
    "a": [
     [
      2,
      1
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Illegality has a soft edge.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Deciding which considerations are mandatory is a question of law, but the weight given to them is for the decision-maker, unless the result is unreasonable.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "So the hardest illegality cases pass back to the unreasonableness ground, which confirms that it, not illegality, is where the real difficulty lies.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Commercial contracts. The court reviews the process, not the bargain. Procedural impropriety: fairness in context."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Procedural impropriety covers breach of procedural rules and of natural justice: the right to be heard, the rule against bias, and procedural legitimate expectation.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Section 27(1) of the New Zealand Bill of Rights Act 1990 affirms the right to natural justice whenever a tribunal or public authority determines a person's rights.",
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
    "t": "This ground has its own difficulty: what fairness requires depends on context.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Lab Tests Auckland Ltd v Auckland District Health Board shows the problem.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The High Court applied a broad standard of probity to a health board's award of a laboratory contract and held it unlawful; the Court of Appeal reversed, holding that the standard depends on the body, its function, the context and the alleged wrong, and restored the contract.",
    "a": [
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Yet procedural impropriety is still easier to state than unreasonableness.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The question is always about process: what the person was entitled to know and say, and whether the decision-maker was impartial.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Courts run fair hearings every day and are well placed to judge them.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Procedural impropriety is contextual, but it does not ask the court to judge the merits.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Justified limits. Roots, trunk, bend, break. Could a newer ground be worse?"
   },
   {
    "f": "m3",
    "k": "say",
    "t": "If any ground rivals unreasonableness, it lies beyond Lord Diplock's three.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "In GCHQ he said further grounds might be added case by case, and named proportionality as the likeliest.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Where rights are engaged, New Zealand courts already use a structured test of that kind.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "In Grounded Kiwis Group Inc v Minister of Health, Mallon J tested the managed isolation booking system under section 5 of the Bill of Rights Act: an important purpose, a rational connection, minimal impairment and proportionality.",
    "a": [
     [
      4,
      0
     ],
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Most of the system was justified, but the virtual lobby, which allocated rooms with no way to prioritise by need, failed minimal impairment.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Proportionality is more transparent than Wednesbury, but it asks the court to weigh a decision's benefits against its harms, which takes the court deeper into the merits.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Rights also raise the intensity of review generally.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "In Attorney-General v Zaoui, the Supreme Court held that a security risk certificate was reviewable, and read the immigration legislation consistently with the rights not to be deprived of life or tortured.",
    "a": [
     [
      4,
      2
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Security attracted deference, not immunity.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "But proportionality remains an emerging ground in New Zealand, not a settled head of review.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Rule of law. The tide rises on king and beggar alike. Agree, but keep the backstop."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Joseph is right.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Of Lord Diplock's three grounds, unreasonableness is the most problematic: its test is circular, its intensity slides with context, it looks at outcomes rather than process, and it rarely wins a case on its own.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Illegality asks a question of law with one right answer, and procedural impropriety, though contextual, keeps the court on the process it knows best.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Proportionality may in time raise greater difficulties, because it takes courts further into the merits, but it is not yet a general ground in New Zealand.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Unreasonableness should nonetheless be kept.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "It is the rule of law's backstop: a decision can be within power and fairly made yet so irrational that no law could have authorised it.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Section 27(2) of the Bill of Rights Act affirms the right to apply for review, and review that could never reach an absurd result would not be worth much.",
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
    "t": "The answer to Joseph's difficulty is not to abolish the ground, but for the courts to state more clearly when, and how intensely, it applies.",
    "a": []
   }
  ],
  "modelWords": 1155,
  "audio": {
   "src": "data/unreasonable.mp3?v=20261120c",
   "starts": [
    0.0,
    6.38,
    11.33,
    22.27,
    26.82,
    36.31,
    40.98,
    45.21,
    58.37,
    64.72,
    71.4,
    73.6,
    85.36,
    95.7,
    98.82,
    111.43,
    113.35,
    119.6,
    126.79,
    129.58,
    147.82,
    149.95,
    155.86,
    163.75,
    169.62,
    172.29,
    180.16,
    186.58,
    191.36,
    196.2,
    204.52,
    214.57,
    218.18,
    222.42,
    230.02,
    232.53,
    241.54,
    251.45,
    259.69,
    269.87,
    281.68,
    286.83,
    291.71,
    307.01,
    311.85,
    319.25,
    323.26,
    329.42,
    335.46,
    340.29,
    347.24,
    352.38,
    366.63,
    375.29,
    384.83,
    388.37,
    400.23,
    403.47,
    409.59,
    416.44,
    418.24,
    431.25,
    440.02,
    448.79,
    451.6,
    459.45,
    469.05
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
 },
 {
  "id": "maori-rep",
  "essay": "N25-1",
  "title": "A Māori parliament and the three principles",
  "prompt": "Te Pāti Māori presented a declaration of Māori independence and proposed a separate Māori parliament, with an upper and lower house and traditional leaders above (RNZ, 3 June 2024). New Zealand is a constitutional monarchy under parliamentary supremacy. How would this idea affect (a) parliamentary supremacy, (b) the separation of powers and (c) the rule of law?",
  "intro": [
   [
    "2.7",
    "the three lenses"
   ],
   [
    "7.6",
    "tino rangatiratanga"
   ]
  ],
  "concl": [
   "1.11",
   "only a new settlement"
  ],
  "mains": [
   {
    "card": "1.1",
    "cue": "(a) it exists only by Act",
    "sup": [
     [
      "1.2",
      "seats not entrenched"
     ]
    ]
   },
   {
    "card": "2.8",
    "cue": "(b) a second legislature",
    "sup": [
     [
      "9.1",
      "traditional leaders above"
     ]
    ]
   },
   {
    "card": "2.1",
    "cue": "(c) one law, or two?",
    "sup": [
     [
      "2.2",
      "no change by declaration"
     ],
     [
      "8.4",
      "tikanga already in law"
     ]
    ]
   },
   {
    "card": "7.7",
    "cue": "counter: partnership",
    "sup": [
     [
      "7.2",
      "Lands case"
     ]
    ]
   }
  ],
  "auth": [
   [
    "The proposal",
    0,
    [
     [
      "Te Pāti Māori declaration (RNZ, 3 June 2024)",
      "the facts"
     ],
     [
      "Matike Mai Aotearoa report (2016)",
      "spheres of authority"
     ],
     [
      "He Whakaputanga me te Tiriti (Wai 1040, 2014)",
      "sovereignty not ceded"
     ]
    ]
   ],
   [
    "(a) Supremacy",
    1,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ],
     [
      "Electoral Act 1993 s 45",
      "Māori seats"
     ],
     [
      "Electoral Act 1993 s 268",
      "reserved provisions"
     ],
     [
      "Hoani Te Heuheu Tukino v Aotea District Maori Land Board [1941] AC 308 (PC)",
      "Treaty only via statute"
     ]
    ]
   ],
   [
    "(b) Separation",
    2,
    [
     [
      "Constitution Act 1986 s 6",
      "ministers must be MPs"
     ],
     [
      "Legislative Council Abolition Act 1950",
      "no upper house"
     ],
     [
      "Letters Patent 1983",
      "Governor-General acts on advice"
     ]
    ]
   ],
   [
    "(c) Rule of law",
    3,
    [
     [
      "Fitzgerald v Muldoon [1976] 2 NZLR 615 (SC)",
      "no suspending by announcement"
     ],
     [
      "Ellis v R [2022] NZSC 114",
      "tikanga in the common law"
     ],
     [
      "Local Government (Electoral Legislation and Māori Wards and Māori Constituencies) Amendment Act 2024",
      "binding polls obeyed"
     ]
    ]
   ],
   [
    "Counter",
    4,
    [
     [
      "New Zealand Maori Council v Attorney-General [1987] 1 NZLR 641 (CA) (Lands case)",
      "partnership"
     ],
     [
      "Treaty of Waitangi Act 1975 s 5(2)",
      "Tribunal: both texts"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "A Bill of Rights for New Zealand: A White Paper (1985)",
      "Treaty in supreme law, rejected"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "2.7",
     "7.6"
    ],
    "grade": "best",
    "why": "The question names the three principles, so the lens is the structure; the two texts explain why Māori seek their own institution. The written-constitution conclusion says what real autonomy would need.",
    "concl": "1.11"
   },
   {
    "cards": [
     "2.7"
    ],
    "grade": "ok",
    "why": "The lens is there, but without the Treaty the essay can't explain why the proposal exists.",
    "concl": "1.1"
   },
   {
    "cards": [
     "7.6",
     "7.2"
    ],
    "grade": "weak",
    "why": "A Treaty frame alone won't deliver the (a), (b), (c) structure the question sets.",
    "concl": "7.7"
   },
   {
    "cards": [
     "1.12"
    ],
    "grade": "weak",
    "why": "Party-hopping is off topic.",
    "concl": "1.2"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.1",
     "2.8",
     "2.1",
     "7.7"
    ],
    "grade": "best",
    "why": "One paragraph for each limb in the question's order, (a) supremacy, (b) separation, (c) rule of law, then the partnership counter-argument."
   },
   {
    "cards": [
     "1.1",
     "2.8",
     "2.1"
    ],
    "grade": "ok",
    "why": "Answers all three limbs, but never puts the case for the proposal."
   },
   {
    "cards": [
     "1.2",
     "2.1",
     "2.8",
     "7.7"
    ],
    "grade": "weak",
    "why": "Seats and wards first: the question is about a Māori parliament, so the limbs come second-hand."
   },
   {
    "cards": [
     "7.1",
     "7.4",
     "7.2"
    ],
    "grade": "weak",
    "why": "Tribunal and settlements, not the three principles the question names."
   }
  ],
  "sup": {
   "1.1": [
    {
     "cards": [
      "1.2"
     ],
     "grade": "best",
     "why": "Entrenchment: a Parliament can't bind its successors, and even the Māori seats aren't reserved."
    },
    {
     "cards": [
      "1.2",
      "1.5"
     ],
     "grade": "ok",
     "why": "Westco adds little: no Bill is before the House."
    },
    {
     "cards": [
      "4.2"
     ],
     "grade": "weak",
     "why": "Hansen is Bill of Rights method."
    },
    {
     "cards": [
      "9.4"
     ],
     "grade": "weak",
     "why": "Ombudsmen are off topic."
    }
   ],
   "2.8": [
    {
     "cards": [
      "9.1"
     ],
     "grade": "best",
     "why": "The Governor-General shows the model the proposal echoes: a head above politics, acting on advice."
    },
    {
     "cards": [
      "9.1",
      "9.2"
     ],
     "grade": "ok",
     "why": "Ministers-as-MPs is the fusion point, already in the main card."
    },
    {
     "cards": [
      "3.7"
     ],
     "grade": "weak",
     "why": "The review checklist is off topic."
    },
    {
     "cards": [
      "5.2"
     ],
     "grade": "weak",
     "why": "Excluding evidence is off topic."
    }
   ],
   "2.1": [
    {
     "cards": [
      "2.2",
      "8.4"
     ],
     "grade": "best",
     "why": "Fitzgerald: a declaration can't change the law; Ellis: tikanga is already part of one legal system."
    },
    {
     "cards": [
      "2.2"
     ],
     "grade": "ok",
     "why": "Fitzgerald alone misses the legal-pluralism point."
    },
    {
     "cards": [
      "2.4"
     ],
     "grade": "weak",
     "why": "Dotcom is about warrants."
    },
    {
     "cards": [
      "5.1"
     ],
     "grade": "weak",
     "why": "Search is off topic."
    }
   ],
   "7.7": [
    {
     "cards": [
      "7.2"
     ],
     "grade": "best",
     "why": "The Lands case gives partnership its legal content."
    },
    {
     "cards": [
      "7.2",
      "7.1"
     ],
     "grade": "ok",
     "why": "The Tribunal is already cited in the introduction."
    },
    {
     "cards": [
      "3.3"
     ],
     "grade": "weak",
     "why": "Lab Tests is off topic."
    },
    {
     "cards": [
      "6.3"
     ],
     "grade": "weak",
     "why": "Air Line Pilots is off topic."
    }
   ]
  },
  "model": [
   {
    "f": "i",
    "k": "cue",
    "t": "Introduction. The principles lens: three lenses, one target. And two texts: kāwanatanga is not sovereignty."
   },
   {
    "f": "i",
    "k": "say",
    "t": "On 3 June 2024 Te Pāti Māori presented a declaration of Māori independence proposing a Māori parliament, with an upper and a lower house and traditional leaders, including the Māori King, sitting above as spiritual guidance.",
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
    "t": "New Zealand is a constitutional monarchy in which Parliament is supreme.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "The proposal draws on te Tiriti o Waitangi.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "In article 1 the rangatira granted kāwanatanga, governance; in article 2 they were guaranteed tino rangatiratanga, full chieftainship, over their lands, villages and taonga.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "In He Whakaputanga me te Tiriti, the Waitangi Tribunal found that the rangatira who signed in 1840 did not cede sovereignty, and the Matike Mai Aotearoa report proposed separate spheres of Māori and Crown authority.",
    "a": [
     [
      0,
      2
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
    "t": "This essay argues that under the present constitution a Māori parliament could exist only as Parliament's creation, so it would leave supremacy intact; that it would add a second legislature to a system built around one; and that it would test the rule of law's demand for one law for all.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "Real autonomy would need a new constitutional settlement.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Can Parliament do anything? The lion on the throne. A: a Māori parliament would exist only by Act."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Parliamentary supremacy means that Parliament can make or unmake any law, and that no other body can override it.",
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
    "t": "In Hoani Te Heuheu Tukino v Aotea District Maori Land Board, the Privy Council held that rights under the Treaty cannot be enforced in the courts unless they have been incorporated by statute.",
    "a": [
     [
      1,
      3
     ]
    ]
   },
   {
    "f": "m0",
    "k": "say",
    "t": "A declaration of independence, however significant politically, therefore has no legal effect by itself.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "A Māori parliament could be created lawfully only by an Act of Parliament, and it would have only the powers that Act conferred.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "On that model supremacy would be unaffected, because Parliament could amend or repeal the Act at any time.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Nor could the present Parliament protect the new body from its successors.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Section 268 of the Electoral Act 1993 entrenches only a few electoral rules, such as the term of Parliament and the voting age, which can be changed only by 75 per cent of the House or by a poll, and section 268 itself is not entrenched.",
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
    "t": "The Māori seats, provided for by section 45 and dating from 1867, are not reserved at all, and a simple majority could abolish them.",
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
    "t": "A Māori parliament would be equally exposed.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "If instead it were meant to make laws that Parliament could not override, supremacy itself would end: New Zealand would have two sovereign law-makers, which the present constitution cannot accommodate without a new founding document.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Separation of powers. Three pillars under one arch. B: a second legislature."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The separation of powers divides legislative, executive and judicial power so that no single body holds all three.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "In New Zealand the legislature and executive are fused: section 6 of the Constitution Act requires ministers to be members of Parliament, and since the Legislative Council Abolition Act 1950 there has been no upper house.",
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
    "t": "The separation that matters most lies between the political branches and the independent courts.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "A Māori parliament would not fit that pattern.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "It would not check the existing branches; it would be a second legislature.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "It would raise questions the proposal must answer: which executive would enforce its laws, whom they would bind, and which courts would resolve conflicts with Parliament's laws.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Those conflicts would require courts to decide the boundary between two legislatures, a role closer to American-style review than anything New Zealand courts now perform.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The place proposed for traditional leaders also matters.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "It resembles the role of the Sovereign and the Governor-General, who exercise the Crown's powers under the Letters Patent but, by convention, act on ministerial advice.",
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
    "t": "If the traditional leaders acted only on advice, the model would mirror the existing Crown.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "If they had real power of their own, they would combine spiritual guidance with authority in a way the separation of powers is designed to prevent.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Rule of law. The king and the beggar in the same tide. C: one law, or two?"
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The rule of law requires that government be under law, that law be clear and known in advance, and, on Dicey's account, that everyone be equal before the ordinary law.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "A Māori parliament would test the last element: if Māori were subject to laws made by a different body, the law would differ by descent.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Supporters reply that equality does not require identical rules, and that the rule of law also requires the Crown to keep its own promises, including te Tiriti.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Certainty would at least require clear rules on membership, and on which law governs disputes between Māori and others.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "The rule of law also governs how such a change could be made.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "In Fitzgerald v Muldoon, the Prime Minister's announcement that compulsory superannuation contributions would stop, before Parliament had changed the law, was held to be an unlawful suspension of the law, contrary to article 1 of the Bill of Rights 1688.",
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
    "t": "In the same way, a declaration of independence cannot change the law; only Parliament can.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Māori wards show the principle at work: when the 2024 Amendment Act required binding polls, councils complied, even those that opposed the change.",
    "a": [
     [
      3,
      2
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Yet New Zealand already accommodates more than one source of law.",
    "a": []
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "In Ellis v R, the Supreme Court held unanimously that tikanga has been, and will continue to be, recognised in developing the common law.",
    "a": [
     [
      3,
      1
     ]
    ]
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Legal pluralism within one legal system is compatible with the rule of law.",
    "a": []
   },
   {
    "f": "m2s1",
    "k": "say",
    "t": "Separate law-making institutions would go further, and would be compatible only if the boundaries between the two systems were clear and enforceable.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Counter card: Who defines the principles? Too many hands on one stone. The case for: partnership."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "The strongest case for the proposal is the Treaty partnership.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "In the Lands case, Cooke P said that the Treaty \"signified a partnership between races\", and the Court of Appeal held that the principles require good faith and active protection of Māori interests.",
    "a": [
     [
      4,
      0
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "Under section 5(2) of the Treaty of Waitangi Act 1975, the Tribunal has exclusive authority to determine the meaning and effect of both texts, and it has read te Tiriti as preserving Māori authority.",
    "a": [
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "On that view, guaranteed Māori authority is not a privilege but part of the bargain on which the Crown's own authority rests, and a partnership in which one partner can abolish the other's institutions by simple majority is unequal.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The constitution has adapted before, through the Māori seats, Māori wards and Treaty settlements.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The counter-argument is equality of citizenship, together with the practical difficulty of running two legislatures in one small state.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Written constitution? Put it in writing, or let it blow in the wind. Only a new settlement."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Under the present constitution, a Māori parliament would leave parliamentary supremacy intact, because it could exist only by Act of Parliament and could be abolished by an ordinary majority.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "It would reshape the separation of powers, by adding a second legislature and leaving the courts to police the boundary between the two.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "And it would test the rule of law's demand for equality before the law, while drawing support from the rule of law's demand that the Crown keep its promises.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Its legality depends on Parliament; its legitimacy depends on the Treaty.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "To make it secure would require what New Zealand has never adopted: an entrenched constitution that settles the Treaty's place.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "The 1985 White Paper, A Bill of Rights for New Zealand, proposed including the Treaty in supreme law, and that proposal was rejected.",
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
    "t": "Until the question is settled, any Māori authority within the state exists at the will of Parliament.",
    "a": []
   }
  ],
  "modelWords": 1197,
  "audio": {
   "src": "data/maori-rep.mp3?v=20261120c",
   "starts": [
    0.0,
    7.41,
    22.66,
    27.2,
    30.64,
    41.54,
    56.66,
    72.69,
    77.23,
    84.29,
    90.95,
    98.26,
    109.91,
    116.2,
    123.05,
    129.15,
    133.25,
    151.87,
    162.22,
    165.23,
    178.51,
    184.64,
    191.79,
    205.82,
    211.43,
    214.36,
    218.62,
    228.12,
    238.12,
    241.71,
    251.56,
    256.98,
    266.04,
    271.34,
    280.83,
    288.64,
    298.86,
    305.34,
    309.14,
    325.67,
    331.05,
    341.1,
    344.96,
    353.77,
    358.8,
    367.61,
    373.93,
    377.62,
    389.33,
    403.22,
    416.83,
    422.48,
    431.08,
    438.14,
    449.34,
    456.83,
    465.21,
    470.1,
    477.27,
    486.63
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
 },
 {
  "id": "law-making",
  "essay": "J24-1",
  "title": "Urgency: positives and negatives",
  "prompt": "'14 bills have passed under urgency in seven weeks — none of those bills were sent to a select committee … the average [1987–2010] was 10 per Parliament' (RNZ, 12 March 2024). Discuss the positives and negatives of this approach to law-making, with statutes and cases.",
  "intro": [
   [
    "1.9",
    "how a Bill passes; what urgency does"
   ]
  ],
  "concl": [
   "2.1",
   "a tool, not a habit"
  ],
  "mains": [
   {
    "card": "1.1",
    "cue": "positive: the mandate and speed",
    "sup": [
     [
      "2.5",
      "emergencies"
     ]
    ]
   },
   {
    "card": "2.8",
    "cue": "negative: scrutiny lost",
    "sup": [
     [
      "4.3",
      "urgency to close litigation"
     ]
    ]
   },
   {
    "card": "9.7",
    "cue": "negative: quality and certainty",
    "sup": [
     [
      "4.1",
      "courts repair later"
     ]
    ]
   },
   {
    "card": "1.4",
    "cue": "no court can stop it",
    "sup": [
     [
      "1.5",
      "Westco"
     ]
    ]
   }
  ],
  "auth": [
   [
    "How a Bill passes",
    0,
    [
     [
      "Standing Orders of the House of Representatives",
      "stages; urgency motion"
     ],
     [
      "Constitution Act 1986 s 16",
      "royal assent"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 7",
      "Attorney-General's report"
     ]
    ]
   ],
   [
    "Positives",
    1,
    [
     [
      "Constitution Act 1986 s 15(1)",
      "full power"
     ],
     [
      "Borrowdale v Director-General of Health [2020] NZHC 2090",
      "the gap urgency closed"
     ],
     [
      "COVID-19 Public Health Response Act 2020",
      "passed under urgency"
     ]
    ]
   ],
   [
    "Scrutiny",
    2,
    [
     [
      "Constitution Act 1986 s 6",
      "executive in the House"
     ],
     [
      "Legislative Council Abolition Act 1950",
      "no upper house"
     ],
     [
      "New Zealand Public Health and Disability Amendment Act 2013",
      "urgency; barred complaints"
     ],
     [
      "Ministry of Health v Atkinson [2012] NZCA 184",
      "the litigation it ended"
     ]
    ]
   ],
   [
    "Quality",
    3,
    [
     [
      "Legislation Act 2019 s 10(1)",
      "text, purpose, context"
     ],
     [
      "New Zealand Bill of Rights Act 1990 s 6",
      "consistent meaning"
     ]
    ]
   ],
   [
    "No legal check",
    4,
    [
     [
      "Bill of Rights 1688 art 9",
      "proceedings not questioned"
     ],
     [
      "Prebble v Television New Zealand Ltd [1994] 3 NZLR 1 (PC)",
      "courts stay out"
     ],
     [
      "Westco Lagan Ltd v Attorney-General [2001] 1 NZLR 40 (HC)",
      "no stopping a Bill"
     ]
    ]
   ],
   [
    "Conclusion",
    0,
    [
     [
      "Lord Bingham, The Rule of Law (2010)",
      "clear and predictable"
     ]
    ]
   ]
  ],
  "frame": [
   {
    "cards": [
     "1.9"
    ],
    "grade": "best",
    "why": "Start with what urgency is: the stages of a Bill and the one urgency removes. The rule-of-law conclusion weighs the positives against the negatives.",
    "concl": "2.1"
   },
   {
    "cards": [
     "1.9",
     "1.1"
    ],
    "grade": "ok",
    "why": "Fine, but sovereignty is better used as the first positive than in the introduction.",
    "concl": "1.11"
   },
   {
    "cards": [
     "1.2"
    ],
    "grade": "weak",
    "why": "Entrenchment is a different question from urgency.",
    "concl": "1.11"
   },
   {
    "cards": [
     "4.7"
    ],
    "grade": "weak",
    "why": "Prisoner voting is one example, not a frame.",
    "concl": "1.6"
   }
  ],
  "skel": [
   {
    "cards": [
     "1.1",
     "2.8",
     "9.7",
     "1.4"
    ],
    "grade": "best",
    "why": "Positives first (mandate, speed, emergencies), then the two negatives (lost scrutiny, poorer law), then why no court can intervene."
   },
   {
    "cards": [
     "1.1",
     "2.8",
     "1.4"
    ],
    "grade": "ok",
    "why": "Positives and negatives, but misses what rushed law does to quality and certainty."
   },
   {
    "cards": [
     "1.2",
     "1.5",
     "1.11"
    ],
    "grade": "weak",
    "why": "An entrenchment essay: it never weighs the positives and negatives of urgency."
   },
   {
    "cards": [
     "2.8",
     "9.7",
     "1.4"
    ],
    "grade": "weak",
    "why": "Only negatives. The question asks for both."
   }
  ],
  "sup": {
   "1.1": [
    {
     "cards": [
      "2.5"
     ],
     "grade": "best",
     "why": "Borrowdale: the gap in the lockdown law shows why fast law-making is sometimes needed."
    },
    {
     "cards": [
      "2.5",
      "1.10"
     ],
     "grade": "ok",
     "why": "Conventions add little here."
    },
    {
     "cards": [
      "6.2"
     ],
     "grade": "weak",
     "why": "Imperial law is off topic."
    },
    {
     "cards": [
      "8.1"
     ],
     "grade": "weak",
     "why": "Customary fishing is off topic."
    }
   ],
   "2.8": [
    {
     "cards": [
      "4.3"
     ],
     "grade": "best",
     "why": "Atkinson: the 2013 Act was passed under urgency to shut off complaints, the clearest example of the cost."
    },
    {
     "cards": [
      "4.3",
      "4.7"
     ],
     "grade": "ok",
     "why": "The 2025 prisoner ban is a s 7 example, not an urgency one."
    },
    {
     "cards": [
      "3.4"
     ],
     "grade": "weak",
     "why": "The ranking case is off topic."
    },
    {
     "cards": [
      "5.3"
     ],
     "grade": "weak",
     "why": "Baigent is off topic."
    }
   ],
   "9.7": [
    {
     "cards": [
      "4.1"
     ],
     "grade": "best",
     "why": "Section 6: courts read rushed words consistently with rights where they can, repair after the event."
    },
    {
     "cards": [
      "4.1",
      "4.2"
     ],
     "grade": "ok",
     "why": "Hansen's method adds little here."
    },
    {
     "cards": [
      "6.5"
     ],
     "grade": "weak",
     "why": "Sellers is international law."
    },
    {
     "cards": [
      "9.9"
     ],
     "grade": "weak",
     "why": "Tangiora is off topic."
    }
   ],
   "1.4": [
    {
     "cards": [
      "1.5"
     ],
     "grade": "best",
     "why": "Westco: courts won't stop a Bill on its content, so the only check is political."
    },
    {
     "cards": [
      "1.5",
      "1.3"
     ],
     "grade": "ok",
     "why": "Simpson is about election writs."
    },
    {
     "cards": [
      "2.3"
     ],
     "grade": "weak",
     "why": "Payn is off topic."
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
    "t": "Introduction. Passing a Bill. No plain sailing: one lock at a time, seven stages before a Bill becomes law."
   },
   {
    "f": "i",
    "k": "say",
    "t": "A Bill normally passes through introduction, first reading, select committee, second reading, committee of the whole House and third reading, and becomes law on royal assent under section 16 of the Constitution Act 1986.",
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
    "t": "These stages are set by the Standing Orders, rules the House makes for itself.",
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
    "t": "Urgency is a motion, moved by the Government and passed by a majority, that lets the House sit longer and take stages faster; with the House's agreement a Bill may also skip select committee altogether.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "In the new coalition Government's first seven weeks, 14 Bills passed under urgency without going to a select committee, when the average from 1987 to 2010 had been about 10 in a whole Parliament.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "This essay weighs the positives and negatives of that approach.",
    "a": []
   },
   {
    "f": "i",
    "k": "say",
    "t": "It argues that urgency is a legitimate tool for emergencies, Budgets and a clear electoral mandate, but that its routine use for ordinary policy sacrifices scrutiny and the quality of law, and that because no court can intervene, the only check is political.",
    "a": []
   },
   {
    "f": "m0",
    "k": "cue",
    "t": "Card: Can Parliament do anything? The lion on the throne. The positives: the mandate, and speed."
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The first positive is democratic.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Section 15(1) of the Constitution Act gives Parliament full power to make laws, and Parliament controls its own procedure.",
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
    "t": "A newly elected Government has a mandate, and the coalition parties had promised a programme for their first hundred days.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Urgency let them deliver it without months of delay, and voters can judge the result at the next election.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "The second positive is speed when it matters.",
    "a": []
   },
   {
    "f": "m0",
    "k": "say",
    "t": "Urgency has long been used for Budget legislation, where delay could disrupt public finance, and for genuine emergencies.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Borrowdale v Director-General of Health shows why.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "The High Court held that for the first nine days of the 2020 lockdown, official announcements told people the law required them to stay home when no order yet did, so those limits were not prescribed by law.",
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
    "t": "Parliament then passed the COVID-19 Public Health Response Act 2020 under urgency, to give the response a clear statutory footing.",
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
    "t": "In an emergency, a law made quickly is better than no law at all.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "Urgency need not abandon scrutiny either.",
    "a": []
   },
   {
    "f": "m0s0",
    "k": "say",
    "t": "After the Christchurch mosque attacks in 2019, Parliament passed firearms reforms within weeks but kept a shortened select committee stage, a middle path between full process and none.",
    "a": []
   },
   {
    "f": "m1",
    "k": "cue",
    "t": "Card: Separation of powers. Three pillars under one arch. The negatives: scrutiny lost."
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The main negative is the loss of scrutiny.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "New Zealand has had no second chamber since the Legislative Council Abolition Act 1950, and because section 6 of the Constitution Act requires ministers to be members of Parliament, the Government of the day normally controls the House.",
    "a": [
     [
      2,
      1
     ],
     [
      2,
      0
     ]
    ]
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Select committee is therefore the principal check on legislation: the public can make submissions, experts and affected groups are heard, and members from all parties examine the detail.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Skipping it removes the only stage at which citizens can be heard, and concentrates law-making in the executive, the opposite of what the separation of powers is meant to achieve.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "Urgency also blunts the Attorney-General's report under section 7 of the New Zealand Bill of Rights Act 1990.",
    "a": []
   },
   {
    "f": "m1",
    "k": "say",
    "t": "The report warns the House on introduction that a Bill appears inconsistent with the Bill of Rights, but if the Bill passes within days there is little time for the warning to be debated.",
    "a": [
     [
      0,
      2
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "The clearest example of the cost followed Ministry of Health v Atkinson.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "After the Human Rights Review Tribunal, the High Court and the Court of Appeal held that refusing to pay family members who cared for disabled adult children was discrimination, Parliament passed the New Zealand Public Health and Disability Amendment Act 2013 under urgency on Budget day, without a select committee stage.",
    "a": [
     [
      2,
      3
     ],
     [
      2,
      2
     ]
    ]
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "It restricted the payments and barred new complaints.",
    "a": []
   },
   {
    "f": "m1s0",
    "k": "say",
    "t": "Whatever its merits, a law that removed access to a remedy was passed without the public being heard.",
    "a": []
   },
   {
    "f": "m2",
    "k": "cue",
    "t": "Card: Reading the statute. Read the fine print, in the light of its purpose. The negatives: quality and certainty."
   },
   {
    "f": "m2",
    "k": "say",
    "t": "A second negative is the quality of the law itself.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The rule of law requires law that is clear, accessible and predictable, so that people can know what they must do.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Rushed Bills are more likely to contain drafting errors, unintended effects and gaps, which then need amending legislation, and in the meantime the public and officials must guess at what the law requires.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "The courts repair poorly drafted law after the event.",
    "a": []
   },
   {
    "f": "m2",
    "k": "say",
    "t": "Under section 10(1) of the Legislation Act 2019, the meaning of legislation is ascertained from its text in the light of its purpose and context.",
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
    "t": "Under section 6 of the Bill of Rights Act, a meaning consistent with rights is preferred wherever one is available.",
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
    "t": "But interpretation cannot rewrite clear words, and litigation is slow and expensive.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "A problem that a select committee might have found in a few weeks may take years to correct through the courts.",
    "a": []
   },
   {
    "f": "m2s0",
    "k": "say",
    "t": "Fast law can become slow law: what is saved in the House is paid for later by the people the law affects.",
    "a": []
   },
   {
    "f": "m3",
    "k": "cue",
    "t": "Card: Privilege shield. What's said in the House stays in the House. No court can stop it."
   },
   {
    "f": "m3",
    "k": "say",
    "t": "No court can intervene.",
    "a": []
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Article 9 of the Bill of Rights 1688 provides that proceedings in Parliament ought not to be impeached or questioned in any court, and in Prebble v Television New Zealand Ltd the Privy Council confirmed that the courts must not question what happens in the House.",
    "a": [
     [
      4,
      0
     ],
     [
      4,
      1
     ]
    ]
   },
   {
    "f": "m3",
    "k": "say",
    "t": "Standing Orders are the House's own rules: it can suspend them at will, and a court will not look behind a passed Act to check whether they were followed.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "In Westco Lagan Ltd v Attorney-General, McGechan J refused to stop a Bill, holding that courts may at most rule on mandatory manner and form, never on content.",
    "a": [
     [
      4,
      2
     ]
    ]
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The checks on urgency are therefore political.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The Standing Orders require the minister moving urgency to state the reasons for it, which gives the opposition a chance to challenge it in debate.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "The media, the opposition and, under MMP, coalition partners can all raise the cost of overusing it, and voters decide at the next election.",
    "a": []
   },
   {
    "f": "m3s0",
    "k": "say",
    "t": "These checks are real, but they depend on the Government's restraint, and a Government early in its term with a secure majority faces the least of them.",
    "a": []
   },
   {
    "f": "c",
    "k": "cue",
    "t": "Conclusion card: Rule of law. The tide rises on king and beggar alike. A tool, not a habit."
   },
   {
    "f": "c",
    "k": "say",
    "t": "Urgency has real positives.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "It lets an elected Government deliver its mandate, and it lets Parliament act fast in emergencies and on the Budget.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Its negatives are equally real: no select committee, no public submissions, less time to weigh section 7 reports, and law that is more likely to be unclear or wrong.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Lord Bingham argued that the law must be \"accessible and so far as possible intelligible, clear and predictable\", and routine urgency puts each of those qualities at risk.",
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
    "t": "The answer cannot come from the courts, which will not intervene, but from practice: use urgency for emergencies and Budgets, keep at least a shortened select committee stage for ordinary policy, as Parliament did in 2019, and let voters judge Governments that make urgency a habit.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Used that way, urgency is a useful tool.",
    "a": []
   },
   {
    "f": "c",
    "k": "say",
    "t": "Used routinely, as in early 2024, it erodes the scrutiny on which good law depends.",
    "a": []
   }
  ],
  "modelWords": 1130,
  "audio": {
   "src": "data/law-making.mp3?v=20261120c",
   "starts": [
    0.0,
    7.02,
    21.12,
    25.79,
    37.87,
    51.48,
    55.23,
    71.25,
    77.44,
    80.15,
    87.96,
    94.76,
    100.95,
    103.92,
    111.66,
    115.03,
    127.34,
    136.19,
    140.33,
    143.4,
    155.88,
    161.79,
    164.61,
    179.35,
    189.89,
    199.94,
    208.21,
    218.79,
    223.17,
    242.6,
    245.76,
    252.13,
    259.52,
    262.97,
    269.37,
    281.13,
    284.59,
    294.38,
    301.1,
    306.58,
    312.36,
    319.16,
    325.05,
    327.23,
    343.44,
    351.36,
    361.79,
    364.71,
    372.86,
    381.78,
    391.08,
    397.69,
    400.21,
    406.99,
    417.19,
    427.41,
    444.88,
    447.95
   ],
   "voice": "Isabella (Kokoro, British English)"
  }
 }
];
