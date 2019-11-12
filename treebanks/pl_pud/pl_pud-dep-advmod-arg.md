---
layout: base
title:  'Statistics of advmod:arg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pud-dep-advmod-neg.html">advmod:neg</a></tt>.

1 nodes (0%) are attached to their parents as `advmod:arg`.

1 instances of `advmod:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `advmod:arg`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 advmod:arg	color:blue
1	Musisz	musieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
3	temu	to	PRON	subst:sg:dat:n:ncol	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	4	iobj	4:iobj	_
4	sprzeciwić	sprzeciwić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	a	a	CCONJ	conj	_	8	cc	8:cc	_
7	ja	ja	PRON	ppron12:sg:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
8	wolę	woleć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
10	kiedy	kiedy	ADV	adv	PronType=Int	8	advmod:arg	8:advmod:arg	_
11	ktoś	ktoś	PRON	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	15	nsubj	15:nsubj	_
12	się	się	PRON	part	PronType=Prs|Reflex=Yes	15	expl:pv	15:expl:pv	_
13	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	14	case	14:case	Case=Ins
14	mną	ja	PRON	ppron12:sg:inst:m1:pri	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing|Person=1|PronType=Prs	15	obl:arg	15:obl:arg	_
15	konfrontuje	konfrontować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	ccomp	10:ccomp	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	_
17	niż	niż	SCONJ	comp	ConjType=Cmpr	18	mark	18:mark	_
18	kiedy	kiedy	ADV	adv	PronType=Int	15	obl:cmpr	15:obl:cmpr	_
19	mnie	ja	PRON	ppron12:sg:gen:m1:pri:akc	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Long	20	obj	20:obj	_
20	unika	unikać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp	18:ccomp	SpaceAfter=No
21	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


