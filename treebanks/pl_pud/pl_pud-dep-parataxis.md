---
layout: base
title:  'Statistics of parataxis in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="pl_pud-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pl_pud-dep-parataxis-obj.html">parataxis:obj</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.25.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Mają	mieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jedną	jeden	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	szansę	szansa	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	iobj	1:iobj	_
4	na	na	ADP	prep:acc	AdpType=Prep	5	case	5:case	Case=Acc
5	odkupienie	odkupienie	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	SpaceAfter=No
6	:	:	PUNCT	interp	PunctType=Colo	3	punct	3:punct	_
7	pokonać	pokonać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	parataxis	3:parataxis	_
8	Anglię	Anglia	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	Ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	nmod	3:nmod	_
2	pierwszym	pierwszy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	królem	król	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
4	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	Mojmir	Mojmir	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
6	I	I	X	romandig	NumForm=Roman	5	flat	5:flat	_
7	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	8	punct	8:punct	SpaceAfter=No
8	rządził	rządzić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	latach	rok	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	obl	8:obl	_
11	830	830	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Ord	10	amod	10:amod	SpaceAfter=No
12	–	–	PUNCT	interp	PunctType=Dash	13	punct	13:punct	SpaceAfter=No
13	846	846	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Ord	11	conj	10:amod|11:conj	SpaceAfter=No
14	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	8	punct	8:punct	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


