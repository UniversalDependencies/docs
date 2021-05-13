---
layout: base
title:  'Statistics of goeswith in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 33% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Bhfuil	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	cop-on	cop-on	NOUN	Noun	Case=NomAcc|Foreign=Yes|Number=Sing	1	nsubj	_	_
3	ar	ar	ADP	Simp	_	2	nmod	_	_
4	bith	bith	NOUN	Subst	Case=NomAcc|Gender=Masc|Number=Sing	3	fixed	_	_
5	a'	ag	ADP	Simp	_	1	obl:prep	_	_
6	t	t	NOUN	Item	_	5	goeswith	_	SpaceAfter=No
7	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	Beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
2	feachtas	feachtas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	margaíochta	margaíocht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	ar	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	fiú	fiú	NOUN	Subst	Case=NomAcc|Number=Sing	2	acl:relcl	_	_
6	E50	E50	NOUN	Abr	Abbr=Yes	5	nmod	_	_
7	,000	,000	NUM	Num	_	6	goeswith	_	_
8	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	tionlacan	tionlacan	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	_
11	sheoladh	seoladh	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	10	obj	_	_
12	an	an	DET	Art	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	eagráin	eagrán	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
14	thablóidigh	táblóideach	ADJ	Adj	Case=Gen|Form=Len|Gender=Masc|Number=Sing|Typo=Yes	13	amod	_	_
15	nó	nó	CCONJ	Coord	_	16	cc	_	_
16	beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	1	conj	_	_
17	fógraí	fógra	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	16	nsubj	_	_
18	teilifíse	teilifís	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	_
19	agus	agus	CCONJ	Coord	_	20	cc	_	_
20	raidió	raidió	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	18	conj	_	_
21	á	do	ADP	Poss	Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	case	_	_
22	gcraoladh	craoladh	NOUN	Noun	Definite=Def|Form=Ecl|VerbForm=Inf	16	xcomp	_	_
23	ar	ar	ADP	Simp	_	24	case	_	_
24	TG4	TG4	PROPN	Abr	Abbr=Yes	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	Punct	_	26	punct	_	_
26	Raidió	raidió	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	24	conj	_	NamedEntity=Yes
27	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	NamedEntity=Yes
28	Life	Life	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem	26	nmod	_	NamedEntity=Yes
29	agus	agus	CCONJ	Coord	_	30	cc	_	_
30	Raidió	raidió	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	24	conj	_	NamedEntity=Yes
31	Fáilte	fáilte	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	30	nmod	_	NamedEntity=Yes|SpaceAfter=No
32	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	imir	imir	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
3	do	do	ADP	Simp	_	4	case	_	_
4	Londain	Londain	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	_
5	i	i	ADP	Simp	_	6	case	_	_
6	gCraobh-	craobh	PROPN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	2	obl	_	NamedEntity=Yes
7	Chluichí	cluiche	PROPN	Noun	Definite=Def|Form=Len|Gender=Masc|Number=Plur	6	goeswith	_	NamedEntity=Yes
8	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	NamedEntity=Yes
9	hÉireann	Éire	PROPN	Noun	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	6	nmod	_	NamedEntity=Yes
10	1900	1900	NUM	Num	_	6	flat	_	NamedEntity=Yes|SpaceAfter=No
11	,	,	PUNCT	Punct	_	12	punct	_	_
12	1901	1901	NUM	Num	_	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	Punct	_	14	punct	_	_
14	1903	1903	NUM	Num	_	10	conj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


