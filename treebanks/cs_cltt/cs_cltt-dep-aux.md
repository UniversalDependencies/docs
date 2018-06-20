---
layout: base
title:  'Statistics of aux in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_cltt-dep-aux-pass.html">aux:pass</a></tt>.

41 nodes (0%) are attached to their parents as `aux`.

39 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (24; 59% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (14; 34% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (3; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	8:mark	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	8:aux|13:aux	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	4:ccomp	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	11:case	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	11:amod	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl:arg	8:obl:arg	_
12	a	a	CCONJ	J^-------------	_	13	cc	13:cc	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	4:ccomp|8:conj	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	14	punct	14:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	14	nsubj	14:nsubj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct|9:punct	_
5	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	7	nsubj	7:nsubj|9:nsubj	_
6	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux|9:aux	_
7	založeny	založený	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	amod	3:amod	_
8	nebo	nebo	CCONJ	J^-------------	_	9	cc	9:cc	_
9	zřízeny	zřízený	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	7	conj	3:amod|7:conj	_
10	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	12:case	LId=za-1
11	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	fixed	10:fixed	_
12	podnikání	podnikání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	7	obl	7:obl|9:obl	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	7	punct	7:punct|9:punct	_
14	uplatňují	uplatňovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
15	ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	14:obj	_
16	odstavců	odstavec	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	15	nmod	15:nmod	_
17	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	16:nummod	_
18	až	až	SCONJ	J,-------------	_	19	cc	19:cc	LId=až-2
19	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	17	conj	16:nummod|17:conj	_
20	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	24	case	24:case	LId=v-1
21	souladu	soulad	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	20	fixed	20:fixed	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	20	fixed	20:fixed	LId=s-1
23	účetními	účetní	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	24	amod	24:amod	LId=účetní-1
24	metodami	metoda	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	14	obl	14:obl	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 26 aux	color:blue
1	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nmod	6:nmod	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	Ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	6:obj	_
4	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	5:det	_
5	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	3:nmod	_
6	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	LId=účetní-1
8	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	6:nsubj	_
9	poprvé	poprvé	ADV	Cv-------------	NumType=Ord	6	obl	6:obl	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=v-1
11	účetních	účetní	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	12	amod	12:amod	LId=účetní-1
12	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	6	obl	6:obl	_
13	započatých	započatý	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	12	amod	12:amod	_
14	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	16:nummod	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_
16	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	13	obl	13:obl	_
17	2008	2008	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	16:nummod	_
18	a	a	CCONJ	J^-------------	_	19	cc	19:cc	LId=a-1
19	později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	16	conj	13:obl|16:conj	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	26	punct	26:punct	_
21	pokud	pokud	SCONJ	J,-------------	_	26	mark	26:mark	_
22	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	26:cop	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	case	26:case	LId=v-1
24	bodě	bod	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	26	obl	26:obl	_
25	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	24	nummod	24:nummod	_
26	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	6	aux	6:aux	_
27	jinak	jinak	ADV	Db-------------	_	26	advmod	26:advmod	SpaceAfter=No
28	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


