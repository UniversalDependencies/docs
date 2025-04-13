---
layout: base
title:  'Statistics of acl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ga_cadhan-dep-acl-relcl.html">acl:relcl</a></tt>.

16 nodes (0%) are attached to their parents as `acl`.

16 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.625.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 63% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (5; 31% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Gach	gach	DET	_	Definite=Def	3	det	_	_
2	uile	uile	DET	_	PronType=Ind	3	det	_	_
3	dhuine	duine	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
4	ag	ag	ADP	_	_	5	case	_	_
5	cur	cur	NOUN	_	VerbForm=Vnoun	3	acl	_	_
6	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	7	nmod:poss	_	_
7	ladair	ladar	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obj	_	_
8	fhéin	féin	PRON	_	Form=Len|Reflex=Yes	7	nmod	_	_
9	isteach	isteach	ADV	_	_	5	advmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	Cradh	crá	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	liom	le	ADP	_	_	1	obl:prep	_	_
3	do	do	DET	_	Number=Sing|Person=2|Poss=Yes	4	nmod:poss	_	_
4	geimhliughadh	geimhliú	NOUN	_	Definite=Def|VerbForm=Inf	1	nsubj	_	_
5	daor	daor	ADJ	_	Degree=Pos	4	amod	_	_
6	's	agus	CCONJ	_	_	8	cc	_	_
7	gan	gan	ADP	_	_	8	case	_	_
8	tadhall	tadhall	NOUN	_	VerbForm=Inf	1	conj	_	_
9	duit	do	ADP	_	Number=Sing|Person=2	8	obl:prep	_	_
10	ar	ar	ADP	_	_	11	case	_	_
11	mhiothaom	míthaom	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	8	obl	_	_
12	acht	ach	ADP	_	_	13	case	_	_
13	fíorfhuath	fuath	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	obl	_	_
14	mur	mar	SCONJ	_	_	15	mark	_	_
15	ta	bí	VERB	_	Mood=Ind|Tense=Pres	13	acl	_	_
16	re	le	ADP	_	_	17	case	_	_
17	treall	treall	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	_
18	eachtrann	eachtrannach	NOUN	_	Case=Gen|Gender=Masc|NounType=Weak|Number=Plur	17	nmod	_	_
19	ar	ar	ADP	_	_	20	case	_	_
20	uaislibh	uasal	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	17	nmod	_	_
21	Eireann	Éire	PROPN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 acl	color:blue
1	Tuig	tuig	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	a	a	PART	_	PartType=Voc	4	case:voc	_	_
4	léaghthóir	léitheoir	NOUN	_	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	go	go	PART	_	PartType=Cmpl	7	mark:prt	_	_
7	rabhadar	bí	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	1	ccomp	_	_
8	trí	trí	NUM	_	NumType=Card	9	nummod	_	_
9	heasbadha	easpa	NOUN	_	Case=Nom|Form=HPref|Gender=Fem|Number=Sing	7	nsubj	_	_
10	ar	ar	ADP	_	_	11	case	_	_
11	Stanihurst	Stanihurst	PROPN	_	Definite=Def|Foreign=Yes|Gender=Masc|Number=Sing	7	xcomp:pred	_	_
12	re	le	ADP	_	_	13	case	_	_
13	scríobhadh	scríobh	NOUN	_	VerbForm=Inf	9	acl	_	_
14	stáire	stair	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	13	obj	_	_
15	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	hÉireann	Éire	PROPN	_	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	14	nmod	_	_
17	as	as	ADP	_	_	19	case	_	_
18	ná'r	is	AUX	_	Polarity=Neg|Tense=Past|VerbForm=Cop	19	cop	_	_
19	chóir	cóir	ADJ	_	Degree=Pos|Form=Len	9	acl	_	_
20	cion	cion	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	23	obj	_	_
21	stáraidhe	staraí	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
22	do	a	PART	_	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	_	Form=Len|VerbForm=Inf	19	csubj:cop	_	_
24	air	ar	ADP	_	Gender=Masc|Number=Sing|Person=3	23	obl:prep	_	SpaceAfter=No
25	.	.	PUNCT	_	_	1	punct	_	_

~~~


