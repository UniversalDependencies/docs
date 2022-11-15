---
layout: base
title:  'Statistics of nmod:poss in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-nmod.html">nmod</a></tt>.

95 nodes (2%) are attached to their parents as `nmod:poss`.

95 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02105263157895.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-DET.html">DET</a></tt> (94; 99% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Thangas	tar	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	abhaile	abhaile	ADV	_	_	1	advmod	_	_
3	air	ar	ADP	_	_	5	case	_	_
4	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	socracht	socracht	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 nmod:poss	color:blue
1	Agus	agus	CCONJ	_	_	3	cc	_	_
2	as	is	AUX	_	Tense=Pres|VerbForm=Cop	3	cop	_	_
3	sí	í	PRON	_	Gender=Fem|Number=Sing|Person=3	0	root	_	_
4	so	seo	PRON	_	PronType=Dem	3	det	_	_
5	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	bheatha	beatha	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	3	nsubj	_	_
7	mharrthanach	marthanach	ADJ	_	Case=Nom|Form=Len|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	gu	go	PART	_	PartType=Cmpl	10	mark:prt	_	_
10	mbeath	bí	VERB	_	Form=Ecl|Mood=Cnd	3	ccomp	_	_
11	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	12	nmod:poss	_	_
12	fhios	fios	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	10	nsubj	_	_
13	aca	ag	ADP	_	Number=Plur|Person=3	10	xcomp:pred	_	_
14	tusa	tusa	PRON	_	Number=Sing|Person=2|PronType=Emp	17	obj	_	_
15	amháin	amháin	ADJ	_	Degree=Pos	14	amod	_	_
16	do	a	PART	_	PartType=Inf	17	mark	_	_
17	bheith	bheith	NOUN	_	Form=Len|VerbForm=Inf	10	xcomp	_	SpaceAfter=No
18	:	:	PUNCT	_	_	21	punct	_	_
19	i	i	ADP	_	_	21	case	_	_
20	do	do	DET	_	Number=Sing|Person=2|Poss=Yes	21	nmod:poss	_	_
21	Dhía	Dia	PROPN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	17	xcomp:pred	_	_
22	fhírinneach	fírinneach	ADJ	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	21	amod	_	_
23	agus	agus	CCONJ	_	_	25	cc	_	_
24	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	25	det	_	_
25	té	té	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	21	conj	_	_
26	dho	a	PART	_	Form=Direct,Len|PartType=Vb|PronType=Rel	27	obj	_	_
27	chuir	cuir	VERB	_	Form=Len|Mood=Ind|Tense=Past	25	acl:relcl	_	_
28	tú	tú	PRON	_	Number=Sing|Person=2	27	nsubj	_	_
29	uáit	ó	ADP	_	Number=Sing|Person=2	27	obl:prep	_	_
30	Iósa	Íosa	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	25	appos	_	_
31	Críosd	Críost	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	30	nmod	_	SpaceAfter=No
32	.	.	PUNCT	_	_	10	punct	_	SpacesAfter=\n

~~~


