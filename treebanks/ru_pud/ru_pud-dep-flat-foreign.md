---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

95 nodes (0%) are attached to their parents as `flat:foreign`.

95 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.82105263157895.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (95; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	рассказала	рассказать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	CNN	CNN	X	NNP	Foreign=Yes	2	iobj	_	_
4	Style	Style	X	NNP	Foreign=Yes	3	flat:foreign	_	_
5	о	о	ADP	IN	_	7	case	_	_
6	своих	свой	DET	PRP$	Case=Loc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
7	впечатлениях	впечатление	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


