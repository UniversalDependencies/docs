---
layout: base
title:  'Statistics of discourse in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `discourse`

This relation is universal.

173 nodes (1%) are attached to their parents as `discourse`.

133 instances of `discourse` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60115606936416.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (79; 46% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (37; 21% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (26; 15% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (11; 6% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	num	num	PART	O	PartType=Int|Polarity=Neg	8	discourse	_	LiLaflcat=i
2	quid	quid	ADV	O	PronType=Int	8	advmod	_	LiLaflcat=i
3	Hesperii	hesperius	ADJ	C1	Case=Gen|Degree=Pos|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	4	amod	_	LASLAVariant=A|LiLaflcat=n6
4	maris	mare	NOUN	A3	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	6	nmod	_	LiLaflcat=n3
5	extrema	exter	ADJ	C1	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	LiLaflcat=n6
6	tellus	tellus	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	LiLaflcat=n3
7	hunc	hic	DET	I	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	10	det	_	LASLAVariant=1|LiLaflcat=p
8	dat	do	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
9	Oceano	oceanus	PROPN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	8	obl:arg	_	LASLAVariant=N|LiLaflcat=n2
10	modum	modus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	8	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	en	en	INTJ	U	_	3	discourse	_	LiLaflcat=i
2	ultro	ultro	ADV	M	Degree=Pos	3	advmod	_	LiLaflcat=i
3	uocat	uoco	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
4	omnis	omnis	DET	L	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing|PronType=Tot	6	det	_	LiLaflcat=n7
5	deorum	deus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	6	nmod	_	LiLaflcat=n2
6	coetus	coetus	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	3	nsubj	_	LiLaflcat=n4
7	et	et	CCONJ	S	_	8	cc	_	LASLAVariant=2|LiLaflcat=i
8	laxat	laxo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v1
9	fores	foris	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur	8	obj	_	LASLAVariant=1|LiLaflcat=n3
10	una	unus	NUM	D1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Card	11	nsubj	_	LiLaflcat=n6
11	uetante	ueto	VERB	B1	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	8	advcl:abs	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	LASLAVariant=1|LiLaflcat=v6
2	ne	ne	PART	O	PartType=Int	4	discourse	_	LASLAVariant=2|LiLaflcat=i
3	aliqua	aliquis	PRON	L	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	4	det	_	LiLaflcat=p
4	tellus	tellus	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3
5	Cereris	ceres	PROPN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|NameType=Rel|Number=Sing	8	nmod	_	LASLAVariant=N|LiLaflcat=n3
6	aut	aut	CCONJ	S	_	7	cc	_	LiLaflcat=i
7	Bacchi	bacchus	PROPN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing	5	conj	_	LASLAVariant=N|LiLaflcat=n2
8	ferax	ferax	ADJ	C5	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	4	amod	_	LiLaflcat=n7

~~~


