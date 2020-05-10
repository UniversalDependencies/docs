---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-nummod.html">det:nummod</a></tt>.

979 nodes (0%) are attached to their parents as `det:numgov`.

917 instances of `det:numgov` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50051072522983.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (956; 98% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (18; 2% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:numgov	color:blue
1	I	i	CCONJ	J^-------------	_	3	advmod:emph	3:advmod:emph	LId=i-1
2	velké	velký	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	_
3	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	obj	5:obj	LGloss=(zvr._zájmeno/částice)
5	specializují	specializovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	jen	jen	PART	TT-------------	_	8	advmod:emph	8:advmod:emph	LId=jen-1|LGloss=(pouze)
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
8	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
9	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)
10	teritorií	teritorium	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	obl:arg	5:obl:arg:na:acc	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:numgov	color:blue
1	Kdoví	kdoví	PART	TT-------------	_	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	kolik	kolik	DET	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	4	det:numgov	4:det:numgov	_
4	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	LId=on-1
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	dep	1:dep	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
7	samotné	samotný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	Jihlavě	Jihlava	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	2	det:numgov	2:det:numgov	LId=mnoho-1
2	Kubánců	Kubánec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
3	vzalo	vzít	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LGloss=(př._sebrat_něco;_brát_ohled,_zřetel,...)
4	totiž	totiž	ADV	Db-------------	_	3	advmod	3:advmod	_
5	Castrovo	Castrův	ADJ	AUNS4M---------	Case=Acc|Gender=Neut|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	6	amod	6:amod	LDeriv=Castro
6	prohlášení	prohlášení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	3:obj	LDeriv=prohlásit
7	jako	jako	SCONJ	J,-------------	_	9	mark	9:mark	_
8	životní	životní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	9:amod	LGloss=(souvisí_se_životem;_prostředí,...)
9	příležitost	příležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	xcomp	6:xcomp	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


