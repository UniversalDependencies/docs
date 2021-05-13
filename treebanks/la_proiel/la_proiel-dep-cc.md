---
layout: base
title:  'Statistics of cc in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `cc`

This relation is universal.

14575 nodes (7%) are attached to their parents as `cc`.

10311 instances of `cc` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29653516295026.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (8589; 59% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (3483; 24% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (1145; 8% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (513; 4% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (295; 2% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (234; 2% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (146; 1% instances), <tt><a href="la_proiel-pos-DET.html">DET</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (64; 0% instances), <tt><a href="la_proiel-pos-NUM.html">NUM</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (58; 0% instances), <tt><a href="la_proiel-pos-X.html">X</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (20; 0% instances), <tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (11; 0% instances), <tt><a href="la_proiel-pos-INTJ.html">INTJ</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (10; 0% instances), <tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="la_proiel-pos-ADP.html">ADP</a></tt>-<tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	beati	beatus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT_5.6
2	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	3	nsubj	_	ref=MATT_5.6
3	esuriunt	esurio	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	nsubj	_	ref=MATT_5.6
4	et	et	CCONJ	C-	_	3	cc	_	ref=MATT_5.6
5	sitiunt	sitio	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	ref=MATT_5.6
6	iustitiam	iustitia	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	ref=MATT_5.6
7	quoniam	quoniam	SCONJ	G-	_	9	mark	_	ref=MATT_5.6
8	ipsi	ipse	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	nsubj:pass	_	ref=MATT_5.6
9	saturabuntur	saturo	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	1	advcl	_	ref=MATT_5.6

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cc	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	ref=MATT_5.45
2	solem	sol	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT_5.45
3	suum	suus	DET	Pt	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|Reflex=Yes	2	det	_	ref=MATT_5.45
4	oriri	orior	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	ccomp	_	ref=MATT_5.45
5	facit	facio	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.45
6	super	super	ADP	R-	_	7	case	_	ref=MATT_5.45
7	bonos	bonus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	4	advmod	_	ref=MATT_5.45
8	et	et	CCONJ	C-	_	7	cc	_	ref=MATT_5.45
9	malos	malus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	7	conj	_	ref=MATT_5.45

~~~


