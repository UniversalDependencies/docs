---
layout: base
title:  'Statistics of conj:expl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-conj.html">conj</a></tt>.

13 nodes (0%) are attached to their parents as `conj:expl`.

13 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2307692307692.

The following 3 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (7; 54% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (5; 38% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 38 conj:expl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	2	cc	_	_
2	recepi	recipio	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	ad	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	te	tu	PRON	p|p|2|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl	_	_
5	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	ea	is	PRON	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obl	_	_
7	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
8	viganium	uiganeum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
9	unam	unus	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	10	det	_	_
10	casellam	casella	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	2	obj	_	_
11	ivi	ibi	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
12	prope	prope	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
13	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
14	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl	_	_
15	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	14	det	_	_
16	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
17	curticella	curticella	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	14	conj	_	_
18	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	se	sui	PRON	p|p|3|s|-|-|-|f|a|-	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	23	punct	_	_
21	que	qui	PRON	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	23	nsubj	_	_
22	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
23	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	10	acl:relcl	_	_
24	vestre	uester	DET	a|a|2|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	23	det	_	_
25	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	26	amod	_	_
26	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	23	punct	_	_
28	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	32	obj	_	_
29	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	32	advmod	_	_
30	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	31	amod	_	_
31	Domniperta	Domniperta	PROPN	Propn|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	32	nsubj	_	_
32	offeruit	offero	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
33	,	,	PUNCT	Punc	_	35	punct	_	_
34	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	35	mark	_	_
35	dixit	dico	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
36	,	,	PUNCT	Punc	_	38	punct	_	_
37	ipsam	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	38	det	_	_
38	casellam	casella	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	10	conj:expl	_	_
39	com	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
40	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	38	nmod	_	_
41	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	40	det	_	_
42	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	43	cc	_	_
43	curticella	curticella	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	40	conj	_	_
44	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	45	case	_	_
45	se	sui	PRON	p|p|3|s|-|-|-|f|a|-	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	43	nmod	_	_
46	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	47	case	_	_
47	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
48	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 conj:expl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	Adalpertus	Adalpertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	dux	dux	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	direxit	dirigo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
6	suos	suus	DET	a|a|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	10	punct	_	_
8	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|ExtPos=CCONJ|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	cc	_	_
9	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	fixed	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	Roffridi	Rodfridus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	conj:expl	_	_
11	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	12	cc	_	_
12	Leo	Leo	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
13	schabinus	scabinus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	appos	_	_
14	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	15	cc	_	_
15	Adalprando	Adalprandus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	10	conj	_	_
16	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	17	nsubj	_	_
17	ambulaverunt	ambulo	VERB	v|v|3|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
18	[--]	_	X	Punc	_	4	dep	_	SpaceAfter=No
19	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 28 conj:expl	color:blue
1	nunc	nunc	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	23	advmod:tmod	_	_
2	autem	autem	PART	d|d|-|-|-|-|-|-|-|-	_	23	discourse	_	_
3	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
4	presentem	praesens	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	7	amod	_	_
5	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
6	dotalis	dotale	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
7	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	22	obl	_	_
8	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
9	redemtione	redemptio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl	_	_
10	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	11	cc	_	_
11	salute	salus	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	9	conj	_	_
12	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
13	meae	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	12	det	_	_
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	prefata	praefatus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl:arg	_	_
18	aliquid	aliquis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	22	obj	_	_
19	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	20	case	_	_
20	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	18	nmod	_	_
21	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	20	nmod	_	_
22	offerre	offero	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	23	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
23	prevideo	praeuideo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
24	,	,	PUNCT	Punc	_	26	punct	_	_
25	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	26	case	_	_
26	primis	primus	ADJ	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|NumType=Ord	22	obl	_	_
27	omnium	omnis	DET	a|a|-|p|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Plur|PronType=Tot	28	nmod	_	_
28	fundamentum	fundamentum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	18	conj:expl	_	_
29	illut	ille	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	28	det	_	_
30	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	34	advmod:lmod	_	_
31	ipsa	ipse	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	33	det	_	_
32	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	33	nmod	_	_
33	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	34	nsubj:pass	_	_
34	sita	sino	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	28	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
35	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
36	,	,	PUNCT	Punc	_	39	punct	_	_
37	una	una	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=ADP	39	case	_	_
38	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	37	fixed	_	_
39	sala	sala	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	28	nmod	_	_
40	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	39	det	_	_
41	ibidem	ibidem	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	39	advmod:lmod	_	_
42	prope	prope	ADV	d|d|-|-|-|-|-|-|-|-	_	39	advmod	_	_
43	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
44	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	39	nmod	_	_
45	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	44	det	_	_
46	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	47	cc	_	_
47	curte	curtis	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	44	conj	_	_
48	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
49	se	sui	PRON	p|p|3|s|-|-|-|f|a|-	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	47	nmod	_	SpaceAfter=No
50	,	,	PUNCT	Punc	_	53	punct	_	_
51	quomodo	quomodo	SCONJ	d|d|-|-|-|-|-|-|-|-	_	53	mark	_	_
52	signa	signum	NOUN	n|n|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur	53	nsubj:pass	_	_
53	posita	pono	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	47	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
54	sunt	sum	AUX	v|v|3|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	53	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
55	,	,	PUNCT	Punc	_	57	punct	_	_
56	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	57	cc	_	_
57	orto	hortus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	44	conj	_	_
58	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	60	case	_	_
59	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	60	det	_	_
60	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	57	nmod	_	SpaceAfter=No
61	,	,	PUNCT	Punc	_	62	punct	_	_
62	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=SCONJ	270	cc	_	_
63	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	62	fixed	_	_
64	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
65	mea	meus	DET	a|a|1|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	64	det	_	_
66	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	67	case	_	_
67	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	64	nmod	_	_
68	Russula	Russula	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	67	flat	_	SpaceAfter=No
69	,	,	PUNCT	Punc	_	71	punct	_	_
70	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	71	case	_	_
71	quercieta	quercetum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	64	nmod	_	_
72	sua	suus	DET	a|a|3|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	71	det	_	_
73	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	74	cc	_	_
74	oliveto	oliuetum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	71	conj	_	SpaceAfter=No
75	,	,	PUNCT	Punc	_	74	punct	_	_
76	ipsam	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	77	det	_	_
77	clausuram	clausura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	22	dislocated:obj	_	_
78	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	79	case	_	_
79	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	77	nmod	_	SpaceAfter=No
80	,	,	PUNCT	Punc	_	77	punct	_	_
81	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=SCONJ	84	cc	_	_
82	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	81	fixed	_	_
83	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	84	det	_	_
84	vineam	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
85	meam	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	84	det	_	SpaceAfter=No
86	,	,	PUNCT	Punc	_	88	punct	_	_
87	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	88	advmod:lmod	_	_
88	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	84	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
89	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	90	case	_	_
90	Fine	finis	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	88	xcomp	_	SpaceAfter=No
91	,	,	PUNCT	Punc	_	84	punct	_	_
92	ipsam	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	93	det	_	_
93	clausuram	clausura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	dislocated	_	_
94	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	95	case	_	_
95	arboribus	arbor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	93	nmod	_	_
96	suis	suus	DET	a|a|3|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	95	det	_	_
97	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	98	case	_	_
98	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	93	nmod	_	SpaceAfter=No
99	,	,	PUNCT	Punc	_	93	punct	_	_
100	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	ExtPos=CCONJ	103	cc	_	_
101	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	100	fixed	_	_
102	omnem	omnis	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Tot	103	det	_	_
103	rem	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
104	meam	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	103	det	_	_
105	sundrialem	sundrialis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	103	amod	_	_
106	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	107	obj	_	_
107	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	103	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
108	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	109	case	_	_
109	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	107	obl	_	_
110	Sexantula	Sexantula	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	109	flat	_	SpaceAfter=No
111	,	,	PUNCT	Punc	_	112	punct	_	_
112	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	103	nmod	_	SpaceAfter=No
113	,	,	PUNCT	Punc	_	114	punct	_	_
114	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	112	conj	_	SpaceAfter=No
115	,	,	PUNCT	Punc	_	116	punct	_	_
116	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	112	conj	_	SpaceAfter=No
117	,	,	PUNCT	Punc	_	118	punct	_	_
118	virgariis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	112	conj	_	SpaceAfter=No
119	,	,	PUNCT	Punc	_	120	punct	_	_
120	olivetis	oliuetum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	112	conj	_	SpaceAfter=No
121	,	,	PUNCT	Punc	_	122	punct	_	_
122	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	112	conj	_	SpaceAfter=No
123	,	,	PUNCT	Punc	_	124	punct	_	_
124	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	112	conj	_	SpaceAfter=No
125	,	,	PUNCT	Punc	_	127	punct	_	_
126	cultis	cultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	127	amod	_	_
127	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	112	conj	_	_
128	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	129	cc	_	_
129	incultis	incultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	126	conj	_	SpaceAfter=No
130	,	,	PUNCT	Punc	_	103	punct	_	_
131	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	132	mark	_	_
132	dixi	dico	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	136	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
133	,	,	PUNCT	Punc	_	132	punct	_	_
134	ipsam	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	136	det	_	_
135	sundrialem	sundrialis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	136	amod	_	_
136	rem	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	dislocated	_	_
137	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	138	case	_	_
138	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	136	nmod	_	SpaceAfter=No
139	,	,	PUNCT	Punc	_	136	punct	_	_
140	similiter	similiter	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=SCONJ	143	cc	_	_
141	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	140	fixed	_	_
142	unam	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	143	det	_	_
143	casam	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
144	meam	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	143	det	_	_
145	massariciam	massaricius	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	143	amod	_	_
146	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	147	case	_	_
147	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	143	nmod	_	_
148	Farnoccle	Farinocula	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	147	nmod	_	SpaceAfter=No
149	,	,	PUNCT	Punc	_	151	punct	_	_
150	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	151	nsubj:pass	_	_
151	regitur	rego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	143	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
152	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	153	case	_	_
153	Bonichis	Bonichis	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	151	obl	_	_
154	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	153	appos	_	_
155	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	156	amod	_	_
156	Bonishomoli	Bonisomolus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	154	nmod	_	SpaceAfter=No
157	,	,	PUNCT	Punc	_	161	punct	_	_
158	una	una	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=ADP	161	case	_	_
159	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	158	fixed	_	_
160	omni	omnis	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Tot	161	det	_	_
161	re	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	143	nmod	_	_
162	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	163	case	_	_
163	eam	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	164	obl	_	_
164	pertenentem	pertineo	VERB	t|t|-|s|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	161	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
165	,	,	PUNCT	Punc	_	167	punct	_	_
166	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	167	case	_	_
167	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	143	nmod	_	SpaceAfter=No
168	,	,	PUNCT	Punc	_	143	punct	_	_
169	necnon	necnon	CCONJ	c|c|-|-|-|-|-|-|-|-	_	170	cc	_	_
170	cafagium	gahagium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	28	conj	_	_
171	meum	meus	DET	a|a|1|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	170	det	_	_
172	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	173	obj	_	_
173	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	170	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
174	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	175	case	_	_
175	Ponte	Pons	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	173	obl	_	_
176	tectum	tego	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	175	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
177	,	,	PUNCT	Punc	_	182	punct	_	_
178	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	182	nsubj	_	_
179	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	182	obl:arg	_	_
180	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	181	case	_	_
181	conparationem	comparatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	182	obl	_	_
182	obvenit	obuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	170	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
183	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	185	case	_	_
184	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	185	amod	_	_
185	Serbulo	Seruulus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	182	obl	_	SpaceAfter=No
186	,	,	PUNCT	Punc	_	188	punct	_	_
187	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	188	case	_	_
188	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	170	nmod	_	SpaceAfter=No
189	,	,	PUNCT	Punc	_	170	punct	_	_
190	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=SCONJ	193	cc	_	_
191	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	190	fixed	_	_
192	alium	alius	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Con	193	det	_	_
193	campum	campus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	28	conj	_	_
194	meum	meus	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	193	det	_	_
195	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	196	case	_	_
196	Vaccule	Vaccula	PROPN	Propn|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	193	nmod	_	SpaceAfter=No
197	,	,	PUNCT	Punc	_	199	punct	_	_
198	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	199	obj	_	_
199	nominamur	nomino	VERB	v|v|1|p|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	193	acl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
200	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	201	case	_	_
201	Valle	Valles	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	199	xcomp	_	SpaceAfter=No
202	,	,	PUNCT	Punc	_	193	punct	_	_
203	ipsum	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	204	det	_	_
204	campum	campus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	28	dislocated	_	_
205	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	206	case	_	_
206	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	204	nmod	_	SpaceAfter=No
207	,	,	PUNCT	Punc	_	204	punct	_	_
208	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	210	cc	_	_
209	alium	alius	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Con	210	det	_	_
210	campum	campus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	28	conj	_	_
211	meum	meus	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	210	det	_	_
212	ibidem	ibidem	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	210	advmod:lmod	_	SpaceAfter=No
213	,	,	PUNCT	Punc	_	216	punct	_	_
214	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	216	mark	_	_
215	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	216	advmod:lmod	_	_
216	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	210	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
217	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	218	case	_	_
218	Molinum	Molinum	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	216	xcomp	_	SpaceAfter=No
219	,	,	PUNCT	Punc	_	222	punct	_	_
220	una	una	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=ADP	222	case	_	_
221	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	220	fixed	_	_
222	arboribus	arbor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	210	nmod	_	SpaceAfter=No
223	,	,	PUNCT	Punc	_	225	punct	_	_
224	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	225	case	_	_
225	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	210	nmod	_	SpaceAfter=No
226	,	,	PUNCT	Punc	_	210	punct	_	_
227	similiter	similiter	ADV	d|d|-|-|-|-|-|-|-|-	ExtPos=SCONJ	230	cc	_	_
228	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	227	fixed	_	_
229	quartam	quartus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Ord	230	amod	_	_
230	portionem	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
231	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	233	case	_	_
232	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	233	det	_	_
233	olivetis	oliuetum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	230	nmod	_	_
234	meis	meus	DET	a|a|1|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	233	det	_	_
235	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	236	obj	_	_
236	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	230	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
237	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	239	case	_	_
238	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	239	det	_	_
239	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	236	obl	_	_
240	Vaccule	Vaccula	PROPN	Propn|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	239	flat	_	SpaceAfter=No
241	,	,	PUNCT	Punc	_	230	punct	_	_
242	ipsam	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	244	det	_	_
243	quartam	quartus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Ord	244	amod	_	_
244	portionem	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	dislocated	_	_
245	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	246	case	_	_
246	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	244	nmod	_	SpaceAfter=No
247	,	,	PUNCT	Punc	_	244	punct	_	_
248	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	249	cc	_	_
249	medietatem	medietas	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	28	conj	_	_
250	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	251	case	_	_
251	silva	silua	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	249	nmod	_	_
252	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	251	det	_	_
253	maiore	magnus	ADJ	a|a|-|s|-|-|-|f|b|c	Case=Abl|Degree=Cmp|Gender=Fem|Number=Sing	251	amod	_	_
254	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	256	case	_	_
255	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	256	det	_	_
256	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	251	nmod	_	_
257	Vaccule	Vaccula	PROPN	Propn|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	256	flat	_	_
258	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	259	case	_	_
259	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	249	nmod	_	SpaceAfter=No
260	,	,	PUNCT	Punc	_	249	punct	_	_
261	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	262	cc	_	_
262	vergarium	uirgareum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	28	conj	_	_
263	meum	meus	DET	a|a|1|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	262	det	_	_
264	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	265	case	_	_
265	Fontana	Fontana	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	262	nmod	_	_
266	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	267	case	_	_
267	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	262	nmod	_	_
268	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	270	cc	_	_
269	alium	alius	DET	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Con	270	det	_	_
270	vergarium	uirgareum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	28	conj	_	_
271	meum	meus	DET	a|a|1|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	270	det	_	SpaceAfter=No
272	,	,	PUNCT	Punc	_	279	punct	_	_
273	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	279	nsubj	_	_
274	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	279	obl:arg	_	_
275	ab	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	276	case	_	_
276	Araldo	Araldus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	279	obl	_	_
277	socero	socer	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	276	appos	_	_
278	meo	meus	DET	a|a|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	277	det	_	_
279	obvenit	obuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	270	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
280	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	281	case	_	_
281	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	270	nmod	_	SpaceAfter=No
282	.	.	PUNCT	Punc	_	23	punct	_	_

~~~


