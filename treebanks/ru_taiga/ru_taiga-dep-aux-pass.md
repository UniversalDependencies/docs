---
layout: base
title:  'Statistics of aux:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-aux.html">aux</a></tt>.

1989 nodes (0%) are attached to their parents as `aux:pass`.

1929 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2262443438914.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (1973; 99% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (16; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Двери	дверь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	_	_
2	и	и	CCONJ	_	_	3	cc	_	_
3	окна	окно	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	1	conj	_	_
4	были	быть	AUX	_	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	_	feat="Transit=Intr"|_
5	открыты	открыть	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	feat="Transit=Tran"|_
6	настежь	настежь	ADV	_	Degree=Pos	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Хотя	хотя	SCONJ	_	_	4	mark	_	_
2	раньше	раньше	ADV	_	Degree=Cmp	4	advmod	_	_
3	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
4	открыт	открытый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
5	ко	ко	ADP	_	_	6	case	_	_
6	всем	все	PRON	_	Animacy=Anim|Case=Dat|Number=Plur|PronType=Tot	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


