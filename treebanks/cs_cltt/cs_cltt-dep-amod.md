---
layout: base
title:  'Statistics of amod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `amod`

This relation is universal.

6016 nodes (17%) are attached to their parents as `amod`.

5293 instances of `amod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37483377659574.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (6000; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Metoda	metoda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	komponentního	komponentní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	odpisování	odpisování	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	_
4	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 amod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nmod	30:nmod	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=v-1
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	30	obl	30:obl:v:loc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
6	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	10	advmod	10:advmod	_
7	byl	být	AUX	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	10:aux:pass	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	_
10	vypracován	vypracovaný	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	amod	4:amod	LDeriv=vypracovat
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	LId=podle-2
12	zákona_č._125/2008_Sb.	zákona_č._125/2008_Sb.	X	X@-------------	_	10	obl	10:obl:podle:gen	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
14	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	LId=o-1
15	přeměnách	přeměna	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	12	nmod	12:nmod:o:loc	_
16	obchodních	obchodní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	17	amod	17:amod	_
17	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	15	nmod	15:nmod:gen	_
18	a	a	CCONJ	J^-------------	_	19	cc	19:cc	LId=a-1
19	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	17	conj	15:nmod:gen|17:conj	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
21	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	22	case	22:case	LId=v-1
22	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	12	nmod	12:nmod:v:loc	_
23	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	22:amod	_
24	do	do	ADJ	A2--------A----	Degree=Pos|Hyph=Yes|Polarity=Pos	23	amod	23:amod	LId=do-7
25	31	31	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	27:nummod	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	25	punct	25:punct	_
27	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	obl	24:obl:gen	_
28	2011	2011	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	27:nummod	SpaceAfter=No
29	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
30	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
31	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	expl:pass	30:expl:pass	_
32	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	33	case	33:case	LId=při-1
33	účtování	účtování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	30	obl	30:obl:při:loc	_
34	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	35:case	LId=o-1
35	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	33	nmod	33:nmod:o:loc	_
36	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	35	nmod	35:nmod:gen	_
37	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	38	case	38:case	LId=podle-2
38	vyhlášky_č._500/2002_Sb.	vyhlášky_č._500/2002_Sb.	X	X@-------------	_	30	obl	30:obl:podle:gen	SpaceAfter=No
39	,	,	PUNCT	Z:-------------	_	41	punct	41:punct	_
40	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	41	case	41:case	LId=v-1
41	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	38	nmod	38:nmod:v:loc	_
42	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	41	amod	41:amod	_
43	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	44:case	LId=do-1
44	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	42	obl	42:obl:do:gen	_
45	nabytí	nabytí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	44	nmod	44:nmod:gen	_
46	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	45	nmod	45:nmod:gen	_
47	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	48	det	48:det	_
48	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	46	nmod	46:nmod:gen	SpaceAfter=No
49	.	.	PUNCT	Z:-------------	_	30	punct	30:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 amod	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Povinnost	povinnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
3	zveřejnění	zveřejnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	2	nmod	2:nmod:gen	_
4	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	6:case	LId=podle-2
5	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	6	det	6:det	_
6	ustanovení	ustanovení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	3	nmod	3:nmod:podle:gen	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	8:expl:pv	_
8	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=na-1
10	všechny	všechen	DET	PLFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	11	det	11:det	_
11	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	8	obl:arg	8:obl:arg:na:acc	_
12	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	LId=účetní-1
13	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	11	nmod	11:nmod:gen	_
14	i	i	CCONJ	J^-------------	_	16	cc	16:cc	LId=i-1
15	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	16	amod	16:amod	_
16	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	11	conj	8:obl:arg:na:acc|11:conj	_
17	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	19	case	19:case	LId=s-1
18	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	17	fixed	17:fixed	_
19	těch	ten	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	11	amod	11:amod|16:amod|24:obl:arg:na:acc	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	24	punct	24:punct	_
21	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	22:case	LId=na-1
22	které	který	DET	P4YP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	24	obl:arg	19:ref	_
23	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	24:expl:pv	_
24	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	19:acl:relcl	_
25	utajení	utajení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	24	nsubj	24:nsubj	_
26	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	29	case	29:case	LId=podle-2
27	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	29:amod	_
28	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	29:amod	_
29	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	25	nmod	25:nmod:podle:gen	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


