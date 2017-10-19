---
layout: base
title:  'Statistics of xcomp in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `xcomp`

This relation is universal.

18437 nodes (1%) are attached to their parents as `xcomp`.

17023 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51402071920594.

The following 57 pairs of parts of speech are connected with `xcomp`: [-pos/VERB]()-[-pos/VERB]() (13205; 72% instances), [-pos/VERB]()-[-pos/ADJ]() (876; 5% instances), [-pos/ADJ]()-[-pos/VERB]() (719; 4% instances), [-pos/NOUN]()-[-pos/NOUN]() (705; 4% instances), [-pos/VERB]()-[-pos/NOUN]() (698; 4% instances), [-pos/NOUN]()-[-pos/ADJ]() (395; 2% instances), [-pos/VERB]()-[-pos/DET]() (296; 2% instances), [-pos/NOUN]()-[-pos/DET]() (266; 1% instances), [-pos/PROPN]()-[-pos/NOUN]() (183; 1% instances), [-pos/DET]()-[-pos/NOUN]() (135; 1% instances), [-pos/PRON]()-[-pos/NOUN]() (103; 1% instances), [-pos/DET]()-[-pos/ADJ]() (102; 1% instances), [-pos/PROPN]()-[-pos/ADJ]() (100; 1% instances), [-pos/PRON]()-[-pos/DET]() (84; 0% instances), [-pos/PROPN]()-[-pos/DET]() (75; 0% instances), [-pos/ADJ]()-[-pos/NOUN]() (66; 0% instances), [-pos/PRON]()-[-pos/ADJ]() (58; 0% instances), [-pos/DET]()-[-pos/DET]() (51; 0% instances), [-pos/VERB]()-[-pos/NUM]() (32; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (29; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (26; 0% instances), [-pos/ADJ]()-[-pos/DET]() (24; 0% instances), [-pos/PART]()-[-pos/VERB]() (21; 0% instances), [-pos/ADJ]()-[-pos/ADJ]() (17; 0% instances), [-pos/VERB]()-[-pos/PRON]() (17; 0% instances), [-pos/NUM]()-[-pos/ADJ]() (16; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (15; 0% instances), [-pos/PROPN]()-[-pos/PROPN]() (15; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (10; 0% instances), [-pos/PRON]()-[-pos/PRON]() (10; 0% instances), [-pos/PROPN]()-[-pos/VERB]() (9; 0% instances), [-pos/DET]()-[-pos/NUM]() (8; 0% instances), [-pos/PROPN]()-[-pos/NUM]() (7; 0% instances), [-pos/PRON]()-[-pos/PROPN]() (6; 0% instances), [-pos/VERB]()-[-pos/ADV]() (6; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (6; 0% instances), [-pos/PRON]()-[-pos/VERB]() (5; 0% instances), [-pos/DET]()-[-pos/VERB]() (4; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (4; 0% instances), [-pos/PRON]()-[-pos/ADV]() (4; 0% instances), [-pos/ADJ]()-[-pos/NUM]() (3; 0% instances), [-pos/DET]()-[-pos/PRON]() (3; 0% instances), [-pos/NOUN]()-[-pos/PROPN]() (3; 0% instances), [-pos/ADJ]()-[-pos/PROPN]() (2; 0% instances), [-pos/ADV]()-[-pos/ADJ]() (2; 0% instances), [-pos/ADV]()-[-pos/DET]() (2; 0% instances), [-pos/NUM]()-[-pos/VERB]() (2; 0% instances), [-pos/PRON]()-[-pos/NUM]() (2; 0% instances), [-pos/PROPN]()-[-pos/PRON]() (2; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (1; 0% instances), [-pos/ADJ]()-[-pos/PRON]() (1; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (1; 0% instances), [-pos/ADV]()-[-pos/VERB]() (1; 0% instances), [-pos/DET]()-[-pos/ADV]() (1; 0% instances), [-pos/PART]()-[-pos/ADJ]() (1; 0% instances), [-pos/PROPN]()-[-pos/ADV]() (1; 0% instances), [-pos/VERB]()-[-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Ceny	cena	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	_	LId=cena-1|LGloss=(v_penězích,_naturální,_nevyčíslitelná,...)
2	centrálně	centrálně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=centrální
3	vyráběného	vyráběný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=vyrábět
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	_	LId=teplo-1
5	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
6	mohly	moci	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
7	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	cop	_	_
8	i	i	CCONJ	J^-------------	_	9	advmod:emph	_	LId=i-1
9	nižší	nízký	ADJ	AAFP1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Number=Plur|Polarity=Pos	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 xcomp	color:blue
1	Zajímalo	zajímat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	1	aux	_	_
3	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	SpaceAfter=No|LGloss=(2./4.pád)
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	jestli	jestli	SCONJ	J,-------------	_	7	mark	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	povinen	povinný	ADJ	ACYS------A----	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	1	csubj	_	_
8	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	9	det	_	_
9	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	10	obj	_	_
10	poskytovat	poskytovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


