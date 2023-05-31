---
layout: base
title:  'Statistics of iobj in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `iobj`

This relation is universal.

253 nodes (0%) are attached to their parents as `iobj`.

171 instances of `iobj` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07114624505929.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (145; 57% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (59; 23% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (26; 10% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (8; 3% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 iobj	color:blue
1	Přijali	přijmout	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LId=přijmout-2
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	rádi	rád	ADJ	ACMP------A----	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Variant=Short	1	xcomp	1:xcomp	_
4	Vaši	tvůj	DET	PSFS4-P2-------	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	5	det	5:det	LGloss=(přivlast.)
5	objednávku	objednávka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	iobj	1:iobj	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	8:case	LId=na-1
7	#	&cother;	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
8	čtvrtletí	čtvrtletí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	5:nmod:na:acc	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
3	cosi	cosi	PRON	PZ--1----------	Animacy=Inan|Case=Nom|PronType=Ind	0	root	0:root|6:iobj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	6	iobj	3:ref	LId=co-1
6	nedokážu	dokázat	VERB	VB-S---1P-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	_
7	vtěsnat	vtěsnat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	LId=do-1
9	nějaké	nějaký	DET	PZFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Ind	10	det	10:det	_
10	definice	definice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	7:obl:do:gen	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	iobj	3:iobj	_
2	všechno	všechno	PRON	PLNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	1	xcomp	1:xcomp	_
3	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	LDeriv=samozřejmý
5	svůj	svůj	DET	P8IS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	6:det	LId=svůj-1
6	význam	význam	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	3	obj	3:obj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


