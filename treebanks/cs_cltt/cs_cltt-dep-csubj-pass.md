---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 67% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	23	punct	23:punct	_
2	Pokud	pokud	SCONJ	J,-------------	_	6	mark	6:mark	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	_
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=při-1
5	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	6	obl	6:obl:při:loc	_
6	zjistí	zjistit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	23:advcl:pokud	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
8	že	že	SCONJ	J,-------------	_	12	mark	12:mark	_
9	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	12:nsubj	_
10	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod	9:nmod:gen	_
11	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	vyšší	vysoký	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing|Polarity=Pos	6	csubj:pass	6:csubj:pass	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	popřípadě	popřípadě	ADV	Db-------------	_	16	cc	16:cc	_
15	i	i	CCONJ	J^-------------	_	16	advmod:emph	16:advmod:emph	LId=i-1
16	nižší	nízký	ADJ	AAFS1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing|Polarity=Pos	12	conj	6:csubj:pass|12:conj	_
17	než	než	SCONJ	J,-------------	_	19	mark	19:mark	LId=než-2
18	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	19	det	19:det	_
19	výše	výše	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	12	advcl	12:advcl:než|16:advcl:než	_
20	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	21	case	21:case	LId=v-1
21	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	19	nmod	19:nmod:v:loc	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
23	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
24	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl:pass	23:expl:pass	_
25	závazky	závazek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	23	nsubj:pass	23:nsubj:pass	_
26	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	27:case	LId=v-1
27	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	25	nmod	25:nmod:v:loc	_
28	a	a	CCONJ	J^-------------	_	31	cc	31:cc	LId=a-1
29	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	31	case	31:case	LId=v-1
30	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	31	amod	31:amod	LId=účetní-1
31	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	27	conj	25:nmod:v:loc|27:conj	_
32	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	35:case	LId=v-1
33	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	35	det	35:det	_
34	zjištěném	zjištěný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	35	amod	35:amod	_
35	ocenění	ocenění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	23	obl	23:obl:v:loc	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	23:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubj:pass	color:blue
1	Zohledněním	zohlednění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing	14	obl:arg	14:obl:arg:ins	_
2	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
3	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod:gen	_
5	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod:gen	_
6	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	LId=podle-2
7	věty	věta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	14	obl	14:obl:podle:gen	_
8	druhé	druhý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	LId=druhý-1
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	14:expl:pass	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=pro-1
11	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obl	14:obl:pro:acc	_
12	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	13	det	13:det	_
13	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	11	nmod	11:nmod:gen	_
14	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
16	že	že	SCONJ	J,-------------	_	19	mark	19:mark	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	18:amod	LId=účetní-1
18	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	19	nsubj	19:nsubj|21:nsubj	_
19	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	csubj:pass	14:csubj:pass	_
20	a	a	CCONJ	J^-------------	_	21	cc	21:cc	LId=a-1
21	aktualizuje	aktualizovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	14:csubj:pass|19:conj	_
22	odpisový	odpisový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	23:amod	_
23	plán	plán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	19	obj	19:obj|21:obj	_
24	předmětného	předmětný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	25	amod	25:amod	_
25	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nmod	23:nmod:gen	_
26	tak	tak	ADV	Db-------------	PronType=Dem	19	advmod	19:advmod|21:advmod	SpaceAfter=No|LId=tak-3
27	,	,	PUNCT	Z:-------------	_	48	punct	48:punct	_
28	aby	aby	SCONJ	J,-------------	_	48	mark	48:mark	_
29	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	48	aux	48:aux	_
30	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	48	expl:pv	48:expl:pv	_
31	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	33:case	LId=za-1
32	plánovanou	plánovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	33	amod	33:amod	_
33	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	48	obl	48:obl:za:acc	_
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	35:det	_
35	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	33	nmod	33:nmod:gen	_
36	součet	součet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	48	nsubj	48:nsubj	_
37	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	40	amod	40:amod	_
38	a	a	CCONJ	J^-------------	_	39	cc	39:cc	LId=a-1
39	plánovaných	plánovaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	37	conj	37:conj|40:amod	_
40	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	36	nmod	36:nmod:gen	_
41	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	44:case	LId=včetně-2
42	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	44:amod	_
43	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	44:amod	_
44	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	36	nmod	36:nmod:včetně:gen	_
45	nebo	nebo	CCONJ	J^-------------	_	47	cc	47:cc	_
46	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	47	amod	47:amod	_
47	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	44	conj	36:nmod:včetně:gen|44:conj	_
48	rovnal	rovnat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	19	advcl	19:advcl:aby|21:advcl:aby	_
49	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	48	obj	48:obj	_
50	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	49	nmod	49:nmod:gen	_
51	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	52	case	52:case	LId=podle-2
52	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	49	nmod	49:nmod:podle:gen	_
53	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	52	nummod	52:nummod	SpaceAfter=No
54	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


