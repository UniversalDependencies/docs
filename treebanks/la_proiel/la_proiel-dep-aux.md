---
layout: base
title:  'Statistics of aux in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_proiel-dep-aux-pass.html">aux:pass</a></tt>.

755 nodes (0%) are attached to their parents as `aux`.

622 instances of `aux` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12185430463576.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (713; 94% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (19; 3% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	sic	sic	ADV	Df	_	3	advmod	_	ref=MATT_5.12
2	enim	enim	ADV	Df	_	3	discourse	_	ref=MATT_5.12
3	persecuti	persequor	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=MATT_5.12
4	sunt	sum	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	ref=MATT_5.12
5	prophetas	propheta	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	ref=MATT_5.12
6	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	9	nsubj	_	ref=MATT_5.12
7	fuerunt	sum	AUX	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	ref=MATT_5.12
8	ante	ante	ADP	R-	_	9	case	_	ref=MATT_5.12
9	vos	vos	PRON	Pp	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	5	det	_	ref=MATT_5.12

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Bibuli	Bibulus	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	ref=2.21.5
2	qui	qui	PRON	Pi	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	4	det	_	ref=2.21.5
3	sit	sum	AUX	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	ref=2.21.5
4	exitus	exitus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	ref=2.21.5
5	futurus	sum	AUX	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	6	ccomp	_	ref=2.21.5
6	nescio	nescio	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=2.21.5

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	et	et	CCONJ	C-	_	4	cc	_	ref=MARK_15.44
2	accersito	arcesso	VERB	V-	Aspect=Perf|Case=Abl|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	advcl	_	ref=MARK_15.44
3	centurione	centurio	NOUN	Nb	Case=Abl|Gender=Masc|Number=Sing	2	nsubj:pass	_	ref=MARK_15.44
4	interrogavit	interrogo	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_15.44
5	eum	is	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	ref=MARK_15.44
6	si	si	SCONJ	G-	_	8	mark	_	ref=MARK_15.44
7	iam	iam	ADV	Df	_	8	advmod	_	ref=MARK_15.44
8	mortuus	mortuus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	ccomp	_	ref=MARK_15.44
9	esset	sum	AUX	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	ref=MARK_15.44

~~~


