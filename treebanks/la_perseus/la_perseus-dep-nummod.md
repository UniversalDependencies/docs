---
layout: base
title:  'Statistics of nummod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `nummod`

This relation is universal.

130 nodes (0%) are attached to their parents as `nummod`.

92 instances of `nummod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43076923076923.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (110; 85% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (6; 5% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (6; 5% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Quinque	quinque	NUM	m--------	NumForm=Word|NumType=Card	2	nummod	_	LId=quinque1
2	dies	dies	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	LId=dies1
3	aquam	aqua	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	LId=aqua1
4	in	in	ADP	r--------	_	5	case	_	LId=in1
5	os	os	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	LId=os2
6	suum	suus	DET	a-s---na-	Case=Acc|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	5	det	_	LId=suus1
7	non	non	PART	d--------	_	3	advmod:neg	_	LId=non1
8	coniecit	conicio	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=conicio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
9	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
10	non	non	PART	d--------	_	11	advmod:neg	_	LId=non1
11	micam	mica	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	LId=mica1
12	panis	panis	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No|LId=panis1
13	.	.	PUNCT	u--------	_	8	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	quattuor	quattuor	NUM	m--------	NumForm=Word|NumType=Card	2	nummod	_	_
2	principes	princeps	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	ferro	ferrum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obj	_	_
4	interempti	interimo	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
5	:	:	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	quibus	qui	PRON	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur|PronType=Rel	3	nmod	_	LId=qui1
2	in	in	ADP	r--------	_	3	case	_	_
3	classibus	classis	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	4	obl	_	_
4	pugnaverunt	pugno	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	praeter	praeter	ADP	r--------	_	6	case	_	_
6	remiges	remex	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	8	obl	_	_
7	millia	mille	NUM	m-p---nn-	Case=Nom|Gender=Neut|Number=Plur|NumForm=Word|NumType=Card	4	nsubj	_	_
8	hominum	homo	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	tria	tres	NUM	m-p---nn-	Case=Nom|Gender=Neut|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
10	circiter	circiter	ADV	d--------	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


