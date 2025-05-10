---
layout: base
title:  'Statistics of nummod in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `nummod`

This relation is universal.

8 nodes (1%) are attached to their parents as `nummod`.

8 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NUM.html">NUM</a></tt> (7; 88% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-NUM.html">NUM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	O	O	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	Tüklərin	tük	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	_
3	cürləməliydi	cürləmə	VERB	_	Mood=Nec|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	amma	amma	CCONJ	_	_	11	cc	_	_
6	neçə	neçə	NUM	_	PronType=Int	7	nummod	_	_
7	dəlilə	dəlil	NOUN	_	Case=Dat|Number=Sing	11	advcl	_	_
8	görə	görə	ADP	_	_	7	case	_	_
9	o	o	DET	_	PronType=Dem	10	det	_	_
10	gün	gün	NOUN	_	Number=Sing	11	obl	_	_
11	eləmədi	elə	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Evin	ev	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	qabağında	qabaq	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
3	üç	üç	NUM	_	_	4	nummod	_	_
4	maşınlıq	maşınlıq	ADJ	_	_	6	nmod	_	Derivation=Liq
5	park	park	NOUN	_	_	6	nmod	_	_
6	yeri	yer	NOUN	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
7	var	var	ADJ	_	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


