---
layout: base
title:  'Statistics of xcomp in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `xcomp`

This relation is universal.

48 nodes (1%) are attached to their parents as `xcomp`.

46 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (36; 75% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 xcomp	color:blue
1	Icare	icare	ADV	adv	_	3	advmod	_	_
2	karo	karo	NOUN	n	Number=Sing	3	nsubj	_	_
3	akogodyre	ako	VERB	v	Aspect=Inc|Mood=Ind|Number=Sing|Person=3	0	root	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	akore	ako	VERB	v	Mood=Ind|Number=Sing|Person=3	3	conj	_	_
6	hm	_	X	_	_	5	ccomp	_	_
7	...	_	PUNCT	punct	_	6	punct	_	_
8	hm	_	X	_	_	6	conj	_	_
9	...	_	PUNCT	punct	_	8	punct	_	_
10	hm	_	X	_	_	6	conj	_	_
11	,	,	PUNCT	punct	_	5	punct	_	_
12	tubadui	padu	VERB	v	Reflex=Yes|VerbForm=Ger	3	xcomp	_	lie.down;ficar.deitado

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp	color:blue
1	U	u	INTJ	intj	_	4	discourse	_	[];;
2	,	,	PUNCT	punct	_	1	punct	_	[];;
3	boe	_	NOUN	n	_	4	nsubj	_	[];;
4	pemegare	pemega	VERB	v	Mood=Ind	0	root	_	[];;
5	.	_	PUNCT	punct	_	4	punct	_	[];;
6	Ike	ke	NOUN	n	Number=Sing|Person=1	7	nsubj	_	food;comida
7	boere	boe	VERB	v	Mood=Ind	4	parataxis	_	[];;
8	ii	ji	ADP	posp	_	7	obl	_	[];;
9	.	_	PUNCT	punct	_	7	punct	_	[];;
10	Pamode	pa	PRON	bi	Clusivity=In|Mood=Ind|Number=Plur|Person=1|PronType=Bi|Tense=Fut	4	parataxis	_	[];;
11	karo	karo	NOUN	n	_	12	obj	_	[];;
12	kowuje	kowuje	VERB	v	_	10	xcomp	_	[];;
13	?	?	PUNCT	punct	_	12	punct	_	[];;

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	ikadykigodykare	i	PRON	bi	Aspect=IncProg|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Subord=Yes	3	xcomp	_	[];;
2	karo	karo	NOUN	n	_	3	nsubj	_	fish;peixe
3	ko	ko	VERB	v	Number=Sing|Person=3	0	root	_	eat;comer

~~~


