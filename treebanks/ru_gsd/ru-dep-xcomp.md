---
layout: base
title:  'Statistics of xcomp in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `xcomp`

This relation is universal.

715 nodes (1%) are attached to their parents as `xcomp`.

683 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78181818181818.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (564; 79% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (74; 10% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (36; 5% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (21; 3% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="ru-pos-AUX.html">AUX</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru-pos-AUX.html">AUX</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru-pos-AUX.html">AUX</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Хозяин	ХОЗЯИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	МОЧЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	устроить	УСТРОИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	2	xcomp	_	_
4	своего	СВОЙ	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Reflex=Yes	5	det	_	_
5	питомца	ПИТОМЕЦ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	на	НА	ADP	IN	_	7	case	_	_
7	работу	РАБОТА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 xcomp	color:blue
1	И	И	CCONJ	CC	_	7	cc	_	_
2	в	В	ADP	IN	_	5	case	_	_
3	то	ТОТ	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
4	же	ЖЕ	PART	UH	_	3	discourse	_	_
5	время	ВРЕМЯ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
6	малыш	МАЛЫШ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	должен	ДОЛЖЕН	ADJ	JJH	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
8	как	КАК	ADV	WRB	_	10	advmod	_	_
9	будто	БУДТО	ADP	IN	_	8	fixed	_	_
10	идти	ИДТИ	VERB	VB	Aspect=Imp|VerbForm=Inf	7	xcomp	_	_
11	к	К	ADP	IN	_	12	case	_	_
12	папе	ПАПА	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	к	К	ADP	IN	_	12	conj	_	_
15	кораблю	КОРАБЛЬ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No|ToDo=nmod
16	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 xcomp	color:blue
1	Виновным	ВИНОВНЫЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	xcomp	_	_
2	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	4	obj	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	4	advmod	_	_
4	признал	ПРИЗНАТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	приговорён	ПРИГОВОРИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	parataxis	_	_
8	к	К	ADP	IN	_	10	case	_	_
9	пяти	ПЯТЬ	NUM	CD	Case=Dat|NumType=Card	10	nummod	_	_
10	годам	ГОД	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	obl	_	_
11	ссылки	ССЫЛКА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


