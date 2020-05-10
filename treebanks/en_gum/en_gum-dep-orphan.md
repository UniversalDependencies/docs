---
layout: base
title:  'Statistics of orphan in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `orphan`

This relation is universal.

28 nodes (0%) are attached to their parents as `orphan`.

27 instances of `orphan` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60714285714286.

The following 12 pairs of parts of speech are connected with `orphan`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (10; 36% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (2; 7% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 orphan	color:blue
1	There	there	PRON	EX	_	2	expl	_	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	Entity=(object-109
4	public	public	ADJ	JJ	Degree=Pos	5	amod	_	_
5	bus	bus	NOUN	NN	Number=Sing	2	nsubj	_	_
6	from	from	ADP	IN	_	8	case	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	Entity=(place-46
8	airport	airport	NOUN	NN	Number=Sing	5	nmod	_	Entity=place-46)
9	to	to	ADP	IN	_	10	case	_	_
10	Hadibo	Hadibo	PROPN	NNP	Number=Sing	8	nmod	_	Entity=(place-30)
11	and	and	CCONJ	CC	_	13	cc	_	_
12	from	from	ADP	IN	_	13	case	_	_
13	Hadibo	Hadibo	PROPN	NNP	Number=Sing	5	conj	_	Entity=(place-30)
14	to	to	ADP	IN	_	15	case	_	_
15	Qalansia	Qalansia	PROPN	NNP	Number=Sing	13	orphan	_	Entity=(place-110)object-109)|SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 23 orphan	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	3	det	_	Entity=(animal-11
2	silver	silver	ADJ	JJ	Degree=Pos	3	amod	_	_
3	swarm	swarm	NOUN	NN	Number=Sing	4	nsubj	_	Entity=animal-11)
4	coalesces	coalesce	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	around	around	ADP	IN	_	7	case	_	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(place-106
7	164th	164th	ADJ	JJ	Degree=Pos|NumType=Ord	4	obl	_	Entity=place-106)|SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	and	and	CCONJ	CC	_	11	cc	_	_
10	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Entity=(person-6)
11	vanishes	vanish	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
12	into	into	ADP	IN	_	13	case	_	_
13	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obl	_	Entity=(animal-11)|SpaceAfter=No
14	,	,	PUNCT	,	_	17	punct	_	_
15	like	like	SCONJ	IN	_	17	mark	_	_
16	a	a	DET	DT	Definite=Ind|PronType=Art	17	det	_	Entity=(abstract-107
17	snip	snip	NOUN	NN	Number=Sing	11	advcl	_	_
18	of	of	ADP	IN	_	19	case	_	_
19	scallion	scallion	NOUN	NN	Number=Sing	17	nmod	_	Entity=(animal-108)abstract-107)
20	into	into	ADP	IN	_	23	case	_	_
21	cloudy	cloudy	ADJ	JJ	Degree=Pos	23	amod	_	Entity=(object-109
22	miso	miso	NOUN	NN	Number=Sing	23	compound	_	Entity=(substance-110)
23	soup	soup	NOUN	NN	Number=Sing	17	orphan	_	Entity=object-109)|SpaceAfter=No
24	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 46 orphan	color:blue
1	An	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(abstract-143
2	incomplete	incomplete	ADJ	JJ	Degree=Pos|Polarity=Neg	6	amod	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	faulty	faulty	ADJ	JJ	Degree=Pos	2	conj	_	_
5	German	German	ADJ	JJ	Degree=Pos	6	amod	_	_
6	translation	translation	NOUN	NN	Number=Sing	21	nsubj:pass	_	Entity=abstract-143)|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	edited	edit	VERB	VBN	Tense=Past|VerbForm=Part	6	acl	_	_
9	by	by	ADP	IN	_	10	case	_	_
10	Dr	Dr	PROPN	NNP	Number=Sing	8	obl	_	Entity=(person-144
11	Moritz	Moritz	PROPN	NNP	Number=Sing	10	flat	_	_
12	Posselt	Posselt	PROPN	NNP	Number=Sing	10	flat	_	Entity=person-144)
13	(	(	PUNCT	-LRB-	_	18	punct	_	SpaceAfter=No
14	Tagebuch	Tagebuch	X	FW	_	18	compound	_	Entity=(abstract-143
15	des	des	X	FW	_	18	compound	_	_
16	Generals	Generals	X	FW	_	18	compound	_	_
17	Patrick	Patrick	PROPN	NNP	Number=Sing	18	compound	_	_
18	Gordon	Gordon	PROPN	NNP	Number=Sing	6	appos	_	Entity=abstract-143)|SpaceAfter=No
19	)	)	PUNCT	-RRB-	_	18	punct	_	_
20	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	21	aux:pass	_	_
21	published	publish	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
22	,	,	PUNCT	,	_	25	punct	_	_
23	the	the	DET	DT	Definite=Def|PronType=Art	25	det	_	Entity=(abstract-145
24	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	25	amod	_	_
25	volume	volume	NOUN	NN	Number=Sing	21	parataxis	_	Entity=abstract-145)
26	at	at	ADP	IN	_	27	case	_	_
27	Moscow	Moscow	PROPN	NNP	Number=Sing	25	orphan	_	Entity=(place-96)
28	in	in	ADP	IN	_	29	case	_	_
29	1849	1849	NUM	CD	NumType=Card	25	orphan	_	Entity=(time-146)|SpaceAfter=No
30	,	,	PUNCT	,	_	32	punct	_	_
31	the	the	DET	DT	Definite=Def|PronType=Art	32	det	_	Entity=(abstract-147
32	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	25	conj	_	Entity=abstract-147)
33	at	at	ADP	IN	_	34	case	_	_
34	St	St	PROPN	NNP	Number=Sing	32	orphan	_	Entity=(place-148
35	Petersburg	Petersburg	PROPN	NNP	Number=Sing	34	flat	_	Entity=place-148)
36	in	in	ADP	IN	_	37	case	_	_
37	1851	1851	NUM	CD	NumType=Card	32	orphan	_	Entity=(time-149)|SpaceAfter=No
38	,	,	PUNCT	,	_	41	punct	_	_
39	and	and	CCONJ	CC	_	41	cc	_	_
40	the	the	DET	DT	Definite=Def|PronType=Art	41	det	_	Entity=(abstract-150
41	third	third	ADJ	JJ	Degree=Pos|NumType=Ord	25	conj	_	Entity=abstract-150)
42	at	at	ADP	IN	_	43	case	_	_
43	St	St	PROPN	NNP	Number=Sing	41	orphan	_	Entity=(place-148
44	Petersburg	Petersburg	PROPN	NNP	Number=Sing	43	flat	_	Entity=place-148)
45	in	in	ADP	IN	_	46	case	_	_
46	1853	1853	NUM	CD	NumType=Card	41	orphan	_	Entity=(time-151)|SpaceAfter=No
47	;	;	PUNCT	:	_	48	punct	_	_
48	and	and	CCONJ	CC	_	66	cc	_	_
49	Passages	Passages	PROPN	NNP	Number=Sing	66	nsubj	_	Entity=(abstract-152
50	from	from	ADP	IN	_	52	case	_	_
51	the	the	DET	DT	Definite=Def|PronType=Art	52	det	_	_
52	Diary	Diary	PROPN	NNP	Number=Sing	49	nmod	_	_
53	of	of	ADP	IN	_	54	case	_	_
54	General	General	PROPN	NNP	Number=Sing	52	nmod	_	Entity=(person-127
55	Patrick	Patrick	PROPN	NNP	Number=Sing	54	flat	_	_
56	Gordon	Gordon	PROPN	NNP	Number=Sing	54	flat	_	_
57	of	of	ADP	IN	_	58	case	_	_
58	Auchleuchries	Auchleuchries	PROPN	NNP	Number=Sing	54	nmod	_	Entity=(place-5)abstract-152)person-127)
59	(	(	PUNCT	-LRB-	_	60	punct	_	SpaceAfter=No
60	1635	1635	NUM	CD	NumType=Card	54	parataxis	_	Entity=(time-153)
61	–	–	ADP	IN	_	62	case	_	_
62	1699	1699	NUM	CD	NumType=Card	60	nmod	_	Entity=(time-154)|SpaceAfter=No
63	)	)	PUNCT	-RRB-	_	60	punct	_	SpaceAfter=No
64	,	,	PUNCT	,	_	49	punct	_	_
65	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	66	aux:pass	_	_
66	printed	print	VERB	VBN	Tense=Past|VerbForm=Part	21	conj	_	SpaceAfter=No
67	,	,	PUNCT	,	_	70	punct	_	_
68	under	under	ADP	IN	_	70	case	_	_
69	the	the	DET	DT	Definite=Def|PronType=Art	70	det	_	Entity=(abstract-155
70	editorship	editorship	NOUN	NN	Number=Sing	66	obl	_	_
71	of	of	ADP	IN	_	72	case	_	_
72	Joseph	Joseph	PROPN	NNP	Number=Sing	70	nmod	_	Entity=(person-156
73	Robertson	Robertson	PROPN	NNP	Number=Sing	72	flat	_	Entity=abstract-155)person-156)|SpaceAfter=No
74	,	,	PUNCT	,	_	78	punct	_	_
75	for	for	ADP	IN	_	78	case	_	_
76	the	the	DET	DT	Definite=Def|PronType=Art	78	det	_	Entity=(organization-157
77	Spalding	Spalding	PROPN	NNP	Number=Sing	78	compound	_	_
78	Club	Club	PROPN	NNP	Number=Sing	66	obl	_	Entity=organization-157)|SpaceAfter=No
79	,	,	PUNCT	,	_	81	punct	_	_
80	at	at	ADP	IN	_	81	case	_	_
81	Aberdeen	Aberdeen	PROPN	NNP	Number=Sing	66	obl	_	Entity=(place-158|SpaceAfter=No
82	,	,	PUNCT	,	_	83	punct	_	_
83	Scotland	Scotland	PROPN	NNP	Number=Sing	81	appos	_	Entity=(place-10)place-158)|SpaceAfter=No
84	,	,	PUNCT	,	_	85	punct	_	_
85	1859	1859	NUM	CD	NumType=Card	66	obl:tmod	_	Entity=(time-159)|SpaceAfter=No
86	.	.	PUNCT	.	_	21	punct	_	_

~~~


