---
layout: base
title:  'Statistics of cop in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `cop`

This relation is universal.

437 nodes (1%) are attached to their parents as `cop`.

402 instances of `cop` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29519450800915.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (262; 60% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (133; 30% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (27; 6% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Stanovení	stanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
2	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	3	det	3:det	_
3	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	1:nmod	_
4	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=na-1
5	smluvním	smluvní	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	základě	základ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod	_
7	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	dotčeno	dotčený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj|12:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	_
4	buď	buď	CCONJ	J^-------------	_	5	cc	5:cc	_
5	shoduje	shodovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	8:case	LId=s-1
7	kalendářním	kalendářní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl:arg	5:obl:arg	_
9	nebo	nebo	CCONJ	J^-------------	_	12	cc	12:cc	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	hospodářským	hospodářský	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	conj	0:root|5:conj	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cop	color:blue
1	Informace	informace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	3:nsubj:pass	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
3	považuje	považovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=za-1
5	spolehlivou	spolehlivý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	8:punct|13:punct|15:punct	_
7	jestliže	jestliže	SCONJ	J,-------------	_	8	mark	8:mark	_
8	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	_
9	požadavek	požadavek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	8:obj	_
10	§_7_odst._1	§_7_odst._1	X	X@-------------	_	9	nmod	9:nmod	_
11	a	a	CCONJ	J^-------------	_	13	cc	13:cc	LId=a-1
12	je-li	je-li	X	X@-------------	_	13	cop	13:cop	_
13	úplná	úplný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	conj	3:advcl|8:conj	_
14	a	a	CCONJ	J^-------------	_	15	cc	15:cc	LId=a-1
15	včasná	včasný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	conj	3:advcl|13:conj	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


