---
layout: base
title:  'Statistics of cop in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `cop`

This relation is universal.

331 nodes (2%) are attached to their parents as `cop`.

286 instances of `cop` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25075528700906.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (149; 45% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (138; 42% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (18; 5% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (9; 3% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 cop	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	_	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	_	_
3	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	_	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	_	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	–	-	PUNCT	Z:-------------	_	14	punct	_	_
10	no	no	PART	TT-------------	_	14	discourse	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	_	_
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	_	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	_	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	Občas	občas	ADV	Db-------------	_	6	advmod	_	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	jako	jako	SCONJ	J,-------------	_	6	mark	_	LId=jako-1
5	nadpřirozená	nadpřirozený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	schopnost	schopnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No|LDeriv=schopný
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Nové	nový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	směrnice	směrnice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=pro-1
4	železo	železo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	znamenají	znamenat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	že	že	SCONJ	J,-------------	_	9	mark	_	LId=že-1
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	třeba	třeba	ADV	Db-------------	_	5	ccomp	_	LId=třeba-2
10	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	11	det:numgov	_	LId=hodně-2
11	dárců	dárce	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


