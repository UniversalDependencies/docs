---
layout: base
title:  'Statistics of discourse in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-INTJ.html">INTJ</a></tt> (2; 29% instances), <tt><a href="bor_bdt-pos-X.html">X</a></tt>-<tt><a href="bor_bdt-pos-X.html">X</a></tt> (2; 29% instances), <tt><a href="bor_bdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bor_bdt-pos-X.html">X</a></tt> (1; 14% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-X.html">X</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	U	u	INTJ	intj	_	4	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	boe	_	NOUN	n	_	4	nsubj	_	_
4	pemegare	pemega	VERB	v	Mood=Ind	0	root	_	_
5	.	_	PUNCT	punct	_	4	punct	_	_
6	Ike	ke	NOUN	n	Number=Sing|Person=1	7	nsubj	_	food;comida
7	boere	boe	VERB	v	Mood=Ind	4	parataxis	_	_
8	ii	ji	ADP	posp	_	7	obl	_	_
9	.	_	PUNCT	punct	_	7	punct	_	_
10	Pamode	pa	PRON	bi	Clusivity=In|Mood=Ind|Number=Plur|Person=1|PronType=Bi|Tense=Fut	4	parataxis	_	_
11	karo	karo	NOUN	n	_	12	obj	_	_
12	kowuje	kowuje	VERB	v	_	10	xcomp	_	_
13	?	?	PUNCT	punct	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 discourse	color:blue
1	Deu	Deu	NOUN	n	_	5	nsubj	_	_
2	koiare	koiare	ADV	adv	_	5	advmod	_	thus;assim,por.isso
3	ure	re	PART	prcl	Mood=Ind|Number=Sing|Person=3	5	dep	_	_
4	Satanae	Satanae	PROPN	_	_	5	obj	_	_
5	towuje	towuje	NOUN	n	_	0	root	_	_
6	ure	re	PRON	_	_	8	dep	_	_
7	bope	_	NOUN	n	_	8	obj	_	_
8	towuje	_	VERB	v	_	5	parataxis	_	_
9	boekare	_	ADV	adv	_	10	advmod	_	_
10	etaidure	_	VERB	v	_	5	parataxis	_	_
11	etugoduwo	_	VERB	v	_	10	xcomp	_	_
12	pudumiwo	_	VERB	v	_	11	obj	_	_
13	tugurire	_	VERB	v	_	11	xcomp	_	_
14	,	,	PUNCT	punct	_	13	punct	_	_
15	pudumiwo	pudumi	VERB	v	_	16	obj	_	_
16	tugodure	agodyre	VERB	v	_	11	xcomp	_	_
17	Deu	Deu	PROPN	_	_	16	obl	_	_
18	kori	kori	ADP	_	_	17	case	_	_
19	kocare	kocare	X	_	_	23	discourse	_	_
20	Deu	Deu	PROPN	_	_	23	nsubj	_	_
21	ure	re	PART	prcl	Mood=Ind|Number=Sing|Person=3	23	dep	_	_
22	rugadu	rugadu	X	_	_	23	discourse	_	_
23	barigu	barigu	X	_	_	16	parataxis	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	U	u	INTJ	_	_	0	root	_	yes;sim
2	,	,	PUNCT	punct	_	1	punct	_	_
3	duboe	duboe	X	x	_	1	discourse	_	_
4	,	,	PUNCT	punct	_	3	punct	_	_
5	imanamage	mana	NOUN	n	Number=Plur|Person=1	1	vocative	_	[ˈmãna];older.brother;irmão.mais.velho
6	,	,	PUNCT	punct	_	5	punct	_	_
7	ityiemage	tyie	NOUN	n	Number=Plur|Person=1	5	conj	_	[ˈtɯi̯e];older.sister;irmã.mais.velha

~~~


