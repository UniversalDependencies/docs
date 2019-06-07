---
layout: base
title:  'Statistics of vocative in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `vocative`

This relation is universal.

19 nodes (0%) are attached to their parents as `vocative`.

11 instances of `vocative` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42105263157895.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (9; 47% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 vocative	color:blue
1	God	God	PROPN	NNP	Number=Sing	6	vocative	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
4	do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
5	n’t	n't	PART	RB	_	6	advmod	_	_
6	know	know	VERB	VB	VerbForm=Inf	0	root	_	SpaceAfter=No
7	!	!	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 vocative	color:blue
1	“	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	SpaceAfter=No
3	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	okay	okay	ADJ	JJ	Degree=Pos	10	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	Mom	Mom	PROPN	NNP	Number=Sing	4	vocative	_	SpaceAfter=No
7	,	,	PUNCT	,	_	4	punct	_	SpaceAfter=No
8	”	"	PUNCT	''	_	4	punct	_	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 43 38 vocative	color:blue
1	Even	even	ADV	RB	_	6	advmod	_	_
2	though	though	SCONJ	IN	_	6	mark	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
4	m	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	not	not	PART	RB	Polarity=Neg	6	advmod	_	_
6	Michael	Michael	PROPN	NNP	Number=Sing	34	advcl	_	_
7	Jackson	Jackson	PROPN	NNP	Number=Sing	6	flat	_	_
8	or	or	CCONJ	CC	_	9	cc	_	_
9	somebody	somebody	NOUN	NN	Number=Sing	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	6	punct	_	_
11	when	when	SCONJ	WRB	PronType=Int	13	mark	_	_
12	people	people	NOUN	NNS	Number=Plur	13	nsubj	_	_
13	come	come	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	34	advcl	_	_
14	up	up	ADP	RP	_	13	compound:prt	_	_
15	to	to	ADP	TO	_	16	case	_	_
16	me	me	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obl	_	_
17	and	and	CCONJ	CC	_	18	cc	_	_
18	introduce	introduce	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	conj	_	_
19	themselves	themselves	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	18	obj	_	_
20	and	and	CCONJ	CC	_	21	cc	_	_
21	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	conj	_	SpaceAfter=No
22	,	,	PUNCT	,	_	21	punct	_	_
23	'	'	PUNCT	``	_	30	punct	_	SpaceAfter=No
24	Hey	Hey	INTJ	UH	_	25	discourse	_	_
25	Frank	Frank	PROPN	NNP	Number=Sing	30	vocative	_	SpaceAfter=No
26	,	,	PUNCT	,	_	25	punct	_	_
27	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	28	nmod:poss	_	_
28	name	name	NOUN	NN	Number=Sing	30	nsubj	_	_
29	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	_
30	John	John	PROPN	NNP	Number=Sing	21	ccomp	_	SpaceAfter=No
31	,	,	PUNCT	,	_	30	punct	_	SpaceAfter=No
32	'	'	PUNCT	''	_	30	punct	_	_
33	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	34	nsubj	_	_
34	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
35	,	,	PUNCT	,	_	34	punct	_	_
36	'	'	PUNCT	``	_	43	punct	_	SpaceAfter=No
37	Hey	Hey	INTJ	UH	_	38	discourse	_	_
38	John	John	PROPN	NNP	Number=Sing	43	vocative	_	SpaceAfter=No
39	,	,	PUNCT	,	_	38	punct	_	_
40	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	41	nmod:poss	_	_
41	name	name	NOUN	NN	Number=Sing	43	nsubj	_	_
42	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	cop	_	_
43	Frank	Frank	PROPN	NNP	Number=Sing	34	ccomp	_	SpaceAfter=No
44	'	'	PUNCT	''	_	43	punct	_	_
45	and	and	CCONJ	CC	_	47	cc	_	_
46	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	47	nsubj	_	_
47	laugh	laugh	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	34	conj	_	SpaceAfter=No
48	.	.	PUNCT	.	_	34	punct	_	_

~~~


