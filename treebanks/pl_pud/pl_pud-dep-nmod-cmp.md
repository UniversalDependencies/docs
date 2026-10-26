---
layout: base
title:  'Statistics of nmod:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:cmp`.

1 instances of `nmod:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `nmod:cmp`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 nmod:cmp	color:blue
1	To	ten	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	2:det	_
2	państwo	państwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
3	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	SpaceAfter=No
4	miasto	miasto	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	conj	2:conj|5:nsubj	_
5	pojawiło	pojawić	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
8	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|ExtPos=DET|Gender=Masc|Number=Sing|PronType=Dem	10	det	10:det	_
9	samym	sam	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	8	fixed	8:fixed	_
10	okresie	okres	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
12	co	co	ADP	prep:nom	AdpType=Prep	13	case	13:case	Case=Nom
13	Sukhothai	Sukhothai	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	10	nmod:cmp	10:nmod:cmp	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


