---
layout: base
title:  'Statistics of amod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_mpdt-dep-amod-flat.html">amod:flat</a></tt>.

3582 nodes (6%) are attached to their parents as `amod`.

1921 instances of `amod` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49972082635399.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (3326; 93% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (149; 4% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (60; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (26; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-X.html">X</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
1	Rzeka	rzeka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	Translit=Rzeká
2	ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	det	1:det	Translit=tá
3	moja	mój	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	0	root	0:root	Translit=moiá
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	SpaceAfter=No|Translit=iest
5	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
6	ja	ja	PRON	ppron12:sg:nom:pri	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	Translit=iá
7	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	9	aux:clitic	9:aux:clitic	Translit=m
8	ją	on	PRON	ppron3:sg:acc:f:ter:neut:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	9	obj	9:obj	Translit=ią
9	stworzył	stworzyć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No|Translit=stworzył
10	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
11	i	i	CCONJ	conj	_	12	cc	12:cc	Translit=y
12	siebie	siebie	PRON	siebie:acc	Case=Acc|PronType=Prs|Reflex=Yes	8	conj	8:conj|9:obj	Translit=siebie
13	samego	sam	ADJ	adj:sg:acc:manim1:pos	Animacy=Hum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	SpaceAfter=No|Translit=sámego
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	SpaceAfter=No|Translit=.
15	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	3	punct	3:punct	Translit=”

~~~


