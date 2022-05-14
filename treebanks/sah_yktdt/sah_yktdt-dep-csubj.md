---
layout: base
title:  'Statistics of csubj in UD_Yakut-YKTDT'
udver: '2'
---

## Treebank Statistics: UD_Yakut-YKTDT: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="sah_yktdt-pos-ADV.html">ADV</a></tt>-<tt><a href="sah_yktdt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt>-<tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	килиэптэ	килиэп	NOUN	n	Case=Par|Number=Sing	2	nmod	_	_
2	аҕалыахха	аҕал	NOUN	n	Case=Dat|Nomzr=Action	3	csubj	_	_
3	наада	наада	ADV	adv	_	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Интэриниэт	Интэриниэт	NOUN	n	Case=Nom|Number=Sing	2	obj	_	internet
2	диэн	диэ	VERB	v	_	0	root	_	say
3	көмпүүтэрдэр	көмпүүтэр	NOUN	n	Case=Nom|Number=Plur	7	obj	_	computer
4	бэйэ	бэйэ	NOUN	n	Case=Nom|Number=Sing	7	obl	_	body
5	бэйэлэрин	бэйэ	NOUN	n	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3	4	fixed	_	body=eachOther
6	кытта	кытта	ADP	adp	_	4	case	_	with
7	холбоммут	холбон	VERB	v	_	2	csubj	_	toconnect
8	бүтүн	бүтүн	ADV	adv	_	7	advmod	_	entire
9	аан	аан	NOUN	n	_	10	nmod	_	entrance
10	дойдутааҕы	дойду	NOUN	n	Case=Acc|Number=Sing	11	nmod	_	world=Мировой
11	ситимнэрэ	ситим	NOUN	n	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	7	nsubj	_	7:nsubj

~~~


