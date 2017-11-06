---
layout: base
title:  'Statistics of discourse in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `discourse`

This relation is universal.

301 nodes (0%) are attached to their parents as `discourse`.

258 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39867109634551.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (137; 46% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (114; 38% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (19; 6% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Tak	tak	PART	TT-------------	_	3	discourse	_	_
2	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	obj	_	_
3	dali	dát	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	_
5	lázní	lázně	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	3	obl	_	_
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	_
8	hotelu	hotel	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	appos	_	_
9	,	,	PUNCT	Z:-------------	_	10	punct	_	_
10	pracovala	pracovat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
11	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	_	_
13	servírka	servírka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	xcomp	_	_
14	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 discourse	color:blue
1	A	a	CCONJ	J^-------------	_	2	cc	_	_
2	odešla	odejít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	_
5	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	_	_
6	velikou	veliký	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	_
7	nadějí	naděje	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	2	obl	_	_
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	_
10	nesu	nést	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
11	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	10	discourse	_	_
12	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	_	_
14	sobě	se	PRON	P6--6----------	Case=Loc|PronType=Prs|Reflex=Yes	10	obl	_	_
15	už	už	PART	TT-------------	_	16	advmod:emph	_	_
16	stále	stále	ADV	Db-------------	_	10	advmod	_	_
17	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	_	_
3	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	iobj	_	_
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	discourse	_	_
5	udělalo	udělat	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	podívat	podívat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	csubj	_	_
8	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	_
10	obrázek	obrázek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl:arg	_	_
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


