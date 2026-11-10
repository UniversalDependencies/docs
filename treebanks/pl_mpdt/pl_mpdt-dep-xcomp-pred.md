---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_mpdt-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_mpdt-dep-xcomp-subj.html">xcomp:subj</a></tt>.

97 nodes (0%) are attached to their parents as `xcomp:pred`.

61 instances of `xcomp:pred` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07216494845361.

The following 15 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (37; 38% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (34; 35% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (6; 6% instances), <tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp:pred	color:blue
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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 xcomp:pred	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	Translit=Ta
2	liczba	liczba	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	Translit=liczba
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	Translit=iest
4	trzykrotna	trzykrotny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	Translit=trzykrotna
5	4	4	NUM	dig	NumForm=Digit	0	root	0:root	SpaceAfter=No|Translit=4
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
7	to	to	PART	part	ExtPos=CCONJ	10	advmod:emph	10:advmod:emph	Translit=to
8	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	fixed	7:fixed	Translit=iest
9	24	24	NUM	dig	NumForm=Digit	10	nsubj	10:nsubj	Translit=24
10	znajduje	znajdować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	5:conj	Translit=znayduie
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	Translit=się
12	3	3	NUM	dig	NumForm=Digit	13	nummod	13:nummod	Translit=3
13	razy	raz	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	10	obl	10:obl	Translit=razy
14	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Loc|Translit=w
15	7	7	NUM	dig	NumForm=Digit	10	obl:arg	10:obl:arg	SpaceAfter=No|Translit=7
16	:	:	PUNCT	interp	PunctType=Colo	19	punct	19:punct	Translit=:
17	więc	więc	SCONJ	comp	_	19	mark	19:mark	Translit=więc
18	wieloraz	wieloraz	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	19	nsubj	19:nsubj	Translit=wieloraz
19	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	10	advcl	10:advcl	Translit=będzie
20	3	3	NUM	dig	NumForm=Digit	21	nummod	21:nummod	Translit=3
21	jedności	jedność	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	19	xcomp:pred	19:xcomp:pred	SpaceAfter=No|Translit=iedności
22	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp:pred	color:blue
1	Niech	niech	AUX	part	_	4	aux:imp	4:aux:imp	Translit=Niech
2	i	i	PART	part	_	3	advmod:emph	3:advmod:emph	Translit=y
3	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	4	xcomp:pred	4:xcomp:pred	Translit=tak
4	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=będzie
5	dla	dla	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen|Translit=dla
6	przyjaźni	przyjaźń	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl	4:obl	Translit=przyiaźni
7	W	waszmość	NOUN	brev:pun	Abbr=Yes	6	nmod	6:nmod	SpaceAfter=No|Translit=W
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.
9	Pana	pan	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	appos	7:appos	SpaceAfter=No|Translit=Pana
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


