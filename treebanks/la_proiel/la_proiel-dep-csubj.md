---
layout: base
title:  'Statistics of csubj in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="la_proiel-dep-csubj-pass.html">csubj:pass</a></tt>.

274 nodes (0%) are attached to their parents as `csubj`.

222 instances of `csubj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.55474452554745.

The following 22 pairs of parts of speech are connected with `csubj`: <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (127; 46% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (49; 18% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (28; 10% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (27; 10% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-NUM.html">NUM</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	iam	iam	ADV	Df	_	4	advmod	_	ref=LUKE_15.21
2	non	non	ADV	Df	Polarity=Neg	4	advmod	_	ref=LUKE_15.21
3	sum	sum	AUX	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	ref=LUKE_15.21
4	dignus	dignus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	ref=LUKE_15.21
5	vocari	voco	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	4	csubj	_	ref=LUKE_15.21
6	filius	filius	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	xcomp	_	ref=LUKE_15.21
7	tuus	tuus	DET	Ps	Case=Nom|Gender=Masc|Number=Sing|Person=2|Poss=Yes	6	det	_	ref=LUKE_15.21

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Sed	sed	CCONJ	C-	_	3	cc	_	ref=3.12.3
2	erit	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	cop	_	ref=3.12.3
3	sapientis	sapiens	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	0	root	_	ref=3.12.3
4	aestimare	aestimo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	3	csubj	_	ref=3.12.3
5	uim	vis	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	ref=3.12.3
6	uitis	vitis	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	ref=3.12.3

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj	color:blue
1	Quo	qui	PRON	Pr	Case=Abl|Gender=Neut|Number=Sing|PronType=Rel	2	advcl	_	ref=1.26
2	magis	magis	ADV	Df	Degree=Cmp	3	advcl	_	ref=1.26
3	cavendum	caveo	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Gdv	0	root	_	ref=1.26
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	ref=1.26
5	ne	ne	SCONJ	G-	_	10	mark	_	ref=1.26
6	quid	quis	PRON	Px	Case=Nom|Gender=Neut|Number=Sing	10	nsubj:pass	_	ref=1.26
7	in	in	ADP	R-	_	9	case	_	ref=1.26
8	eo	is	DET	Pd	Case=Abl|Gender=Masc,Neut|Number=Sing	9	det	_	ref=1.26
9	genere	genus	NOUN	Nb	Case=Abl|Gender=Neut|Number=Sing	10	obl	_	ref=1.26
10	peccetur	pecco	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	csubj	_	ref=1.26

~~~


