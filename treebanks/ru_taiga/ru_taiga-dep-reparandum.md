---
layout: base
title:  'Statistics of reparandum in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `reparandum`

This relation is universal.

15 nodes (0%) are attached to their parents as `reparandum`.

9 instances of `reparandum` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2.

The following 8 pairs of parts of speech are connected with `reparandum`: <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (7; 47% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 reparandum	color:blue
1	А	а	CCONJ	_	_	2	cc	_	_
2	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	reparandum	_	_
3	а	а	CCONJ	_	_	5	cc	_	_
4	у	у	ADP	_	_	5	case	_	_
5	вас	вы	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	0	root	_	_
6	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj	_	SpaceAfter=No
7	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 33 reparandum	color:blue
1	иван	Иван	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	3	nsubj	_	_
2	иванович	Иванович	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Patrn|Number=Sing	1	flat:name	_	_
3	запнулся	запнуться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
4	так	так	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
5	немножечко	немножечко	ADV	_	Degree=Pos	6	advmod	_	_
6	запнулся	запнуться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	3	conj	_	_
7	за	запнуться	VERB	_	_	6	conj	_	_
8	п	п	X	_	_	7	reparandum	_	SpaceAfter=No
9	[	[	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	ы	ы	X	_	_	8	parataxis	_	SpaceAfter=No
11	]	]	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	...	...	PUNCT	_	_	8	punct	_	_
13	п	п	X	_	_	8	conj	_	SpaceAfter=No
14	[	[	PUNCT	_	_	15	punct	_	SpaceAfter=No
15	ы	ы	X	_	_	13	parataxis	_	SpaceAfter=No
16	]	]	PUNCT	_	_	15	punct	_	SpaceAfter=No
17	...	...	PUNCT	_	_	13	punct	_	_
18	п	п	X	_	_	8	conj	_	SpaceAfter=No
19	[	[	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	ы	ы	X	_	_	18	parataxis	_	SpaceAfter=No
21	]	]	PUNCT	_	_	20	punct	_	SpaceAfter=No
22	...	...	PUNCT	_	_	18	punct	_	_
23	п	п	X	_	_	8	conj	_	SpaceAfter=No
24	[	[	PUNCT	_	_	25	punct	_	SpaceAfter=No
25	ы	ы	X	_	_	23	parataxis	_	SpaceAfter=No
26	]	]	PUNCT	_	_	25	punct	_	SpaceAfter=No
27	...	...	PUNCT	_	_	23	punct	_	_
28	п	п	X	_	_	8	conj	_	SpaceAfter=No
29	[	[	PUNCT	_	_	30	punct	_	SpaceAfter=No
30	ы	ы	X	_	_	28	parataxis	_	SpaceAfter=No
31	]	]	PUNCT	_	_	30	punct	_	SpaceAfter=No
32	...	...	PUNCT	_	_	28	punct	_	_
33	пнулся	запнуться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	7	reparandum	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 32 reparandum	color:blue
1	Аниме	аниме	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	была	быть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
3	на	на	ADP	_	_	4	case	_	_
4	ями	ями	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	compound	_	_
5	аниме	аниме	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	2	obl	_	_
6	там	там	ADV	_	Degree=Pos|PronType=Dem	2	advmod	_	_
7	где	где	SCONJ	_	_	9	mark	_	_
8	гг	гг	NOUN	_	Abbr=Yes	9	nsubj	_	_
9	верил	верить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	_
10	в	в	ADP	_	_	11	case	_	_
11	мистику	мистика	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
12	также	также	ADV	_	Degree=Pos	9	advmod	_	_
13	как	как	SCONJ	_	_	16	case	_	_
14	и	и	PART	_	_	16	advmod	_	_
15	его	его	DET	_	Poss=Yes|PronType=Prs	16	det	_	_
16	отец	отец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	obl	_	_
17	отец	отец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
18	отправился	отправиться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	1	parataxis	_	_
19	в	в	ADP	_	_	20	case	_	_
20	экспедицию	экспедиция	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	18	obl	_	_
21	за	за	ADP	_	_	22	case	_	_
22	поисками	поиск	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	18	obl	_	_
23	этой	этот	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	24	det	_	_
24	мистики	мистика	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	_
25	но	но	CCONJ	_	_	29	cc	_	_
26	так	так	ADV	_	Degree=Pos|PronType=Dem	29	advmod	_	_
27	и	и	PART	_	_	26	fixed	_	_
28	не	не	PART	_	Polarity=Neg	29	advmod	_	_
29	вернулся	вернуться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	18	conj	_	_
30	после	после	ADP	_	_	31	case	_	_
31	этого	это	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	39	obl	_	_
32	во	во	ADP	_	_	33	reparandum	_	_
33	на	на	ADP	_	_	35	case	_	_
34	следующий	следующий	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	35	amod	_	_
35	день	день	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	39	obl	_	_
36	мальчик	мальчик	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	39	nsubj	_	_
37	главный	главный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	38	amod	_	_
38	герой	герой	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	36	appos	_	_
39	пошел	пойти	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	parataxis	_	_
40	магазин	магазин	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	39	obl	_	_
41	за	за	ADP	_	_	42	case	_	_
42	книгой	книга	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	39	obl	_	_
43	точно	точно	ADV	_	Degree=Pos	45	advmod	_	_
44	не	не	PART	_	Polarity=Neg	45	advmod	_	_
45	помню	помнить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	42	parataxis	_	_
46	какая	какой	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	45	parataxis	_	_
47	но	но	CCONJ	_	_	50	cc	_	_
48	наверное	наверное	ADV	_	Degree=Pos	50	parataxis	_	_
49	про	про	ADP	_	_	50	case	_	_
50	мистику	мистика	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	46	conj	_	_
51	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	52	nsubj	_	_
52	пытался	пытаться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	18	parataxis	_	_
53	найти	найти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	52	xcomp	_	_
54	ответы	ответ	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	53	obj	_	_
55	и	и	CCONJ	_	_	58	cc	_	_
56	найти	найти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	53	conj	_	_
57	мистику	мистика	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	56	obj	_	_
58	увидел	увидеть	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	52	conj	_	_
59	как	как	SCONJ	_	_	61	mark	_	_
60	хулиганы	хулиган	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	61	nsubj	_	_
61	издевались	издеваться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	58	ccomp	_	_
62	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	63	nsubj	_	_
63	было	быть	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	61	parataxis	_	_
64	ночью	ночь	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	63	obl	_	_
65	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	66	nsubj	_	_
66	издевались	издеваться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	61	conj	_	_
67	над	над	ADP	_	_	68	case	_	_
68	девочкой	девочка	NOUN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	66	obl	_	SpaceAfter=No
69	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	70	nsubj	_	_
70	обронил	обронить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	39	conj	_	_
71	книгу	книга	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	70	obj	_	_
72	хулиган	хулиган	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	71	appos	_	_
73	это	это	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	74	obj	_	_
74	заметили	заметить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	39	conj	_	_
75	и	и	CCONJ	_	_	76	cc	_	_
76	забрали	забрать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	70	conj	_	_
77	книгу	книга	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	76	obj	_	_
78	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	79	nsubj	_	_
79	просил	просить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	74	parataxis	_	_
80	отдайте	отдать	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	79	parataxis	_	_
81	книгу	книга	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	80	obj	_	SpaceAfter=No
82	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	84	nsubj	_	_
83	не	не	PART	_	Polarity=Neg	84	advmod	_	_
84	отдавали	отдавать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	79	parataxis	_	_
85	после	после	ADP	_	_	86	case	_	_
86	этого	это	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	89	obl	_	_
87	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	89	nsubj	_	_
88	её	она	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	89	obj	_	_
89	забрал	забрать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	79	parataxis	_	_
90	быстро	быстро	ADV	_	Degree=Pos	91	advmod	_	_
91	побежал	побежать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	89	conj	_	_
92	вдоль	вдоль	ADP	_	_	94	case	_	_
93	какой-либо	какой-либо	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Ind	94	det	_	_
94	дороги	дорога	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	91	obl	_	SpaceAfter=No
95	после	после	ADP	_	_	96	case	_	_
96	этого	это	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	98	obl	_	_
97	его	он	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	98	obj	_	_
98	догнали	догнать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	89	parataxis	_	_
99	но	но	CCONJ	_	_	103	cc	_	_
100	одному	один	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Ind	103	iobj	_	_
101	из	из	ADP	_	_	102	case	_	_
102	хулиганов	хулиган	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	100	nmod	_	_
103	снял	снять	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	98	conj	_	_
104	штаны	штаны	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	103	obj	_	_
105	и	и	CCONJ	_	_	106	cc	_	_
106	опозорил	опозорить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	103	conj	_	_
107	его	он	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	106	obj	_	_
108	после	после	ADP	_	_	109	case	_	_
109	этого	это	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	111	obl	_	_
110	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	111	nsubj	_	_
111	догнал	догнать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	89	parataxis	_	_
112	этого	этот	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	113	det	_	_
113	мальчика	мальчик	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	111	obj	_	_
114	главного	главный	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	115	amod	_	_
115	героя	герой	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	113	appos	_	_
116	после	после	ADP	_	_	117	case	_	_
117	этого	это	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	122	obl	_	_
118	всего	весь	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	117	det	_	_
119	этот	этот	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	120	det	_	_
120	хулиган	хулиган	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	122	nsubj	_	_
121	какой-то	какой-то	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	120	det	_	_
122	произвел	произвести	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	89	parataxis	_	_
123	купол	купол	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	122	obj	_	_
124	синего	синий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	125	amod	_	_
125	цвета	цвет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	123	nmod	_	_
126	и	и	CCONJ	_	_	127	cc	_	_
127	призвал	призвать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	122	conj	_	_
128	какого-то	какой-то	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	129	det	_	_
129	мужика	мужик	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	127	obj	_	_
130	их	они	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	131	obj	_	_
131	звали	звать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	129	parataxis	_	_
132	клинками	клинок	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	131	iobj	_	_
133	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	134	nsubj	_	_
134	делились	делиться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	131	parataxis	_	_
135	на	на	ADP	_	_	136	case	_	_
136	пирамиды	пирамида	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	134	obl	_	_
137	классы	класс	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	144	nsubj	_	_
138	оружия	оружие	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	137	nmod	_	_
139	божественное	божественный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	137	amod	_	_
140	это	это	PART	_	_	144	expl	_	_
141	самое	самый	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Emp	140	det	_	_
142	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	144	cop	_	_
143	верховное	верховный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	144	amod	_	_
144	оружие	оружие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	131	parataxis	_	_
145	Но	но	CCONJ	_	_	148	cc	_	_
146	эти	этот	DET	_	Case=Nom|Number=Plur|PronType=Dem	147	det	_	_
147	оружия	оружие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	148	nsubj	_	_
148	выглядели	выглядеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	144	conj	_	_
149	как	как	SCONJ	_	_	150	case	_	_
150	люди	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	148	obl	_	_
151	У	у	ADP	_	_	152	case	_	_
152	хулигана	хулиган	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	131	parataxis	_	_
153	клинок	клинок	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	152	nsubj	_	_
154	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	152	cop	_	_
155	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	152	appos	_	_
156	с	с	ADP	_	_	158	case	_	_
157	большим	большой	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	158	amod	_	_
158	мячом	меч	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Typo=Yes	155	nmod	_	_
159	очень	очень	ADV	_	Degree=Pos	157	advmod	_	_
160	и	и	CCONJ	_	_	162	cc	_	_
161	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	162	nsubj	_	_
162	отрезал	отрезать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	152	conj	_	_
163	главному	главный	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	164	amod	_	_
164	герою	герой	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	162	iobj	_	_
165	кисти	кисть	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	162	obj	_	_
166	рук	рука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	165	nmod	_	_
167	вроде	вроде	ADV	_	Degree=Pos	165	advmod	_	_
168	и	и	CCONJ	_	_	169	cc	_	_
169	ног	нога	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	166	conj	_	_
170	Если	если	SCONJ	_	_	172	mark	_	_
171	не	не	PART	_	Polarity=Neg	172	advmod	_	_
172	ошибаюсь	ошибаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	162	advcl	_	SpaceAfter=No
173	.	.	PUNCT	_	_	1	punct	_	_

~~~


