---
layout: base
title:  'Statistics of flat in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="la_perseus-dep-flat-name.html">flat:name</a></tt>.

16 nodes (0%) are attached to their parents as `flat`.

16 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (10; 63% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (6; 38% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Gentem	gens	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Octauiam	Octavia	PROPN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	1	flat	_	_
3	Velitris	Velitrae	PROPN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	flat:name	_	_
4	praecipuam	praecipuus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
5	olim	olim	ADV	d--------	AdvType=Tim	4	advmod:tmod	_	_
6	fuisse	sum	AUX	v--rna---	Aspect=Perf|VerbForm=Inf	4	cop	_	LId=sum1|TraditionalMood=Infinitivus|TraditionalTense=Perfectum
7	multa	multus	DET	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur|NumType=Card|PronType=Ind	8	nsubj	_	_
8	declarant	declaro	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	.	.	PUNCT	u--------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	et	et	CCONJ	c--------	_	5	cc	_	LId=et1
2	numerus	numerus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	LId=numerus1
3	eius	is	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod	_	LId=is1
4	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	sescenti	sescenti	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	LId=sescenti1
6	sexaginta	sexaginta	NUM	m--------	NumForm=Word|NumType=Card	5	nummod	_	LId=sexa_ginta1
7	sex	sex	NUM	m--------	NumForm=Word|NumType=Card	6	flat	_	SpaceAfter=No|LId=sex1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


