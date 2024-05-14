---
layout: base
title:  'Statistics of nmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `nmod`

This relation is universal.

857 nodes (5%) are attached to their parents as `nmod`.

475 instances of `nmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61610268378063.

The following 16 pairs of parts of speech are connected with `nmod`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (585; 68% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (146; 17% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (29; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (19; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (14; 2% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	quae	quis	PRON	K	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Int	4	det	_	LASLAVariant=1|LiLaflcat=p
2	fera	ferus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	4	amod	_	LASLAVariant=2|LiLaflcat=n6
3	tyranni	tyrannus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nmod	_	LiLaflcat=n2
4	iura	ius	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	6	nsubj	_	LASLAVariant=1|LiLaflcat=n3
5	uiolento	uiolentus	ADJ	C1	Case=Dat|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	8	amod	_	LiLaflcat=n6
6	queant	queo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v6
7	nocere	noceo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	6	xcomp	_	LiLaflcat=v2
8	iuueni	iuuenis	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Sing	7	obl:arg	_	LASLAVariant=1|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	inueni	inuenio	VERB	B4	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4
2	diem	dies	NOUN	A5	Case=Acc|Gender=Masc|InflClass=IndEurE|Number=Sing	1	obj	_	LiLaflcat=n5
3	inuisa	inuisus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	LASLAVariant=1|LiLaflcat=n6
4	quo	qui	PRON	J	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:tmod	_	LASLAVariant=1|LiLaflcat=p
5	nos	nos	PRON	E	Case=Acc|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	8	obj	_	LiLaflcat=p
6	Herculis	hercules	PROPN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	7	nmod	_	LASLAVariant=N|LiLaflcat=n3
7	uirtus	uirtus	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	LiLaflcat=n3
8	iuuet	iuuo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod	color:blue
1	causa	causa	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	4	nsubj	_	LiLaflcat=n1
2	ueniendi	uenio	VERB	B4	Aspect=Prosp|Case=Gen|Degree=Pos|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Ger|Voice=Pass	1	acl	_	LiLaflcat=v4
3	fuit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	LASLAVariant=1|LiLaflcat=v6
4	gratari	grator	VERB	B1	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	0	root	_	LiLaflcat=v1
5	amico	amicus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	4	obl:arg	_	LASLAVariant=1|LiLaflcat=n2
6	cuius	qui	PRON	J	Case=Gen|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Rel	8	nmod	_	LASLAVariant=1|LiLaflcat=p
7	impulsum	impello	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	9	obj	_	LiLaflcat=v3
8	manu	manus	NOUN	A4	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	9	obl	_	LASLAVariant=1|LiLaflcat=n4
9	cecidit	cado	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	LiLaflcat=v3
10	decenni	decennis	ADJ	C4	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	11	amod	_	LiLaflcat=n7
11	Marte	mars	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Rel|Number=Sing	12	obl	_	LASLAVariant=N|LiLaflcat=n3
12	concussum	concutio	VERB	B5	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	13	acl	_	LiLaflcat=v5
13	Ilium	ilium	PROPN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	9	nsubj	_	LASLAVariant=N|LiLaflcat=n2

~~~


