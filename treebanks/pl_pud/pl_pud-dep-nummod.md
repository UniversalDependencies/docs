---
layout: base
title:  'Statistics of nummod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="pl_pud-dep-nummod-gov.html">nummod:gov</a></tt>.

86 nodes (0%) are attached to their parents as `nummod`.

86 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34883720930233.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (83; 97% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	5	5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
2	tys	tysiąc	NOUN	brev:pun	Abbr=Yes	1	flat	1:flat	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	osobę	osoba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	dopuszczalne	dopuszczalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	maksimum	maksimum	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	appos	4:appos	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nummod	color:blue
1	Disney	Disney	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	otrzymał	otrzymać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	kolejnego	kolejny	ADJ	adj:sg:acc:m2:pos	Animacy=Nhum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
4	honorowego	honorowy	ADJ	adj:sg:acc:m2:pos	Animacy=Nhum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	Oscara	Oscar	PROPN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	który	który	DET	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	8:nsubj	_
8	składał	składać	VERB	praet:sg:m2:imperf	Animacy=Nhum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	12	case	12:case|16:case	Case=Gen
11	jednej	jeden	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	12	amod	12:amod	_
12	statuetki	statuetka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl:arg	8:obl:arg	_
13	pełnowymiarowej	pełnowymiarowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	12	amod	12:amod	_
14	i	i	CCONJ	conj	_	16	cc	16:cc	_
15	siedmiu	siedem	NUM	num:pl:gen:f:congr:ncol	Case=Gen|Gender=Fem|Number=Plur|NumForm=Word	16	nummod	16:nummod	_
16	miniaturowych	miniaturowy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	12	conj	8:obl:arg|12:conj	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Dwaj	dwa	NUM	num:pl:nom:m1:congr:ncol	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	2	nummod	2:nummod	_
2	australijczycy	Australijczyk	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	15	nsubj	15:nsubj	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	6	nsubj	6:nsubj	_
5	sami	sam	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	obl	6:obl	_
6	określają	określać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	2:acl:relcl	_
7	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
8	jako	jako	SCONJ	comp	ConjType=Pred	10	mark	10:mark	_
9	fatalni	fatalny	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	10	amod	10:amod	_
10	gracze	gracz	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	6	obl	6:obl	_
11	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Acc
12	golfa	golf	NOUN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	10	nmod	10:nmod	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
14	oszustwem	oszustwo	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	15	iobj	15:iobj	_
15	dostali	dostać	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
16	się	się	PRON	part	PronType=Prs|Reflex=Yes	15	expl:pv	15:expl:pv	_
17	na	na	ADP	prep:acc	AdpType=Prep	19	case	19:case	Case=Acc
18	pierwszoligowy	pierwszoligowy	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	19	amod	19:amod	_
19	turniej	turniej	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	obl:arg	15:obl:arg	_
20	golfowy	golfowy	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	19	amod	19:amod	_
21	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	22	case	22:case	Case=Loc
22	Korei	Korea	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	19	nmod	19:nmod	_
23	Północnej	północny	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	22	amod:flat	22:amod:flat	SpaceAfter=No
24	.	.	PUNCT	interp	PunctType=Peri	15	punct	15:punct	_

~~~


