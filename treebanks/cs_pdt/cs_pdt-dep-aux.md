---
layout: base
title:  'Statistics of aux in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_pdt-dep-aux-pass.html">aux:pass</a></tt>.

14808 nodes (1%) are attached to their parents as `aux`.

13126 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39390869800108.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (13537; 91% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1013; 7% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (207; 1% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (18; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	2:obj	LDeriv=pojistit
4	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	0:root|1:conj	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
7	proto	proto	CCONJ	J^-------------	_	5	cc	5:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	9:case	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:k:dat	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	5:obj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	2:advmod:emph	LId=jen-1|LGloss=(pouze)
2	cedule	cedule	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	5:aux	_
4	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	5:cop	_
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	7	punct	7:punct	_
7	FOR	for	ADP	RR--X----------	AdpType=Prep|Foreign=Yes	5	appos	5:appos	_
8	RENT	rent	NOUN	NNXXX-----A----	Foreign=Yes|Polarity=Pos	7	flat:foreign	7:flat:foreign	LGloss=(pronájem)
9	!	!	PUNCT	Z:-------------	_	7	punct	7:punct	_
10	-	-	PUNCT	Z:-------------	_	12	punct	12:punct	_
11	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	12:case	LId=k-1
12	PRONÁJMU	pronájem	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	7	appos	7:appos	_
13	!	!	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	6:cop	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	6:aux	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	6:advmod	LDeriv=patrný
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


