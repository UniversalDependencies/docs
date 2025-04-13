---
layout: base
title:  'Statistics of nmod:poss in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-nmod.html">nmod</a></tt>.

147 nodes (3%) are attached to their parents as `nmod:poss`.

147 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02040816326531.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-DET.html">DET</a></tt> (143; 97% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-DET.html">DET</a></tt> (1; 1% instances).


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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:poss	color:blue
1	Gidh	cé	SCONJ	_	_	2	mark	_	_
2	mór	mór	ADJ	_	Degree=Pos	24	advcl	_	_
3	diobh	de	ADP	_	Number=Plur|Person=3	2	obl:prep	_	_
4	do	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	5	nsubj	_	_
5	bhi	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	2	acl:relcl	_	_
6	beó	beo	ADJ	_	Degree=Pos	5	xcomp:pred	_	_
7	bocht	bocht	ADJ	_	Degree=Pos	5	xcomp:pred	_	_
8	ag	ag	ADP	_	_	9	case	_	_
9	teacht	teacht	NOUN	_	VerbForm=Vnoun	5	xcomp	_	_
10	chugaibh	chuig	ADP	_	Number=Plur|Person=2	9	obl:prep	_	_
11	da	do	ADP	_	Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	_
12	bhfurtocht	fortacht	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	9	obl	_	_
13	's	agus	CCONJ	_	_	15	cc	_	_
14	da	do	PART	_	Form=Indirect|PartType=Vb|PronType=Rel	15	obl	_	_
15	ttugais	tabhair	VERB	_	Form=Ecl|Mood=Ind|Number=Sing|Person=2|Tense=Past	2	conj	_	_
16	maoin	maoin	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	obj	_	_
17	tar	thar	ADP	_	_	19	case	_	_
18	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	_
19	ccóir	cóir	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	15	obl	_	_
20	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	21	nmod:poss	_	_
21	admhail	admháil	NOUN	_	Definite=Def|VerbForm=Inf	24	nsubj	_	_
22	a-niú	inniu	ADV	_	_	24	advmod	_	_
23	as	is	AUX	_	Tense=Pres|VerbForm=Cop	24	cop	_	_
24	edóigh	éadóigh	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
25	.	.	PUNCT	_	_	24	punct	_	_

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
7	mharrthanach	marthanach	ADJ	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	6	amod	_	SpaceAfter=No
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


