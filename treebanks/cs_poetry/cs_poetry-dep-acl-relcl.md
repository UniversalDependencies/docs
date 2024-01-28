---
layout: base
title:  'Statistics of acl:relcl in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-acl.html">acl</a></tt>.

77 nodes (1%) are attached to their parents as `acl:relcl`.

75 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.58441558441558.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (59; 77% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	Vyloupena	vyloupený	ADJ	VsQW---XX-AP---	Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	svatyně	svatyně	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	7	punct	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	7	obl	_	_
6	bůže	bůže	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	7	nsubj	_	_
7	měl	mít	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	acl:relcl	_	_
8	–	–	PUNCT	Z:-------------	_	10	punct	_	_
9	jen	jen	PART	TT-------------	_	10	advmod:emph	_	_
10	pozlátkové	pozlátkový	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	parataxis	_	_
11	–	–	PUNCT	Z:-------------	_	10	punct	_	_
12	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	7	obj	_	_
13	Boha	bůh	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl:relcl	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Rel	2	obj	_	_
2	chce	chtít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
3	Paříž	Paříž	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	2	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
6	chce	chtít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	Pán	pán	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	_
8	Bůh	bůh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 26 acl:relcl	color:blue
1	Že	že	SCONJ	J,-------------	_	2	mark	_	_
2	mohl	moci	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	říci	říci	VERB	Vf--------A---1	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	6	punct	_	_
5	„	"	PUNCT	Z:-------------	_	6	punct	_	SpaceAfter=No
6	Dýchám	dýchat	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	zas	zas	ADV	Db-------------	_	6	advmod	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	_
9	žiji	žít	VERB	VB-S---1P-AA--1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Style=Rare|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	11	punct	_	_
11	mám	mít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	parataxis	_	_
12	druhý	druhý	ADJ	CrIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	13	amod	_	_
13	Sion	Sion	PROPN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	18	punct	_	_
15	když	když	SCONJ	J,-------------	_	18	mark	_	_
16	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	18	obl:arg	_	_
17	první	první	ADJ	CrIS1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	18	nsubj	_	_
18	zbořen	zbořený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	11	advcl	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	26	punct	_	_
20	kde	kde	ADV	Db-------------	PronType=Rel	26	advmod	_	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	_	_
22	zemi	země	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	26	obl	_	_
23	stejně	stejně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	24	advmod	_	_
24	svaté	svatý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	22	amod	_	_
25	poesií	poesie	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	24	obl	_	_
26	můž’	moci	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Rare|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	_	_
27	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	29	case	_	_
28	nové	nový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	29	amod	_	_
29	odnože	odnož	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	26	obl	_	_
30	můj	můj	DET	PSIS4-S1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	32	obl	_	_
31	hnáti	hnát	VERB	Vf--------A---2	Aspect=Imp|Polarity=Pos|VerbForm=Inf	26	xcomp	_	_
32	kořen	kořen	NOUN	NNIS4-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	26	nsubj	_	SpaceAfter=No
33	!	!	PUNCT	Z:-------------	_	2	punct	_	SpaceAfter=No
34	“	"	PUNCT	Z:-------------	_	2	punct	_	_

~~~


