---
layout: base
title:  'Statistics of discourse in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

6 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.85714285714286.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-INTJ.html">INTJ</a></tt> (4; 57% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="uz_ut-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Ha	ha	INTJ	_	_	8	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	bu	bu	DET	_	PronType=Dem	5	det	_	_
5	kishining	kishi	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	6	nmod:poss	_	_
6	xotini	xotin	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
7	mayiz	mayiz	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	yemagan	ye	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Yo‘q	yo‘q	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	muhabbat	muhabbat	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	mo‘jiza	mo‘jiza	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	emas	emas	AUX	_	Polarity=Neg	4	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	buyuk	buyuk	ADJ	_	_	8	amod	_	_
8	qo‘rquvdir	qo‘rquv	NOUN	_	Case=Nom|Number=Sing	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	Odam	odam	NOUN	_	Case=Nom|Number=Sing	2	xcomp	_	_
2	bo‘lish	bo‘l	VERB	_	VerbForm=Vnoun	3	csubj	_	_
3	qanaqa	qanaqa	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	o‘zi	o‘z	PRON	_	Number=Sing|Person=3|PronType=Prs	3	discourse	_	SpaceAfter=No
6	?	?	PUNCT	_	_	3	punct	_	_

~~~


