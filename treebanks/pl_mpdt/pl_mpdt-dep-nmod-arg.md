---
layout: base
title:  'Statistics of nmod:arg in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="pl_mpdt-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_mpdt-dep-nmod-poss.html">nmod:poss</a></tt>.

679 nodes (1%) are attached to their parents as `nmod:arg`.

520 instances of `nmod:arg` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.87923416789396.

The following 17 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (467; 69% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (131; 19% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (27; 4% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (26; 4% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:arg	color:blue
1	Odległość	odległość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	Translit=Odległość
2	Planet	planeta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	nmod:arg	1:nmod:arg	Translit=Planet
3	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Gen|Translit=od
4	ziemi	Ziemia	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod:arg	1:nmod:arg	Translit=ziemi
5	dwojaka	dwojaki	ADJ	adjnum:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	6	xcomp:pred	6:xcomp:pred	Translit=dwoiaka
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=iest
7	większa	duży	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	6	xcomp:pred	6:xcomp:pred	SpaceAfter=No|Translit=większa
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
9	i	i	CCONJ	conj	_	10	cc	10:cc	Translit=y
10	mniejsza	mały	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	7	conj	6:xcomp:pred|7:conj	SpaceAfter=No|Translit=mnieysza
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:arg	color:blue
1	Podwórze	podwórze	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=Podwórze
2	ostrogowane	ostrogowany	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	amod	1:amod	SpaceAfter=No|Translit=ostrogowane
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	wrót	wrota	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	5	nmod:arg	5:nmod:arg	Translit=wrót
5	dwoje	dwa	NUM	numcol:pl:nom:n	Case=Nom|Gender=Neut|Number=Plur|NumForm=Word	1	conj	1:conj	Translit=dwoje
6	o	o	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc|Translit=o
7	2	2	NUM	dig	NumForm=Digit	4	amod	4:amod	Translit=2
8	drzwiach	drzwi	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	7	nmod:arg	7:nmod:arg	Translit=drzwiach
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	fortkami	fortka	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	8	nmod	8:nmod	SpaceAfter=No|Translit=fortkami
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nmod:arg	color:blue
1	Psi	psi	ADJ	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	Translit=Psi
2	i	i	CCONJ	conj	_	3	cc	3:cc	Translit=y
3	Wilcy	wilk	NOUN	subst:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	1	conj	1:conj|7:nsubj	Translit=Wilcy
4	do	do	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen|Translit=do
5	szaleństwa	szaleństwo	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	6	obl:arg	6:obl:arg	Translit=szalęnstwa
6	skłonni	skłonny	ADJ	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	xcomp:pred	7:xcomp:pred	Translit=skłonni
7	będą	być	VERB	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=będą
8	/	/	PUNCT	interp	PunctType=Slsh	11	punct	11:punct	Translit=/
9	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	12	nmod:arg	12:nmod:arg	Translit=ćzego
10	już	już	PART	part	_	11	advmod:emph	11:advmod:emph	Translit=iuż
11	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl:relcl	7:advcl:relcl	Translit=są
12	początki	początek	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	SpaceAfter=No|Translit=poćzątki
13	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.

~~~


