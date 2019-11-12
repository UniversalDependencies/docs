---
layout: base
title:  'Statistics of ccomp:obj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_pud-dep-ccomp-cleft.html">ccomp:cleft</a></tt>.

48 nodes (0%) are attached to their parents as `ccomp:obj`.

48 instances of `ccomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54166666666667.

The following 6 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (30; 63% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (8; 17% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (7; 15% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp:obj	color:blue
1	Powiedzmy	powiedzieć	VERB	impt:pl:pri:perf	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tylko	tylko	PART	part	_	1	advmod:emph	1:advmod:emph	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	że	że	SCONJ	comp	_	6	mark	6:mark	_
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	_
6	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:obj	1:ccomp:obj	_
7	racji	racja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 16 ccomp:obj	color:blue
1	Można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
2	uczciwie	uczciwie	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	_
3	powiedzieć	powiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
5	że	że	SCONJ	comp	_	16	mark	16:mark	_
6	cała	cały	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	praca	praca	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	16:nsubj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
9	życie	życie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	7	conj	7:conj|16:nsubj	_
10	i	i	CCONJ	conj	_	12	cc	12:cc	_
11	każdy	każdy	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	12	det	12:det	_
12	oddech	oddech	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	conj	7:conj|16:nsubj	_
13	Rocco	Rocco	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod|9:nmod|12:nmod	_
14	Catalano	Catalano	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	13	flat	13:flat	_
15	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
16	retro	retro	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp:obj	color:blue
1	Zamiast	zamiast	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	3	obl	3:obl	_
3	postanowili	postanowić	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
5	że	że	SCONJ	comp	_	9	mark	9:mark|15:mark	_
6	Albania	Albania	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj|15:nsubj	_
7	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	cop	9:cop|15:cop	_
8	pod	pod	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
9	władzą	władza	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	3	ccomp:obj	3:ccomp:obj	_
10	osmańską	osmański	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	9	amod	9:amod	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	_
12	ale	ale	CCONJ	conj	_	15	cc	15:cc	_
13	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Ins
14	autonomicznym	autonomiczny	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	15	amod	15:amod	_
15	rządem	rząd	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	9	conj	3:ccomp:obj|9:conj	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


