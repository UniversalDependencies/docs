---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:obj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_udante-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_udante-dep-dislocated-obl.html">dislocated:obl</a></tt>.

3 nodes (0%) are attached to their parents as `dislocated:obj`.

2 instances of `dislocated:obj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.66666666666667.

The following 3 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 32 dislocated:obj	color:blue
1	Ante	ante	ADP	e	_	3	case	_	_
2	quidem	quidem	PART	r	_	8	discourse	_	_
3	Ecclesiam	ecclesia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	8	obl	_	_
4	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	vetus	uetus	ADJ	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	amod	_	_
6	et	et	CCONJ	co	_	7	cc	_	_
7	novum	nouus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	conj	_	_
8	Testamentum	testamentum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Lit|Number=Sing|Proper=Yes	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	14	punct	_	_
10	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	14	nsubj:pass	_	_
11	«	«	PUNCT	Pu	_	14	punct	_	SpaceAfter=No
12	in	in	ADP	e	_	13	case	_	_
13	ecternum	aeternus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	14	obl:tmod	_	_
14	mandatum	mando	VERB	vp1irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	8	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
15	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	»	»	PUNCT	Pu	_	14	punct	_	_
17	ut	ut	SCONJ	r	PronType=Rel	18	mark	_	_
18	ait	aio	VERB	va5-ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
19	Propheta	propheta	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing|Proper=Yes	18	nsubj	_	SpaceAfter=No
20	;	;	PUNCT	Pu	_	21	punct	_	_
21	hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	conj	_	_
22	enim	enim	PART	c	Form=Emp	21	discourse	_	_
23	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	25	obj	_	_
25	dicit	dico	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	csubj:cleft	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
26	Ecclesia	ecclesia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	25	nsubj	_	_
27	loquens	loquor	VERB	vd3ppsfn	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	25	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Praesens
28	ad	ad	ADP	e	_	29	case	_	_
29	sponsum	sponsus	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing|VerbForm=Part	27	obl	_	SpaceAfter=No
30	:	:	PUNCT	Pu	_	32	punct	_	_
31	«	«	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
32	Trahe	traho	VERB	va3mps2	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	21	dislocated:obj	_	TraditionalMood=Imperativus|TraditionalTense=Praesens
33	me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	32	obj	_	_
34	post	post	ADP	e	_	35	case	_	_
35	te	tu	PRON	ppp2sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	32	obl:arg	_	SpaceAfter=No
36	»	»	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
37	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 dislocated:obj	color:blue
1	Et	et	CCONJ	co	_	13	cc	_	_
2	quod	quod	SCONJ	cs	PronType=Rel	7	mark	_	_
3	tunc	tunc	ADV	r	PronType=Dem	13	advmod	_	_
4	humanum	humanus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
6	fuerit	sum	AUX	va5crs3	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
7	felix	felix	ADJ	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	13	dislocated:obj	_	_
8	in	in	ADP	e	_	11	case	_	_
9	pacis	pax	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	11	nmod	_	_
10	universalis	uniuersalis	ADJ	afs2g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Sing	9	amod	_	_
11	tranquillitate	tranquillitas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl	_	_
12	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	13	orphan	_	_
13	ystoriographi	historiographus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	_
14	omnes	omnis	DET	amp2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	13	det	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	17	punct	_	_
16	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	17	orphan	_	_
17	poete	poeta	NOUN	sms1g	Case=Gen|Gender=Masc|InflClass=IndEurA|Number=Sing	13	conj	_	_
18	illustres	illustris	ADJ	amp2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	26	punct	_	_
20	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	25	obj	_	_
21	etiam	etiam	ADV	co	Compound=Yes	26	discourse	_	_
22	scriba	scriba	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing	26	nsubj	_	_
23	mansuetudinis	mansuetudo	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	22	nmod	_	_
24	Cristi	christus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	23	nmod	_	_
25	testari	testor	VERB	vd1fp	Aspect=Imp|VerbForm=Vnoun|Voice=Pass	26	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
26	dignatus	dignor	VERB	vd1irs3	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	13	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
27	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
28	;	;	PUNCT	Pu	_	39	punct	_	_
29	et	et	CCONJ	co	_	39	cc	_	_
30	denique	denique	ADV	r	AdvType=Tim|Form=Emp	39	advmod:tmod	_	_
31	Paulus	paulus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	39	nsubj	_	_
32	«	«	PUNCT	Pu	_	33	punct	_	SpaceAfter=No
33	plenitudinem	plenitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	39	xcomp	_	_
34	temporis	tempus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	33	nmod	_	SpaceAfter=No
35	»	»	PUNCT	Pu	_	33	punct	_	_
36	statum	status	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	39	obj	_	_
37	illum	ille	DET	ddisma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	36	det	_	_
38	felicissimum	felix	ADJ	ams2s	Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	36	amod	_	_
39	appellavit	appello	VERB	va1irs3	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
40	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 43 40 dislocated:obj	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	ad	ad	ADP	e	_	3	case	_	_
3	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obl	_	_
4	dicendum	dico	VERB	vp3*gvsnn	Aspect=Prosp|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Gerundivum
5	per	per	ADP	e	_	6	case	_	_
6	interemptionem	interemptio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	4	obl	_	_
7	eius	is	PRON	ddesng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	6	nmod	_	_
8	quod	quod	SCONJ	presna	PronType=Rel	9	mark	_	_
9	dicunt	dico	VERB	va3ipp3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	Samuelem	samuel	PROPN	Sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	9	obj	_	_
11	Dei	deus	NOUN	Sms2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	12	nmod	_	_
12	vicarium	uicarius	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	9	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	Pu	_	14	punct	_	_
14	quia	quia	SCONJ	cs	PronType=Rel	33	mark	_	_
15	non	non	PART	r	Polarity=Neg	16	advmod:neg	_	_
16	ut	ut	SCONJ	r	PronType=Rel	17	mark	_	_
17	vicarius	uicarius	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	33	advcl:cmp	_	_
18	sed	sed	CCONJ	co	_	19	cc	_	_
19	ut	ut	SCONJ	r	PronType=Rel	20	mark	_	_
20	legatus	legatus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|VerbForm=Part	17	conj	_	_
21	spetialis	specialis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	20	amod	_	_
22	ad	ad	ADP	e	_	23	case	_	_
23	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	20	obl	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	27	punct	_	_
25	sive	siue	CCONJ	co	_	27	cc	_	_
26	nuntius	nuntius	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	27	nsubj	_	_
27	portans	porto	VERB	va1ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	20	conj	_	TraditionalMood=Participium|TraditionalTense=Praesens
28	mandatum	mandatum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	27	obj	_	_
29	Domini	dominus	NOUN	sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing|Proper=Yes	28	nmod	_	_
30	expressum	exprimo	VERB	vp3prsna	Aspect=Perf|Case=Acc|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	28	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
31	,	,	PUNCT	Pu	_	17	punct	_	_
32	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	33	obj	_	_
33	fecit	facio	VERB	va3irs3	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
34	:	:	PUNCT	Pu	_	36	punct	_	_
35	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	36	nsubj	_	_
36	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	advcl:pred	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
37	quia	quia	SCONJ	cs	PronType=Rel	43	mark	_	_
38	quicquid	quisquis	PRON	prisna	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	40	obj	_	_
39	Deus	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	40	nsubj	_	_
40	dixit	dico	VERB	va3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	43	dislocated:obj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
41	,	,	PUNCT	Pu	_	43	punct	_	_
42	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	43	obj	_	_
43	fecit	facio	VERB	va3irs3	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	36	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
44	solum	solus	DET	dpnsa	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Con	43	advcl:pred	_	_
45	et	et	CCONJ	co	_	47	cc	_	_
46	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	47	obj	_	_
47	retulit	refero	VERB	v5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
48	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


