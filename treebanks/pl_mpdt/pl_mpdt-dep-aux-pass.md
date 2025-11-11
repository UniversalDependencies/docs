---
layout: base
title:  'Statistics of aux:pass in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-imp.html">aux:imp</a></tt>.

163 nodes (0%) are attached to their parents as `aux:pass`.

92 instances of `aux:pass` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41104294478528.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (163; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:pass	color:blue
1	Kończy	kończyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Kończy
2	żądając	żądać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	1	advcl	1:advcl	SpaceAfter=No|Translit=żądając
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
4	aby	aby	SCONJ	comp	_	8	mark	8:mark	Translit=aby
5	przeciw	przeciw	ADP	prep:dat	AdpType=Prep	6	case	6:case	Case=Dat|Translit=przeciw
6	oskarżonym	oskarżony	NOUN	subst:pl:dat:m	Case=Dat|Gender=Masc|Number=Plur	8	obl	8:obl	Translit=oskarżonym
7	dowody	dowód	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	8	nsubj:pass	8:nsubj:pass	Translit=dowody
8	złożone	złożyć	ADJ	ppas:pl:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	Translit=złożone
9	były	być	AUX	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	SpaceAfter=No|Translit=były
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


