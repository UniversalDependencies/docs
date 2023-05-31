---
layout: base
title:  'Statistics of nummod in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_fictree-dep-nummod-gov.html">nummod:gov</a></tt>.

662 nodes (0%) are attached to their parents as `nummod`.

589 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27341389728097.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (631; 95% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	_
2	té	ten	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
3	válce	válka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:v:loc	_
4	zabili	zabít	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	jednoho	jeden	NUM	ClMS4----------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	6	nummod	6:nummod	_
6	pána	pán	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	Ale	ale	CCONJ	J^-------------	_	3	cc	3:cc	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	ráda	rád	ADJ	ACFS------A----	Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
5	že	že	SCONJ	J,-------------	_	11	mark	11:mark	_
6	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	11	obl:arg	11:obl:arg:dat	_
8	my	já	PRON	PP-P1--1-------	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	11:nsubj	_
9	dva	dva	NUM	ClMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	8:nummod	_
10	teď	teď	ADV	Db-------------	PronType=Dem	11	advmod	11:advmod	_
11	porozuměli	porozumět	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	advcl	3:advcl:že	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	Doktoři	doktor	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj|7:nsubj	_
2	ještě	ještě	ADV	Db-------------	_	3	advmod:emph	3:advmod:emph	_
3	chvíli	chvíle	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:acc	_
4	povídali	povídat	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	a	a	CCONJ	J^-------------	_	7	cc	7:cc	_
6	pak	pak	ADV	Db-------------	_	7	advmod	7:advmod	_
7	vyšli	vyjít	VERB	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	0:root|4:conj	_
8	všichni	všechen	DET	PLMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	7	nsubj	7:nsubj	_
9	tři	tři	NUM	ClMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	8:nummod	_
10	před	před	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	_
11	pavilón	pavilón	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	7:obl:před:acc	SpaceAfter=No
12	;	;	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


