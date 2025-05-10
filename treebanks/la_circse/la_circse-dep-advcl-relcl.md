---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_circse-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_circse-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_circse-dep-advcl-pred.html">advcl:pred</a></tt>.

36 nodes (0%) are attached to their parents as `advcl:relcl`.

21 instances of `advcl:relcl` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.36111111111111.

The following 11 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (19; 53% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (5; 14% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 advcl:relcl	color:blue
1	misce	misceo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
2	cruorem	cruor	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	1	obj	_	LiLaflcat=n3
3	perde	perdo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v3
4	pereundo	pereo	VERB	B6	Aspect=Prosp|Case=Abl|Degree=Pos|InflClass=LatAnom|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Ger|Voice=Pass	3	advcl	_	LASLAVariant=1|LiLaflcat=v6
5	uirum	uir	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	3	obj	_	LiLaflcat=n2
6	mors	mors	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	1	conj	_	LiLaflcat=n3
7	misera	miser	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	LiLaflcat=n6
8	non	non	PART	P	Polarity=Neg	6	advmod:neg	_	LiLaflcat=i
9	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	LASLAVariant=1|LiLaflcat=v6
10	commori	commorior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	6	csubj	_	LiLaflcat=v5
11	cum	cum	ADP	R	AdpType=Prep	12	case	_	LASLAVariant=2|LiLaflcat=i
12	quo	qui	PRON	J	Case=Abl|Gender=Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Rel	13	obl	_	LASLAVariant=1|LiLaflcat=p
13	uelis	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl:relcl	_	LASLAVariant=3|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 advcl:relcl	color:blue
1	frondifera	frondifer	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	3	amod	_	LiLaflcat=n6
2	sanctae	sanctus	ADJ	C1	Case=Gen|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	LiLaflcat=n6
3	nemora	nemus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	5	obj	_	LiLaflcat=n3
4	Castaliae	castalia	PROPN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	3	nmod	_	LASLAVariant=N|LiLaflcat=n1
5	petens	peto	VERB	B3	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem,Masc,Neut|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	6	advcl:pred	_	LiLaflcat=v3
6	calcauit	calco	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
7	artis	artus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	9	amod	_	LASLAVariant=2|LiLaflcat=n6
8	obsitum	obsero	VERB	B3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	10	acl	_	LASLAVariant=3|LiLaflcat=v3
9	dumis	dumus	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	8	obl	_	LiLaflcat=n2
10	iter	iter	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	6	obj	_	LiLaflcat=n3
11	trigemina	tergeminus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	17	amod	_	LiLaflcat=n6
12	qua	qua	SCONJ	N	PronType=Rel	14	mark	_	LASLAVariant=1|LiLaflcat=i
13	se	sui	PRON	G	Case=Acc|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	14	obj	_	LASLAVariant=1|LiLaflcat=p
14	spargit	spargo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl:relcl	_	LASLAVariant=2|LiLaflcat=v3
15	in	in	ADP	R	AdpType=Prep	16	case	_	LiLaflcat=i
16	campos	campus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	14	obl:lmod	_	LASLAVariant=1|LiLaflcat=n2
17	uia	uia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	14	nsubj	_	LiLaflcat=n1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 advcl:relcl	color:blue
1	uictrice	uictrix	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	2	amod	_	LASLAVariant=1|LiLaflcat=n3
2	dextra	dextera	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	3	obl:agent	_	LiLaflcat=n1
3	fusus	fundo	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	_	LASLAVariant=2|LiLaflcat=v3
4	aduerso	aduersus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	8	amod	_	LASLAVariant=1|LiLaflcat=n6
5	Lycus	lycus	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	7	nsubj	_	LASLAVariant=N|LiLaflcat=n2
6	terram	terra	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	7	obj	_	LiLaflcat=n1
7	cecidit	caedo	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
8	ore	os	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing	7	obl	_	LASLAVariant=1|LiLaflcat=n3
9	tum	tum	ADV	M	Degree=Pos	14	advmod:tmod	_	LiLaflcat=i
10	quisquis	quisquis	DET	J	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Rel	11	det	_	LASLAVariant=1|LiLaflcat=p
11	comes	comes	NOUN	A3	Case=Nom|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	14	advcl:relcl	_	LiLaflcat=n3
12	fuerat	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	11	cop	_	LASLAVariant=1|LiLaflcat=v6
13	tyranni	tyrannus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	11	nmod	_	LiLaflcat=n2
14	iacuit	iaceo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	LiLaflcat=v2
15	et	et	ADV	M	Degree=Pos	17	advmod:emph	_	LASLAVariant=1|LiLaflcat=i
16	poenae	poena	NOUN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	17	nmod	_	LiLaflcat=n1
17	comes	comes	NOUN	A3	Case=Nom|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	14	advcl:pred	_	LiLaflcat=n3

~~~


