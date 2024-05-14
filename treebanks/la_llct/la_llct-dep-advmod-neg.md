---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_llct-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_llct-dep-advmod-tmod.html">advmod:tmod</a></tt>.

652 nodes (0%) are attached to their parents as `advmod:neg`.

625 instances of `advmod:neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53680981595092.

The following 8 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (624; 96% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (17; 3% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	2	advmod	_	_
2	melioretur	melioro	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
3	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
4	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	5	advmod:neg	_	_
5	pegioretur	peioro	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
6	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:neg	color:blue
1	nam	nam	PART	c|c|-|-|-|-|-|-|-|-	_	10	discourse	_	_
2	aliud	alius	DET	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Con	3	nmod	_	_
3	redditum	reditus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	_
4	ne	ne	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	6	advmod:neg	_	_
5	c	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	6	cc	_	_
6	iustitia	iustitia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	_
7	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	_
8	superinponere	superimpono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	10	advmod:neg	_	_
10	deveatis	debeo	VERB	v|v|2|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 advmod:neg	color:blue
1	ideoque	ideoque	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
2	constituimus	constituo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
4	nostros	noster	DET	a|a|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	_
5	Oschisum	Hoschisus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	conj	_	_
6	Pistoriensem	pistoriensis	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	amod	_	_
7	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	8	cc	_	_
8	Platonem	Plato	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	conj	_	_
9	Pisane	pisanus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	10	amod	_	_
10	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	venerabiles	uenerabilis	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	12	amod	_	_
12	epischopos	episcopus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	10	nmod	_	_
13	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
14	Andream	Andreas	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	conj	_	_
15	Florentine	Florentinus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	16	amod	_	_
16	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
17	vocatum	uoco	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	18	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
18	episcopum	episcopus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	14	appos	_	_
19	ne	ne	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	22	advmod:neg	_	_
20	c	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	22	cc	_	_
21	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	22	advmod:neg	_	_
22	Adelbertum	Adalpertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	conj	_	_
23	inluster	illustris	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	24	nmod	_	_
24	comitem	comes	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	22	appos	_	_
25	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	26	cc	_	_
26	marchionem	marchio	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	24	conj	_	_
27	nostrum	noster	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	26	det	_	_
28	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	29	cc	_	_
29	Ildebrandum	Ildeprandus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	conj	_	_
30	comitem	comes	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	29	appos	_	_
31	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	33	case	_	_
32	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	31	fixed	_	_
33	Ubaldo	Ubaldus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	nmod	_	_
34	fidele	fidelis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	33	amod	_	_
35	nostro	noster	DET	a|a|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	33	det	_	_
36	qui	qui	PRON	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	56	nsubj	_	_
37	veram	uerus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	40	amod	_	_
38	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	39	cc	_	_
39	integram	integer	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	37	conj	_	_
40	iustitiam	iustitia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	55	nsubj:pass	_	_
41	eidem	idem	DET	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	42	det	_	_
42	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	56	obl:arg	_	_
43	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	44	cc	_	_
44	advocato	aduocatus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	42	conj	_	_
45	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	46	det	_	_
46	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	44	nmod	_	_
47	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
48	quibuscunque	quicumque	DET	p|p|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Ind	49	det	_	_
49	causis	causa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	53	obl	_	_
50	movilibus	mobilis	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	49	amod	_	_
51	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	52	cc	_	_
52	inmovilibus	immobilis	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	50	conj	_	_
53	quesierint	quaero	VERB	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	40	acl	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
54	presentaliter	praesentaliter	ADV	d|d|-|-|-|-|-|-|-|-	_	53	advmod	_	_
55	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Pass	56	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
56	faciant	facio	VERB	v|v|3|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
57	,	,	PUNCT	Punc	_	60	punct	_	_
58	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	60	mark	_	_
59	lex	lex	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	60	nsubj	_	_
60	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	55	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
61	,	,	PUNCT	Punc	_	80	punct	_	_
62	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	80	cc	_	_
63	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	71	advmod:lmod	_	_
64	predictus	praedictus	DET	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	65	det	_	_
65	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	72	nsubj	_	_
66	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	68	cc	_	_
67	suus	suus	DET	a|a|3|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	68	det	_	_
68	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	65	conj	_	_
69	veram	uerus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	70	amod	_	_
70	inquisitionem	inquisitio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	71	nsubj:pass	_	_
71	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Pass	72	ccomp:relcl	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
72	petierit	peto	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	78	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
73	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	77	case	_	_
74	bonos	bonus	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	77	amod	_	_
75	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	76	cc	_	_
76	veraces	uerax	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	74	conj	_	_
77	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	79	obl	_	_
78	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	79	obj	_	_
79	adimplere	adimpleo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	80	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
80	studeant	studeo	VERB	v|v|3|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	56	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
81	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


