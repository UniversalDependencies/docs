---
layout: base
title:  'Statistics of flat in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `flat`

This relation is universal.

2530 nodes (1%) are attached to their parents as `flat`.

2530 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51185770750988.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1734; 69% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (618; 24% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (136; 5% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (40; 2% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Andreas	Andreas	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	flat	_	_
5	clerico	clericus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
6	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
7	hunc	hic	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	libellum	libellus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	9	nsubj:pass	_	_
9	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	10	ccomp	_	_
10	rogavit	rogo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat	color:blue
1	hec	hic	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	divisio	diuisio	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
3	facta	facio	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
5	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	anno	annus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	3	obl	_	_
7	domni	domnus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	nostri	noster	DET	a|a|1|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
9	Hludovuic	Hludowicus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	flat	_	_
10	clementissimi	clemens	ADJ	a|a|-|s|-|-|-|m|g|s	Case=Gen|Degree=Abs|Gender=Masc|Number=Sing	11	amod	_	_
11	imperatoris	imperator	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
12	nono	nonus	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|NumType=Ord	6	amod	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	14	punct	_	_
14	tertio	tertius	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|NumType=Ord	3	obl	_	_
15	kalendas	kalendae	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	14	nmod	_	_
16	iunias	iunius	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	15	amod	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	18	punct	_	_
18	indictione	indictio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	3	obl	_	_
19	quinta	quintus	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Ord	18	amod	_	_
20	decima	decimus	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Ord	19	flat	_	SpaceAfter=No
21	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat	color:blue
1	predicta	praedictus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	ancilla	ancilla	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	obj	_	_
3	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	filii	filius	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	2	flat	_	_
5	suis	suus	DET	a|a|3|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	_
6	Vuiniberto	Winipertus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	4	conj	_	_
7	clerico	clericus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	6	appos	_	_
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
9	Vuinipaldo	Winipaldus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	6	conj	_	_
10	germani	germanus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	4	appos	_	_
11	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	14	obl:arg	_	_
12	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	comutatione	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	obl	_	_
14	dare	do	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	15	xcomp	_	_
15	videor	uideo	VERB	v|v|1|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	15	punct	_	_

~~~


