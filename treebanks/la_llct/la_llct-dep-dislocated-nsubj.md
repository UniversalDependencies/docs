---
layout: base
title:  'Statistics of dislocated:nsubj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:nsubj`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>.

82 nodes (0%) are attached to their parents as `dislocated:nsubj`.

69 instances of `dislocated:nsubj` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.4878048780488.

The following 6 pairs of parts of speech are connected with `dislocated:nsubj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (65; 79% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (9; 11% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 dislocated:nsubj	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	13	reparandum	_	_
3	homines	homo	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	12	dislocated:nsubj	_	_
4	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	7	nsubj	_	_
5	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
6	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	habitantes	habito	VERB	t|t|-|p|p|p|a|m|n|-	Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	3	acl:relcl	_	_
8	fuerit	sum	AUX	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	3	punct	_	_
10	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	12	obl:arg	_	_
11	eos	is	PRON	p|p|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Dem,Prs	12	nsubj	_	_
12	venire	uenio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	13	ccomp	_	_
13	faciamus	facio	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	legem	lex	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	17	obj	_	_
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	iustitia	iustitia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	conj	_	_
17	faciendum	facio	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	12	advcl	_	_
18	hic	hic	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	12	advmod	_	_
19	Luca	Luca	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	SpaceAfter=No
20	;	;	PUNCT	Punc	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 28 dislocated:nsubj	color:blue
1	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	14	advmod	_	_
2	et	et	ADV	c|c|-|-|-|-|-|-|-|-	_	14	advmod:emph	_	_
3	super	super	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
4	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	commotationem	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	obl	_	_
6	sepe	saepe	ADV	d|d|-|-|-|-|-|-|-|-	_	7	advmod	_	_
7	dictus	dico	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
8	Petrus	Petrus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	12	punct	_	_
10	gratia	gratia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	12	nmod	_	_
11	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	8	appos	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	8	punct	_	_
14	direxit	dirigo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
15	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	_
16	suos	suus	DET	a|a|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	15	det	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	20	punct	_	_
18	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	20	cc	_	_
19	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	fixed	_	_
20	Teuderadum	Teuderadus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	15	conj	_	_
21	presbiterum	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	20	appos	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	23	punct	_	_
23	Auderamus	Auderamus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	20	conj	_	_
24	diaconum	diaconus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	23	appos	_	_
25	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	26	cc	_	_
26	Iltifridi	Iltifridus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	20	conj	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	28	punct	_	_
28	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	42	dislocated:nsubj	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	28	punct	_	_
30	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	34	case	_	_
31	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	30	fixed	_	_
32	aliis	alius	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Ind	34	det	_	_
33	idoneis	idoneus	ADJ	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	34	amod	_	_
34	hominibus	homo	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	42	obl	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	39	punct	_	_
36	quorum	qui	DET	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|PronType=Ind	37	nmod	_	_
37	nomina	nomen	NOUN	n|n|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur	39	nsubj:pass	_	_
38	subter	subter	ADV	d|d|-|-|-|-|-|-|-|-	_	39	advmod	_	_
39	leguntur	lego	VERB	v|v|3|p|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	34	acl	_	SpaceAfter=No
40	,	,	PUNCT	Punc	_	34	punct	_	_
41	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	42	nsubj	_	_
42	previderunt	praeuideo	VERB	v|v|3|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
43	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	46	mark	_	_
44	melioratam	melioro	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	45	acl	_	_
45	commutationem	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	obj	_	_
46	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	42	ccomp	_	_
47	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
48	partem	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	obl:arg	_	_
49	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	50	det	_	_
50	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	48	nmod	_	_
51	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	52	amod	_	_
52	Donati	Donatus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	50	nmod	_	_
53	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	54	mark	_	_
54	recipissem	recipio	VERB	v|v|1|s|l|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin|Voice=Act	44	advcl	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	63	punct	_	_
56	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	63	mark	_	_
57	magis	magis	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	_
58	secundum	secundum	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
59	lege	lex	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	63	obl	_	_
60	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	61	case	_	_
61	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	63	obl	_	_
62	istabile	stabilis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	63	xcomp	_	_
63	permaneat	permaneo	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	46	advcl	_	SpaceAfter=No
64	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 dislocated:nsubj	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
2	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	_	_
3	super	super	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
5	dixi	dico	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	13	acl:relcl	_	_
6	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
7	hac	hic	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	causa	causa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	5	obl	_	_
9	duo	duo	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	11	nummod	_	_
10	dotis	dos	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	_
11	paginam	pagina	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	nsubj:pass	_	_
12	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	13	ccomp	_	_
13	rogabi	rogo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	15	punct	_	_
15	unam	unus	NUM	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	12	dislocated:nsubj	_	_
16	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	20	obj	_	_
17	pars	pars	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	20	iobj	_	_
18	ipsius	ipse	DET	p|p|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	19	det	_	_
19	orachuli	oraculum	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	_
20	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	15	acl:relcl	_	_
21	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	22	cc	_	_
22	alio	alius	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	15	conj	_	_
23	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	32	obj	_	_
24	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	32	obl:arg	_	_
25	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	27	cc	_	_
26	a	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
27	germani	germanus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	24	conj	_	_
28	mei	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	27	det	_	_
29	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
30	futura	sum	VERB	t|t|-|s|f|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	31	acl	_	_
31	commemoratione	commemoratio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	32	obl	_	_
32	retenui	retineo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	22	acl:relcl	_	SpaceAfter=No
33	.	.	PUNCT	Punc	_	13	punct	_	_

~~~


