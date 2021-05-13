---
layout: base
title:  'Statistics of cop in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `cop`

This relation is universal.

4597 nodes (2%) are attached to their parents as `cop`.

2768 instances of `cop` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59647596258429.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1511; 33% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1472; 32% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (501; 11% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (363; 8% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (318; 7% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (307; 7% instances), <tt><a href="la_proiel-pos-NUM.html">NUM</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (47; 1% instances), <tt><a href="la_proiel-pos-DET.html">DET</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="la_proiel-pos-X.html">X</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (19; 0% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="la_proiel-pos-ADP.html">ADP</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	gaudete	gaudeo	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.12
2	et	et	CCONJ	C-	_	1	cc	_	ref=MATT_5.12
3	exultate	ex(s)ulto	VERB	V-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	ref=MATT_5.12
4	quoniam	quoniam	SCONJ	G-	_	7	mark	_	ref=MATT_5.12
5	merces	merces	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	ref=MATT_5.12
6	vestra	vester	DET	Ps	Case=Nom|Gender=Fem|Number=Sing|Person=2|Poss=Yes	5	det	_	ref=MATT_5.12
7	copiosa	copiosus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	advcl	_	ref=MATT_5.12
8	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	ref=MATT_5.12
9	in	in	ADP	R-	_	10	case	_	ref=MATT_5.12
10	caelis	caelum	NOUN	Nb	Case=Abl|Gender=Neut|Number=Plur	5	nmod	_	ref=MATT_5.12

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	vos	vos	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	ref=MATT_5.13
2	estis	sum	AUX	V-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	ref=MATT_5.13
3	sal	sal	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	0	root	_	ref=MATT_5.13
4	terrae	terra	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	ref=MATT_5.13

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	talitha	talitha	X	F-	_	5	vocative	_	ref=MARK_5.41
2	cumi	cumi	X	F-	_	5	vocative	_	ref=MARK_5.41
3	quod	qui	PRON	Pr	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj	_	ref=MARK_5.41
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	ref=MARK_5.41
5	interpretatum	interpretor	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=MARK_5.41

~~~


