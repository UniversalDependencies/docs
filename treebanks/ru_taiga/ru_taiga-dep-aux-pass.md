---
layout: base
title:  'Statistics of aux:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-aux.html">aux</a></tt>.

154 nodes (0%) are attached to their parents as `aux:pass`.

145 instances of `aux:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09090909090909.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (152; 99% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	350	350	NUM	_	NumForm=Digit|NumType=Card	2	nummod:gov	_	_
2	медучреждений	медучреждение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	4	nsubj:pass	_	_
3	были	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
4	реорганизованы	реорганизовать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_~

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
7	.	.	PUNCT	_	_	4	punct	_	_~

~~~


