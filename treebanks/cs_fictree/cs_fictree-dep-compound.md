---
layout: base
title:  'Statistics of compound in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `compound`

This relation is universal.

32 nodes (0%) are attached to their parents as `compound`.

21 instances of `compound` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53125.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (30; 94% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	4	case	4:case	_
2	čtyřmi	čtyři	NUM	ClNP7----------	Case=Ins|Gender=Neut|Number=Plur|NumForm=Word|NumType=Card	3	compound	3:compound	_
3	sty	sto	NUM	ClNP7----------	Case=Ins|Gender=Neut|Number=Plur|NumForm=Word|NumType=Card	4	nummod	4:nummod	_
4	lety	rok	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur	5	obl	5:obl:před:ins	_
5	zdomácněl	zdomácnět	VERB	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	i	i	PART	TT-------------	_	8	advmod:emph	8:advmod:emph	_
7	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	_
8	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	5:obl:u:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 2 compound	color:blue
1	"	"	PUNCT	Z:-------------	_	16	punct	16:punct	SpaceAfter=No
2	Víte	vědět	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	compound	16:compound	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
4	strach	strach	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	16	dep	16:dep	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
6	často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	7:advmod	_
7	zbytečný	zbytečný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	4:amod	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	_
10	nechuť	nechuť	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	conj	4:conj|16:dep	_
11	přemýšlet	přemýšlet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	acl	10:acl	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	16	nsubj	16:nsubj	_
14	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
15	ti	ten	DET	PDMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	16	det	16:det	_
16	nepřátelé	nepřítel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root|21:nsubj	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
18	kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	21	nsubj	16:ref	_
19	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	20	case	20:case	_
20	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	21	obl	21:obl:k:dat	_
21	vodí	vodit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	16:acl:relcl	_
22	pacienty	pacient	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	21	obj	21:obj	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	"	"	PUNCT	Z:-------------	_	9	punct	9:punct	SpaceAfter=No
2	Dala	dát	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	csubj	9:csubj	_
3	nedala	dát	VERB	VpFS----R-NA---	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	2	compound	2:compound	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	appos	2:appos	_
6	není	být	AUX	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	vůbec	vůbec	ADV	Db-------------	_	8	advmod:emph	8:advmod:emph	_
8	tak	tak	ADV	Db-------------	PronType=Dem	9	advmod	9:advmod	_
9	důležité	důležitý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
11	Alžběto	Alžběta	PROPN	NNFS5-----A----	Case=Voc|Gender=Fem|NameType=Giv|Number=Sing	9	vocative	9:vocative	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
13	jak	jak	ADV	Db-------------	PronType=Int,Rel	15	advmod	15:advmod	_
14	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	15	expl:pv	15:expl:pv	_
15	myslíte	myslet	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	9:advcl	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


