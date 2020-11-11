---
layout: base
title:  'Statistics of iobj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `iobj`

This relation is universal.

104 nodes (0%) are attached to their parents as `iobj`.

103 instances of `iobj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32692307692308.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (64; 62% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (28; 27% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (10; 10% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Discourse=sequence:68->63|Entity=(person-8)
2	gives	give	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	2	iobj	_	Entity=(person-2)
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(event-101
5	hooded	hooded	ADJ	JJ	Degree=Pos	6	amod	_	_
6	look	look	NOUN	NN	Number=Sing	2	obj	_	Entity=event-101)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 iobj	color:blue
1	Weed	weed	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	Discourse=joint:127->123
2	out	out	ADP	RP	_	1	compound:prt	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	Entity=(plant-119
4	smaller	small	ADJ	JJR	Degree=Cmp	5	amod	_	_
5	plants	plant	NOUN	NNS	Number=Plur	1	obj	_	Entity=plant-119)
6	to	to	PART	TO	_	7	mark	_	Discourse=purpose:128->127
7	give	give	VERB	VB	VerbForm=Inf	1	advcl	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(plant-120
9	larger	large	ADJ	JJR	Degree=Cmp	10	amod	_	_
10	ones	one	NOUN	NNS	Number=Plur	7	iobj	_	Entity=plant-120)
11	more	more	ADJ	JJR	Degree=Cmp	12	amod	_	_
12	space	space	NOUN	NN	Number=Sing	7	obj	_	Entity=(abstract-121)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Discourse=evaluation:79->69|Entity=(person-6)
2	ca	can	AUX	MD	VerbForm=Fin	4	aux	_	SpaceAfter=No
3	n’t	not	PART	RB	Polarity=Neg	4	advmod	_	_
4	wait	wait	VERB	VB	VerbForm=Inf	0	root	_	_
5	to	to	PART	TO	_	6	mark	_	_
6	show	show	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	Toph	Toph	PROPN	NNP	Number=Sing	6	iobj	_	Entity=(person-42)
8	and	and	CCONJ	CC	_	9	cc	_	_
9	Len	Len	PROPN	NNP	Number=Sing	7	conj	_	Entity=(person-43)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


