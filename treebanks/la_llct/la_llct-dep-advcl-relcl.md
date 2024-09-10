---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_llct-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_llct-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_llct-dep-advcl-pred.html">advcl:pred</a></tt>.

74 nodes (0%) are attached to their parents as `advcl:relcl`.

48 instances of `advcl:relcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.5810810810811.

The following 5 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (50; 68% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (17; 23% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (4; 5% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 advcl:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
2	quando	quando	SCONJ	d|d|-|-|-|-|-|-|-|-	PronType=Rel	12	mark	_	_
3	vos	uos	PRON	p|p|2|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	12	nsubj	_	_
4	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
5	misso	missus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	conj	_	_
6	vestro	uester	DET	a|a|2|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	5	det	_	_
7	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	12	advmod	_	_
8	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
9	vindemia	uindemia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	_
10	super	super	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	palmentum	palmentum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	12	obl	_	_
12	veneritis	uenio	VERB	v|v|2|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	16	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
13	,	,	PUNCT	Punc	_	12	punct	_	_
14	bene	bene	ADV	d|d|-|-|-|-|-|-|-|-	_	15	advmod	_	_
15	gubernare	guberno	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	16	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
17	.	.	PUNCT	Punc	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 advcl:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	ideo	ideo	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
3	nobis	nos	PRON	p|p|1|p|-|-|-|m|d|-	Case=Dat|Number=Plur|Person=1|PronType=Prs	6	obl:arg	_	_
4	paruit	pareo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	6	cop	_	_
6	rectum	rectus	ADJ	a|a|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	4	xcomp	_	_
7	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	12	mark	_	_
8	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	fixed	_	_
9	omnibus	omnis	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Tot	12	det	_	_
10	nobiscum	nobiscum	NOUN	p|p|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	12	obl	_	_
11	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	12	advmod	_	_
12	adesentibus	adsum	VERB	t|t|-|p|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	6	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
13	,	,	PUNCT	Punc	_	16	punct	_	_
14	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	16	advmod	_	_
15	ei	is	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	obl:arg	_	_
16	renuntiavimus	renuntio	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
17	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	34	mark	_	SpaceAfter=No
18	,	,	PUNCT	Punc	_	17	punct	_	_
19	iuxta	iuxta	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
20	ipsum	ipse	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	21	det	_	_
21	preceptum	praeceptum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	33	obl	_	_
22	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	26	obj	_	_
23	domnus	domnus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	24	nmod	_	_
24	imperator	imperator	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	26	nsubj	_	_
25	ei	is	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	obl:arg	_	_
26	concesserat	concedo	VERB	v|v|3|s|l|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	21	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Plusquamperfectum
27	,	,	PUNCT	Punc	_	21	punct	_	_
28	predictis	praedictus	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Dem	29	det	_	_
29	ecclesiis	ecclesia	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	33	obl:arg	_	_
30	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
31	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	29	nmod	_	_
32	eorum	is	PRON	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	31	nmod	_	_
33	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	34	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
34	deberent	debeo	VERB	v|v|3|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	ccomp	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
35	partem	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	34	nsubj	_	_
36	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	35	nmod	_	_
37	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	38	amod	_	_
38	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	36	nmod	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	43	punct	_	_
40	cuius	qui	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Ind	41	det	_	_
41	proprietas	proprietas	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	43	xcomp	_	_
42	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	41	cop	_	_
43	videbatur	uideo	VERB	v|v|3|s|i|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	35	acl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
44	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 20 advcl:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	11	cc	_	_
2	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
3	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	via	uia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	11	obl	_	_
5	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	6	nsubj	_	_
6	percurrit	percurro	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
8	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	area	area	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
10	licentiam	licentia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
11	abeamus	habeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	intrandi	intro	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	10	acl:relcl	_	TraditionalMood=Gerundium
13	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
14	exeundi	exeo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	12	conj	_	TraditionalMood=Participium|TraditionalTense=Praesens
15	quomodo	quomodo	SCONJ	d|d|-|-|-|-|-|-|-|-	_	20	mark	_	_
16	cui	qui	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	20	obl:arg	_	_
17	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	nobis	nos	PRON	p|p|1|p|-|-|-|m|b|-	Case=Abl|Number=Plur|Person=1|PronType=Prs	16	nmod	_	_
19	autilitas	utilitas	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	20	nsubj	_	_
20	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	12	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
21	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


