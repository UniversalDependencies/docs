---
layout: base
title:  'Statistics of discourse in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.57142857142857.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 1 discourse	color:blue
1	Тем	то	PRON	DT	Case=Ins|Gender=Neut|Number=Sing	22	discourse	_	_
2	не	не	PART	NEG	Polarity=Neg	1	fixed	_	_
3	менее	менее	ADV	RBR	Degree=Cmp	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	если	если	SCONJ	IN	_	8	mark	_	_
6	бы	бы	AUX	RP	Mood=Cnd	8	aux	_	_
7	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
8	принят	принять	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	22	advcl	_	_
9	английский	английский	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	закон	закон	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	SpaceAfter=No
11	,	,	PUNCT	,	_	8	punct	_	_
12	у	у	ADP	IN	_	13	case	_	_
13	дочерей	дочь	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	22	obl	_	_
14	Людовика	Людовик	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
15	X	x	ADJ	ORD	_	14	flat:name	_	Proper=True|SpaceAfter=No
16	,	,	PUNCT	,	_	17	punct	_	_
17	Филиппа	Филипп	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	14	conj	_	_
18	V	v	ADJ	ORD	_	17	flat:name	_	Proper=True
19	и	и	CCONJ	CC	_	20	cc	_	_
20	Карла	Карл	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	14	conj	_	_
21	IV	iv	ADJ	ORD	_	20	flat:name	_	Proper=True
22	было	быть	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
23	бы	бы	AUX	RP	Mood=Cnd	22	aux	_	_
24	больше	много	NUM	RBR	_	25	nummod	_	_
25	прав	право	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	22	nsubj	_	_
26	на	на	ADP	IN	_	27	case	_	_
27	трон	трон	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	25	nmod	_	SpaceAfter=No
28	,	,	PUNCT	,	_	32	punct	_	_
29	чем	чем	SCONJ	IN	_	32	case	_	_
30	у	у	ADP	IN	_	32	case	_	_
31	их	их	DET	PRP$	_	32	det	_	_
32	тетки	тетка	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	25	nmod	_	_
33	Изабеллы	Изабелла	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	32	flat:name	_	_
34	Французской	французский	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	32	flat:name	_	SpaceAfter=No
35	.	.	PUNCT	.	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	Трюдо	Трюдо	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	пригласит	пригласить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	и	и	CCONJ	CC	_	5	discourse	_	_
4	45-го	45-го	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	президента	президент	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
6	Соединенных	соединенный	ADJ	JJ	Case=Gen|Degree=Pos|Number=Plur	7	amod	_	Proper=True
7	Штатов	Штат	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	13	punct	_	_
9	кто	кто	PRON	WP	Case=Nom	13	nsubj	_	_
10	бы	бы	AUX	RP	Mood=Cnd	13	aux	_	_
11	им	он	PRON	PRP	Case=Ins|Gender=Masc|Number=Sing|Person=3	13	iobj	_	_
12	ни	ни	PART	NEG	Polarity=Neg	13	advmod	_	_
13	стал	стать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ведь	ведь	PART	UH	_	6	discourse	_	_
2	интернет	интернет	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	—	—	PUNCT	-	_	2	punct	_	OrigForm=--
4	это	это	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	6	expl	_	_
5	не	не	PART	NEG	Polarity=Neg	6	advmod	_	_
6	роскошь	роскошь	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	_	_
8	а	а	CCONJ	CC	_	10	cc	_	_
9	необходимый	необходимый	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	инструмент	инструмент	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


