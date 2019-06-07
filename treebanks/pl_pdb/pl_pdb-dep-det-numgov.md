---
layout: base
title:  'Statistics of det:numgov in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

607 nodes (0%) are attached to their parents as `det:numgov`.

576 instances of `det:numgov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39703459637562.

The following 6 pairs of parts of speech are connected with `det:numgov`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (569; 94% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (17; 3% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Kilka	kilka	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	2	det:numgov	2:det:numgov	_
2	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	spaceruje	spacerować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	po	po	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
5	podmokłym	podmokły	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
6	terenie	teren	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	_
7	na	na	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
8	plaży	plaża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 det:numgov	color:blue
1	Dzisiaj	dzisiaj	ADV	adv	_	3	advmod	3:advmod	_
2	zapewne	zapewne	PART	part	_	3	parataxis:insert	3:parataxis:insert	_
3	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ich	on	PRON	ppron3:pl:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	nsubj	3:nsubj	_
5	więcej	więcej	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	4	det:numgov	4:det:numgov	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 det:numgov	color:blue
1	Jednakże	jednakże	PART	part	_	2	advmod	2:advmod	_
2	wydaje	wydawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
5	że	że	SCONJ	comp	_	12	mark	12:mark	_
6	"	"	PUNCT	interp	PunctType=Quot	7	punct	7:punct	SpaceAfter=No
7	wsparcie	wsparcie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	12:nsubj	SpaceAfter=No
8	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	7	punct	7:punct	_
9	udzielane	udzielać	ADJ	ppas:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
10	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Acc
11	UE	UE	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	9	obl:agent	9:obl:agent	_
12	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	_
13	niewiele	niewiele	DET	num:pl:acc:n:rec	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Ind	14	det:numgov	14:det:numgov	_
14	wspólnego	wspólny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	12	iobj	12:iobj	_
15	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Ins
16	solidarnością	solidarność	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	14	obl:arg	14:obl:arg	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


