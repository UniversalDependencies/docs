---
layout: base
title:  'Statistics of amod:flat in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `amod:flat`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-amod.html">amod</a></tt>.

46 nodes (0%) are attached to their parents as `amod:flat`.

38 instances of `amod:flat` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08695652173913.

The following 3 pairs of parts of speech are connected with `amod:flat`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (24; 52% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (20; 43% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod:flat	color:blue
1	Starostwo	starostwo	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=Starostwo
2	Sochaczewskie	sochaczewski	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	amod:flat	1:amod:flat	Translit=Sochaczewskie
3	fl	floren	ADV	brev:pun	Abbr=Yes	5	dep	5:dep	SpaceAfter=No|Translit=fl
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.
5	2000	2000	NUM	dig	NumForm=Digit	1	orphan	1:orphan	SpaceAfter=No|Translit=2000
6	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.
7	i	i	CCONJ	conj	_	8	cc	8:cc	Translit=v
8	20	20	NUM	dig	NumForm=Digit	5	conj	1:orphan|5:conj	SpaceAfter=No|Translit=20
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	Translit=.
10	Jałowic	jałowica	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	8	nmod:arg	8:nmod:arg	SpaceAfter=No|Translit=Iałowic
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod:flat	color:blue
1	kędy	kędy	ADV	adv	_	2	advmod	2:advmod	Translit=kędy
2	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	0	root	0:root	Translit=ś
3	Domie	dom	NOUN	subst:sg:voc:m	Case=Voc|Gender=Masc|Number=Sing	2	vocative	2:vocative	Translit=Domie
4	Kostków	Kostka	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	3	nmod:poss	3:nmod:poss	SpaceAfter=No|Translit=Kostkow
5	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	Translit=2
6	Aklamacją	aklamacja	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	10	iobj	10:iobj	Translit=Aklamácyią
7	na	na	ADP	prep:acc	AdpType=Prep	8	case	8:case	Case=Acc|Translit=ná
8	Królestwo	Królestwo	PROPN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	10	obl	10:obl	Translit=Krolestwo
9	Polskie	Polski	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	amod:flat	8:amod:flat	Translit=Polskie
10	ozdobiony	ozdobić	ADJ	ppas:sg:voc:m:perf:aff:pos	Aspect=Perf|Case=Voc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	SpaceAfter=No|Translit=ozdobiony
11	!	!	PUNCT	interp	PunctType=Excl	2	punct	2:punct	Translit=!

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod:flat	color:blue
1	Roku	rok	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl	Translit=Roku
2	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Gen|Translit=od
3	Narodzenia	narodzenie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	5	obl	5:obl	Translit=Národzenia
4	Chrystusowego	chrystusowy	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	3	amod	3:amod	Translit=Chrystusowego
5	Pięćsetnego	pięćsetny	ADJ	adjnum:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	1	amod:flat	1:amod:flat	Translit=Pięćsetnego
6	dwudziestego	dwudziesty	ADJ	adjnum:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	5	amod:flat	5:amod:flat	Translit=dwudźiestego
7	trzeciego	trzeci	ADJ	adjnum:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	6	amod:flat	6:amod:flat	Translit=trzećiego
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc|Translit=w
9	Sublaku	Sublak	PROPN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	10	obl	10:obl	Translit=Sublaku
10	ofiarowani	ofiarować	ADJ	ppas:pl:nom:manim1:biasp:aff:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=ofiárowáni
11	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux:pass	10:aux:pass	Translit=są
12	do	do	ADP	prep:gen	AdpType=Prep	13	case	13:case	Case=Gen|Translit=do
13	Zakonu	zakon	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl	Translit=Zakonu
14	Ś	święty	ADJ	brev:pun	Abbr=Yes	16	amod	16:amod	SpaceAfter=No|Translit=S
15	.	.	PUNCT	interp	PunctType=Peri	14	punct	14:punct	Translit=.
16	Benedyktowi	Benedykt	PROPN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	10	obl	10:obl	Translit=Benedyktowi
17	Maurus	Maurus	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	10:nsubj:pass	Translit=Maurus
18	i	i	CCONJ	conj	_	19	cc	19:cc	Translit=y
19	Placydus	Placydus	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	17	conj	10:nsubj:pass|17:conj	SpaceAfter=No|Translit=Plácydus
20	/	/	PUNCT	interp	PunctType=Slsh	21	punct	21:punct	Translit=/
21	jako	jako	SCONJ	comp	_	10	parataxis:insert	10:parataxis:insert	Translit=iáko
22	Roczne	roczny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	23	amod	23:amod	Translit=Roczne
23	Dzieje	dzieje	NOUN	subst:pl:nom:n:pt	Case=Nom|Gender=Neut|Number=Ptan	27	nsubj	27:nsubj	Translit=Dźieie
24	Kościelne	kościelny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	23	amod	23:amod	Translit=Kośćielne
25	Kardynała	kardynał	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	23	nmod:poss	23:nmod:poss	Translit=Kárdynałá
26	Baroniusza	Baroniusz	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	25	appos	25:appos	Translit=Bároniuszá
27	mają	mieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	ccomp	21:ccomp	SpaceAfter=No|Translit=máią
28	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	Translit=.

~~~


