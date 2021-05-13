---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of .

214 nodes (0%) are attached to their parents as `csubj:pass`.

174 instances of `csubj:pass` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.30373831775701.

The following 11 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (167; 78% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (13; 6% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt> (9; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	factum	facio	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=ACTS_9.37
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	ref=ACTS_9.37
3	autem	autem	ADV	Df	_	1	discourse	_	ref=ACTS_9.37
4	in	in	ADP	R-	_	5	case	_	ref=ACTS_9.37
5	diebus	dies	NOUN	Nb	Case=Abl|Gender=Fem,Masc|Number=Plur	1	obl	_	ref=ACTS_9.37
6	illis	ille	DET	Pd	Case=Abl|Number=Plur	5	det	_	ref=ACTS_9.37
7	ut	ut	SCONJ	G-	_	9	mark	_	ref=ACTS_9.37
8	infirmata	infirmo	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	_	ref=ACTS_9.37
9	moreretur	morior	VERB	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	csubj:pass	_	ref=ACTS_9.37

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:pass	color:blue
1	quibus	qui	PRON	Pr	Case=Abl|Number=Plur|PronType=Rel	2	det	_	ref=1.25
2	rebus	res	NOUN	Nb	Case=Abl|Gender=Fem|Number=Plur	3	obl	_	ref=1.25
3	effectum	efficio	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=1.25
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	ref=1.25
5	ut	ut	SCONJ	G-	_	6	mark	_	ref=1.25
6	infinita	infinitus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	csubj:pass	_	ref=1.25
7	pecuniae	pecunia	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	ref=1.25
8	cupiditas	cupiditas	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	ref=1.25
9	esset	sum	AUX	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	ref=1.25

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	timuerunt	timeo	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=ACTS_16.38
2	que	que	CCONJ	C-	_	1	cc	_	ref=ACTS_16.38
3	audito	audio	VERB	V-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	advcl	_	ref=ACTS_16.38
4	quod	quod	SCONJ	G-	_	5	mark	_	ref=ACTS_16.38
5	Romani	Romanus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	3	csubj:pass	_	ref=ACTS_16.38
6	essent	sum	AUX	V-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	ref=ACTS_16.38

~~~


