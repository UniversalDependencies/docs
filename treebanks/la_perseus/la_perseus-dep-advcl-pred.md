---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_perseus-dep-advcl-cmp.html">advcl:cmp</a></tt>.

8 nodes (0%) are attached to their parents as `advcl:pred`.

5 instances of `advcl:pred` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.875.

The following 5 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (3; 38% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (2; 25% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advcl:pred	color:blue
1	Ambae	ambo	DET	m-p---fn-	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	12	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	u--------	_	1	punct	_	_
3	videri	video	VERB	v--pnp---	Aspect=Imp|VerbForm=Inf|Voice=Pass	5	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
4	dum	dum	SCONJ	c--------	_	5	mark	_	_
5	volunt	volo	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	LId=volo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	illi	ille	DET	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	7	obl	_	_
7	pares	par	ADJ	a-p---fn-	Case=Nom|Gender=Fem|Number=Plur	3	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	u--------	_	5	punct	_	_
9	Capillos	capillus	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	11	obj	_	_
10	homini	homo	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	11	obl:arg	_	_
11	legere	lego	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	12	xcomp	_	LId=lego2|TraditionalMood=Infinitivus|TraditionalTense=Praesens
12	coepere	coepio	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
13	invicem	invicem	PRON	d--------	Compound=Yes|Number=Plur|PronType=Rcp	11	advcl:pred	_	SpaceAfter=No
14	.	.	PUNCT	u--------	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl:pred	color:blue
1	Ultimus	ulter	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	advcl:pred	_	LId=ulter1
2	inmenso	immensus	ADJ	a-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	amod	_	LId=immensus1
3	restabas	resto	VERB	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=resto1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
4	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
5	Nile	Nilus	PROPN	n-s---mv-	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	SpaceAfter=No|LId=Nilus1
6	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
7	labori	labor	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	3	obl:arg	_	SpaceAfter=No|LId=labor2
8	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

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
12	superant	supero	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
13	que	que	CCONJ	c--------	_	12	cc	_	LId=que1
14	cacumina	cacumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	12	nsubj	_	LId=cacumen1
15	nubes	nubes	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No|LId=nubes1
16	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


