---
layout: base
title:  'Statistics of iobj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `iobj`

This relation is universal.

104 nodes (0%) are attached to their parents as `iobj`.

103 instances of `iobj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35576923076923.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (63; 61% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (29; 28% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (10; 10% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 iobj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Entity=(person-4)
2	slung	sling	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	nmod:poss	_	Entity=(object-85(person-4)
4	belt	belt	NOUN	NN	Number=Sing	2	obj	_	Entity=object-85)
5	around	around	ADP	IN	_	7	case	_	_
6	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(object-86(person-4)
7	back	back	NOUN	NN	Number=Sing	2	obl	_	Entity=object-86)|SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	_	_
9	and	and	CCONJ	CC	_	10	cc	_	_
10	gave	give	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	conj	_	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	iobj	_	Entity=(object-85)
12	a	a	DET	DT	Definite=Ind|PronType=Art	14	det	_	Entity=(event-87
13	quick	quick	ADJ	JJ	Degree=Pos	14	amod	_	_
14	tug	tug	NOUN	NN	Number=Sing	10	obj	_	Entity=event-87)|SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 iobj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Entity=(person-8)
2	gives	give	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	2	obj	_	Entity=(person-2)
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(abstract-96
5	hooded	hooded	ADJ	JJ	Degree=Pos	6	amod	_	_
6	look	look	NOUN	NN	Number=Sing	2	iobj	_	Entity=abstract-96)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Entity=(person-6)
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


