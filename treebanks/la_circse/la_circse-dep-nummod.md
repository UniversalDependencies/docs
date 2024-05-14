---
layout: base
title:  'Statistics of nummod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `nummod`

This relation is universal.

40 nodes (0%) are attached to their parents as `nummod`.

33 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.45.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NUM.html">NUM</a></tt> (35; 88% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nummod	color:blue
1	profuge	profugio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v5
2	et	et	CCONJ	S	_	4	cc	_	LASLAVariant=2|LiLaflcat=i
3	obtectus	obtego	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	4	advcl:pred	_	LiLaflcat=v3
4	late	lateo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v2
5	unum	unus	NUM	D1	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card	10	nummod	_	LiLaflcat=n6
6	que	que	CCONJ	S	_	8	cc	_	LiLaflcat=i
7	manibus	manus	NOUN	A4	Case=Dat|Gender=Fem|InflClass=IndEurU|Number=Plur	8	obl:arg	_	LASLAVariant=1|LiLaflcat=n4
8	aufer	aufero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v6
9	Herculeis	herculeus	ADJ	C1	Case=Dat|Degree=Pos|Gender=Fem|InflClass=IndEurA|NameType=Giv|Number=Plur	7	amod	_	LASLAVariant=A|LiLaflcat=n6
10	scelus	scelus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	8	obj	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	dest	desum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
2	una	unus	NUM	D1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Card	4	nummod	_	LiLaflcat=n6
3	numero	numerus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	1	obl:arg	_	LiLaflcat=n2
4	Danais	danais	PROPN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|NameType=Giv|Number=Sing	1	nsubj	_	LASLAVariant=N|LiLaflcat=n3
5	explebo	expleo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v2
6	nefas	nefas	NOUN	A6	Gender=Neut|InflClass=Ind	5	obj	_	LiLaflcat=n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	laudanda	laudo	VERB	B1	Aspect=Prosp|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Gdv|Voice=Pass	2	obj	_	LiLaflcat=v1
2	feci	facio	VERB	B5	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v5
3	iussus	iubeo	VERB	B2	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	2	advcl:pred	_	LiLaflcat=v2
4	hoc	hic	DET	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	6	nsubj	_	LASLAVariant=1|LiLaflcat=p
5	unum	unus	NUM	D1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card	4	nummod	_	LiLaflcat=n6
6	meum	meus	DET	F	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	2	conj	_	LiLaflcat=n6
7	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


