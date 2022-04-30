---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

1 nodes (0%) are attached to their parents as `nummod:entity`.

1 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod:entity	color:blue
1	10	10	NUM	_	NumForm=Digit|NumType=Card	2	nummod:gov	_	_
2	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	obl	_	_
3	проходил	проходить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	в	в	ADP	_	_	5	case	_	_
5	ДСШ	ДСШ	NOUN	_	Abbr=Yes	3	obl	_	_
6	№	№	SYM	_	_	5	nummod:entity	_	_
7	1	1	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
8	в	в	ADP	_	_	9	case	_	_
9	Дятьково	Дятьково	PROPN	_	Animacy=Inan|Case=Loc|Gender=Neut|NameType=Geo|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_~

~~~


