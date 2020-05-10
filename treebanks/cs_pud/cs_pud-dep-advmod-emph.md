---
layout: base
title:  'Statistics of advmod:emph in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-advmod.html">advmod</a></tt>.

170 nodes (1%) are attached to their parents as `advmod:emph`.

170 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93529411764706.

The following 19 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (68; 40% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (27; 16% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (20; 12% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (11; 6% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (8; 5% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (6; 4% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (6; 4% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 2% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	LId=do-1
2	té	ten	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
3	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:do:gen	_
4	viděli	vidět	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	letouny	letoun	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	obj	4:obj	_
6	pouze	pouze	ADV	Db-------------	_	7	advmod:emph	7:advmod:emph	_
7	bloggeři	blogger	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 advmod:emph	color:blue
1	Samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	0	root	0:root	SpaceAfter=No|LDeriv=samozřejmý
2	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
3	že	že	SCONJ	J,-------------	_	4	mark	4:mark	LId=že-1
4	jde	jít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	1:advcl:že	_
5	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	LId=o-1
6	volby	volba	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	4	obl:arg	4:obl:arg:o:acc	_
7	a	a	CCONJ	J^-------------	_	11	cc	11:cc	LId=a-1
8	ne	ne	PART	TT-------------	_	11	advmod:emph	11:advmod:emph	_
9	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=o-1
10	„	"	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
11	Hru	hra	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	conj	4:obl:arg:o:acc|6:conj	LGloss=(dětská;_v_divadle;...)
12	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	13:case	LId=o-1
13	trůny	trůn	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	11	nmod	11:nmod:o:acc	SpaceAfter=No
14	“	"	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod:emph	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	dánštině	dánština	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	6:obl:v:loc	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	7:expl:pass	LGloss=(zvr._zájmeno/částice)
4	tímto	tento	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	det	5:det	_
5	slovem	slovo	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	7	obl	7:obl:ins	_
6	můžou	moci	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
7	označovat	označovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
8	i	i	CCONJ	J^-------------	_	10	advmod:emph	10:advmod:emph	LId=i-1
9	mělké	mělký	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	10:amod	_
10	laguny	laguna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	6:nsubj|7:nsubj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


