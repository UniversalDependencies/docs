---
layout: base
title:  'Statistics of xcomp:pred in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-xcomp.html">xcomp</a></tt>.

1 nodes (0%) are attached to their parents as `xcomp:pred`.

1 instances of `xcomp:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 xcomp:pred	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	34	cc	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	9	mark	_	_
3	forsitans	forsitan	ADV	d|d|-|-|-|-|-|-|-|-	_	9	advmod	_	_
4	quiscunque	quicumque	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	9	nsubj:pass	_	_
5	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	vos	uos	PRON	p|p|2|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	4	nmod	_	_
7	antea	antea	ADV	d|d|-|-|-|-|-|-|-|-	_	9	advmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	7	punct	_	_
9	mortuus	morior	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	34	advcl	_	_
10	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	_	_
11	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	20	mark	_	_
12	ipsis	ipse	DET	p|p|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Dem	13	det	_	_
13	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	19	nsubj:pass	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	15	cc	_	_
15	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	13	conj	_	_
16	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
17	anima	anima	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	20	obl	_	_
18	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	17	det	_	_
19	dispensata	dispenso	VERB	t|t|-|p|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	20	xcomp:pred	_	_
20	fiant	fio	VERB	v|v|3|p|p|s|a|-|-|-	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:cmpr	_	SpaceAfter=No
21	,	,	PUNCT	Punc	_	24	punct	_	_
22	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	24	mark	_	_
23	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	24	advmod	_	_
24	constitui	constituo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	20	advcl:cmpr	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	9	punct	_	_
26	ille	ille	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	34	nsubj	_	_
27	quis	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	30	nsubj	_	_
28	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	vos	uos	PRON	p|p|2|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	27	nmod	_	_
30	supervixerit	superuiuo	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	26	acl:relcl	_	_
31	eas	is	PRON	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Dem,Prs	34	obj	_	_
32	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	35	case	_	_
33	sua	suus	DET	a|a|3|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	35	det	_	_
34	abeat	habeo	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
35	potestate	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	34	obl	_	_
36	avendi	habeo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	35	acl	_	_
37	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	38	cc	_	_
38	usufructuandi	usufructuo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	36	conj	_	_
39	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	48	cc	_	SpaceAfter=No
40	,	,	PUNCT	Punc	_	39	punct	_	_
41	quando	quando	SCONJ	d|d|-|-|-|-|-|-|-|-	_	42	mark	_	_
42	voluerit	uolo	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	48	advcl	_	SpaceAfter=No
43	,	,	PUNCT	Punc	_	42	punct	_	_
44	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	47	case	_	_
45	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	47	nmod	_	_
46	meae	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	45	det	_	_
47	remedium	remedium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	48	obl	_	_
48	dispensandi	dispenso	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	36	conj	_	SpaceAfter=No
49	,	,	PUNCT	Punc	_	53	punct	_	_
50	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	53	case	_	_
51	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	50	fixed	_	_
52	ipsam	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	53	det	_	_
53	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	34	obl	_	_
54	venditionis	uenditio	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	53	nmod	_	_
55	quas	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	59	nsubj:pass	_	_
56	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	57	case	_	_
57	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	59	obl:arg	_	_
58	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	59	advmod	_	_
59	emissam	emitto	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	53	acl:relcl	_	_
60	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	59	aux:pass	_	SpaceAfter=No
61	.	.	PUNCT	Punc	_	34	punct	_	_

~~~


