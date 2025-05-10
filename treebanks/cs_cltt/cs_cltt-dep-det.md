---
layout: base
title:  'Statistics of det in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="cs_cltt-dep-det-nummod.html">det:nummod</a></tt>.

624 nodes (2%) are attached to their parents as `det`.

624 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2275641025641.

The following 2 pairs of parts of speech are connected with `det`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (623; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	vyhláška	vyhláška	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	nabývá	nabývat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účinnosti	účinnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	_
5	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl	3:obl:ins	_
6	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_
8	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	_
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
2	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	23	nsubj	23:nsubj|30:nsubj:xsubj	_
3	založené	založený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	_
4	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	5:case	LId=za-1
5	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl	3:obl:za:ins	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
7	aby	aby	SCONJ	J,-------------	_	10	mark	10:mark	_
8	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	10	aux	10:aux	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	_
10	staly	stát	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl	5:acl:aby	LId=stát-2
11	vlastníkem	vlastník	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	10	obl:arg	10:obl:arg:ins	_
12	domu	dům	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod:gen	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	14:case	LId=s-1
14	byty	byt	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	12	nmod	12:nmod:s:ins	_
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	16:case	LId=v-1
16	nájmu	nájem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	nmod	14:nmod:v:loc	_
17	společníků	společník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	16	nmod	16:nmod:gen	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
19	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	conj	16:nmod:gen|17:conj	_
20	nebo	nebo	CCONJ	J^-------------	_	21	cc	21:cc	_
21	zakladatelů	zakladatel	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	conj	16:nmod:gen|17:conj	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
23	nemusí	muset	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
24	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	25	det	25:det	_
25	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	29:amod	_
26	nehmotný	hmotný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	29	amod	29:amod	_
27	a	a	CCONJ	J^-------------	_	28	cc	28:cc	LId=a-1
28	hmotný	hmotný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	conj	26:conj|29:amod	_
29	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	obj	30:obj	_
30	odpisovat	odpisovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	23:xcomp	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	33	punct	33:punct	_
32	pokud	pokud	SCONJ	J,-------------	_	33	mark	33:mark	_
33	neslouží	sloužit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	23:advcl:pokud	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	35:case	LId=k-1
35	podnikání	podnikání	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing	33	obl	33:obl:k:dat	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	23:punct	_

~~~


