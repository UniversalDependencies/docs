---
layout: base
title:  'Statistics of parataxis in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `parataxis`

This relation is universal.

119 nodes (0%) are attached to their parents as `parataxis`.

84 instances of `parataxis` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.40336134453782.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (83; 70% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	Ale	ale	CCONJ	J^-------------	_	5	cc	_	_
2	přece	přece	PART	TT-------------	_	5	advmod	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
4	ní	on	PRON	P5FS6--3-------	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	5	obl	_	_
5	bylo	být	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	něco	něco	PRON	PZ--1----------	Case=Nom|PronType=Ind	5	nsubj	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	_
8	postav	postava	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	_
9	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	11	case	_	_
10	starých	starý	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	11	amod	_	_
11	bájí	báje	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	8	nmod	_	_
12	,	,	PUNCT	Z:-------------	_	13	punct	_	_
13	řekla	říci	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	parataxis	_	_
14	bych	být	AUX	Vc-S---1-------	Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	13	aux	_	_
15	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Plod	plod	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
2	:	:	PUNCT	Z:-------------	_	3	punct	_	_
3	souplodí	souplodí	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	1	appos	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	_
5	sbírá	sbírat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
7	jednou	jednou	ADV	Cv-------------	NumType=Mult	5	obl	_	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	_
9	měsíc	měsíc	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	_
10	,	,	PUNCT	Z:-------------	_	12	punct	_	_
11	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	_
12	června	červen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
13	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	_	_
14	září	září	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	_
15	)	)	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	Lidstvo	lidstvo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	2	nsubj	_	_
2	nezahyne	zahynout	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	nějakou	nějaký	DET	PZFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	kometou	kometa	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	2	obl	_	_
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
7	tom	ten	DET	PDNS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	9	obj	_	_
8	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	přesvědčen	přesvědčený	ADJ	VsMS------AP---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	2	parataxis	_	_
10	,	,	PUNCT	Z:-------------	_	11	punct	_	_
11	zahyne	zahynout	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
12	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	15	case	_	_
13	svoji	svůj	DET	P8FS4----------	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	15	det	_	_
14	vlastní	vlastní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	15	amod	_	_
15	bezcitnost	bezcitnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	11	obl	_	_
16	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


