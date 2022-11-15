---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_llct-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_llct-dep-advmod-tmod.html">advmod:tmod</a></tt>.

501 nodes (0%) are attached to their parents as `advmod:lmod`.

305 instances of `advmod:lmod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5748502994012.

The following 5 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (478; 95% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (12; 2% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod:lmod	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	9	advmod:lmod	_	_
2	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	3	case	_	_
3	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	8	obl	_	_
4	duas	duo	NUM	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	5	nummod	_	_
5	cartulas	chartula	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Plur	8	obj	_	_
6	Lopo	lupus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	8	nsubj	_	_
7	notarium	notarius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	6	appos	_	_
8	scribere	scribo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	9	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	rogavimus	rogo	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 31 advmod:lmod	color:blue
1	proinde	proinde	ADV	d|d|-|-|-|-|-|-|-|-	_	24	advmod	_	_
2	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	24	discourse	_	_
3	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	6	det	_	_
4	qui	qui	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	6	det	_	_
5	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	4	fixed	_	_
6	dispensatores	dispensator	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	24	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	secundum	secundum	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
9	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nmod	_	_
10	bonum	bonus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	11	amod	_	_
11	dispositum	dispositum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	24	obl	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	11	punct	_	_
13	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
14	remedio	remedium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	24	obl	_	_
15	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	_
16	suprascripti	suprascriptus	DET	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	_
17	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	18	amod	_	_
18	Gausperti	Gauspertus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
19	presbiteri	presbyter	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	14	punct	_	_
21	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
22	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
23	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	24	obl	_	_
24	offerrimus	offero	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
25	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	24	obl:arg	_	_
26	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	28	cc	_	_
27	tibi	tu	PRON	p|p|2|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=2|PronType=Prs	28	det	_	_
28	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	25	conj	_	_
29	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	30	amod	_	_
30	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	28	nmod	_	_
31	hic	hic	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|Case=Loc|PronType=Dem	28	advmod:lmod	_	_
32	Luca	Luca	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	28	nmod	_	SpaceAfter=No
33	,	,	PUNCT	Punc	_	35	punct	_	_
34	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	35	advmod	_	_
35	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
36	domus	domus	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	35	nsubj	_	_
37	episcoporum	episcopus	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	36	nmod	_	SpaceAfter=No
38	,	,	PUNCT	Punc	_	39	punct	_	_
39	partem	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	24	obj	_	_
40	eius	is	PRON	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	39	det	_	_
41	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	42	case	_	_
42	silva	silua	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	39	nmod	_	_
43	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	44	obj	_	_
44	abuit	habeo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	39	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
45	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	46	case	_	_
46	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	44	obl	_	_
47	Cerbario	Cerbarium	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	46	flat	_	SpaceAfter=No
48	;	;	PUNCT	Punc	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:lmod	color:blue
1	scio	scio	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
3	illa	ille	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	Filectulo	Filectulum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	9	advmod:lmod	_	_
8	intentio	intentio	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
9	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
11	isto	iste	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	Fraimanno	Fraimannus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
13	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	15	cc	_	_
14	isto	iste	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	15	det	_	_
15	Andreas	Andreas	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	_
16	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
17	parte	pars	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	9	obl	_	_
18	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	19	amod	_	_
19	Iulie	Julia	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	scio	scio	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
22	infra	infra	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
23	istos	iste	DET	p|p|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	25	det	_	_
24	triginta	triginta	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	25	nummod	_	_
25	annis	annus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	27	obl	_	_
26	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	27	obj	_	_
27	abentem	habeo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	28	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
28	parte	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	21	obj	_	_
29	eadem	idem	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	30	det	_	_
30	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	28	nmod	_	_
31	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	32	amod	_	_
32	Iulie	Julia	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	30	nmod	_	_
33	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	34	case	_	_
34	proprietatem	proprietas	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	27	obl	_	SpaceAfter=No
35	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


