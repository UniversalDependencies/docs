---
layout: base
title:  'Statistics of appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `appos`

This relation is universal.

22 nodes (0%) are attached to their parents as `appos`.

22 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7; 32% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (6; 27% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
2	ergo	ergo	ADV	O4	AdvType=Loc	8	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nmod	_	_
5	uerbum	uerbum	NOUN	B1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	cop	_	_
8	filius	filius	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	_
9	mulieris	mulier	NOUN	C1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	_
2	magnus	magnus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	amod	_	_
3	dominus	dominus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	appos	_	_
4	et	et	CCONJ	O4	_	5	cc	_	_
5	rex	rex	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	3	conj	_	_
6	magnus	magnus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	amod	_	_
7	super	super	ADP	S4	_	9	case	_	_
8	omnes	omnis	DET	C1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Ind	9	det	_	_
9	deos	deus	NOUN	F1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	ut	ut	SCONJ	O4|vgr1	PronType=Rel	2	mark	_	_
2	simus	sum	AUX	N3|modB|tem1|gen7	InflClass=LatAnom|Number=Plur|VerbForm=Fin	0	root	_	_
3	in	in	ADP	S4	_	5	case	_	_
4	uero	uerus	ADJ	B1|grn1|casF|gen1|vgr1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	filio	filius	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	2	obl	_	_
6	eius	is	PRON	F1|grn1|casB|gen1|vgr2	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
7	iesu	iesus	PROPN	F1|grn1|casF|gen1|vgr1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	5	appos	_	_
8	christo	christus	ADJ	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


