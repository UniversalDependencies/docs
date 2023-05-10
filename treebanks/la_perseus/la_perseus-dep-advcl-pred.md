---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_perseus-dep-advcl-cmp.html">advcl:cmp</a></tt>.

3 nodes (0%) are attached to their parents as `advcl:pred`.

2 instances of `advcl:pred` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 33% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 advcl:pred	color:blue
1	Mons	mons	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	LId=mons1
2	ibi	ibi	ADV	d--------	AdvType=Loc	4	advmod:lmod	_	LId=ibi1
3	verticibus	vertex	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	4	obl	_	LId=vertex1
4	petit	peto	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=peto1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	arduus	arduus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	amod	_	LId=arduus1
6	astra	astrum	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	LId=astrum1
7	duobus	duo	NUM	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	3	nummod	_	SpaceAfter=No|LId=duo1
8	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
9	nomine	nomen	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	10	obl	_	LId=nomen1
10	Parnasus	Parnasus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	advcl:pred	_	SpaceAfter=No|LId=Parnasus1
11	,	,	PUNCT	u--------	_	13	punct	_	LId=comma1
12	que	que	CCONJ	c--------	_	13	cc	_	LId=que1
13	superant	supero	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	LId=supero1|TraditionalMood=Indicativus|TraditionalTense=Praesens
14	cacumina	cacumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	13	nsubj	_	LId=cacumen1
15	nubes	nubes	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	SpaceAfter=No|LId=nubes1
16	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 advcl:pred	color:blue
1	quamvis	quamvis	SCONJ	d--------	_	8	mark	_	LId=quamvis1
2	multa	multus	DET	a-p---na-	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Ind	7	det	_	LId=multus1
3	tibi	tu	PRON	p-s---fd-	Case=Dat|Number=Sing|Person=2|PronType=Prs	8	obl:arg	_	LId=tu1
4	dolor	dolor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	LId=dolor1
5	hic	hic	DET	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	LId=hic1
6	meus	meus	DET	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	_
7	aspera	asper	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	8	obj	_	LId=asper1
8	debet	debeo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl	_	LId=debeo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
10	non	non	PART	d--------	_	14	advmod:neg	_	LId=non1
11	ita	ita	ADV	d--------	_	14	advmod	_	LId=ita1
12	saeva	saevus	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	14	advcl:pred	_	LId=saevus1
13	tamen	tamen	ADV	d--------	_	14	advmod	_	LId=tamen1
14	venerit	venio	VERB	v3srsa---	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=venio1|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
15	ira	ira	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	LId=ira1
16	mea	meus	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	15	det	_	SpaceAfter=No
17	,	,	PUNCT	u--------	_	18	punct	_	LId=comma1
18	ut	ut	SCONJ	c--------	_	23	mark	_	LId=ut1
19	tibi	tu	PRON	p-s---fd-	Case=Dat|Number=Sing|Person=2|PronType=Prs	23	obl:arg	_	LId=tu1
20	sim	sum	AUX	v1spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	cop	_	LId=sum1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
21	merito	mereo	ADV	d--------	_	23	advmod	_	_
22	semper	semper	ADV	d--------	AdvType=Tim	23	advmod:tmod	_	LId=semper1
23	furor	furor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	14	advcl	_	SpaceAfter=No|LId=furor2
24	,	,	PUNCT	u--------	_	30	punct	_	LId=comma1
25	et	et	CCONJ	c--------	_	30	cc	_	LId=et1
26	tua	tuus	DET	p-p---nn-	Case=Nom|Gender=Neut|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	28	det	_	_
27	flendo	fleo	VERB	v---d--b-	Aspect=Prosp|Case=Abl|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	30	advcl	_	TraditionalMood=Gerundium
28	lumina	lumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	30	nsubj	_	LId=lumen1
29	deiectis	deicio	VERB	v-prpafb-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	30	advcl:abs	_	LId=deicio1|TraditionalMood=Participium|TraditionalTense=Perfectum
30	turpia	turpis	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	23	conj	_	LId=turpis1
31	sint	sum	AUX	v3ppsa---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	LId=sum1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
32	lacrimis	lacrima	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	29	nsubj:pass	_	SpaceAfter=No|LId=lacrima1
33	.	.	PUNCT	u--------	_	14	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advcl:pred	color:blue
1	Quale	qualis	DET	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	2	advcl:pred	_	_
2	solet	soleo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	advcl	_	LId=soleo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	silvis	silva	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	obl	_	LId=silva1
4	brumali	brumalis	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	5	amod	_	LId=brumalis1
5	frigore	frigor	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	2	obl	_	LId=frigor1
6	viscum	viscum	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	LId=viscum1
7	fronde	frons	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	obl	_	LId=frons1
8	virere	vireo	VERB	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	LId=vireo1
9	nova	novus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No|LId=novus1
10	,	,	PUNCT	u--------	_	14	punct	_	LId=comma1
11	quod	qui	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	14	obj	_	LId=qui1
12	non	non	PART	d--------	_	15	advmod:neg	_	LId=non1
13	sua	suus	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	15	det	_	_
14	seminat	semino	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	LId=semino1|TraditionalMood=Indicativus|TraditionalTense=Praesens
15	arbos	arbor	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	SpaceAfter=No|LId=arbor1
16	,	,	PUNCT	u--------	_	14	punct	_	LId=comma1
17	et	et	CCONJ	c--------	_	21	cc	_	LId=et1
18	croceo	croceus	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	19	amod	_	LId=croceus1
19	fetu	fetus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	21	obl	_	LId=fetus2
20	teretis	teres	ADJ	a-p---ma-	Case=Acc|Gender=Masc|Number=Plur	22	amod	_	LId=teres1
21	circumdare	circumdo	VERB	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	8	conj	_	LId=circumdo1
22	truncos	truncus	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	21	obj	_	SpaceAfter=No|LId=truncus2
23	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
24	talis	talis	DET	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	LId=talis1
25	erat	sum	AUX	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
26	species	species	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	24	nsubj	_	LId=species1
27	auri	aurum	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	26	nmod	_	LId=aurum1
28	frondentis	frondeo	VERB	v-sppang-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	27	amod	_	LId=frondeo1|TraditionalMood=Participium|TraditionalTense=Praesens
29	opaca	opacus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	30	amod	_	LId=opacus1
30	ilice	ilex	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	28	obl	_	SpaceAfter=No|LId=ilex1
31	,	,	PUNCT	u--------	_	34	punct	_	LId=comma1
32	sic	sic	ADV	d--------	_	34	advmod	_	LId=sic1
33	leni	lenis	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	36	amod	_	LId=lenis1
34	crepitabat	crepito	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	24	conj	_	LId=crepito1|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
35	brattea	bractea	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	34	nsubj	_	LId=bractea1
36	vento	ventus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	34	obl	_	SpaceAfter=No|LId=ventus1
37	.	.	PUNCT	u--------	_	24	punct	_	LId=punc1

~~~


