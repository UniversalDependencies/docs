---
layout: base
title:  'Statistics of parataxis in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `parataxis`

This relation is universal.

132 nodes (1%) are attached to their parents as `parataxis`.

116 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.7954545454545.

The following 19 pairs of parts of speech are connected with `parataxis`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (88; 67% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (14; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	«	_	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Мне	_	PRON	PRP	Case=Dat|Number=Sing|Person=1	3	iobj	_	_
3	нравились	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
4	горячие	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	7	amod	_	_
5	и	_	CCONJ	CC	_	6	cc	_	_
6	страстные	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	4	conj	_	_
7	цвета	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Person=3	3	nsubj	_	SpaceAfter=No
8	»	_	PUNCT	''	_	3	punct	_	SpaceAfter=No
9	,	_	PUNCT	,	_	11	punct	_	_
10	—	_	PUNCT	-	_	11	punct	_	OrigForm=--
11	говорит	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	_
12	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis	color:blue
1	Карл	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	,	_	7	punct	_	_
3	несмотря	_	ADP	IN	_	7	case	_	_
4	на	_	ADP	IN	_	3	fixed	_	_
5	его	_	DET	PRP$	Case=Acc|Gender[psor]=Masc|Number[psor]=Sing|Person=3|PronType=Prs	7	det	_	_
6	жесткие	_	ADJ	JJ	Animacy=Inan|Case=Acc|Number=Plur|Variant=Long	7	amod	_	_
7	действия	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur|Person=3	9	parataxis	_	SpaceAfter=No
8	,	_	PUNCT	,	_	7	punct	_	_
9	считался	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
10	внимательным	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	9	xcomp	_	_
11	к	_	ADP	IN	_	12	case	_	_
12	нуждам	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Plur|Person=3	10	nmod	_	_
13	народа	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	12	nmod	_	_
14	Нидерландов	_	PROPN	NNP	Animacy=Inan|Case=Gen|Number=Plur|Person=3	13	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Первым	_	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	2	amod	_	_
2	королем	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	был	_	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	2	cop	_	_
4	Моймир	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
5	I	_	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Long	4	flat	_	Proper=True
6	(	_	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	управлял	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	2	parataxis	_	_
8	в	_	ADP	IN	_	12	case	_	_
9	830	_	NUM	CD	Animacy=Inan|Gender=Masc|Number=Sing	12	nummod	_	SpaceAfter=No
10	—	_	PUNCT	-	_	11	punct	_	OrigForm=--|SpaceAfter=No
11	846	_	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	9	nummod	_	_
12	гг	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Plur|Person=3	7	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	SpaceAfter=No
14	)	_	PUNCT	)	_	7	punct	_	SpaceAfter=No
15	.	_	PUNCT	.	_	2	punct	_	_

~~~


