---
layout: base
title:  'Statistics of nummod:entity in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="be_hse-dep-nummod-gov.html">nummod:gov</a></tt>.

43 nodes (0%) are attached to their parents as `nummod:entity`.

43 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2093023255814.

The following 2 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (34; 79% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (9; 21% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:entity	color:blue
1	Артыкул	артыкул	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	1	1	NUM	CD	Case=Nom|Gender=Masc	1	nummod:entity	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod:entity	color:blue
1	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Еўрабачанне	Еўрабачанне	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
3	-	-	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	2012	2012	NUM	CD	Case=Nom|NumType=Card	2	nummod:entity	_	SpaceAfter=No
5	"	"	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	8	punct	_	_
7	Беларусь	Беларусь	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	выступіць	выступіць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	пятай	пяты	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	obl	_	_
10	у	у	ADP	IN	_	12	case	_	_
11	другім	другі	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	паўфінале	паўфінал	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	_	_

~~~


