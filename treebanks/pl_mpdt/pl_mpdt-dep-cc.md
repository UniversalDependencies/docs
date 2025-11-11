---
layout: base
title:  'Statistics of cc in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pl_mpdt-dep-cc-preconj.html">cc:preconj</a></tt>.

2159 nodes (5%) are attached to their parents as `cc`.

2130 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.32885595182955.

The following 15 pairs of parts of speech are connected with `cc`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (934; 43% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (744; 34% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (279; 13% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (68; 3% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (41; 2% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (29; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (26; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (15; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Atoli	atoli	CCONJ	conj	_	5	cc	5:cc	Translit=Atoli
2	wprawdzie	wprawdzie	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=w prawdzie
3	mówić	mówić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	Translit=mowić
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Translit=się
5	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=może
6	iż	iż	SCONJ	comp	_	8	mark	8:mark	Translit=iż
7	tu	tu	ADV	adv	PronType=Dem	8	advmod	8:advmod	Translit=tu
8	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No|Translit=iest
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
10	gdzie	gdzie	ADV	adv	PronType=Rel	11	advmod	11:advmod	Translit=gdzie
11	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	SpaceAfter=No|Translit=iest
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc	color:blue
1	A	a	CCONJ	conj	_	9	cc	9:cc	Translit=A
2	jeśli	jeśli	SCONJ	comp	_	3	mark	3:mark	Translit=iesli
3	Apostołów	apostoł	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	9	nmod	9:nmod	SpaceAfter=No|Translit=Apostołow
4	/	/	PUNCT	interp	PunctType=Slsh	3	punct	3:punct	Translit=/
5	tedy	tedy	PART	part	_	9	advmod	9:advmod	Translit=tedy
6	ć	ć	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=ć
7	i	i	PART	part	_	9	advmod:emph	9:advmod:emph	Translit=y
8	wszytkich	wszytek	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	9	amod	9:amod	Translit=wszytkich
9	Chrześcijan	chrześcijanin	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No|Translit=Chrześćian
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
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


