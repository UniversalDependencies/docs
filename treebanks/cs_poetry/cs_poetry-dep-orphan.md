---
layout: base
title:  'Statistics of orphan in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `orphan`

This relation is universal.

25 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.04.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (8; 32% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (6; 24% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (3; 12% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 orphan	color:blue
1	Ať	ať	PART	TT-------------	_	3	mark	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	_
3	jitru	jitro	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	10	orphan	_	_
4	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	conj	_	_
5	lásky	láska	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	ať	ať	PART	TT-------------	_	10	mark	_	_
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
9	hrobech	hrob	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	_
10	kvet’	kvést	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	13	punct	_	_
12	když	když	SCONJ	J,-------------	_	13	mark	_	_
13	zvad’	zvadnout	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	16	punct	_	_
15	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	16	nsubj	_	_
16	neuměl	umět	VERB	VpYS---XR-NA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
17	naň	naň	PRON	TT-------------	_	18	obj	_	_
18	zapomnět’	zapomenout	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	16	xcomp	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 orphan	color:blue
1	Meč	meč	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
2	samý	samý	DET	PLYS1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	zub	zub	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	tvář	tvář	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	conj	_	_
6	zjizvena	zjizvený	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	_	_
8	kde	kde	ADV	Db-------------	PronType=Int	5	conj	_	_
9	chlup	chlup	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	orphan	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	9	punct	_	_
11	tam	tam	ADV	Db-------------	PronType=Dem	5	orphan	_	_
12	chlup	chlup	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	orphan	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 orphan	color:blue
1	Meč	meč	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
2	samý	samý	DET	PLYS1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	zub	zub	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	tvář	tvář	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	conj	_	_
6	zjizvena	zjizvený	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	_	_
8	kde	kde	ADV	Db-------------	PronType=Int	5	conj	_	_
9	chlup	chlup	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	orphan	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	9	punct	_	_
11	tam	tam	ADV	Db-------------	PronType=Dem	5	orphan	_	_
12	chlup	chlup	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	orphan	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


