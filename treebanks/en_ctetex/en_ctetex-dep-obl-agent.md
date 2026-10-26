---
layout: base
title:  'Statistics of obl:agent in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_ctetex-dep-obl.html">obl</a></tt>.

22 nodes (0%) are attached to their parents as `obl:agent`.

17 instances of `obl:agent` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (17; 77% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (4; 18% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:agent	color:blue
1	The	the	DET	_	_	2	det	_	_
2	query	query	NOUN	_	Number=Sing	5	nsubj:pass	_	_
3	will	will	AUX	_	_	5	aux	_	_
4	be	be	AUX	_	Number=Sing|Tense=Pres	5	aux:pass	_	_
5	verified	verify	VERB	_	Tense=Past	0	root	_	_
6	by	by	ADP	_	_	8	case	_	_
7	the	the	DET	_	_	8	det	_	_
8	application	application	NOUN	_	Number=Sing	5	obl:agent	_	_
9	and	and	CCONJ	_	_	14	cc	_	_
10	SQL	SQL	PROPN	_	_	11	compound	_	_
11	errors	error	NOUN	_	Number=Plur	14	nsubj:pass	_	_
12	will	will	AUX	_	_	14	aux	_	_
13	be	be	AUX	_	Number=Sing|Tense=Pres	14	aux:pass	_	_
14	reported	report	VERB	_	Tense=Past	5	conj	_	_
15	to	to	ADP	_	_	17	case	_	_
16	the	the	DET	_	_	17	det	_	_
17	user	user	NOUN	_	Number=Sing	14	iobj	_	_
18	for	for	ADP	_	_	19	case	_	_
19	correction	correction	NOUN	_	Number=Sing	14	obl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 obl:agent	color:blue
1	ASPERA-3	ASPERA-3	PROPN	_	_	6	nmod	_	_
2	and	and	CCONJ	_	_	4	cc	_	_
3	MEX	MEX	PROPN	_	_	4	nmod	_	_
4	OA	oa	NOUN	_	Number=Sing	1	conj	_	_
5	IDFS	idfs	NOUN	_	Number=Sing	6	nmod	_	_
6	data	data	NOUN	_	Number=Sing	25	nsubj:pass	_	_
7	and	and	CCONJ	_	_	13	cc	_	_
8	any	any	DET	_	_	13	det	_	_
9	APAF	APAF	PROPN	_	_	11	obl:agent	_	SpaceAfter=No
10	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	generated	generate	VERB	_	Tense=Past	13	acl	_	_
12	intermediate	intermediate	ADJ	_	_	13	amod	_	_
13	files	file	NOUN	_	Number=Plur	6	conj	_	_
14	of	of	ADP	_	_	22	case	_	_
15	ASPERA-3	ASPERA-3	PROPN	_	_	22	nmod	_	_
16	and	and	CCONJ	_	_	18	cc	_	_
17	MEX	MEX	PROPN	_	_	18	nmod	_	_
18	OA	OA	PROPN	_	_	15	conj	_	_
19	cleaned	clean	VERB	_	Tense=Past	22	acl	_	SpaceAfter=No
20	-	-	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	up	up	ADP	_	_	19	compound	_	_
22	telemetry	telemetry	NOUN	_	Number=Sing	13	nmod	_	_
23	shall	shall	AUX	_	_	25	aux	_	_
24	be	be	AUX	_	Number=Sing|Tense=Pres	25	aux:pass	_	_
25	provided	provide	VERB	_	Tense=Past	0	root	_	_
26	to	to	ADP	_	_	29	case	_	_
27	all	all	DET	_	_	29	det	_	_
28	ASPERA-3	ASPERA-3	PROPN	_	_	29	nmod	_	_
29	Co-I’s	co-i’	NOUN	_	Number=Plur	25	obl	_	SpaceAfter=No
30	.	.	PUNCT	_	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 39 obl:agent	color:blue
1	As	as	ADP	_	_	2	case	_	_
2	part	part	NOUN	_	Number=Sing	15	obl	_	_
3	of	of	ADP	_	_	5	case	_	_
4	System	system	NOUN	_	Number=Sing	5	nmod	_	_
5	Initialization	initialization	NOUN	_	Number=Sing	2	nmod	_	_
6	,	,	PUNCT	_	_	2	punct	_	_
7	the	the	DET	_	_	9	det	_	_
8	Boot	boot	VERB	_	_	9	compound	_	_
9	ROM	rom	NOUN	_	Number=Sing	15	nsubj:pass	_	_
10	shall	shall	AUX	_	_	15	aux	_	_
11	[	[	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	SRS234	SRS234	PROPN	_	_	9	appos	_	SpaceAfter=No
13	]	]	PUNCT	_	_	12	punct	_	_
14	be	be	AUX	_	Number=Sing|Tense=Pres	15	aux:pass	_	_
15	configured	configure	VERB	_	Tense=Past	0	root	_	_
16	to	to	PART	_	_	22	mark	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	after	after	ADP	_	_	19	mark	_	_
19	completing	complete	VERB	_	Tense=Past	22	advcl	_	_
20	IBIT	IBIT	PROPN	_	_	19	obj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	19	punct	_	_
22	call	call	VERB	_	_	15	xcomp	_	_
23	the	the	DET	_	_	30	det	_	_
24	manufacturer	manufacturer	NOUN	_	Number=Sing	26	obl:agent	_	SpaceAfter=No
25	-	-	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	supplied	supply	VERB	_	Tense=Past	30	acl	_	_
27	VxWorks	VxWorks	PROPN	_	_	30	nmod	_	_
28	Board	board	NOUN	_	Number=Sing	30	nmod	_	_
29	Support	support	NOUN	_	Number=Sing	30	compound	_	_
30	Package	package	NOUN	_	Number=Sing	35	nmod	_	_
31	(	(	PUNCT	_	_	32	punct	_	SpaceAfter=No
32	BSP	bsp	NOUN	_	Number=Sing	30	appos	_	SpaceAfter=No
33	)	)	PUNCT	_	_	32	punct	_	_
34	initialization	initialization	NOUN	_	Number=Sing	35	compound	_	_
35	software	software	NOUN	_	Number=Sing	22	obj	_	_
36	followed	followed	ADJ	_	_	22	advcl	_	_
37	by	by	ADP	_	_	39	case	_	_
38	a	a	DET	_	_	39	det	_	_
39	call	call	NOUN	_	Number=Sing	36	obl:agent	_	_
40	to	to	ADP	_	_	45	case	_	_
41	the	the	DET	_	_	45	det	_	_
42	FTSS	ftss	NOUN	_	Number=Sing	45	nmod	_	_
43	System	system	NOUN	_	Number=Sing	44	nmod	_	_
44	Initialization	initialization	NOUN	_	Number=Sing	45	compound	_	_
45	software	software	NOUN	_	Number=Sing	39	nmod	_	SpaceAfter=No
46	.	.	PUNCT	_	_	15	punct	_	_

~~~


