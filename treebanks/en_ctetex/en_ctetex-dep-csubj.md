---
layout: base
title:  'Statistics of csubj in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_ctetex-dep-csubj-pass.html">csubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	It	_	PRON	_	_	4	expl	_	_
2	shall	_	AUX	_	_	4	aux	_	_
3	be	_	AUX	_	_	4	cop	_	_
4	possible	_	ADJ	_	_	0	root	_	_
5	to	_	PART	_	_	6	mark	_	_
6	send	_	VERB	_	_	4	csubj	_	_
7	information	_	NOUN	_	_	6	obj	_	_
8	regarding	_	ADP	_	_	10	case	_	_
9	the	_	DET	_	_	10	det	_	_
10	inhibition	_	NOUN	_	_	7	nmod	_	_
11	of	_	ADP	_	_	15	case	_	_
12	the	_	DET	_	_	15	det	_	_
13	following	_	ADJ	_	_	15	amod	_	_
14	different	_	ADJ	_	_	15	amod	_	_
15	types	_	NOUN	_	_	10	nmod	_	_
16	of	_	ADP	_	_	17	case	_	_
17	brake	_	NOUN	_	_	15	nmod	_	SpaceAfter=No
18	(	_	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	M	_	ADJ	_	_	4	advmod	_	SpaceAfter=No
20	)	_	PUNCT	_	_	19	punct	_	SpaceAfter=No
21	:	_	PUNCT	_	_	24	punct	_	LineAfter=Yes
22	-	_	PUNCT	_	_	24	punct	_	_
23	Regenerative	_	ADJ	_	_	24	amod	_	_
24	brake	_	NOUN	_	_	4	parataxis	_	SpaceAfter=No
25	,	_	PUNCT	_	_	29	punct	_	LineAfter=Yes
26	-	_	PUNCT	_	_	29	punct	_	_
27	Eddy	_	NOUN	_	_	28	compound	_	_
28	current	_	NOUN	_	_	29	compound	_	_
29	brake	_	NOUN	_	_	24	list	_	SpaceAfter=No
30	,	_	PUNCT	_	_	34	punct	_	LineAfter=Yes
31	-	_	PUNCT	_	_	34	punct	_	_
32	Magnetic	_	ADJ	_	_	33	amod	_	_
33	shoe	_	NOUN	_	_	34	compound	_	_
34	brake	_	NOUN	_	_	24	list	_	SpaceAfter=No
35	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	It	_	PRON	_	_	2	expl	_	_
2	is	_	AUX	_	_	0	root	_	_
3	kind	_	ADV	_	_	9	advmod	_	SpaceAfter=No
4	-	_	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	of	_	ADP	_	_	3	fixed	_	SpaceAfter=No
6	-	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	like	_	SCONJ	_	_	9	mark	_	_
8	“	_	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	leasing	_	VERB	_	_	2	csubj	_	SpaceAfter=No
10	”	_	PUNCT	_	_	9	punct	_	_
11	the	_	DET	_	_	12	det	_	_
12	water	_	NOUN	_	_	9	obj	_	SpaceAfter=No
13	,	_	PUNCT	_	_	17	punct	_	_
14	but	_	CCONJ	_	_	17	cc	_	_
15	can	_	AUX	_	_	17	aux	_	_
16	be	_	AUX	_	_	17	aux:pass	_	_
17	taken	_	VERB	_	_	9	conj	_	_
18	away	_	ADV	_	_	17	advmod	_	SpaceAfter=No
19	)	_	PUNCT	_	_	2	punct	_	SpaceAfter=No
20	.	_	PUNCT	_	_	2	punct	_	_

~~~


