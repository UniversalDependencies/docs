---
layout: base
title:  'Statistics of csubj:pass in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Zostało	zostać	AUX	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	2:aux:pass	_
2	podkreślone	podkreślić	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
4	że	że	SCONJ	comp	_	7	mark	7:mark	_
5	absolutnie	absolutnie	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	_
6	nie	nie	PART	part	Polarity=Neg	7	advmod:neg	7:advmod:neg	_
7	możemy	móc	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:pass	2:csubj:pass	_
8	podążać	podążać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	dalej	daleko	ADV	adv:com	Degree=Cmp	8	advmod	8:advmod	_
10	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Ins
11	tymi	ten	DET	adj:pl:inst:m1:pos	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	8	obl:arg	8:obl:arg	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
13	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	17	nsubj	17:nsubj	_
14	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	cop	17:cop	_
15	całkowicie	całkowicie	ADV	adv:pos	Degree=Pos	17	advmod	17:advmod	_
16	przeciwko	przeciwko	ADP	prep:dat	AdpType=Prep	17	case	17:case	Case=Dat
17	Włochom	Włochy	PROPN	subst:pl:dat:n:pt	Case=Dat|Gender=Neut|Number=Ptan	11	acl:relcl	11:acl:relcl	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


