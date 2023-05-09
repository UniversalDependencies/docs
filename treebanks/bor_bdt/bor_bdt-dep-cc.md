---
layout: base
title:  'Statistics of cc in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `cc`

This relation is universal.

4 nodes (1%) are attached to their parents as `cc`.

2 instances of `cc` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `cc`: <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-CCONJ.html">CCONJ</a></tt> (3; 75% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	imode	i	PRON	bi	IF=Ass|Number=Sing|Person=1|Tense=Fut	3	nsubj	_	_
2	karo	karo	NOUN	n	_	3	obj	_	fish;peixe
3	maky	maky	VERB	v	Number=Sing|Person=3	0	root	_	give;dar
4	imedy	imedy	NOUN	n	_	3	obl	_	man;homem
5	rakydy	rakydy	CCONJ	ccd	_	4	cc	_	or;ou
6	negedyrogu	negedyrogu	NOUN	_	_	4	conj	_	child;criança
7	rakydy	rakydy	CCONJ	ccd	_	6	cc	_	or;ou
8	ai	ai	ADP	posp	Number=Sing|Person=3	4	case	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	cenai	ai	ADP	posp	Clusivity=Ex|Number=Sing|Person=1	2	obl	_	we.(ex);nós.(ex)
2	morikare	mori	VERB	v	IF=Ass|Number=Sing|Person=3|Polarity=Neg	0	root	_	pay;pagar
3	mare	mare	CCONJ	ccad	_	5	cc	_	but;mas
4	tagai	ai	ADP	posp	Number=Sing|Person=2	5	obl	_	for,to;a,para
5	morire	morire	VERB	v	IF=Ass|Number=Sing|Person=3	2	conj	_	pay;pagar

~~~


