---
layout: base
title:  'Statistics of flat:foreign in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-flat.html">flat</a></tt>.

38 nodes (0%) are attached to their parents as `flat:foreign`.

38 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05263157894737.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (38; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
2	nowych	nowy	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	_
3	odcinkach	odcinek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	4	obl	4:obl	_
4	emitowany	emitować	ADJ	ppas:sg:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
6	program	program	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
7	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
8	The	the	X	ign	Foreign=Yes	6	nmod	6:nmod	_
9	Talking	talking	X	ign	Foreign=Yes	8	flat:foreign	8:flat:foreign	_
10	Dead	dead	X	ign	Foreign=Yes	9	flat:foreign	9:flat:foreign	SpaceAfter=No
11	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


