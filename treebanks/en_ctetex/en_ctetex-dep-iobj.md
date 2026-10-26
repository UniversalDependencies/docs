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
1	The	the	DET	_	_	2	det	_	_
2	system	system	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	provide	provide	VERB	_	_	0	root	_	_
5	the	the	DET	_	_	6	det	_	_
6	capability	capability	NOUN	_	Number=Sing	4	obj	_	_
7	for	for	ADP	_	_	9	case	_	_
8	user	user	NOUN	_	Number=Sing	9	nmod	_	_
9	groups	group	NOUN	_	Number=Plur	4	iobj	_	_
10	to	to	PART	_	_	12	mark	_	_
11	be	be	AUX	_	Number=Sing|Tense=Pres	12	aux:pass	_	_
12	combined	combine	VERB	_	Tense=Past	6	xcomp	_	_
13	and	and	CCONJ	_	_	16	cc	_	_
14	de	de	ADV	_	_	16	advmod	_	SpaceAfter=No
15	-	-	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	combined	combine	VERB	_	Tense=Past	12	conj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 57 iobj	color:blue
1	NPAC	NPAC	PROPN	_	_	2	nmod	_	_
2	SMS	sms	NOUN	_	Number=Sing	30	nsubj	_	_
3	shall	shall	AUX	_	_	30	aux	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	upon	upon	SCONJ	_	_	6	mark	_	_
6	broadcasting	broadcast	VERB	_	Tense=Past	30	advcl	_	_
7	the	the	DET	_	_	8	det	_	_
8	delete	delete	VERB	_	_	6	obj	_	_
9	of	of	ADP	_	_	12	case	_	_
10	the	the	DET	_	_	12	det	_	_
11	Subscription	subscription	NOUN	_	Number=Sing	12	compound	_	_
12	Version	version	NOUN	_	Number=Sing	8	nmod	_	_
13	to	to	ADP	_	_	16	case	_	_
14	EDR	EDR	PROPN	_	_	16	amod	_	_
15	Local	local	ADJ	_	_	16	amod	_	_
16	SMSs	sms	NOUN	_	Number=Plur	6	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	and	and	CCONJ	_	_	19	cc	_	_
19	create	create	VERB	_	_	6	conj	_	_
20	of	of	ADP	_	_	22	case	_	_
21	Subscription	subscription	NOUN	_	Number=Sing	22	nmod	_	_
22	Version	version	NOUN	_	Number=Sing	19	nmod	_	_
23	to	to	ADP	_	_	28	case	_	_
24	non	non	ADV	_	_	26	advmod	_	SpaceAfter=No
25	-	-	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	EDR	EDR	PROPN	_	_	28	amod	_	_
27	Local	local	ADJ	_	_	28	amod	_	_
28	SMSs	sms	NOUN	_	Number=Plur	6	obl	_	SpaceAfter=No
29	,	,	PUNCT	_	_	6	punct	_	_
30	set	set	VERB	_	_	0	root	_	_
31	the	the	DET	_	_	32	det	_	_
32	status	status	NOUN	_	Number=Sing	30	obj	_	_
33	of	of	ADP	_	_	38	case	_	_
34	the	the	DET	_	_	38	det	_	_
35	previously	previously	ADV	_	_	36	advmod	_	_
36	active	active	ADJ	_	_	38	amod	_	_
37	Subscription	subscription	NOUN	_	Number=Sing	38	nmod	_	_
38	Version	version	NOUN	_	Number=Sing	32	obj	_	_
39	being	be	AUX	_	_	40	aux	_	_
40	disconnected	disconnect	VERB	_	Tense=Past	38	acl	_	_
41	due	due	ADP	_	_	49	case	_	_
42	to	to	ADP	_	_	41	fixed	_	_
43	the	the	DET	_	_	49	det	_	_
44	port	port	VERB	_	_	49	acl	_	SpaceAfter=No
45	-	-	PUNCT	_	_	46	punct	_	SpaceAfter=No
46	to	to	ADP	_	_	48	case	_	SpaceAfter=No
47	-	-	PUNCT	_	_	48	punct	_	SpaceAfter=No
48	original	original	ADJ	_	_	44	obl	_	_
49	request	request	NOUN	_	Number=Sing	40	obl	_	_
50	to	to	ADP	_	_	57	case	_	SpaceAfter=No
51	:	:	PUNCT	_	_	50	punct	_	_
52	(	(	PUNCT	_	_	54	punct	_	SpaceAfter=No
53	Previously	previously	ADV	_	_	54	advmod	_	_
54	SV-423.3	SV-423.3	PROPN	_	_	30	appos	_	SpaceAfter=No
55	)	)	PUNCT	_	_	54	punct	_	LineAfter=Yes
56	•	•	PUNCT	_	_	57	punct	_	_
57	Active	active	ADJ	_	_	30	iobj	_	SpaceAfter=No
58	,	,	PUNCT	_	_	69	punct	_	_
59	if	if	SCONJ	_	_	69	mark	_	_
60	ALL	all	DET	_	_	67	det	_	_
61	EDR	EDR	PROPN	_	_	67	amod	_	_
62	and	and	CCONJ	_	_	65	cc	_	_
63	non	non	ADV	_	_	65	advmod	_	SpaceAfter=No
64	-	-	PUNCT	_	_	65	punct	_	SpaceAfter=No
65	EDR	EDR	PROPN	_	_	61	conj	_	_
66	Local	local	ADJ	_	_	67	amod	_	_
67	SMSs	sms	NOUN	_	Number=Plur	69	nsubj	_	SpaceAfter=No
68	,	,	PUNCT	_	_	69	punct	_	_
69	fail	fail	VERB	_	_	57	advcl	_	_
70	the	the	DET	_	_	71	det	_	_
71	broadcast	broadcast	NOUN	_	Number=Sing	69	obj	_	SpaceAfter=No
72	.	.	PUNCT	_	_	57	punct	_	LineAfter=Yes
73	•	•	PUNCT	_	_	74	punct	_	_
74	Old	old	ADJ	_	_	57	list	_	SpaceAfter=No
75	,	,	PUNCT	_	_	79	punct	_	_
76	for	for	ADP	_	_	79	case	_	_
77	all	all	DET	_	_	79	det	_	_
78	other	other	ADJ	_	_	79	amod	_	_
79	cases	case	NOUN	_	Number=Plur	74	obl	_	SpaceAfter=No
80	.	.	PUNCT	_	_	74	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 19 iobj	color:blue
1	NPAC	NPAC	PROPN	_	_	2	nmod	_	_
2	SMS	sms	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	validate	validate	VERB	_	_	0	root	_	_
5	that	that	SCONJ	_	_	17	mark	_	_
6	the	the	DET	_	_	9	det	_	_
7	old	old	ADJ	_	_	9	amod	_	_
8	Service	service	NOUN	_	Number=Sing	9	compound	_	_
9	Provider	provider	NOUN	_	Number=Sing	17	nsubj	_	_
10	in	in	ADP	_	_	13	case	_	_
11	the	the	DET	_	_	13	det	_	_
12	create	create	VERB	_	_	13	compound	_	_
13	message	message	NOUN	_	Number=Sing	9	nmod	_	_
14	is	be	AUX	_	Number=Sing|Tense=Pres	17	cop	_	_
15	the	the	DET	_	_	17	det	_	_
16	Service	service	NOUN	_	Number=Sing	17	compound	_	_
17	Provider	provider	NOUN	_	Number=Sing	4	ccomp	_	_
18	to	to	PART	_	_	19	case	_	_
19	which	which	PRON	_	_	25	iobj	_	_
20	the	the	DET	_	_	21	det	_	_
21	TN	tn	NOUN	_	Number=Sing	23	nmod	_	SpaceAfter=No
22	’s	’s	PART	_	_	21	case	_	_
23	NPA-NXX	NPA-NXX	PROPN	_	_	25	nsubj:pass	_	_
24	is	be	AUX	_	Number=Sing|Tense=Pres	25	aux:pass	_	_
25	assigned	assign	VERB	_	Tense=Past	17	acl:relcl	_	_
26	(	(	PUNCT	_	_	28	punct	_	SpaceAfter=No
27	as	as	SCONJ	_	_	28	mark	_	_
28	stored	store	VERB	_	Tense=Past	17	advcl	_	_
29	in	in	ADP	_	_	36	case	_	_
30	the	the	DET	_	_	36	det	_	_
31	NPAC	NPAC	PROPN	_	_	32	nmod	_	_
32	SMS	sms	NOUN	_	Number=Sing	34	nmod	_	_
33	service	service	NOUN	_	Number=Sing	34	compound	_	_
34	provider	provider	NOUN	_	Number=Sing	36	nmod	_	_
35	data	data	NOUN	_	Number=Sing	36	compound	_	_
36	tables	table	NOUN	_	Number=Plur	28	obl	_	SpaceAfter=No
37	)	)	PUNCT	_	_	28	punct	_	_
38	if	if	SCONJ	_	_	40	mark	_	_
39	there	there	PRON	_	_	40	expl	_	_
40	is	be	VERB	_	Number=Sing	4	advcl	_	_
41	currently	currently	ADV	_	_	40	advmod	_	_
42	no	no	DET	_	_	45	det	_	_
43	active	active	ADJ	_	_	45	amod	_	_
44	Subscription	subscription	NOUN	_	Number=Sing	45	nmod	_	_
45	Version	version	NOUN	_	Number=Sing	40	nsubj	_	_
46	for	for	ADP	_	_	48	case	_	_
47	the	the	DET	_	_	48	det	_	_
48	TN	tn	NOUN	_	Number=Sing	45	nmod	_	_
49	in	in	ADP	_	_	52	case	_	_
50	the	the	DET	_	_	52	det	_	_
51	NPAC	NPAC	PROPN	_	_	52	nmod	_	_
52	SMS	sms	NOUN	_	Number=Sing	40	obl	_	SpaceAfter=No
53	.	.	PUNCT	_	_	4	punct	_	_

~~~


