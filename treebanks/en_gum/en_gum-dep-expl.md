---
layout: base
title:  'Statistics of expl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `expl`

This relation is universal.

200 nodes (0%) are attached to their parents as `expl`.

195 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.315.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (184; 92% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (11; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	There	there	PRON	EX	_	2	expl	_	_
2	were	be	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	things	thing	NOUN	NNS	Number=Plur	2	nsubj	_	Entity=(object-91
4	in	in	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(abstract-92
6	shadows	shadow	NOUN	NNS	Number=Plur	2	obl	_	Entity=object-91)abstract-92)|SpaceAfter=No
7	;	;	PUNCT	:	_	10	punct	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	_	Entity=(object-91(object-93
9	metal	metal	NOUN	NN	Number=Sing	10	compound	_	Entity=(substance-94)
10	pail	pail	NOUN	NN	Number=Sing	3	appos	_	Entity=object-93)|SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	_	Entity=(object-95
13	mop	mop	NOUN	NN	Number=Sing	10	conj	_	Entity=object-95)|SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	_	_
15	rags	rag	NOUN	NNS	Number=Plur	10	conj	_	Entity=(object-96)object-91)|SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	There	there	PRON	EX	_	5	expl	_	_
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	5	cop	_	_
4	much	much	ADJ	JJ	Degree=Pos	5	amod	_	Entity=(abstract-57
5	speculation	speculation	NOUN	NN	Number=Sing	0	root	_	_
6	as	as	ADP	IN	_	9	case	_	_
7	to	to	PART	TO	_	6	fixed	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(abstract-58
9	reasons	reason	NOUN	NNS	Number=Plur	5	nmod	_	_
10	behind	behind	ADP	IN	_	11	case	_	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nmod	_	Entity=(event-51)abstract-57)abstract-58)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 expl	color:blue
1	However	however	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	not	not	PART	RB	Polarity=Neg	6	advmod	_	_
6	enough	enough	ADJ	JJ	Degree=Pos	0	root	_	_
7	to	to	PART	TO	_	9	mark	_	_
8	have	have	AUX	VB	VerbForm=Inf	9	aux	_	_
9	attained	attain	VERB	VBN	Tense=Past|VerbForm=Part	6	csubj	_	_
10	such	such	ADJ	JJ	Degree=Pos	12	amod	_	Entity=(abstract-14
11	native-like	native-like	ADJ	JJ	Degree=Pos	12	amod	_	_
12	levels	level	NOUN	NNS	Number=Plur	9	obj	_	Entity=abstract-14)|SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


