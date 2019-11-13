---
layout: base
title:  'Statistics of nummod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-gov.html">nummod:gov</a></tt>.

3 nodes (0%) are attached to their parents as `nummod:flat`.

3 instances of `nummod:flat` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 67% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod:flat	color:blue
1	O	o	ADP	prep:loc	AdpType=Prep	2	case	2:case	Case=Loc
2	godzinie	godzina	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	obl	6:obl	_
3	17.00	17.00	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	2:amod	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	scenie	scena	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	obl	6:obl	_
6	zagości	zagościć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	zespół	zespół	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
8	Dwa	dwa	NUM	num:pl:nom:m2:congr	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	9	nummod:flat	9:nummod:flat	_
9	Kamraty	kamrat	NOUN	depr:pl:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|NounForm=Depr|Number=Plur	7	appos	7:appos	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
11	znany	znany	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
12	ze	z	ADP	prep:gen:wok	AdpType=Prep|Variant=Long	14	case	14:case	Case=Gen
13	śląskich	śląski	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	14	amod	14:amod	_
14	rozgłośni	rozgłośnia	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	11	obl	11:obl	_
15	radiowych	radiowy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	14	amod	14:amod	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod:flat	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
2	przedostatnim	przedostatni	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
4	1999	1999	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	5	amod:flat	5:amod:flat	_
5	roku	rok	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	obl	2:obl	_
6	numerze	numer	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	20	obl	20:obl	_
7	"	"	PUNCT	interp	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
8	Polityki	polityka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
9	"	"	PUNCT	interp	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
11	pod	pod	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Ins
12	nową	nowy	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	_
13	winietą	winieta	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	20	obl	20:obl	_
14	Dwa	dwa	NUM	num:pl:nom:m2:congr	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	15	nummod:flat	15:nummod:flat	_
15	Jerze	Jerzy	PROPN	depr:pl:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|NounForm=Depr|Number=Plur	13	nmod	13:nmod	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	15	punct	15:punct	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	17	punct	17:punct	SpaceAfter=No
19	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
20	ukazała	ukazać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
21	się	się	PRON	part	PronType=Prs|Reflex=Yes	20	expl:pv	20:expl:pv	_
22	podwójna	podwójny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	23	amod	23:amod	_
23	recenzja	recenzja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	20	nsubj	20:nsubj	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	25	punct	25:punct	_
25	Jerzego	Jerzy	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	23	nmod	23:nmod	_
26	Waldorffa	Waldorff	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	25	flat	25:flat	_
27	i	i	CCONJ	conj	_	28	cc	28:cc	_
28	Jerzego	Jerzy	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	25	conj	23:nmod|25:conj	_
29	Kisielewskiego	Kisielewski	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	28	flat	28:flat	SpaceAfter=No
30	,	,	PUNCT	interp	PunctType=Comm	25	punct	25:punct	_
31	poznańskiego	poznański	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	32	amod	32:amod	_
32	koncertu	koncert	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nmod	23:nmod	_
33	Krystiana	Krystian	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	32	nmod	32:nmod	_
34	Zimermana	Zimerman	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	33	flat	33:flat	SpaceAfter=No
35	.	.	PUNCT	interp	PunctType=Peri	20	punct	20:punct	_

~~~


