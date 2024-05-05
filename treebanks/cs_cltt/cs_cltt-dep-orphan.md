---
layout: base
title:  'Statistics of orphan in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `orphan`

This relation is universal.

15 nodes (0%) are attached to their parents as `orphan`.

15 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.46666666666667.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (6; 40% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 orphan	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj|13:nsubj	_
4	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=o-1
6	odloženém	odložený	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	7:amod	_
7	závazku	závazek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:o:loc	_
8	vždy	vždy	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos|PronType=Tot	4	advmod	4:advmod	_
9	a	a	CCONJ	J^-------------	_	13	cc	13.1:cc	LId=a-1
10	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=o-1
11	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
12	daňové	daňový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	pohledávce	pohledávka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	conj	13.1:dep	_
14	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	17	case	17:case	LId=s-1
15	ohledem	ohled	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	14	fixed	14:fixed	_
16	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	fixed	14:fixed	LId=na-1
17	zásadu	zásada	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	13	orphan	13.1:dep	_
18	opatrnosti	opatrnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	17	nmod	17:nmod:gen	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 orphan	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obl:arg	5:obl:arg:o:loc|10:obl:arg:o:loc	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:ins	_
8	A	a	CCONJ	J^-------------	_	7	nmod	7:nmod	LId=a-1
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	10.1:cc	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	conj	10.1:advmod	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	10.1:dep	_
12	B.	B.	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	11	nmod	11:nmod	_
13	U	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	14:case	LId=u-1
14	způsobu	způsob	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	21	obl	21:obl:u:gen	_
15	A	a	CCONJ	J^-------------	_	14	nmod	14:nmod	LId=a-1
16	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	expl:pass	21:expl:pass	_
17	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	20:case	LId=v-1
18	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	17	fixed	17:fixed	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	20:amod	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	21:obl:v_průběhu:gen	_
21	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	23:case	LId=s-1
23	využitím	využití	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	21:obl:s:ins	_
24	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	23:nmod:gen	_
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	27:case	LId=v-1
26	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	27:amod	_
27	třídě	třída	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	24	nmod	24:nmod:v:loc	_
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	27:nummod	_
29	Zásoby	zásoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	27:nmod:gen	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 22 orphan	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
3	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:v:loc	_
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	LId=účetní-1
6	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
7	průměrný	průměrný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	9:amod	_
8	přepočtený	přepočtený	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	počet	počet	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	_
10	zaměstnanců	zaměstnanec	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nmod	9:nmod:gen	_
11	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	13:case	_
12	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	13	amod	13:amod	LId=účetní-1
13	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	10	nmod	10:nmod:během:gen	_
14	a	a	CCONJ	J^-------------	_	16	cc	16.1:cc	LId=a-1
15	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	16	case	16:case	LId=z-1
16	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	4	conj	16.1:dep	_
17	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	16	orphan	16.1:dep	_
18	řídících	řídící	ADJ	AGMP2-----A----	Animacy=Anim|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	19	amod	19:amod	_
19	orgánů	orgán	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	nmod	17:nmod:gen	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
21	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	22	case	22:case	LId=s-1
22	uvedením	uvedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	16	orphan	16.1:dep	_
23	výše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	22	advmod	22:advmod	LId=vysoko-1
24	osobních	osobní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	25	amod	25:amod	_
25	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	23:nmod:gen	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	29	punct	29:punct	_
27	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	29	nsubj:pass	29:nsubj:pass	_
28	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	29	aux:pass	29:aux:pass	_
29	vynaloženy	vynaložený	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	25	amod	25:amod	LDeriv=vynaložit
30	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	31	case	31:case	LId=na-1
31	zaměstnance	zaměstnanec	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	29	obl	29:obl:na:acc	_
32	a	a	CCONJ	J^-------------	_	34	cc	34:cc	LId=a-1
33	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	34	case	34:case	LId=z-1
34	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	29	conj	25:amod|29:conj	_
35	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	36:case	LId=na-1
36	členy	člen	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	29	dep	29:dep|34:dep	_
37	řídících	řídící	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	38	amod	38:amod	_
38	orgánů	orgán	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	36	nmod	36:nmod:gen	SpaceAfter=No
39	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


