---
layout: base
title:  'Statistics of obl:agent in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_circse-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

95 nodes (1%) are attached to their parents as `obl:agent`.

48 instances of `obl:agent` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55789473684211.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (71; 75% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (11; 12% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (3; 3% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:agent	color:blue
1	nullo	nullus	DET	L	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Neg	3	det	_	LiLaflcat=p
2	premetur	premo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
3	onere	onus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	2	obl:agent	_	LiLaflcat=n3
4	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	LASLAVariant=1|LiLaflcat=p
5	caelum	caelum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	6	obj	_	LASLAVariant=1|LiLaflcat=n2
6	tulit	fero	VERB	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	LiLaflcat=v6

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl:agent	color:blue
1	hic	hic	ADV	M	AdvType=Loc|Degree=Pos	2	advmod:lmod	_	LASLAVariant=2|LiLaflcat=i
2	prosit	prosum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
3	mihi	ego	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	obl:arg	_	LiLaflcat=p
4	Ioue	iuppiter	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Rel|Number=Sing	6	obl:agent	_	LASLAVariant=N|LiLaflcat=n3
5	esse	sum	AUX	Z3	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	6	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
6	genitum	gigno	VERB	Y3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	2	csubj:pass	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:agent	color:blue
1	nil	nihil	PRON	L	InflClass=Ind|PronType=Neg	5	nsubj	_	LiLaflcat=n
2	esse	sum	AUX	Z3	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	5	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
3	crede	credo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
4	turpe	turpis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	1	amod	_	LiLaflcat=n7
5	commissum	committo	VERB	Y3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	LiLaflcat=v3
6	tibi	tu	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	5	obl:agent	_	LiLaflcat=p
7	quid	quis	PRON	K	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	9	obj	_	LASLAVariant=1|LiLaflcat=p
8	honesta	honestus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	10	amod	_	LiLaflcat=n6
9	prodest	prosum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LASLAVariant=1|LiLaflcat=v6
10	uita	uita	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	9	nsubj	_	LiLaflcat=n1
11	flagitio	flagitium	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	12	obl	_	LiLaflcat=n2
12	uacans	uaco	VERB	B1	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	10	acl	_	LiLaflcat=v1

~~~


