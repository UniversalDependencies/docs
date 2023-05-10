---
layout: base
title:  'Statistics of obl:arg in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-obl.html">obl</a></tt>.

686 nodes (2%) are attached to their parents as `obl:arg`.

481 instances of `obl:arg` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13411078717201.

The following 14 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (338; 49% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (238; 35% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (31; 5% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (16; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (14; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (13; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:arg	color:blue
1	Tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
3	nabývá	nabývat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:gen	_
5	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:ins	_
6	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_
8	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	_
9	1992	1992	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:arg	color:blue
1	Ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	0	root	0:root	_
2	přechodná	přechodný	ADJ	AANP1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	1	amod	1:amod	_
3	zavedena	zavedený	ADJ	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	dep	1:dep	LDeriv=zavést
4	vyhláškou	vyhláška	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:ins	_
5	č._472/2003_Sb._Čl._II	č._472/2003_Sb._Čl._II	X	X@-------------	_	4	nmod	4:nmod	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 32 obl:arg	color:blue
1	Hlediskem	hledisko	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
2	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	3:case	LId=pro-1
3	účtování	účtování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	1:nmod:pro:acc	_
4	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
5	vykazování	vykazování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	3	conj	1:nmod:pro:acc|3:conj	_
6	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	LId=účetní-1
7	případů	případ	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	nmod	3:nmod:gen|5:nmod:gen	_
8	časového	časový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	rozlišení	rozlišení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	7	nmod	7:nmod:gen	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
11	skutečnost	skutečnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	1:nsubj	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	20	punct	20:punct	_
13	že	že	SCONJ	J,-------------	_	20	mark	20:mark	_
14	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	20	cop	20:cop	_
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	16:case	LId=v-1
16	okamžiku	okamžik	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	20	obl	20:obl:v:loc	_
17	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	18	det	18:det	_
18	účtování	účtování	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	16	nmod	16:nmod:gen	_
19	současně	současně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	20	advmod	20:advmod	_
20	známy	známý	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	11	acl	11:acl:že	LId=známý-2
21	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	22	det	22:det	_
22	účel	účel	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	20	nsubj	20:nsubj	_
23	(	(	PUNCT	Z:-------------	_	25	punct	25:punct	SpaceAfter=No
24	věcné	věcný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	25	amod	25:amod	_
25	vymezení	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	22	appos	22:appos	SpaceAfter=No
26	)	)	PUNCT	Z:-------------	_	25	punct	25:punct	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	28	punct	28:punct	_
28	částka	částka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	22	conj	20:nsubj|22:conj	_
29	a	a	CCONJ	J^-------------	_	30	cc	30:cc	LId=a-1
30	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	22	conj	20:nsubj|22:conj|34:obl:arg:gen	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	34	punct	34:punct	_
32	kterých	který	DET	P4XP2----------	Case=Gen|Number=Plur|PronType=Int,Rel	34	obl:arg	30:ref	_
33	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	34	expl:pv	34:expl:pv	_
34	týkají	týkat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	30	acl:relcl	30:acl:relcl	SpaceAfter=No
35	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


