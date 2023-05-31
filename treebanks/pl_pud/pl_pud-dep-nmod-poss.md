---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:poss`.

2 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Zdaniem	zdanie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	9	parataxis:insert	9:parataxis:insert	_
2	naukowców	naukowiec	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	1	nmod:poss	1:nmod:poss	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
4	analiza	analiza	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
5	DNA	DNA	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	występującego	występować	ADJ	pact:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	5	acl	5:acl	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
8	guzach	guz	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	6	obl	6:obl	_
9	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	pomóc	pomóc	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	9	xcomp	9:xcomp	_
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc
12	wyjaśnieniu	wyjaśnić	NOUN	ger:sg:loc:n:perf:aff	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	obl:arg	10:obl:arg	_
13	przyczyn	przyczyna	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	12	obj	12:obj	_
14	innych	inny	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	15	amod	15:amod	_
15	nowotworów	nowotwór	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	13	nmod	13:nmod	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	16	punct	16:punct	_
2	Zdaniem	zdanie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	6	parataxis:insert	6:parataxis:insert	_
3	Pekinu	Pekin	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod:poss	2:nmod:poss	_
4	interwencja	interwencja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	konieczna	konieczny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	16	parataxis:obj	16:parataxis:obj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	aby	aby	SCONJ	comp	_	9	mark	9:mark	_
9	zapobiec	zapobiec	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	6	advcl	6:advcl	_
10	dalszemu	daleki	ADJ	adj:sg:dat:m3:com	Animacy=Inan|Case=Dat|Degree=Cmp|Gender=Masc|Number=Sing	12	amod	12:amod	_
11	prawodawczemu	prawodawczy	ADJ	adj:sg:dat:m3:pos	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	_
12	paraliżowi	paraliż	NOUN	subst:sg:dat:m3	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	9	iobj	9:iobj	_
13	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Loc
14	mieście	miasto	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	12	nmod	12:nmod	_
15	–	–	PUNCT	interp	PunctType=Dash	16	punct	16:punct	_
16	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	_

~~~


