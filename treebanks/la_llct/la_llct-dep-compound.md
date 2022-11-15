---
layout: base
title:  'Statistics of compound in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `compound`

This relation is universal.

61 nodes (0%) are attached to their parents as `compound`.

57 instances of `compound` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0327868852459.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (59; 97% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 compound	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	2	cc	_	_
2	recepi	recipio	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	te	tu	PRON	p|p|2|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl	_	_
5	pretium	pretium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
6	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
7	suprascriptas	suprascriptus	DET	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	8	det	_	_
8	res	res	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	2	obl	_	_
9	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	argento	argentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	12	punct	_	_
12	soledos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	2	dislocated:obj	_	_
13	numero	numerus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	12	nmod	_	_
14	viginti	uiginti	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	13	nummod	_	_
15	quinque	quinque	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	14	compound	_	_
16	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
17	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound	color:blue
1	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	14	advmod	_	_
2	predicte	praedictus	DET	a|a|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	3	nmod	_	_
3	testimonia	testimonium	NOUN	n|n|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur	13	dislocated:obj	_	_
4	separatim	separatim	ADV	d|d|-|-|-|-|-|-|-|-	_	13	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	4	punct	_	_
6	diligenter	diligenter	ADV	d|d|-|-|-|-|-|-|-|-	_	13	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	unum	unus	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	13	obl	_	_
9	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	unum	unus	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	8	compound	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	8	punct	_	_
12	eos	is	PRON	p|p|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	obj	_	_
13	inquirere	inquiro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	14	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	cepimus	coepi	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
15	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


