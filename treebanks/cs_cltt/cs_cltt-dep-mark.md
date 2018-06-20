---
layout: base
title:  'Statistics of mark in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `mark`

This relation is universal.

365 nodes (1%) are attached to their parents as `mark`.

360 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04383561643836.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (148; 41% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (101; 28% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (92; 25% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (17; 5% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	9:obl	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	že	že	SCONJ	J,-------------	_	6	mark	6:mark	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	7:obj	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	6:csubj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	9:obl	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 mark	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	LId=vést-1
7	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	8:nummod	_
8	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	6:obj	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=za-1
10	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	11:amod	LId=účetní-1
11	jednotku	jednotka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	6:obl	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	13:mark	_
13	celek	celek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	xcomp	11:xcomp	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	5	mark	5:mark	_
2	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
3	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
4	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	3:nmod	_
5	známa	známý	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	8	advcl	8:advcl	LId=známý-2
6	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	8:expl:pass	_
10	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj:pass	8:nsubj:pass	_
11	platná	platný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	_
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	LId=v-1
13	příštím	příští	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	15:amod	_
14	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	15:amod	LId=účetní-1
15	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	11	obl	11:obl	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


