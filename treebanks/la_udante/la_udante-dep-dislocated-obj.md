---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:obj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_udante-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_udante-dep-dislocated-obl.html">dislocated:obl</a></tt>.

4 nodes (0%) are attached to their parents as `dislocated:obj`.

3 instances of `dislocated:obj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.5.

The following 3 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 7 dislocated:obj	color:blue
1	Ut	ut	SCONJ	cs	PronType=Rel	4	mark	_	_
2	que	que	CCONJ	co9	_	26	cc	_	_
3	breviter	breuiter	ADV	r	_	4	advmod	_	_
4	colligam	colligo	VERB	va3cps1	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	26	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
5	,	,	PUNCT	Pu	_	4	punct	_	_
6	quas	qui	PRON	prepfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Rel	8	det	_	_
7	tulit	fero	VERB	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	dislocated:obj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	calamitates	calamitas	NOUN	sfp3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Plur	7	obj	_	_
9	illa	ille	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	10	det	_	_
10	civitas	ciuitas	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
11	gloriosa	gloriosus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	10	amod	_	_
12	in	in	ADP	e	_	13	case	_	_
13	fide	fides	NOUN	sfs5b	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	11	obl	_	_
14	pro	pro	ADP	e	_	15	case	_	_
15	libertate	libertas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	13	nmod	_	_
16	Saguntum	saguntum	PROPN	Sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	10	flat	_	SpaceAfter=No
17	,	,	PUNCT	Pu	_	7	punct	_	_
18	ignominiose	ignominiose	ADV	r	_	25	advmod	_	_
19	vos	tu	PRON	ppp2pma	Case=Acc|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	25	nsubj	_	_
20	eas	is	PRON	ddepfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	25	obj	_	_
21	in	in	ADP	e	_	22	case	_	_
22	perfidia	perfidia	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	25	obl	_	_
23	pro	pro	ADP	e	_	24	case	_	_
24	servitute	seruitus	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	25	obl	_	_
25	subire	subeo	VERB	va5fp	Aspect=Imp|InflClass=LatI2|VerbForm=Inf|Voice=Act	26	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
26	necesse	necesse	ADJ	din	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
27	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
28	.	.	PUNCT	Pu	_	26	punct	_	_

~~~


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
3	tunc	tunc	ADV	r	AdvType=Tim|PronType=Dem	13	advmod:tmod	_	_
4	humanum	humanus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
6	fuerit	sum	AUX	va5crs3	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
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
25	testari	testor	VERB	vd1fp	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Pass	26	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
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


