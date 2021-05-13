---
layout: base
title:  'Statistics of parataxis in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `parataxis`

This relation is universal.

206 nodes (1%) are attached to their parents as `parataxis`.

176 instances of `parataxis` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.64563106796117.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (185; 90% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-X.html">X</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	stant	sto	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=sto1
2	lumina	lumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	1	nsubj	_	LId=lumen1
3	flamma	flamma	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No|LId=flamma1
4	,	,	PUNCT	u--------	_	1	punct	_	LId=comma1
5	sordidus	sordidus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	10	amod	_	LId=sordidus1
6	ex	ex	ADP	r--------	_	7	case	_	LId=ex1
7	umeris	umerus	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	9	obl	_	LId=umerus1
8	nodo	nodus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	9	advmod	_	LId=nodus1
9	dependet	dependeo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	LId=dependeo1
10	amictus	amictus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No|LId=amictus2
11	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Quale	qualis	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	inquit	inquam	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
3	caput	caput	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	_
4	est	sum	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	SpaceAfter=No|LId=sum1
5	,	,	PUNCT	u--------	_	1	punct	_	_
6	talis	talis	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	xcomp	_	_
7	praestatur	praesto	VERB	v3spip---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	LId=praesto2
8	sapor	sapor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Io	io	INTJ	e--------	_	2	advmod	_	LId=io1
2	Saturnalia	Saturnalia	NOUN	n-s---fv-	Case=Voc|Gender=Fem|Number=Sing	4	vocative	_	SpaceAfter=No
3	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
4	rogo	rogo	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=rogo1
5	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
6	mensis	mensis	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	LId=mensis1
7	december	December	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	parataxis	_	LId=December1
8	est	sum	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No|LId=sum1
9	?	?	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


