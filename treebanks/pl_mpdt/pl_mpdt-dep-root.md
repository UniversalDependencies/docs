---
layout: base
title:  'Statistics of root in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `root`

This relation is universal.

2018 nodes (4%) are attached to their parents as `root`.

2018 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63577799801784.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1524; 76% instances), -<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (227; 11% instances), -<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (133; 7% instances), -<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (37; 2% instances), -<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (31; 2% instances), -<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (18; 1% instances), -<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (15; 1% instances), -<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (10; 0% instances), -<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (10; 0% instances), -<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), -<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="pl_mpdt-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), -<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Poszycie	poszycie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	3:nsubj	Translit=Poszycie
2	wszędzie	wszędzie	ADV	adv	PronType=Tot	3	advmod	3:advmod	Translit=wszędzie
3	niezgorsze	niezgorszy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=niezgorsze
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


