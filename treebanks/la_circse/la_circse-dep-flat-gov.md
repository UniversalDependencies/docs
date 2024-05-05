---
layout: base
title:  'Statistics of flat:gov in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `flat:gov`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="la_circse-dep-flat-name.html">flat:name</a></tt>, <tt><a href="la_circse-dep-flat-redup.html">flat:redup</a></tt>.

3 nodes (0%) are attached to their parents as `flat:gov`.

3 instances of `flat:gov` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `flat:gov`: <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:gov	color:blue
1	manet	maneo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	adhuc	adhuc	ADV	M	AdvType=Tim|Compound=Yes	1	advmod:tmod	_	LiLaflcat=i
3	Boihaemi	boihaemum	PROPN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	1	nsubj	_	LASLAVariant=N|LiLaflcat=n2
4	nomen	nomen	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	3	flat:gov	_	LiLaflcat=n3
5	significat	significo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	que	que	CCONJ	S	_	5	cc	_	LiLaflcat=i
7	loci	locus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nmod	_	LiLaflcat=n2
8	ueterem	uetus	ADJ	C2	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	9	amod	_	LiLaflcat=n7
9	memoriam	memoria	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	5	obj	_	LiLaflcat=n1
10	quamuis	quamuis	SCONJ	N	PronType=Rel	11	mark	_	LASLAVariant=1|LiLaflcat=i
11	mutatis	muto	VERB	B1	Aspect=Perf|Case=Abl|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	advcl:abs	_	LASLAVariant=2|LiLaflcat=v1|TraditionalMood=Participium|TraditionalTense=Perfectum
12	cultoribus	cultor	NOUN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Plur	11	nsubj:pass	_	LiLaflcat=n3

~~~


