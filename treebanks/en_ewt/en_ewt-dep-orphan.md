---
layout: base
title:  'Statistics of orphan in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `orphan`

This relation is universal.

26 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84615384615385.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (9; 35% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (3; 12% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|10.1:nsubj|12:nsubj	_
2	actually	actually	ADV	RB	_	3	advmod	3:advmod	_
3	loss	lose	VERB	VBD	Mood=Ind|Tense=Past|Typo=Yes|VerbForm=Fin	0	root	0:root	_
4	4	4	NUM	CD	NumType=Card	5	nummod	5:nummod	_
5	pounds	pound	NOUN	NNS	Number=Plur	3	obj	3:obj	_
6	after	after	ADP	IN	_	9	case	9:case	_
7	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
8	1st	1st	ADJ	JJ	Degree=Pos|NumType=Ord	9	amod	9:amod	_
9	treatment	treatment	NOUN	NN	Number=Sing	3	obl	3:obl:after	_
10	and	and	CCONJ	CC	_	12	cc	10.1:cc|12:cc	_
11	2	2	NUM	CD	NumType=Card	12	nummod	12:nummod	_
12	pounds	pound	NOUN	NNS	Number=Plur	3	conj	3:conj:and|10.1:obj	_
13	after	after	ADP	IN	_	16	case	16:case	_
14	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	_
15	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	16	amod	16:amod	_
16	treatment	treatment	NOUN	NN	Number=Sing	12	orphan	10.1:obl:after	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|9.1:nsubj|10:nsubj	_
2	wish	wish	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	all	all	DET	DT	_	2	iobj	2:iobj	_
4	happy	happy	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	holidays	holiday	NOUN	NNS	Number=Plur	2	obj	2:obj	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	9.1:punct|10:punct	_
7	and	and	CCONJ	CC	_	10	cc	9.1:cc|10:cc	_
8	moreso	moreso	ADV	RB	_	10	orphan	9.1:advmod	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	9.1:punct|10:punct	_
10	peace	peace	NOUN	NN	Number=Sing	2	conj	2:conj:and|9.1:obj	_
11	on	on	ADP	IN	_	12	case	12:case	_
12	earth	earth	NOUN	NN	Number=Sing	10	nmod	10:nmod:on	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 31 orphan	color:blue
1	Cafes	cafe	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	_
2	and	and	CCONJ	CC	_	3	cc	3:cc	_
3	restaurants	restaurant	NOUN	NNS	Number=Plur	1	conj	1:conj:and|5:nsubj	_
4	rarely	rarely	ADV	RB	_	5	advmod	5:advmod	_
5	use	use	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	_
7	same	same	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	cutlery	cutlery	NOUN	NN	Number=Sing	5	obj	5:obj	_
9	for	for	ADP	IN	_	12	case	12:case	_
10	different	different	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
11	food	food	NOUN	NN	Number=Sing	12	compound	12:compound	_
12	groups	group	NOUN	NNS	Number=Plur	8	nmod	8:nmod:for	_
13	anyway	anyway	ADV	RB	_	5	advmod	5:advmod	SpaceAfter=No
14	,	,	PUNCT	,	_	5	punct	5:punct	_
15	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	17	nsubj	17:nsubj|22.1:nsubj|23:nsubj|27.1:nsubj|28:nsubj|33:nsubj	_
16	normally	normally	ADV	RB	_	17	advmod	17:advmod	_
17	have	have	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	5	parataxis	5:parataxis	_
18	blue	blue	ADJ	JJ	Degree=Pos	17	obj	17:obj	_
19	for	for	ADP	IN	_	21	case	21:case	_
20	bakery	bakery	NOUN	NN	Number=Sing	21	compound	21:compound	_
21	items	item	NOUN	NNS	Number=Plur	17	obl	17:obl:for	SpaceAfter=No
22	,	,	PUNCT	,	_	23	punct	22.1:punct|23:punct	_
23	red	red	ADJ	JJ	Degree=Pos	17	conj	17:conj|22.1:obj	_
24	for	for	ADP	IN	_	26	case	26:case	_
25	cooked	cook	VERB	VBN	Tense=Past|VerbForm=Part	26	amod	26:amod	_
26	meat	meat	NOUN	NN	Number=Sing	23	orphan	22.1:obl:for	SpaceAfter=No
27	,	,	PUNCT	,	_	28	punct	27.1:punct|28:punct	_
28	brown	brown	ADJ	JJ	Degree=Pos	17	conj	17:conj|27.1:obj	_
29	for	for	ADP	IN	_	31	case	31:case	_
30	raw	raw	ADJ	JJ	Degree=Pos	31	amod	31:amod	_
31	meat	meat	NOUN	NN	Number=Sing	28	orphan	27.1:obl:for	SpaceAfter=No
32	,	,	PUNCT	,	_	33	punct	33:punct	_
33	etc	etc	X	FW	_	17	conj	17:conj	_
34	-	-	PUNCT	,	_	17	punct	17:punct	_
35	all	all	ADV	RB	_	41	advmod	41:advmod	_
36	for	for	ADP	IN	_	41	case	41:case	_
37	food	food	NOUN	NN	Number=Sing	38	compound	38:compound	_
38	preparation	preparation	NOUN	NN	Number=Sing	41	compound	41:compound	_
39	and	and	CCONJ	CC	_	40	cc	40:cc	_
40	hygiene	hygiene	NOUN	NN	Number=Sing	38	conj	38:conj:and|41:compound	_
41	policies	policy	NOUN	NNS	Number=Plur	17	acl:relcl	17:acl:relcl	SpaceAfter=No
42	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


