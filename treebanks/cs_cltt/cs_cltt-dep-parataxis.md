---
layout: base
title:  'Statistics of parataxis in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `parataxis`

This relation is universal.

59 nodes (0%) are attached to their parents as `parataxis`.

58 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 25.728813559322.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (28; 47% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (21; 36% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (5; 8% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 21 parataxis	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obl:arg	5:obl:arg:o:loc|10:obl:arg:o:loc	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:ins	_
8	A	a	CCONJ	J^-------------	_	7	nmod	7:nmod	LId=a-1
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	8.1:cc	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	conj	8.1:advmod	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	8.1:dep	_
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	20	obl	20:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
4	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	5	case	5:case	LId=v-1
5	kterých	který	DET	P4XP6----------	Case=Loc|Number=Plur|PronType=Int,Rel	9	obl	9:obl:v:loc	_
6	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	LId=účetní-1
7	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	9	nsubj	9:nsubj	_
8	pouze	pouze	ADV	Db-------------	_	9	advmod:emph	9:advmod:emph	_
9	přerozděluje	přerozdělovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
10	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	11	case	11:case	LId=mezi-1
11	společníky	společník	NOUN	NNMP7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	9	obl	9:obl:mezi:ins	_
12	přijaté	přijatý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	dividendy	dividenda	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	obl:arg	9:obl:arg:gen	_
14	nebo	nebo	CCONJ	J^-------------	_	15	cc	15:cc	_
15	podíly	podíl	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	13	conj	9:obl:arg:gen|13:conj	_
16	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	17	case	17:case	LId=na-1
17	zisku	zisk	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	15	nmod	15:nmod:na:loc	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	20	punct	20:punct	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	expl:pass	20:expl:pass	_
20	uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
21	tyto	tento	DET	PDFP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	22	det	22:det	_
22	platby	platba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	20	nsubj:pass	20:nsubj:pass	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	case	26:case	LId=v-1
24	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	23	fixed	23:fixed	_
25	provozní	provozní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	26	amod	26:amod	_
26	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	20	obl	20:obl:v_rámci:gen	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	20	punct	20:punct	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 25 parataxis	color:blue
1	Nestanoví-li	Nestanoví-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	14	nmod	14:nmod	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	_
3	dále	dále	ADV	Db------------1	_	1	advmod	1:advmod	LId=dále-3
4	jinak	jinak	ADV	Db-------------	_	1	advmod	1:advmod	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
6	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	14	nsubj:pass	14:nsubj:pass	_
7	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	8	det	8:det	_
8	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	6:nmod:gen	_
9	týkající	týkající	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	_
11	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	12:amod	LId=účetní-1
12	závěrky	závěrka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	9	obj	9:obj	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	14:expl:pass	_
14	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
15	i	i	CCONJ	J^-------------	_	19	advmod:emph	19:advmod:emph	LId=i-1
16	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	19:case	LId=pro-1
17	konsolidovanou	konsolidovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	_
18	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	LId=účetní-1
19	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	14	obl	14:obl:pro:acc	SpaceAfter=No
20	;	;	PUNCT	Z:-------------	_	25	punct	25:punct	_
21	konsolidovaná	konsolidovaný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	23	amod	23:amod	_
22	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	23	amod	23:amod	LId=účetní-1
23	závěrka	závěrka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	25	nsubj:pass	25:nsubj:pass	_
24	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	25	aux:pass	25:aux:pass	_
25	ověřována	ověřovaný	ADJ	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	14	parataxis	14:parataxis	LDeriv=ověřovat
26	auditorem	auditor	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	25	obl:arg	25:obl:arg:ins	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


