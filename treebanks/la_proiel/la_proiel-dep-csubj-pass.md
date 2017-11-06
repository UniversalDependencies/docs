---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of .

188 nodes (0%) are attached to their parents as `csubj:pass`.

156 instances of `csubj:pass` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.27127659574468.

The following 9 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (153; 81% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (9; 5% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt> (9; 5% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-X.html">X</a></tt> (1; 1% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 csubj:pass	color:blue
1	et	et	CCONJ	C-	_	2	cc	_	ref=LUKE_9.18
2	factum	facio	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_9.18
3	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux:pass	_	ref=LUKE_9.18
4	cum	cum	SCONJ	G-	_	7	mark	_	ref=LUKE_9.18
5	solus	solus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	advmod	_	ref=LUKE_9.18
6	esset	sum	AUX	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	ref=LUKE_9.18
7	orans	oro	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	advcl	_	ref=LUKE_9.18
8	erant	sum	AUX	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	ref=LUKE_9.18
9	cum	cum	ADP	R-	_	10	case	_	ref=LUKE_9.18
10	illo	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Sing	2	csubj:pass	_	ref=LUKE_9.18
11	et	et	ADV	Df	_	12	discourse	_	ref=LUKE_9.18
12	discipuli	discipulus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	ref=LUKE_9.18

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	scriptum	scribo	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_4.4
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	ref=LUKE_4.4
3	quia	quia	SCONJ	G-	_	1	csubj:pass	_	ref=LUKE_4.4

~~~


