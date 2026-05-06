---
layout: base
title:  'Statistics of advcl:relcl in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="eo_prago-dep-advcl.html">advcl</a></tt>.

11 nodes (0%) are attached to their parents as `advcl:relcl`.

11 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54545454545455.

The following 2 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (7; 64% instances), <tt><a href="eo_prago-pos-ADV.html">ADV</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 25 advcl:relcl	color:blue
1	Patriotismo	patriotismo	NOUN	_	Case=Nom|Number=Sing	3	xcomp	_	_
2	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	nomas	nomi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	la	la	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	servadon	servado	NOUN	_	Case=Acc|Number=Sing	3	obj	_	_
6	al	al	ADP	_	_	8	case	_	_
7	la	la	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	bono	bono	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
9	de	de	ADP	_	_	12	case	_	_
10	ĉiuj	ĉiu	DET	_	Case=Nom|Number=Plur|PronType=Tot	12	det	_	_
11	miaj	mia	PRON	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	samhejmanoj	samhejmano	NOUN	_	Case=Nom|Number=Plur	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	_	_
14	kian	kia	PRON	_	Case=Acc|ExtPos=ADP|Number=Sing|PronType=Rel	16	nmod:poss	_	_
15	ajn	ajn	PART	_	_	14	fixed	_	_
16	devenon	deveno	NOUN	_	Case=Acc|Number=Sing	25	obj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	16	conj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	_
20	religion	religio	NOUN	_	Case=Acc|Number=Sing	18	conj	_	_
21	aŭ	aŭ	CCONJ	_	_	23	cc	_	_
22	socian	socia	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	23	amod	_	_
23	rolon	rolo	NOUN	_	Case=Acc|Number=Sing	20	conj	_	_
24	ili	ili	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	25	nsubj	_	_
25	havas	havi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl:relcl	_	SpaceAfter=No
26	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 60	bgColor:blue
# visual-style 60	fgColor:white
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 57 60 advcl:relcl	color:blue
1	a	a	ADV	_	_	28	advmod	_	SpaceAfter=No
2	)	)	PUNCT	_	_	28	punct	_	_
3	La	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
4	plej	plej	ADV	_	_	5	advmod	_	_
5	altan	alta	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	10	amod	_	_
6	por	por	ADP	_	_	7	case	_	_
7	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nmod	_	_
8	ne	ne	ADV	_	_	9	advmod	_	_
9	kompreneblan	komprenebla	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	10	amod	_	_
10	Forton	forto	NOUN	_	Case=Acc|Number=Sing	28	obj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	15	nsubj	_	_
13	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	la	la	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	kaŭzo	kaŭzo	NOUN	_	Case=Nom|Number=Sing	10	acl:relcl	_	_
16	de	de	ADP	_	_	18	case	_	_
17	la	la	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	kaŭzoj	kaŭzo	NOUN	_	Case=Nom|Number=Plur	15	nmod	_	_
19	en	en	ADP	_	_	21	case	_	_
20	la	la	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	mondo	mondo	NOUN	_	Case=Nom|Number=Sing	18	nmod	_	_
22	materia	materia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	21	amod	_	_
23	kaj	kaj	CCONJ	_	_	24	cc	_	_
24	morala	morala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	22	conj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	28	punct	_	_
26	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	28	nsubj	_	_
27	povas	povi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	28	aux	_	_
28	nomi	nomi	VERB	_	VerbForm=Inf	0	root	_	_
29	per	per	ADP	_	_	31	case	_	_
30	la	la	DET	_	Definite=Def|PronType=Art	31	det	_	_
31	nomo	nomo	NOUN	_	Case=Nom|Number=Sing	28	nmod	_	_
32	«	«	PUNCT	_	_	33	punct	_	SpaceAfter=No
33	Dio	dio	NOUN	_	Case=Nom|Number=Sing	31	appos	_	SpaceAfter=No
34	»	»	PUNCT	_	_	33	punct	_	_
35	aŭ	aŭ	CCONJ	_	_	38	cc	_	_
36	per	per	ADP	_	_	38	case	_	_
37	alia	alia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	38	amod	_	_
38	nomo	nomo	NOUN	_	Case=Nom|Number=Sing	31	conj	_	SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	_
40	sed	sed	SCONJ	_	_	42	mark	_	_
41	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	42	nsubj	_	_
42	konscias	konscii	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	28	advcl	_	SpaceAfter=No
43	,	,	PUNCT	_	_	51	punct	_	_
44	ke	ke	SCONJ	_	_	51	mark	_	_
45	la	la	DET	_	Definite=Def|PronType=Art	46	det	_	_
46	esencon	esenco	NOUN	_	Case=Acc|Number=Sing	54	obj	_	_
47	de	de	ADP	_	_	49	case	_	_
48	tiu	tiu	DET	_	Case=Nom|Number=Sing|PronType=Dem	49	det	_	_
49	Forto	forto	NOUN	_	Case=Nom|Number=Sing	46	nmod	_	_
50	ĉiu	ĉiu	PRON	_	Case=Nom|Number=Sing|PronType=Tot	51	nsubj	_	_
51	havas	havi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	42	ccomp	_	_
52	la	la	DET	_	Definite=Def|PronType=Art	53	det	_	_
53	rajton	rajto	NOUN	_	Case=Acc|Number=Sing	51	obj	_	_
54	prezenti	prezenti	VERB	_	VerbForm=Inf	53	xcomp	_	_
55	al	al	ADP	_	_	56	case	_	_
56	si	si	PRON	_	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	54	nmod	_	_
57	tiel	tiel	ADV	_	_	54	advmod	_	SpaceAfter=No
58	,	,	PUNCT	_	_	60	punct	_	_
59	kiel	kiel	ADV	_	_	60	advmod	_	_
60	diktas	dikti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	57	advcl:relcl	_	_
61	al	al	ADP	_	_	62	case	_	_
62	li	li	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	60	nmod	_	_
63	lia	lia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	64	nmod:poss	_	_
64	prudento	prudento	NOUN	_	Case=Nom|Number=Sing	60	nsubj	_	_
65	kaj	kaj	CCONJ	_	_	66	cc	_	_
66	koro	koro	NOUN	_	Case=Nom|Number=Sing	64	conj	_	_
67	aŭ	aŭ	CCONJ	_	_	69	cc	_	_
68	la	la	DET	_	Definite=Def|PronType=Art	69	det	_	_
69	instruoj	instruo	NOUN	_	Case=Nom|Number=Plur	64	conj	_	_
70	de	de	ADP	_	_	72	case	_	_
71	lia	lia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	72	nmod:poss	_	_
72	eklezio	eklezio	NOUN	_	Case=Nom|Number=Sing	69	nmod	_	SpaceAfter=No
73	.	.	PUNCT	_	_	28	punct	_	_

~~~


