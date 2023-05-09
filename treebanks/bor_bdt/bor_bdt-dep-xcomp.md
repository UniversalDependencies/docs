---
layout: base
title:  'Statistics of xcomp in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `xcomp`

This relation is universal.

5 nodes (1%) are attached to their parents as `xcomp`.

4 instances of `xcomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	akore	ako	VERB	v	IF=Ass	0	root	_	say,speak;dizer,falar
2	taregodyie	aregody	VERB	v	Evident=Rep|Reflex=Yes	1	xcomp	_	arrive;chegar

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp	color:blue
1	U	u	INTJ	intj	_	4	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	boe	_	NOUN	n	_	4	nsubj	_	_
4	pemegare	pemega	VERB	v	IF=Ass	0	root	_	_
5	.	_	PUNCT	punct	_	4	punct	_	_
6	Ike	ke	NOUN	_	Number=Sing|Person=1	7	nsubj	_	food;comida
7	boere	boe	VERB	v	IF=Ass	4	parataxis	_	_
8	ii	ji	ADP	posp	_	7	obl	_	_
9	.	_	PUNCT	_	_	7	punct	_	_
10	Pamode	pa	PRON	bi	Clusivity=In|IF=Ass|Number=Plur|Person=1|PronType=Bi|Tense=Fut	4	parataxis	_	_
11	karo	karo	NOUN	_	_	12	obj	_	_
12	kowuje	kowuje	VERB	v	_	10	xcomp	_	_
13	?	?	PUNCT	punct	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	ikadykigodykare	i	PRON	bi	Aspect=Hab|IF=Ass|Number=Sing|Person=1|Polarity=Neg|Subord=Yes	3	xcomp	_	_
2	karo	karo	NOUN	n	_	3	nsubj	_	fish;peixe
3	ko	ko	VERB	v	Number=Sing|Person=3	0	root	_	eat;comer

~~~


