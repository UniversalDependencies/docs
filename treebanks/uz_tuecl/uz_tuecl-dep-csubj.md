---
layout: base
title:  'Statistics of csubj in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `csubj`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj	color:blue
1	Denizning	Deniz	PROPN	_	Case=Gen|Number=Sing	4	nmod	_	_
2	yaxshi	yaxshi	ADJ	_	_	3	amod	_	_
3	maktabda	maktab	NOUN	_	Case=Loc|Number=Sing	4	obl	_	_
4	oʻqimasligi	oʻqi	VERB	_	Polarity=Neg|VerbForm=Vnoun	7	csubj	_	_
5	onasini	ona	NOUN	_	Case=Acc|Number=Sing	7	obj	_	_
6	havotirga	havotir	NOUN	_	Case=Dat|Number=Sing	7	compound	_	_
7	solardi	sol	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Bolalarga	bola	NOUN	_	Case=Dat|Number=Plur	3	obl	_	_
2	kitob	kitob	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	oʻqish	oʻqi	VERB	_	VerbForm=Vnoun	7	csubj	_	_
4	ularning	u	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	nmod:poss	_	_
5	rivojlanishi	rivojlan	VERB	_	VerbForm=Vnoun	7	obl	_	_
6	uchun	uchun	ADP	_	_	5	case	_	_
7	muhimdir	muhim	ADJ	_	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


