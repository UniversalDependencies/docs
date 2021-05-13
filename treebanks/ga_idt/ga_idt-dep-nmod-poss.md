---
layout: base
title:  'Statistics of nmod:poss in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-nmod.html">nmod</a></tt>.

1072 nodes (1%) are attached to their parents as `nmod:poss`.

1071 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00839552238806.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1059; 99% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nmod:poss	color:blue
1	Cé	cé	SCONJ	Subord	_	3	mark	_	_
2	nár	nár	PART	Vb	PartType=Cmpl|Polarity=Neg|Tense=Past	3	mark:prt	_	_
3	dhúirt	abair	VERB	VTI	Form=Len|Mood=Ind|Polarity=Neg|Tense=Past	6	advcl	_	_
4	tú	tú	PRON	Pers	Number=Sing|Person=2	3	nsubj	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	obj	_	_
6	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
7	'	'	PUNCT	Punct	_	8	punct	_	SpaceAfter=No
8	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	6	nsubj	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	_
10	gur	gur	PART	Vb	PartType=Vb|Tense=Past	11	mark:prt	_	_
11	thuig	tuig	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	6	ccomp	_	_
12	tú	tú	PRON	Pers	Number=Sing|Person=2	11	nsubj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	11	obj	_	_
14	i	i	ADP	Simp	_	16	case	_	_
15	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	16	nmod:poss	_	_
16	chroí	croí	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Bricfeasta	bricfeasta	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	ag	ag	ADP	Simp	_	4	case	_	_
3	a	a	PART	Nm	PartType=Num	4	nmod:poss	_	_
4	leath	leath	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl:tmod	_	_
5	i	i	ADP	Cmpd	PrepForm=Cmpd	8	case	_	_
6	ndiaidh	diaidh	NOUN	Cmpd	Case=NomAcc|Form=Ecl|Number=Sing|PrepForm=Cmpd	5	fixed	_	_
7	a	a	PART	Nm	PartType=Num	8	mark:prt	_	_
8	sé	sé	NUM	Num	NumType=Card	4	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	agus	agus	CCONJ	Coord	_	11	mark	_	_
11	muid	muid	PRON	Pers	Number=Plur|Person=1	1	advcl	_	_
12	ag	ag	ADP	Simp	_	13	case	_	_
13	buaileadh	buaileadh	NOUN	Noun	VerbForm=Vnoun	11	xcomp	_	_
14	bothair	bóthar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing|Typo=Yes	13	obj	_	_
15	ag	ag	ADP	Simp	_	17	case	_	_
16	a	a	PART	Nm	PartType=Num	17	mark:prt	_	_
17	seacht	seacht	NUM	Num	NumType=Card	13	obl:tmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Toghfaidh	togh	VERB	VTI	Mood=Ind|Tense=Fut	0	root	_	_
2	siad	siad	PRON	Pers	Number=Plur|Person=3	1	nsubj	_	_
3	Uachtarán	uachtarán	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
4	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Cúirte	cúirt	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	_
6	Iniúchóirí	iniúchóir	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	5	nmod	_	_
7	as	as	ADP	Simp	_	9	case	_	_
8	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	9	nmod:poss	_	_
9	Hon	Hon	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
10	féin	féin	PRON	Ref	Reflex=Yes	9	nmod	_	_
11	go	go	ADP	Cmpd	PrepForm=Cmpd	13	case	_	_
12	ceann	ceann	NOUN	Cmpd	Case=NomAcc|Gender=Masc|Number=Sing|PrepForm=Cmpd	11	fixed	_	_
13	téarma	téarma	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	obl	_	_
14	trí	trí	NUM	Num	NumType=Card	15	nummod	_	_
15	bliana	bliain	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	1	punct	_	_

~~~


