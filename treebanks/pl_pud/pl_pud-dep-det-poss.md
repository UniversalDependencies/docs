---
layout: base
title:  'Statistics of det:poss in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pud-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pud-dep-det-nummod.html">det:nummod</a></tt>.

80 nodes (0%) are attached to their parents as `det:poss`.

80 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2625.

The following 1 pairs of parts of speech are connected with `det:poss`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (80; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:poss	color:blue
1	Można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
2	wskazać	wskazać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
3	paralele	paralela	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	_
4	między	między	ADP	prep:inst	AdpType=Prep	5	case	5:case|9:case	Case=Ins
5	grami	gra	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	3	nmod	3:nmod	_
6	a	a	CCONJ	conj	_	9	cc	9:cc	_
7	naszym	nasz	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	_
8	codziennym	codzienny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	życiem	życie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	5	conj	3:nmod|5:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


