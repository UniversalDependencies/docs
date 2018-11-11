---
layout: base
title:  'Statistics of flat in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

70 nodes (0%) are attached to their parents as `flat`.

70 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32857142857143.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (52; 74% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (9; 13% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (4; 6% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Штат	штат	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	Северная	северный	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	1	flat	_	Proper=True
3	Каролина	Каролина	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	flat	_	_
4	является	являться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	отправной	отправной	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	6	amod	_	_
6	точкой	точка	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	xcomp	_	_
7	этих	этот	DET	DT	Animacy=Inan|Case=Gen|Number=Plur	8	det	_	_
8	выборов	выбор	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 flat	color:blue
1	Эти	этот	DET	DT	Animacy=Inan|Case=Nom|Number=Plur	3	det	_	_
2	растительные	растительный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	3	amod	_	_
3	семьи	семья	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
4	все	все	ADV	RB	_	5	advmod	_	_
5	еще	еще	ADV	RB	_	6	advmod	_	_
6	присутствуют	присутствовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
7	в	в	ADP	IN	_	11	case	_	_
8	Папуа	Папуа	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing	6	obl	_	_
9	—	—	PUNCT	-	_	11	punct	_	OrigForm=--|Proper=True
10	Новой	новый	ADJ	JJ	Animacy=Inan|Gender=Fem|Number=Sing|Variant=Long	11	amod	_	Proper=True
11	Гвинее	Гвинея	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing	8	flat	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat	color:blue
1	Сегодня	сегодня	ADV	RB	_	5	advmod	_	_
2	утром	утро	ADV	RB	_	5	advmod	_	_
3	Папа	папа	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	Франциск	Франциск	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	flat:name	_	_
5	встретился	встретиться	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
6	с	с	ADP	IN	_	7	case	_	_
7	Марком	Марк	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	obl	_	_
8	Цукербергом	Цукерберг	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat:name	_	_
9	и	и	CCONJ	CC	_	11	cc	_	_
10	его	его	DET	PRP$	Case=Ins|Gender[psor]=Masc|Number[psor]=Sing|Person=3|PronType=Prs	11	det	_	_
11	женой	жена	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	conj	_	_
12	в	в	ADP	IN	_	13	case	_	_
13	Casa	Casa	X	NNP	Animacy=Inan|Gender=Masc|Number=Sing	5	obl	_	_
14	Santa	Santa	X	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	13	flat	_	_
15	Marta	Marta	X	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	13	flat	_	SpaceAfter=No
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


