---
layout: base
title:  'Statistics of det:nummod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

183 nodes (0%) are attached to their parents as `det:nummod`.

181 instances of `det:nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17486338797814.

The following 4 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (178; 97% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:nummod	color:blue
1	Sprawa	sprawa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	rozsypała	rozsypać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	po	po	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
5	paru	parę	DET	num:pl:loc:m3:congr	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	6	det:nummod	6:det:nummod	_
6	miesiącach	miesiąc	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	2	obl	2:obl	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:nummod	color:blue
1	Zarówno	zarówno	CCONJ	conj	_	4	cc:preconj	4:cc:preconj	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
3	tej	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	4	det	4:det	_
4	branży	branża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	12	obl	12:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
6	jak	jak	CCONJ	conj	_	10	cc	10:cc	_
7	i	i	CCONJ	conj	_	6	fixed	6:fixed	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
9	kilku	kilka	DET	num:pl:loc:f:congr	Case=Loc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	10	det:nummod	10:det:nummod	_
10	innych	inny	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	4	conj	4:conj|12:obl	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
12	następuje	następować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	szybka	szybki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
14	konsolidacja	konsolidacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	12:nsubj	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 det:nummod	color:blue
1	Pensja	pensja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	6:nsubj:pass	_
2	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
3	by	by	AUX	part	_	6	aux:cnd	6:aux:cnd	_
4	jednak	jednak	CCONJ	conj	_	6	cc	6:cc	_
5	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	6	advmod	6:advmod	_
6	skonstruowana	skonstruować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
8	by	by	SCONJ	comp	_	11	mark	11:mark	_
9	lekarze	lekarz	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	_
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	_
11	przyjmowali	przyjmować	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	_
12	ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	11	obj	11:obj	_
13	zbyt	zbyt	ADV	adv	_	12	advmod	12:advmod	_
14	dużo	dużo	DET	num:pl:gen:m1:congr	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	12	det:nummod	12:det:nummod	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


