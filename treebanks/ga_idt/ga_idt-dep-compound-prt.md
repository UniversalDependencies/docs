---
layout: base
title:  'Statistics of compound:prt in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-compound.html">compound</a></tt>.

14 nodes (0%) are attached to their parents as `compound:prt`.

14 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21428571428571.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (4; 29% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (3; 21% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (3; 21% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 14% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Bean	Bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	nmod	_	_
2	Uasal	uasal	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
3	:	:	PUNCT	Punct	_	4	punct	_	_
4	Cén	cé	DET	Det	Number=Sing|PronType=Int	5	nsubj	_	_
5	dul	dul	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
6	as	as	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	compound:prt	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	5	acl:relcl	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	8	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	Ribíneach	ribíneach	ADJ	Adj	_	0	root	_	_
2	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
3	líneach	líneach	ADJ	Adj	_	6	amod	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
5	:	:	PUNCT	Punct	_	6	punct	_	_
6	tithe	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	1	parataxis	_	_
7	sráidbhaile	sráidbhaile	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	leagtha	leagtha	ADJ	Adj	VerbForm=Part	6	xcomp	_	_
9	amach	amach	ADV	Dir	_	8	compound:prt	_	_
10	ceann	ceann	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nmod	_	_
11	i	i	ADP	Cmpd	PrepForm=Cmpd	14	case	_	_
12	ndiaidh	ndiaidh	ADP	Cmpd	_	11	fixed	_	_
13	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	14	nmod:poss	_	_
14	chéile	céile	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nmod	_	_
15	ina	i	ADP	Poss	Poss=Yes	16	case	_	_
16	líne	líne	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	8	nmod	_	_
17	fhada	fada	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	16	amod	_	_
18	chaol	caol	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	16	amod	_	SpaceAfter=No
19	,	,	PUNCT	Punct	_	23	punct	_	_
20	ar	ar	ADP	Cmpd	PrepForm=Cmpd	23	case	_	_
21	feadh	feadh	ADP	Cmpd	_	20	fixed	_	_
22	an	an	DET	Art	PronType=Art	23	det	_	_
23	bhóthair	bóthar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
24	,	,	PUNCT	Punct	_	28	punct	_	_
25	ar	ar	ADP	Cmpd	PrepForm=Cmpd	28	case	_	_
26	feadh	feadh	ADP	Cmpd	_	25	fixed	_	_
27	an	an	DET	Art	PronType=Art	28	det	_	_
28	chósta	cósta	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	23	conj	_	_
29	nó	nó	CCONJ	Coord	_	31	cc	_	_
30	ag	ag	ADP	Simp	_	31	case	_	_
31	bun	bun	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	23	conj	_	_
32	cnoic	cnoc	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	31	nmod	_	_
33	aird	ard	ADJ	Adj	Case=Gen|Gender=Masc|Number=Sing	32	amod	_	SpaceAfter=No
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
18	daltaí	dalta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	15	nmod	_	_
19	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	20	nmod:poss	_	_
20	gcuid	cuid	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	23	obj	_	_
21	teangacha	teanga	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Strong|Number=Plur	20	nmod	_	_
22	a	a	PART	Inf	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	Noun	Form=Len|VerbForm=Inf	15	xcomp	_	_
24	suas	suas	ADV	Dir	_	23	compound:prt	_	SpaceAfter=No
25	.	.	PUNCT	.	_	1	punct	_	_

~~~


