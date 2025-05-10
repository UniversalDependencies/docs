---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` is used for finite and non-finite clauses that modify a noun. 

In the Scottish Gaelic treebank relative clauses have the relation [acl:relcl]().

`acl` is used specifically for nouns that represent some sort of psychological state: knowing, hoping and so on.
They are usually attached non-projectively.

### Examples

#### _beachd_ 'opinion'

_Thathas de ‘n bheachd gur <b>h-e</b> th' anns na Basgaich iarmad de ‘n t-sluagh a bha anns an Roinn Eòrpa roimh linntean na h-eachdraidh_ 'Some are of the opinion that the Basques <b>are</b> a remnant of the people who were in Europe in prehistory' (fp04\_025)

~~~ conllu
1	Thathas	bi	VERB	V-p0	Mood=Ind|Person=0|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	Sp	_	4	case	_	_
3	‘n	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	bheachd	beachd	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
5	gur	is	AUX	Wpdia	Polarity=Aff|Tense=Pres	6	cop	_	_
6	h-e	e	PRON	Pp3sm	CleftType=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	acl	_	_
7	th'	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	6	csubj:cleft	_	_
8	anns	an	ADP	Sp	_	10	case	_	_
9	na	an	DET	Tdpm	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	Basgaich	basgach	NOUN	Ncpmd	Case=Dat|Gender=Masc|Number=Plur	7	xcomp:pred	_	_
11	iarmad	iarmad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
12	de	de	ADP	Sp	_	14	case	_	_
13	‘n	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	t-sluagh	sluagh	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	11	nmod	_	_
15	a	a	PART	Q-r	PartType=Vb|PronType=Rel	16	nsubj	_	_
16	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	14	acl:relcl	_	_
17	anns	an	ADP	Sp	_	19	case	_	_
18	an	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	Roinn	Roinn	PROPN	Nt	NounType=Top	16	xcomp:pred	_	_
20	Eòrpa	Eòrpa	PROPN	Nt	NounType=Top	19	flat:name	_	FlatType=Top
21	roimh	ro	ADP	Sp	_	22	case	_	_
22	linntean	linn	NOUN	Ncpfd	Case=Dat|Gender=Fem|Number=Plur	16	obl	_	_
23	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	h-eachdraidh	eachdraidh	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
~~~

#### _cuimhne_ 'memory'

_bha cuimhne aig Dòmhnall gu <b>robh</b> seòrsa de ghràin anns a’ ghaol a bh' aige air Sgùrr a' Ghreadaidh_ 'Donald remembered that there was a sort of hate in the love he had for Sgùrr a' Ghreadaidh' (f06\_004, train)

~~~ conllu
1	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	cuimhne	cuimhne	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	aig	aig	ADP	Sp	_	4	case	_	_
4	Dòmhnall	Dòmhnall	PROPN	Nn-md	Case=Dat|Gender=Masc	1	xcomp:pred	_	_
5	gu	gu	PART	Qa	PartType=Cmpl	6	mark:prt	_	_
6	robh	bi	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl	_	_
7	seòrsa	seòrsa	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	de	de	ADP	Sp	_	9	case	_	_
9	ghràin	gràin	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	7	nmod	_	_
10	anns	an	ADP	Sp	_	12	case	_	_
11	a’	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	ghaol	gaol	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	6	xcomp:pred	_	_
13	a	a	PART	Q-r	PartType=Vb|PronType=Rel	14	nsubj	_	_
14	bh'	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	12	acl:relcl	_	_
15-16	aige	_	_	_	_	_	_	_	_
15	aig	aig	ADP	Sp	_	16	case	_	_
16	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	xcomp:pred	_	_
17	air	air	ADP	Sp	_	18	case	_	_
18	Sgùrr	Sgùrr	PROPN	Nt	NounType=Top	14	obl	_	_
19	a'	a'	PROPN	Nt	NounType=Top	18	flat:name	_	FlatType=Top
20	Ghreadaidh	Greadaidh	PROPN	Nt	NounType=Top	18	flat:name	_	FlatType=Top|SpaceAfter=No
~~~

#### _duil_ 'expectation'

_bha dùil a'm gun <b>robh</b> e a' faighinn na croiteadh_ 'I expected that he <b>was</b> getting the croft' (c07\_062, train)

~~~ conllu
1	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	dùil	dùil	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3-4	a'm	_	_	_	_	_	_	_	_
3	aig	aig	ADP	Sp	_	4	case	_	_
4	mi	mi	PRON	Pp1s	Number=Sing|Person=1|PronType=Prs	1	xcomp:pred	_	_
5	gun	gu	PART	Qa	PartType=Cmpl	6	mark:prt	_	_
6	robh	bi	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl	_	_
7	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
8	a'	ag	PART	Sa	_	9	case	_	_
9	faighinn	faigh	NOUN	Nv	VerbForm=Vnoun	6	xcomp:pred	_	_
10	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	croiteadh	croiteadh	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	9	obj	_	_
~~~

#### _eagal_ 'fear'

_Tha eagal orm nach <b>eil</b>, buileach._ 'I fear <b>not</b>, entirely' (f04\_032, train)

~~~ conllu
1	“	“	PUNCT	Fq	_	2	punct	_	SpaceAfter=No
2	Tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	eagal	eagal	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4-5	orm	_	_	_	_	_	_	_	_
4	air	air	ADP	Sp	_	5	case	_	_
5	mi	mi	PRON	Pp1s	Number=Sing|Person=1|PronType=Prs	2	xcomp:pred	_	_
6	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	7	mark:prt	_	_
7	eil	bi	VERB	V-p--d	Mood=Ind|Tense=Pres|VerbForm=Fin	3	acl	_	SpaceAfter=No
8	,	,	PUNCT	Fi	_	7	punct	_	_
9	buileach	buileach	ADV	Rg	AdvType=Man	7	xcomp:pred	_	SpaceAfter=No
10	.	.	PUNCT	Fe	_	2	punct	_	_
~~~

#### _fios_ 'knowledge'

_tha fhios gum <b>biodh</b> iad air am fàs caol_ 'it is known that they <b>have</b> grown thin' (c06\_070, train)

~~~ conllu
1	tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	fhios	fios	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	gum	gu	PART	Qa	PartType=Cmpl	4	mark:prt	_	_
4	biodh	bi	VERB	V-h--d	Mood=Ind|VerbForm=Fin	2	acl	_	_
5	iad	iad	PRON	Pp3p	Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
6	air	air	PART	Sa	_	8	case	_	_
7	am	an	DET	Dp3p	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	obj	_	_
8	fàs	fàs	NOUN	Nv	VerbForm=Inf	4	xcomp:pred	_	_
9	caol	caol	ADJ	Ap	_	8	xcomp:pred	_	_
~~~

#### _teagamh_ 'doubt'

_Chan eil teagamh nach robh buaidh mhòr aig an t-seòrsa bàrdachd seo_ 'There is no doubt that there wasn't a big unfluence on this sort of poetry' (fp07\_009)

~~~ conllu
1	Chan	chan	PART	Qn	PartType=Vb|Polarity=Neg	2	mark:prt	_	_
2	eil	bi	VERB	V-p--d	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	teagamh	teagamh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	5	mark:prt	_	_
5	robh	bi	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl	_	_
6	buaidh	buaidh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
7	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
8	aig	aig	ADP	Sp	_	10	case	_	_
9	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	t-seòrsa	seòrsa	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	5	xcomp:pred	_	_
11	bàrdachd	bàrdachd	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
12	seo	seo	DET	Dd	PronType=Art	11	det	_	_
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:14:43 CEST -->
