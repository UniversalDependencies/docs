---
layout: base
title:  'Statistics of xcomp in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `xcomp`

This relation is universal.

3384 nodes (2%) are attached to their parents as `xcomp`.

1766 instances of `xcomp` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.19533096926714.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2138; 63% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (526; 16% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (466; 14% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (91; 3% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (73; 2% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (23; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-X.html">X</a></tt> (22; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="la_proiel-pos-X.html">X</a></tt>-<tt><a href="la_proiel-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	nolite	nolo	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.17
2	putare	puto	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	1	xcomp	_	ref=MATT_5.17
3	quoniam	quoniam	SCONJ	G-	_	4	mark	_	ref=MATT_5.17
4	veni	venio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=MATT_5.17
5	solvere	solvo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	advcl	_	ref=MATT_5.17
6	legem	lex	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	ref=MATT_5.17
7	aut	aut	CCONJ	C-	_	6	cc	_	ref=MATT_5.17
8	prophetas	propheta	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	ref=MATT_5.17

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	filia	filia	NOUN	Nb	Case=Voc|Gender=Fem|Number=Sing	6	vocative	_	ref=MARK_5.34
2	fides	fides	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	ref=MARK_5.34
3	tua	tuus	DET	Ps	Case=Nom|Gender=Fem|Number=Sing|Person=2|Poss=Yes	2	det	_	ref=MARK_5.34
4	te	tu	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	obj	_	ref=MARK_5.34
5	salvam	salvus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	xcomp	_	ref=MARK_5.34
6	fecit	facio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_5.34

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	beati	beatus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT_5.9
2	pacifici	pacificus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	nsubj	_	ref=MATT_5.9
3	quoniam	quoniam	SCONJ	G-	_	6	mark	_	ref=MATT_5.9
4	filii	filius	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	6	xcomp	_	ref=MATT_5.9
5	Dei	deus	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	ref=MATT_5.9
6	vocabuntur	voco	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	1	advcl	_	ref=MATT_5.9

~~~


