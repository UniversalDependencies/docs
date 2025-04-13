---
layout: base
title:  'Statistics of acl in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_poetry-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl`.

4 instances of `acl` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Že	že	SCONJ	J,-------------	_	3	mark	_	SpacesBefore=\s
2	nejsem	být	AUX	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	čist	čist	ADJ	ACYS------A----	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	5	acl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
6	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	_
7	vím	vědět	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	_	_
9	leč	leč	CCONJ	J,-------------	_	13	cc	_	_
10	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	hříchu	hřích	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	obl	_	_
12	žít	žít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	13	xcomp	_	_
13	neumím	umět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 acl	color:blue
1	Pod	pod	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	_	SpacesBefore=\s
2	horou	hora	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	18	obl	_	_
3	mou	můj	DET	PSFS7-S1------1	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
4	rodnou	rodný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
7	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	8	obl	_	_
8	leskne	lesknout	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
9	chrám	chrám	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	_	_
11	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	_	_
12	modrou	modrý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	dál	dál	NOUN	Db-------------	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	16	punct	_	_
15	ač	ač	SCONJ	J,-------------	_	16	mark	_	_
16	neumělý	umělý	ADJ	AAIS1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	9	acl	_	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	8	punct	_	_
18	klečel	klečet	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
19	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	20	case	_	_
20	ženou	žena	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	18	obl	_	_
21	muž	muž	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
22	–	–	PUNCT	Z:-------------	_	29	punct	_	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	_
24	té	ten	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	27	obl	_	_
25	slavněteskné	slavněteskný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Style=Rare	27	amod	_	_
26	vůkol	vůkol	ADV	Db-------------	_	27	advmod	_	_
27	tiši	tiš	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	29	obl	_	_
28	lesní	lesní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
29	osamělý	osamělý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	18	advcl	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	Dejž	dát	VERB	II-------------	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	1	punct	_	_
3	ó	ó	INTJ	II-------------	_	1	dep	_	_
4	Bože	bůh	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
5	!	!	PUNCT	Z:-------------	_	1	punct	_	_
6	dosti	dost	ADV	Dg-------1A---3	Degree=Pos|Polarity=Pos	1	obj	_	_
7	sýly	síla	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
10	pravé	pravý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	víře	víra	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	12	obl	_	_
12	setrvat	setrvat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	7	acl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	17	punct	_	_
14	Aby	aby	SCONJ	J,-------------	_	17	mark	_	_
15	bychom	být	AUX	Vc-P---1-------	Aspect=Imp|Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	17	aux	_	_
16	tak	tak	ADV	Db-------------	PronType=Dem	17	advmod	_	_
17	hodni	hodný	ADJ	ACMP------A----	Animacy=Anim|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Variant=Short	12	advcl	_	_
18	byli	být	AUX	VpMP---XR-AA---	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	cop	_	_
19	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	21	case	_	_
20	věčné	věčný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	21	amod	_	_
21	slávě	sláva	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	22	obl	_	_
22	oplívat	oplívat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	17	xcomp	_	SpaceAfter=No
23	!	!	PUNCT	Z:-------------	_	6	punct	_	_

~~~


