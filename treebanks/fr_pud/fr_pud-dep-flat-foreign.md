---
layout: base
title:  'Statistics of flat:foreign in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_pud-dep-flat-name.html">flat:name</a></tt>.

17 nodes (0%) are attached to their parents as `flat:foreign`.

17 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17647058823529.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (17; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat:foreign	color:blue
1	Le	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	film	_	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
3	à	à	ADP	INDT	_	7	case	_	_
4	le	le	DET	_	Gender=Masc|Number=Sing	7	det	_	_
5	plus	_	ADV	RBR	_	6	advmod	_	_
6	grand	_	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
7	succès	_	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	2007	_	NUM	CD	_	2	nmod	_	_
10	fut	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
11	El	_	X	FW	_	0	root	_	Proper=True
12	Greco	_	X	GW	Foreign=Yes	11	flat:foreign	_	Proper=True|SpaceAfter=No
13	,	_	PUNCT	,	_	14	punct	_	_
14	réalisé	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	11	ccomp	_	_
15	par	_	ADP	IN	_	16	case	_	_
16	Yannis	_	PROPN	NNP	Gender=Masc|Number=Sing	14	obl	_	_
17	Smaragdis	_	PROPN	NNP	Gender=Masc|Number=Sing	16	flat:name	_	SpaceAfter=No
18	.	_	PUNCT	.	_	11	punct	_	_

~~~


