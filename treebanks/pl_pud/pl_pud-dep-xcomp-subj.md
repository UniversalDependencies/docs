---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pud-dep-xcomp-pred.html">xcomp:pred</a></tt>.

2 nodes (0%) are attached to their parents as `xcomp:subj`.

1 instances of `xcomp:subj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 6 xcomp:subj	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	16	punct	16:punct	_
2	Muszę	musieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	16	parataxis:obj	16:parataxis:obj	_
3	pogratulować	pogratulować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	Andy’emu	Andy	PROPN	subst:sg:dat:m1	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing	3	iobj	3:iobj	_
5	–	–	PUNCT	interp	PunctType=Dash	14	punct	14:punct	_
6	dotrzeć	dotrzeć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	14	xcomp:subj	14:xcomp:subj	_
7	na	na	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
8	pierwsze	pierwszy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	miejsce	miejsce	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	6	obl	6:obl	_
10	na	na	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
11	świecie	świat	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	nmod	9:nmod	_
12	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	14	cop	14:cop	_
13	niesłychane	niesłychany	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	14	amod	14:amod	_
14	osiągnięcie	osiągnięcie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	conj	2:conj|16:parataxis:obj	_
15	—	—	PUNCT	interp	PunctType=Dash	16	punct	16:punct	_
16	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
17	Amerykanin	Amerykanin	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	16	nsubj	16:nsubj	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	_

~~~


