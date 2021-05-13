---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>.

693 nodes (0%) are attached to their parents as `dislocated:obj`.

521 instances of `dislocated:obj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.5714285714286.

The following 7 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (648; 94% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (25; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 dislocated:obj	color:blue
1	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	10	dislocated:obj	_	_
2	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	1	det	_	_
3	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	1	punct	_	_
6	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	mark	_	_
7	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	_
8	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
9	eas	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	10	obj	_	_
10	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	;	;	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 dislocated:obj	color:blue
1	hec	hic	DET	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	2	det	_	_
2	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	8	dislocated:obj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	mihi	ego	PRON	p|p|1|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	_
5	eas	is	PRON	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Dem,Prs	8	obj	_	_
6	livellario	libellarius	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	7	amod	_	_
7	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	8	obl	_	_
8	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 27 dislocated:obj	color:blue
1	istis	iste	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	2	amod	_	_
2	Bellisarius	Belisarius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	_
3	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	Samuel	Samuel	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	_
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
7	Ansuald	Ansualdus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
8	germani	germanus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	5	appos	_	_
9	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	10	xcomp	_	_
10	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
11	ecclesias	ecclesia	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	9	obj	_	_
12	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	13	amod	_	_
13	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	16	amod	_	_
16	Gervasii	Geruasius	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	13	conj	_	_
17	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	11	nmod	_	_
19	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	20	cc	_	_
20	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	18	conj	_	_
21	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	18	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	25	punct	_	_
23	et	et	ADV	c|c|-|-|-|-|-|-|-|-	_	25	advmod:emph	_	_
24	ecce	ecce	ADV	e|e|-|-|-|-|-|-|-|-	PronType=Dem	25	advmod:emph	_	_
25	livellum	libellus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	10	parataxis	_	_
26	quomodo	quomodo	SCONJ	d|d|-|-|-|-|-|-|-|-	_	39	mark	_	_
27	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Dem,Prs	39	dislocated:obj	_	_
28	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
29	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	30	amod	_	_
30	Ambrosio	Ambrosius	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	39	obl	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	32	punct	_	_
32	antecessor	antecessor	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	30	appos	_	_
33	istius	iste	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	34	det	_	_
34	domni	domnus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	32	nmod	_	_
35	Hieremie	Hieremias	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	34	flat	_	_
36	presul	praesul	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	34	appos	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	30	punct	_	_
38	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Dem,Prs	39	obj	_	_
39	receperunt	recipio	VERB	v|v|3|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	25	acl	_	_
40	iste	iste	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	41	det	_	_
41	Bellisarius	Belisarius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	39	nsubj	_	_
42	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	41	appos	_	SpaceAfter=No
43	,	,	PUNCT	Punc	_	46	punct	_	_
44	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	46	nsubj	_	_
45	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	46	advmod	_	_
46	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	41	acl:relcl	_	_
47	erat	sum	AUX	v|v|3|s|i|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	46	cop	_	SpaceAfter=No
48	,	,	PUNCT	Punc	_	50	punct	_	_
49	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	50	cc	_	_
50	Samuel	Samuel	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	41	conj	_	_
51	germani	germanus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	41	appos	_	_
52	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	53	case	_	_
53	parte	pars	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	39	obl	_	_
54	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	55	amod	_	_
55	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	53	nmod	_	SpaceAfter=No
56	;	;	PUNCT	Punc	_	10	punct	_	_

~~~


