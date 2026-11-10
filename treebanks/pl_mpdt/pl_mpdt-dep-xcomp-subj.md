---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-pred.html">xcomp:pred</a></tt>.

18 nodes (0%) are attached to their parents as `xcomp:subj`.

15 instances of `xcomp:subj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 5 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (10; 56% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 xcomp:subj	color:blue
1	CUdowne	cudowny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	3	amod	3:amod	Translit=CUdowne
2	Dyszkurować	dyszkurować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	Translit=dyszkurowáć
3	rzeczy	rzecz	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	SpaceAfter=No|Translit=rzeczy
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=iest
6	jedno	jedno	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=iedno
7	co	co	SCONJ	comp	_	9	mark	9:mark	Translit=co
8	cudaki	cudak	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	Translit=cudaki
9	prawić	prawić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	advcl:cmp	6:advcl:cmp	SpaceAfter=No|Translit=práwić
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 xcomp:subj	color:blue
1	Niemała	niemały	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	Translit=Nie máła
2	Mądrość	mądrość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Mądrość
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	mądrze	mądrze	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	Translit=mądrze
5	mówić	mówić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp:subj	2:xcomp:subj	SpaceAfter=No|Translit=mowić
6	;	;	PUNCT	interp	PunctType=Semi	8	punct	8:punct	Translit=;
7	lecz	lecz	CCONJ	conj	_	8	cc	8:cc	Translit=lecz
8	największa	duży	ADJ	adj:sg:nom:f:sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	2	conj	2:conj	SpaceAfter=No|Translit=naywiększa
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
10	MĄDRZE	mądrze	ADV	adv:pos	Degree=Pos	11	advmod	11:advmod	Translit=MADRZE
11	Czynić	czynić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp:subj	8:xcomp:subj	SpaceAfter=No|Translit=CZYNIC
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp:subj	color:blue
1	Lasy	las	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	Translit=Lasy
2	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	Translit=są
3	wielce	wielce	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	Translit=wielce
4	pomocnem	pomocny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	5	amod	5:amod	Translit=pomocném
5	źrzódłem	źrzódło	NOUN	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing	0	root	0:root	Translit=źrzódłem
6	dla	dla	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen|Translit=dla
7	Rzplitej	Rzplita	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl	Translit=Rzplitey
8	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen|Translit=z
9	nich	on	PRON	ppron3:pl:gen:m:ter:neut:praep	Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	11	obl	11:obl	Translit=nich
10	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	5:conj	Translit=ma
11	być	być	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	Translit=bydź
12	za	za	ADP	prep:acc	AdpType=Prep	13	case	13:case	Case=Acc|Translit=za
13	więcej	dużo	ADV	adv:com	Degree=Cmp	11	xcomp:subj	11:xcomp:subj	SpaceAfter=No|Translit=więcey
14	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	Translit=,
15	jak	jak	CCONJ	conj	_	13	obl:cmp	13:obl:cmp	Translit=iak
16	10	10	NUM	dig	NumForm=Digit	20	nummod	20:nummod	SpaceAfter=No|Translit=10
17	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	Translit=.
18	mil	milion	NOUN	brev:pun	Abbr=Yes	16	flat	16:flat	SpaceAfter=No|Translit=mill
19	.	.	PUNCT	interp	PunctType=Peri	18	punct	18:punct	Translit=.
20	drzewa	drzewo	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	15	dep	15:dep	Translit=drzewa
21	przydatnego	przydatny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	20	amod	20:amod	SpaceAfter=No|Translit=przydatnego
22	,	,	PUNCT	interp	PunctType=Comm	29	punct	29:punct	Translit=,
23	a	a	CCONJ	conj	_	29	cc	29:cc	Translit=a
24	ponad	ponad	PART	part	_	25	advmod:emph	25:advmod:emph	Translit=po nad
25	10,000	10,000	NUM	dig	NumForm=Digit	27	nummod	27:nummod	SpaceAfter=No|Translit=10,000
26	.	.	PUNCT	interp	PunctType=Peri	27	punct	27:punct	Translit=.
27	sztuk	sztuka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	29	obj	29:obj	Translit=sztuk
28	drzewa	drzewo	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	27	nmod:arg	27:nmod:arg	Translit=drzewa
29	zapisano	zapisać	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	5:conj	Translit=zapisano
30	na	na	ADP	prep:loc	AdpType=Prep	31	case	31:case	Case=Loc|Translit=na
31	budowie	budowa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	29	obl	29:obl	SpaceAfter=No|Translit=budowie
32	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


