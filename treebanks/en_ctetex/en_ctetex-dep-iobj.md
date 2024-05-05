---
layout: base
title:  'Statistics of iobj in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `iobj`

This relation is universal.

24 nodes (0%) are attached to their parents as `iobj`.

23 instances of `iobj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66666666666667.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (20; 83% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 iobj	color:blue
1	The	_	DET	_	_	2	det	_	_
2	system	_	NOUN	_	_	4	nsubj	_	_
3	shall	_	AUX	_	_	4	aux	_	_
4	provide	_	VERB	_	_	0	root	_	_
5	the	_	DET	_	_	6	det	_	_
6	capability	_	NOUN	_	_	4	obj	_	_
7	for	_	ADP	_	_	9	case	_	_
8	user	_	NOUN	_	_	9	nmod	_	_
9	groups	_	NOUN	_	_	4	iobj	_	_
10	to	_	PART	_	_	12	mark	_	_
11	be	_	AUX	_	_	12	aux:pass	_	_
12	combined	_	VERB	_	_	6	xcomp	_	_
13	and	_	CCONJ	_	_	16	cc	_	_
14	de	_	ADV	_	_	16	advmod	_	SpaceAfter=No
15	-	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	combined	_	VERB	_	_	12	conj	_	SpaceAfter=No
17	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 57 iobj	color:blue
1	NPAC	_	PROPN	_	_	2	nmod	_	_
2	SMS	_	NOUN	_	_	30	nsubj	_	_
3	shall	_	AUX	_	_	30	aux	_	SpaceAfter=No
4	,	_	PUNCT	_	_	6	punct	_	_
5	upon	_	SCONJ	_	_	6	mark	_	_
6	broadcasting	_	VERB	_	_	30	advcl	_	_
7	the	_	DET	_	_	8	det	_	_
8	delete	_	VERB	_	_	6	obj	_	_
9	of	_	ADP	_	_	12	case	_	_
10	the	_	DET	_	_	12	det	_	_
11	Subscription	_	NOUN	_	_	12	compound	_	_
12	Version	_	NOUN	_	_	8	nmod	_	_
13	to	_	ADP	_	_	16	case	_	_
14	EDR	_	PROPN	_	_	16	amod	_	_
15	Local	_	ADJ	_	_	16	amod	_	_
16	SMSs	_	NOUN	_	_	6	obl	_	SpaceAfter=No
17	,	_	PUNCT	_	_	19	punct	_	_
18	and	_	CCONJ	_	_	19	cc	_	_
19	create	_	VERB	_	_	6	conj	_	_
20	of	_	ADP	_	_	22	case	_	_
21	Subscription	_	NOUN	_	_	22	nmod	_	_
22	Version	_	NOUN	_	_	19	nmod	_	_
23	to	_	ADP	_	_	28	case	_	_
24	non	_	ADV	_	_	26	advmod	_	SpaceAfter=No
25	-	_	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	EDR	_	PROPN	_	_	28	amod	_	_
27	Local	_	ADJ	_	_	28	amod	_	_
28	SMSs	_	NOUN	_	_	6	obl	_	SpaceAfter=No
29	,	_	PUNCT	_	_	6	punct	_	_
30	set	_	VERB	_	_	0	root	_	_
31	the	_	DET	_	_	32	det	_	_
32	status	_	NOUN	_	_	30	obj	_	_
33	of	_	ADP	_	_	38	case	_	_
34	the	_	DET	_	_	38	det	_	_
35	previously	_	ADV	_	_	36	advmod	_	_
36	active	_	ADJ	_	_	38	amod	_	_
37	Subscription	_	NOUN	_	_	38	nmod	_	_
38	Version	_	NOUN	_	_	32	obj	_	_
39	being	_	AUX	_	_	40	aux	_	_
40	disconnected	_	VERB	_	_	38	acl	_	_
41	due	_	ADP	_	_	49	case	_	_
42	to	_	ADP	_	_	41	fixed	_	_
43	the	_	DET	_	_	49	det	_	_
44	port	_	VERB	_	_	49	acl	_	SpaceAfter=No
45	-	_	PUNCT	_	_	46	punct	_	SpaceAfter=No
46	to	_	ADP	_	_	48	case	_	SpaceAfter=No
47	-	_	PUNCT	_	_	48	punct	_	SpaceAfter=No
48	original	_	ADJ	_	_	44	obl	_	_
49	request	_	NOUN	_	_	40	obl	_	_
50	to	_	ADP	_	_	57	case	_	SpaceAfter=No
51	:	_	PUNCT	_	_	50	punct	_	_
52	(	_	PUNCT	_	_	54	punct	_	SpaceAfter=No
53	Previously	_	ADV	_	_	54	advmod	_	_
54	SV-423.3	_	PROPN	_	_	30	appos	_	SpaceAfter=No
55	)	_	PUNCT	_	_	54	punct	_	LineAfter=Yes
56	•	_	PUNCT	_	_	57	punct	_	_
57	Active	_	ADJ	_	_	30	iobj	_	SpaceAfter=No
58	,	_	PUNCT	_	_	69	punct	_	_
59	if	_	SCONJ	_	_	69	mark	_	_
60	ALL	_	DET	_	_	67	det	_	_
61	EDR	_	PROPN	_	_	67	amod	_	_
62	and	_	CCONJ	_	_	65	cc	_	_
63	non	_	ADV	_	_	65	advmod	_	SpaceAfter=No
64	-	_	PUNCT	_	_	65	punct	_	SpaceAfter=No
65	EDR	_	PROPN	_	_	61	conj	_	_
66	Local	_	ADJ	_	_	67	amod	_	_
67	SMSs	_	NOUN	_	_	69	nsubj	_	SpaceAfter=No
68	,	_	PUNCT	_	_	69	punct	_	_
69	fail	_	VERB	_	_	57	advcl	_	_
70	the	_	DET	_	_	71	det	_	_
71	broadcast	_	NOUN	_	_	69	obj	_	SpaceAfter=No
72	.	_	PUNCT	_	_	57	punct	_	LineAfter=Yes
73	•	_	PUNCT	_	_	74	punct	_	_
74	Old	_	ADJ	_	_	57	list	_	SpaceAfter=No
75	,	_	PUNCT	_	_	79	punct	_	_
76	for	_	ADP	_	_	79	case	_	_
77	all	_	DET	_	_	79	det	_	_
78	other	_	ADJ	_	_	79	amod	_	_
79	cases	_	NOUN	_	_	74	obl	_	SpaceAfter=No
80	.	_	PUNCT	_	_	74	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 19 iobj	color:blue
1	NPAC	_	PROPN	_	_	2	nmod	_	_
2	SMS	_	NOUN	_	_	4	nsubj	_	_
3	shall	_	AUX	_	_	4	aux	_	_
4	validate	_	VERB	_	_	0	root	_	_
5	that	_	SCONJ	_	_	17	mark	_	_
6	the	_	DET	_	_	9	det	_	_
7	old	_	ADJ	_	_	9	amod	_	_
8	Service	_	NOUN	_	_	9	compound	_	_
9	Provider	_	NOUN	_	_	17	nsubj	_	_
10	in	_	ADP	_	_	13	case	_	_
11	the	_	DET	_	_	13	det	_	_
12	create	_	VERB	_	_	13	compound	_	_
13	message	_	NOUN	_	_	9	nmod	_	_
14	is	_	AUX	_	_	17	cop	_	_
15	the	_	DET	_	_	17	det	_	_
16	Service	_	NOUN	_	_	17	compound	_	_
17	Provider	_	NOUN	_	_	4	ccomp	_	_
18	to	_	PART	_	_	19	case	_	_
19	which	_	PRON	_	_	25	iobj	_	_
20	the	_	DET	_	_	21	det	_	_
21	TN	_	NOUN	_	_	23	nmod	_	SpaceAfter=No
22	’s	_	PART	_	_	21	case	_	_
23	NPA-NXX	_	PROPN	_	_	25	nsubj:pass	_	_
24	is	_	AUX	_	_	25	aux:pass	_	_
25	assigned	_	VERB	_	_	17	acl:relcl	_	_
26	(	_	PUNCT	_	_	28	punct	_	SpaceAfter=No
27	as	_	SCONJ	_	_	28	mark	_	_
28	stored	_	VERB	_	_	17	advcl	_	_
29	in	_	ADP	_	_	36	case	_	_
30	the	_	DET	_	_	36	det	_	_
31	NPAC	_	PROPN	_	_	32	nmod	_	_
32	SMS	_	NOUN	_	_	34	nmod	_	_
33	service	_	NOUN	_	_	34	compound	_	_
34	provider	_	NOUN	_	_	36	nmod	_	_
35	data	_	NOUN	_	_	36	compound	_	_
36	tables	_	NOUN	_	_	28	obl	_	SpaceAfter=No
37	)	_	PUNCT	_	_	28	punct	_	_
38	if	_	SCONJ	_	_	40	mark	_	_
39	there	_	PRON	_	_	40	expl	_	_
40	is	_	VERB	_	_	4	advcl	_	_
41	currently	_	ADV	_	_	40	advmod	_	_
42	no	_	DET	_	_	45	det	_	_
43	active	_	ADJ	_	_	45	amod	_	_
44	Subscription	_	NOUN	_	_	45	nmod	_	_
45	Version	_	NOUN	_	_	40	nsubj	_	_
46	for	_	ADP	_	_	48	case	_	_
47	the	_	DET	_	_	48	det	_	_
48	TN	_	NOUN	_	_	45	nmod	_	_
49	in	_	ADP	_	_	52	case	_	_
50	the	_	DET	_	_	52	det	_	_
51	NPAC	_	PROPN	_	_	52	nmod	_	_
52	SMS	_	NOUN	_	_	40	obl	_	SpaceAfter=No
53	.	_	PUNCT	_	_	4	punct	_	_

~~~


