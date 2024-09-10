---
layout: base
title:  'Statistics of discourse in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `discourse`

This relation is universal.

138 nodes (1%) are attached to their parents as `discourse`.

109 instances of `discourse` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92753623188406.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (61; 44% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (26; 19% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (25; 18% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (10; 7% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	animos	animus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	6	obj	_	LiLaflcat=n2
2	ne	ne	PART	O	PartType=Int	6	discourse	_	LASLAVariant=2|LiLaflcat=i
3	mersus	mergo	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	_	LiLaflcat=v3
4	inferis	inferi	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	3	obl	_	LiLaflcat=n2
5	coniunx	coniux	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	6	nsubj	_	LiLaflcat=n3
6	facit	facio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v5

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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	famuli	famulus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	LASLAVariant=1|LiLaflcat=n2
2	ne	ne	PART	O	PartType=Int	1	discourse	_	LASLAVariant=2|LiLaflcat=i
3	fuerant	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
4	ante	ante	ADV	M	Degree=Pos	1	advmod:tmod	_	LiLaflcat=i
5	quam	quam	SCONJ	T	_	6	mark	_	LiLaflcat=i
6	fierent	fio	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	_	LiLaflcat=v6
7	dei	deus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	6	xcomp	_	LiLaflcat=n2

~~~


