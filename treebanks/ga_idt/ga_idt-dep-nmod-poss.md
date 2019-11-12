---
layout: base
title:  'Statistics of nmod:poss in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-nmod.html">nmod</a></tt>.

372 nodes (1%) are attached to their parents as `nmod:poss`.

370 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0752688172043.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (357; 96% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (8; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Ar	ar	ADP	Simp	_	0	root	_	_
2	dhá	dó	NUM	Num	NumType=Card	3	nummod	_	_
3	chúis	cúis	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	nmod	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	a	a	PART	Inf	PartType=Inf	6	nmod:poss	_	_
6	laghad	laghad	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


