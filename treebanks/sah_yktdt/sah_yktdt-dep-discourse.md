---
layout: base
title:  'Statistics of discourse in UD_Yakut-YKTDT'
udver: '2'
---

## Treebank Statistics: UD_Yakut-YKTDT: Relations: `discourse`

This relation is universal.

6 nodes (1%) are attached to their parents as `discourse`.

4 instances of `discourse` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83333333333333.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt>-<tt><a href="sah_yktdt-pos-INTJ.html">INTJ</a></tt> (3; 50% instances), <tt><a href="sah_yktdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sah_yktdt-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt>-<tt><a href="sah_yktdt-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt>-<tt><a href="sah_yktdt-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Баһаалыста	баһаалыста	INTJ	intj	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	бары	бары	PRON	pron	PronType=Tot	4	nsubj	_	_
4	туруҥ	тур	VERB	vi	Mood=Imp|Number=Plur|Person=2	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	Миэхэ	мин	PRON	pron	Case=Dat	3	iobj	_	me
2	хойчоонно	_	NOUN	n	_	3	obj	_	ram
3	уруһуйдаан	уруһуйдаа	VERB	v	_	0	root	_	draw
4	кулу	кулу	ADV	adv	_	2	discourse	_	please

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Оччоҕо	оччоҕо	ADV	adv	_	4	advmod	_	then
2	эн	эн	PRON	pron	_	4	nsubj	_	you
3	халлаантан	халлаан	NOUN	n	Case=Abl|Number=Sing	4	obl	_	sky
4	сууллубутуҥ	суулун	VERB	v	Number=Sing|Person=2|Tense=Past	0	root	_	tofall
5	дуо	дуо	PART	part	_	4	discourse	_	_
6	?	?	PUNCT	punct	_	4	punct	_	_

~~~


