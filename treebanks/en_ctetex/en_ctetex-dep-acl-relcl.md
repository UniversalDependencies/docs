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
1	Also	also	ADV	_	_	2	advmod	_	_
2	get	get	VERB	_	_	0	root	_	_
3	the	the	DET	_	_	5	det	_	_
4	cumulative	cumulative	ADJ	_	_	5	amod	_	_
5	quantities	quantity	NOUN	_	Number=Plur	2	obj	_	_
6	for	for	ADP	_	_	8	case	_	_
7	an	an	DET	_	_	8	det	_	_
8	area	area	NOUN	_	Number=Sing	5	nmod	_	_
9	you	you	PRON	_	_	10	nsubj	_	_
10	enter	enter	VERB	_	_	8	acl:relcl	_	_
11	manually	manually	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl:relcl	color:blue
1	•	•	PUNCT	_	_	6	punct	_	_
2	An	an	DET	_	_	5	det	_	_
3	up	up	ADJ	_	_	5	amod	_	_
4	arrow	arrow	NOUN	_	Number=Sing	5	compound	_	_
5	key	key	NOUN	_	Number=Sing	6	nsubj	_	_
6	moves	move	VERB	_	Number=Sing	0	root	_	_
7	the	the	DET	_	_	8	det	_	_
8	cursor	cursor	NOUN	_	Number=Sing	6	obj	_	_
9	to	to	ADP	_	_	12	case	_	_
10	the	the	DET	_	_	12	det	_	_
11	closest	closest	ADJ	_	_	12	amod	_	_
12	ancestor	ancestor	NOUN	_	Number=Sing	6	obl	_	_
13	that	that	PRON	_	_	16	nsubj	_	_
14	is	be	AUX	_	Number=Sing|Tense=Pres	16	cop	_	_
15	not	not	PART	_	_	16	advmod	_	_
16	hidden	hidden	ADJ	_	_	12	acl:relcl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 22 acl:relcl	color:blue
1	NPAC	NPAC	PROPN	_	_	2	nmod	_	_
2	SMS	sms	NOUN	_	Number=Sing	4	nsubj	_	_
3	shall	shall	AUX	_	_	4	aux	_	_
4	require	require	VERB	_	_	0	root	_	_
5	NPAC	NPAC	PROPN	_	_	6	nmod	_	_
6	personnel	personnel	NOUN	_	Number=Sing	4	obj	_	_
7	to	to	PART	_	_	8	mark	_	_
8	specify	specify	VERB	_	_	4	xcomp	_	_
9	a	a	DET	_	_	11	det	_	_
10	TN	tn	NOUN	_	Number=Sing	11	nmod	_	_
11	Range	range	NOUN	_	Number=Sing	8	obj	_	_
12	(	(	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	NPA-NXX-xxxx	NPA-NXX-xxxx	PROPN	_	_	11	appos	_	_
14	through	through	ADP	_	_	15	case	_	_
15	yyyy	yyyy	NUM	_	_	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	where	where	SCONJ	_	_	22	mark	_	_
18	yyyy	yyyy	NUM	_	_	22	nsubj	_	_
19	is	be	AUX	_	Number=Sing|Tense=Pres	22	cop	_	_
20	greater	greater	ADJ	_	_	22	advmod	_	_
21	than	than	SCONJ	_	_	20	fixed	_	_
22	xxxx	xxxx	NUM	_	_	13	acl:relcl	_	SpaceAfter=No
23	)	)	PUNCT	_	_	13	punct	_	_
24	to	to	PART	_	_	25	mark	_	_
25	identify	identify	VERB	_	_	11	acl	_	_
26	multiple	multiple	ADJ	_	_	28	amod	_	_
27	subscription	subscription	NOUN	_	Number=Sing	28	nmod	_	_
28	versions	version	NOUN	_	Number=Plur	25	obj	_	_
29	that	that	PRON	_	_	30	nsubj	_	_
30	contain	contain	VERB	_	_	28	acl:relcl	_	_
31	a	a	DET	_	_	34	det	_	_
32	Failed	failed	ADJ	_	_	33	amod	_	_
33	SP	sp	NOUN	_	Number=Sing	34	nmod	_	_
34	List	list	NOUN	_	Number=Sing	30	obj	_	_
35	with	with	ADP	_	_	39	case	_	_
36	one	one	NUM	_	_	39	nummod	_	_
37	or	or	CCONJ	_	_	38	cc	_	_
38	more	more	ADV	_	_	36	conj	_	_
39	SPIDS	spids	NOUN	_	Number=Sing	34	nmod	_	SpaceAfter=No
40	,	,	PUNCT	_	_	43	punct	_	_
41	to	to	PART	_	_	43	mark	_	_
42	be	be	AUX	_	Number=Sing|Tense=Pres	43	aux:pass	_	_
43	resent	resent	VERB	_	_	11	acl	_	SpaceAfter=No
44	.	.	PUNCT	_	_	4	punct	_	_

~~~


