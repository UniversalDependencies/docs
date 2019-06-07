---
layout: base
title:  'Statistics of nummod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nummod`

This relation is universal.

352 nodes (1%) are attached to their parents as `nummod`.

220 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13352272727273.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (285; 81% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (29; 8% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (12; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (11; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (8; 2% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	Taisce	taisce	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	ábhair	ábhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	compound	_	_
3	léitheoireachta	léitheoireacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	compound	_	_
4	(11)	(11)	NUM	Item	_	2	nummod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	B	B	NUM	Item	_	3	nummod	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	3	punct	_	_
3	Deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
4	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	chairde	cara	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	3	nsubj	_	_
6	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
7	go	go	PART	Vb	PartType=Cmpl	8	mark:prt	_	_
8	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	3	ccomp	_	_
9	Mel	Mel	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	10	compound	_	_
10	Gibson	Gibson	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nsubj	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	hiontach	iontach	ADJ	Adj	Degree=Pos|Form=HPref	8	xcomp:pred	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	scannán	scannán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	_
15	sin	sin	DET	Det	PronType=Dem	14	det	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 nummod	color:blue
1	Faightear	faigh	VERB	VT	Mood=Ind|Tense=Pres|Voice=Auto	0	root	_	_
2	seangán	seangán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obj	_	_
3	dearg	dearg	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	2	amod	_	_
4	in	i	ADP	Simp	_	5	case	_	_
5	armas	armas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	_
6	Acadamh	acadamh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	compound	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	Bhaile	Baile	PROPN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	6	compound	_	_
9	Meánach	meánach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	:	:	PUNCT	Punct	_	12	punct	_	_
11	Ar	ar	ADP	Simp	_	12	case	_	_
12	airgead	airgead	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	_
13	gearrbhalc	balc	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	compound	_	_
14	gorm	gorm	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	13	amod	_	_
15	idir	idir	ADP	Simp	_	18	case	_	_
16	thuas	thuas	ADV	Dir	_	18	advmod	_	_
17	dhá	dó	NUM	Num	NumType=Card	18	nummod	_	_
18	dheasóg	deasóg	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	12	nmod	_	_
19	agus	agus	CCONJ	Coord	_	21	cc	_	_
20	thíos	thíos	ADV	Dir	_	21	advmod	_	_
21	seangán	seangán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	18	conj	_	_
22	gach	gach	DET	Det	Definite=Def	23	det	_	_
23	rud	rud	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	21	compound	_	_
24	dearg	dearg	ADJ	Adj	Degree=Pos	23	amod	_	_
25	(	(	PUNCT	Punct	_	26	punct	_	SpaceAfter=No
26	CCH	CCH	X	Abr	Abbr=Yes	23	compound	_	SpaceAfter=No
27	:	:	PUNCT	Punct	_	28	punct	_	_
28	44)	44)	NUM	Item	_	26	nummod	_	SpaceAfter=No
29	.	.	PUNCT	.	_	1	punct	_	_

~~~


