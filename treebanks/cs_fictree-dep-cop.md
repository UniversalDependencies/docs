---
layout: base
title:  'Statistics of cop in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `cop`

This relation is universal.

2208 nodes (1%) are attached to their parents as `cop`.

2036 instances of `cop` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0276268115942.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (1201; 54% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (776; 35% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (76; 3% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (73; 3% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (35; 2% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (25; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (18; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	"	"	PUNCT	Z:-------------	_	9	punct	_	_
2	Že	že	SCONJ	J,-------------	_	4	mark	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	pravdivý	pravdivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	ccomp	_	_
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	vám	ty	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	11	iobj	_	_
7	ale	ale	CCONJ	J^-------------	_	9	cc	_	_
8	budu	být	AUX	VB-S---1F-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	_	_
9	moci	moci	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	_	_
10	snadno	snadno	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	_
11	dokázat	dokázat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
12	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	_
2	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	6	obl	_	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	byla	být	AUX	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
5	obyčejná	obyčejný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	cesta	cesta	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
7	za	za	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
8	špatného	špatný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	_	_
9	počasí	počasí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	_	_
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	Víte	vědět	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
2	,	,	PUNCT	Z:-------------	_	1	punct	_	_
3	ztratit	ztratit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	csubj	_	_
4	naději	naděje	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	asi	asi	PART	TT-------------	_	7	advmod	_	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
8	nejstrašnější	strašný	ADJ	AANS1----3A----	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	_
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	12	nsubj	_	_
11	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pv	_	_
12	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
13	stát	stát	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	xcomp	_	_
14	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


