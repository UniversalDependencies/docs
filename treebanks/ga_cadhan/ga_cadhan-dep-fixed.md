---
layout: base
title:  'Statistics of fixed in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `fixed`

This relation is universal.

48 nodes (1%) are attached to their parents as `fixed`.

48 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77083333333333.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (31; 65% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (4; 8% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-DET.html">DET</a></tt>-<tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-DET.html">DET</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Ní	ní	PART	_	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	raibh	bí	VERB	_	Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	truaigh	trua	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
4	ar	ar	ADP	_	_	3	nmod	_	_
5	bith	bith	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	fixed	_	_
6	agam	ag	ADP	_	Number=Sing|Person=1	2	xcomp:pred	_	_
7	dhi	de	ADP	_	Form=Len|Gender=Fem|Number=Sing|Person=3	2	obl:prep	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 fixed	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	_
2	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	si	sí	PRON	_	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
4	gan	gan	ADP	_	_	5	case	_	_
5	urlabhra	urlabhra	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obl	_	_
6	gur	gur	PART	_	PartType=Vb|Tense=Past	7	mark:prt	_	_
7	ghlaoidh	glaoigh	VERB	_	Form=Len|Mood=Ind|Tense=Past	2	ccomp	_	_
8	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	coilighe	coileach	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
10	d'	de	ADP	_	PrepForm=Cmpd	12	case	_	SpaceAfter=No
11	eis	éis	NOUN	_	Case=Nom|Number=Sing|PrepForm=Cmpd	10	fixed	_	_
12	meadon	meán	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	obl:tmod	_	_
13	oidhche	oíche	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	16	det	_	_
16	tan	tan	NOUN	_	Case=Nom|Definite=Def|Number=Sing	12	appos	_	_
17	fuair	faigh	VERB	_	Mood=Ind|Tense=Past	16	acl:relcl	_	_
18	sí	sí	PRON	_	Gender=Fem|Number=Sing|Person=3	17	nsubj	_	_
19	a	a	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes	20	nmod:poss	_	_
20	hurlabhra	urlabhra	NOUN	_	Case=Nom|Form=HPref|Gender=Fem|Number=Sing	17	obj	_	SpaceAfter=No
21	;	;	PUNCT	_	_	24	punct	_	_
22	agus	agus	CCONJ	_	_	24	cc	_	_
23	annsin	ansin	ADV	_	_	24	advmod	_	_
24	caill	caill	VERB	_	Mood=Ind|Tense=Past	2	conj	_	_
25	si	sí	PRON	_	Gender=Fem|Number=Sing|Person=3	24	nsubj	_	_
26	luth	lúth	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	24	obj	_	_
27	a	a	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes	28	nmod:poss	_	_
28	coise	cos	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
29	noch	noch	PART	_	Form=Direct|PartType=Vb|PronType=Rel	31	nsubj	_	_
30	do	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	29	fixed	_	_
31	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	28	acl:relcl	_	_
32	chomh	chomh	ADV	_	_	33	advmod	_	_
33	fuar	fuar	ADJ	_	Degree=Pos	31	xcomp:pred	_	_
34	le	le	ADP	_	_	35	case	_	_
35	leac	leac	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	33	obl	_	_
36	oidhre	oighear	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	35	nmod	_	_
37	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Ach	ach	CCONJ	_	_	3	cc	_	_
2	ní	ní	PART	_	PartType=Vb|Polarity=Neg	3	advmod	_	_
3	bhíonn	bí	VERB	_	Aspect=Hab|Form=Len|Mood=Ind|Polarity=Neg|Tense=Pres	0	root	_	_
4	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
5	leis	le	ADP	_	Gender=Masc|Number=Sing|Person=3	3	xcomp:pred	_	_
6	féin	féin	PRON	_	Reflex=Yes	5	nmod	_	_
7	mar	mar	ADP	_	_	3	advmod	_	_
8	sin	sin	PRON	_	PronType=Dem	7	fixed	_	_
9	i	i	ADP	_	_	10	case	_	_
10	gcomhnaidhe	cónaí	NOUN	_	Case=Nom|Form=Ecl|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


