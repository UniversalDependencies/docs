---
layout: base
title:  'Statistics of acl in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="orv_ruthenian-dep-acl-relcl.html">acl:relcl</a></tt>.

27 nodes (1%) are attached to their parents as `acl`.

25 instances of `acl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.14814814814815.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (7; 26% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (6; 22% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 acl	color:blue
1	А	_	CCONJ	CC	_	11	cc	_	_
2	если	_	SCONJ	IN	_	5	mark	_	_
3	которому	_	DET	DT	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	4	det	_	_
4	народу	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	_
5	встыдъ	_	VERB	PRED	_	11	advcl	_	_
6	правъ	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	9	obj	_	_
7	своихъ	_	DET	PRP$	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	_
8	не	_	PART	NEG	Polarity=Neg	9	advmod	_	_
9	умети	_	VERB	VBC	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj	_	SpaceAfter=No
10	,	_	PUNCT	PUNCT	_	5	punct	_	_
11	поготовю	_	VERB	PRED	_	0	root	_	_
12	намъ	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	SpaceAfter=No
13	,	_	PUNCT	PUNCT	_	25	punct	_	_
14	которые	_	PRON	WPA	Animacy=Inan|Case=Acc|Number=Plur|PronType=Rel	25	nsubj	_	_
15	не	_	PART	NEG	Polarity=Neg	18	advmod	_	_
16	обчым	_	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
17	яким	_	DET	WPA	Case=Ins|Gender=Masc|Number=Sing|PronType=Ind	18	det	_	_
18	языком	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	24	iobj	_	SpaceAfter=No
19	,	_	PUNCT	PUNCT	_	22	punct	_	_
20	але	_	CCONJ	CC	_	22	cc	_	_
21	своимъ	_	DET	PRP$	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	22	det	_	_
22	власнымъ	_	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	18	conj	_	_
23	права	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	25	obj	_	_
24	списаные	_	VERB	VBNH	Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	23	acl	_	_
25	маем	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
26	и	_	CCONJ	CC	_	39	cc	_	_
27	кождого	_	DET	JJL	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	28	det	_	_
28	часу	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	39	obl:tmod	_	SpaceAfter=No
29	,	_	PUNCT	PUNCT	_	32	punct	_	_
30	чого	_	PRON	WP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Int	32	obj	_	_
31	намъ	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	32	iobj	_	_
32	потреба	_	VERB	PRED	_	38	ccomp	_	_
33	ку	_	ADP	IN	_	34	case	_	_
34	отпору	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	32	obl	_	_
35	всякое	_	DET	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	36	det	_	_
36	кривды	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	34	nmod	_	SpaceAfter=No
37	,	_	PUNCT	PUNCT	_	32	punct	_	_
38	ведати	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	39	xcomp	_	_
39	можемъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	25	conj	_	SpaceAfter=No
40	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 56 acl	color:blue
1	А	_	CCONJ	CC	_	29	cc	_	_
2	ижъбы	_	SCONJ	IN	Mood=Cnd	11	mark	_	_
3	то	_	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	_	_
4	им	_	PRON	PRP	Case=Dat|Number=Plur|Person=3|PronType=Prs	11	iobj	_	_
5	и	_	PART	UH	_	9	advmod	_	_
6	на	_	ADP	IN	_	9	case	_	_
7	потомные	_	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	9	amod	_	_
8	вечные	_	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	9	amod	_	_
9	часы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl	_	_
10	непорушне	_	ADV	RB	Degree=Pos	11	advmod	_	_
11	трвало	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	29	advcl	_	SpaceAfter=No
12	,	_	PUNCT	PUNCT	_	24	punct	_	_
13	яко	_	SCONJ	IN	_	24	mark	_	_
14	то	_	SCONJ	IN	_	13	fixed	_	_
15	собе	_	PRON	PRP	Case=Dat|PronType=Prs|Reflex=Yes	24	iobj	_	_
16	привильями	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	23	iobj	_	_
17	и	_	CCONJ	CC	_	20	cc	_	_
18	тымъ	_	DET	DT	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	20	det	_	_
19	же	_	PART	UH	_	18	advmod	_	_
20	статутомъ	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	16	conj	_	_
21	и	_	PART	UH	_	22	advmod	_	_
22	первей	_	ADV	NN	Degree=Cmp	23	advmod	_	_
23	обваровано	_	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	24	xcomp	_	_
24	мели	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	SpaceAfter=No
25	,	_	PUNCT	PUNCT	_	11	punct	_	_
26	такъ	_	ADV	RB	Degree=Pos	29	advmod	_	_
27	и	_	CCONJ	CC	_	28	cc	_	_
28	теперъ	_	ADV	RB	Degree=Pos	29	advmod	_	_
29	хочемъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
30	то	_	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	31	obj	_	_
31	мети	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	29	xcomp	_	_
32	и	_	CCONJ	CC	_	33	cc	_	_
33	уставуемъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	29	conj	_	SpaceAfter=No
34	,	_	PUNCT	PUNCT	_	58	punct	_	_
35	ижъ	_	SCONJ	IN	_	58	mark	_	_
36	кгды	_	SCONJ	IN	_	49	mark	_	_
37	бы	_	AUX	RP	Mood=Cnd	49	aux	_	_
38	который	_	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	49	nsubj	_	_
39	з	_	ADP	IN	_	40	case	_	_
40	врядниковъ	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	38	nmod	_	_
41	тыхъ	_	DET	DT	Case=Gen|Number=Plur|PronType=Dem	40	det	_	_
42	земъскихъ	_	ADJ	NN	Case=Gen|Degree=Pos|Number=Plur	40	amod	_	SpaceAfter=No
43	,	_	PUNCT	PUNCT	_	44	punct	_	_
44	судья	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	38	appos	_	SpaceAfter=No
45	,	_	PUNCT	PUNCT	_	46	punct	_	_
46	подсудокъ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	44	conj	_	_
47	або	_	CCONJ	CC	_	48	cc	_	_
48	писаръ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	44	conj	_	_
49	умеръ	_	VERB	NN	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	58	advcl	_	SpaceAfter=No
50	,	_	PUNCT	PUNCT	_	49	punct	_	_
51	тогды	_	ADV	RB	Degree=Pos	58	advmod	_	_
52	другие	_	DET	DT	Case=Nom|Number=Plur|PronType=Tot	53	det	_	_
53	врядники	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	58	nsubj	_	SpaceAfter=No
54	,	_	PUNCT	PUNCT	_	56	punct	_	_
55	живо	_	ADV	UH	Degree=Pos	56	advmod	_	_
56	позосталые	_	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	53	acl	_	SpaceAfter=No
57	,	_	PUNCT	PUNCT	_	56	punct	_	_
58	мають	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	ccomp	_	_
59	нам	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	58	iobj	_	SpaceAfter=No
60	,	_	PUNCT	PUNCT	_	61	punct	_	_
61	г[о]с[по]д[а]ру	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	59	appos	_	SpaceAfter=No
62	,	_	PUNCT	PUNCT	_	61	punct	_	_
63	о	_	ADP	IN	_	64	case	_	_
64	томъ	_	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	68	obl	_	_
65	через	_	ADP	IN	_	66	case	_	_
66	листъ	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	68	obl	_	_
67	свой	_	DET	PRP$	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	66	det	_	_
68	знати	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	69	xcomp	_	_
69	дати	_	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	58	xcomp	_	_
70	то	_	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	68	obj	_	SpaceAfter=No
71	,	_	PUNCT	PUNCT	_	74	punct	_	_
72	кгды	_	ADV	RB	Degree=Pos	74	advmod	_	_
73	быхмо	_	AUX	IN	Mood=Cnd|Number=Plur|Person=1	74	aux	_	_
74	были	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	70	acl	_	_
75	в	_	ADP	IN	_	77	case	_	_
76	здешнемъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	77	amod	_	_
77	паньстве	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	74	obl	_	_
78	нашомъ	_	DET	DT	Case=Loc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	77	det	_	SpaceAfter=No
79	,	_	PUNCT	PUNCT	_	81	punct	_	_
80	великомъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	81	amod	_	_
81	князстве	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	77	appos	_	_
82	литовъскомъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	81	amod	_	SpaceAfter=No
83	.	_	PUNCT	PUNCT	_	29	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 27 acl	color:blue
1	И	_	CCONJ	CC	_	4	cc	_	_
2	тот	_	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	листъ	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	маеть	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	быти	_	AUX	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	10	aux	_	_
6	везде	_	ADV	NN	Degree=Pos	10	advmod	_	_
7	в	_	ADP	IN	_	9	case	_	_
8	томъ	_	DET	DT	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	9	amod	_	_
9	повете	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	obl	_	_
10	обволанъ	_	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	xcomp	_	_
11	и	_	CCONJ	CC	_	12	cc	_	_
12	объголошонъ	_	VERB	NN	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	10	conj	_	_
13	тымъ	_	DET	DT	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	14	det	_	_
14	обычаемъ	_	NOUN	VBC	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	iobj	_	SpaceAfter=No
15	,	_	PUNCT	PUNCT	_	27	punct	_	_
16	яко	_	SCONJ	IN	_	27	mark	_	_
17	и	_	PART	UH	_	20	advmod	_	_
18	о	_	ADP	IN	_	20	case	_	_
19	иншихъ	_	DET	DT	Case=Loc|Number=Plur|PronType=Tot	20	det	_	_
20	листехъ	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	27	obl	_	_
21	наших	_	DET	DT	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs	20	det	_	_
22	соймовыхъ	_	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	20	amod	_	_
23	або	_	CCONJ	CC	_	24	cc	_	_
24	военъных	_	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	22	conj	_	_
25	естъ	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	27	aux	_	_
26	вышей	_	ADV	RBR	Degree=Cmp	27	advmod	_	_
27	описано	_	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	13	acl	_	_
28	в	_	ADP	IN	_	29	case	_	_
29	розделе	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	27	obl	_	_
30	третемъ	_	ADJ	JJL	Case=Loc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	29	amod	_	SpaceAfter=No
31	.	_	PUNCT	PUNCT	_	4	punct	_	SpacesAfter=\r\n

~~~


