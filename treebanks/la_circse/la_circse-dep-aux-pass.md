---
layout: base
title:  'Statistics of aux:pass in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-aux.html">aux</a></tt>.

47 nodes (0%) are attached to their parents as `aux:pass`.

39 instances of `aux:pass` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68085106382979.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (47; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	hic	hic	ADV	M	AdvType=Loc|Degree=Pos	2	advmod:lmod	_	LASLAVariant=2|LiLaflcat=i
2	prosit	prosum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
3	mihi	ego	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	obl:arg	_	LiLaflcat=p
4	Ioue	iuppiter	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Rel|Number=Sing	6	obl:agent	_	LASLAVariant=N|LiLaflcat=n3
5	esse	sum	AUX	Z3	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	6	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
6	genitum	gigno	VERB	Y3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	2	csubj:pass	_	LiLaflcat=v3

~~~


