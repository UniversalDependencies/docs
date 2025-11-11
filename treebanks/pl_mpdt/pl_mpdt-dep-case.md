---
layout: base
title:  'Statistics of case in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `case`

This relation is universal.

4335 nodes (9%) are attached to their parents as `case`.

4334 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33356401384083.

The following 13 pairs of parts of speech are connected with `case`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (3146; 73% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (468; 11% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (402; 9% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (134; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (101; 2% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (45; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (28; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-X.html">X</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	2	2	NUM	dig	NumForm=Digit	0	root	0:root	Translit=2
2	prześcieradła	prześcieradło	NOUN	subst:pl:nom:n	Case=Nom|Gender=Neut|Number=Plur	1	nmod:arg	1:nmod:arg	SpaceAfter=No|Translit=przesciradła
3	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
4	co	co	PART	part	_	9	mark	2:ref|9:mark	Translit=co
5	ino	ino	PART	part	_	8	advmod	8:advmod	Translit=ino
6	po	po	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc|Translit=po
7	jedny	jeden	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	Translit=iedny
8	stronie	strona	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	orphan	9:orphan	Translit=sztronie
9	koronki	koronka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	2	acl:relcl	2:acl:relcl	Translit=koronky
10	przy	przy	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc|Translit=przy
11	nich	on	PRON	ppron3:pl:loc:n:ter:neut:praep	Case=Loc|Gender=Neut|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	9	orphan	9:orphan	SpaceAfter=No|Translit=nich
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
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


