---
layout: base
title:  'Statistics of acl in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_ctetex-dep-acl-relcl.html">acl:relcl</a></tt>.

125 nodes (1%) are attached to their parents as `acl`.

111 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.312.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (114; 91% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl	color:blue
1	RAM	ram	NOUN	_	Number=Sing	2	nmod	_	_
2	scrub	scrub	NOUN	_	Number=Sing	8	nsubj	_	_
3	shall	shall	AUX	_	_	8	aux	_	_
4	[	[	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	SRS275	SRS275	PROPN	_	_	2	appos	_	SpaceAfter=No
6	]	]	PUNCT	_	_	5	punct	_	_
7	not	not	PART	_	_	8	advmod	_	_
8	scrub	scrub	VERB	_	_	0	root	_	_
9	the	the	DET	_	_	10	det	_	_
10	area	area	NOUN	_	Number=Sing	8	obj	_	_
11	used	use	VERB	_	Tense=Past	10	acl	_	_
12	for	for	ADP	_	_	14	case	_	_
13	telemetry	telemetry	NOUN	_	Number=Sing	14	nmod	_	_
14	data	data	NOUN	_	Number=Sing	11	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Examples	example	NOUN	_	Number=Plur	9	nsubj	_	_
2	of	of	ADP	_	_	3	case	_	_
3	information	information	NOUN	_	Number=Sing	1	nmod	_	_
4	available	available	ADJ	_	_	3	acl	_	_
5	from	from	ADP	_	_	8	case	_	_
6	an	an	DET	_	_	8	det	_	_
7	operating	operating	NOUN	_	Number=Sing	8	compound	_	_
8	system	system	NOUN	_	Number=Sing	4	obl	_	_
9	include	include	VERB	_	_	0	root	_	_
10	indications	indication	NOUN	_	Number=Plur	9	obj	_	_
11	that	that	SCONJ	_	_	17	mark	_	_
12	a	a	DET	_	_	14	det	_	_
13	specified	specified	ADJ	_	_	14	amod	_	_
14	file	file	NOUN	_	Number=Sing	17	nsubj	_	_
15	does	do	AUX	_	_	17	aux	_	_
16	ot	ot	PART	_	_	17	advmod	_	_
17	exist	exist	VERB	_	_	10	acl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	25	punct	_	_
19	that	that	SCONJ	_	_	25	mark	_	_
20	a	a	DET	_	_	21	det	_	_
21	file	file	NOUN	_	Number=Sing	25	nsubj:pass	_	_
22	can	can	AUX	_	_	25	aux	_	SpaceAfter=No
23	not	not	PART	_	_	25	advmod	_	_
24	be	be	AUX	_	Number=Sing|Tense=Pres	25	aux:pass	_	_
25	opened	open	VERB	_	Tense=Past	17	conj	_	_
26	due	due	ADP	_	_	30	case	_	_
27	to	to	ADP	_	_	26	fixed	_	_
28	file	file	NOUN	_	Number=Sing	29	compound	_	_
29	protection	protection	NOUN	_	Number=Sing	30	nmod	_	_
30	violations	violation	NOUN	_	Number=Plur	25	obl	_	SpaceAfter=No
31	,	,	PUNCT	_	_	35	punct	_	_
32	or	or	CCONJ	_	_	35	cc	_	_
33	that	that	SCONJ	_	_	35	mark	_	_
34	errors	error	NOUN	_	Number=Plur	35	nsubj	_	_
35	occurred	occur	VERB	_	Tense=Past	17	conj	_	_
36	during	during	ADP	_	_	40	case	_	_
37	I	i	NOUN	_	Number=Sing	40	nmod	_	SpaceAfter=No
38	/	/	SYM	_	_	39	cc	_	SpaceAfter=No
39	O	o	NOUN	_	Number=Sing	37	conj	_	_
40	operations	operation	NOUN	_	Number=Plur	35	obl	_	SpaceAfter=No
41	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 77	bgColor:blue
# visual-style 77	fgColor:white
# visual-style 76	bgColor:blue
# visual-style 76	fgColor:white
# visual-style 76 77 acl	color:blue
1	ESPC	ESPC	PROPN	_	_	2	nmod	_	_
2	Operations	operation	NOUN	_	Number=Plur	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	provide	provide	VERB	_	_	0	root	_	_
5	an	an	DET	_	_	6	det	_	_
6	interface	interface	NOUN	_	Number=Sing	4	obj	_	_
7	between	between	ADP	_	_	8	case	_	_
8	NDE	NDE	PROPN	_	_	6	nmod	_	_
9	and	and	CCONJ	_	_	14	cc	_	_
10	the	the	DET	_	_	14	det	_	_
11	NPOESS	NPOESS	PROPN	_	_	14	nmod	_	_
12	Mission	mission	NOUN	_	Number=Sing	13	compound	_	_
13	Management	management	NOUN	_	Number=Sing	14	compound	_	_
14	Center	center	NOUN	_	Number=Sing	8	conj	_	_
15	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	MMC	MMC	PROPN	_	_	14	appos	_	SpaceAfter=No
17	)	)	PUNCT	_	_	16	punct	_	_
18	such	such	ADJ	_	ExtPos=SCONJ	36	mark	_	_
19	that	that	SCONJ	_	_	18	fixed	_	_
20	100	100	NUM	_	_	21	nummod	_	SpaceAfter=No
21	%	%	SYM	_	_	36	nsubj:pass	_	_
22	of	of	ADP	_	_	25	case	_	_
23	the	the	DET	_	_	25	det	_	_
24	NDE	NDE	PROPN	_	_	25	nmod	_	_
25	inquiries	inquirie	NOUN	_	Number=Plur	21	nmod	_	_
26	to	to	ADP	_	_	28	case	_	_
27	the	the	DET	_	_	28	det	_	_
28	MMC	MMC	PROPN	_	_	25	nmod	_	_
29	and	and	CCONJ	_	_	31	cc	_	_
30	NDE	NDE	PROPN	_	_	31	nmod	_	_
31	replies	replie	NOUN	_	Number=Plur	25	conj	_	_
32	to	to	ADP	_	_	34	case	_	_
33	MMC	MMC	PROPN	_	_	34	nmod	_	_
34	requests	request	NOUN	_	Number=Plur	31	nmod	_	_
35	are	be	AUX	_	Number=Plur|Tense=Pres	36	aux:pass	_	_
36	received	receive	VERB	_	Tense=Past	6	acl	_	_
37	by	by	ADP	_	_	39	case	_	_
38	the	the	DET	_	_	39	det	_	_
39	MMC	MMC	PROPN	_	_	36	obl:agent	_	_
40	in	in	ADP	_	_	42	case	_	_
41	a	a	DET	_	_	42	det	_	_
42	time	time	NOUN	_	Number=Sing	36	obl	_	_
43	not	not	PART	_	_	45	advmod	_	_
44	to	to	PART	_	_	45	mark	_	_
45	exceed	exceed	VERB	_	_	42	acl	_	_
46	that	that	PRON	_	_	45	obj	_	_
47	specified	specify	VERB	_	Tense=Past	46	acl	_	_
48	in	in	ADP	_	_	50	case	_	_
49	the	the	DET	_	_	50	det	_	_
50	ICD	icd	NOUN	_	Number=Sing	47	obl	_	SpaceAfter=No
51	,	,	PUNCT	_	_	67	punct	_	_
52	and	and	CCONJ	_	_	67	cc	_	_
53	that	that	SCONJ	_	_	67	mark	_	_
54	100	100	NUM	_	_	55	nummod	_	SpaceAfter=No
55	%	%	SYM	_	_	67	nsubj:pass	_	_
56	of	of	ADP	_	_	58	case	_	_
57	the	the	DET	_	_	58	det	_	_
58	notifications	notification	NOUN	_	Number=Plur	55	nmod	_	_
59	and	and	CCONJ	_	_	60	cc	_	_
60	inquiries	inquirie	NOUN	_	Number=Plur	58	conj	_	_
61	from	from	ADP	_	_	63	case	_	_
62	the	the	DET	_	_	63	det	_	_
63	MMC	MMC	PROPN	_	_	58	nmod	_	_
64	to	to	ADP	_	_	65	case	_	_
65	NDE	NDE	PROPN	_	_	58	nmod	_	_
66	are	be	AUX	_	Number=Plur|Tense=Pres	67	aux:pass	_	_
67	received	receive	VERB	_	Tense=Past	36	conj	_	_
68	by	by	ADP	_	_	69	case	_	_
69	NDE	NDE	PROPN	_	_	67	obl:agent	_	_
70	in	in	ADP	_	_	72	case	_	_
71	a	a	DET	_	_	72	det	_	_
72	time	time	NOUN	_	Number=Sing	67	obl	_	_
73	not	not	PART	_	_	75	advmod	_	_
74	to	to	PART	_	_	75	mark	_	_
75	exceed	exceed	VERB	_	Tense=Past	72	acl	_	_
76	that	that	PRON	_	_	75	obj	_	_
77	specified	specify	VERB	_	Tense=Past	76	acl	_	_
78	by	by	ADP	_	_	80	case	_	_
79	the	the	DET	_	_	80	det	_	_
80	ICD	icd	NOUN	_	Number=Sing	77	obl:agent	_	SpaceAfter=No
81	.	.	PUNCT	_	_	4	punct	_	_

~~~


