---
layout: base
title:  'Statistics of det:nummod in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_cac-dep-det-numgov.html">det:numgov</a></tt>.

190 nodes (0%) are attached to their parents as `det:nummod`.

187 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41052631578947.

The following 3 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (184; 97% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	3:case	LId=před-1
2	několika	několik	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Ind	3	det:nummod	3:det:nummod	_
3	dny	den	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	5	obl	5:obl:před:ins	LGloss=(jednotka_času)
4	tu	tady	ADV	Db------------1	PronType=Dem	5	advmod	5:advmod	_
5	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	tajemník	tajemník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
7	OV	OV	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	6	nmod	6:nmod	LId=OV-1|LGloss=(obvodní/okresní_výbor)
8	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	7	nmod	7:nmod	LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
9	soudruh	soudruh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	flat	6:flat	_
10	Veselý	Veselý	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	6	flat	6:flat	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

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
11	otázkou	otázka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	12	obl:arg	12:obl:arg:ins	_
12	zabýval	zabývat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 49 48 det:nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
2	uplynulém	uplynulý	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	_
4	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	stíháno	stíhaný	ADJ	VsNS---XX-AP---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=stíhat
6	několik	několik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	7	det:numgov	7:det:numgov	_
7	předsedů	předseda	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
8	JZD	JZD	NOUN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|Polarity=Pos	7	nmod	7:nmod	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	13:case	LId=za-1
10	typicky	typicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	11:advmod	LDeriv=typický
11	hospodářskou	hospodářský	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
12	trestnou	trestný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	LGloss=(čin)
13	činnost	činnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	5:obl:za:acc|19:nsubj	SpaceAfter=No|LDeriv=činný
14	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
15	která	který	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	19	nsubj	13:ref	_
16	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	18	case	18:case	LId=v-1
17	svých	svůj	DET	P8XP6----------	Case=Loc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	18	det	18:det	LId=svůj-1
18	důsledcích	důsledek	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	19	obl	19:obl:v:loc	_
19	znamenala	znamenat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	13	acl:relcl	13:acl:relcl	_
20	nepřiměřené	přiměřený	ADJ	AAFP4----1N----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	21	amod	21:amod	LDeriv=přiměřit
21	výhody	výhoda	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	19	obj	19:obj	_
22	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	25	case	25:case	_
23	některá	některý	DET	PZNP4----------	Case=Acc|Gender=Neut|Number=Plur|PronType=Ind	25	det	25:det	_
24	zemědělská	zemědělský	ADJ	AANP4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	25	amod	25:amod	_
25	družstva	družstvo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	21	nmod	21:nmod:pro:acc	_
26	anebo	nebo	CCONJ	J^------------1	_	29	cc	25.1:cc	_
27	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	29	case	29:case	LId=u-1
28	některých	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	29	det	29:det	_
29	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	25.1:dep	_
30	JZD	JZD	NOUN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|Polarity=Pos	29	nmod	29:nmod	_
31	a	a	CCONJ	J^-------------	_	33	cc	33:cc	LId=a-1
32	státních	státní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	33	amod	33:amod	_
33	statků	statek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	30	conj	29:nmod|30:conj	_
34	přímé	přímý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	35	amod	35:amod	_
35	rozkrádání	rozkrádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	29	orphan	25.1:dep	LDeriv=rozkrádat
36	značných	značný	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	37	amod	37:amod	_
37	částek	částka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	35	nmod	35:nmod:gen	_
38	tak	tak	ADV	Db-------------	PronType=Dem	29	orphan	25.1:advmod	SpaceAfter=No|LId=tak-3
39	,	,	PUNCT	Z:-------------	_	42	punct	42:punct	_
40	jak	jak	ADV	Db-------------	PronType=Int,Rel	42	advmod	42:advmod	LId=jak-3
41	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	42	nsubj	42:nsubj	_
42	bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	29	orphan	25.1:dep	_
43	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	44:case	LId=u-1
44	odsouzených	odsouzený	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	42	obl	42:obl:u:gen	LDeriv=odsoudit
45	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	46	case	46:case	LId=v-1
46	Nepolisech	Nepolisy	PROPN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Plur|Polarity=Pos	44	nmod	44:nmod:v:loc	_
47	a	a	CCONJ	J^-------------	_	49	cc	49:cc	LId=a-1
48	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	49	det:nummod	49:det:nummod	_
49	pokladních	pokladní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	44	conj	42:obl:u:gen|44:conj|53:nsubj	SpaceAfter=No
50	,	,	PUNCT	Z:-------------	_	53	punct	53:punct	_
51	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	53	nsubj	49:ref	_
52	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	53	expl:pv	53:expl:pv	LGloss=(zvr._zájmeno/částice)
53	přivlastňovaly	přivlastňovat	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	49	acl:relcl	49:acl:relcl	_
54	částky	částka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	53	obj	53:obj	_
55	přímo	přímo	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	57	advmod:emph	57:advmod:emph	_
56	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	57	case	57:case	LId=z-1
57	pokladny	pokladna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	53	obl	53:obl:z:gen	SpaceAfter=No
58	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


