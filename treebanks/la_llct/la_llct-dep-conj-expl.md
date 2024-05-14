---
layout: base
title:  'Statistics of conj:expl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-conj.html">conj</a></tt>.

7 nodes (0%) are attached to their parents as `conj:expl`.

7 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85714285714286.

The following 2 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (5; 71% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 29% instances).


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
8	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	cc	_	_
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
# visual-style 60	bgColor:blue
# visual-style 60	fgColor:white
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 57 60 conj:expl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	38	cc	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	16	mark	_	_
3	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Number=Plur|Person=1|PronType=Prs	16	dislocated	_	_
4	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	16	obl:arg	_	_
5	hec	hic	DET	p|p|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	6	det	_	_
6	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	16	nsubj:pass	_	_
7	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	9	mark	_	_
8	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	9	advmod	_	_
9	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
11	singulos	singulus	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Dist	12	amod	_	_
12	annos	annus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	16	obl	_	_
13	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	16	advmod	_	_
14	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	16	advmod:neg	_	_
15	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	16	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
16	adimpleta	adimpleo	VERB	t|t|-|p|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	38	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
17	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
18	conservata	conseruo	VERB	t|t|-|p|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	16	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
19	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	27	cc	_	_
20	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	27	mark	_	_
21	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
22	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
23	casa	casa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	27	obl	_	_
24	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	25	cc	_	_
25	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	23	conj	_	_
26	foris	foris	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	27	advmod:lmod	_	_
27	exierimus	exeo	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	16	conj	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
28	alibi	alibi	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	30	advmod:lmod	_	_
29	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	30	mark	_	_
30	abitandum	habito	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	27	advcl	_	TraditionalMood=Gerundium
31	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	35	cc	_	_
32	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	35	mark	_	_
33	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	34	case	_	_
34	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Number=Plur|Person=1|PronType=Prs	35	obl	_	_
35	peiorata	peioro	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	16	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
36	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	35	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
37	,	,	PUNCT	Punc	_	16	punct	_	_
38	spondeo	spondeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
39	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	42	det	_	_
40	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	42	det	_	_
41	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	40	fixed	_	_
42	Dammiano	Damianus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	38	nsubj	_	_
43	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	46	cc	_	_
44	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	43	fixed	_	_
45	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	46	det	_	_
46	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	42	conj	_	_
47	conponere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	38	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
48	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	51	det	_	_
49	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	51	det	_	_
50	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	49	fixed	_	_
51	Ambrosius	Ambrosius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	47	obl:arg	_	_
52	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	51	appos	_	_
53	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	55	cc	_	_
54	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	55	case	_	_
55	subcessoribus	successor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	51	conj	_	_
56	tuis	tuus	DET	a|a|2|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	55	det	_	_
57	penam	poena	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	47	obj	_	SpaceAfter=No
58	,	,	PUNCT	Punc	_	60	punct	_	_
59	argentum	argentum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	60	nmod	_	_
60	soledos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	57	conj:expl	_	_
61	quinquaginta	quinquaginta	NUM	m|m|-|-|-|-|-|-|-|-	NumForm=Word|NumType=Card	60	nummod	_	SpaceAfter=No
62	,	,	PUNCT	Punc	_	67	punct	_	_
63	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	67	mark	_	_
64	taliter	taliter	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	67	advmod	_	_
65	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	66	case	_	_
66	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Number=Plur|Person=1|PronType=Prs	67	obl	_	_
67	convenit	conuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	47	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
68	.	.	PUNCT	Punc	_	38	punct	_	_

~~~


