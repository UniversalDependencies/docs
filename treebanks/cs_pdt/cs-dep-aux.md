---
layout: base
title:  'Statistics of aux in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs-dep-aux-pass.html">aux:pass</a></tt>.

14721 nodes (1%) are attached to their parents as `aux`.

12995 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37972963793221.

The following 12 pairs of parts of speech are connected with `aux`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (13497; 92% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (923; 6% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (205; 1% instances), <tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (36; 0% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (18; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs-pos-PART.html">PART</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs-pos-SYM.html">SYM</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	_	LDeriv=pojistit
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	proto	proto	CCONJ	J^-------------	_	5	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	_	LId=jen-1|LGloss=(pouze)
2	cedule	cedule	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	8	punct	_	_
7	FOR	for	ADP	RR--X----------	AdpType=Prep|Foreign=Yes	8	flat:foreign	_	_
8	RENT	rent	NOUN	NNXXX-----A----	Foreign=Yes|Polarity=Pos	5	appos	_	LGloss=(pronájem)
9	!	!	PUNCT	Z:-------------	_	8	punct	_	_
10	-	-	PUNCT	Z:-------------	_	12	punct	_	_
11	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
12	PRONÁJMU	pronájem	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	8	appos	_	_
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	LDeriv=patrný
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


