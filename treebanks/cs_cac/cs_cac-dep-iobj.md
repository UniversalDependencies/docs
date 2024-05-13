---
layout: base
title:  'Statistics of iobj in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `iobj`

This relation is universal.

95 nodes (0%) are attached to their parents as `iobj`.

73 instances of `iobj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36842105263158.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (57; 60% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (22; 23% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (9; 9% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Předat	předat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
2	ZV	ZV	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	1	iobj	1:iobj	_
3	ROH	ROH	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	2	nmod	2:nmod	_
4	přehled	přehled	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	1:obj	_
5	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=o-1
6	systemizaci	systemizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	4:nmod:o:loc	_
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
8	platech	plat	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	6	conj	4:nmod:o:loc|6:conj	SpaceAfter=No|LGloss=(mzda)
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	Oba	oba	NUM	ClYP1----------	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	2	nummod	2:nummod	LNumValue=2
2	obkladači	obkladač	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
3	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	5	iobj	5:iobj	_
4	energicky	energicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	LDeriv=energický
5	vyzvali	vyzvat	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No|LGloss=(někoho_vyzvat_k_něčemu)
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	aby	aby	SCONJ	J,-------------	_	9	mark	9:mark	_
8	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	9	aux	9:aux	_
9	odešel	odejít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	ccomp	5:ccomp	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 iobj	color:blue
1	Lidé	člověk	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	9:nsubj	_
2	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	7:case	LId=s-1
3	hlubokými	hluboký	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
4	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
5	vážnými	vážný	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	conj	3:conj|7:amod	_
6	osobními	osobní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	problémy	problém	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	1:nmod:s:ins	_
8	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	9	obj	9:obj	_
9	nemají	mít	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=v-1
11	mezilidském	mezilidský	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	styku	styk	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	9:obl:v:loc	_
13	lehké	lehký	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	iobj	9:iobj	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


