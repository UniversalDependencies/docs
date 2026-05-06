---
layout: base
title:  'Statistics of amod:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `amod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-amod.html">amod</a></tt>.
There are also 1 other language-specific subtypes of `amod`: <tt><a href="pl_pud-dep-amod-flat.html">amod:flat</a></tt>.

18 nodes (0%) are attached to their parents as `amod:cmp`.

18 instances of `amod:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11111111111111.

The following 1 pairs of parts of speech are connected with `amod:cmp`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (18; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod:cmp	color:blue
1	Miasta	miasto	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	9	nsubj	9:nsubj	_
2	takie	taki	DET	adj:pl:nom:n:pos	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	1	amod:cmp	1:amod:cmp	_
3	jak	jak	SCONJ	comp	_	4	mark	4:mark	_
4	Mediolan	Mediolan	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	2:ccomp	_
5	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
7	80	80	NUM	num:pl:loc:m3:congr	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
8	%	procent	NOUN	brev:npun	Abbr=Yes	9	obl	9:obl	_
9	zależne	zależny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	0	root	0:root	_
10	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Gen
11	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	_
12	spływającej	spływać	ADJ	pact:sg:gen:f:imperf:aff	Aspect=Imp|Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	11	amod	11:amod	_
13	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Gen
14	Alp	Alpy	PROPN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	12	obl	12:obl	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


