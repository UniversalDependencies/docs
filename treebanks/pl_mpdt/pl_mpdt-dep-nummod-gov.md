---
layout: base
title:  'Statistics of nummod:gov in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="pl_mpdt-dep-nummod-flat.html">nummod:flat</a></tt>.

122 nodes (0%) are attached to their parents as `nummod:gov`.

87 instances of `nummod:gov` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42622950819672.

The following 5 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (115; 94% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod:gov	color:blue
1	Podwórze	podwórze	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=Podwórze
2	ostrogowane	ostrogowany	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	amod	1:amod	SpaceAfter=No|Translit=ostrogowane
3	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	Translit=,
4	wrót	wrota	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	1	conj	1:conj	Translit=wrót
5	dwoje	dwa	NUM	numcol:pl:nom:n	Case=Nom|Gender=Neut|Number=Plur|NumForm=Word	4	nummod:gov	4:nummod:gov	Translit=dwoje
6	o	o	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc|Translit=o
7	2	2	NUM	dig	NumForm=Digit	8	nummod	8:nummod	Translit=2
8	drzwiach	drzwi	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	4	nmod	4:nmod	Translit=drzwiach
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	fortkami	fortka	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	8	nmod	8:nmod	SpaceAfter=No|Translit=fortkami
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nummod:gov	color:blue
1	Piechota	piechota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Translit=Piechotá
2	zaś	zaś	CCONJ	conj	_	10	cc	10:cc	SpaceAfter=No|Translit=záś
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	której	który	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	5	nsubj	5:nsubj	Translit=ktorey
5	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	Translit=było
6	ośm	ośm	NUM	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	4	nummod:gov	4:nummod:gov	Translit=ośm
7	tysięcy	tysiąc	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	6	flat	6:flat	SpaceAfter=No|Translit=tyśięcy
8	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
9	wszytka	wszytek	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod	1:amod	Translit=wszytká
10	wycięta	wyciąć	ADJ	ppas:sg:nom:f:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|Translit=wyćięta
11	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod:gov	color:blue
1	Wziąwszy	wziąć	VERB	pant:perf	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	36	advcl	36:advcl	Translit=Wźiąwszy
2	tedy	tedy	CCONJ	conj	_	36	cc	36:cc	Translit=tedy
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Gen|Translit=z
4	swego	swój	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det:poss	5:det:poss	Translit=swego
5	Pułku	pułk	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	1	obl	1:obl	Translit=Pułku
6	pięć	pięć	NUM	num:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	7	nummod:gov	7:nummod:gov	Translit=pięć
7	Chorągwi	chorągiew	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	obj	1:obj	Translit=Chorągwi
8	Draguńskich	draguński	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	7	amod	7:amod	Translit=Dráguńskich
9	i	i	CCONJ	conj	_	11	cc	11:cc	Translit=y
10	dwie	dwa	NUM	num:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	11	nummod:gov	11:nummod:gov	Translit=dwie
11	Usarskich	usarski	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	7	conj	1:obj|7:conj	SpaceAfter=No|Translit=Vsárskich
12	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	Translit=,
13	także	także	PART	part	_	15	advmod:emph	15:advmod:emph	Translit=tákże
14	swą	swój	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	15	det:poss	15:det:poss	Translit=swą
15	Chorągiew	chorągiew	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	conj	1:obj|7:conj	Translit=Chorągiew
16	Kozacką	kozacki	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	amod	15:amod	SpaceAfter=No|Translit=Kozácką
17	,	,	PUNCT	interp	PunctType=Comm	26	punct	26:punct	Translit=,
18	i	i	CCONJ	conj	_	26	cc	26:cc	Translit=y
19	Pana	pan	NOUN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	26	nmod:poss	26:nmod:poss	Translit=Páná
20	Krajczego	krajczy	NOUN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	19	appos	19:appos	Translit=Kráyczego
21	Koronnego	koronny	ADJ	adj:sg:acc:manim2:pos	Animacy=Nhum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	20	amod	20:amod	SpaceAfter=No|Translit=Koronnego
22	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	Translit=,
23	Zięcia	zięć	NOUN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	19	appos	19:appos	Translit=Zięćiá
24	swego	swój	DET	adj:sg:acc:manim2:pos	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	23	det:poss	23:det:poss	SpaceAfter=No|Translit=swego
25	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	Translit=,
26	drugą	drugi	ADJ	adjnum:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	15	conj	1:obj|7:conj|15:conj	SpaceAfter=No|Translit=drugą
27	,	,	PUNCT	interp	PunctType=Comm	31	punct	31:punct	Translit=,
28	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	31	case	31:case	Case=Ins|Translit=ze
29	dwiema	dwa	NUM	num:pl:inst:n	Case=Ins|Gender=Neut|Number=Plur|NumForm=Word	31	nummod	31:nummod	Translit=dwiema
30	polnemi	polny	ADJ	adj:pl:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Plur	31	amod	31:amod	Translit=polnemi
31	działami	działo	NOUN	subst:pl:inst:n	Case=Ins|Gender=Neut|Number=Plur	26	obl	26:obl	SpaceAfter=No|Translit=dźiáłámi
32	,	,	PUNCT	interp	PunctType=Comm	31	punct	31:punct	Translit=,
33	nieprzyjaciela	nieprzyjaciel	NOUN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	36	obj	36:obj	Translit=nieprzyiaćielá
34	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	35	case	35:case	Case=Gen|Translit=z
35	grobli	grobla	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	36	obl	36:obl	Translit=grobli
36	spędził	spędzić	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=zpędźił
37	.	.	PUNCT	interp	PunctType=Peri	36	punct	36:punct	Translit=.

~~~


