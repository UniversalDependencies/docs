---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_perseus-dep-advcl-cmp.html">advcl:cmp</a></tt>.

7 nodes (0%) are attached to their parents as `advcl:pred`.

4 instances of `advcl:pred` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.14285714285714.

The following 5 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (3; 43% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 14% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advcl:pred	color:blue
1	Ambae	ambo	DET	m-p---fn-	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	12	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	u--------	_	1	punct	_	_
3	videri	video	VERB	v--pnp---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	_
4	dum	dum	SCONJ	c--------	_	5	mark	_	_
5	volunt	volo	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	LId=volo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	illi	ille	DET	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	7	obl	_	_
7	pares	par	ADJ	a-p---fn-	Case=Nom|Gender=Fem|Number=Plur	3	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	u--------	_	5	punct	_	_
9	Capillos	capillus	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	11	obj	_	_
10	homini	homo	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	11	obl:arg	_	_
11	legere	lego	VERB	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	12	xcomp	_	LId=lego2
12	coepere	coepio	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
13	invicem	invicem	PRON	d--------	Compound=Yes|Number=Plur|PronType=Rcp	11	advcl:pred	_	SpaceAfter=No
14	.	.	PUNCT	u--------	_	12	punct	_	_

~~~


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
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	superant	supero	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
13	que	que	CCONJ	c--------	_	12	cc	_	LId=que1
14	cacumina	cacumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	12	nsubj	_	LId=cacumen1
15	nubes	nubes	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No|LId=nubes1
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


