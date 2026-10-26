---
layout: base
title:  'Statistics of amod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_mpdt-dep-amod-flat.html">amod:flat</a></tt>.

2908 nodes (6%) are attached to their parents as `amod`.

1514 instances of `amod` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52063273727648.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2635; 91% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (112; 4% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (58; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (52; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (19; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-X.html">X</a></tt> (6; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_mpdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Ach	ach	INTJ	interj	_	9	discourse:intj	9:discourse:intj	SpaceAfter=No|Translit=Ach
2	!	!	PUNCT	interp	PunctType=Excl	1	punct	1:punct	Translit=!
3	sprawiedliwy	sprawiedliwy	ADJ	adj:sg:voc:m:pos	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	Translit=sprawiedliwy
4	Boże	Bóg	PROPN	subst:sg:voc:m	Case=Voc|Gender=Masc|Number=Sing	9	vocative	9:vocative	SpaceAfter=No|Translit=Boże
5	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	Translit=,
6	jaka	jaki	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	9	nsubj	9:nsubj	Translit=jaka
7	ż	ż	PART	part:nwok	_	6	advmod	6:advmod	Translit=ż
8	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	9	cop	9:cop	Translit=to
9	sprawiedliwość	sprawiedliwość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=sprawiedliwość
10	!	!	PUNCT	interp	PunctType=Excl	9	punct	9:punct	Translit=!

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 amod	color:blue
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


