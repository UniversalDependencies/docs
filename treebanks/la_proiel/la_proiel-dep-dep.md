---
layout: base
title:  'Statistics of dep in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `dep`

This relation is universal.

48 nodes (0%) are attached to their parents as `dep`.

38 instances of `dep` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64583333333333.

The following 10 pairs of parts of speech are connected with `dep`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (19; 40% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (17; 35% instances), <tt><a href="la_proiel-pos-NUM.html">NUM</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep	color:blue
1	et	et	CCONJ	C-	_	3	cc	_	ref=MARK_6.14
2	propterea	propterea	ADV	Df	_	3	advmod	_	ref=MARK_6.14
3	inoperantur	inoperor	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=MARK_6.14
4	virtutes	virtus	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	ref=MARK_6.14
5	in	in	ADP	R-	_	6	case	_	ref=MARK_6.14
6	illo	ille	PRON	Pd	Case=Abl|Gender=Masc|Number=Sing	3	dep	_	ref=MARK_6.14

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep	color:blue
1	non	non	ADV	Df	Polarity=Neg	3	advmod	_	ref=MARK_6.52
2	enim	enim	ADV	Df	_	3	discourse	_	ref=MARK_6.52
3	intellexerant	intellego	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_6.52
4	de	de	ADP	R-	_	5	case	_	ref=MARK_6.52
5	panibus	panis	NOUN	Nb	Case=Abl|Gender=Masc|Number=Plur	3	dep	_	ref=MARK_6.52

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 dep	color:blue
1	amen	amen	INTJ	I-	_	2	discourse	_	ref=MARK_14.18
2	dico	dico	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_14.18
3	vobis	vos	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	2	obl:arg	_	ref=MARK_14.18
4	quia	quia	SCONJ	G-	_	9	mark	_	ref=MARK_14.18
5	unus	unus	NUM	Ma	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	ref=MARK_14.18
6	ex	ex	ADP	R-	_	7	case	_	ref=MARK_14.18
7	vobis	vos	PRON	Pp	Case=Abl|Gender=Masc|Number=Plur|Person=2|PronType=Prs	5	nmod	_	ref=MARK_14.18
8	me	ego	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	9	obj	_	ref=MARK_14.18
9	tradet	trado	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=MARK_14.18
10	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	ref=MARK_14.18
11	manducat	manduco	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	dep	_	ref=MARK_14.18
12	me	ego	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	11	obl	_	ref=MARK_14.18
13	cum	cum	ADP	R-	_	12	case	_	ref=MARK_14.18

~~~


