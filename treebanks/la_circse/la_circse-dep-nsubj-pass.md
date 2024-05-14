---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-nsubj.html">nsubj</a></tt>.

233 nodes (1%) are attached to their parents as `nsubj:pass`.

134 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54077253218884.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (194; 83% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (16; 7% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (9; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	pacem	pax	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	2	nsubj:pass	_	LiLaflcat=n3
2	reduci	reduco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	3	ccomp	_	LiLaflcat=v3
3	uelle	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	5	csubj	_	LASLAVariant=3|LiLaflcat=v6
4	uictori	uictor	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurX|Number=Sing	3	obl:arg	_	LiLaflcat=n3
5	expedit	expedio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4
6	uicto	uinco	VERB	B3	Aspect=Perf|Case=Dat|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	7	obl:arg	_	LiLaflcat=v3
7	necesse	necesse	ADJ	C6	Degree=Pos|InflClass=Ind	5	conj	_	LiLaflcat=n
8	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	2	obj	_	LASLAVariant=1|LiLaflcat=p
2	agite	ago	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
3	poenas	poena	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	4	obj	_	LiLaflcat=n1
4	petite	peto	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v3
5	uitiatae	uitio	VERB	B1	Aspect=Perf|Case=Gen|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	LASLAVariant=1|LiLaflcat=v1
6	Stygis	styx	PROPN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|NameType=Geo|Number=Sing	5	nsubj:pass	_	LASLAVariant=N|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	non	non	PART	P	Polarity=Neg	3	advmod:neg	_	LiLaflcat=i
2	illa	ille	DET	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	4	nsubj:pass	_	LiLaflcat=p
3	bello	bellum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	4	obl	_	LiLaflcat=n2
4	uicta	uinco	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LiLaflcat=v3
5	non	non	PART	P	Polarity=Neg	6	advmod:neg	_	LiLaflcat=i
6	armis	arma	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	3	conj	_	LiLaflcat=n2
7	ut	ut	SCONJ	N	PronType=Rel	10	mark	_	LASLAVariant=1|LiLaflcat=i
8	quondam	quondam	ADV	M	Degree=Pos	10	advmod:tmod	_	LiLaflcat=i
9	Herculea	herculeus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|NameType=Giv|Number=Sing	11	amod	_	LASLAVariant=A|LiLaflcat=n6
10	cecidit	cado	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	advcl	_	LiLaflcat=v3
11	pharetra	pharetra	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	10	obl	_	LiLaflcat=n1

~~~


