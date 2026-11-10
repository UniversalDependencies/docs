---
layout: base
title:  'Statistics of parataxis in UD_Kalmyk-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Kalmyk-GDUD: Relations: `parataxis`

This relation is universal.

5 nodes (1%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="xal_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="xal_gdud-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	xälä-Ø	xälä	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
2	!	!	PUNCT	_	_	1	punct	_	_
3	šovu-n	šovu	NOUN	_	_	4	nsubj	_	Case=Ext
4	nis-žä-nä	nis	VERB	_	Aspect=Prog|Tense=Pres	1	parataxis	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 parataxis	color:blue
1	Kekshenova	Kekshenova	PROPN	_	_	2	parataxis	_	_
2	Sveta	Sveta	PROPN	_	_	5	nsubj	_	_
3	ter	ter	DET	_	PronType=Dem	5	det	_	_
4	vnučk-an	vnučk	NOUN	_	Case=Acc|Reflex=Yes	5	obj	_	_
5	ög-xär	ög	VERB	_	_	0	root	_	Deriv=CvPurp
6	bää-d-go-č	bää	VERB	_	Aspect=Hab|Polarity=Neg	5	xcomp	_	Mood=MIR

~~~


