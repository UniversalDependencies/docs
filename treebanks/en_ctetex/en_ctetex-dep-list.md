---
layout: base
title:  'Statistics of list in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `list`

This relation is universal.

116 nodes (1%) are attached to their parents as `list`.

116 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.1206896551724.

The following 9 pairs of parts of speech are connected with `list`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (88; 76% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (10; 9% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (6; 5% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 list	color:blue
1	The	_	DET	_	_	2	det	_	_
2	map	_	NOUN	_	_	5	nsubj	_	_
3	shall	_	AUX	_	_	5	aux	_	_
4	be	_	AUX	_	_	5	aux	_	_
5	capable	_	ADJ	_	_	0	root	_	_
6	of	_	SCONJ	_	_	7	mark	_	_
7	displaying	_	VERB	_	_	5	xcomp	_	_
8	the	_	DET	_	_	9	det	_	_
9	following	_	NOUN	_	_	7	obj	_	_
10	for	_	ADP	_	_	12	case	_	_
11	a	_	DET	_	_	12	det	_	_
12	DMS	_	NOUN	_	_	7	obl	_	SpaceAfter=No
13	:	_	PUNCT	_	_	16	punct	_	LineAfter=Yes
14	1	_	NUM	_	_	16	nummod	_	SpaceAfter=No
15	.	_	PUNCT	_	_	14	punct	_	_
16	Location	_	NOUN	_	_	7	parataxis	_	LineAfter=Yes
17	2	_	NUM	_	_	20	nummod	_	SpaceAfter=No
18	.	_	PUNCT	_	_	17	punct	_	_
19	Current	_	ADJ	_	_	20	amod	_	_
20	Message	_	NOUN	_	_	16	list	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 38 list	color:blue
1	Once	_	SCONJ	_	_	5	mark	_	_
2	an	_	DET	_	_	3	det	_	_
3	Center	_	NOUN	_	_	5	nsubj:pass	_	_
4	is	_	AUX	_	_	5	aux:pass	_	_
5	selected	_	VERB	_	_	11	advcl	_	SpaceAfter=No
6	,	_	PUNCT	_	_	5	punct	_	_
7	the	_	DET	_	_	8	det	_	_
8	user	_	NOUN	_	_	11	nsubj	_	_
9	shall	_	AUX	_	_	11	aux	_	_
10	be	_	AUX	_	_	11	cop	_	_
11	able	_	ADJ	_	_	0	root	_	_
12	to	_	PART	_	_	13	mark	_	_
13	select	_	VERB	_	_	11	xcomp	_	_
14	a	_	DET	_	_	15	det	_	_
15	CCTV	_	NOUN	_	_	13	obj	_	_
16	from	_	ADP	_	_	18	case	_	_
17	a	_	DET	_	_	18	det	_	_
18	list	_	NOUN	_	_	13	obl	_	_
19	and	_	CCONJ	_	_	20	cc	_	_
20	provide	_	VERB	_	_	13	conj	_	_
21	the	_	DET	_	_	23	det	_	_
22	following	_	ADJ	_	_	23	amod	_	_
23	information	_	NOUN	_	_	20	obj	_	SpaceAfter=No
24	:	_	PUNCT	_	_	27	punct	_	LineAfter=Yes
25	·	_	PUNCT	_	_	27	punct	_	_
26	Target	_	ADJ	_	_	27	amod	_	_
27	CCTV	_	NOUN	_	_	20	parataxis	_	LineAfter=Yes
28	·	_	PUNCT	_	_	30	punct	_	_
29	Device	_	NOUN	_	_	30	nmod	_	_
30	control	_	NOUN	_	_	27	list	_	_
31	including	_	ADP	_	_	34	case	_	SpaceAfter=No
32	:	_	PUNCT	_	_	34	punct	_	LineAfter=Yes
33	-	_	PUNCT	_	_	34	punct	_	_
34	Pan	_	VERB	_	_	30	nmod	_	LineAfter=Yes
35	-	_	PUNCT	_	_	36	punct	_	_
36	Tilt	_	VERB	_	_	34	list	_	LineAfter=Yes
37	-	_	PUNCT	_	_	38	punct	_	_
38	Zoom	_	VERB	_	_	34	list	_	_

~~~


~~~ conllu
# visual-style 78	bgColor:blue
# visual-style 78	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 78 list	color:blue
1	The	_	DET	_	_	2	det	_	_
2	formula	_	NOUN	_	_	9	nsubj	_	_
3	for	_	ADP	_	_	6	case	_	_
4	adjusted	_	ADJ	_	_	6	amod	_	_
5	gross	_	ADJ	_	_	6	amod	_	_
6	capita	_	NOUN	_	_	2	nmod	_	_
7	is	_	AUX	_	_	9	cop	_	SpaceAfter=No
8	:	_	PUNCT	_	_	7	punct	_	LineAfter=Yes
9	WD	_	NOUN	_	_	0	root	_	_
10	+	_	SYM	_	_	9	flat	_	Foreign=Yes
11	IM	_	NOUN	_	_	9	flat	_	Foreign=Yes
12	-	_	SYM	_	_	9	flat	_	Foreign=Yes
13	EX	_	NOUN	_	_	9	flat	_	Foreign=Yes
14	-	_	SYM	_	_	9	flat	_	SpaceAfter=No|Foreign=Yes
15	TL	_	NOUN	_	_	9	flat	_	Foreign=Yes
16	-	_	SYM	_	_	9	flat	_	Foreign=Yes
17	SU	_	NOUN	_	_	9	flat	_	Foreign=Yes
18	-	_	SYM	_	_	9	flat	_	Foreign=Yes
19	EM	_	NOUN	_	_	9	flat	_	Foreign=Yes
20	/	_	SYM	_	_	9	flat	_	Foreign=Yes|LineAfter=Yes
21	Population	_	NOUN	_	_	9	flat	_	Foreign=Yes|LineAfter=Yes
22	where	_	SCONJ	_	_	25	mark	_	SpaceAfter=No
23	:	_	PUNCT	_	_	25	punct	_	LineAfter=Yes
24	WD	_	NOUN	_	_	25	nsubj	_	_
25	=	_	SYM	_	_	9	advcl	_	_
26	ground	_	NOUN	_	_	31	nmod	_	_
27	water	_	X	_	_	26	goeswith	_	_
28	&	_	CCONJ	_	_	30	cc	_	_
29	surface	_	NOUN	_	_	30	compound	_	_
30	water	_	NOUN	_	_	26	conj	_	_
31	withdrawals	_	NOUN	_	_	25	obj	_	LineAfter=Yes
32	IM	_	NOUN	_	_	33	nsubj	_	_
33	=	_	SYM	_	_	25	list	_	_
34	water	_	NOUN	_	_	33	obj	_	_
35	imported	_	VERB	_	_	34	acl	_	SpaceAfter=No
36	/	_	SYM	_	_	37	cc	_	SpaceAfter=No
37	bought	_	VERB	_	_	35	conj	_	_
38	from	_	ADP	_	_	40	case	_	_
39	another	_	ADJ	_	_	40	amod	_	_
40	supplier	_	NOUN	_	_	35	obl	_	LineAfter=Yes
41	EX	_	NOUN	_	_	42	nsubj	_	_
42	=	_	SYM	_	_	25	list	_	_
43	Water	_	NOUN	_	_	42	obj	_	_
44	exported	_	VERB	_	_	43	acl	_	SpaceAfter=No
45	/	_	SYM	_	_	46	cc	_	SpaceAfter=No
46	sold	_	VERB	_	_	44	conj	_	_
47	to	_	ADP	_	_	49	case	_	_
48	other	_	ADJ	_	_	49	amod	_	_
49	suppliers	_	NOUN	_	_	44	iobj	_	LineAfter=Yes
50	TL	_	NOUN	_	_	51	nsubj	_	_
51	=	_	SYM	_	_	25	list	_	_
52	treatment	_	NOUN	_	_	53	compound	_	_
53	loss	_	NOUN	_	_	51	obj	_	_
54	(	_	PUNCT	_	_	56	punct	_	SpaceAfter=No
55	typically	_	ADV	_	_	56	advmod	_	_
56	R/O	_	NOUN	_	_	53	appos	_	_
57	or	_	CCONJ	_	_	59	cc	_	_
58	sand	_	NOUN	_	_	59	compound	_	_
59	filtration	_	NOUN	_	_	56	conj	_	LineAfter=Yes
60	SU	_	NOUN	_	_	61	nsubj	_	_
61	=	_	SYM	_	_	25	list	_	_
62	Significant	_	ADJ	_	_	63	amod	_	_
63	uses	_	NOUN	_	_	61	obj	_	LineAfter=Yes
64	EM	_	NOUN	_	_	65	nsubj	_	_
65	=	_	SYM	_	_	25	list	_	_
66	Environmental	_	ADJ	_	_	67	amod	_	_
67	mitigation	_	NOUN	_	_	65	obj	_	SpaceAfter=No
68	,	_	PUNCT	_	_	70	punct	_	_
69	if	_	SCONJ	_	_	70	mark	_	_
70	required	_	VERB	_	_	67	acl	_	_
71	as	_	ADP	_	_	75	case	_	_
72	a	_	DET	_	_	75	det	_	_
73	District	_	NOUN	_	_	74	compound	_	_
74	permit	_	NOUN	_	_	75	nmod	_	_
75	condition	_	NOUN	_	_	70	obl	_	SpaceAfter=No
76	.	_	PUNCT	_	_	65	punct	_	LineAfter=Yes
77	Population	_	NOUN	_	_	78	nsubj	_	_
78	=	_	SYM	_	_	25	list	_	_
79	Functional	_	ADJ	_	_	80	amod	_	_
80	population	_	NOUN	_	_	78	obj	_	_

~~~


