// Tarot essay plans: one spread per essay. Built 18 Nov 2026.
// grade: best | ok | weak. Cards are v12 card numbers. sup keys are main-card numbers.
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
  }
 }
];
