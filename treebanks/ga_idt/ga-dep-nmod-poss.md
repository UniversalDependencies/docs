---
layout: base
title:  'Statistics of nmod:poss in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga-dep-nmod.html">nmod</a></tt>.

234 nodes (1%) are attached to their parents as `nmod:poss`.

234 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08547008547009.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-DET.html">DET</a></tt> (228; 97% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	sin	sin	PRON	Dem	PronType=Dem	3	det	_	_
5	agat	ag	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	_
6	anois	anois	ADV	Gn	_	1	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	9	punct	_	_
8	ar	ar	ADP	Simp	_	9	case	_	_
9	ndóigh	dóigh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Ar	ar	ADP	Simp	_	0	root	_	_
2	dhá	dó	NUM	Num	NumType=Card	3	nummod	_	_
3	chúis	cúis	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	nmod	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	a	a	PART	Inf	PartType=Inf	6	nmod:poss	_	_
6	laghad	laghad	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	chomhionann	ionann	ADJ	Adj	Degree=Pos|Form=Len	1	nsubj	_	_
4	le	le	ADP	Simp	_	5	case	_	_
5	déanamh	déananh	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
6	le	le	ADP	Simp	_	7	case	_	_
7	fuaimniú	fuaimniú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nmod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	teanga	teanga	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	compound	_	_
10	agus	agus	CCONJ	Coord	_	12	cc	_	_
11	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	12	cop	_	_
12	mithid	mithid	ADJ	Adj	Degree=Pos	1	conj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	12	nsubj	_	_
14	le	le	ADP	Simp	_	15	case	_	_
15	freastal	freastal	NOUN	Noun	VerbForm=Inf	12	xcomp	_	_
16	ar	ar	ADP	Simp	_	17	case	_	_
17	mhúinteoirí	múinteoir	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Punct	_	19	punct	_	_
19	agus	agus	CCONJ	Coord	_	20	cc	_	_
20	orthu	ar	ADP	Prep	Number=Plur|Person=3	17	conj	_	_
21	sin	sin	PRON	Dem	PronType=Dem	20	det	_	_
22	a	a	PART	Vb	PartType=Vb|PronType=Rel	23	nsubj	_	_
23	bhíonn	bí	VERB	PresImp	Form=Len	20	acl:relcl	_	_
24	ag	ag	ADP	Simp	_	25	case	_	_
25	plé	plé	NOUN	Noun	VerbForm=Vnoun	23	xcomp	_	_
26	le	le	ADP	Simp	_	27	case	_	_
27	scrúduithe	scrúdú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	25	nmod	_	_
28	agus	agus	CCONJ	Coord	_	30	cc	_	_
29	le	le	ADP	Simp	_	28	case	_	_
30	trialacha	triail	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	27	conj	_	_
31	cainte	caint	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	30	compound	_	_
32	agus	agus	CCONJ	Coord	_	33	cc	_	_
33	éisteachta	éisteacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	31	conj	_	SpaceAfter=No
34	,	,	PUNCT	Punct	_	35	punct	_	_
35	agus	agus	CCONJ	Coord	_	39	cc	_	_
36	go	go	PART	Ad	PartType=Ad	37	mark:prt	_	_
37	háirithe	áirithe	ADJ	Adj	Degree=Pos	35	advmod	_	_
38	le	le	ADP	Simp	_	39	case	_	_
39	cuidiú	cuidiú	NOUN	Noun	VerbForm=Inf	15	conj	_	_
40	le	le	ADP	Simp	_	41	case	_	_
41	lucht	lucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	39	nmod	_	_
42	raidió	raidió	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	41	compound	_	_
43	agus	agus	CCONJ	Coord	_	44	cc	_	_
44	teilifíse	teilifís	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	42	conj	_	_
45	uirlis	uirlis	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	44	compound	_	_
46	chumhachtach	cumhachtach	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	45	amod	_	_
47	chumarsáide	cumarsáid	NOUN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	45	compound	_	SpaceAfter=No
48	,	,	PUNCT	Punct	_	50	punct	_	_
49	a	a	PART	Vb	PartType=Vb|PronType=Rel	50	nsubj	_	_
50	dhéanfadh	déan	VERB	VTI	Form=Len|Mood=Cnd	45	acl:relcl	_	_
51	freastal	freastal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	50	obj	_	_
52	ar	ar	ADP	Simp	_	53	case	_	_
53	phobal	pobal	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	50	obl	_	_
54	leathan	leathan	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	53	amod	_	_
55	ilbhéascnach	ilbhéascnach	ADJ	Adj	_	53	amod	_	SpaceAfter=No
56	,	,	PUNCT	Punct	_	58	punct	_	_
57	a	a	PART	Inf	PartType=Inf	58	mark	_	_
58	chothú	cothú	NOUN	Noun	Form=Len|VerbForm=Inf	38	xcomp	_	_
59	agus	agus	CCONJ	Coord	_	61	cc	_	_
60	a	a	PART	Inf	PartType=Inf	61	mark	_	_
61	bhuanú	buanú	NOUN	Noun	Form=Len|VerbForm=Inf	58	conj	_	SpaceAfter=No
62	.	.	PUNCT	.	_	1	punct	_	_

~~~


