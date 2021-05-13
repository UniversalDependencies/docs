---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

73 nodes (0%) are attached to their parents as `cc:preconj`.

72 instances of `cc:preconj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76712328767123.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (34; 47% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (13; 18% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (13; 18% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (11; 15% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj|9:nsubj	Discourse=elaboration:2->1|Entity=(place-1)
2	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
3	either	either	CCONJ	CC	_	6	cc:preconj	6:cc:preconj	Entity=(place-1
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	6:amod	Entity=(substance-5
5	coral	coral	NOUN	NN	Number=Sing	6	compound	6:compound	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	0:root	Entity=substance-5)
7	or	or	CCONJ	CC	_	9	cc	9:cc	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	9:compound	Entity=(substance-6)
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	6:conj:or	Entity=place-1)|SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	These	this	DET	DT	Number=Plur|PronType=Dem	2	det	2:det	Discourse=elaboration:109->106|Entity=(abstract-154
2	names	name	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass	Entity=abstract-154)
3	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	given	give	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	either	either	CCONJ	CC	_	7	cc:preconj	7:cc:preconj	_
6	in	in	ADP	IN	_	7	case	7:case	_
7	Eegimaa	Eegimaa	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(abstract-1)
8	or	or	CCONJ	CC	_	12	cc	12:cc	_
9	in	in	ADP	IN	_	12	case	12:case	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(abstract-158
11	different	different	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	language	language	NOUN	NN	Number=Sing	6	conj	6:conj:or|7:case	Entity=abstract-158)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	prospective	prospective	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=joint:88->78|Entity=(person-143
2	audiences	audience	NOUN	NNS	Number=Plur	3	nsubj	3:nsubj	Entity=person-143)
3	differ	differ	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	both	both	CCONJ	CC	_	6	cc:preconj	6:cc:preconj	_
5	in	in	SCONJ	IN	_	6	mark	6:mark	_
6	decoding	decode	VERB	VBG	VerbForm=Ger	3	advcl	3:advcl:in	Entity=(abstract-144
7	ability	ability	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=abstract-144)
8	and	and	CCONJ	CC	_	11	cc	11:cc	_
9	in	in	ADP	IN	_	11	case	11:case	_
10	potential	potential	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(abstract-145
11	interest	interest	NOUN	NN	Number=Sing	5	conj	5:conj:and|6:mark	Entity=abstract-145)|SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


