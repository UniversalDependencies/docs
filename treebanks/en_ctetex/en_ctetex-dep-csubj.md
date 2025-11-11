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
1	It	it	PRON	_	_	4	expl	_	_
2	shall	shall	AUX	_	_	4	aux	_	_
3	be	be	AUX	_	Number=Sing|Tense=Pres	4	cop	_	_
4	possible	possible	ADJ	_	_	0	root	_	_
5	to	to	PART	_	_	6	mark	_	_
6	send	send	VERB	_	_	4	csubj	_	_
7	information	information	NOUN	_	Number=Sing	6	obj	_	_
8	regarding	regarding	ADP	_	_	10	case	_	_
9	the	the	DET	_	_	10	det	_	_
10	inhibition	inhibition	NOUN	_	Number=Sing	7	nmod	_	_
11	of	of	ADP	_	_	15	case	_	_
12	the	the	DET	_	_	15	det	_	_
13	following	following	ADJ	_	_	15	amod	_	_
14	different	different	ADJ	_	_	15	amod	_	_
15	types	type	NOUN	_	Number=Plur	10	nmod	_	_
16	of	of	ADP	_	_	17	case	_	_
17	brake	brake	NOUN	_	Number=Sing	15	nmod	_	SpaceAfter=No
18	(	(	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	M	m	ADJ	_	_	4	advmod	_	SpaceAfter=No
20	)	)	PUNCT	_	_	19	punct	_	SpaceAfter=No
21	:	:	PUNCT	_	_	24	punct	_	LineAfter=Yes
22	-	-	PUNCT	_	_	24	punct	_	_
23	Regenerative	regenerative	ADJ	_	_	24	amod	_	_
24	brake	brake	NOUN	_	Number=Sing	4	parataxis	_	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	_	LineAfter=Yes
26	-	-	PUNCT	_	_	29	punct	_	_
27	Eddy	eddy	NOUN	_	Number=Sing	28	compound	_	_
28	current	current	NOUN	_	Number=Sing	29	compound	_	_
29	brake	brake	NOUN	_	Number=Sing	24	list	_	SpaceAfter=No
30	,	,	PUNCT	_	_	34	punct	_	LineAfter=Yes
31	-	-	PUNCT	_	_	34	punct	_	_
32	Magnetic	magnetic	ADJ	_	_	33	amod	_	_
33	shoe	shoe	NOUN	_	Number=Sing	34	compound	_	_
34	brake	brake	NOUN	_	Number=Sing	24	list	_	SpaceAfter=No
35	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	It	it	PRON	_	_	2	expl	_	_
2	is	be	AUX	_	Number=Sing|Tense=Pres	0	root	_	_
3	kind	kind	ADV	_	_	9	advmod	_	SpaceAfter=No
4	-	-	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	of	of	ADP	_	_	3	fixed	_	SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	like	like	SCONJ	_	_	9	mark	_	_
8	“	“	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	leasing	lease	VERB	_	Tense=Past	2	csubj	_	SpaceAfter=No
10	”	”	PUNCT	_	_	9	punct	_	_
11	the	the	DET	_	_	12	det	_	_
12	water	water	NOUN	_	Number=Sing	9	obj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	17	punct	_	_
14	but	but	CCONJ	_	_	17	cc	_	_
15	can	can	AUX	_	_	17	aux	_	_
16	be	be	AUX	_	Number=Sing|Tense=Pres	17	aux:pass	_	_
17	taken	take	VERB	_	_	9	conj	_	_
18	away	away	ADV	_	_	17	advmod	_	SpaceAfter=No
19	)	)	PUNCT	_	_	2	punct	_	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~


