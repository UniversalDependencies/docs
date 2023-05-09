---
layout: base
title:  'Statistics of nsubj:outer in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="la_proiel-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="la_proiel-dep-nsubj-pass.html">nsubj:pass</a></tt>.

85 nodes (0%) are attached to their parents as `nsubj:outer`.

80 instances of `nsubj:outer` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.4.

The following 9 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (49; 58% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (16; 19% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (6; 7% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (4; 5% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="la_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	et	et	CCONJ	C-	_	6	cc	_	ref=JOHN_5.39
2	illae	ille	PRON	Pd	Case=Nom|Gender=Fem|Number=Plur	6	nsubj:outer	_	ref=JOHN_5.39
3	sunt	sum	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	ref=JOHN_5.39
4	quae	qui	PRON	Pr	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	6	nsubj	_	ref=JOHN_5.39
5	testimonium	testimonium	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	ref=JOHN_5.39
6	perhibent	perhibeo	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_5.39
7	de	de	ADP	R-	_	8	case	_	ref=JOHN_5.39
8	me	ego	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	det	_	ref=JOHN_5.39

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	et	et	CCONJ	C-	_	6	cc	_	ref=REV_1.16
2	facies	facies	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:outer	_	ref=REV_1.16
3	eius	is	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	det	_	ref=REV_1.16
4	sicut	sicut	ADV	Dq	PronType=Rel	6	advcl	_	ref=REV_1.16
5	sol	sol	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	ref=REV_1.16
6	lucet	luceo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=REV_1.16
7	in	in	ADP	R-	_	8	case	_	ref=REV_1.16
8	virtute	virtus	NOUN	Nb	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	ref=REV_1.16
9	sua	suus	DET	Pt	Case=Abl|Gender=Fem|Number=Sing|Person=3|Poss=Yes|Reflex=Yes	8	det	_	ref=REV_1.16

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:outer	color:blue
1	non	non	ADV	Df	Polarity=Neg	8	advmod	_	ref=MARK_4.22
2	enim	enim	ADV	Df	_	8	discourse	_	ref=MARK_4.22
3	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	ref=MARK_4.22
4	aliquid	aliquis	DET	Px	Case=Nom|Gender=Neut|Number=Sing	5	det	_	ref=MARK_4.22
5	absconditum	absconditus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	nsubj:outer	_	ref=MARK_4.22
6	quod	qui	PRON	Pr	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	nsubj:pass	_	ref=MARK_4.22
7	non	non	ADV	Df	Polarity=Neg	8	advmod	_	ref=MARK_4.22
8	manifestetur	manifesto	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=MARK_4.22

~~~


