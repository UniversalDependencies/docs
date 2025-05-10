---
layout: base
title:  'Statistics of discourse in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-INTJ.html">INTJ</a></tt> (1; 50% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-AUX.html">AUX</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Pəs	Pəs	INTJ	_	_	4	discourse	_	_
2	kitabxanada	kitabxana	NOUN	_	Case=Loc|Number=Plur	3	nmod	_	_
3	kılar	-ki	PRON	_	_	4	nsubj	_	_
4	harda	harda	PRON	_	Case=Loc|PronType=Int	0	root	_	_
5	iydi	i	AUX	_	Number=Sing|Person=3|Tense=Past	4	cop	_	SpaceAfter=No
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 discourse	color:blue
1	Sən	sən	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	də	də	PART	_	_	1	advmod:emph	_	_
3	bizinən	biz	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
4	gəlirən	gəl	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	elə	elə	ADV	_	_	7	advmod	_	_
7	dəyil	dəyil	AUX	_	Polarity=Neg	4	discourse	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


