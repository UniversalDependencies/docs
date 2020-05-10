---
layout: base
title:  'Statistics of nmod:poss in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-nmod.html">nmod</a></tt>.

624 nodes (1%) are attached to their parents as `nmod:poss`.

622 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05608974358974.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (604; 97% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (11; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nmod:poss	color:blue
1	Cé	cé	SCONJ	Subord	_	3	mark	_	_
2	nár	nár	PART	Vb	PartType=Cmpl|Tense=Past	3	mark:prt	_	_
3	dhúirt	abair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	6	advcl	_	_
4	tú	tú	PRON	Pers	Number=Sing|Person=2	3	nsubj	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	obj	_	_
6	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
7	'	'	PUNCT	Punct	_	8	punct	_	SpaceAfter=No
8	fhios	fios	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	6	nsubj	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	_
10	gur	gur	PART	Vb	PartType=Vb|Tense=Past	11	mark:prt	_	_
11	thuig	tuig	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	6	ccomp	_	_
12	tú	tú	PRON	Pers	Number=Sing|Person=2	11	nsubj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	11	obj	_	_
14	i	i	ADP	Simp	_	16	case	_	_
15	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	16	nmod:poss	_	_
16	chroí	croí	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Seasaim	seas	VERB	VTI	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	balla	balla	NOUN	Noun	Gender=Masc|Number=Sing	1	obl	_	_
4	trasna	trasna	PART	Inf	PartType=Inf	3	amod	_	_
5	uathu	ó	ADP	Prep	Number=Plur|Person=3	1	obl:prep	_	_
6	dá	do	ADP	Poss	Number=Plur|Person=3|Poss=Yes	7	nmod:poss	_	_
7	bhféachaint	féachaint	NOUN	Noun	Form=Ecl|VerbForm=Inf	1	obl	_	_
8	nóiméad	nóiméad	NOUN	Noun	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Bricfeasta	bricfeasta	NOUN	Noun	Gender=Masc|Number=Sing	0	root	_	_
2	ag	ag	ADP	Simp	_	4	case	_	_
3	a	a	PART	Nm	PartType=Num	4	nmod:poss	_	_
4	leath	leath	NOUN	Noun	Gender=Fem|Number=Sing	1	obl:tmod	_	_
5	i	i	ADP	Cmpd	PrepForm=Cmpd	8	case	_	_
6	ndiaidh	ndiaidh	ADP	Cmpd	PrepForm=Cmpd	5	fixed	_	_
7	a	a	PART	Nm	PartType=Num	8	mark:prt	_	_
8	sé	sé	NUM	Num	NumType=Card	4	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	agus	agus	CCONJ	Coord	_	11	mark	_	_
11	muid	muid	PRON	Pers	Number=Plur|Person=1	1	advcl	_	_
12	ag	ag	ADP	Simp	_	13	case	_	_
13	buaileadh	buail	NOUN	Noun	VerbForm=Vnoun	11	xcomp	_	_
14	bothair	bothair	NOUN	Noun	Gender=Fem|Number=Sing	13	obj	_	_
15	ag	ag	ADP	Simp	_	17	case	_	_
16	a	a	PART	Nm	PartType=Num	17	mark:prt	_	_
17	seacht	seacht	NUM	Num	NumType=Card	13	obl:tmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	_

~~~


