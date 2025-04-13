---
layout: base
title:  'Statistics of ccomp:reported in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp:reported`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-relcl.html">ccomp:relcl</a></tt>.

4 nodes (0%) are attached to their parents as `ccomp:reported`.

4 instances of `ccomp:reported` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 2 pairs of parts of speech are connected with `ccomp:reported`: <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 50% instances).


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


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 ccomp:reported	color:blue
1	hic	hic	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	onere	onus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	3	obl	_	LiLaflcat=n3
3	uacuam	uacuus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	5	acl	_	LiLaflcat=n6
4	litori	litus	NOUN	A3	Case=Dat|Gender=Neut|InflClass=IndEurX|Number=Sing	6	obl:lmod	_	LiLaflcat=n3
5	puppem	puppis	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	6	obj	_	LiLaflcat=n3
6	applicans	applico	VERB	B1	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	7	advcl:pred	_	LiLaflcat=v1
7	repetebat	repeto	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
8	umbras	umbra	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	7	obj	_	LiLaflcat=n1
9	poscit	posco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	LiLaflcat=v3
10	Alcides	alcides	PROPN	A7	Case=Nom|Gender=Masc|InflClass=IndEurA|NameType=Giv|Number=Sing|Variant=Greek	9	nsubj	_	LASLAVariant=N|LiLaflcat=n1
11	uiam	uia	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	9	obj	_	LiLaflcat=n1
12	cedente	cedo	VERB	B3	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	15	advcl:abs	_	LASLAVariant=1|LiLaflcat=v3
13	turba	turba	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	12	nsubj	_	LiLaflcat=n1
14	dirus	dirus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	16	amod	_	LiLaflcat=n6
15	exclamat	exclamo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	LiLaflcat=v1
16	Charon	charon	PROPN	A7	Case=Nom|Gender=Neut|InflClass=IndEurX|NameType=Giv|Number=Sing|Variant=Greek	15	nsubj	_	LASLAVariant=N|LiLaflcat=n3
17	quo	quo	ADV	O	PronType=Int	18	advmod:lmod	_	LASLAVariant=3|LiLaflcat=i
18	pergis	pergo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp:reported	_	LiLaflcat=v3
19	audax	audax	ADJ	C5	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	18	advcl:pred	_	LiLaflcat=n7

~~~


