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
1	RAM	_	NOUN	_	_	2	nmod	_	_
2	scrub	_	NOUN	_	_	8	nsubj	_	_
3	shall	_	AUX	_	_	8	aux	_	_
4	[	_	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	SRS275	_	PROPN	_	_	2	appos	_	SpaceAfter=No
6	]	_	PUNCT	_	_	5	punct	_	_
7	not	_	PART	_	_	8	advmod	_	_
8	scrub	_	VERB	_	_	0	root	_	_
9	the	_	DET	_	_	10	det	_	_
10	area	_	NOUN	_	_	8	obj	_	_
11	used	_	VERB	_	_	10	acl	_	_
12	for	_	ADP	_	_	14	case	_	_
13	telemetry	_	NOUN	_	_	14	nmod	_	_
14	data	_	NOUN	_	_	11	obl	_	SpaceAfter=No
15	.	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Examples	_	NOUN	_	_	9	nsubj	_	_
2	of	_	ADP	_	_	3	case	_	_
3	information	_	NOUN	_	_	1	nmod	_	_
4	available	_	ADJ	_	_	3	acl	_	_
5	from	_	ADP	_	_	8	case	_	_
6	an	_	DET	_	_	8	det	_	_
7	operating	_	NOUN	_	_	8	compound	_	_
8	system	_	NOUN	_	_	4	obl	_	_
9	include	_	VERB	_	_	0	root	_	_
10	indications	_	NOUN	_	_	9	obj	_	_
11	that	_	SCONJ	_	_	17	mark	_	_
12	a	_	DET	_	_	14	det	_	_
13	specified	_	ADJ	_	_	14	amod	_	_
14	file	_	NOUN	_	_	17	nsubj	_	_
15	does	_	AUX	_	_	17	aux	_	_
16	ot	_	PART	_	_	17	advmod	_	_
17	exist	_	VERB	_	_	10	acl	_	SpaceAfter=No
18	,	_	PUNCT	_	_	25	punct	_	_
19	that	_	SCONJ	_	_	25	mark	_	_
20	a	_	DET	_	_	21	det	_	_
21	file	_	NOUN	_	_	25	nsubj:pass	_	_
22	can	_	AUX	_	_	25	aux	_	SpaceAfter=No
23	not	_	PART	_	_	25	advmod	_	_
24	be	_	AUX	_	_	25	aux:pass	_	_
25	opened	_	VERB	_	_	17	conj	_	_
26	due	_	ADP	_	_	30	case	_	_
27	to	_	ADP	_	_	26	fixed	_	_
28	file	_	NOUN	_	_	29	compound	_	_
29	protection	_	NOUN	_	_	30	nmod	_	_
30	violations	_	NOUN	_	_	25	obl	_	SpaceAfter=No
31	,	_	PUNCT	_	_	35	punct	_	_
32	or	_	CCONJ	_	_	35	cc	_	_
33	that	_	SCONJ	_	_	35	mark	_	_
34	errors	_	NOUN	_	_	35	nsubj	_	_
35	occurred	_	VERB	_	_	17	conj	_	_
36	during	_	ADP	_	_	40	case	_	_
37	I	_	NOUN	_	_	40	nmod	_	SpaceAfter=No
38	/	_	SYM	_	_	39	cc	_	SpaceAfter=No
39	O	_	NOUN	_	_	37	conj	_	_
40	operations	_	NOUN	_	_	35	obl	_	SpaceAfter=No
41	.	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 77	bgColor:blue
# visual-style 77	fgColor:white
# visual-style 76	bgColor:blue
# visual-style 76	fgColor:white
# visual-style 76 77 acl	color:blue
1	ESPC	_	PROPN	_	_	2	nmod	_	_
2	Operations	_	NOUN	_	_	4	nsubj	_	_
3	shall	_	AUX	_	_	4	aux	_	_
4	provide	_	VERB	_	_	0	root	_	_
5	an	_	DET	_	_	6	det	_	_
6	interface	_	NOUN	_	_	4	obj	_	_
7	between	_	ADP	_	_	8	case	_	_
8	NDE	_	PROPN	_	_	6	nmod	_	_
9	and	_	CCONJ	_	_	14	cc	_	_
10	the	_	DET	_	_	14	det	_	_
11	NPOESS	_	PROPN	_	_	14	nmod	_	_
12	Mission	_	NOUN	_	_	13	compound	_	_
13	Management	_	NOUN	_	_	14	compound	_	_
14	Center	_	NOUN	_	_	8	conj	_	_
15	(	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	MMC	_	PROPN	_	_	14	appos	_	SpaceAfter=No
17	)	_	PUNCT	_	_	16	punct	_	_
18	such	_	ADJ	_	_	36	mark	_	_
19	that	_	SCONJ	_	_	18	fixed	_	_
20	100	_	NUM	_	_	21	nummod	_	SpaceAfter=No
21	%	_	SYM	_	_	36	nsubj:pass	_	_
22	of	_	ADP	_	_	25	case	_	_
23	the	_	DET	_	_	25	det	_	_
24	NDE	_	PROPN	_	_	25	nmod	_	_
25	inquiries	_	NOUN	_	_	21	nmod	_	_
26	to	_	ADP	_	_	28	case	_	_
27	the	_	DET	_	_	28	det	_	_
28	MMC	_	PROPN	_	_	25	nmod	_	_
29	and	_	CCONJ	_	_	31	cc	_	_
30	NDE	_	PROPN	_	_	31	nmod	_	_
31	replies	_	NOUN	_	_	25	conj	_	_
32	to	_	ADP	_	_	34	case	_	_
33	MMC	_	PROPN	_	_	34	nmod	_	_
34	requests	_	NOUN	_	_	31	nmod	_	_
35	are	_	AUX	_	_	36	aux:pass	_	_
36	received	_	VERB	_	_	6	acl	_	_
37	by	_	ADP	_	_	39	case	_	_
38	the	_	DET	_	_	39	det	_	_
39	MMC	_	PROPN	_	_	36	obl:agent	_	_
40	in	_	ADP	_	_	42	case	_	_
41	a	_	DET	_	_	42	det	_	_
42	time	_	NOUN	_	_	36	obl	_	_
43	not	_	PART	_	_	45	advmod	_	_
44	to	_	PART	_	_	45	mark	_	_
45	exceed	_	VERB	_	_	42	acl	_	_
46	that	_	PRON	_	_	45	obj	_	_
47	specified	_	VERB	_	_	46	acl	_	_
48	in	_	ADP	_	_	50	case	_	_
49	the	_	DET	_	_	50	det	_	_
50	ICD	_	NOUN	_	_	47	obl	_	SpaceAfter=No
51	,	_	PUNCT	_	_	67	punct	_	_
52	and	_	CCONJ	_	_	67	cc	_	_
53	that	_	SCONJ	_	_	67	mark	_	_
54	100	_	NUM	_	_	55	nummod	_	SpaceAfter=No
55	%	_	SYM	_	_	67	nsubj:pass	_	_
56	of	_	ADP	_	_	58	case	_	_
57	the	_	DET	_	_	58	det	_	_
58	notifications	_	NOUN	_	_	55	nmod	_	_
59	and	_	CCONJ	_	_	60	cc	_	_
60	inquiries	_	NOUN	_	_	58	conj	_	_
61	from	_	ADP	_	_	63	case	_	_
62	the	_	DET	_	_	63	det	_	_
63	MMC	_	PROPN	_	_	58	nmod	_	_
64	to	_	ADP	_	_	65	case	_	_
65	NDE	_	PROPN	_	_	58	nmod	_	_
66	are	_	AUX	_	_	67	aux:pass	_	_
67	received	_	VERB	_	_	36	conj	_	_
68	by	_	ADP	_	_	69	case	_	_
69	NDE	_	PROPN	_	_	67	obl:agent	_	_
70	in	_	ADP	_	_	72	case	_	_
71	a	_	DET	_	_	72	det	_	_
72	time	_	NOUN	_	_	67	obl	_	_
73	not	_	PART	_	_	75	advmod	_	_
74	to	_	PART	_	_	75	mark	_	_
75	exceed	_	VERB	_	_	72	acl	_	_
76	that	_	PRON	_	_	75	obj	_	_
77	specified	_	VERB	_	_	76	acl	_	_
78	by	_	ADP	_	_	80	case	_	_
79	the	_	DET	_	_	80	det	_	_
80	ICD	_	NOUN	_	_	77	obl:agent	_	SpaceAfter=No
81	.	_	PUNCT	_	_	4	punct	_	_

~~~


