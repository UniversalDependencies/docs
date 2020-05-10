---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

55 nodes (0%) are attached to their parents as `cc:preconj`.

54 instances of `cc:preconj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89090909090909.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (30; 55% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 15% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 15% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (7; 13% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	Entity=(place-1)
2	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	either	either	CCONJ	CC	_	6	cc:preconj	_	_
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	_	_
5	coral	coral	NOUN	NN	Number=Sing	6	compound	_	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	_	_
7	or	or	CCONJ	CC	_	9	cc	_	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	_	_
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	These	these	DET	DT	Number=Plur|PronType=Dem	2	det	_	Entity=(abstract-146
2	names	name	NOUN	NNS	Number=Plur	4	nsubj:pass	_	Entity=abstract-146)
3	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	given	give	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	either	either	CCONJ	CC	_	7	cc:preconj	_	_
6	in	in	ADP	IN	_	7	case	_	_
7	Eegimaa	Eegimaa	PROPN	NNP	Number=Sing	4	obl	_	Entity=(abstract-1)
8	or	or	CCONJ	CC	_	12	cc	_	_
9	in	in	ADP	IN	_	12	case	_	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	Entity=(abstract-150
11	different	different	ADJ	JJ	Degree=Pos	12	amod	_	_
12	language	language	NOUN	NN	Number=Sing	6	conj	_	Entity=abstract-150)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	prospective	prospective	ADJ	JJ	Degree=Pos	2	amod	_	Entity=(person-134
2	audiences	audience	NOUN	NNS	Number=Plur	3	nsubj	_	Entity=person-134)
3	differ	differ	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	both	both	CCONJ	CC	_	6	cc:preconj	_	_
5	in	in	SCONJ	IN	_	6	mark	_	_
6	decoding	decode	VERB	VBG	VerbForm=Ger	3	advcl	_	Entity=(abstract-135
7	ability	ability	NOUN	NN	Number=Sing	6	obj	_	Entity=abstract-135)
8	and	and	CCONJ	CC	_	11	cc	_	_
9	in	in	ADP	IN	_	11	case	_	_
10	potential	potential	ADJ	JJ	Degree=Pos	11	amod	_	Entity=(abstract-136
11	interest	interest	NOUN	NN	Number=Sing	5	conj	_	Entity=abstract-136)|SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


