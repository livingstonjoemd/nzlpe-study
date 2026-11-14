// Law questions: hand-written multiple choice, one or more per card.
// Every answer and wrong option is taken from the v12 card text (deck-v12-back-of-card-text.md).
// Wrong options are real authorities or plausible misreadings, so the picture never gives the answer away.
// id: stable key for review boxes. c: card. q: question. a: right answer. w: wrong answers. why: shown after answering.
window.DRILLS = [
// ---------- Suit 1: Parliament and the constitution ----------
{id:"1.1a",c:"1.1",q:"Which provision stops a court declining to apply an Act because it is inconsistent with the Bill of Rights?",a:"NZBORA s 4",w:["NZBORA s 6","Constitution Act 1986 s 15(1)","Senior Courts Act 2016 s 3(2)"],why:"s 4 keeps the Act in force. s 6 is the reading-down direction; s 15(1) gives Parliament full power to make laws."},
{id:"1.1b",c:"1.1",q:"What is the status of Cooke J's suggestion (Taylor v NZ Poultry Board) that some common law rights lie too deep for Parliament to override?",a:"Dicta only; never applied",w:["Applied in Westco Lagan to strike down part of an Act","Adopted by the Supreme Court in Attorney-General v Taylor (2018)","Codified in Senior Courts Act 2016 s 3(2)"],why:"Use it as the high-water mark of the 'limits' argument, then say no court has applied it."},
{id:"1.1c",c:"1.1",q:"Westco Lagan v Attorney-General: Parliament may take property without compensation provided…",a:"the required manner and form is followed",w:["the Attorney-General first reports under NZBORA s 7","compensation is later available under another Act","the Bill passes with 75% of the House"],why:"Sovereignty over content; the only legal hook is mandatory manner and form."},
{id:"1.1d",c:"1.1",q:"What is the card's verdict on whether parliamentary sovereignty is unlimited?",a:"Legally unlimited; the real limits are political (MMP, elections, s 7 reports, declarations, conventions)",w:["Limited by the Treaty of Waitangi as a higher law","Limited by NZBORA, which courts can enforce against Acts","Limited by Electoral Act 1993 s 268, which entrenches the whole constitution"],why:"The 2026 Climate Act ending Smith v Fonterra is the current proof."},

{id:"1.2a",c:"1.2",q:"Under Electoral Act 1993 s 268(2), how can a reserved provision be repealed or amended?",a:"75% of all members of the House, or a majority of valid votes at a poll of electors",w:["60% of all members, or a referendum","A simple majority after a select committee report","Two successive Parliaments voting the same way"],why:"60% was the controversial Water Services entrenchment in 2022 (Jul 23 NZ Q2), not s 268."},
{id:"1.2b",c:"1.2",q:"Which of these is NOT a reserved provision?",a:"Prisoner disqualification (Electoral Act 1993 s 80)",w:["Three-year term (Constitution Act 1986 s 17(1))","Voting age 18 (Electoral Act 1993 s 74 with s 3(1))","Secret ballot (Electoral Act 1993 s 168)"],why:"That is why the 2025 prisoner ban passed by simple majority (card 4.7)."},
{id:"1.2c",c:"1.2",q:"Why is s 268 called 'single' entrenchment?",a:"s 268 itself is not reserved, so on the orthodox view a two-step repeal is possible",w:["It protects only one provision","It needs only one vote of the House","Only a single court has enforced it"],why:"In practice it has been obeyed since 1956 as a political obligation."},
{id:"1.2d",c:"1.2",q:"Which authorities suggest a court could enforce a mandatory procedure for changing the law?",a:"Manner and form theory (Trethowan, Harris, Ranasinghe) and Westco Lagan",w:["Prebble and the Parliament Act 2025","Simpson v Attorney-General (1955)","Fitzgerald v Muldoon"],why:"Simpson is the opposite pull: a slip was directory, not mandatory."},

{id:"1.3a",c:"1.3",q:"Simpson v Attorney-General [1955]: the late issue of the 1946 election writs was…",a:"directory, so the Parliaments and their Acts were valid",w:["mandatory, but the defect was cured by later Acts","mandatory, and the Acts were declared invalid from 1955","not a matter the court could decide at all"],why:"Invalidating every law since 1946 could not have been intended."},
{id:"1.3b",c:"1.3",q:"What test does Simpson give for whether a procedural rule is mandatory?",a:"Its words, purpose and the consequences of breach",w:["Whether it appears in an entrenched provision","Whether the House has waived the breach","Whether any voter was actually prejudiced"],why:"Contrast entrenchment, drafted to be mandatory."},

{id:"1.4a",c:"1.4",q:"Prebble v TVNZ: what may Hansard be used for in court?",a:"To prove what was said, but not to question its truth, motive or good faith",w:["Anything, once the House waives privilege","Nothing at all, under any circumstances","Only to interpret an ambiguous Act"],why:"Bill of Rights 1688 art 9 protects proceedings even against a defendant."},
{id:"1.4b",c:"1.4",q:"In Prebble, could the House waive art 9 so TVNZ could rely on what was said?",a:"No: the House cannot waive it",w:["Yes, by resolution of the House","Yes, if the member consents","Only the Speaker can waive it"],why:"And the stay was wrong: the excluded material was marginal."},
{id:"1.4c",c:"1.4",q:"Which Act now governs proceedings in Parliament and the use of evidence about them?",a:"Parliament Act 2025 (ss 13, 17, 18)",w:["Parliamentary Privilege Act 2014","Constitution Act 1986 s 15","Legislation Act 2019"],why:"It replaced the 2014 Act, which had reversed Attorney-General v Leigh [2011] NZSC 106."},

{id:"1.5a",c:"1.5",q:"Westco Lagan: when, in principle, could a court rule on breach of mandatory manner and form?",a:"Between third reading and royal assent",w:["At any stage, including select committee","Only after the Act is in force","Never; it is purely political"],why:"Courts may rule on manner and form, never on content."},
{id:"1.5b",c:"1.5",q:"What did Ngāti Whātua Ōrākei [2018] NZSC 84 allow, despite pending settlement legislation?",a:"Declarations of rights; but not a challenge to the decision to legislate",w:["An injunction stopping the Bill","Review of the Bill's content","Nothing: the whole claim was struck out"],why:"Comity is 'a two-way street' (Westco)."},

{id:"1.6a",c:"1.6",q:"Attorney-General v Taylor [2018] NZSC 104 held a senior court can declare an Act inconsistent with NZBORA…",a:"3–2, as part of its ordinary remedial powers",w:["5–0, under NZBORA s 7A","3–2, but only with the Crown's consent","4–1, under the Declaratory Judgments Act 1908 alone"],why:"William Young and O'Regan JJ: no power without statute."},
{id:"1.6b",c:"1.6",q:"What do NZBORA ss 7A and 7B require after a declaration?",a:"The Attorney-General presents it to the House within 6 sitting days; the Government responds",w:["The Act stops applying to the claimant","Parliament must vote to keep the Act within 6 months","The Law Commission must review the Act"],why:"Inserted 2022. Dialogue: the court rings the bell, Parliament decides."},
{id:"1.6c",c:"1.6",q:"Why does a declaration of inconsistency respect NZBORA s 4?",a:"The Act stays valid and keeps applying",w:["It is made only by the Supreme Court","It is advisory and has no legal form","It suspends the Act until Parliament votes"],why:"In 2025 Parliament reinstated a prisoner ban anyway (card 4.7)."},

{id:"1.7a",c:"1.7",q:"Through which Act do Magna Carta 1297 c 29 and the Bill of Rights 1688 stay in force?",a:"Imperial Laws Application Act 1988",w:["Constitution Act 1986","Senior Courts Act 2016","Legislation Act 2019"],why:"Card 6.2 has the detail."},
{id:"1.7b",c:"1.7",q:"Which part of the constitution cannot be changed by simple majority?",a:"The reserved provisions under Electoral Act 1993 s 268",w:["The Treaty of Waitangi Act 1975","NZBORA","The Constitution Act 1986 as a whole"],why:"Trap: the Treaty is not among the reserved provisions."},

{id:"1.8a",c:"1.8",q:"Make It 16: what did each court decide?",a:"HC: justified. CA: not justified, no declaration. SC: declaration made",w:["HC: declaration. CA: reversed. SC: restored the HC","All three: justified limit","HC and CA: no jurisdiction. SC: declaration"],why:"Make It 16 Inc v Attorney-General [2022] NZSC 134."},
{id:"1.8b",c:"1.8",q:"Why did NZBORA s 12 (vote at 18) not defeat the s 19 claim?",a:"s 12 did not answer a s 19 discrimination claim, and the Crown did not justify the limit",w:["s 19 overrides s 12 under s 4","s 12 was read down under s 6","s 12 applies only to local elections"],why:"Kós J in part: for parliamentary elections, s 12 settles it."},
{id:"1.8c",c:"1.8",q:"Under Human Rights Act 1993 s 21(1)(i), protection from age discrimination starts at…",a:"16",w:["18","14","20"],why:"So a voting age of 18 discriminates against 16- and 17-year-olds."},

{id:"1.9a",c:"1.9",q:"At what stage does the Attorney-General's NZBORA s 7 report come?",a:"On introduction",w:["After the select committee reports","At third reading","Before royal assent"],why:"Card 4.7: the 2025 prisoner ban went ahead despite a s 7 report."},
{id:"1.9b",c:"1.9",q:"Which is NOT one of Parliament's five functions on the card?",a:"Deciding disputes about what statutes mean",w:["Providing a government","Consenting to tax and spending","Scrutinising the executive"],why:"The five: provide a government; represent; consent to tax and spending; legislate; scrutinise."},
{id:"1.9c",c:"1.9",q:"Can a court look behind a passed Act to see whether Standing Orders were followed?",a:"No: Standing Orders are internal",w:["Yes, under NZBORA s 27","Yes, if urgency was used","Only if the Speaker certifies a breach"],why:"Urgency compresses or skips stages; the check is political (Jul 24 NZ Q1)."},

{id:"1.10a",c:"1.10",q:"Jennings test: which two elements does Joseph treat as essential?",a:"The actors believed they were bound, and there is a constitutional reason",w:["Precedents and belief","Precedents and a reason","Precedents and a Cabinet Manual entry"],why:"One precedent can suffice (1984, caretaker convention)."},
{id:"1.10b",c:"1.10",q:"What follows if a rule is a convention?",a:"Courts recognise it but will not enforce it; breach has political consequences",w:["Courts enforce it like statute","It binds only once in the Cabinet Manual","Breach makes the act void"],why:"Strength: flexibility. Weakness: uncertainty."},
{id:"1.10c",c:"1.10",q:"Which convention is codified in Constitution Act 1986 s 6?",a:"Ministers must be MPs",w:["The caretaker convention","Collective responsibility","The Governor-General acts on advice"],why:"ss 23–24 codify judicial tenure."},

{id:"1.11a",c:"1.11",q:"What happened to the 1985 White Paper (A Bill of Rights for New Zealand)?",a:"It proposed an entrenched supreme-law Bill of Rights and was rejected",w:["It was enacted as NZBORA with entrenchment","It proposed a written constitution and was adopted in part","It was withdrawn before publication"],why:"Objections: unelected judges deciding political questions, uncertainty, freezing development."},
{id:"1.11b",c:"1.11",q:"Which is an argument AGAINST a written constitution on the card?",a:"MMP, select committees, s 7 reports and declarations already restrain Parliament",w:["The sources are scattered and hard to find","Minorities lack protection from a unicameral Parliament","s 268 entrenchment is single and political only"],why:"The verdict turns on trust: in courts, or in voters and conventions."},

{id:"1.12a",c:"1.12",q:"Under Electoral Act 1993 ss 55A–55E, what must happen before an MP's seat becomes vacant?",a:"Leader's written notice to the Speaker, 21 working days to respond, and two-thirds of the party's MPs agreeing",w:["A majority of party members nationally vote to expel","The Electoral Commission certifies a breach","75% of all members of the House agree"],why:"The leader must state a reasonable belief the member has distorted proportionality."},
{id:"1.12b",c:"1.12",q:"Best argument AGAINST the party-hopping law?",a:"It chills dissent and strengthens party leaders over members and voters",w:["It is unlawful under s 268","It breaches Bill of Rights 1688 art 9","It applies only to list MPs"],why:"For: it protects the voters' MMP choice of party."},

// ---------- Suit 2: Rule of law and separation of powers ----------
{id:"2.1a",c:"2.1",q:"Regulatory Standards Act 2025: what legal effect do its rule of law principles have?",a:"s 9 lists them, but s 23 creates no rights and s 24 does not affect validity",w:["Courts can strike down regulations that breach them","They are reserved under s 268","They give a right to compensation"],why:"A statement of principle, not a check a court enforces."},
{id:"2.1b",c:"2.1",q:"Which is NOT one of Joseph's three rule of law propositions?",a:"Courts may invalidate statutes that breach rights",w:["Authority must be found in law","Officials are bound by law in the ordinary courts","Freedoms yield only to statute"],why:"The third proposition is the principle of legality (Pora, Payn)."},
{id:"2.1c",c:"2.1",q:"Which case on the checklist shows officials subject to the ordinary law?",a:"Dotcom: the unlawful removal of the cloned drives",w:["Westco Lagan","Simpson v Attorney-General","Takamore v Clarke"],why:"Run all six checklist questions against any measure."},

{id:"2.2a",c:"2.2",q:"Fitzgerald v Muldoon: why was the Prime Minister's announcement unlawful?",a:"It suspended the law by regal authority without Parliament, breaching Bill of Rights 1688 art 1",w:["It breached natural justice under NZBORA s 27(1)","It was a tax without Parliament under art 4","It was a legislative judgment"],why:"Made in his official capacity, so it was 'by regal authority'."},
{id:"2.2b",c:"2.2",q:"What remedy did Wild CJ grant in Fitzgerald v Muldoon?",a:"A declaration",w:["An injunction against the Prime Minister","Damages for each contributor","Certiorari quashing the Act"],why:"Counter: only declaratory, and Parliament soon passed the change."},
{id:"2.2c",c:"2.2",q:"How is Borrowdale distinguished from Fitzgerald?",a:"In Borrowdale the power existed (Health Act 1956 s 70(1)(f)) but had not yet been used",w:["Borrowdale involved a statute, Fitzgerald a regulation","In Borrowdale Parliament had already repealed the law","Borrowdale concerned a court, not the executive"],why:"Fitzgerald is suspension; Borrowdale is a law not yet made."},

{id:"2.3a",c:"2.3",q:"Transport Ministry v Payn: why did the officers need an express power?",a:"Once the occupier withdrew the implied licence to come to the door, they could not stay without one",w:["They had entered by force","The breath test was not authorised at all","They had no warrant for the car"],why:"Entick v Carrington: interference must be positively authorised."},
{id:"2.3b",c:"2.3",q:"Who dissented in Payn, and how?",a:"Richmond P: he would have implied a power to enter without force",w:["Cooke J: he would have upheld the convictions","Woodhouse J: the licence could not be withdrawn","No one: the court was unanimous"],why:"The split shows 'necessary implication' is contestable."},

{id:"2.4a",c:"2.4",q:"Attorney-General v Dotcom [2014] NZCA 19: what did the Court of Appeal decide about the warrants?",a:"Defects of form, not substance; saved by Summary Proceedings Act 1957 s 204",w:["They were nullities, as Winkelmann J held","Valid because NZBORA s 21 was not engaged","Invalid, but the evidence was admitted under Evidence Act s 30"],why:"Read with the arrest warrants, the respondents knew the offences."},
{id:"2.4b",c:"2.4",q:"What did the Court of Appeal hold was unlawful in Dotcom?",a:"Letting the FBI take cloned drives to the US without the Solicitor-General's direction",w:["Executing the warrants at all","Arresting Mr Dotcom","Seizing the drives in New Zealand"],why:"Breach of Mutual Assistance in Criminal Matters Act 1992 s 49. Legality is judged act by act."},

{id:"2.5a",c:"2.5",q:"Borrowdale: for which period were the restrictions not 'prescribed by law'?",a:"26 March to 3 April 2020",w:["The whole Alert Level 4 lockdown","Only after the COVID-19 Public Health Response Act 2020","Never: all limits were prescribed by law"],why:"Announcements said people must stay home when no order said so."},
{id:"2.5b",c:"2.5",q:"Which of Mr Borrowdale's three grounds succeeded?",a:"Only the third: limits not prescribed by law for nine days",w:["The first: the Health Act orders were unlawful","The second: unlawful delegation","All three, with a declaration on each"],why:"Necessary and proportionate, but not prescribed by law. Declaration, finely balanced."},

{id:"2.6a",c:"2.6",q:"Christiansen v Director-General of Health: what went wrong?",a:"Officials applied a framework narrower than the Order (wrong test; mandatory consideration ignored)",w:["The decision was so unreasonable no one could make it","The decision-maker was biased","He had a legitimate expectation of an exemption"],why:"Unreasonableness was not decided."},
{id:"2.6b",c:"2.6",q:"What relief did Walker J give in Christiansen?",a:"An interim order under JRPA 2016 s 15 releasing him on conditions",w:["A declaration only","Damages under NZBORA","Certiorari quashing the Order"],why:"Urgency does not change the test."},

{id:"2.7a",c:"2.7",q:"Principles lens on the 2026 Climate Act ending Smith v Fonterra: which point is SEPARATION OF POWERS?",a:"Parliament decided a pending case, against the Clyde Dam convention",w:["The Act is valid under Constitution Act 1986 s 15(1)","Claimants lose access to the courts","The Act has retrospective effect on a live claim"],why:"Validity is sovereignty; access and retrospectivity are rule of law."},
{id:"2.7b",c:"2.7",q:"Principles lens on the 2025 prisoner voting ban: which point is SOVEREIGNTY?",a:"Valid: Electoral Act s 80 is not reserved, and NZBORA s 4 applies",w:["Parliament answered the court's declaration with legislation","A minority without a vote cannot hold Parliament to account","The s 7 warning was overridden"],why:"The last step of the lens: weigh legality against legitimacy."},
{id:"2.7c",c:"2.7",q:"Principles lens on a caretaker government after an unclear election: which point is RULE OF LAW?",a:"Certainty depends on conventions in the Cabinet Manual, not enforceable law",w:["Parliament has codified only Constitution Act 1986 s 6","The Governor-General's discretion is the only check","Parliament could legislate if it chose"],why:"From card 9.11."},

{id:"2.8a",c:"2.8",q:"Strongest legal evidence that executive and legislature are fused?",a:"Constitution Act 1986 s 6: ministers must be MPs",w:["Constitution Act 1986 ss 23–24","Fitzgerald v Muldoon","Westco Lagan"],why:"The other three show separation, not fusion."},
{id:"2.8b",c:"2.8",q:"Judicial Conduct Panel on Judge Ema Aitken (report 1 April 2026) found…",a:"A serious breach of comity, but not grounds for removal",w:["Misbehaviour warranting removal","No breach at all","A breach of the sub judice rule"],why:"Jul 26 NZ Q2 quoted this finding."},
{id:"2.8c",c:"2.8",q:"Taylor (Court of Appeal) described government as…",a:"a 'collaborative enterprise', each branch sovereign in its sphere",w:["a 'two-way street'","'window-dressing'","'lip service'"],why:"'Two-way street' is Westco on comity; 'window-dressing' is Tavita; 'lip service' is Baigent."},

// ---------- Suit 3: Judicial review ----------
{id:"3.1a",c:"3.1",q:"Which is NOT one of Lord Diplock's three heads in GCHQ?",a:"Proportionality (left open)",w:["Illegality","Irrationality","Procedural impropriety"],why:"Council of Civil Service Unions v Minister for the Civil Service [1985] AC 374."},
{id:"3.1b",c:"3.1",q:"In GCHQ, what defeated the unions' legitimate expectation of consultation?",a:"National security",w:["The prerogative source of the power","Delay in bringing the claim","An alternative statutory remedy"],why:"Reviewability depends on subject matter, not source."},
{id:"3.1c",c:"3.1",q:"Which provision gives natural justice against any tribunal or public authority deciding rights?",a:"NZBORA s 27(1)",w:["NZBORA s 27(2)","JRPA 2016 s 16","Ombudsmen Act 1975 s 22"],why:"s 27(2) is the right to apply for review."},
{id:"3.1d",c:"3.1",q:"Applying a policy narrower than the power (fettering) falls under which head?",a:"Illegality",w:["Irrationality","Procedural impropriety","Legitimate expectation"],why:"Christiansen (card 2.6)."},

{id:"3.2a",c:"3.2",q:"On which question does a court give NO deference?",a:"The meaning of a statute",w:["National security","Allocating public resources","Expert judgement"],why:"One right answer, the court's."},
{id:"3.2b",c:"3.2",q:"Which factor makes review MORE intense?",a:"A fundamental right is at stake (Zaoui; Grounded Kiwis)",w:["A polycentric policy question","A decision of an elected body","A commercial bargain"],why:"Deference is about appropriateness, not jurisdiction."},

{id:"3.3a",c:"3.3",q:"Lab Tests Auckland v Auckland DHB [2008] NZCA 385: result?",a:"Appeal allowed; contract restored",w:["High Court's finding of unlawfulness upheld","Contract quashed for conflict of interest","Decision set aside and remitted for reconsideration"],why:"The High Court's broad 'probity' standard was wrong."},
{id:"3.3b",c:"3.3",q:"Lab Tests: how intensely is a public body's commercial decision reviewed?",a:"It depends on the body, its function, the context and the alleged wrong",w:["Always on a broad probity standard","Not at all: contracts are private law","Only for fraud or bad faith"],why:"Amenable if 'in substance public'; intensity is another matter."},

{id:"3.4a",c:"3.4",q:"University of Auckland v TEC: on which grounds did the universities win?",a:"Natural justice and legitimate expectation",w:["Irrationality and mistake of fact","All four grounds argued","None; relief was refused"],why:"They lost on irrationality and mistake: flawed, but not impossible."},
{id:"3.4b",c:"3.4",q:"What remedy followed in University of Auckland v TEC?",a:"Interim orders: no publication until TEC consulted",w:["A permanent ban on the ranking","Damages for reputational harm","A declaration only"],why:"The remedy matched the ground won."},

{id:"3.5a",c:"3.5",q:"Under JRPA 2016 s 16, instead of declaring a decision invalid the court may…",a:"set it aside and direct reconsideration",w:["substitute its own decision","award exemplary damages","refer it to the Ombudsman"],why:"All relief is discretionary."},
{id:"3.5b",c:"3.5",q:"Which is NOT a usual reason to refuse relief in review?",a:"The decision-maker is a Minister",w:["Delay","Futility","An adequate alternative remedy"],why:"Conduct of the applicant can also defeat relief."},

{id:"3.6a",c:"3.6",q:"Milroy v Attorney-General (CA 2003) held that…",a:"policy work preparing legislation is non-justiciable",w:["all prerogative powers are reviewable","settlement decisions can never be reviewed","national security decisions are reviewable"],why:"Joseph: an 'abdication'. NWO 2018 was the 'quietus to the Milroy mantra'."},
{id:"3.6b",c:"3.6",q:"Which did Lord Roskill list as not reviewable by its nature?",a:"The prerogative of mercy",w:["Refusing an isolation exemption","Publishing a university ranking","Awarding a laboratory contract"],why:"Also treaties, defence, honours, dissolution, appointing ministers."},

{id:"3.7a",c:"3.7",q:"First question when advising a client who wants to challenge a public decision?",a:"Is it amenable to review (a statutory power, or 'in substance public')?",w:["Which ground has the best chance?","Can we get damages?","Is there a NZBORA right?"],why:"Then procedure, grounds, rights, intensity, remedy, practical outcome."},
{id:"3.7b",c:"3.7",q:"Which court and rules hear judicial review?",a:"High Court, under the JRPA 2016 and High Court Rules 2016 Part 30",w:["District Court, under the District Court Act 2016","Court of Appeal, by originating summons","Human Rights Review Tribunal"],why:"Check time and alternative remedies (appeal, Ombudsman)."},

// ---------- Suit 4: Bill of Rights ----------
{id:"4.1a",c:"4.1",q:"Brooker v Police [2007] NZSC 30: 'disorderly' requires…",a:"a disturbance of public order",w:["conduct a reasonable person finds offensive","any protest at a private house","a breach of the peace by violence"],why:"Read under s 6 to limit s 14 least. Conviction quashed."},
{id:"4.1b",c:"4.1",q:"Hopkinson v Police (flag burning): 'dishonour' was read as…",a:"'vilify'",w:["'damage'","'insult'","'display disrespectfully'"],why:"A narrower meaning that limits expression less."},
{id:"4.1c",c:"4.1",q:"Moonen v Film and Literature Board of Review: outcome?",a:"Classification set aside; the Board to reconsider, reading the Act to limit s 14 least",w:["The Act declared inconsistent with NZBORA","Classification upheld under s 4","The material held not to be expression"],why:"Moonen set out the step-by-step method for ss 4–6."},

{id:"4.2a",c:"4.2",q:"Hansen v R: the reverse onus in Misuse of Drugs Act 1975 s 6(6) was…",a:"a legal burden, an unjustified limit on s 25(c), but applied because it could not be read down",w:["an evidential burden only, after reading down under s 6","a legal burden justified under s 5","a legal burden the court refused to apply"],why:"Appeal dismissed. An evidential burden would have done."},
{id:"4.2b",c:"4.2",q:"How does Elias CJ's approach in Hansen differ?",a:"She would apply s 6 before s 5",w:["She would strike down the provision","She would skip s 5 altogether","She would apply s 4 first"],why:"The order of steps is still contested."},
{id:"4.2c",c:"4.2",q:"Which is NOT one of the Oakes limbs used under s 5?",a:"Whether the Attorney-General reported under s 7",w:["Important purpose","Rational connection","Minimal impairment"],why:"The fourth limb is proportionate effect."},

{id:"4.3a",c:"4.3",q:"Ministry of Health v Atkinson: on which ground was refusing to pay family carers discrimination?",a:"Family status",w:["Age","Disability","Marital status"],why:"NZBORA s 19 with Human Rights Act 1993 s 21."},
{id:"4.3b",c:"4.3",q:"Atkinson: which body first declared the policy inconsistent with s 19?",a:"The Human Rights Review Tribunal",w:["The High Court on judicial review","The Supreme Court","The Ombudsman"],why:"Route: Human Rights Commission, then the Tribunal (HRA Part 1A; s 92J declarations). HC upheld; CA dismissed the appeal."},
{id:"4.3c",c:"4.3",q:"How did Parliament respond to Atkinson?",a:"The 2013 Amendment Act, passed under urgency, restricted payments and barred new complaints",w:["It accepted the ruling and paid all family carers","It referred the issue to the Law Commission","It entrenched the funding policy"],why:"A rule of law concern; Parliament had the last word."},

{id:"4.4a",c:"4.4",q:"Attorney-General v Smith [2018] NZCA 24: why was wearing the wig not 'expression'?",a:"Expression must convey or try to convey meaning; a wig worn to look ordinary did not",w:["Prisoners lose s 14 rights","The limit was justified under s 5","The point was moot, so the court did not decide"],why:"Threshold first: is the conduct inside the right? Only then s 5."},

{id:"4.5a",c:"4.5",q:"R v Pora: result?",a:"Minimum term quashed, unanimously, with the judges split on reasoning",w:["Minimum term upheld under the 1999 Amendment","Declaration of inconsistency only","Retrial ordered"],why:"Seven judges."},
{id:"4.5b",c:"4.5",q:"Elias CJ and Tipping J in Pora held which provision prevailed?",a:"Criminal Justice Act 1985 s 4(2)",w:["Criminal Justice Act 1985 s 80(2A)","Criminal Justice Amendment Act (No 2) 1999 s 2(4)","NZBORA s 26(1)"],why:"With s 6 and legality, Parliament must speak plainly to impose a heavier penalty retrospectively."},
{id:"4.5c",c:"4.5",q:"Which NZBORA right guarantees the lesser penalty when the penalty has changed?",a:"s 25(g)",w:["s 26(1)","s 25(c)","s 21"],why:"s 26(1) bars retrospective offences."},

{id:"4.6a",c:"4.6",q:"Ransfield v Radio Network: is a talkback station bound by NZBORA?",a:"No: it is not performing a public function; the test is whether the function is governmental in nature",w:["Yes: broadcasting is a public function","Yes, because it holds a licence under statute","Only for political content"],why:"NZBORA s 3(b) reaches public functions conferred by law."},
{id:"4.6b",c:"4.6",q:"Which section gives NZBORA rights to legal persons such as companies?",a:"s 29",w:["s 3(b)","s 28","s 19"],why:"The first question in any Bill of Rights problem is s 3."},

{id:"4.7a",c:"4.7",q:"Why could the 2025 prisoner voting ban pass by simple majority?",a:"Electoral Act 1993 s 80 is not a reserved provision",w:["Taylor had been overruled","The s 7 report found it consistent","NZBORA s 12 does not cover prisoners"],why:"Electoral Amendment Act 2025, assent 19 December 2025."},
{id:"4.7b",c:"4.7",q:"Besides the prisoner ban, what did the Electoral Amendment Act 2025 change?",a:"Enrolment closes 13 days before election day",w:["The voting age dropped to 16","The term of Parliament became four years","Māori seats were abolished"],why:"Card 4.7 is flagged: re-check the details."},

{id:"4.8a",c:"4.8",q:"Grounded Kiwis v Minister of Health: which part of MIQ was NOT a justified limit?",a:"The virtual lobby, which could not prioritise by need or length of delay",w:["The 14- and 7-day isolation periods","The voucher requirement","Group allocations"],why:"Declaration."},
{id:"4.8b",c:"4.8",q:"At which Oakes step did the virtual lobby fail?",a:"Minimal impairment",w:["Important purpose","Rational connection","Prescribed by law"],why:"Borrowdale failed at 'prescribed by law' instead."},
{id:"4.8c",c:"4.8",q:"Which right did MIQ limit in Grounded Kiwis?",a:"NZBORA s 18(2): every citizen's right to enter New Zealand",w:["s 18(1): freedom of movement within NZ","s 11: refusing medical treatment","s 21: unreasonable search"],why:"Mallon J, [2022] NZHC 832."},

// ---------- Suit 5: Search, evidence, remedies, detention ----------
{id:"5.1a",c:"5.1",q:"R v Jefferies: is an unlawful search necessarily 'unreasonable' under s 21?",a:"No: unlawfulness is highly relevant but not decisive",w:["Yes: unlawful means unreasonable","No: lawfulness is irrelevant","Only if done without a warrant"],why:"Seven judges; appeals dismissed."},
{id:"5.1b",c:"5.1",q:"What does s 21 protect, per Jefferies?",a:"Reasonable expectations of privacy",w:["Property rights","Freedom from all police contact","The right to a warrant in every case"],why:"Privacy, not property, is the touchstone."},

{id:"5.2a",c:"5.2",q:"Which case replaced prima facie exclusion with a balancing test?",a:"R v Shaheed",w:["R v Butcher","R v Jefferies","Ministry of Transport v Noort"],why:"Evidence Act 2006 s 30 codifies Shaheed."},
{id:"5.2b",c:"5.2",q:"Evidence Act 2006 s 30: improperly obtained evidence must be excluded if…",a:"exclusion is proportionate to the impropriety, by a balancing process",w:["any NZBORA right was breached","the offence is not serious","the police acted in bad faith"],why:"Factors include the right's importance, the evidence's quality and the offence's seriousness."},
{id:"5.2c",c:"5.2",q:"In Shaheed, what happened to the later DNA match?",a:"Excluded as tainted (majority)",w:["Admitted as untainted (majority)","Admitted under the prima facie rule","Excluded because the offence was minor"],why:"Elias CJ and Gault J held it untainted."},

{id:"5.3a",c:"5.3",q:"Baigent's Case: why did Crown Proceedings Act 1950 s 6(5) not bar the claim?",a:"The claim was the State's own public law liability, not vicarious liability in tort",w:["s 6(5) was repealed by NZBORA","The police had acted in bad faith","The warrant was not judicial process"],why:"Simpson v Attorney-General [1994] (not the 1955 Simpson)."},
{id:"5.3b",c:"5.3",q:"Which international obligation did Cooke P rely on in Baigent?",a:"ICCPR art 2(3): an effective remedy",w:["UNCROC art 3","Refugee Convention art 33","Chicago Convention Annex 13"],why:"Otherwise the Bill of Rights would be 'lip service'. Gault J dissented."},

{id:"5.4a",c:"5.4",q:"Noort; Curran: drivers required to take evidential breath or blood tests were…",a:"'detained', so entitled to consult a lawyer under s 23(1)(b)",w:["not detained, because they were free to refuse","detained, but s 23 was excluded by the testing scheme","arrested, so s 22 applied instead"],why:"Convictions quashed. Earlier statutes are read subject to NZBORA."},
{id:"5.4b",c:"5.4",q:"Which right is NOT in NZBORA s 23?",a:"Trial by jury",w:["To be told the reason for arrest","To consult a lawyer without delay","Habeas corpus"],why:"s 23 also: charged promptly, brought before a court, silence, humane treatment."},

// ---------- Suit 6: International and Imperial law ----------
{id:"6.1a",c:"6.1",q:"Hoani Te Heuheu Tukino (PC 1941): unincorporated Treaty rights are…",a:"unenforceable in court unless incorporated by statute",w:["enforceable as customary international law","binding on the Crown as a contract","enforceable through judicial review"],why:"The bottom rung: dualism."},
{id:"6.1b",c:"6.1",q:"Ashby v Minister of Immigration: Cooke J said obligations must be considered when they are…",a:"of 'overwhelming or manifest importance'",w:["ratified by Parliament","part of customary law","about children"],why:"Richardson J: clear legislation prevails."},
{id:"6.1c",c:"6.1",q:"Customary international law, unlike treaties, is…",a:"part of the common law unless a statute displaces it",w:["never part of NZ law","binding over statute","only for courts to consider"],why:"Treaties need incorporation; custom does not."},

{id:"6.2a",c:"6.2",q:"Constitution Act 1986 s 15(2) provides that…",a:"no later UK Act extends to New Zealand",w:["Parliament has full power to make laws","the Sovereign is head of state","Imperial Acts listed in Sch 1 continue"],why:"Sch 1 continuation is the Imperial Laws Application Act 1988."},
{id:"6.2b",c:"6.2",q:"Which article of the Bill of Rights 1688 underlies Constitution Act 1986 s 22?",a:"Art 4: no tax without Parliament",w:["Art 1: no suspending of laws","Art 9: freedom of speech in Parliament","Art 10: no excessive bail"],why:"Art 1 decided Fitzgerald; art 9 decided Prebble."},

{id:"6.3a",c:"6.3",q:"Air Line Pilots v Attorney-General: could Annex 13 limit the warrant power?",a:"No: it is not part of NZ law, and SPA 1957 s 198 was not limited",w:["Yes: the presumption of consistency applied","Yes: the issuing officer had to consider it","No: but only because it was a criminal case"],why:"A presumption cannot cut down a clear power. Contrast Sellers."},

{id:"6.4a",c:"6.4",q:"Tavita v Minister of Immigration: outcome?",a:"Not decided; appeal adjourned for the Minister to reconsider",w:["Removal order quashed","Held that UNCROC binds the Minister","Appeal dismissed"],why:"Cooke P: otherwise adherence would be partly 'window-dressing'."},
{id:"6.4b",c:"6.4",q:"Puli'uvea v Removal Review Authority added that…",a:"the treaties need not be named if the family's interests are considered in substance",w:["consideration is mandatory in every case","the UN Committee's views bind","children's interests outweigh all others"],why:"Whether consideration is mandatory was left open."},

{id:"6.5a",c:"6.5",q:"Sellers v Maritime Safety Inspector: why was the conviction quashed?",a:"Maritime Transport Act s 21 was read consistently with UNCLOS: the flag state governs on the high seas",w:["NZBORA s 18 protects freedom to leave","The Director had fettered his discretion","The yacht was not in NZ waters when stopped"],why:"Where the words allow, read them to fit international law."},

{id:"6.6a",c:"6.6",q:"Attorney-General v Zaoui: what did the Supreme Court hold?",a:"No deportation where there are substantial grounds to believe he faced torture or arbitrary death",w:["Security certificates are not reviewable","Refugee Convention art 33.2 overrides NZBORA","The Inspector-General decides all refugee issues"],why:"Immigration Act 1987 s 72 read with NZBORA ss 8–9."},

{id:"6.7a",c:"6.7",q:"Is the treaty-examination process (Cabinet Manual paras 5.78–5.82, 7.127–7.129) enforceable in court?",a:"No: it rests on convention and Standing Orders",w:["Yes, under the Cabinet Manual as delegated legislation","Yes, through NZBORA s 27","Only if the treaty affects Māori"],why:"Counter: the executive decides; the House cannot block ratification."},
{id:"6.7b",c:"6.7",q:"What goes to the House with a significant treaty before binding action?",a:"A national interest analysis",w:["A NZBORA s 7 report","A Waitangi Tribunal report","A Law Commission paper"],why:"Examined by select committee."},

// ---------- Suit 7: Treaty of Waitangi ----------
{id:"7.1a",c:"7.1",q:"Waitangi Tribunal findings are…",a:"recommendations, binding only for resumption of certain Crown and SOE land",w:["binding on the Crown","binding once the High Court approves them","advisory, with no binding power at all"],why:"Treaty of Waitangi (State Enterprises) Act 1988."},
{id:"7.1b",c:"7.1",q:"Which provision gives the Tribunal exclusive authority over the meaning of the two texts?",a:"Treaty of Waitangi Act 1975 s 5(2)",w:["Treaty of Waitangi Act 1975 s 6","State-Owned Enterprises Act 1986 s 9","Conservation Act 1987 s 4"],why:"s 6 is the claims jurisdiction."},
{id:"7.1c",c:"7.1",q:"When did historical claims close?",a:"1 September 2008",w:["6 February 1990","1 January 2000","10 April 2025"],why:"The 1985 Amendment Act had opened claims back to 6 February 1840."},

{id:"7.2a",c:"7.2",q:"Which provision was the legal hook in the Lands case (1987)?",a:"State-Owned Enterprises Act 1986 s 9",w:["Treaty of Waitangi Act 1975 s 6","Conservation Act 1987 s 4","Constitution Act 1986 s 15"],why:"Principles bind only through statute (Te Heuheu)."},
{id:"7.2b",c:"7.2",q:"Which is NOT a principle from the Lands case?",a:"An absolute duty to consult",w:["Partnership in utmost good faith","Active protection to the fullest extent reasonably practicable","Redress"],why:"Also responsibilities analogous to fiduciary duties."},
{id:"7.2c",c:"7.2",q:"Rank Treaty clauses from strongest to weakest.",a:"'not inconsistent with' > 'give effect to' > 'take into account'",w:["'give effect to' > 'not inconsistent with' > 'take into account'","'take into account' > 'give effect to' > 'not inconsistent with'","'not inconsistent with' > 'take into account' > 'give effect to'"],why:"'Take into account' is the 2026 ceiling: a mandatory relevant consideration."},

{id:"7.3a",c:"7.3",q:"Trans-Tasman Resources [2021] NZSC 127: how was tikanga treated under the EEZ Act 2012?",a:"As 'other applicable law' (s 59(2)(l)); tikanga-based interests as 'existing interests'",w:["As evidence only, with no legal weight","As overriding the statutory test","As irrelevant, since s 12 lists specific provisions"],why:"s 12 (Treaty clause) was read broadly."},
{id:"7.3b",c:"7.3",q:"Trans-Tasman: what happened to TTR's appeal?",a:"Dismissed unanimously",w:["Allowed; consent restored","Allowed in part; remitted","Dismissed 3–2"],why:"Majority read the Act as setting environmental bottom lines."},

{id:"7.4a",c:"7.4",q:"Ngāti Whātua Ōrākei [2018] NZSC 84: who would have reinstated the whole claim?",a:"Elias CJ",w:["Glazebrook J","William Young J","Palmer J"],why:"Majority: declarations of rights may proceed; the decision to legislate may not be challenged."},

{id:"7.5a",c:"7.5",q:"NWO [2022] NZHC 843 (Palmer J): what did the Treaty require of the Crown?",a:"To understand the relevant tikanga and allow reasonable time for tikanga processes",w:["To follow tikanga as binding law","To decide mana whenua itself","Nothing: overlapping claims are not justiciable"],why:"Tikanga does not of itself bind the Crown. Declarations declined, leave reserved."},
{id:"7.5b",c:"7.5",q:"Who did Palmer J say may also owe Treaty obligations?",a:"Iwi and hapū",w:["The Waitangi Tribunal","Local councils","The courts"],why:"An 11-week hearing; 35 pūkenga gave evidence."},

{id:"7.6a",c:"7.6",q:"Article 1: what word does te Tiriti use where the English text says 'sovereignty'?",a:"Kāwanatanga (governance)",w:["Tino rangatiratanga","Mana motuhake","Taonga"],why:"Art 2: tino rangatiratanga against 'possession'."},
{id:"7.6b",c:"7.6",q:"About how many chiefs signed the English text?",a:"About 39",w:["About 500","About 200","None"],why:"Most signed te Tiriti; contra proferentem favours te Tiriti."},

{id:"7.7a",c:"7.7",q:"When and how did the Treaty Principles Bill fail?",a:"Voted down at second reading on 10 April 2025",w:["Defeated at first reading in November 2024","Withdrawn at select committee","Passed, then repealed in 2026"],why:"Jul 25 UK Q1 asked what the debate shows about MMP and select committees."},
{id:"7.7b",c:"7.7",q:"The 2026 Treaty clause review changed 19 Acts. How?",a:"7 clauses repealed, 2 made more specific, 10 capped at 'take into account'",w:["All 19 repealed","19 changed to 'give effect to'","10 repealed, 9 made more specific"],why:"Cabinet decision 23 February; changes 15 May 2026. Wai 3565 found a breach of principles. Flagged: check before the exam."},

// ---------- Suit 8: Tikanga and customary rights ----------
{id:"8.1a",c:"8.1",q:"Te Weehi v Regional Fisheries Officer: what right survived?",a:"A customary, non-territorial right to take shellfish for personal use",w:["Exclusive ownership of the fishery","A commercial quota","A right to fish anywhere in New Zealand"],why:"Protected by Fisheries Act 1983 s 88(2). Conviction quashed."},
{id:"8.1b",c:"8.1",q:"When does a customary right end, on the card?",a:"Only when extinguished by clear and plain words",w:["When the Crown acquires sovereignty","When a statute regulates the area","After 1840"],why:"Requirements: grounded in tikanga before 1840, continued, reasonable, certain."},

{id:"8.2a",c:"8.2",q:"Attorney-General v Ngāti Apa overruled which case?",a:"In re the Ninety-Mile Beach (CA 1963)",w:["Te Heuheu (PC 1941)","Te Weehi (HC 1986)","Takamore (SC 2012)"],why:"Called it 'revolutionary doctrine'."},
{id:"8.2b",c:"8.2",q:"Why did customary property survive in Ngāti Apa?",a:"It survives sovereignty until lawfully extinguished; radical title is not beneficial ownership",w:["The Treaty is entrenched","The Māori Land Court has exclusive jurisdiction over all land","NZBORA protects property"],why:"Parliament then passed the Foreshore and Seabed Act 2004."},

{id:"8.3a",c:"8.3",q:"Takamore v Clarke: who decides where a person is buried?",a:"The executor, who must consider tikanga among the deceased's values",w:["The whānau, under tikanga","The court in every case","The person with the closest blood tie"],why:"Tikanga does not displace the common law rule."},
{id:"8.3b",c:"8.3",q:"Elias CJ's approach in Takamore?",a:"No fixed executor rule; the court decides disputes, with tikanga part of common law values",w:["Tikanga overrides the executor","The executor's decision is unreviewable","Tikanga is evidence only"],why:"Nov 21 Q2 named Takamore directly."},

{id:"8.4a",c:"8.4",q:"Ellis v R [2022] NZSC 114: what were all five judges agreed on?",a:"Tikanga has been and will continue to be recognised in developing the common law",w:["Colonial tests for custom no longer apply","Tikanga overrides statute","Ellis's convictions were quashed for tikanga reasons"],why:"The colonial-tests point was the majority only (Winkelmann CJ, Glazebrook, Williams JJ)."},
{id:"8.4b",c:"8.4",q:"Who said tikanga is part of the 'fabric' of New Zealand's law?",a:"Glazebrook J",w:["Winkelmann CJ","Williams J","Elias CJ"],why:"Through legislation, the common law and policy (Jul 25 NZ Q2)."},

{id:"8.5a",c:"8.5",q:"Smith v Fonterra [2024] NZSC 5 held…",a:"All three causes of action reinstated as not clearly untenable",w:["All three struck out","Only negligence could proceed","The new climate duty was recognised as law"],why:"Tikanga may inform the torts."},
{id:"8.5b",c:"8.5",q:"What did the Climate Change Response (Tort Liability) Amendment Act 2026 do?",a:"Inserted s 271 (no tort liability for emissions harm) and applied the bar to the Smith proceedings",w:["Codified the Smith climate duty","Required tikanga to be considered in all climate cases","Referred the case to the Waitangi Tribunal"],why:"Assent 24 August 2026. Flagged: verify the section numbers."},

{id:"8.6a",c:"8.6",q:"Takutai Moana Act 2011 s 58 (as enacted): customary marine title needs the group to…",a:"hold the area under tikanga and have used and occupied it exclusively since 1840 without substantial interruption",w:["show a Treaty settlement covers the area","prove continuous ownership in fee simple","show the area is not used by anyone else today"],why:"The 2025 Amendment Act (in force 25 October 2025) made it harder to prove."},

{id:"8.7a",c:"8.7",q:"Which is NOT one of the three routes for tikanga?",a:"International law",w:["Legislation","Common law","Policy"],why:"Glazebrook J's three routes structure any tikanga essay."},
{id:"8.7b",c:"8.7",q:"What is He Poutama?",a:"A 2023 Law Commission study paper: tikanga understood on its own terms",w:["A 2022 Supreme Court judgment","A District Court practice note","The 2026 Treaty clause review"],why:"Te Ao Mārama is the District Court policy example."},

// ---------- Suit 9: Crown, officers and courts ----------
{id:"9.1a",c:"9.1",q:"Letters Patent cl 16 gives the Governor-General…",a:"the right to be consulted, to encourage and to warn",w:["power to refuse assent at will","power to dismiss the Prime Minister on advice","power to summon Parliament without advice"],why:"Refusing assent is 'unthinkable' except in extraordinary circumstances."},
{id:"9.1b",c:"9.1",q:"Who is Administrator when no Governor-General is available?",a:"The Chief Justice",w:["The Prime Minister","The Speaker","The Attorney-General"],why:"Personal discretion only to appoint a PM and in a crisis."},

{id:"9.2a",c:"9.2",q:"How long may a non-MP serve as a minister?",a:"Up to 40 days",w:["Up to 90 days","Until the next election","Not at all"],why:"Constitution Act 1986 s 6."},
{id:"9.2b",c:"9.2",q:"Constitution Amendment Act 2026: a minister who loses their seat at an election may stay in office until…",a:"the close of the day after list candidates are declared elected",w:["the new Parliament first meets","the official results are declared","40 days after election day"],why:"In force 10 July 2026. Flagged: check sections."},

{id:"9.3a",c:"9.3",q:"Constitution Act 1986 s 22: except under an Act, the Crown may not…",a:"levy a tax, borrow money, or spend public money",w:["appoint ministers","sign treaties","make regulations"],why:"Bill of Rights 1688 art 4; Public Finance Act 1989 ss 4–5."},
{id:"9.3b",c:"9.3",q:"CIR v Medical Council: was the Council a 'public authority' for tax?",a:"No (unanimous); but charitable, by majority",w:["Yes (unanimous)","Yes, by majority","No, and not charitable either"],why:"Richardson P and Gault J dissented on charity."},
{id:"9.3c",c:"9.3",q:"Which is NOT a Public Service Act 2020 s 12 principle?",a:"Responsiveness to ministers' party interests",w:["Political neutrality","Free and frank advice","Merit appointment"],why:"Also open government and stewardship (Jul 24 NZ Q2)."},

{id:"9.4a",c:"9.4",q:"Why are Ombudsmen grounds wider than judicial review?",a:"Ombudsmen Act 1975 s 22 allows findings of 'unjust', 'oppressive' or simply 'wrong'",w:["Ombudsmen can quash decisions","They can award damages","They review Acts of Parliament"],why:"But they only recommend."},
{id:"9.4b",c:"9.4",q:"How is an Ombudsman removed?",a:"On an address of the House (s 6)",w:["By the Prime Minister","By the Chief Justice","At the end of each Parliament"],why:"Five-year term; retire at 72."},

{id:"9.5a",c:"9.5",q:"Official Information Act 1982: s 6 reasons differ from s 9 reasons because…",a:"s 6 reasons are conclusive; s 9 reasons can be outweighed by the public interest in release",w:["s 9 reasons are conclusive","s 6 applies only to Cabinet papers","s 9 applies only to personal information"],why:"s 9(2)(g)(i): free and frank opinions. 20 working days."},

{id:"9.6a",c:"9.6",q:"Under the Protected Disclosures Act 2022, must a discloser report internally first?",a:"No: they may go straight to an appropriate authority",w:["Yes, always","Yes, unless the employer has no policy","Only to the Ombudsman"],why:"s 25 lists appropriate authorities, including Ombudsmen."},
{id:"9.6b",c:"9.6",q:"Privacy Act 2020 IPP 6 is…",a:"access to your own information",w:["limits on disclosure","accuracy of information","storage and security"],why:"Personal information is outside the OIA route."},

{id:"9.7a",c:"9.7",q:"Legislation Act 2019 s 10(1): meaning is taken from…",a:"the text, in the light of purpose and context",w:["the text alone","Parliament's intention in Hansard","the purpose, even against the text"],why:"Replaced Interpretation Act 1999 s 5."},
{id:"9.7b",c:"9.7",q:"Does an Act bind the Crown?",a:"Only if it says so (Legislation Act 2019 s 22)",w:["Always","Never","Only for tax"],why:"Also on card 5.3."},

{id:"9.8a",c:"9.8",q:"Constitution Act 1986 ss 23–24 protect judges by…",a:"removal only on an address of the House for misbehaviour or incapacity, and salary that cannot be cut",w:["life tenure with no removal","appointment by Parliament","a ban on criticism of judges"],why:"Criticism is restrained by convention, not law."},

{id:"9.9a",c:"9.9",q:"Tangiora (PC): why is the UN Human Rights Committee not a 'judicial authority'?",a:"Its jurisdiction is consensual, its views do not bind, and it is not part of NZ's legal system",w:["It has no members who are judges","It sits outside New Zealand","It deals only with treaties"],why:"Contrast Cooke P in Tavita: 'a judicial body of high standing'."},

{id:"9.10a",c:"9.10",q:"Which is NOT an Officer of Parliament?",a:"Human Rights Commission",w:["Ombudsman","Controller and Auditor-General","Parliamentary Commissioner for the Environment"],why:"Criteria: checks the executive; a function the House could do; own statute; appointed on the House's recommendation."},

{id:"9.11a",c:"9.11",q:"Caretaker convention when the election result is unclear?",a:"Routine business only; defer significant decisions; consult",w:["No new policy, but act on the incoming government's wishes","Business as usual until Parliament meets","The Governor-General governs directly"],why:"The first wrong option is the rule when the result is clear."},
{id:"9.11b",c:"9.11",q:"Who does the Governor-General appoint as Prime Minister?",a:"Whoever commands the confidence of the House",w:["The leader of the largest party","The leader with the most electorate seats","Whoever the outgoing PM recommends"],why:"Under MMP, formation can take weeks (1996: about eight)."},

{id:"9.12a",c:"9.12",q:"Declaratory Judgments Act 1908 s 2 provides that…",a:"a proceeding is not open to objection because only a declaration is sought",w:["declarations are not binding","only the Supreme Court may declare rights","declarations need leave"],why:"s 4: a declaration binds as a judgment."},
{id:"9.12b",c:"9.12",q:"When did Privy Council appeals end?",a:"For decisions after 2003",w:["1986","1990","2016"],why:"Supreme Court, Court of Appeal, High Court under the Senior Courts Act 2016."}
];

// Scenarios: new fact patterns (none is on a card). Pick the card that governs.
// a: the right card. w: three cards a student might confuse it with.
window.SCENARIOS = [
{id:"s01",a:"2.2",w:["2.5","2.6","9.3"],t:"The day after an election, the new Minister of Finance announces that a statutory levy 'will no longer be collected from today'. No amending Bill has been introduced."},
{id:"s02",a:"2.3",w:["2.4","5.1","4.6"],t:"Council inspectors walk up to a farmhouse to talk about a shed. The owner tells them to leave. They stay to inspect the shed, relying on a general duty to enforce bylaws."},
{id:"s03",a:"2.4",w:["2.3","5.1","5.2"],t:"A search warrant describes the offence loosely and lists a wide class of items. The suspect plainly knew what the investigation was about. He says the warrant is a nullity."},
{id:"s04",a:"2.5",w:["2.2","2.6","4.8"],t:"During an outbreak, the Government's website says everyone 'must' stay home. The only legal order in force restricts gatherings, not staying home."},
{id:"s05",a:"2.6",w:["3.4","2.5","3.2"],t:"A regulation allows exemptions in 'any exceptional circumstances'. The official refuses an application by applying an internal guideline that lists only three situations."},
{id:"s06",a:"4.2",w:["4.1","4.5","5.2"],t:"A new Act says anyone holding over 5 kg of a controlled plant is presumed to hold it for sale 'until the contrary is proved'."},
{id:"s07",a:"4.3",w:["1.8","4.6","4.8"],t:"A health agency pays carers of disabled adults, but refuses payment where the carer is the disabled person's own parent."},
{id:"s08",a:"4.4",w:["4.1","4.6","4.8"],t:"A prison bans a prisoner from wearing a particular hat. He says it limits his freedom of expression, though he wears it only to keep warm."},
{id:"s09",a:"4.5",w:["4.2","8.5","2.2"],t:"Parliament raises the minimum non-parole period for a crime. The Act says the new period applies to offences committed before it came into force."},
{id:"s10",a:"4.6",w:["3.3","4.4","5.3"],t:"A private radio station refuses to broadcast a candidate's advertisement. The candidate wants to argue the Bill of Rights applies to the station."},
{id:"s11",a:"5.2",w:["5.1","2.4","5.4"],t:"Police unlawfully search a parked car and find a stolen laptop. At trial, the judge must decide whether the laptop can be used as evidence."},
{id:"s12",a:"5.3",w:["3.5","4.6","5.1"],t:"Police execute a warrant at the wrong address and carry on after being told. The owner wants money from the Crown, but a tort claim is barred."},
{id:"s13",a:"5.4",w:["5.1","5.2","4.6"],t:"A driver is taken to a police station for a compulsory blood test and asks to phone a lawyer. The officer refuses."},
{id:"s14",a:"6.6",w:["6.4","3.2","6.1"],t:"Officials certify a refugee as a security risk and plan to deport him to a country where he may be tortured."},
{id:"s15",a:"6.4",w:["6.1","6.6","9.9"],t:"An overstayer with a New Zealand-born child faces removal. The decision letter does not mention the child at all."},
{id:"s16",a:"6.5",w:["6.3","6.1","4.1"],t:"A maritime officer applies a New Zealand safety rule to a foreign-flagged yacht for a voyage on the high seas."},
{id:"s17",a:"6.3",w:["6.5","6.1","6.7"],t:"An aviation treaty says crash recorders may be used only for safety investigation. Police seek a warrant to seize a recorder under a clear statutory power."},
{id:"s18",a:"8.1",w:["8.2","8.6","8.3"],t:"A hapū member takes undersized kina for a hui and is charged. The fisheries Act says nothing in it affects Māori fishing rights."},
{id:"s19",a:"8.3",w:["8.4","7.5","8.7"],t:"A man's executor wants him buried in the city where he lived. His whānau want him buried at the marae urupā."},
{id:"s20",a:"8.6",w:["8.2","8.1","7.1"],t:"An iwi applies under statute for title to part of a harbour's coastal marine area."},
{id:"s21",a:"7.4",w:["7.5","1.5","7.1"],t:"Two iwi have overlapping interests. The Crown plans to offer land to one in a settlement Bill. The other asks a court to declare its rights before the Bill is introduced."},
{id:"s22",a:"7.3",w:["7.2","8.4","7.7"],t:"An Act requires a consent authority to take Treaty principles into account. The authority treats iwi evidence about tikanga as irrelevant to its statutory test."},
{id:"s23",a:"1.12",w:["1.2","1.9","9.2"],t:"A list MP resigns from her party but says she will stay in Parliament as an independent."},
{id:"s24",a:"1.2",w:["1.3","1.11","9.11"],t:"The Government wants to extend the term of Parliament to four years with a simple majority vote."},
{id:"s25",a:"1.5",w:["1.4","1.6","3.6"],t:"A company asks the High Court to stop the Clerk presenting a Bill for royal assent because the Bill will take its property unfairly."},
{id:"s26",a:"1.4",w:["1.5","9.8","2.8"],t:"In a defamation case, the defendant wants to prove that an MP lied in a speech in the House."},
{id:"s27",a:"9.8",w:["2.8","1.10","1.4"],t:"A Minister calls a District Court judge 'biased' in a media interview and says the judge should step down."},
{id:"s28",a:"9.5",w:["9.6","9.4","6.7"],t:"A journalist requests advice given to Cabinet. The agency refuses, saying release would inhibit free and frank opinions."},
{id:"s29",a:"9.4",w:["3.7","9.5","3.1"],t:"A citizen says a ministry's lawful decision was simply unjust. She cannot afford court proceedings."},
{id:"s30",a:"9.3",w:["2.2","1.9","9.1"],t:"A Minister starts paying grants under a new scheme before Parliament has passed any appropriation."},
{id:"s31",a:"9.11",w:["1.10","9.1","9.2"],t:"The election result is unclear. While coalition talks go on, the outgoing government wants to sign a major 20-year contract."},
{id:"s32",a:"1.6",w:["4.1","1.8","4.2"],t:"The Supreme Court finds an Act imposes an unjustified limit on a right and cannot be read consistently. The claimant asks what the court can still do."},
{id:"s33",a:"3.4",w:["3.3","3.1","2.6"],t:"A public agency plans to publish a league table of hospitals using data supplied for a different purpose, giving the hospitals no notice."},
{id:"s34",a:"3.3",w:["3.4","3.6","4.6"],t:"A health board awards a services contract to a company linked to a former board member. The losing bidder wants review."},
{id:"s35",a:"3.2",w:["3.1","3.6","6.6"],t:"A court has accepted a Minister's resource-allocation decision is reviewable. Now it must decide how closely to scrutinise it."},
{id:"s36",a:"8.5",w:["2.2","4.5","8.4"],t:"Parliament passes an Act that bars all tort claims for a type of harm and applies it to a case already before the courts."},
{id:"s37",a:"4.7",w:["1.6","1.2","4.2"],t:"The Attorney-General reports that a Bill restricting voting is inconsistent with NZBORA. Parliament passes it anyway."},
{id:"s38",a:"9.10",w:["9.4","9.3","9.12"],t:"Parliament creates a new Commissioner, appointed on the House's recommendation and funded through Parliament, to check government spending."},
{id:"s39",a:"1.3",w:["1.2","1.5","9.1"],t:"Writs for a general election are issued two days late. A voter argues every Act passed by the new Parliament is invalid."},
{id:"s40",a:"1.10",w:["1.7","9.1","6.7"],t:"A Prime Minister plans to ignore a long-standing practice that Cabinet ministers publicly support Cabinet decisions. Is the practice binding, and on whom?"},
{id:"s41",a:"9.9",w:["6.4","6.1","9.12"],t:"A claimant seeks legal aid to take a complaint to a UN treaty committee, arguing it is a 'judicial authority'."},
{id:"s42",a:"7.2",w:["7.3","7.1","6.1"],t:"An Act lets the Crown transfer land to a company, but says nothing in the Act permits the Crown to act inconsistently with Treaty principles. Iwi have unresolved claims to the land."}
];

// Cite audit: words that show a card's authority was used in an essay. Case-insensitive.
window.CITE_KEYS = {
"1.1":["s 15","Westco","sovereign","supremacy"],"1.2":["s 268","entrench","reserved"],"1.3":["Simpson","directory"],
"1.4":["Prebble","art 9","Parliament Act 2025","privilege"],"1.5":["Westco","manner and form","Pickin"],
"1.6":["Taylor","declaration","7A","7B"],"1.7":["Imperial Laws","Cabinet Manual","sources"],"1.8":["Make It 16","s 19"],
"1.9":["select committee","urgency","third reading"],"1.10":["Jennings","convention"],"1.11":["White Paper","written constitution","Palmer"],
"1.12":["55A","party-hopping","waka"],"2.1":["rule of law","Regulatory Standards","Bingham"],"2.2":["Fitzgerald","Muldoon","art 1"],
"2.3":["Payn","Entick"],"2.4":["Dotcom"],"2.5":["Borrowdale","prescribed by law"],"2.6":["Christiansen","fetter"],
"2.7":["separation of powers","rule of law","sovereign"],"2.8":["separation of powers","comity","collaborative enterprise","Aitken"],
"3.1":["GCHQ","illegality","irrational","procedural impropriety","Wednesbury"],"3.2":["deference","intensity"],"3.3":["Lab Tests"],
"3.4":["Tertiary Education Commission","TEC","legitimate expectation"],"3.5":["s 16","s 15","relief","remed"],"3.6":["justiciab","Milroy","Roskill"],
"3.7":["amenab","Judicial Review Procedure Act"],"4.1":["s 6","Moonen","Brooker","Hopkinson"],"4.2":["Hansen","Oakes","s 5"],
"4.3":["Atkinson","family status","Human Rights Review Tribunal"],"4.4":["Smith","wig"],"4.5":["Pora","retrospectiv","legality"],
"4.6":["s 3","Ransfield","public function"],"4.7":["prisoner","Electoral Amendment Act 2025","s 7 report"],"4.8":["Grounded Kiwis","minimal impairment"],
"5.1":["Jefferies","s 21"],"5.2":["Shaheed","s 30","Evidence Act"],"5.3":["Baigent","compensation"],"5.4":["Noort","s 23","detain"],
"6.1":["Te Heuheu","Ashby","dualis"],"6.2":["Imperial Laws","Magna Carta","Bill of Rights 1688"],"6.3":["Air Line Pilots","Pilots"],
"6.4":["Tavita","Puli"],"6.5":["Sellers","UNCLOS"],"6.6":["Zaoui"],"6.7":["national interest analysis","treaty examination"],
"7.1":["Waitangi Tribunal","s 6","s 5(2)"],"7.2":["Maori Council","Lands case","s 9","partnership"],"7.3":["Trans-Tasman"],
"7.4":["Ngāti Whātua","Ngati Whatua","NWO"],"7.5":["Palmer J","pūkenga","pukenga","overlapping"],"7.6":["kāwanatanga","kawanatanga","rangatiratanga","te Tiriti"],
"7.7":["Treaty Principles Bill","take into account","Wai 3565"],"8.1":["Te Weehi","customary fishing"],"8.2":["Ngāti Apa","Ngati Apa","Ninety-Mile"],
"8.3":["Takamore"],"8.4":["Ellis","fabric"],"8.5":["Smith v Fonterra","Fonterra","Climate Change Response"],"8.6":["Takutai Moana","customary marine title","s 58"],
"8.7":["He Poutama","Te Ao Mārama","Te Ao Marama"],"9.1":["Governor-General","Letters Patent"],"9.2":["s 6","minister"],
"9.3":["s 22","Public Finance Act","Public Service Act","neutral"],"9.4":["Ombudsm"],"9.5":["Official Information Act","OIA"],
"9.6":["Protected Disclosures","Privacy Act","whistle"],"9.7":["Legislation Act","s 10"],"9.8":["s 23","s 24","judicial independence","tenure"],
"9.9":["Tangiora"],"9.10":["Officer of Parliament","Officers of Parliament","Auditor-General"],"9.11":["caretaker","confidence of the House"],
"9.12":["Declaratory Judgments","Senior Courts Act"]
};
