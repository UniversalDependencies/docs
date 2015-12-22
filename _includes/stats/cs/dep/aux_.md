

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

14724 nodes (1%) are attached to their parents as `aux`.

13034 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38454224395545.

The following 11 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (13933; 95% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (530; 4% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (203; 1% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (19; 0% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (19; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (9; 0% instances), [cs-pos/CONJ]()-[cs-pos/AUX]() (3; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (3; 0% instances), [cs-pos/PROPN]()-[cs-pos/AUX]() (3; 0% instances), [cs-pos/SCONJ]()-[cs-pos/AUX]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	2	dobj	_	LDeriv=pojistit
4	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	proto	proto	CONJ	J^-------------	_	1	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	5	dobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	_	LId=jen-1|LGloss=(pouze)
2	cedule	cedule	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	5	nsubj	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	byla	být	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	12	punct	_	_
7	FOR	for	ADP	RR--X----------	AdpType=Prep|Foreign=Foreign	8	foreign	_	_
8	RENT	rent	NOUN	NNXXX-----A----	Foreign=Foreign|Negative=Pos	5	appos	_	LGloss=(pronájem)
9	!	!	PUNCT	Z:-------------	_	8	punct	_	_
10	-	-	PUNCT	Z:-------------	_	12	punct	_	_
11	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
12	PRONÁJMU	pronájem	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	8	appos	_	_
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
3	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	6	cc	_	LDeriv=patrný
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


