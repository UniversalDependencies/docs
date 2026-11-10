---
layout: base
title:  'Statistics of nummod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="pl_mpdt-dep-nummod-flat.html">nummod:flat</a></tt>, <tt><a href="pl_mpdt-dep-nummod-gov.html">nummod:gov</a></tt>.

314 nodes (1%) are attached to their parents as `nummod`.

219 instances of `nummod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51910828025478.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (302; 96% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	3	3	NUM	dig	NumForm=Digit	2	nummod	2:nummod	Translit=3
2	serwety	serweta	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	0:root	Translit=serwity
3	wielkie	wielki	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	Translit=wielkię
4	a	a	CCONJ	conj	_	6	cc	6:cc	Translit=a
5	4	4	NUM	dig	NumForm=Digit	6	nummod	6:nummod	Translit=4
6	mniejsze	mały	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	conj	2:conj	Translit=mnieiszę
7	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Acc|Translit=w
8	jeden	jeden	ADJ	adjnum:sg:acc:m:pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	9	amod	9:amod	Translit=ieden
9	wzorek	wzorek	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	2	nmod	2:nmod|6:nmod	SpaceAfter=No|Translit=wzorek
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
11	kostka	kostka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nmod	9:nmod	Translit=kostka
12	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Acc|Translit=w
13	kratkę	kratka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	11	nmod	11:nmod	SpaceAfter=No|Translit=kratkę
14	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Ale	ale	CCONJ	conj	_	15	cc	15:cc	Translit=Ale
2	dziki	dziki	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	Translit=dziki
3	Atkins	Atkins	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	15:nsubj	Translit=Atkins
4	i	i	CCONJ	conj	_	7	cc	7:cc	Translit=y
5	dwa	dwa	NUM	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	7	nummod	7:nummod	Translit=dwa
6	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	7	nmod:poss	7:nmod:poss	Translit=iego
7	towarzysze	towarzysz	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	3	conj	3:conj|15:nsubj	SpaceAfter=No|Translit=towarzysze
8	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	Translit=,
9	tych	ten	DET	adj:pl:gen:m:pos	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	10	det	10:det	Translit=tych
10	trzech	trzy	NUM	num:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word	11	nummod	11:nummod	Translit=trzech
11	Indianinów	Indianin	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	12	nmod:poss	12:nmod:poss	Translit=Indyaninow
12	panowie	pan	NOUN	subst:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	3	appos	3:appos|7:appos	SpaceAfter=No|Translit=panowie
13	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
14	nie	nie	PART	part	Polarity=Neg	15	advmod:neg	15:advmod:neg	Translit=nie
15	umieli	umieć	VERB	praet:pl:manim1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=umieli
16	ich	on	PRON	ppron3:pl:gen:m:ter:neut:npraep	Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	18	obj	18:obj	Translit=ich
17	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	18	expl:pv	18:expl:pv	Translit=sobie
18	pozyskać	pozyskać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	15	xcomp	15:xcomp	SpaceAfter=No|Translit=pozyskać
19	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	Translit=,
20	jak	jak	SCONJ	comp	ConjType=Comp	21	mark	21:mark	Translit=iak
21	ja	ja	PRON	ppron12:sg:nom:pri	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	obl:cmp	15:obl:cmp	Translit=ia
22	niegdys	niegdys	ADV	adv	_	21	orphan	21:orphan	Translit=niegdys
23	Piątaszka	Piątaszek	PROPN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	21	orphan	21:orphan	SpaceAfter=No|Translit=Piątaszka
24	,	,	PUNCT	interp	PunctType=Comm	26	punct	26:punct	Translit=,
25	który	który	DET	adj:sg:nom:m:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	26	nsubj	26:nsubj	Translit=ktory
26	gotów	gotowy	ADJ	adjb:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	23	acl:relcl	23:acl:relcl	Translit=gotow
27	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	26:cop	Translit=był
28	życie	życie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	32	obj	32:obj	Translit=życie
29	dla	dla	ADP	prep:gen	AdpType=Prep	30	case	30:case	Case=Gen|Translit=dla
30	ocalenia	ocalić	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	32	obl	32:obl	Translit=ocalenia
31	mnie	ja	PRON	ppron12:sg:gen:pri:akc	Case=Gen|Number=Sing|Person=1|PronType=Prs|Variant=Long	30	obj	30:obj	Translit=mnie
32	utracić	utracić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	26	xcomp	26:xcomp	SpaceAfter=No|Translit=utracic
33	.	.	PUNCT	interp	PunctType=Peri	15	punct	15:punct	Translit=.

~~~


