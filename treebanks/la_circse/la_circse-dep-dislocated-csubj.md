---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `dislocated`: <tt><a href="la_circse-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>.

4 nodes (0%) are attached to their parents as `dislocated:csubj`.

4 instances of `dislocated:csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75.

The following 3 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dislocated:csubj	color:blue
1	equestrium	equester	ADJ	C3	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur	3	amod	_	LiLaflcat=n7
2	sane	sane	ADV	M	_	5	advmod	_	LiLaflcat=i
3	uirium	uis	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur	5	nmod	_	LiLaflcat=n3
4	id	is	PRON	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	LiLaflcat=p
5	proprium	proprius	ADJ	C1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
6	cito	cito	ADV	M	_	7	advmod	_	LASLAVariant=2|LiLaflcat=i
7	parare	paro	VERB	B1	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	5	dislocated:csubj	_	LASLAVariant=2|LiLaflcat=v1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
8	uictoriam	uictoria	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	7	obj	_	LiLaflcat=n1
9	cito	cito	ADV	M	_	10	advmod	_	LASLAVariant=2|LiLaflcat=i
10	cedere	cedo	VERB	B3	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	7	conj	_	LASLAVariant=1|LiLaflcat=v3|TraditionalMood=Infinitivus|TraditionalTense=Praesens
11	uelocitas	uelocitas	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	13	nsubj	_	LiLaflcat=n3
12	iuxta	iuxta	ADP	R	_	13	case	_	LASLAVariant=2|LiLaflcat=i
13	formidinem	formido	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	5	conj	_	LASLAVariant=1|LiLaflcat=n3
14	cunctatio	cunctatio	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	15	nsubj	_	LiLaflcat=n3
15	propior	propior	ADJ	C	Case=Nom|Degree=Cmp|Gender=Fem|InflClass=IndEurX|Number=Sing	13	conj	_	LiLaflcat=null
16	constantiae	constantia	NOUN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	15	obl:arg	_	LiLaflcat=n1
17	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 dislocated:csubj	color:blue
1	id	is	PRON	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	LiLaflcat=p
2	praecipuum	praecipuus	ADJ	C1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	LiLaflcat=n6
3	uirtutis	uirtus	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	6	nmod	_	LiLaflcat=n3
4	ac	atque	CCONJ	S	Form=Emp	5	cc	_	LASLAVariant=1|LiLaflcat=i
5	uirium	uis	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur	3	conj	_	LiLaflcat=n3
6	argumentum	argumentum	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n2
7	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	quod	quod	SCONJ	T	PronType=Rel	15	mark	_	LASLAVariant=2|LiLaflcat=i
9	ut	ut	SCONJ	T	PronType=Rel	11	mark	_	LASLAVariant=4|LiLaflcat=i
10	superiores	superus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Plur	11	advcl:pred	_	LiLaflcat=n7
11	agant	ago	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	LiLaflcat=v3|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	non	non	PART	P	Polarity=Neg	15	advmod:neg	_	LiLaflcat=i
13	per	per	ADP	R	_	14	case	_	LiLaflcat=i
14	iniurias	iniuria	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	15	obl	_	LiLaflcat=n1
15	assequuntur	assequor	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	dislocated:csubj	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	prompta	promptus	ADJ	C1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	18	advcl:pred	_	LASLAVariant=2|LiLaflcat=n6
17	tamen	tamen	ADV	M	Form=Emp|PronType=Dem	18	advmod	_	LiLaflcat=i
18	omnibus	omnis	DET	L	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	6	conj	_	LiLaflcat=n7
19	arma	arma	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	18	nsubj	_	LiLaflcat=n2
20	ac	atque	CCONJ	S	_	24	cc	_	LASLAVariant=1|LiLaflcat=i
21	si	si	SCONJ	T	_	23	mark	_	LASLAVariant=2|LiLaflcat=i
22	res	res	NOUN	A5	Case=Nom|Gender=Fem|InflClass=IndEurE|Number=Sing	23	nsubj	_	LiLaflcat=n5
23	poscat	posco	VERB	B3	Aspect=Inch|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	advcl	_	LiLaflcat=v3|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
24	exercitus	exercitus	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	19	conj	_	LASLAVariant=1|LiLaflcat=n4
25	plurimum	multus	DET	C1	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Ind	24	amod	_	LiLaflcat=n6
26	uirorum	uir	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	25	obl	_	LiLaflcat=n2
27	equorum	equus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	26	conj	_	LiLaflcat=n2
28	que	que	CCONJ	S	_	27	cc	_	LiLaflcat=i
29	et	et	CCONJ	S	_	31	cc	_	LASLAVariant=2|LiLaflcat=i
30	quiescentibus	quiesco	VERB	B3	Aspect=Inch|Case=Abl|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	31	advcl:abs	_	LiLaflcat=v3|TraditionalMood=Participium
31	eadem	idem	DET	I	Case=Nom|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	6	conj	_	LiLaflcat=p
32	fama	fama	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	31	nsubj	_	LiLaflcat=n1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 dislocated:csubj	color:blue
1	funerum	funus	NOUN	A3	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Plur	3	nmod	_	LiLaflcat=n3
2	nulla	nullus	DET	L	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|Polarity=Neg|PronType=Ind	3	det	_	LiLaflcat=p
3	ambitio	ambitio	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3
4	id	is	PRON	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	6	obj	_	LiLaflcat=p
5	solum	solus	DET	L	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Con	4	det	_	LiLaflcat=p
6	obseruatur	obseruo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	ut	ut	SCONJ	T	PronType=Rel	13	mark	_	LASLAVariant=4|LiLaflcat=i
8	corpora	corpus	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Plur	13	nsubj:pass	_	LiLaflcat=n3
9	clarorum	clarus	ADJ	C1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	10	amod	_	LiLaflcat=n6
10	uirorum	uir	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	8	nmod	_	LiLaflcat=n2
11	certis	certus	ADJ	C1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	12	amod	_	LiLaflcat=n6
12	lignis	lignum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	13	obl	_	LiLaflcat=n2
13	crementur	cremo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	dislocated:csubj	_	LiLaflcat=v1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens

~~~


