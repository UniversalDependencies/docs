---
layout: base
title:  'Statistics of det in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="cs_cltt-dep-det-nummod.html">det:nummod</a></tt>.

629 nodes (2%) are attached to their parents as `det`.

624 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24642289348172.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (627; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	vyhláška	vyhláška	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
3	nabývá	nabývat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účinnosti	účinnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	_
5	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:ins	_
6	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_
8	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	_
9	2003	2003	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det	color:blue
1	Právnické	právnický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	23	nsubj	23:nsubj|30:nsubj:xsubj	_
3	založené	založený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	_
4	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	5:case	LId=za-1
5	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:za:ins	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
7	aby	aby	SCONJ	J,-------------	_	10	mark	10:mark	_
8	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	10	aux	10:aux	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	_
10	staly	stát	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl	5:acl:aby	LId=stát-2
11	vlastníkem	vlastník	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	obl:arg	10:obl:arg:ins	_
12	domu	dům	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	11:nmod:gen	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	14:case	LId=s-1
14	byty	byt	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	12	nmod	12:nmod:s:ins	_
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	16:case	LId=v-1
16	nájmu	nájem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	14:nmod:v:loc	_
17	společníků	společník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	16	nmod	16:nmod:gen	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
19	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	16:nmod:gen|17:conj	_
20	nebo	nebo	CCONJ	J^-------------	_	21	cc	21:cc	_
21	zakladatelů	zakladatel	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	16:nmod:gen|17:conj	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
23	nemusí	muset	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
24	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	25	det	25:det	_
25	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	29:amod	_
26	nehmotný	hmotný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	29	amod	29:amod	_
27	a	a	CCONJ	J^-------------	_	28	cc	28:cc	LId=a-1
28	hmotný	hmotný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	conj	26:conj|29:amod	_
29	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	30	obj	30:obj	_
30	odpisovat	odpisovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	23:xcomp	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	33	punct	33:punct	_
32	pokud	pokud	SCONJ	J,-------------	_	33	mark	33:mark	_
33	neslouží	sloužit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	23:advcl:pokud	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	35:case	LId=k-1
35	podnikání	podnikání	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	33:obl:k:dat	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	23:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 det	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	2	mark	2:mark	_
2	dojde	dojít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	25	advcl	25:advcl:pokud	_
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	5	case	5:case	LId=v-1
4	výjimečných	výjimečný	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	amod	5:amod	_
5	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	2	obl	2:obl:v:loc	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	7:case	LId=k-1
7	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	2	det	2:det	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	18	punct	18:punct	_
9	že	že	SCONJ	J,-------------	_	18	mark	18:mark	_
10	použití	použití	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	18	nsubj	18:nsubj	_
11	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	12:amod	LId=účetní-1
12	metod	metoda	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	10	nmod	10:nmod:gen	_
13	stanovených	stanovený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	12:amod	_
14	prováděcími	prováděcí	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	16:amod	_
15	právními	právní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	16:amod	_
16	předpisy	předpis	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	13	obl:arg	13:obl:arg:ins	_
17	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	18	cop	18:cop	_
18	neslučitelné	slučitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	7	acl	7:acl:že	_
19	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	20	case	20:case	LId=s-1
20	povinností	povinnost	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	18	obl:arg	18:obl:arg:s:ins	_
21	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	22	case	22:case	LId=podle-2
22	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	18	obl	18:obl:podle:gen	_
23	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	22	nummod	22:nummod	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
25	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
26	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	27:amod	LId=účetní-1
27	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	25	nsubj	25:nsubj	_
28	odchylně	odchylně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	25	advmod	25:advmod	_
29	tak	tak	ADV	Db-------------	PronType=Dem	25	advmod	25:advmod	SpaceAfter=No|LId=tak-3
30	,	,	PUNCT	Z:-------------	_	34	punct	34:punct	_
31	aby	aby	SCONJ	J,-------------	_	34	mark	34:mark	_
32	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	34	aux	34:aux	_
33	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	34	aux:pass	34:aux:pass	_
34	podán	podaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	25	advcl	25:advcl:aby	LDeriv=podat
35	věrný	věrný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	38	amod	38:amod	_
36	a	a	CCONJ	J^-------------	_	37	cc	37:cc	LId=a-1
37	poctivý	poctivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	conj	35:conj|38:amod	_
38	obraz	obraz	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	34	nsubj:pass	34:nsubj:pass	SpaceAfter=No
39	.	.	PUNCT	Z:-------------	_	25	punct	25:punct	_

~~~


