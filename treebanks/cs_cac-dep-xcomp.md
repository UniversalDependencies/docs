---
layout: base
title:  'Statistics of xcomp in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `xcomp`

This relation is universal.

5475 nodes (1%) are attached to their parents as `xcomp`.

5089 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64511415525114.

The following 53 pairs of parts of speech are connected with `xcomp`: [-pos/VERB]()-[-pos/VERB]() (3464; 63% instances), [-pos/NOUN]()-[-pos/NOUN]() (509; 9% instances), [-pos/VERB]()-[-pos/ADJ]() (311; 6% instances), [-pos/VERB]()-[-pos/NOUN]() (212; 4% instances), [-pos/ADJ]()-[-pos/VERB]() (194; 4% instances), [-pos/NOUN]()-[-pos/ADJ]() (121; 2% instances), [-pos/VERB]()-[-pos/DET]() (116; 2% instances), [-pos/NOUN]()-[-pos/DET]() (107; 2% instances), [-pos/DET]()-[-pos/NOUN]() (45; 1% instances), [-pos/PRON]()-[-pos/NOUN]() (43; 1% instances), [-pos/PROPN]()-[-pos/NOUN]() (36; 1% instances), [-pos/ADJ]()-[-pos/NOUN]() (34; 1% instances), [-pos/DET]()-[-pos/PRON]() (28; 1% instances), [-pos/ADJ]()-[-pos/DET]() (20; 0% instances), [-pos/DET]()-[-pos/ADJ]() (19; 0% instances), [-pos/PRON]()-[-pos/DET]() (19; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (17; 0% instances), [-pos/DET]()-[-pos/DET]() (16; 0% instances), [-pos/PRON]()-[-pos/ADJ]() (16; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (14; 0% instances), [-pos/PRON]()-[-pos/PRON]() (14; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (13; 0% instances), [-pos/PART]()-[-pos/VERB]() (11; 0% instances), [-pos/PROPN]()-[-pos/ADJ]() (9; 0% instances), [-pos/PROPN]()-[-pos/DET]() (8; 0% instances), [-pos/SYM]()-[-pos/VERB]() (8; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (7; 0% instances), [-pos/PROPN]()-[-pos/PROPN]() (7; 0% instances), [-pos/VERB]()-[-pos/NUM]() (7; 0% instances), [-pos/DET]()-[-pos/VERB]() (5; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (4; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (4; 0% instances), [-pos/PRON]()-[-pos/ADV]() (4; 0% instances), [-pos/VERB]()-[-pos/ADV]() (3; 0% instances), [-pos/VERB]()-[-pos/PRON]() (3; 0% instances), [-pos/VERB]()-[-pos/SYM]() (3; 0% instances), [-pos/ADV]()-[-pos/ADJ]() (2; 0% instances), [-pos/ADV]()-[-pos/VERB]() (2; 0% instances), [-pos/AUX]()-[-pos/VERB]() (2; 0% instances), [-pos/DET]()-[-pos/NUM]() (2; 0% instances), [-pos/NOUN]()-[-pos/PROPN]() (2; 0% instances), [-pos/SYM]()-[-pos/ADJ]() (2; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (2; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (1; 0% instances), [-pos/DET]()-[-pos/SYM]() (1; 0% instances), [-pos/NUM]()-[-pos/ADJ]() (1; 0% instances), [-pos/NUM]()-[-pos/VERB]() (1; 0% instances), [-pos/PRON]()-[-pos/PROPN]() (1; 0% instances), [-pos/PRON]()-[-pos/VERB]() (1; 0% instances), [-pos/PROPN]()-[-pos/NUM]() (1; 0% instances), [-pos/PROPN]()-[-pos/PRON]() (1; 0% instances), [-pos/PROPN]()-[-pos/VERB]() (1; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Protože	protože	SCONJ	J,-------------	_	8	mark	_	_
2	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=bez-1
3	železnice	železnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	8	obl	_	_
4	bychom	být	AUX	Vc-P---1-------	Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	8	aux	_	_
5	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	_	LGloss=(zvr._zájmeno/částice)
6	život	život	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	9	obj	_	_
7	vůbec	vůbec	ADV	Db-------------	_	8	advmod	_	_
8	nedovedli	dovést	VERB	VpMP---XR-NA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	představit	představit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	8	xcomp	_	SpaceAfter=No|LGloss=(si_něco;_něco/někoho_někomu)
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	aux:pass	_	_
2	rozhodnuto	rozhodnutý	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	zahájit	zahájit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	csubj:pass	_	_
4	jako	jako	SCONJ	J,-------------	_	6	aux	_	_
5	další	další	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	akci	akce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	xcomp	_	_
7	výstavbu	výstavba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Konečně	konečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	LDeriv=konečný
2	všechny	všechno	PRON	PLIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	nmod	_	_
3	druhy	druh	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj	_	LId=druh-1|LGloss=(typ)
4	pleti	pleť	NOUN	NNFS2-----A---1	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
6	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	cop	_	_
7	dráždivé	dráždivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


