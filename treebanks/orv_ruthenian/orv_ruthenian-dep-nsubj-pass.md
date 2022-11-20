---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nsubj.html">nsubj</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 42 nsubj:pass	color:blue
1	Тогды	_	ADV	RB	Degree=Pos	11	advmod	_	_
2	тотъ	_	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	монъштукъ	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	_
4	або	_	CCONJ	CC	_	5	cc	_	_
5	удило	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	conj	_	_
6	на	_	ADP	IN	_	7	case	_	_
7	погамованъе	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	11	obl	_	_
8	кождого	_	DET	JJL	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
9	зуфальцу	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	есть	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	_
11	вынайдено	_	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	,	_	PUNCT	PUNCT	_	24	punct	_	_
13	абы	_	SCONJ	IN	Mood=Cnd	24	mark	_	SpaceAfter=No
14	,	_	PUNCT	PUNCT	_	13	punct	_	_
15	се	_	PRON	PRP	Clitic=Yes|PronType=Prs|Reflex=Yes	16	expl	_	_
16	боячы	_	VERB	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	24	advcl	_	_
17	права	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	16	obj	_	SpaceAfter=No
18	,	_	PUNCT	PUNCT	_	16	punct	_	_
19	от	_	ADP	IN	_	21	case	_	_
20	кожъдого	_	DET	JJL	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	21	det	_	_
21	кгвалъту	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	obl	_	_
22	и	_	CCONJ	CC	_	23	cc	_	_
23	збытку	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	conj	_	_
24	погамовалъ	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	SpaceAfter=No
25	,	_	PUNCT	PUNCT	_	32	punct	_	_
26	а	_	CCONJ	CC	_	32	cc	_	_
27	надъ	_	ADP	IN	_	28	case	_	_
28	слабшимъ	_	ADJ	JJL	Case=Ins|Degree=Sup|Gender=Neut|Number=Sing	32	obl	_	_
29	и	_	CCONJ	CC	_	30	cc	_	_
30	худъшимъ	_	ADJ	JJL	Case=Ins|Degree=Sup|Gender=Masc|Number=Sing	28	conj	_	_
31	не	_	PART	NEG	Polarity=Neg	32	advmod	_	_
32	паствилъсе	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	24	conj	_	_
33	и	_	CCONJ	CC	_	37	cc	_	_
34	утискати	_	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	37	xcomp	_	_
35	его	_	PRON	PRP	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	34	obj	_	_
36	не	_	PART	NEG	Polarity=Neg	37	advmod	_	_
37	могъ	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	32	conj	_	SpaceAfter=No
38	,	_	PUNCT	PUNCT	_	44	punct	_	_
39	бо	_	SCONJ	IN	_	44	mark	_	_
40	для	_	ADP	IN	_	41	case	_	_
41	того	_	PRON	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	44	obl	_	_
42	права	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	44	nsubj:pass	_	_
43	суть	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	44	aux:pass	_	_
44	постановлены	_	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	24	advcl	_	SpaceAfter=No
45	,	_	PUNCT	PUNCT	_	53	punct	_	_
46	абы	_	SCONJ	IN	Mood=Cnd	53	mark	_	_
47	можному	_	ADJ	JJL	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	53	iobj	_	_
48	и	_	CCONJ	CC	_	49	cc	_	_
49	потужному	_	ADJ	JJL	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	47	conj	_	_
50	не	_	PART	NEG	Polarity=Neg	51	advmod	_	_
51	все	_	PRON	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	54	obj	_	_
52	было	_	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	53	cop	_	_
53	вольно	_	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	44	advcl	_	_
54	чынити	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	53	csubj	_	SpaceAfter=No
55	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	Уставуемъ	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	_	PUNCT	_	_	28	punct	_	_
3	ижъ	_	SCONJ	_	_	28	mark	_	_
4	въ	_	ADP	_	_	6	case	_	_
5	тыхъ	_	DET	_	Case=Loc|Number=Plur|PronType=Dem	6	det	_	_
6	повѣтѣхъ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	28	obl	_	SpaceAfter=No
7	,	_	PUNCT	_	_	11	punct	_	_
8	которые	_	DET	_	Case=Nom|Number=Plur|PronType=Rel	11	nsubj:pass	_	_
9	суть	_	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
10	нижей	_	ADV	_	Degree=Cmp	11	advmod	_	_
11	росписаны	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	acl:relcl	_	SpaceAfter=No
12	,	_	PUNCT	_	_	11	punct	_	_
13	и	_	CCONJ	_	_	17	cc	_	_
14	въ	_	ADP	_	_	17	case	_	_
15	кождомъ	_	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Tot	17	det	_	_
16	таковомъ	_	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
17	повѣтѣ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
18	,	_	PUNCT	_	_	25	punct	_	_
19	гдѣ	_	ADV	_	Degree=Pos	25	advmod	_	_
20	еще	_	ADV	_	Degree=Pos	23	advmod	_	_
21	до	_	ADP	_	_	23	case	_	_
22	сихъ	_	DET	_	Case=Gen|Number=Plur|PronType=Dem	23	det	_	_
23	часовъ	_	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	obl	_	_
24	не	_	PART	_	Polarity=Neg	25	advmod	_	_
25	обраны	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	17	acl:relcl	_	SpaceAfter=No
26	,	_	PUNCT	_	_	25	punct	_	_
27	зособна	_	ADV	_	Degree=Pos	28	advmod	_	_
28	мають	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
29	быти	_	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	28	xcomp	_	_
30	судья	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	28	nsubj	_	_
31	подсудокъ	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	30	conj	_	_
32	и	_	CCONJ	_	_	33	cc	_	_
33	писаръ	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	30	conj	_	SpaceAfter=No
34	,	_	PUNCT	_	_	40	punct	_	_
35	которые	_	DET	_	Case=Nom|Number=Plur|PronType=Rel	40	nsubj	_	_
36	такъ	_	ADV	_	Degree=Pos	42	advmod	_	_
37	и	_	PART	_	_	39	advmod	_	_
38	тымъ	_	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	39	det	_	_
39	обычаемъ	_	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	36	conj	_	_
40	мають	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	acl:relcl	_	_
41	быть	_	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	42	aux	_	_
42	выбираны	_	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	40	xcomp	_	_
43	и	_	CCONJ	_	_	47	cc	_	_
44	на	_	ADP	_	_	46	case	_	_
45	таковые	_	DET	_	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	46	det	_	_
46	уряды	_	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	47	obl	_	_
47	установлены	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	42	conj	_	SpaceAfter=No
48	.	_	PUNCT	_	_	1	punct	_	SpacesAfter=\r\n

~~~


