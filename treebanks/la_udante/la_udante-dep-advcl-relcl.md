---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_udante-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_udante-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_udante-dep-advcl-pred.html">advcl:pred</a></tt>.

30 nodes (0%) are attached to their parents as `advcl:relcl`.

17 instances of `advcl:relcl` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.8.

The following 5 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (25; 83% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 advcl:relcl	color:blue
1	Sed	sed	CCONJ	co	_	8	cc	_	_
2	cum	cum	SCONJ	cs	PronType=Rel	5	mark	_	_
3	sint	sum	AUX	va5cpp3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	plures	multus	DET	amp1nc	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurI|Number=Plur|NumType=Card|PronType=Ind	5	det	_	_
5	celi	caelus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	Pu	_	5	punct	_	_
7	adhuc	adhuc	ADV	r	AdvType=Tim|Compound=Yes	8	advmod:tmod	_	_
8	restat	resto	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	inquirere	inquiro	VERB	va3fp	Aspect=Imp|VerbForm=Vnoun|Voice=Act	8	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	in	in	ADP	e	_	11	case	_	_
11	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	19	obl	_	SpaceAfter=No
12	,	,	PUNCT	Pu	_	11	punct	_	_
13	tanquam	tamquam	SCONJ	r	Compound=Yes|PronType=Rel	16	mark	_	_
14	in	in	ADP	e	_	16	case	_	_
15	propriam	proprius	ADJ	afs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	amod	_	_
16	causam	causa	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	19	advcl:cmp	_	SpaceAfter=No
17	,	,	PUNCT	Pu	_	16	punct	_	_
18	habeat	habeo	VERB	va2cps3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	reduci	reduco	VERB	vp3fp	Aspect=Imp|VerbForm=Vnoun|Voice=Pass	18	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
20	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 19 advcl:relcl	color:blue
1	Propter	propter	ADP	e	_	2	case	_	_
2	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl	_	_
3	etiam	etiam	ADV	co	Compound=Yes	8	discourse	_	_
4	nec	neque	CCONJ	co	Polarity=Neg	8	cc	_	_
5	numerus	numerus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	xcomp	_	_
6	impar	impar	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing|Polarity=Neg	5	amod	_	_
7	carminum	carmen	NOUN	snp3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Plur	5	nmod	_	_
8	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	5	cop	_	TraditionalTense=Praesens
10	ubi	ubi	ADV	r	AdvType=Loc|PronType=Rel	11	advmod:lmod	_	_
11	frons	frons	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	8	advcl:relcl	_	_
12	vel	uel	CCONJ	co	_	13	cc	_	_
13	cauda	cauda	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	11	conj	_	_
14	non	non	PART	r	Polarity=Neg	11	advmod:neg	_	_
15	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	;	;	PUNCT	Pu	_	17	punct	_	_
17	sed	sed	CCONJ	co	_	32	cc	_	_
18	ubi	ubi	ADV	r	AdvType=Loc|PronType=Rel	19	advmod:lmod	_	_
19	hee	hic	DET	ddipfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Dem	32	advcl:relcl	_	_
20	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
21	,	,	PUNCT	Pu	_	23	punct	_	_
22	vel	uel	CCONJ	co	_	23	cc	_	_
23	altera	alter	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Con	19	conj	_	_
24	sola	solus	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Con	23	advcl:pred	_	SpaceAfter=No
25	,	,	PUNCT	Pu	_	19	punct	_	_
26	pari	par	ADJ	ams2b	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Sing	29	amod	_	_
27	et	et	CCONJ	co	_	28	cc	_	_
28	impari	impar	ADJ	ams2b	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Sing|Polarity=Neg	26	conj	_	_
29	numero	numerus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	31	obl	_	_
30	in	in	ADP	e	_	31	case	_	_
31	carminibus	carmen	NOUN	snp3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Plur	33	obl:arg	_	_
32	licet	licet	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
33	uti	utor	VERB	vd3fp	Aspect=Imp|VerbForm=Vnoun|Voice=Pass	32	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
34	ad	ad	ADP	e	_	35	case	_	_
35	libitum	libitus	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	33	obl	_	SpaceAfter=No
36	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 28 advcl:relcl	color:blue
1	Circuit	circueo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	hec	hic	DET	ddipna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	1	obj	_	_
3	humilis	humilis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	15	amod	_	_
4	et	et	CCONJ	co	_	5	cc	_	_
5	tectus	tego	VERB	vp3prsmn	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	3	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	fronde	frons	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	5	obl:agent	_	_
7	saligna	salignus	ADJ	afs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	_
8	perpetuis	perpetuus	ADJ	afp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	9	amod	_	_
9	undis	unda	NOUN	sfp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	14	obl	_	_
10	a	a	ADP	e	_	12	case	_	_
11	summo	summus	ADJ	ams1bs	Case=Abl|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	12	amod	_	_
12	margine	margo	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	14	obl	_	_
13	ripas	ripa	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	14	obj	_	_
14	rorans	roro	VERB	va1ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	15	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
15	alveolus	alueolus	NOUN	sms2n	Case=Nom|Degree=Dim|Gender=Masc|InflClass=IndEurO|Number=Sing	1	nsubj	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	17	punct	_	_
17	qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	32	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	Pu	_	17	punct	_	_
19	quas	qui	PRON	prepfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Rel	22	obj	_	_
20	mons	mons	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	22	nsubj	_	_
21	desuper	desuper	ADV	r	Compound=Yes	22	advmod:lmod	_	_
22	edit	edo	VERB	va3ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
23	,	,	PUNCT	Pu	_	22	punct	_	_
24	sponte	sponte	ADV	r	_	32	advmod	_	_
25	viam	uia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	32	xcomp	_	SpaceAfter=No
26	,	,	PUNCT	Pu	_	25	punct	_	_
27	qua	qui	PRON	r	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	28	obl:lmod	_	_
28	mitis	mitis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	32	advcl:relcl	_	_
29	erat	sum	AUX	va5iis3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	28	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
30	,	,	PUNCT	Pu	_	28	punct	_	_
31	se	sui	PRON	ppp3sna	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	32	obj	_	_
32	fecit	facio	VERB	va3irs3	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
33	aquarum	aqua	NOUN	sfp1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Plur	25	nmod	_	SpaceAfter=No
34	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


