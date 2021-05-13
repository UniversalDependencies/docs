---
layout: base
title:  'Statistics of aux:pass in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_lfg-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_lfg-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_lfg-dep-aux-imp.html">aux:imp</a></tt>.

355 nodes (0%) are attached to their parents as `aux:pass`.

327 instances of `aux:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4112676056338.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (355; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Aż	aż	SCONJ	comp	_	7	mark	7:mark	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
3	końcu	koniec	NOUN	subst:sg:loc:m3	Case=Loc|Gender=Masc|Number=Sing|SubGender=Masc3	7	obl	7:obl:w	_
4	podział	podział	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	7	nsubj:pass	7:nsubj:pass	_
5	ten	ten	DET	adj:sg:nom:m3:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem|SubGender=Masc3	4	det	4:det	_
6	został	zostać	AUX	praet:sg:m3:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	przezwyciężony	przezwyciężyć	ADJ	ppas:sg:nom:m3:perf:aff	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc3|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


