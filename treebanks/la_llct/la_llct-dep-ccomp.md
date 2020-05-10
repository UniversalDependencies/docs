---
layout: base
title:  'Statistics of ccomp in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `ccomp`

This relation is universal.

1471 nodes (1%) are attached to their parents as `ccomp`.

944 instances of `ccomp` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.1631543167913.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1432; 97% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
2	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	3	case	_	_
3	confirmationem	confirmatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	_
4	Andream	Andreas	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	6	nsubj	_	_
5	notarium	notarius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
6	scribere	scribo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	7	ccomp	_	_
7	rogavi	rogo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 ccomp	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	nsubj	_	_
4	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	dedi	do	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	eorum	is	PRON	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Dem,Prs	5	obl:arg	_	_
7	vuadia	wadia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
8	paratus	paro	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	ccomp	_	_
9	esset	sum	AUX	v|v|-|-|p|n|a|-|-|-	Tense=Pres|VerbForm=Inf|Voice=Act	8	aux:pass	_	_
10	iudicio	iudicium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	13	obj	_	_
11	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
12	se	se	PRON	p|p|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	13	obl	_	_
13	abendum	habeo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	8	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 29 ccomp	color:blue
1	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	2	case	_	_
2	hec	hic	DET	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	16	obl	_	_
3	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	Hoschisus	Hoschisus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
7	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	8	cc	_	_
8	missus	missus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	4	punct	_	_
10	iusta	iuxta	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
11	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	_
12	iussionem	iussio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	16	obl	_	_
13	domni	domnus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
14	imperatoris	imperator	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
15	cepi	capio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	exigere	exigo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	15	xcomp	_	_
17	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
18	demandare	demando	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	16	conj	_	_
19	ipsos	ipse	DET	p|p|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	20	det	_	_
20	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	33	nsubj	_	_
21	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	23	nsubj	_	_
22	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	23	obj	_	_
23	scirent	scio	VERB	v|v|3|p|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	20	acl:relcl	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	29	punct	_	_
25	quomodo	quomodo	SCONJ	d|d|-|-|-|-|-|-|-|-	_	29	mark	_	_
26	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	27	det	_	_
27	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	29	nsubj	_	_
28	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	_	29	advmod	_	_
29	dixerat	dico	VERB	v|v|3|s|l|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	22	ccomp	_	_
30	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	33	mark	_	_
31	suis	suus	DET	a|a|3|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	32	nmod	_	_
32	presentia	praesentia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	33	obl	_	_
33	venire	uenio	VERB	v|v|3|p|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	16	ccomp	_	SpaceAfter=No
34	.	.	PUNCT	Punc	_	15	punct	_	_

~~~


