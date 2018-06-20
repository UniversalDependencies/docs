---
layout: base
title:  'Statistics of acl in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `acl`

This relation is universal.

573 nodes (2%) are attached to their parents as `acl`.

573 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.64048865619546.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (414; 72% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (72; 13% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (63; 11% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (14; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	9:obl	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	že	že	SCONJ	J,-------------	_	6	mark	6:mark	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	7:obj	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	6:csubj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	9:obl	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	6	punct	6:punct	_
2	Účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	zápisy	zápis	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	6	nsubj	6:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	účetní	účetní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	LId=účetní-1
6	záznamy	záznam	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
8	jejichž	jenž	DET	P1XXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Rel	9	det	9:det	_
9	obsah	obsah	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	11	nsubj	11:nsubj	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	určen	určený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	6	acl	6:acl	_
12	ustanoveními	ustanovení	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos	11	obj	11:obj	_
13	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	14	det	14:det	_
14	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	nmod	12:nmod	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	18	punct	18:punct	_
16	která	který	DET	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	18	nsubj	18:nsubj	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	18:expl:pv	_
18	týkají	týkat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	12:acl	_
19	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	20:amod	LId=účetní-1
20	knih	kniha	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	18	obj	18:obj	SpaceAfter=No
21	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Účetním	účetní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:agent	4:obl:agent	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	data	datum	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	4	nsubj:pass	4:nsubj:pass	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	která	který	DET	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	9	nsubj	9:nsubj	_
8	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	5:acl	_
10	veškerých	veškerý	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	11	nmod	11:nmod	_
11	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	9:nmod	_
12	týkajících	týkající	ADJ	AGFP2-----A----	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	11:amod	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	12:expl:pv	_
14	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	obj	12:obj	_
15	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	14	nmod	14:nmod	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


