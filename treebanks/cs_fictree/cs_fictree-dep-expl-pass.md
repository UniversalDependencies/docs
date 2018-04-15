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
1	Jednou	jednou	ADV	Db-------------	_	3	advmod	3:advmod	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
3	měla	mít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	přistavovat	přistavovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
6	mlýna	mlýn	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pass	color:blue
1	Sledovala	sledovat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux|9:aux	_
3	měnící	měnící	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	amod	5:amod	_
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
5	krajinu	krajina	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	1:obj	_
6	kolem	kolem	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	_
7	sebe	se	PRON	P6--2----------	Case=Gen|PronType=Prs|Reflex=Yes	5	nmod	5:nmod	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	_
9	snažila	snažit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	0:root|1:conj	_
10	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	_
11	smazat	smazat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
12	pocit	pocit	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	obj	11:obj	_
13	trapnosti	trapnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	12	nmod	12:nmod	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 31 expl:pass	color:blue
1	Všichni	všechen	DET	PLMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	nsubj	3:nsubj|6:nsubj|10:nsubj|17:nsubj|20:nsubj|49:nsubj	_
2	jen	jen	PART	TT-------------	_	3	advmod:emph	3:advmod:emph	_
3	stáli	stát	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	a	a	CCONJ	J^-------------	_	6	cc	6:cc	_
5	tupě	tupě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	6:advmod	_
6	zírali	zírat	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
7	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	_
8	prázdna	prázdno	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	6:obl	_
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	10:cc	_
10	gestikulovali	gestikulovat	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	conj	0:root|6:conj	_
11	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	12:case	_
12	dveřmi	dveře	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	10	obl	10:obl	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	17	punct	17:punct	_
14	občas	občas	ADV	Db-------------	_	17	advmod	17:advmod|20:advmod	_
15	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	18:expl:pv	_
16	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	17	nsubj	17:nsubj|20:nsubj	_
17	chtěl	chtít	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
18	předvést	předvést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	17	xcomp	17:xcomp	_
19	a	a	CCONJ	J^-------------	_	20	cc	20:cc	_
20	řekl	říci	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	conj	0:root|17:conj	SpaceAfter=No
21	:	:	PUNCT	Z:-------------	_	23	punct	23:punct|30:punct|40:punct	_
22	"	"	PUNCT	Z:-------------	_	23	punct	23:punct	SpaceAfter=No
23	Mělo	mít	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	20	ccomp	20:ccomp	_
24	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	23	aux	23:aux	_
25	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl:pass	23:expl:pass	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	23	punct	23:punct	SpaceAfter=No
27	"	"	PUNCT	Z:-------------	_	23	punct	23:punct	SpaceAfter=No
28	,	,	PUNCT	Z:-------------	_	30	punct	30:punct	_
29	"	"	PUNCT	Z:-------------	_	30	punct	30:punct	SpaceAfter=No
30	Muselo	muset	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	conj	20:ccomp|23:conj	_
31	by	být	VERB	Vc-------------	Mood=Cnd|VerbForm=Fin	30	expl:pass	30:expl:pass	_
32	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	expl:pv	30:expl:pv	SpaceAfter=No
33	.	.	PUNCT	Z:-------------	_	30	punct	30:punct	SpaceAfter=No
34	"	"	PUNCT	Z:-------------	_	30	punct	30:punct	SpaceAfter=No
35	,	,	PUNCT	Z:-------------	_	40	punct	40:punct	_
36	"	"	PUNCT	Z:-------------	_	40	punct	40:punct	SpaceAfter=No
37	Snad	snad	PART	TT-------------	_	40	advmod	40:advmod	_
38	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	40	aux	40:aux	_
39	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	40	expl:pass	40:expl:pass	_
40	mohlo	moci	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	conj	20:ccomp|23:conj	SpaceAfter=No
41	.	.	PUNCT	Z:-------------	_	40	punct	40:punct	SpaceAfter=No
42	"	"	PUNCT	Z:-------------	_	40	punct	40:punct	SpaceAfter=No
43	,	,	PUNCT	Z:-------------	_	49	punct	49:punct	_
44	ale	ale	CCONJ	J^-------------	_	49	cc	49:cc	_
45	nikdo	nikdo	PRON	PWM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Neg	49	nsubj	49:nsubj	_
46	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	49	expl:pv	49:expl:pv	_
47	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	48	case	48:case	_
48	ničemu	nic	PRON	PW--3----------	Case=Dat|PronType=Neg	49	obl:arg	49:obl:arg	_
49	neměl	mít	VERB	VpMS----R-NA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
50	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


