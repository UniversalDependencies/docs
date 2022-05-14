---
layout: base
title:  'Statistics of ccomp in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `ccomp`

This relation is universal.

58 nodes (0%) are attached to their parents as `ccomp`.

56 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25862068965517.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (41; 71% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (11; 19% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl:arg	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	13	obj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 ccomp	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	20	punct	_	_
2	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
3	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	_	LId=účetní-1
4	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	20	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	10	nsubj	_	_
7	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	_	LId=v-1
9	formě	forma	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	10	obl	_	_
10	nečitelné	čitelný	ADJ	AAIP1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	4	acl:relcl	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	15	punct	_	_
12	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux:pass	_	SpaceAfter=No
13	-	-	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
14	li	li	PART	TT-------------	_	15	mark	_	_
15	dodrženo	dodržený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	10	advcl	_	LDeriv=dodržet
16	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	15	nsubj:pass	_	_
17	§_33_odst._7	§_33_odst._7	X	X@-------------	_	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	10	punct	_	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	expl:pass	_	_
20	pohlíží	pohlížet	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
21	,	,	PUNCT	Z:-------------	_	26	punct	_	_
22	jakoby	jakoby	SCONJ	J,-------------	_	26	mark	_	LId=jakoby-1
23	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	26	ccomp	_	_
24	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	25	amod	_	LId=účetní-1
25	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	26	nsubj	_	_
26	nevedly	vést	VERB	VpTP---XR-NA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	20	advcl	_	SpaceAfter=No|LId=vést-1
27	.	.	PUNCT	Z:-------------	_	20	punct	_	_

~~~


