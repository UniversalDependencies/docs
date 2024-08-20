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
1	The	_	DET	_	_	2	det	_	_
2	query	_	NOUN	_	_	5	nsubj:pass	_	_
3	will	_	AUX	_	_	5	aux	_	_
4	be	_	AUX	_	_	5	aux:pass	_	_
5	verified	_	VERB	_	_	0	root	_	_
6	by	_	ADP	_	_	8	case	_	_
7	the	_	DET	_	_	8	det	_	_
8	application	_	NOUN	_	_	5	obl:agent	_	_
9	and	_	CCONJ	_	_	14	cc	_	_
10	SQL	_	PROPN	_	_	11	compound	_	_
11	errors	_	NOUN	_	_	14	nsubj:pass	_	_
12	will	_	AUX	_	_	14	aux	_	_
13	be	_	AUX	_	_	14	aux:pass	_	_
14	reported	_	VERB	_	_	5	conj	_	_
15	to	_	ADP	_	_	17	case	_	_
16	the	_	DET	_	_	17	det	_	_
17	user	_	NOUN	_	_	14	iobj	_	_
18	for	_	ADP	_	_	19	case	_	_
19	correction	_	NOUN	_	_	14	obl	_	SpaceAfter=No
20	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 obl:agent	color:blue
1	ASPERA-3	_	PROPN	_	_	6	nmod	_	_
2	and	_	CCONJ	_	_	4	cc	_	_
3	MEX	_	PROPN	_	_	4	nmod	_	_
4	OA	_	NOUN	_	_	1	conj	_	_
5	IDFS	_	NOUN	_	_	6	nmod	_	_
6	data	_	NOUN	_	_	25	nsubj:pass	_	_
7	and	_	CCONJ	_	_	13	cc	_	_
8	any	_	DET	_	_	13	det	_	_
9	APAF	_	PROPN	_	_	11	obl:agent	_	SpaceAfter=No
10	-	_	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	generated	_	VERB	_	_	13	acl	_	_
12	intermediate	_	ADJ	_	_	13	amod	_	_
13	files	_	NOUN	_	_	6	conj	_	_
14	of	_	ADP	_	_	22	case	_	_
15	ASPERA-3	_	PROPN	_	_	22	nmod	_	_
16	and	_	CCONJ	_	_	18	cc	_	_
17	MEX	_	PROPN	_	_	18	nmod	_	_
18	OA	_	PROPN	_	_	15	conj	_	_
19	cleaned	_	VERB	_	_	22	acl	_	SpaceAfter=No
20	-	_	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	up	_	ADP	_	_	19	compound	_	_
22	telemetry	_	NOUN	_	_	13	nmod	_	_
23	shall	_	AUX	_	_	25	aux	_	_
24	be	_	AUX	_	_	25	aux:pass	_	_
25	provided	_	VERB	_	_	0	root	_	_
26	to	_	ADP	_	_	29	case	_	_
27	all	_	DET	_	_	29	det	_	_
28	ASPERA-3	_	PROPN	_	_	29	nmod	_	_
29	Co-I’s	_	NOUN	_	_	25	obl	_	SpaceAfter=No
30	.	_	PUNCT	_	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 39 obl:agent	color:blue
1	As	_	ADP	_	_	2	case	_	_
2	part	_	NOUN	_	_	15	obl	_	_
3	of	_	ADP	_	_	5	case	_	_
4	System	_	NOUN	_	_	5	nmod	_	_
5	Initialization	_	NOUN	_	_	2	nmod	_	_
6	,	_	PUNCT	_	_	2	punct	_	_
7	the	_	DET	_	_	9	det	_	_
8	Boot	_	VERB	_	_	9	compound	_	_
9	ROM	_	NOUN	_	_	15	nsubj:pass	_	_
10	shall	_	AUX	_	_	15	aux	_	_
11	[	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	SRS234	_	PROPN	_	_	9	appos	_	SpaceAfter=No
13	]	_	PUNCT	_	_	12	punct	_	_
14	be	_	AUX	_	_	15	aux:pass	_	_
15	configured	_	VERB	_	_	0	root	_	_
16	to	_	PART	_	_	22	mark	_	SpaceAfter=No
17	,	_	PUNCT	_	_	19	punct	_	_
18	after	_	ADP	_	_	19	mark	_	_
19	completing	_	VERB	_	_	22	advcl	_	_
20	IBIT	_	PROPN	_	_	19	obj	_	SpaceAfter=No
21	,	_	PUNCT	_	_	19	punct	_	_
22	call	_	VERB	_	_	15	xcomp	_	_
23	the	_	DET	_	_	30	det	_	_
24	manufacturer	_	NOUN	_	_	26	obl:agent	_	SpaceAfter=No
25	-	_	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	supplied	_	VERB	_	_	30	acl	_	_
27	VxWorks	_	PROPN	_	_	30	nmod	_	_
28	Board	_	NOUN	_	_	30	nmod	_	_
29	Support	_	NOUN	_	_	30	compound	_	_
30	Package	_	NOUN	_	_	35	nmod	_	_
31	(	_	PUNCT	_	_	32	punct	_	SpaceAfter=No
32	BSP	_	NOUN	_	_	30	appos	_	SpaceAfter=No
33	)	_	PUNCT	_	_	32	punct	_	_
34	initialization	_	NOUN	_	_	35	compound	_	_
35	software	_	NOUN	_	_	22	obj	_	_
36	followed	_	ADJ	_	_	22	advcl	_	_
37	by	_	ADP	_	_	39	case	_	_
38	a	_	DET	_	_	39	det	_	_
39	call	_	NOUN	_	_	36	obl:agent	_	_
40	to	_	ADP	_	_	45	case	_	_
41	the	_	DET	_	_	45	det	_	_
42	FTSS	_	NOUN	_	_	45	nmod	_	_
43	System	_	NOUN	_	_	44	nmod	_	_
44	Initialization	_	NOUN	_	_	45	compound	_	_
45	software	_	NOUN	_	_	39	nmod	_	SpaceAfter=No
46	.	_	PUNCT	_	_	15	punct	_	_

~~~


