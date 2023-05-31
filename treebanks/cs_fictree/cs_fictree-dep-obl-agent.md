---
layout: base
title:  'Statistics of obl:agent in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_fictree-dep-obl-arg.html">obl:arg</a></tt>.

21 nodes (0%) are attached to their parents as `obl:agent`.

16 instances of `obl:agent` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (17; 81% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	Květy	květ	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj	_
2	keře	keř	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	1:nmod	_
3	silně	silně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	4:advmod	_
4	voní	vonět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	větve	větev	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	8	nsubj:pass	8:nsubj:pass	_
7	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	_
8	zakončeny	zakončený	ADJ	VsFP------AP---	Gender=Fem|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	_
9	dlouhými	dlouhý	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	10:amod	_
10	trny	trn	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	8	obl:agent	8:obl:agent	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:agent	color:blue
1	Zdálo	zdát	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
3	mu	on	PRON	PHMS3--3-------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
5	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph	_
7	ona	on	PRON	PPFS1--3-------	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	9:nsubj	_
8	chvílemi	chvíle	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	9	obl	9:obl	_
9	opětuje	opětovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	1:csubj	_
10	jeho	jeho	DET	PSIS4MS3-------	Animacy=Inan|Case=Acc|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	11	det	11:det	_
11	pohled	pohled	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	9	obj	9:obj	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
13	a	a	CCONJ	J^-------------	_	16	cc	16:cc	_
14	byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	16	aux:pass	16:aux:pass	_
15	tím	ten	DET	PDNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	16	obl:agent	16:obl:agent	_
16	vzrušen	vzrušený	ADJ	VsMS------AP---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	conj	0:root|1:conj	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:agent	color:blue
1	A	a	CCONJ	J^-------------	_	5	cc	5:cc	_
2	ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj:pass	5:nsubj:pass	_
3	zbývající	zbývající	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	2:amod	_
4	byla	být	AUX	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	způsobena	způsobený	ADJ	VsFS------AP---	Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	něčím	něco	PRON	PZ--7----------	Case=Ins|PronType=Ind	5	obl:agent	5:obl:agent	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
8	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	9	nsubj	9:nsubj	_
9	bylo	být	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	acl	6:acl	_
10	mimo	mimo	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	_
11	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	9	obl	9:obl	_
12	a	a	CCONJ	J^-------------	_	15	cc	15:cc	_
13	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	16	obj	16:obj	_
14	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	15:aux	_
15	nemohla	moci	VERB	VpFS----R-NA---	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	9	conj	6:acl|9:conj	_
16	ovlivnit	ovlivnit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	15	xcomp	15:xcomp	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	23	punct	23:punct	_
18	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	19	case	19:case	_
19	čím	co	PRON	PQ--7----------	Animacy=Inan|Case=Ins|PronType=Int,Rel	24	obl:arg	24:obl:arg	_
20	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	aux	23:aux	_
21	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	24:expl:pv	_
22	jen	jen	PART	TT-------------	_	23	advmod:emph	23:advmod:emph	_
23	musela	muset	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	conj	6:acl|9:conj	_
24	vyrovnat	vyrovnat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	23:xcomp	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


