---
layout: base
title:  'Statistics of cc:preconj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-cc.html">cc</a></tt>.

278 nodes (0%) are attached to their parents as `cc:preconj`.

278 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01798561151079.

The following 15 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (137; 49% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (42; 15% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (30; 11% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (23; 8% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (15; 5% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (12; 4% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (9; 3% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc:preconj	color:blue
1	Tym	ten	DET	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	razem	raz	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl	4:obl	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	nsubj	4:nsubj	_
6	ani	ani	CCONJ	conj	_	8	cc:preconj	8:cc:preconj	_
7	przy	przy	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
8	stoliku	stolik	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
10	ani	ani	CCONJ	conj	_	12	cc	12:cc	_
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc
12	kolejce	kolejka	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	conj	4:obl|8:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc:preconj	color:blue
1	Ani	ani	CCONJ	conj	_	5	cc:preconj	5:cc:preconj	_
2	my	my	PRON	ppron12:pl:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
3	ciebie	ty	PRON	ppron12:sg:gen:m1:sec:akc	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Variant=Long	5	obj	5:obj	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	pobudzamy	pobudzać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	ani	ani	CCONJ	conj	_	11	cc	11:cc	_
8	ty	ty	PRON	ppron12:sg:nom:m1:sec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	11	expl:pv	11:expl:pv	_
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	_
11	dzielisz	dzielić	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	0:root|5:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc:preconj	color:blue
1	Wiadomo	wiadomo	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
3	że	że	SCONJ	comp	_	9	mark	9:mark	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
5	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	6	det	6:det	_
6	roku	rok	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl	_
7	uczniowie	uczeń	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	_
8	będą	być	AUX	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	aux	9:aux	_
9	zdawać	zdawać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	1	ccomp	1:ccomp	_
10	albo	albo	CCONJ	conj	_	11	cc:preconj	11:cc:preconj	_
11	starą	stary	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	amod	15:amod	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
13	albo	albo	CCONJ	conj	_	14	cc	14:cc	_
14	nową	nowy	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	11	conj	11:conj|15:amod	_
15	maturę	matura	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	9	obj	9:obj	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


