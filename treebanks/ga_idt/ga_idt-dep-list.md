---
layout: base
title:  'Statistics of list in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `list`

This relation is universal.

111 nodes (0%) are attached to their parents as `list`.

63 instances of `list` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.027027027027.

The following 14 pairs of parts of speech are connected with `list`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (37; 33% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (34; 31% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (15; 14% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (3; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 list	color:blue
1	(3)	(3)	NUM	Item	_	3	list	_	_
2	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
3	saoránach	saoránach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
4	Éireannach	Éireannach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	3	amod	_	_
5	óna	ó	ADP	Poss	Poss=Yes	6	case	_	_
6	bhreith	breith	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	3	nmod	_	_
7	no	nó	CCONJ	Coord	_	9	cc	_	_
8	óna	ó	ADP	Poss	Poss=Yes	9	case	_	_
9	breith	breith	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	6	conj	_	_
10	duine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	nsubj	_	_
11	a	a	PART	Vb	PartType=Vb|PronType=Rel	12	obj	_	_
12	bheirtear	beir	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres|Voice=Auto	10	acl:relcl	_	_
13	in	i	ADP	Simp	_	14	case	_	_
14	oileán	oileán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	obl	_	_
15	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	hÉireann	Éire	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	nmod	_	_
17	mura	mura	SCONJ	Subord	_	18	mark	_	_
18	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	3	advcl	_	_
19	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	18	nsubj	_	_
20	nó	nó	CCONJ	Coord	_	21	cc	_	_
21	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	19	conj	_	_
22	i	i	ADP	Simp	_	29	case	_	_
23	dteideal	teideal	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	29	obj	_	_
24	saoránacht	saoránacht	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	23	nmod	_	_
25	aon	aon	DET	Det	PronType=Ind	26	det	_	_
26	tíre	tír	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
27	eile	eile	DET	Det	PronType=Dem	26	det	_	_
28	a	a	PART	Inf	PartType=Inf	29	mark	_	_
29	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	18	xcomp	_	_
30	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	29	obl:prep	_	_
31	nó	nó	CCONJ	Coord	_	32	cc	_	_
32	aici	ag	ADP	Prep	Gender=Fem|Number=Sing|Person=3	30	conj	_	SpaceAfter=No
33	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 list	color:blue
1	(f)	(f)	NUM	Item	_	2	list	_	_
2	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	a	a	PART	Nm	PartType=Num	2	mark:prt	_	_
5	dó	dó	NUM	Num	NumType=Card	8	nummod	_	_
6	dhéag	déag	NOUN	Subst	Form=Len|Number=Sing	5	compound	_	_
7	a	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	chlog	clog	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 list	color:blue
1	Gearmándais	Gearmándais	PROPN	Noun	Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	.	_	3	punct	_	_
3	Gearmáinis	Gearmáinis	PROPN	Noun	Gender=Fem|Number=Sing	1	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	Ollainnis	ainnis	PROPN	Noun	Gender=Fem|Number=Sing	3	list	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	7	punct	_	_
7	Béarla	béarla	PROPN	Noun	Gender=Masc|Number=Sing	3	list	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	Lochlainnis	Lochlainnis	PROPN	Noun	Gender=Fem|Number=Sing	3	list	_	SpaceAfter=No
10	)	)	PUNCT	Punct	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


