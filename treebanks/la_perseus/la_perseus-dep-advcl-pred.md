---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_perseus-dep-advcl-cmp.html">advcl:cmp</a></tt>.

13 nodes (0%) are attached to their parents as `advcl:pred`.

9 instances of `advcl:pred` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.46153846153846.

The following 8 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 23% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (3; 23% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (2; 15% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl:pred	color:blue
1	Patriciorum	patricius	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
2	numerum	numerus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
3	auxi	augeo	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	consul	consul	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	advcl:pred	_	_
5	quintum	quintum	ADV	a-s---ma-	NumType=Ord	4	advmod	_	LId=quintus1
6	iussu	iussus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	3	obl	_	LId=jussus2
7	populi	populus	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	LId=populus1
8	et	et	CCONJ	c--------	_	9	cc	_	_
9	senatus	senatus	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


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


