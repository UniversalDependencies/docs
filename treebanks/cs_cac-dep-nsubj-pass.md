---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `nsubj:pass`

This relation is a language-specific subtype of [nsubj]().

3466 nodes (1%) are attached to their parents as `nsubj:pass`.

1807 instances of `nsubj:pass` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.27524523946913.

The following 18 pairs of parts of speech are connected with `nsubj:pass`: [-pos/ADJ]()-[-pos/NOUN]() (1725; 50% instances), [-pos/VERB]()-[-pos/NOUN]() (1274; 37% instances), [-pos/ADJ]()-[-pos/DET]() (178; 5% instances), [-pos/VERB]()-[-pos/DET]() (79; 2% instances), [-pos/ADJ]()-[-pos/PRON]() (39; 1% instances), [-pos/VERB]()-[-pos/PRON]() (34; 1% instances), [-pos/ADJ]()-[-pos/PROPN]() (25; 1% instances), [-pos/ADJ]()-[-pos/NUM]() (24; 1% instances), [-pos/VERB]()-[-pos/NUM]() (19; 1% instances), [-pos/ADJ]()-[-pos/ADJ]() (15; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (12; 0% instances), [-pos/VERB]()-[-pos/ADV]() (12; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (10; 0% instances), [-pos/VERB]()-[-pos/SYM]() (7; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (6; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (5; 0% instances), [-pos/VERB]()-[-pos/CCONJ]() (1; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj:pass	_	_
2	rozpracován	rozpracovaný	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	fixed	_	_
5	KRBu	KRB	PROPN	NNIS2-----A----	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj:pass	_	_
2	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
3	vždycky	vždycky	ADV	Db-------------	_	7	advmod	_	_
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	všude	všude	ADV	Db-------------	PronType=Tot	3	conj	_	_
6	správně	správně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LGloss=(podle_něj._měřítek;_př._chlap,_míra,...)|LDeriv=správný
7	pochopeno	pochopený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


