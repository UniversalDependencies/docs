---
layout: base
title:  'Statistics of vocative in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `vocative`

This relation is universal.

17 nodes (0%) are attached to their parents as `vocative`.

14 instances of `vocative` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88235294117647.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (9; 53% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (3; 18% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	a	a	PART	_	PartType=Voc	5	case:voc	_	_
5	dhaltha	dalta	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ach	ach	CCONJ	_	_	8	cc	_	_
8	cad	cad	PRON	_	PronType=Int	2	conj	_	_
9	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	8	acl:relcl	_	_
11	aici	ag	ADP	_	Gender=Fem|Number=Sing|Person=3	10	xcomp:pred	_	_
12	le	le	ADP	_	_	13	case	_	_
13	déanamh	déanamh	NOUN	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
14	?	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
15	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 vocative	color:blue
1	Cóir	cóir	ADJ	_	Degree=Pos	0	root	_	_
2	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	bhuidhe	buí	NOUN	_	Case=Nom|Definite=Def|Form=Len|Number=Sing	1	nsubj	_	_
4	re	le	ADP	_	_	5	case	_	_
5	Dia	Dia	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
6	dil	dil	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
7	ar	ár	DET	_	Number=Plur|Person=1|Poss=Yes	8	nmod:poss	_	_
8	mbreith	breith	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	3	parataxis	_	_
9	i	i	ADP	_	_	10	case	_	_
10	n-aimsir	aimsir	NOUN	_	Case=Nom|Form=Ecl|Gender=Fem|Number=Sing	8	obl:tmod	_	_
11	creidimh	creideamh	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	is	agus	CCONJ	_	_	13	cc	_	_
13	Crist	Críost	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	conj	_	_
14	dar	do	ADP	_	Number=Plur|Person=1|Poss=Yes	15	nmod:poss	_	_
15	leighes	leigheas	NOUN	_	Definite=Def|VerbForm=Inf	13	xcomp	_	_
16	or	ó	ADP	_	Number=Plur|Person=1|Poss=Yes	17	case	_	_
17	ccoir	coir	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	15	obl	_	_
18	's	agus	CCONJ	_	_	20	cc	_	_
19	gan	gan	ADP	_	_	20	case	_	_
20	adhradh	adhradh	NOUN	_	VerbForm=Inf	3	conj	_	_
21	dhuit-si	do	ADP	_	Number=Sing|Person=2|PronType=Emp	20	obl:prep	_	_
22	a	a	PART	_	PartType=Voc	23	case:voc	_	_
23	shaoghail	saol	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	20	vocative	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 vocative	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	fhreaguir	freagair	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	seision	seisean	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Emp	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	agus	agus	CCONJ	_	_	6	cc	_	_
6	adubhairt	abair	VERB	_	Mood=Ind|Tense=Past	2	conj	_	_
7	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	9	punct	_	_
9	cia	cé	PRON	_	PronType=Int	6	ccomp	_	_
10	hé	é	PRON	_	Form=HPref|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	a	a	PART	_	PartType=Voc	13	case:voc	_	_
13	thighearna	tiarna	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	9	vocative	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	dochum	chun	ADP	_	_	17	case	_	_
16	gu	go	PART	_	PartType=Cmpl	17	mark:prt	_	_
17	gcreidfinn	creid	VERB	_	Form=Ecl|Mood=Cnd|Number=Sing|Person=1	9	advcl	_	_
18	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	17	obl	_	SpaceAfter=No
19	?	?	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


