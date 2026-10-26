---
layout: base
title:  'Statistics of dep in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `dep`

This relation is universal.

8 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-X.html">X</a></tt> (7; 88% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 dep	color:blue
1	The	the	DET	_	_	2	det	_	_
2	TCS	TCS	PROPN	_	_	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	allow	allow	VERB	_	_	0	root	_	_
5	the	the	DET	_	_	6	det	_	_
6	operator	operator	NOUN	_	Number=Sing	4	obj	_	_
7	to	to	PART	_	_	8	mark	_	_
8	set	set	VERB	_	_	4	xcomp	_	_
9	the	the	DET	_	_	12	det	_	_
10	LOL	lol	NOUN	_	Number=Sing	11	compound	_	_
11	delay	delay	NOUN	_	Number=Sing	12	nmod	_	_
12	timer	timer	NOUN	_	Number=Sing	8	obj	_	SpaceAfter=No
13	(	(	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	s	s	X	_	_	12	dep	_	SpaceAfter=No
15	)	)	PUNCT	_	_	14	punct	_	_
16	during	during	ADP	_	_	18	case	_	_
17	mission	mission	NOUN	_	Number=Sing	18	compound	_	_
18	planning	planning	NOUN	_	Number=Sing	8	obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_
20	[	[	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	SSS075	SSS075	PROPN	_	_	4	appos	_	SpaceAfter=No
22	]	]	PUNCT	_	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 87	bgColor:blue
# visual-style 87	fgColor:white
# visual-style 85	bgColor:blue
# visual-style 85	fgColor:white
# visual-style 85 87 dep	color:blue
1	Track	track	VERB	_	_	0	root	_	_
2	and	and	CCONJ	_	_	3	cc	_	_
3	measure	measure	VERB	_	_	1	conj	_	_
4	alternative	alternative	ADJ	_	_	6	amod	_	_
5	source	source	NOUN	_	Number=Sing	6	compound	_	_
6	projects	project	NOUN	_	Number=Plur	1	obj	_	_
7	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	note	note	NOUN	_	Number=Sing	1	parataxis	_	SpaceAfter=No
9	:	:	PUNCT	_	_	15	punct	_	_
10	some	some	PRON	_	_	15	nsubj:pass	_	_
11	of	of	ADP	_	_	12	case	_	_
12	these	these	PRON	_	_	10	nmod	_	_
13	may	may	AUX	_	_	15	aux	_	_
14	be	be	AUX	_	Number=Sing|Tense=Pres	15	aux:pass	_	_
15	included	include	VERB	_	Tense=Past	8	parataxis	_	_
16	in	in	ADP	_	_	17	case	_	_
17	table	table	NOUN	_	Number=Sing	15	obl	_	_
18	8	8	NUM	_	_	17	flat	_	SpaceAfter=No
19	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
20	:	:	PUNCT	_	_	23	punct	_	LineAfter=Yes
21	•	•	PUNCT	_	_	23	punct	_	_
22	Surface	surface	NOUN	_	Number=Sing	23	amod	_	_
23	water	water	NOUN	_	Number=Sing	26	compound	_	_
24	or	or	CCONJ	_	_	25	cc	_	_
25	stormwater	stormwater	NOUN	_	Number=Sing	23	conj	_	_
26	projects	project	NOUN	_	Number=Plur	1	parataxis	_	SpaceAfter=No
27	.	.	PUNCT	_	_	26	punct	_	LineAfter=Yes
28	•	•	PUNCT	_	_	30	punct	_	_
29	Reclaimed	reclaimed	ADJ	_	_	30	amod	_	_
30	water	water	NOUN	_	Number=Sing	26	list	_	_
31	(	(	PUNCT	_	_	33	punct	_	SpaceAfter=No
32	reuse	reuse	ADJ	_	_	33	amod	_	_
33	water	water	NOUN	_	Number=Sing	30	appos	_	SpaceAfter=No
34	)	)	PUNCT	_	_	33	punct	_	SpaceAfter=No
35	.	.	PUNCT	_	_	30	punct	_	LineAfter=Yes
36	•	•	PUNCT	_	_	39	punct	_	_
37	Augmented	augmented	ADJ	_	_	39	amod	_	_
38	surface	surface	NOUN	_	Number=Sing	39	amod	_	_
39	water	water	NOUN	_	Number=Sing	26	list	_	_
40	(	(	PUNCT	_	_	41	punct	_	SpaceAfter=No
41	reservoirs	reservoir	NOUN	_	Number=Plur	39	appos	_	SpaceAfter=No
42	,	,	PUNCT	_	_	43	punct	_	_
43	harvesting	harvesting	NOUN	_	Number=Sing	41	conj	_	_
44	of	of	ADP	_	_	46	case	_	_
45	high	high	ADJ	_	_	46	amod	_	_
46	flows	flow	NOUN	_	Number=Plur	43	nmod	_	_
47	(	(	PUNCT	_	_	48	punct	_	SpaceAfter=No
48	floodwaters	floodwater	NOUN	_	Number=Plur	46	appos	_	SpaceAfter=No
49	)	)	PUNCT	_	_	48	punct	_	SpaceAfter=No
50	.	.	PUNCT	_	_	39	punct	_	LineAfter=Yes
51	•	•	PUNCT	_	_	52	punct	_	_
52	ASR	asr	NOUN	_	Number=Sing	26	list	_	_
53	(	(	PUNCT	_	_	55	punct	_	SpaceAfter=No
54	Aquifer	aquifer	NOUN	_	Number=Sing	55	nmod	_	_
55	storage	storage	NOUN	_	Number=Sing	52	appos	_	_
56	recovery	recovery	NOUN	_	Number=Sing	55	conj	_	SpaceAfter=No
57	)	)	PUNCT	_	_	55	punct	_	LineAfter=Yes
58	•	•	PUNCT	_	_	59	punct	_	_
59	Desalination	desalination	NOUN	_	Number=Sing	26	list	_	SpaceAfter=No
60	.	.	PUNCT	_	_	59	punct	_	LineAfter=Yes
61	•	•	PUNCT	_	_	62	punct	_	_
62	Conservation	conservation	NOUN	_	Number=Sing	26	list	_	_
63	(	(	PUNCT	_	_	64	punct	_	SpaceAfter=No
64	defined	defined	ADJ	_	_	62	acl	_	_
65	as	as	ADP	_	_	68	case	_	_
66	a	a	DET	_	_	68	det	_	_
67	beneficial	beneficial	ADJ	_	_	68	amod	_	_
68	reduction	reduction	NOUN	_	Number=Sing	64	obl	_	_
69	of	of	ADP	_	_	71	case	_	_
70	water	water	NOUN	_	Number=Sing	71	nmod	_	_
71	use	use	NOUN	_	Number=Sing	68	nmod	_	_
72	resulting	result	VERB	_	Tense=Past	68	acl	_	_
73	in	in	ADP	_	_	76	case	_	SpaceAfter=No
74	:	:	PUNCT	_	_	76	punct	_	LineAfter=Yes
75	o	o	PUNCT	_	_	76	punct	_	_
76	modification	modification	NOUN	_	Number=Sing	72	obl	_	_
77	of	of	ADP	_	_	80	case	_	_
78	water	water	NOUN	_	Number=Sing	79	nmod	_	_
79	use	use	NOUN	_	Number=Sing	80	nmod	_	_
80	practices	practice	NOUN	_	Number=Plur	76	nmod	_	SpaceAfter=No
81	,	,	PUNCT	_	_	83	punct	_	LineAfter=Yes
82	o	o	PUNCT	_	_	83	punct	_	_
83	reduction	reduction	NOUN	_	Number=Sing	76	conj	_	_
84	of	of	ADP	_	_	88	case	_	_
85	unaccounted	unaccount	VERB	_	Tense=Past	88	acl	_	SpaceAfter=No
86	-	-	PUNCT	_	_	87	punct	_	SpaceAfter=No
87	for	for	ADP	_	_	85	dep	_	_
88	losses	loss	NOUN	_	Number=Plur	83	nmod	_	SpaceAfter=No
89	,	,	PUNCT	_	_	92	punct	_	_
90	or	or	CCONJ	_	_	92	cc	_	LineAfter=Yes
91	o	o	PUNCT	_	_	92	punct	_	_
92	installation	installation	NOUN	_	Number=Sing	76	conj	_	_
93	and	and	CCONJ	_	_	94	cc	_	_
94	maintenance	maintenance	NOUN	_	Number=Sing	92	conj	_	_
95	of	of	ADP	_	_	100	case	_	_
96	low	low	ADJ	_	_	97	amod	_	_
97	volume	volume	NOUN	_	Number=Sing	100	nmod	_	_
98	water	water	NOUN	_	Number=Sing	99	nmod	_	_
99	use	use	NOUN	_	Number=Sing	100	nmod	_	_
100	systems	system	NOUN	_	Number=Plur	92	nmod	_	SpaceAfter=No
101	,	,	PUNCT	_	_	102	punct	_	_
102	processes	process	NOUN	_	Number=Plur	100	conj	_	SpaceAfter=No
103	,	,	PUNCT	_	_	104	punct	_	_
104	fixtures	fixture	NOUN	_	Number=Plur	100	conj	_	SpaceAfter=No
105	,	,	PUNCT	_	_	107	punct	_	_
106	or	or	CCONJ	_	_	107	cc	_	_
107	devices	device	NOUN	_	Number=Plur	100	conj	_	SpaceAfter=No
108	.	.	PUNCT	_	_	1	punct	_	_

~~~


