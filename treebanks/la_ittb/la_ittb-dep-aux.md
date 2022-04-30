---
layout: base
title:  'Statistics of aux in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_ittb-dep-aux-pass.html">aux:pass</a></tt>.

27 nodes (0%) are attached to their parents as `aux`.

15 instances of `aux` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.74074074074074.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (13; 48% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (8; 30% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (4; 15% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	1	1	NUM	G5	InflClass=Ind|NumForm=Digit	8	obl	_	_
2	utrum	utrum	ADV	O4	_	8	advmod	_	_
3	christus	christus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	8	obl	_	_
6	hominis	homo	NOUN	C1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	5	nmod	_	_
7	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	aux	_	_
8	iudicaturus	iudico	VERB	J2|modD|tem3|grp1|casA|gen1|vgr2	Aspect=Prosp|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	propter	propter	ADP	S4	AdpType=Prep	2	case	_	_
2	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	obl	_	_
3	et	et	ADV	O4	_	4	advmod:emph	_	_
4	aristoteles	aristoteles	PROPN	C1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	7	nsubj	_	_
5	congruo	congruus	ADJ	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	_
6	exemplo	exemplum	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nmod	_	_
7	usus	usus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	0	root	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	uidetur	uideo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	igitur	igitur	ADV	O4	_	1	advmod	_	_
3	impossibile	impossibilis	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	1	xcomp:pred	_	_
4	quod	quod	SCONJ	O4	_	8	mark	_	_
5	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	aux	_	_
6	hominum	homo	NOUN	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	7	nmod	_	_
7	resurrectio	resurrectio	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	_
8	futura	sum	AUX	N2|modD|tem3|grp1|casA|gen2	Case=Nom|Gender=Fem|InflClass=LatAnom|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part	1	csubj:pass	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


