---
layout: base
title:  'Statistics of amod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `amod`

This relation is universal.

5931 nodes (16%) are attached to their parents as `amod`.

5293 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3085483055134.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (5918; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


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
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	30	obl	10:obl|30:obl:v:loc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
6	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	10	advmod	4:ref	_
7	byl	být	AUX	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	10:aux:pass	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	_
10	vypracován	vypracovaný	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	acl:relcl	4:acl:relcl	LDeriv=vypracovat
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 amod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc|ExtPos=ADP	3	case	3:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	fixed	1:fixed	_
3	nezpochybnění	nezpochybnění	NOUN	NNNS2-----N----	Case=Gen|Gender=Neut|Number=Sing	37	obl	37:obl:v_případě:gen|50:obl:v_případě:gen	LDeriv=zpochybnění
4	průkaznosti	průkaznost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod:gen	_
5	převodu	převod	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod:gen	_
6	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	7:amod	LId=účetní-1
7	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	_
8	žádnou	žádný	DET	PWFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Neg	3	amod	3:amod	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	LId=z-1
10	osob	osoba	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	8	nmod	8:nmod:z:gen|16:nsubj	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
12	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	16	nsubj	10:ref	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	15	case	15:case	LId=s-1
14	převedeným	převedený	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	15	amod	15:amod	_
15	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	16	obl:arg	16:obl:arg:s:ins	_
16	pracují	pracovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	10:acl:relcl	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
18	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	37	expl:pass	37:expl:pass	_
19	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	21	case	21:case	LId=u-1
20	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	21	amod	21:amod	LId=účetní-1
21	záznamů	záznam	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	37	obl	25:nsubj|37:obl:u:gen	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	25	punct	25:punct	_
23	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	25	nsubj	21:ref	_
24	nejsou	být	AUX	VB-P---3P-NA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	25	cop	25:cop	_
25	označeny	označený	ADJ	VsTP---XX-AP---	Animacy=Inan|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	21	acl:relcl	21:acl:relcl	LDeriv=označit
26	skartačními	skartační	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	27	amod	27:amod	_
27	znaky	znak	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	25	obl	25:obl:ins	_
28	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	29	case	29:case	LId=pro-1
29	výběr	výběr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	27	nmod	27:nmod:pro:acc	_
30	nebo	nebo	CCONJ	J^-------------	_	31	cc	31:cc	_
31	archiválii	archiválie	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	29	conj	27:nmod:pro:acc|29:conj	_
32	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	35	case	35:case	LId=podle-2
33	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	amod	35:amod	_
34	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	amod	35:amod	_
35	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	27	nmod	27:nmod:podle:gen	SpaceAfter=No
36	,	,	PUNCT	Z:-------------	_	25	punct	25:punct	_
37	nevyžaduje	vyžadovat	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
38	předložení	předložení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	37	nsubj:pass	37:nsubj:pass	_
39	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	40	amod	40:amod	LId=účetní-1
40	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	38	nmod	38:nmod:gen	_
41	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	43	case	43:case	LId=v-1
42	původní	původní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	43	amod	43:amod	_
43	formě	forma	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	40	nmod	40:nmod:v:loc	_
44	a	a	CCONJ	J^-------------	_	50	cc	50:cc	LId=a-1
45	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	46	case	46:case	LId=pro-1
46	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	50	obl	50:obl:pro:acc	_
47	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	49	case	49:case	LId=v-1
48	původní	původní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	49	amod	49:amod	_
49	formě	forma	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	46	nmod	46:nmod:v:loc	_
50	neplatí	platit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	37	conj	0:root|37:conj	_
51	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	50	nsubj	50:nsubj	_
52	§_31	§_31	X	X@-------------	_	51	nmod	51:nmod	SpaceAfter=No
53	.	.	PUNCT	Z:-------------	_	37	punct	37:punct	_

~~~


