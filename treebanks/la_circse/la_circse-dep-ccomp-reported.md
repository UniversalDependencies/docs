---
layout: base
title:  'Statistics of ccomp:reported in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp:reported`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-relcl.html">ccomp:relcl</a></tt>.

12 nodes (0%) are attached to their parents as `ccomp:reported`.

10 instances of `ccomp:reported` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.83333333333333.

The following 2 pairs of parts of speech are connected with `ccomp:reported`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (10; 83% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp:reported	color:blue
1	dixit	dico	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	inridens	irrideo	VERB	B2	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	1	advcl:pred	_	_
3	deus	deus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	nsubj	_	_
4	ipsum	ipse	DET	I	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	5	obj	_	_
5	timebis	timeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp:reported	color:blue
1	lentum	lentus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
3	dabit	do	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	LiLaflcat=v1
4	dat	do	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v1
5	hoc	hic	DET	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	nsubj	_	LASLAVariant=1|LiLaflcat=p
6	quoque	quoque	PART	M	Form=Emp	5	advmod:emph	_	LiLaflcat=i
7	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	LASLAVariant=1|LiLaflcat=v6
8	lentum	lentus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	1	conj	_	LiLaflcat=n6
9	dedit	do	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	ccomp:reported	_	LiLaflcat=v1

~~~


