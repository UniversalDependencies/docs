---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

56 nodes (0%) are attached to their parents as `cc:preconj`.

55 instances of `cc:preconj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (30; 54% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 14% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 14% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (8; 14% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	Discourse=elaboration:2->1|Entity=(place-1)
2	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	either	either	CCONJ	CC	_	6	cc:preconj	_	Entity=(place-1
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	_	Entity=(substance-5
5	coral	coral	NOUN	NN	Number=Sing	6	compound	_	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	_	Entity=substance-5)
7	or	or	CCONJ	CC	_	9	cc	_	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	_	Entity=(substance-6)
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	_	Entity=place-1)|SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc:preconj	color:blue
1	In	in	ADP	IN	_	3	case	_	Discourse=antithesis:102->103
2	existing	exist	VERB	VBG	VerbForm=Ger	3	amod	_	Entity=(abstract-145
3	proposals	proposal	NOUN	NNS	Number=Plur	7	obl	_	Entity=abstract-145)|SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	Entity=(person-146)
6	can	can	AUX	MD	VerbForm=Fin	7	aux	_	_
7	find	find	VERB	VB	VerbForm=Inf	0	root	_	_
8	both	both	CCONJ	DT	_	9	cc:preconj	_	Entity=(abstract-147
9	generic	generic	ADJ	JJ	Degree=Pos	13	amod	_	_
10	and	and	CCONJ	CC	_	11	cc	_	_
11	specific	specific	ADJ	JJ	Degree=Pos	9	conj	_	_
12	mutation	mutation	NOUN	NN	Number=Sing	13	compound	_	Entity=(abstract-22)
13	operators	operator	NOUN	NNS	Number=Plur	7	obj	_	Entity=abstract-147)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	These	this	DET	DT	Number=Plur|PronType=Dem	2	det	_	Discourse=elaboration:109->106|Entity=(abstract-152
2	names	name	NOUN	NNS	Number=Plur	4	nsubj:pass	_	Entity=abstract-152)
3	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	given	give	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	either	either	CCONJ	CC	_	7	cc:preconj	_	_
6	in	in	ADP	IN	_	7	case	_	_
7	Eegimaa	Eegimaa	PROPN	NNP	Number=Sing	4	obl	_	Entity=(abstract-1)
8	or	or	CCONJ	CC	_	12	cc	_	_
9	in	in	ADP	IN	_	12	case	_	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	Entity=(abstract-156
11	different	different	ADJ	JJ	Degree=Pos	12	amod	_	_
12	language	language	NOUN	NN	Number=Sing	6	conj	_	Entity=abstract-156)|SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


