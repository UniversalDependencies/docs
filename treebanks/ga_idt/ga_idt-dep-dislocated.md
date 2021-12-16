---
layout: base
title:  'Statistics of dislocated in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `dislocated`

This relation is universal.

55 nodes (0%) are attached to their parents as `dislocated`.

48 instances of `dislocated` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.4727272727273.

The following 13 pairs of parts of speech are connected with `dislocated`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (25; 45% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (11; 20% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Vnoun	5	dislocated	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 dislocated	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	seacht	seacht	NUM	Num	NumType=Card	4	nummod	_	_
3	déag	déag	NOUN	Subst	Case=Nom|Number=Sing	2	nmod	_	_
4	bainisteoir	bainisteoir	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
5	cúnta	cúnta	ADJ	Adj	Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
6	maoinithe	maoinithe	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
7	faoin	faoi	ADP	Art	Number=Sing|PronType=Art	8	case	_	_
8	scéim	scéim	NOUN	Noun	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
9	seo	seo	DET	Det	PronType=Dem	8	det	_	_
10	ag	ag	ADP	Simp	_	11	case	_	_
11	deireadh	deireadh	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	obl:tmod	_	_
12	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	bliana	bliain	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Punct	_	15	punct	_	_
15	cúigear	cúigear	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	4	dislocated	_	_
16	acu	ag	ADP	Prep	Number=Plur|Person=3	15	obl:prep	_	_
17	fostaithe	fostaithe	ADJ	Adj	VerbForm=Part	15	xcomp:pred	_	_
18	le	le	ADP	Simp	_	19	case	_	_
19	comharchumainn	comharchumann	NOUN	Noun	Case=Nom|Gender=Masc|Number=Plur	17	obl	_	_
20	oileánda	oileánda	ADJ	Adj	Case=Nom|Gender=Masc|NounType=Slender|Number=Plur	19	amod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 dislocated	color:blue
1	Aon	aon	DET	Det	PronType=Ind	2	det	_	_
2	duine	duine	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	Vb	Form=Indirect|PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	ndéanfaidh	déan	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Fut	2	acl:relcl	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	Chúirt	cúirt	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	4	nsubj	_	_
7	Ghinearálta	ginearálta	ADJ	Adj	Case=Nom|Form=Len|Gender=Fem|Number=Sing	6	amod	_	_
8	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	nmod:poss	_	_
9	iarratas	iarratas	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	obj	_	_
10	idiragartha	idiragairt	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
11	a	a	PART	Inf	PartType=Inf	12	mark	_	_
12	dhíbhe	díbhe	NOUN	Noun	Form=Len|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	Punct	_	14	punct	_	_
14	féadfaidh	féad	VERB	VTI	Mood=Ind|Tense=Fut	2	dislocated	_	_
15	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	14	nsubj	_	_
16	achomharc	achomharc	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	18	obj	_	_
17	a	a	PART	Inf	PartType=Inf	18	mark	_	_
18	dhéanamh	déanamh	NOUN	Noun	Form=Len|VerbForm=Inf	14	xcomp	_	_
19	chun	chun	ADP	Simp	_	21	case	_	_
20	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Cúirte	cúirt	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	obl	_	NamedEntity=Yes
22	Breithiúnais	breithiúnas	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	NamedEntity=Yes
23	laistigh	laistigh	ADV	Loc	_	18	advmod	_	_
24	de	de	ADP	Simp	_	26	case	_	_
25	dhá	dó	NUM	Num	Form=Len|NumType=Card	26	nummod	_	_
26	sheachtain	seachtain	NOUN	Noun	Case=Nom|Form=Len|Gender=Fem|Number=Sing	18	obl:tmod	_	_
27	tar	tar	ADP	Cmpd	PrepForm=Cmpd	30	case	_	_
28	éis	éis	NOUN	Cmpd	Case=Nom|Number=Sing|PrepForm=Cmpd	27	fixed	_	_
29	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	30	det	_	_
30	bhreith	breith	NOUN	Noun	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	14	obl	_	_
31	ag	ag	ADP	Simp	_	32	case	_	_
32	díbhe	díbhe	NOUN	Noun	VerbForm=Vnoun	14	xcomp	_	_
33	an	an	DET	Art	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	iarratais	iarratas	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	32	obj	_	_
35	a	a	PART	Inf	PartType=Inf	36	mark	_	_
36	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	32	xcomp	_	_
37	curtha	curtha	ADJ	Adj	VerbForm=Part	36	xcomp:pred	_	_
38	in	i	ADP	Simp	_	39	case	_	_
39	iúl	iúl	NOUN	Noun	Case=Nom|Gender=Masc|Number=Sing	37	obl	_	SpaceAfter=No
40	.	.	PUNCT	.	_	2	punct	_	_

~~~


