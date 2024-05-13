---
layout: base
title:  'Statistics of mark in UD_Teko-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Teko-TuDeT: Relations: `mark`

This relation is universal.

3 nodes (0%) are attached to their parents as `mark`.

2 instances of `mark` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `mark`: <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-ADV.html">ADV</a></tt> (1; 33% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-SCONJ.html">SCONJ</a></tt> (1; 33% instances), <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	bɨgi	bɨg	NOUN	n	Pred=Yes	0	root	_	_
2	oʔu	ʔu	NOUN	n	Corf=Yes|Person=3	1	advcl	_	_
3	wo	wo	ADV	adv	_	2	mark	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	parce.que	parce.que	SCONJ	sc	_	3	mark	_	_
2	dati	dati	AUX	aux	Polarity=Neg	3	cop	_	_
3	zomãʔẽnanhar	mãʔẽnan	NOUN	n	Imprs=Yes|Nmzr=Ag	0	root	_	_
4	kotɨ	kotɨ	ADV	adv	_	3	advmod	_	_
5	,	,	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	aipo	aipo	ADV	adv	_	0	root	_	_
2	kobtarpɨrɨ	kob	AUX	aux	Degree=Cmp|Tense=Fut	1	cop	_	_
3	parce	parce	X	x	_	6	mark	_	_
4	que	que	X	x	_	3	fixed	_	_
5	logementssociauxkom	logementssociaux	NOUN	n	Number=Plur	6	obj	_	_
6	aiɲuŋokar	iɲuŋ	VERB	v	Number=Sing|Person=1|Voice=Cau	1	advcl	_	_
7	imõdo	mõdo	NOUN	n	Rel=NCont	6	obl	_	_
8	rehe	ehe	ADP	posp	Rel=Cont	7	case	_	_

~~~


