---
layout: base
title:  'Statistics of compound in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ga_idt-dep-compound-prt.html">compound:prt</a></tt>.

135 nodes (0%) are attached to their parents as `compound`.

135 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11111111111111.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (128; 95% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	éirigh	éirigh	VERB	VI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	sa	i	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	scrúdú	scrúdú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obl	_	_
5	leis	le	ADP	Simp	_	7	case	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	mac	mac	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	obl	_	_
8	léinn	léann	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	compound	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	(f)	(f)	NUM	Item	_	2	nummod	_	_
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	0	root	_	_
2	tithe	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	1	nsubj	_	_
3	aitheantais	aitheantas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	compound	_	_
4	acu	ag	ADP	Prep	Number=Plur|Person=3	2	compound	_	_
5	ag	ag	ADP	Simp	_	6	case	_	_
6	gabháil	gabháil	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	_
7	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	teacht	teacht	NOUN	Noun	VerbForm=Vnoun	5	conj	_	_
11	ar	ar	ADV	Dir	_	10	advmod	_	_
12	ais	ais	ADV	Dir	_	11	fixed	_	_
13	agus	agus	CCONJ	Coord	_	15	cc	_	_
14	ag	ag	ADP	Simp	_	15	case	_	_
15	ceann	ceann	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	conj	_	_
16	scríbe	scríob	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	15	compound	_	SpaceAfter=No
17	.	.	PUNCT	.	_	1	punct	_	_

~~~


