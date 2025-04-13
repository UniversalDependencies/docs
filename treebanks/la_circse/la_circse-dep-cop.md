---
layout: base
title:  'Statistics of cop in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `cop`

This relation is universal.

210 nodes (1%) are attached to their parents as `cop`.

156 instances of `cop` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.74285714285714.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (87; 41% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (65; 31% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (21; 10% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (15; 7% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (9; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (8; 4% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PART.html">PART</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	ars	ars	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	0	root	_	LiLaflcat=n3
2	prima	primus	ADJ	D2	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	1	amod	_	LiLaflcat=n6
3	regni	regnum	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	1	nmod	_	LiLaflcat=n2
4	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
5	posse	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	1	xcomp	_	LASLAVariant=1|LiLaflcat=v6
6	inuidiam	inuidia	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	7	obj	_	LiLaflcat=n1
7	pati	patior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	5	xcomp	_	LiLaflcat=v5

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop	color:blue
1	indigna	indignus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	0	root	_	LiLaflcat=n6
2	te	tu	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	1	obl:arg	_	LiLaflcat=p
3	sunt	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
4	spolia	spolium	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	1	nsubj	_	LiLaflcat=n2
5	si	si	SCONJ	T	_	7	mark	_	LASLAVariant=2|LiLaflcat=i
6	tantum	tantum	DET	I	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|PronType=Dem	7	obj	_	LASLAVariant=1|LiLaflcat=n6
7	refers	refero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	LiLaflcat=v6
8	quantum	quantum	DET	J	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Rel	9	det	_	LASLAVariant=1|LiLaflcat=n6
9	imperatum	impero	VERB	Y1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	7	advcl:cmp	_	LiLaflcat=v1
10	est	sum	AUX	Z1	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LASLAVariant=2|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	eris	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	3	cop	_	LASLAVariant=1|LiLaflcat=v6
2	inter	inter	ADP	R	AdpType=Prep	3	case	_	LiLaflcat=i
3	istos	iste	DET	I	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	0	root	_	LiLaflcat=p
4	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	8	nsubj	_	LASLAVariant=1|LiLaflcat=p
5	tamen	tamen	ADV	M	Degree=Pos	8	advmod	_	LiLaflcat=i
6	nullo	nullus	DET	L	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Neg	7	det	_	LiLaflcat=p
7	stupro	stuprum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	8	obl	_	LiLaflcat=n2
8	laesere	laedo	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	LiLaflcat=v3
9	thalamos	thalamus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	8	obj	_	LiLaflcat=n2

~~~


