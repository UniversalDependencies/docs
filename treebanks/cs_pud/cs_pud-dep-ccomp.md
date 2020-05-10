---
layout: base
title:  'Statistics of ccomp in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `ccomp`

This relation is universal.

174 nodes (1%) are attached to their parents as `ccomp`.

133 instances of `ccomp` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.90804597701149.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (128; 74% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (22; 13% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (13; 7% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	Svědek	svědek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
2	policii	policie	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:dat	_
3	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
5	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
6	oběť	oběť	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
8	srpnu	srpen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl:v:loc	_
9	podezřelého	podezřelý	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	10:obj	_
10	napadla	napadnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	3:ccomp	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 ccomp	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
3	politický	politický	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	proces	proces	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
5	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
6	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	_
7	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	LGloss=(zvr._zájmeno/částice)
9	rozhodl	rozhodnout	VERB	VpYS---XR-AA--1	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
11	že	že	SCONJ	J,-------------	_	13	mark	13:mark	LId=že-1
12	nebudu	být	AUX	VB-S---1F-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
13	přítomen	přítomný	ADJ	ACYS------A----	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	9	ccomp	9:ccomp	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	18	punct	18:punct	_
15	tak	tak	ADV	Db-------------	PronType=Dem	18	advmod	18:advmod	LId=tak-3
16	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	18	nsubj:pass	18:nsubj:pass	_
17	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	18	aux:pass	18:aux:pass	_
18	řečeno	řečený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	SpaceAfter=No|LDeriv=říct
19	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Myslím	myslit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
3	že	že	SCONJ	J,-------------	_	6	mark	6:mark	LId=že-1
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	důvod	důvod	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	ccomp	1:ccomp|10:obl	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	proč	proč	ADV	Db-------------	PronType=Int,Rel	10	advmod	6:ref	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	LGloss=(zvr._zájmeno/částice)
10	zaměřili	zaměřit	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	acl:relcl	6:acl:relcl	_
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	LId=na-1
12	vzory	vzor	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	obl:arg	10:obl:arg:na:acc	_
13	a	a	CCONJ	J^-------------	_	14	cc	14:cc	LId=a-1
14	barvy	barva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	12	conj	10:obl:arg:na:acc|12:conj	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


