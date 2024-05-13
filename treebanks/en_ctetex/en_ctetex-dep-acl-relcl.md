---
layout: base
title:  'Statistics of acl:relcl in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_ctetex-dep-acl.html">acl</a></tt>.

28 nodes (0%) are attached to their parents as `acl:relcl`.

28 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (22; 79% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (5; 18% instances), <tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Also	_	ADV	_	_	2	advmod	_	_
2	get	_	VERB	_	_	0	root	_	_
3	the	_	DET	_	_	5	det	_	_
4	cumulative	_	ADJ	_	_	5	amod	_	_
5	quantities	_	NOUN	_	_	2	obj	_	_
6	for	_	ADP	_	_	8	case	_	_
7	an	_	DET	_	_	8	det	_	_
8	area	_	NOUN	_	_	5	nmod	_	_
9	you	_	PRON	_	_	10	nsubj	_	_
10	enter	_	VERB	_	_	8	acl:relcl	_	_
11	manually	_	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl:relcl	color:blue
1	•	_	PUNCT	_	_	6	punct	_	_
2	An	_	DET	_	_	5	det	_	_
3	up	_	ADJ	_	_	5	amod	_	_
4	arrow	_	NOUN	_	_	5	compound	_	_
5	key	_	NOUN	_	_	6	nsubj	_	_
6	moves	_	VERB	_	_	0	root	_	_
7	the	_	DET	_	_	8	det	_	_
8	cursor	_	NOUN	_	_	6	obj	_	_
9	to	_	ADP	_	_	12	case	_	_
10	the	_	DET	_	_	12	det	_	_
11	closest	_	ADJ	_	_	12	amod	_	_
12	ancestor	_	NOUN	_	_	6	obl	_	_
13	that	_	PRON	_	_	16	nsubj	_	_
14	is	_	AUX	_	_	16	cop	_	_
15	not	_	PART	_	_	16	advmod	_	_
16	hidden	_	ADJ	_	_	12	acl:relcl	_	SpaceAfter=No
17	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 22 acl:relcl	color:blue
1	NPAC	_	PROPN	_	_	2	nmod	_	_
2	SMS	_	NOUN	_	_	4	nsubj	_	_
3	shall	_	AUX	_	_	4	aux	_	_
4	require	_	VERB	_	_	0	root	_	_
5	NPAC	_	PROPN	_	_	6	nmod	_	_
6	personnel	_	NOUN	_	_	4	obj	_	_
7	to	_	PART	_	_	8	mark	_	_
8	specify	_	VERB	_	_	4	xcomp	_	_
9	a	_	DET	_	_	11	det	_	_
10	TN	_	NOUN	_	_	11	nmod	_	_
11	Range	_	NOUN	_	_	8	obj	_	_
12	(	_	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	NPA-NXX-xxxx	_	PROPN	_	_	11	appos	_	_
14	through	_	ADP	_	_	15	case	_	_
15	yyyy	_	NUM	_	_	13	nmod	_	SpaceAfter=No
16	,	_	PUNCT	_	_	22	punct	_	_
17	where	_	SCONJ	_	_	22	mark	_	_
18	yyyy	_	NUM	_	_	22	nsubj	_	_
19	is	_	AUX	_	_	22	cop	_	_
20	greater	_	ADJ	_	_	22	advmod	_	_
21	than	_	SCONJ	_	_	20	fixed	_	_
22	xxxx	_	NUM	_	_	13	acl:relcl	_	SpaceAfter=No
23	)	_	PUNCT	_	_	13	punct	_	_
24	to	_	PART	_	_	25	mark	_	_
25	identify	_	VERB	_	_	11	acl	_	_
26	multiple	_	ADJ	_	_	28	amod	_	_
27	subscription	_	NOUN	_	_	28	nmod	_	_
28	versions	_	NOUN	_	_	25	obj	_	_
29	that	_	PRON	_	_	30	nsubj	_	_
30	contain	_	VERB	_	_	28	acl:relcl	_	_
31	a	_	DET	_	_	34	det	_	_
32	Failed	_	ADJ	_	_	33	amod	_	_
33	SP	_	NOUN	_	_	34	nmod	_	_
34	List	_	NOUN	_	_	30	obj	_	_
35	with	_	ADP	_	_	39	case	_	_
36	one	_	NUM	_	_	39	nummod	_	_
37	or	_	CCONJ	_	_	38	cc	_	_
38	more	_	ADV	_	_	36	conj	_	_
39	SPIDS	_	NOUN	_	_	34	nmod	_	SpaceAfter=No
40	,	_	PUNCT	_	_	43	punct	_	_
41	to	_	PART	_	_	43	mark	_	_
42	be	_	AUX	_	_	43	aux:pass	_	_
43	resent	_	VERB	_	_	11	acl	_	SpaceAfter=No
44	.	_	PUNCT	_	_	4	punct	_	_

~~~


