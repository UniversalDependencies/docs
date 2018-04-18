---
layout: base
title:  'Statistics of det:nummod in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_cac-dep-det-numgov.html">det:numgov</a></tt>.

200 nodes (0%) are attached to their parents as `det:nummod`.

188 instances of `det:nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49.

The following 4 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (184; 92% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	3:case	LId=před-1
2	několika	několik	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Ind	3	det:nummod	3:det:nummod	_
3	dny	den	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	5	obl	5:obl	LGloss=(jednotka_času)
4	tu	tady	ADV	Db------------1	PronType=Dem	5	advmod	5:advmod	_
5	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	tajemník	tajemník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	10:nmod	_
7	OV	OV	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	6	nmod	6:nmod	LId=OV-1|LGloss=(obvodní/okresní_výbor)
8	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	7	nmod	7:nmod	LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
9	soudruh	soudruh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	10:nmod	_
10	Veselý	Veselý	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 det:nummod	color:blue
1	Tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	jev	jev	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	LGloss=(zvr._zájmeno/částice)
4	projevuje	projevovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	štěpením	štěpení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	4	obl	4:obl	LDeriv=štěpit
6	spektrálních	spektrální	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	čar	čára	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	nmod	5:nmod	LGloss=(linie)
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
9	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
10	složek	složka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	det:nummod	5:det:nummod	_
11	působením	působení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	5:nmod	LDeriv=působit
12	magnetického	magnetický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	pole	pole	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	11	nmod	11:nmod	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 det:nummod	color:blue
1	Náš	můj	DET	PSYS1-P1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	2:det	LGloss=(přivlast.)
2	podnik	podnik	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	12	nsubj	12:nsubj	_
3	jako	jako	SCONJ	J,-------------	_	4	mark	4:mark	_
4	jeden	jeden	NUM	ClYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	xcomp	2:xcomp	LNumValue=1
5	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	6:case	LId=z-1
6	mála	málo	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	4	det:nummod	4:det:nummod	LId=málo-1|LGloss=(př._bez_mála_peněz)
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	12:expl:pv	LGloss=(zvr._zájmeno/částice)
8	již	již	ADV	Db-------------	_	12	advmod	12:advmod	_
9	i	i	CCONJ	J^-------------	_	10	advmod:emph	10:advmod:emph	LId=i-1
10	touto	tento	DET	PDFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	11	det	11:det	_
11	otázkou	otázka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	12	obj	12:obj	_
12	zabýval	zabývat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


