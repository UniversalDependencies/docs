---
layout: base
title:  'Statistics of ccomp:relcl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-ccomp.html">ccomp</a></tt>.

172 nodes (0%) are attached to their parents as `ccomp:relcl`.

137 instances of `ccomp:relcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 25.7906976744186.

The following 5 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (165; 96% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	3	cc	_	_
2	nulli	nullus	DET	a|a|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Polarity=Neg|PronType=Ind	3	obl:arg	_	_
3	liceat	licet	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	nolle	nolo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	3	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
6	semel	semel	ADV	d|d|-|-|-|-|-|-|-|-	NumType=Mult	7	obl	_	_
7	voluit	uolo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 ccomp:relcl	color:blue
1	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
2	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	1	det	_	_
3	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	5	case	_	_
4	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	3	fixed	_	_
5	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	1	nmod	_	_
6	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	_
7	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	8	obl:arg	_	_
8	vendo	uendo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	ac	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
10	trado	trado	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
11	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
12	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	15	punct	_	_
14	excepto	excepto	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
15	iscerpa	scherpha	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_
16	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
17	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	15	conj	_	_
18	movile	mobilis	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	17	amod	_	_
19	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	23	nsubj	_	_
20	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	24	case	_	_
21	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	24	det	_	_
22	reservo	reseruo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	15	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
23	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	22	ccomp:relcl	_	TraditionalTense=Praesens
24	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	23	obl	_	SpaceAfter=No
25	;	;	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 3 ccomp:relcl	color:blue
1	quot	quot	DET	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	3	nsubj	_	_
2	sunt	sum	AUX	v|v|3|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	29	ccomp:relcl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	8	punct	_	_
7	culta	cultus	ADJ	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	8	amod	_	_
8	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	_
9	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
10	inculta	incultus	ADJ	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	19	punct	_	_
12	quantas	quantus	DET	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Rel	19	obj	_	_
13	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	19	advmod	_	_
14	genitor	genitor	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	19	nsubj	_	_
15	meus	meus	DET	a|a|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	14	nmod	_	_
16	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
17	manum	manus	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obl	_	_
18	sua	suus	DET	a|a|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	17	det	_	_
19	abuit	habeo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
20	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	27	cc	_	_
21	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	27	nsubj	_	_
22	ipsi	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
23	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	27	advmod	_	_
24	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
25	manus	manus	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	27	obl	_	_
26	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	25	det	_	_
27	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
28	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	29	obl:arg	_	_
29	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
30	,	,	PUNCT	Punc	_	32	punct	_	_
31	tali	talis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	32	det	_	_
32	tinore	tenor	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	29	obl	_	_
33	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	46	mark	_	_
34	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	46	nsubj	_	_
35	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	38	case	_	_
36	infra	infra	ADP	r|r|-|-|-|-|-|-|-|-	_	35	fixed	_	_
37	isto	iste	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	38	det	_	_
38	anno	annus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	43	obl	_	_
39	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	41	case	_	_
40	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	41	det	_	_
41	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	43	obl	_	_
42	capanno	capannum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	43	obj	_	_
43	levare	leuo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	46	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
44	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	45	cc	_	_
45	cunciare	concieo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	43	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
46	debeam	debeo	VERB	v|v|1|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	32	acl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
47	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	58	cc	_	_
48	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	58	nsubj	_	_
49	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	51	cc	_	_
50	meis	meus	DET	a|a|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	51	det	_	_
51	heredes	heres	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	48	conj	_	_
52	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
53	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	54	det	_	_
54	capanna	capanna	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	55	obl	_	_
55	residere	resideo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	58	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
56	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	57	cc	_	_
57	habitare	habito	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	55	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
58	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	46	conj	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
59	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	70	cc	_	_
60	capanna	capanna	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	65	obj	_	_
61	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	62	cc	_	_
62	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	60	conj	_	_
63	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	62	det	_	_
64	bene	bene	ADV	d|d|-|-|-|-|-|-|-|-	_	65	advmod	_	_
65	lavorare	laboro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	70	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
66	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	67	cc	_	_
67	gubernare	guberno	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	65	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
68	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	69	cc	_	_
69	meliorare	melioro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	65	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
70	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	46	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
71	;	;	PUNCT	Punc	_	29	punct	_	_

~~~


