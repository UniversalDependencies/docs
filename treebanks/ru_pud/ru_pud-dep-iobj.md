---
layout: base
title:  'Statistics of iobj in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `iobj`

This relation is universal.

260 nodes (1%) are attached to their parents as `iobj`.

201 instances of `iobj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08846153846154.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (148; 57% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (41; 16% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (22; 8% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Изучением	изучение	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	3	iobj	_	_
2	вулканов	вулкан	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	занимается	заниматься	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	вулканология	вулканология	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Ей	она	PRON	PRP	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	iobj	_	_
2	было	быть	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	84	84	NUM	CD	Case=Nom	4	nummod	_	_
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Наступление	наступление	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
2	против	против	ADP	IN	_	4	case	_	_
3	огромной	огромный	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	4	amod	_	_
4	армии	армия	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	собранной	собрать	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Gen|Gender=Fem|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Pass	4	acl	_	_
7	Венецией	Венеция	PROPN	NNP	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	6	iobj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	_	_
9	началось	начаться	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
10	из	из	ADP	IN	_	11	case	_	_
11	Франции	Франция	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	_	_

~~~


