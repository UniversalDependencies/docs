---
layout: base
title:  'Statistics of ccomp:reported in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp:reported`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-relcl.html">ccomp:relcl</a></tt>.

10 nodes (0%) are attached to their parents as `ccomp:reported`.

9 instances of `ccomp:reported` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3.

The following 2 pairs of parts of speech are connected with `ccomp:reported`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (8; 80% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp:reported	color:blue
1	ait	aio	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v6
2	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	LASLAVariant=1|LiLaflcat=p
3	scelestum	scelestus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	4	amod	_	LiLaflcat=n6
4	pectus	pectus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obj	_	LiLaflcat=n3
5	aut	aut	CCONJ	S	_	7	cc	_	LiLaflcat=i
6	ferro	ferrum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	7	obl	_	LiLaflcat=n2
7	petat	peto	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	LiLaflcat=v3
8	aut	aut	CCONJ	S	_	14	cc	_	LiLaflcat=i
9	feruido	feruidus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	11	amod	_	LiLaflcat=n6
10	aliquis	aliquis	PRON	L	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Ind	7	nsubj	_	LiLaflcat=p
11	igne	ignis	NOUN	A3	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Sing	14	obl	_	LiLaflcat=n3
12	uel	uel	CCONJ	S	_	13	cc	_	LASLAVariant=2|LiLaflcat=i
13	saxo	saxum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	11	conj	_	LiLaflcat=n2
14	domet	domo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	LiLaflcat=v1

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


