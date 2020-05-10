---
layout: base
title:  'Statistics of compound:prt in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-compound.html">compound</a></tt>.

19 nodes (0%) are attached to their parents as `compound:prt`.

19 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05263157894737.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (7; 37% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (6; 32% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (4; 21% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 compound:prt	color:blue
1	Chuir	cuir	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	litir	litir	NOUN	Noun	Gender=Fem|Number=Sing	2	obj	_	_
4	isteach	isteach	ADV	Dir	_	1	advmod	_	_
5	chuig	chuig	ADP	Simp	_	7	case	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	Ardfheis	feis	NOUN	Noun	Definite=Def|Gender=Fem|Number=Sing	1	obl	_	_
8	á	do	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	case	_	_
9	rá	rá	NOUN	Noun	VerbForm=Inf	1	xcomp	_	_
10	go	go	PART	Vb	PartType=Cmpl	11	mark:prt	_	_
11	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	9	ccomp	_	_
12	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
13	ag	ag	ADP	Simp	_	14	case	_	_
14	éirí	éirí	NOUN	Noun	VerbForm=Vnoun	11	xcomp	_	_
15	as	as	ADP	Simp	_	14	compound:prt	_	_
16	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	17	nmod:poss	_	_
17	phost	post	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	14	obl	_	_
18	'	'	PUNCT	Punct	_	20	punct	_	SpaceAfter=No
19	mar	mar	ADP	Simp	_	20	case	_	_
20	gheall	geall	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	17	obl	_	_
21	ar	ar	ADP	Simp	_	23	case	_	_
22	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	23	nmod:poss	_	_
23	shláinte	sláinte	NOUN	Noun	Form=Len|Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
24	'	'	PUNCT	Punct	_	20	punct	_	_
25	agus	agus	CCONJ	Coord	_	27	cc	_	_
26	d'	do	PART	Vb	PartType=Vb	27	mark:prt	_	SpaceAfter=No
27	imigh	imigh	VERB	VI	Form=Len|Mood=Ind|Tense=Past	1	conj	_	_
28	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	27	nsubj	_	_
29	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	27	obl:prep	_	_
30	go	go	ADP	Simp	_	31	case	_	_
31	Baile	Baile	PROPN	Noun	Gender=Masc|Number=Sing	27	obl	_	_
32	Átha	Átha	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	31	flat	_	_
33	Cliath	Cliath	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	32	flat	_	SpaceAfter=No
34	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 compound:prt	color:blue
1	Labhair	labhair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	liom	le	ADP	Prep	Number=Sing|Person=1	1	obl:prep	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	bealaí	bealach	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	1	obl	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	6	acl:relcl	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	údaráis	údarás	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	8	obl	_	_
11	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	scoile	scoil	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	_
13	brú	brú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	15	obj	_	_
14	a	a	PART	Inf	PartType=Inf	15	mark	_	_
15	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
16	ar	ar	ADP	Simp	_	18	case	_	_
17	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	18	det	_	_
18	daltaí	dalta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	15	obl	_	_
19	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	20	nmod:poss	_	_
20	gcuid	cuid	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	23	obj	_	_
21	teangacha	teanga	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Strong|Number=Plur	20	nmod	_	_
22	a	a	PART	Inf	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	Noun	Form=Len|VerbForm=Inf	15	xcomp	_	_
24	suas	suas	ADV	Dir	_	23	compound:prt	_	SpaceAfter=No
25	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	spriocdháta	spriocdháta	NOUN	Noun	Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
4	seo	seo	DET	Det	PronType=Dem	3	det	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	leanas	lean	VERB	VTI	Mood=Ind|PronType=Rel|Tense=Pres	3	acl:relcl	_	_
7	leagtha	leagtha	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
8	amach	amach	ADV	Dir	_	7	compound:prt	_	_
9	d'	do	ADP	Simp	_	10	case	_	SpaceAfter=No
10	iarratais	iarratas	NOUN	Noun	Gender=Masc|Number=Plur	1	obl	_	_
11	ar	ar	ADP	Simp	_	12	case	_	_
12	chabhair	cabhair	NOUN	Noun	Form=Len|Gender=Fem|Number=Sing	10	nmod	_	_
13	dheontais	deontas	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	12	nmod	_	SpaceAfter=No
14	:	:	PUNCT	Punct	_	15	punct	_	_
15	16	16	NUM	Num	_	3	appos	_	_
16	Eanáir	Eanáir	PROPN	Noun	Gender=Masc|Number=Sing	15	flat	_	_
17	2003	2003	NUM	Num	_	15	flat	_	SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	_

~~~


