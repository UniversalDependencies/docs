---
layout: base
title:  'Statistics of advmod in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="cs_poetry-dep-advmod-emph.html">advmod:emph</a></tt>.

328 nodes (5%) are attached to their parents as `advmod`.

249 instances of `advmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6280487804878.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (267; 81% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (31; 9% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (13; 4% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 advmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Nesmírnou	nesmírný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	touhou	touha	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	4	obl:agent	_	_
3	kpředu	kpředu	ADV	Db-------------	_	4	advmod	_	_
4	štván	štvaný	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	svědomím	svědomí	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing	8	obl:agent	_	_
7	stále	stále	ADV	Db-------------	_	8	advmod	_	_
8	bičován	bičovaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Nuž	nuž	PART	TT-------------	_	4	advmod:emph	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	4	punct	_	_
3	chutě	chuť	ADV	NNFP4-----A----	Degree=Pos|Polarity=Pos	4	advmod	_	_
4	dál	dále	ADV	Db-------------	_	0	root	_	SpaceAfter=No
5	!	!	PUNCT	Z:-------------	_	4	punct	_	_

~~~


