---
layout: base
title:  'Statistics of discourse:emo in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `discourse:emo`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="pl_pdb-dep-discourse-intj.html">discourse:intj</a></tt>.

8 nodes (0%) are attached to their parents as `discourse:emo`.

8 instances of `discourse:emo` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.625.

The following 2 pairs of parts of speech are connected with `discourse:emo`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (6; 75% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 discourse:emo	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	co	co	PART	part	_	2	fixed	2:fixed	_
4	dramatyzować	dramatyzować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
7	jeszcze	jeszcze	PART	part	_	6	advmod:emph	6:advmod:emph	_
8	news:pl.rec.kuchnia	news:pl.rec.kuchnia	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
9	:-)	:-)	SYM	emo	_	2	discourse:emo	2:discourse:emo|6:discourse:emo	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 discourse:emo	color:blue
1	Mógł	móc	VERB	praet:sg:m1:imperf:agl	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	by	by	AUX	part	_	1	aux:cnd	1:aux:cnd	_
3	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	1	aux:clitic	1:aux:clitic	_
4	przecież	przecież	PART	part	_	1	advmod:emph	1:advmod:emph	_
5	napisać	napisać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	że	że	SCONJ	comp	_	9	mark	9:mark	_
8	jesteś	być	AUX	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	wielorybem	wieloryb	NOUN	subst:sg:inst:m2	Animacy=Nhum|Case=Ins|Gender=Masc|Number=Sing	5	ccomp	5:ccomp	_
10	i	i	CCONJ	conj	_	12	cc	12:cc	_
11	nawet	nawet	PART	part	_	12	advmod:emph	12:advmod:emph	_
12	poprzeć	poprzeć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	conj	1:xcomp|5:conj	_
13	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	12	obj	12:obj	_
14	argumentami	argument	NOUN	subst:pl:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	12	iobj	12:iobj	SpaceAfter=No
15	:	:	PUNCT	interp	PunctType=Colo	12	punct	12:punct	_
16	jesteś	być	AUX	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	18:cop	_
17	Wiesiu	Wiesio	PROPN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	18	vocative	18:vocative	_
18	ssakiem	ssak	NOUN	subst:sg:inst:m2	Animacy=Nhum|Case=Ins|Gender=Masc|Number=Sing	12	parataxis:obj	12:parataxis:obj	_
19	i	i	PART	part	_	22	advmod:emph	22:advmod:emph	_
20	to	to	PART	part	_	19	fixed	19:fixed	_
21	mocno	mocno	ADV	adv:pos	Degree=Pos	22	advmod	22:advmod	_
22	otyłym	otyły	ADJ	adj:sg:inst:m2:pos	Animacy=Nhum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	18	amod	18:amod	SpaceAfter=No
23	:)))))))))	:)	SYM	emo	_	18	discourse:emo	18:discourse:emo	_

~~~


