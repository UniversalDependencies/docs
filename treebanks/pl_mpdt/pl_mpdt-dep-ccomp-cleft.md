---
layout: base
title:  'Statistics of ccomp:cleft in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `ccomp:cleft`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_mpdt-dep-ccomp-obj.html">ccomp:obj</a></tt>.

63 nodes (0%) are attached to their parents as `ccomp:cleft`.

62 instances of `ccomp:cleft` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1269841269841.

The following 4 pairs of parts of speech are connected with `ccomp:cleft`: <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (56; 89% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp:cleft	color:blue
1	A	a	CCONJ	conj	_	5	cc	5:cc	Translit=A
2	ty	ty	PRON	ppron12:sg:nom:sec	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Translit=ty
3	na	na	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc|Translit=na
4	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg	Translit=tym
5	stoisz	stać	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=stoisz
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
7	aby	aby	SCONJ	comp	_	9	mark	9:mark	Translit=aby
8	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	9	aux:clitic	9:aux:clitic	Translit=ś
9	szukał	szukać	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp:cleft	4:ccomp:cleft	Translit=szukał
10	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	9	obj	9:obj	Translit=czego
11	innego	inny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	SpaceAfter=No|Translit=innego
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 16 ccomp:cleft	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc|Translit=W
2	zakładaniu	zakładać	NOUN	ger:sg:loc:n:imperf:aff	Aspect=Imp|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	6	obl:arg	6:obl:arg	Translit=zakładaniu
3	schodów	schody	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	2	obj	2:obj	Translit=schodow
4	i	i	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=y
5	to	to	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	6:obj	Translit=to
6	uważa	uważać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=uważa
7	Wolff	Wolff	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	SpaceAfter=No|Translit=Wolff
8	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
9	aby	aby	SCONJ	comp	_	16	mark	16:mark	Translit=áby
10	stopnie	stopień	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	16	nsubj	16:nsubj	Translit=stopnie
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc|Translit=w
12	nich	on	PRON	ppron3:pl:loc:n:ter:neut:praep	Case=Loc|Gender=Neut|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	16	obl	16:obl	Translit=nich
13	były	być	AUX	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	16:cop	Translit=były
14	nie	nie	PART	part	Polarity=Neg	16	advmod:neg	16:advmod:neg	Translit=nie
15	do	do	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen|Translit=do
16	pary	para	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	ccomp:cleft	5:ccomp:cleft	SpaceAfter=No|Translit=pary
17	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 20 ccomp:cleft	color:blue
1	Kobieta	kobieta	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	Translit=Kobieta
2	ciężarna	ciężarny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod	1:amod	SpaceAfter=No|Translit=ciężarna
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	gdy	gdy	SCONJ	comp	_	5	mark	5:mark	Translit=gdy
5	karmi	karmić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	SpaceAfter=No|Translit=karmi
6	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
7	podaje	podawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=podaie
8	się	się	PRON	part	PronType=Prs|Reflex=Yes	7	expl:pv	7:expl:pv	Translit=się
9	na	na	ADP	prep:acc	AdpType=Prep	10	case	10:case	Case=Acc|Translit=na
10	niebezpieczeństwo	niebezpieczeństwo	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	7	obl:arg	7:obl:arg	Translit=niebespieczeństwo
11	poronienia	poronić	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	nmod:arg	10:nmod:arg	SpaceAfter=No|Translit=poronienia
12	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
13	okrom	okrom	ADP	prep:gen	AdpType=Prep	14	case	14:case	Case=Gen|Translit=okrom
14	tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	parataxis:insert	7:parataxis:insert	SpaceAfter=No|Translit=tego
15	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
16	iż	iż	SCONJ	comp	_	20	mark	20:mark	Translit=iż
17	jej	on	PRON	ppron3:sg:gen:f:ter:neut:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	18	nmod:poss	18:nmod:poss	Translit=iey
18	pokarm	pokarm	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	20:nsubj	Translit=pokarm
19	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	cop	20:cop	Translit=iest
20	niezdrowy	niezdrowy	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	14	ccomp:cleft	14:ccomp:cleft	SpaceAfter=No|Translit=niezdrowy
21	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.

~~~


