---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-relcl.html">csubj:relcl</a></tt>.

13 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.69230769230769.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (13; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:pass	color:blue
1	hic	hic	ADV	M	AdvType=Loc|Degree=Pos	2	advmod:lmod	_	LASLAVariant=2|LiLaflcat=i
2	prosit	prosum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
3	mihi	ego	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	obl:arg	_	LiLaflcat=p
4	Ioue	iuppiter	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Rel|Number=Sing	6	obl:agent	_	LASLAVariant=N|LiLaflcat=n3
5	esse	sum	AUX	Z3	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	6	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
6	genitum	gigno	VERB	Y3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	2	csubj:pass	_	LiLaflcat=v3

~~~


