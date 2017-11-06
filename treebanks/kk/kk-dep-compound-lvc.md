---
layout: base
title:  'Statistics of compound:lvc in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="kk-dep-compound.html">compound</a></tt>.

7 nodes (0%) are attached to their parents as `compound:lvc`.

7 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (7; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:lvc	color:blue
1	Осы	осы	DET	det	PronType=Dem	2	det	_	_
2	мақсатта	мақсат	NOUN	n	Case=Loc	9	obl	_	_
3	Астана	Астана	PROPN	np	Case=Nom	4	nmod:poss	_	_
4	қаласына	қала	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	9	obl	_	_
5	107	107	NUM	num	NumType=Card	6	compound	_	_
6	миллиард	миллиард	NUM	num	NumType=Card	7	nummod	_	_
7	теңге	теңге	NOUN	n	Case=Nom	9	nsubj	_	_
8	қаржы	қаржы	NOUN	n	Case=Nom	9	compound:lvc	_	_
9	бөлінді	бөл	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


