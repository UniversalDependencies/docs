---
layout: base
title:  'Statistics of mark in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `mark`

This relation is universal.

413 nodes (1%) are attached to their parents as `mark`.

402 instances of `mark` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.98305084745763.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (145; 35% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (103; 25% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (92; 22% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (37; 9% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (17; 4% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 mark	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	_	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	_	_
5	vyjádřen	vyjádřený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	ccomp	_	LDeriv=vyjádřit
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	_	_
8	než	než	SCONJ	J,-------------	_	10	mark	_	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	_	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	dep	_	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	_	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	například	například	ADV	Db-------------	_	16	cc	_	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	appos	_	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	5	mark	_	_
2	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	_
4	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	známa	známý	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	8	advcl	_	LId=známý-2
6	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	_	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	_	_
10	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj:pass	_	_
11	platná	platný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	_	LId=v-1
13	příštím	příští	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	_	_
14	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	_	LId=účetní-1
15	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


