---
layout: base
title:  'Statistics of det in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="la_circse-dep-det-numgov.html">det:numgov</a></tt>.

763 nodes (4%) are attached to their parents as `det`.

556 instances of `det` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11664482306684.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (600; 79% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (71; 9% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (27; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (18; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det	color:blue
1	labor	labor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	2	nsubj	_	LASLAVariant=1|LiLaflcat=n3
2	exoritur	exorior	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v4
3	durus	durus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	1	amod	_	LiLaflcat=n6
4	et	et	CCONJ	S	_	6	cc	_	LASLAVariant=2|LiLaflcat=i
5	omnis	omnis	DET	L	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|PronType=Tot	7	det	_	LiLaflcat=n7
6	agitat	agito	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v1
7	curas	cura	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	6	obj	_	LiLaflcat=n1
8	aperit	aperio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v4
9	que	que	CCONJ	S	_	8	cc	_	LiLaflcat=i
10	domos	domus	NOUN	A2	Case=Acc|Gender=Fem|InflClass=IndEurO|Number=Plur	8	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	quae	quis	PRON	K	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Int	2	det	_	LASLAVariant=1|LiLaflcat=p
2	bella	bellum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	0	root	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 det	color:blue
1	discedant	discedo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v3
2	ferae	fera	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	1	nsubj	_	LiLaflcat=n1
3	ipse	ipse	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	6	det	_	LiLaflcat=p
4	imperando	impero	VERB	B1	Aspect=Prosp|Case=Abl|Degree=Pos|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Ger|Voice=Pass	5	advcl	_	LiLaflcat=v1
5	fessus	fessus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	7	advcl:pred	_	LiLaflcat=n6
6	Eurystheus	eurystheus	PROPN	A7	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing|Variant=Greek	7	nsubj	_	LASLAVariant=N|LiLaflcat=n2
7	uacet	uaco	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1

~~~


