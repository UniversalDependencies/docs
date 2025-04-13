---
layout: base
title:  'Statistics of nsubj in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="cs_poetry-dep-nsubj-pass.html">nsubj:pass</a></tt>.

389 nodes (6%) are attached to their parents as `nsubj`.

267 instances of `nsubj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74035989717224.

The following 23 pairs of parts of speech are connected with `nsubj`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (226; 58% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (61; 16% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (23; 6% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (19; 5% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nsubj	color:blue
1	Zde	zde	ADV	Db-------------	PronType=Dem	10	advmod	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	_
3	píli	píle	NOUN	pred	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	snaze	snaha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	3	conj	_	_
6	neúmorné	úmorný	ADJ	AAFS6----1N----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg	5	amod	_	_
7	Tvá	tvůj	DET	VB-S---3P-AA---	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	11	obj	_	_
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
9	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	obl	_	_
10	stojí	stát	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	stráž	stráž	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
12	!	!	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj	color:blue
1	Den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
2	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	_	_
3	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	nmod	_	_
4	jde	jít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	drak	drak	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
7	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	_	_
8	drakem	drak	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
11	všechny	všechen	DET	PLYP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	12	obj	_	_
12	přemoh	přemoci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	_	_
13	zázrakem	zázrak	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Vše	všechen	DET	PLNS1---------1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	2	nsubj	_	_
2	zklamalo	zklamat	VERB	VpNS---XR-AA---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


