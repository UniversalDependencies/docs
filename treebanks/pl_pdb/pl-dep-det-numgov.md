---
layout: base
title:  'Statistics of det:numgov in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="pl-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="pl-dep-det-nummod.html">det:nummod</a></tt>.

76 nodes (0%) are attached to their parents as `det:numgov`.

74 instances of `det:numgov` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23684210526316.

The following 2 pairs of parts of speech are connected with `det:numgov`: <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-DET.html">DET</a></tt> (75; 99% instances), <tt><a href="pl-pos-PRON.html">PRON</a></tt>-<tt><a href="pl-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:numgov	color:blue
1	Uświadomiła	uświadomić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	6	punct	_	_
4	że	że	SCONJ	comp	_	6	case	_	_
5	kilkadziesiąt	kilkadziesiąt	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	det:numgov	_	_
6	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	ccomp	_	_
7	to	to	AUX	pred	_	6	cop	_	_
8	całe	cały	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	wieki	wiek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:numgov	color:blue
1	Jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ich	on	PRON	ppron3:pl:gen:m3:ter:akc:npraep	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	1	nsubj	_	_
3	kilkanaście	kilkanaście	DET	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	2	det:numgov	_	SpaceAfter=No
4	.	.	PUNCT	interp	_	1	punct	_	_

~~~


