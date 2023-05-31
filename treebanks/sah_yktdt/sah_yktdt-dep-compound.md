---
layout: base
title:  'Statistics of compound in UD_Yakut-YKTDT'
udver: '2'
---

## Treebank Statistics: UD_Yakut-YKTDT: Relations: `compound`

This relation is universal.

9 nodes (1%) are attached to their parents as `compound`.

6 instances of `compound` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="sah_yktdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sah_yktdt-pos-NOUN.html">NOUN</a></tt> (4; 44% instances), <tt><a href="sah_yktdt-pos-ADV.html">ADV</a></tt>-<tt><a href="sah_yktdt-pos-ADV.html">ADV</a></tt> (2; 22% instances), <tt><a href="sah_yktdt-pos-ADV.html">ADV</a></tt>-<tt><a href="sah_yktdt-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="sah_yktdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sah_yktdt-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt>-<tt><a href="sah_yktdt-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 compound	color:blue
1	Уҥуоҕа	уҥуох	NOUN	n	Case=Dat|Number=Sing	5	compound	_	_
2	суох	суох	AUX	aux	_	1	cop	_	_
3	уонна	уонна	CCONJ	cconj	_	1	cc	_	_
4	эмис	эмис	ADJ	adj	_	5	amod	_	_
5	эт	эт	NOUN	n	Case=Nom|Number=Sing	0	root	_	_
6	бу	бу	DET	det	_	5	det	_	_
7	баар	баар	AUX	aux	_	5	cop	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Арай	арай	ADV	adv	_	3	advmod	_	suddenly
2	биирдэ	биирдэ	ADV	adv	_	1	compound	_	once
3	өйдөммүтэ	өйдөн	VERB	v	Number=Sing|Person=3|Tense=NearPast	0	root	_	became.clear
4	,	,	PUNCT	_	_	3	punct	_	_
5	кутуруга	кутурук	NOUN	n	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	tail
6	ойбоҥҥо	ойбон	NOUN	n	Case=Dat|Number=Sing	8	obl	_	icehole
7	хам	хам	ADV	adv	_	8	advmod	_	tight
8	тоҥон	тоҥ	VERB	v	VerbForm=Conv	3	ccomp	_	freeze
9	хаалбыт	хаал	VERB	v	Tense=Past|VerbForm=Part	8	dep	_	remain

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Онтон	онтон	ADV	adv	_	6	dislocated	_	_
2	ыла	ыла	ADP	adp	_	1	compound	_	1-2:sincethen
3	бу	бу	DET	det	_	4	det	_	this
4	оҕолор	оҕолор	NOUN	n	_	6	nsubj	_	child
5	кинигэни	кинигэ	NOUN	n	Case=Acc|Number=Sing	6	obj	_	book
6	былдьаспат	былдьас	VERB	v	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	takeaway
7	буолбуттар	буол	VERB	v	_	6	dep	_	tobe

~~~


