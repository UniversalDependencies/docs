---
layout: base
title:  'Statistics of nmod:pred in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:pred`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:pred`.

2 instances of `nmod:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 1 pairs of parts of speech are connected with `nmod:pred`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod:pred	color:blue
1	Pomimo	pomimo	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	bycia	być	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	11	obl	11:obl	_
3	największym	duży	ADJ	adj:sg:inst:m3:sup	Animacy=Inan|Case=Ins|Degree=Sup|Gender=Masc|Number=Sing	5	amod	5:amod	_
4	światowym	światowy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	dystrybutorem	dystrybutor	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	nmod:pred	2:nmod:pred	_
6	sprzętu	sprzęt	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod:arg	5:nmod:arg	_
7	i	i	CCONJ	conj	_	8	cc	8:cc	_
8	tekstyliów	tekstylia	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	6	conj	5:nmod:arg|6:conj	_
9	niemiecka	niemiecki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	firma	firma	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	_
11	miała	mieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	problemy	problem	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	iobj	11:iobj	_
13	finansowe	finansowy	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


