---
layout: base
title:  'Statistics of xcomp:cleft in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp:cleft`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-subj.html">xcomp:subj</a></tt>.

2 nodes (0%) are attached to their parents as `xcomp:cleft`.

2 instances of `xcomp:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `xcomp:cleft`: <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 xcomp:cleft	color:blue
1	Bóg	Bóg	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj|23:nsubj	Translit=Bóg
2	kiedy	kiedy	ADV	adv	PronType=Int	3	advmod	3:advmod	Translit=kiedy
3	wydaje	wydawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	10:advcl	Translit=wydaje
4	Światu	świat	NOUN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	3	iobj	3:iobj	Translit=Swiatu
5	ludzi	człowiek	NOUN	subst:pl:acc:manim1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	3	obj	3:obj	SpaceAfter=No|Translit=ludzi
6	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	Translit=,
7	nie	nie	PART	part	Polarity=Neg	9	advmod:neg	9:advmod:neg	Translit=nie
8	na	na	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc|Translit=na
9	to	to	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl	10:obl	Translit=to
10	daje	dawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=daje
11	im	on	PRON	ppron3:pl:dat:m:ter:neut:npraep	Case=Dat|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	10	iobj	10:iobj	Translit=im
12	życie	życie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	10	obj	10:obj	SpaceAfter=No|Translit=życie
13	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
14	aby	aby	SCONJ	comp	_	16	mark	16:mark	Translit=aby
15	zaraz	zaraz	ADV	adv	_	16	advmod	16:advmod	Translit=zaraz
16	oddać	oddać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	9	xcomp:cleft	9:xcomp:cleft	Translit=oddać
17	na	na	ADP	prep:acc	AdpType=Prep	18	case	18:case	Case=Acc|Translit=na
18	łup	łup	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	16	obl	16:obl	Translit=łup
19	śmierci	śmierć	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	16	iobj	16:iobj	SpaceAfter=No|Translit=śmierci
20	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	Translit=,
21	ale	ale	CCONJ	conj	_	23	cc	23:cc	Translit=ale
22	nie	nie	PART	part	Polarity=Neg	23	advmod:neg	23:advmod:neg	Translit=nie
23	łaskawy	łaskawy	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	conj	10:conj	Translit=łaskawy
24	ż	ż	PART	part:nwok	_	23	advmod:emph	23:advmod:emph	Translit=ż
25	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	26	case	26:case	Case=Loc|Translit=w
26	stworzeniu	stworzenie	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	23	obl	23:obl	Translit=stworzeniu
27	dla	dla	ADP	prep:gen	AdpType=Prep	28	case	28:case	Case=Gen|Translit=dla
28	człowieka	człowiek	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	26	nmod	26:nmod	Translit=człowieka
29	ręki	ręka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	26	obj	26:obj	Translit=ręki
30	gdy	gdy	SCONJ	comp	_	34	mark	34:mark	Translit=gdy
31	jej	on	PRON	ppron3:sg:gen:f:ter:neut:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	34	obj	34:obj	Translit=iey
32	na	na	ADP	prep:acc	AdpType=Prep	33	case	33:case	Case=Acc|Translit=na
33	zabicie	zabić	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	34	obl	34:obl	Translit=zabicie
34	używa	używać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	23:advcl	Translit=używa
35	bliźniego	bliźni	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	33	obj	33:obj	SpaceAfter=No|Translit=bliźniego
36	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	Translit=.

~~~


