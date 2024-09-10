---
layout: base
title:  'Statistics of mark in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `mark`

This relation is universal.

384 nodes (2%) are attached to their parents as `mark`.

374 instances of `mark` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05989583333333.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (276; 72% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (55; 14% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (27; 7% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (8; 2% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	monstra	monstrum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	2	obj	_	LiLaflcat=n2
2	superauit	supero	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
3	prius	prius	ADV	M	Degree=Pos	2	advmod:tmod	_	LiLaflcat=i
4	quam	quam	SCONJ	T	_	6	mark	_	LiLaflcat=i
5	nosse	nosco	VERB	B3	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	6	xcomp	_	LiLaflcat=v3
6	posset	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl:cmp	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	colunt	colo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=2|LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	discreti	discerno	VERB	B3	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	advcl:pred	_	LiLaflcat=v3|TraditionalMood=Participium|TraditionalTense=Perfectum
3	ac	atque	CCONJ	S	Form=Emp	4	cc	_	LASLAVariant=1|LiLaflcat=i
4	diuersi	diuersus	ADJ	C1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	2	conj	_	LiLaflcat=n6
5	ut	ut	SCONJ	N	PronType=Rel	6	mark	_	LASLAVariant=1|LiLaflcat=i
6	fons	fons	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	1	advcl	_	LiLaflcat=n3
7	ut	ut	SCONJ	N	PronType=Rel	8	mark	_	LASLAVariant=1|LiLaflcat=i
8	campus	campus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	6	conj	_	LASLAVariant=1|LiLaflcat=n2
9	ut	ut	SCONJ	N	PronType=Rel	11	mark	_	LASLAVariant=1|LiLaflcat=i
10	nemus	nemus	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	11	nsubj	_	LiLaflcat=n3
11	placuit	placeo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	LiLaflcat=v2|TraditionalMood=Indicativus|TraditionalTense=Perfectum

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	ut	ut	SCONJ	T	_	2	mark	_	LASLAVariant=4|LiLaflcat=i
2	inultus	inultus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
3	ego	ego	PRON	E	Case=Nom|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LiLaflcat=p
4	sim	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


