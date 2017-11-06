---
layout: base
title:  'Statistics of discourse in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `discourse`

This relation is universal.

51 nodes (0%) are attached to their parents as `discourse`.

49 instances of `discourse` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84313725490196.

The following 15 pairs of parts of speech are connected with `discourse`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (10; 20% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (8; 16% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (8; 16% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (7; 14% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (5; 10% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 4% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 discourse	color:blue
1	Но	_	CCONJ	CC	_	4	cc:preconj	_	_
2	теперь	_	ADV	RB	_	4	advmod	_	_
3	везде	_	ADV	RB	_	4	advmod	_	_
4	царит	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	бардак	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
6	,	_	PUNCT	,	_	12	punct	_	_
7	а	_	CCONJ	CC	_	12	cc	_	_
8	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	SpaceAfter=No
9	,	_	PUNCT	,	_	10	punct	_	_
10	похоже	_	ADV	RB	_	12	discourse	_	SpaceAfter=No
11	,	_	PUNCT	,	_	10	punct	_	_
12	продолжает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	_
13	искать	_	VERB	VB	Aspect=Imp	12	xcomp	_	_
14	ответы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3	13	obj	_	_
15	на	_	ADP	IN	_	16	case	_	_
16	вопросы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3	14	nmod	_	SpaceAfter=No
17	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	Вероятно	_	ADV	RB	_	8	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	для	_	ADP	IN	_	4	case	_	_
4	Баррозу	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
5	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
6	еще	_	ADV	RB	_	8	advmod	_	_
7	не	_	PART	NEG	Polarity=Neg	8	advmod	_	_
8	конец	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 discourse	color:blue
1	Несмотря	_	ADP	IN	_	3	case	_	_
2	на	_	ADP	IN	_	1	fixed	_	_
3	это	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	они	_	PRON	PRP	Case=Nom|Number=Plur|Person=3	10	nsubj	_	_
6	оба	_	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	5	nummod	_	SpaceAfter=No
7	,	_	PUNCT	,	_	8	punct	_	_
8	кажется	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	discourse	_	SpaceAfter=No
9	,	_	PUNCT	,	_	8	punct	_	_
10	правили	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
11	по	_	ADP	IN	_	13	case	_	_
12	крайней	_	ADJ	JJ	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Variant=Long	13	amod	_	_
13	мере	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Person=3	14	nmod	_	_
14	территориями	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur|Person=3	10	iobj	_	_
15	нижнего	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	16	amod	_	Proper=True
16	Египта	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	14	nmod	_	SpaceAfter=No
17	.	_	PUNCT	.	_	10	punct	_	_

~~~


