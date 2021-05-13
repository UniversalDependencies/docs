---
layout: base
title:  'Statistics of dislocated in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated`

This relation is universal.
There are 3 language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>.

46 nodes (0%) are attached to their parents as `dislocated`.

45 instances of `dislocated` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 79.3260869565217.

The following 10 pairs of parts of speech are connected with `dislocated`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (27; 59% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (8; 17% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 52 dislocated	color:blue
1	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod:emph	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	_
4	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	8	advmod:emph	_	_
6	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	fixed	_	_
7	una	unus	NUM	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	8	nummod	_	_
8	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
9	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_
11	quod	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	13	nsubj	_	_
12	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	prato	pratum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	10	acl:relcl	_	_
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
15	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	8	nmod	_	_
16	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	17	advmod	_	_
17	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	acl:relcl	_	_
18	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	Scrinio	Scrineum	PROPN	Propn|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
22	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
23	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	21	obl:arg	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	25	punct	_	_
25	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	dislocated:obj	_	_
26	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	_
27	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	28	case	_	_
28	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	25	nmod	_	_
29	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
30	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	25	nmod	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	35	punct	_	_
32	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	35	case	_	_
33	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	32	fixed	_	_
34	una	unus	NUM	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Card	35	nummod	_	_
35	petia	petia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	obl	_	_
36	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	37	case	_	_
37	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	nmod	_	_
38	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	39	case	_	_
39	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	35	nmod	_	_
40	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	41	advmod	_	_
41	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	39	acl:relcl	_	_
42	Campo	campus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	41	xcomp	_	_
43	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
44	Flume	Flumen	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	42	nmod	_	SpaceAfter=No
45	,	,	PUNCT	Punc	_	46	punct	_	_
46	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	35	acl	_	_
47	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	46	obl:arg	_	_
49	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	50	amod	_	_
50	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	48	nmod	_	SpaceAfter=No
51	,	,	PUNCT	Punc	_	52	punct	_	_
52	petia	petia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	dislocated	_	_
53	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	52	det	_	_
54	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	55	case	_	_
55	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	52	nmod	_	SpaceAfter=No
56	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 dislocated	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	2	cc	_	_
2	recepi	recipio	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	te	tu	PRON	p|p|2|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl	_	_
5	Periteo	Peredeus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	4	appos	_	_
6	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	appos	_	_
7	pretio	pretium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl:arg	_	_
8	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
9	ipsas	ipse	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	10	det	_	_
10	res	res	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	2	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	auro	aurum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	13	nmod	_	_
13	solidos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	2	dislocated	_	_
14	viginti	uiginti	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	13	nummod	_	_
15	tantum	tantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	2	advmod	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 47 67 dislocated	color:blue
1	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	_	3	det	_	_
2	dicta	dico	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	fixed	_	_
3	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	88	obj	_	_
4	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_
5	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	8	case	_	_
7	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	6	fixed	_	_
8	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	3	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	12	punct	_	_
10	recta	recta	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
11	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	_
12	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	8	nmod	_	_
13	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
14	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	8	conj	_	_
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	14	conj	_	_
17	eius	is	PRON	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	14	nmod	_	_
18	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	fundamentis	fundamentum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	14	conj	_	_
20	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
21	edeficiis	aedificium	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	19	conj	_	_
22	suis	suus	DET	a|a|3|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	19	det	_	_
23	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	24	cc	_	_
24	curtis	curtis	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	19	conj	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	26	punct	_	_
26	ortis	hortus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	19	nmod	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	28	punct	_	_
28	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	19	nmod	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	30	punct	_	_
30	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	19	nmod	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	32	punct	_	_
32	olivis	oliua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	19	nmod	_	SpaceAfter=No
33	,	,	PUNCT	Punc	_	34	punct	_	_
34	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	19	nmod	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	36	punct	_	_
36	virgareis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	19	nmod	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	38	punct	_	_
38	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	19	nmod	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	40	punct	_	_
40	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	19	nmod	_	SpaceAfter=No
41	,	,	PUNCT	Punc	_	43	punct	_	_
42	cultas	cultus	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	43	amod	_	_
43	res	res	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	19	nmod	_	_
44	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	45	cc	_	_
45	incultas	incultus	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	42	conj	_	SpaceAfter=No
46	,	,	PUNCT	Punc	_	47	punct	_	_
47	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	3	nmod	_	_
48	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	63	advmod	_	_
49	ubique	ubique	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	SpaceAfter=No
50	,	,	PUNCT	Punc	_	49	punct	_	_
51	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	53	case	_	_
52	qualibet	quilibet	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Ind	53	nmod	_	_
53	locas	locum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	63	obl	_	_
54	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	55	cc	_	_
55	vocabulis	uocabulum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	53	conj	_	SpaceAfter=No
56	,	,	PUNCT	Punc	_	53	punct	_	_
57	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
58	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	59	det	_	_
59	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	63	obl	_	_
60	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	61	amod	_	_
61	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	59	nmod	_	_
62	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	63	cop	_	_
63	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	47	acl:relcl	_	SpaceAfter=No
64	,	,	PUNCT	Punc	_	67	punct	_	_
65	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	67	cc	_	_
66	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	67	case	_	_
67	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	47	dislocated	_	_
68	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	69	advmod	_	_
69	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	67	acl:relcl	_	_
70	Rogiana	Rogiana	PROPN	Propn|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	69	xcomp	_	_
71	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	72	cc	_	_
72	Rontano	Rontanum	PROPN	Propn|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	70	conj	_	_
73	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	76	cc	_	_
74	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	76	case	_	_
75	suprascripto	suprascriptus	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	76	det	_	_
76	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	67	conj	_	_
77	Caricini	Caricinum	PROPN	Propn|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	76	nmod	_	_
78	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	79	det	_	_
79	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	83	obl:arg	_	_
80	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	81	amod	_	_
81	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	79	nmod	_	_
82	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	83	cop	_	_
83	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	67	conj	_	SpaceAfter=No
84	,	,	PUNCT	Punc	_	3	punct	_	_
85	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	86	case	_	_
86	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	88	obl	_	_
87	nobis	nos	PRON	p|p|1|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	88	obl:arg	_	_
88	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
89	.	.	PUNCT	Punc	_	88	punct	_	_

~~~


