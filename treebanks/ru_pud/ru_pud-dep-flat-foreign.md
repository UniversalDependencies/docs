---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

97 nodes (1%) are attached to their parents as `flat:foreign`.

97 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80412371134021.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (58; 60% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (28; 29% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 flat:foreign	color:blue
1	Десятки	десяток	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
2	последователей	последователь	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	СФНО	СФНО	PROPN	NNP	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
4	уже	уже	ADV	RB	Degree=Pos	5	advmod	_	_
5	празднуют	праздновать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	победу	победа	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	Plaza	Plaza	X	NN	Foreign=Yes	5	obl	_	_
9	de	de	X	NNP	Foreign=Yes	8	flat:foreign	_	_
10	las	las	X	NNP	Foreign=Yes	8	flat:foreign	_	_
11	Victorias	Victorias	X	NNP	Foreign=Yes	8	flat:foreign	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	рассказала	рассказать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	CNN	CNN	PROPN	NNP	Abbr=Yes|Foreign=Yes	2	iobj	_	_
4	Style	Style	PROPN	NNP	Foreign=Yes	3	flat:foreign	_	_
5	о	о	ADP	IN	_	7	case	_	_
6	своих	свой	DET	PRP$	Case=Loc|Number=Plur	7	det	_	_
7	впечатлениях	впечатление	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat:foreign	color:blue
1	Одновременно	одновременно	ADV	RB	Degree=Pos	7	advmod	_	_
2	в	в	ADP	IN	_	3	case	_	_
3	середине	середина	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	obl	_	_
4	1970-х	1970-й	ADJ	ORD	Case=Gen|Degree=Pos|Number=Plur	5	amod	_	_
5	гг.	год	NOUN	NN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
6	Старлин	Старлин	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	создал	создать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	несколько	несколько	NUM	RB	Animacy=Inan|Case=Acc	9	nummod:gov	_	_
9	историй	история	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	obj	_	_
10	для	для	ADP	IN	_	13	case	_	_
11	независимой	независимый	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
12	научно-фантастической	научно-фантастический	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	антологии	антология	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl	_	_
14	«	«	PUNCT	``	_	15	punct	_	SpaceAfter=No
15	Star	star	X	NNP	Foreign=Yes	13	flat	_	_
16	Reach	Reach	PROPN	NNP	Foreign=Yes	15	flat:foreign	_	SpaceAfter=No
17	»	»	PUNCT	'	_	15	punct	_	SpaceAfter=No
18	.	.	PUNCT	.	_	7	punct	_	_

~~~


