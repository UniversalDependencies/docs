---
layout: base
title:  'Statistics of vocative in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.625.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 75% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


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
5	dhaltha	dalta	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ach	ach	CCONJ	_	_	8	cc	_	_
8	cad	is	PRON	_	PronType=Int	2	conj	_	_
9	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	8	acl:relcl	_	_
11	aici	ag	ADP	_	Gender=Fem|Number=Sing|Person=3	10	xcomp:pred	_	_
12	le	le	ADP	_	_	13	case	_	_
13	déanamh	déanamh	NOUN	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
14	?	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
15	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 vocative	color:blue
1	Adubhairt	abair	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	Símón	Síomón	PROPN	_	Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
3	Peadar	Peadar	PROPN	_	Definite=Def|Gender=Masc|Number=Sing	2	flat:name	_	_
4	ris	le	ADP	_	Gender=Masc|Number=Sing|Person=3	1	obl:prep	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	a	a	PART	_	PartType=Voc	7	case:voc	_	_
7	thighearna	tiarna	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	12	vocative	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	ní	is	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Cop	12	cop	_	_
10	hiád	iad	PRON	_	Form=HPref|Number=Plur|Person=3	12	nmod	_	_
11	mó	mo	DET	_	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	chosa	cos	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Plur	1	ccomp	_	_
13	amhaín	amháin	ADJ	_	Degree=Pos	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	achd	ach	CCONJ	_	_	17	cc	_	_
16	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	17	nmod:poss	_	_
17	lámha	lámh	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	12	conj	_	_
18	agus	agus	CCONJ	_	_	20	cc	_	_
19	mó	mo	DET	_	Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	_
20	cheann	ceann	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	17	conj	_	_
21	mar	mar	ADP	_	_	23	case	_	_
22	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	23	det	_	_
23	gcédna	céanna	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

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
13	thighearna	tiarna	NOUN	_	Case=Voc|Form=Len|Gender=Masc|Number=Sing	9	vocative	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	dochum	chun	ADP	_	_	17	case	_	_
16	gu	go	PART	_	PartType=Cmpl	17	mark:prt	_	_
17	gcreidfinn	creid	VERB	_	Form=Ecl|Mood=Cnd|Number=Sing|Person=1	9	advcl	_	_
18	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	17	obl	_	SpaceAfter=No
19	?	?	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


