---
layout: base
title:  'Statistics of det:numgov in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-det.html">det</a></tt>.

5 nodes (0%) are attached to their parents as `det:numgov`.

4 instances of `det:numgov` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.8.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (3; 60% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 det:numgov	color:blue
1	Uenethi	uenethi	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	5	nsubj	_	LASLAVariant=N|LiLaflcat=n2
2	multum	multus	DET	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Ind	5	obj	_	LASLAVariant=1|LiLaflcat=n2
3	ex	ex	ADP	R	_	4	case	_	LiLaflcat=i
4	moribus	mos	NOUN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Plur	5	obl	_	LiLaflcat=n3
5	traxerunt	traho	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Perfectum
6	nam	nam	PART	S	_	17	discourse	_	LiLaflcat=i
7	quicquid	quisquis	DET	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	12	det:numgov	_	LASLAVariant=1|LiLaflcat=p
8	inter	inter	ADP	R	_	9	case	_	LiLaflcat=i
9	Peucinos	peucini	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	15	obl:lmod	_	LASLAVariant=N|LiLaflcat=n2
10	Fennos	fenni	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	9	conj	_	LASLAVariant=N|LiLaflcat=n2
11	que	que	CCONJ	S	_	10	cc	_	LiLaflcat=i
12	siluarum	silua	NOUN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Plur	15	nsubj:pass	_	LiLaflcat=n1
13	ac	atque	CCONJ	S	Form=Emp	14	cc	_	LASLAVariant=1|LiLaflcat=i
14	montium	mons	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Plur	12	conj	_	LiLaflcat=n3
15	erigitur	erigo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	17	ccomp:relcl	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	latrociniis	latrocinium	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	17	obl	_	LiLaflcat=n2
17	pererrant	pererro	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LASLAVariant=2|LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:numgov	color:blue
1	quanto	quanto	ADV	N	NumType=Card|PronType=Rel	3	advmod	_	LASLAVariant=1|LiLaflcat=i
2	plus	multum	DET	M	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing|NumType=Card|PronType=Ind	3	det:numgov	_	LASLAVariant=2|LiLaflcat=i
3	propinquorum	propinquus	ADJ	C1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	9	advcl:cmp	_	LiLaflcat=n6
4	quanto	quanto	ADV	N	NumType=Card|PronType=Rel	5	advmod	_	LASLAVariant=1|LiLaflcat=i
5	maior	magnus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Sing	3	conj	_	LiLaflcat=n7
6	affinium	affinis	ADJ	C4	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Plur	7	nmod	_	LASLAVariant=2|LiLaflcat=n7
7	numerus	numerus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nsubj	_	LiLaflcat=n2
8	tanto	tanto	ADV	M	_	9	advmod	_	LiLaflcat=i
9	gratiosior	gratiosus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n7
10	senectus	senectus	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	9	nsubj	_	LASLAVariant=1|LiLaflcat=n3
11	nec	neque	CCONJ	S	Polarity=Neg	12	cc	_	LASLAVariant=2|LiLaflcat=i
12	ulla	ullus	DET	L	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Ind	9	conj	_	LiLaflcat=p
13	orbitatis	orbitas	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	14	nmod	_	LiLaflcat=n3
14	pretia	pretium	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	12	nsubj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 det:numgov	color:blue
1	in	in	ADP	R	_	3	case	_	LiLaflcat=i
2	haec	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	3	det	_	LASLAVariant=1|LiLaflcat=p
3	munera	munus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	5	obl	_	LiLaflcat=n3
4	uxor	uxor	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj:pass	_	LiLaflcat=n3
5	accipitur	accipio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v5|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	atque	atque	CCONJ	S	Form=Emp	13	cc	_	LASLAVariant=1|LiLaflcat=i
7	in	in	ADP	R	_	8	case	_	LiLaflcat=i
8	uicem	uicis	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	13	obl	_	LiLaflcat=n3
9	ipsa	ipse	DET	I	Case=Nom|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	13	nsubj	_	LiLaflcat=p
10	armorum	arma	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Plur	13	obj	_	LiLaflcat=n2
11	aliquid	aliquis	PRON	L	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	10	det:numgov	_	LiLaflcat=p
12	uiro	uir	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	13	obl:arg	_	LiLaflcat=n2
13	affert	affero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
14	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	16	nsubj	_	LASLAVariant=1|LiLaflcat=p
15	maximum	magnus	ADJ	C1	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	16	amod	_	LiLaflcat=n6
16	uinculum	uinculum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	23	ccomp	_	LiLaflcat=n2
17	haec	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	19	nsubj	_	LASLAVariant=1|LiLaflcat=p
18	arcana	arcanus	ADJ	C1	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	19	amod	_	LiLaflcat=n6
19	sacra	sacrum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	16	conj	_	LiLaflcat=n2
20	hos	hic	DET	I	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	22	nsubj	_	LASLAVariant=1|LiLaflcat=p
21	coniugales	coniugalis	ADJ	C4	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur	22	amod	_	LiLaflcat=n7
22	deos	deus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	16	conj	_	LiLaflcat=n2
23	arbitrantur	arbitror	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


