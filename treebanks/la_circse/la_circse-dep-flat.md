---
layout: base
title:  'Statistics of flat in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `flat`

This relation is universal.
There are 3 language-specific subtypes of `flat`: <tt><a href="la_circse-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_circse-dep-flat-name.html">flat:name</a></tt>, <tt><a href="la_circse-dep-flat-redup.html">flat:redup</a></tt>.

11 nodes (0%) are attached to their parents as `flat`.

11 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72727272727273.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (4; 36% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-NUM.html">NUM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 flat	color:blue
1	igitur	igitur	PART	S	_	10	discourse	_	LiLaflcat=i
2	inter	inter	ADP	R	_	4	case	_	LiLaflcat=i
3	Hercyniam	hercynius	ADJ	C1	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	4	amod	_	LASLAVariant=A|LiLaflcat=n6
4	siluam	silua	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	10	orphan	_	LiLaflcat=n1
5	Rhenum	rhenus	PROPN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	4	conj	_	LASLAVariant=N|LiLaflcat=n2
6	que	que	CCONJ	S	_	5	cc	_	LiLaflcat=i
7	et	et	CCONJ	S	_	8	cc	_	LASLAVariant=2|LiLaflcat=i
8	Moenum	moenus	PROPN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	5	conj	_	LASLAVariant=N|LiLaflcat=n2
9	amnes	amnis	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur	5	flat	_	LiLaflcat=n3
10	Heluetii	heluetius	ADJ	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	0	root	_	LASLAVariant=N|LiLaflcat=n2
11	ulteriora	ulteriora	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	16	obj	_	LiLaflcat=n3
12	Boii	boii	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	16	nsubj	_	LASLAVariant=N|LiLaflcat=n2
13	Gallica	gallicus	ADJ	C1	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Nat|Number=Sing	15	amod	_	LASLAVariant=A|LiLaflcat=n6
14	utraque	uterque	DET	L	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	15	det	_	LiLaflcat=p
15	gens	gens	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	10	appos	_	LiLaflcat=n3
16	tenuere	teneo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	_	LiLaflcat=v2|TraditionalMood=Indicativus|TraditionalTense=Perfectum

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	ex	ex	ADP	R	_	2	case	_	LiLaflcat=i
2	quo	qui	PRON	J	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	9	obl	_	LASLAVariant=1|LiLaflcat=p
3	si	si	SCONJ	T	_	9	mark	_	LASLAVariant=2|LiLaflcat=i
4	ad	ad	ADP	R	_	8	case	_	LASLAVariant=2|LiLaflcat=i
5	alterum	alter	DET	L	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	8	det	_	LiLaflcat=p
6	imperatoris	imperator	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	8	nmod	_	LiLaflcat=n3
7	Traiani	traianus	PROPN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	6	flat	_	LASLAVariant=N|LiLaflcat=n2
8	consulatum	consulatus	NOUN	A4	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	9	obl	_	LiLaflcat=n4
9	computemus	computo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	LiLaflcat=v1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	ducenti	ducenti	NUM	D1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur|NumForm=Word|NumType=Card	14	nummod	_	LiLaflcat=n6
11	ferme	ferme	ADV	M	_	15	advmod	_	LiLaflcat=i
12	et	et	CCONJ	S	_	13	cc	_	LASLAVariant=2|LiLaflcat=i
13	decem	decem	NUM	D1	NumForm=Word|NumType=Card	10	conj	_	LiLaflcat=n
14	anni	annus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	15	nsubj:pass	_	LiLaflcat=n2
15	colliguntur	colligo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LASLAVariant=3|LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	tam	tam	ADV	M	PronType=Dem	17	advmod	_	LiLaflcat=i
17	diu	diu	ADV	M	AdvType=Tim	19	advmod:tmod	_	LiLaflcat=i
18	Germania	germania	PROPN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	19	nsubj:pass	_	LASLAVariant=N|LiLaflcat=n1
19	uincitur	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	conj	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 flat	color:blue
1	ualidiores	ualidus	ADJ	C1	Case=Acc|Degree=Cmp|Gender=Fem|InflClass=IndEurX|Number=Plur	10	ccomp	_	LiLaflcat=n7
2	olim	olim	ADV	M	AdvType=Tim	1	advmod:tmod	_	LiLaflcat=i
3	Gallorum	gallus	ADJ	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	4	nmod	_	LASLAVariant=N|LiLaflcat=n2
4	res	res	NOUN	A5	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Plur	1	nsubj	_	LiLaflcat=n5
5	fuisse	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|VerbForm=Inf	1	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Infinitivus|TraditionalTense=Perfectum
6	summus	superus	ADJ	C1	Case=Nom|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	10	nsubj	_	LiLaflcat=n6
7	auctorum	auctor	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	6	obl	_	LiLaflcat=n3
8	Diuus	diuus	ADJ	C1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	9	amod	_	LASLAVariant=A|LiLaflcat=n6
9	Iulius	iulius	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	6	flat	_	LASLAVariant=N|LiLaflcat=n2
10	tradit	trado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	eo	eo	ADV	M	_	13	advmod	_	LASLAVariant=3|LiLaflcat=i
12	que	que	CCONJ	S	_	13	cc	_	LiLaflcat=i
13	credibile	credibilis	ADJ	C4	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	10	conj	_	LiLaflcat=n7
14	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
15	etiam	etiam	ADV	M	Compound=Yes	16	advmod:emph	_	LiLaflcat=i
16	Gallos	gallus	ADJ	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	19	nsubj	_	LASLAVariant=N|LiLaflcat=n2
17	in	in	ADP	R	_	18	case	_	LiLaflcat=i
18	Germaniam	germania	PROPN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	19	obl:lmod	_	LASLAVariant=N|LiLaflcat=n1
19	transgressos	transgredior	VERB	Y5	Aspect=Perf|Case=Acc|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	13	csubj	_	LiLaflcat=v5|Tac=esse|TraditionalMood=Participium|TraditionalTense=Perfectum

~~~


