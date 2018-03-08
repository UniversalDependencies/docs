---
layout: base
title:  'Statistics of parataxis in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `parataxis`

This relation is universal.

32 nodes (0%) are attached to their parents as `parataxis`.

31 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.46875.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (16; 50% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 parataxis	color:blue
1	Tháinig	tar	VERB	VI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	mé	mé	PRON	Pers	Number=Sing|Person=1	1	nsubj	_	_
3	ort	ar	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	_
4	agus	agus	SCONJ	Subord	_	5	cc	_	_
5	drúcht	drúcht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	conj	_	_
6	ar	ar	ADP	Simp	_	8	case	_	_
7	d'	do	DET	Det	Number=Sing|Person=2|Poss=Yes	8	nmod:poss	_	SpaceAfter=No
8	aghaidh	aghaidh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	shín	sín	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	1	parataxis	_	_
11	tú	tú	PRON	Pers	Number=Sing|Person=2	10	nsubj	_	_
12	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	13	nmod:poss	_	_
13	lámha	lámh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	10	obj	_	_
14	chugam	chuig	ADP	Prep	Number=Sing|Person=1	10	obl:prep	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	Ní	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	cosúil	cosúil	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	mórán	mórán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	nsubj	_	_
6	le	le	ADP	Cmpd	PrepForm=Cmpd	9	case	_	_
7	cois	cois	ADP	Cmpd	_	6	fixed	_	_
8	dhá	dó	NUM	Num	NumType=Card	9	nummod	_	_
9	scór	scór	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nmod	_	_
10	uilig	uile	DET	Det	_	9	det	_	_
11	acu	ag	ADP	Prep	Number=Plur|Person=3	10	compound	_	_
12	istigh	istigh	ADV	Dir	_	4	xcomp:pred	_	_
13	-	-	PUNCT	Punct	_	14	punct	_	_
14	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	2	parataxis	_	_
15	100	100	NUM	Num	_	14	nsubj	_	_
16	i	i	ADP	Simp	_	17	case	_	_
17	nGaillimh	Gaillimh	PROPN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Bricfeasta	bricfeasta	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	Gaelach	gaelach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	1	amod	_	_
3	sa	i	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	bhialann	bialann	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
5	2.00-6.00	2.00-6.00	NUM	Num	_	4	nummod	_	_
6	in	i	ADP	Simp	_	7	case	_	_
7	BRICRIÚ	BRICRIÚ	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
8	:	:	PUNCT	Punct	_	9	punct	_	_
9	Beidh	bí	VERB	FutInd	Mood=Ind|Tense=Fut	1	parataxis	_	_
10	mé	mé	PRON	Pers	Number=Sing|Person=1	9	nsubj	_	_
11	díreach	díreach	ADJ	Adj	Degree=Pos	9	xcomp:pred	_	_
12	leat	le	ADP	Prep	Number=Sing|Person=2	9	obl:prep	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


