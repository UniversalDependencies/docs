---
layout: base
title:  'Statistics of expl:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_fictree-dep-expl-pv.html">expl:pv</a></tt>.

351 nodes (0%) are attached to their parents as `expl:pass`.

300 instances of `expl:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84615384615385.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (349; 99% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl:pass	color:blue
1	Jednou	jednou	ADV	Db-------------	_	3	advmod	_	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
3	měla	mít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	přistavovat	přistavovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	_	_
5	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
6	mlýna	mlýn	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pass	color:blue
1	Sledovala	sledovat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	měnící	měnící	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	amod	_	_
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
5	krajinu	krajina	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	_	_
6	kolem	kolem	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	_
7	sebe	se	PRON	P6--2----------	Case=Gen|PronType=Prs|Reflex=Yes	5	nmod	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	_
9	snažila	snažit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
10	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	_
11	smazat	smazat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
12	pocit	pocit	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	obj	_	_
13	trapnosti	trapnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 31 expl:pass	color:blue
1	Všichni	všechen	DET	PLMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	nsubj	_	_
2	jen	jen	PART	TT-------------	_	3	advmod:emph	_	_
3	stáli	stát	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	a	a	CCONJ	J^-------------	_	6	cc	_	_
5	tupě	tupě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	_
6	zírali	zírat	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
7	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	_
8	prázdna	prázdno	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	_	_
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	gestikulovali	gestikulovat	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	conj	_	_
11	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	_	_
12	dveřmi	dveře	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	17	punct	_	_
14	občas	občas	ADV	Db-------------	_	17	advmod	_	_
15	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	_	_
16	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	17	nsubj	_	_
17	chtěl	chtít	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
18	předvést	předvést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	17	xcomp	_	_
19	a	a	CCONJ	J^-------------	_	20	cc	_	_
20	řekl	říci	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	conj	_	SpaceAfter=No
21	:	:	PUNCT	Z:-------------	_	23	punct	_	_
22	"	"	PUNCT	Z:-------------	_	23	punct	_	SpaceAfter=No
23	Mělo	mít	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	20	ccomp	_	_
24	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	23	aux	_	_
25	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl:pass	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	23	punct	_	SpaceAfter=No
27	"	"	PUNCT	Z:-------------	_	23	punct	_	SpaceAfter=No
28	,	,	PUNCT	Z:-------------	_	30	punct	_	_
29	"	"	PUNCT	Z:-------------	_	30	punct	_	SpaceAfter=No
30	Muselo	muset	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	conj	_	_
31	by	být	VERB	Vc-------------	Mood=Cnd|VerbForm=Fin	30	expl:pass	_	_
32	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	expl:pv	_	SpaceAfter=No
33	.	.	PUNCT	Z:-------------	_	30	punct	_	SpaceAfter=No
34	"	"	PUNCT	Z:-------------	_	30	punct	_	SpaceAfter=No
35	,	,	PUNCT	Z:-------------	_	40	punct	_	_
36	"	"	PUNCT	Z:-------------	_	40	punct	_	SpaceAfter=No
37	Snad	snad	PART	TT-------------	_	40	advmod	_	_
38	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	40	aux	_	_
39	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	40	expl:pass	_	_
40	mohlo	moci	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	conj	_	SpaceAfter=No
41	.	.	PUNCT	Z:-------------	_	40	punct	_	SpaceAfter=No
42	"	"	PUNCT	Z:-------------	_	40	punct	_	SpaceAfter=No
43	,	,	PUNCT	Z:-------------	_	49	punct	_	_
44	ale	ale	CCONJ	J^-------------	_	49	cc	_	_
45	nikdo	nikdo	PRON	PWM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Neg	49	nsubj	_	_
46	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	49	expl:pv	_	_
47	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	48	case	_	_
48	ničemu	nic	PRON	PW--3----------	Case=Dat|PronType=Neg	49	obl:arg	_	_
49	neměl	mít	VERB	VpMS----R-NA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	SpaceAfter=No
50	.	.	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No

~~~


