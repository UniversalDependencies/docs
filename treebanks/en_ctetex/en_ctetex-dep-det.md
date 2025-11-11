---
layout: base
title:  'Statistics of det in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `det`

This relation is universal.

920 nodes (10%) are attached to their parents as `det`.

919 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06086956521739.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (883; 96% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (29; 3% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	The	the	DET	_	_	2	det	_	_
2	NE	ne	NOUN	_	Number=Sing	4	nsubj	_	_
3	will	will	AUX	_	_	4	aux	_	_
4	remain	remain	VERB	_	_	0	root	_	_
5	in	in	ADP	_	_	7	case	_	_
6	the	the	DET	_	_	7	det	_	_
7	CT	ct	NOUN	_	Number=Sing	4	obl	_	_
8	and	and	CCONJ	_	_	12	cc	_	_
9	no	no	DET	_	_	10	det	_	_
10	recovery	recovery	NOUN	_	Number=Sing	12	nsubj	_	_
11	will	will	AUX	_	_	12	aux	_	_
12	take	take	VERB	_	_	4	conj	_	_
13	place	place	NOUN	_	Number=Sing	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	The	the	DET	_	_	2	det	_	_
2	FPMS	FPMS	PROPN	_	_	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	obtain	obtain	VERB	_	_	0	root	_	_
5	the	the	DET	_	_	6	det	_	_
6	list	list	NOUN	_	Number=Sing	4	obj	_	_
7	of	of	ADP	_	_	8	case	_	_
8	airports	airport	NOUN	_	Number=Plur	6	nmod	_	_
9	from	from	ADP	_	_	11	case	_	_
10	the	the	DET	_	_	11	det	_	_
11	airport.xml	airport.xml	SYM	_	_	4	obl	_	_
12	file	file	NOUN	_	Number=Sing	11	compound	_	_
13	upon	upon	ADP	_	_	14	case	_	_
14	initialization	initialization	NOUN	_	Number=Sing	4	obl	_	_
15	of	of	ADP	_	_	17	case	_	_
16	the	the	DET	_	_	17	det	_	_
17	system	system	NOUN	_	Number=Sing	14	nmod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	When	when	SCONJ	_	_	15	mark	_	_
2	a	a	DET	_	_	3	det	_	_
3	valid	valid	ADJ	_	_	6	amod	_	_
4	NAS	NAS	PROPN	_	_	6	nmod	_	_
5	Cancellation	cancellation	NOUN	_	Number=Sing	6	compound	_	_
6	message	message	NOUN	_	Number=Sing	15	nsubj:pass	_	_
7	or	or	CCONJ	_	_	13	cc	_	_
8	an	an	DET	_	_	13	det	_	_
9	IADE	IADE	PROPN	_	_	13	nmod	_	_
10	Flight	flight	NOUN	_	Number=Sing	11	compound	_	_
11	Plan	plan	NOUN	_	Number=Sing	12	compound	_	_
12	Cancellation	cancellation	NOUN	_	Number=Sing	13	compound	_	_
13	message	message	NOUN	_	Number=Sing	6	conj	_	_
14	is	be	AUX	_	Number=Sing|Tense=Pres	15	aux:pass	_	_
15	received	receive	VERB	_	Tense=Past	61	advcl	_	_
16	for	for	ADP	_	_	18	case	_	_
17	a	a	DET	_	_	18	det	_	_
18	flight	flight	NOUN	_	Number=Sing	15	obl	_	_
19	having	have	VERB	_	Tense=Past	18	acl	_	_
20	the	the	DET	_	_	21	det	_	_
21	status	status	NOUN	_	Number=Sing	19	obj	_	_
22	of	of	ADP	_	_	24	case	_	_
23	"	"	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	planned	planned	ADJ	_	_	21	nmod	_	SpaceAfter=No
25	"	"	PUNCT	_	_	24	punct	_	_
26	and	and	CCONJ	_	_	36	cc	_	_
27	no	no	DET	_	_	33	det	_	_
28	Flight	flight	NOUN	_	Number=Sing	29	compound	_	_
29	Create	create	VERB	_	_	33	compound	_	_
30	or	or	CCONJ	_	_	32	cc	_	_
31	Flight	flight	NOUN	_	Number=Sing	32	compound	_	_
32	Modify	modify	VERB	_	_	29	conj	_	_
33	message	message	NOUN	_	Number=Sing	36	nsubj:pass	_	_
34	has	have	AUX	_	_	36	aux	_	_
35	been	be	AUX	_	Number=Sing|Tense=Past	36	aux:pass	_	_
36	received	receive	VERB	_	Tense=Past	15	conj	_	_
37	for	for	ADP	_	_	39	case	_	_
38	the	the	DET	_	_	39	det	_	_
39	flight	flight	NOUN	_	Number=Sing	36	obl	_	_
40	and	and	CCONJ	_	_	45	cc	_	_
41	no	no	DET	_	_	44	det	_	_
42	other	other	ADJ	_	_	44	amod	_	_
43	flight	flight	NOUN	_	Number=Sing	44	compound	_	_
44	plan	plan	NOUN	_	Number=Sing	45	nsubj	_	_
45	exists	exist	VERB	_	Number=Sing	15	conj	_	_
46	for	for	ADP	_	_	48	case	_	_
47	the	the	DET	_	_	48	det	_	_
48	flight	flight	NOUN	_	Number=Sing	45	obl	_	_
49	in	in	ADP	_	_	56	case	_	_
50	a	a	DET	_	_	56	det	_	_
51	"	"	PUNCT	_	_	54	punct	_	SpaceAfter=No
52	non	non	ADV	_	_	54	advmod	_	SpaceAfter=No
53	-	-	PUNCT	_	_	54	punct	_	SpaceAfter=No
54	cancelled	cancelled	ADJ	_	_	56	amod	_	SpaceAfter=No
55	"	"	PUNCT	_	_	54	punct	_	_
56	status	status	NOUN	_	Number=Sing	48	nmod	_	SpaceAfter=No
57	,	,	PUNCT	_	_	15	punct	_	_
58	the	the	DET	_	_	59	det	_	_
59	system	system	NOUN	_	Number=Sing	61	nsubj	_	_
60	shall	shall	AUX	_	_	61	aux	_	_
61	update	update	VERB	_	_	0	root	_	_
62	the	the	DET	_	_	65	det	_	_
63	flight	flight	NOUN	_	Number=Sing	65	nmod	_	SpaceAfter=No
64	's	's	PART	_	_	63	case	_	_
65	status	status	NOUN	_	Number=Sing	61	obj	_	_
66	to	to	ADP	_	_	68	case	_	_
67	"	"	PUNCT	_	_	68	punct	_	SpaceAfter=No
68	cancelled	cancelled	ADJ	_	_	61	obl	_	SpaceAfter=No
69	"	"	PUNCT	_	_	68	punct	_	SpaceAfter=No
70	.	.	PUNCT	_	_	61	punct	_	_

~~~


