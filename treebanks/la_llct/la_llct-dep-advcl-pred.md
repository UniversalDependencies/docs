---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_llct-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_llct-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_llct-dep-advcl-relcl.html">advcl:relcl</a></tt>.

11 nodes (0%) are attached to their parents as `advcl:pred`.

7 instances of `advcl:pred` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 14.1818181818182.

The following 4 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (6; 55% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (3; 27% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 26 advcl:pred	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	3	advmod:lmod	_	_
2	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	3	obj	_	_
3	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	arcivo	archium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
6	sanctae	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	amod	_	_
7	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	domus	domus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	episcopalis	episcopalis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	13	obj	_	_
12	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	13	discourse	_	_
13	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	obl	_	_
18	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	19	amod	_	_
19	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	26	punct	_	_
21	ambas	ambo	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|NumValue=2|PronType=Tot	26	advcl:pred	_	_
22	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	26	discourse	_	_
23	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	uno	unus	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	25	det	_	_
25	tenore	tenor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
26	conscriptas	conscribo	VERB	t|t|-|p|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
27	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 advcl:pred	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	3	advmod:lmod	_	_
2	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	3	obj	_	_
3	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	arcivo	archium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
6	sanctae	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	amod	_	_
7	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	domus	domus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	episcopalis	episcopalis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	13	obj	_	_
12	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	13	discourse	_	_
13	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	obl	_	_
18	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	19	amod	_	_
19	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	26	punct	_	_
21	ambas	ambo	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|NumValue=2|PronType=Tot	26	advcl:pred	_	_
22	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	26	discourse	_	_
23	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	uno	unus	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	25	det	_	_
25	tenore	tenor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
26	conscriptas	conscribo	VERB	t|t|-|p|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
27	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 11 advcl:pred	color:blue
1	constat	consto	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	me	ego	PRON	p|p|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Auriprandum	Auriprandus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
4	presbiterum	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	_
5	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	_
6	bone	bonus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	amod	_	_
7	memorie	memoria	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	Piruli	Pirulus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	18	punct	_	_
10	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	18	mark	_	_
11	presenti	praesens	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	18	advcl:pred	_	_
12	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
13	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
14	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	15	obl	_	_
15	vendere	uendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	18	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
17	tradere	trado	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	15	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
18	videor	uideo	VERB	v|v|1|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	1	csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
19	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	20	det	_	_
20	Iohanni	Johannes	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	15	obl:arg	_	_
21	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
22	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	_
23	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	24	nmod	_	_
24	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	20	appos	_	_
25	omnis	omnis	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	26	det	_	_
26	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	15	obj	_	_
27	mea	meus	DET	a|a|1|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	26	det	_	_
28	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	29	obj	_	_
29	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	26	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
30	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
31	Vicopelago	Vicopelagus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	29	obl	_	_
32	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	34	cc	_	_
33	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	34	case	_	_
34	gahagio	gahagium	PROPN	Propn|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	31	conj	_	_
35	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	36	case	_	_
36	[Propn]	_	PROPN	Punc	_	34	nmod	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	39	punct	_	_
38	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	39	advmod:emph	_	_
39	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	15	conj	_	_
40	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	42	mark	_	_
41	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	42	advmod:emph	_	_
42	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	39	advcl:cmp	_	SpaceAfter=No
43	,	,	PUNCT	Punc	_	44	punct	_	_
44	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	15	conj	_	_
45	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	47	cc	_	_
46	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	47	case	_	_
47	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	44	conj	_	SpaceAfter=No
48	,	,	PUNCT	Punc	_	51	punct	_	_
49	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	50	advmod	_	_
50	habere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	51	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
51	videor	uideo	VERB	v|v|1|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	44	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
52	,	,	PUNCT	Punc	_	44	punct	_	_
53	culta	cultus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	54	amod	_	_
54	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	44	conj	_	_
55	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	56	cc	_	_
56	inculta	incultus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	53	conj	_	SpaceAfter=No
57	;	;	PUNCT	Punc	_	1	punct	_	_

~~~


