---
layout: base
title:  'Statistics of obl:arg in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_cltt-dep-obl-agent.html">obl:agent</a></tt>.

333 nodes (1%) are attached to their parents as `obl:arg`.

240 instances of `obl:arg` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27927927927928.

The following 10 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (183; 55% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (97; 29% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (13; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (12; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (10; 3% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:arg	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj|12:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	_
4	buď	buď	CCONJ	J^-------------	_	5	cc	5:cc	_
5	shoduje	shodovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	8:case	LId=s-1
7	kalendářním	kalendářní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl:arg	5:obl:arg	_
9	nebo	nebo	CCONJ	J^-------------	_	12	cc	12:cc	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	hospodářským	hospodářský	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	conj	0:root|5:conj	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	Vymezení	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
2	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	1:nmod	_
3	souvisejících	související	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	2:amod	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	5:case	LId=s-1
5	pořízením	pořízení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg	_
6	cenných	cenný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	papírů	papír	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
9	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	conj	5:nmod|7:conj	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 obl:arg	color:blue
1	Tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	dokumentaci	dokumentace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	3:obj	_
3	uschovávají	uschovávat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	3:obl	_
8	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
10	§_31_odst._2	§_31_odst._2	X	X@-------------	_	8	advmod	8:advmod	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	LId=podle-2
12	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	obl	3:obl	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	jakou	jaký	DET	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	15	det	15:det	_
15	funkci	funkce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	16	obj	16:obj	_
16	plní	plnit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	12:acl	_
17	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	18:case	LId=při-1
18	vedení	vedení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	16	obl	16:obl	_
19	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	18	nmod	18:nmod	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
21	nejde-li	nejde-li	X	X@-------------	_	3	advmod	3:advmod	_
22	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	23:case	LId=o-1
23	případ	případ	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	21	obl:arg	21:obl:arg	_
24	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	25	case	25:case	LId=podle-2
25	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	23:nmod	_
26	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	25	nummod	25:nummod	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


