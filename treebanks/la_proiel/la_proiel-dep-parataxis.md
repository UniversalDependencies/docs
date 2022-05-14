---
layout: base
title:  'Statistics of parataxis in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `parataxis`

This relation is universal.

279 nodes (0%) are attached to their parents as `parataxis`.

145 instances of `parataxis` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.76344086021505.

The following 19 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (170; 61% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (19; 7% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (12; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (9; 3% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="la_proiel-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-X.html">X</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis	color:blue
1	opinor	opinor	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	6	parataxis	_	Ref=1.12.1
2	ad	ad	ADP	R-	_	4	case	_	Ref=1.12.1
3	Considium	Considius	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	Ref=1.12.1
4	Axium	Axius	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	6	obl	_	Ref=1.12.1
5	Selicium	Selicius	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	4	conj	_	Ref=1.12.1
6	confugiendum	confugio	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Gdv	0	root	_	Ref=1.12.1
7	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	Ref=1.12.1

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis	color:blue
1	si	si	SCONJ	G-	_	3	mark	_	Ref=MATT_24.26
2	ergo	ergo	ADV	Df	_	9	discourse	_	Ref=MATT_24.26
3	dixerint	dico	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	advcl	_	Ref=MATT_24.26
4	vobis	vos	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	iobj	_	Ref=MATT_24.26
5	ecce	ecce	INTJ	I-	_	9	vocative	_	Ref=MATT_24.26
6	in	in	ADP	R-	_	7	case	_	Ref=MATT_24.26
7	deserto	desertum	NOUN	Nb	Case=Abl|Gender=Neut|Number=Sing	9	parataxis	_	Ref=MATT_24.26
8	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	Ref=MATT_24.26
9	nolite	nolo	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Ref=MATT_24.26
10	exire	exeo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	Ref=MATT_24.26

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	quid	quis	PRON	Pi	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj	_	Ref=MATT_9.5
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Ref=MATT_9.5
3	facilius	facilis	ADJ	A-	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	Ref=MATT_9.5
4	dicere	dico	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	1	acl	_	Ref=MATT_9.5
5	dimittuntur	dimitto	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	parataxis	_	Ref=MATT_9.5
6	tibi	tu	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	iobj	_	Ref=MATT_9.5
7	peccata	peccatum	NOUN	Nb	Case=Nom|Gender=Neut|Number=Plur	5	nsubj:pass	_	Ref=MATT_9.5
8	aut	aut	CCONJ	C-	_	4	cc	_	Ref=MATT_9.5
9	dicere	dico	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	conj	_	Ref=MATT_9.5

~~~


