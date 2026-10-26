---
layout: base
title:  'Statistics of obl:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pl_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pl_pud-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pud-dep-obl-orphan.html">obl:orphan</a></tt>.

2 nodes (0%) are attached to their parents as `obl:cmp`.

2 instances of `obl:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:cmp	color:blue
1	Klimat	klimat	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj|16:nsubj	_
2	Sahelu	Sahel	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop|16:cop	_
4	podobny	podobny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
5	do	do	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen
6	klimatu	klimat	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl:cmp	4:obl:cmp	_
7	pustyni	pustynia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	_
8	Sahara	Sahara	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nmod	7:nmod	_
9	położonej	położyć	ADJ	ppas:sg:gen:f:perf:aff	Aspect=Perf|Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	amod	7:amod	_
10	bezpośrednio	bezpośrednio	ADV	adv:pos	Degree=Pos	12	advmod	12:advmod	_
11	na	na	ADP	prep:loc	AdpType=Prep	12	case	12:case	Case=Loc
12	północy	północ	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	obl	9:obl	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
14	ale	ale	CCONJ	conj	_	16	cc	16:cc	_
15	mniej	mało	ADV	adv:com	Degree=Cmp	16	advmod	16:advmod	_
16	ekstremalny	ekstremalny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	conj	0:root|4:conj	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 25 obl:cmp	color:blue
1	Najnowsze	nowy	ADJ	adj:pl:nom:f:sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	liczby	liczba	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj|11:nsubj	_
3	odnoszą	odnosić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	do	do	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen
6	24	24	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	3	obl:arg	3:obl:arg	_
7	października	październik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod:flat	6:nmod:flat	_
8	ubiegłego	ubiegły	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
10	i	i	CCONJ	conj	_	11	cc	11:cc	_
11	mówią	mówić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
13	że	że	SCONJ	comp	_	17	mark	17:mark	_
14	nasz	nasz	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	15	det:poss	15:det:poss	_
15	olej	olej	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	17:nsubj	_
16	napędowy	napędowy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	15	amod	15:amod	_
17	kosztuje	kosztować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:obj	11:ccomp:obj	_
18	1.335	1335	NUM	num:pl:acc:n:rec:ncol	Case=Acc|Gender=Neut|Number=Plur|NumForm=Digit|NumType=Card	19	nummod:gov	19:nummod:gov	_
19	euro	euro	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	17	iobj	17:iobj	_
20	za	za	ADP	prep:acc	AdpType=Prep	21	case	21:case	Case=Acc
21	litr	litr	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	obl:arg	17:obl:arg	_
22	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADP|Variant=Short	25	case	25:case	Case=Loc
23	porównaniu	porównanie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	22	fixed	22:fixed	_
24	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	22	fixed	22:fixed	Case=Ins
25	średnią	średni	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	17	obl:cmp	17:obl:cmp	_
26	1.165	1165	X	dig	NumForm=Digit	25	obl	25:obl	_
27	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	28	case	28:case	Case=Loc
28	strefie	strefa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	25	obl	25:obl	_
29	euro	euro	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	28	nmod:arg	28:nmod:arg	SpaceAfter=No
30	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


