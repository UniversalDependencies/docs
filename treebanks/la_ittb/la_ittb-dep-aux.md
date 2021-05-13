---
layout: base
title:  'Statistics of aux in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_ittb-dep-aux-pass.html">aux:pass</a></tt>.

26 nodes (0%) are attached to their parents as `aux`.

14 instances of `aux` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.73076923076923.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (16; 62% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (8; 31% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	1	1	NUM	G5	NumForm=Digit	8	obl	_	_
2	utrum	utrum	ADV	O4	_	8	advmod	_	_
3	christus	christus	ADJ	B1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	nsubj	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|Number=Sing	8	obl	_	_
6	hominis	homo	NOUN	C1|grn1|casB|gen1	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	iudicaturus	iudico	VERB	J2|modD|tem3|grp1|casA|gen1|vgr2	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	propter	propter	ADP	S4	AdpType=Prep	2	case	_	_
2	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obl	_	_
3	et	et	ADV	O4	_	4	advmod:emph	_	_
4	aristoteles	aristoteles	PROPN	C1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	congruo	congruus	ADJ	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	exemplo	exemplum	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|Number=Sing	7	nmod	_	_
7	usus	usus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	unde	unde	ADV	O4	_	7	advmod	_	_
2	corpora	corpus	NOUN	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
3	resurgentium	resurgo	VERB	L2|modD|tem1|grp1|casK|gen1	Aspect=Imp|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	beatorum	beatus	ADJ	B1|grn1|casK|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	nmod	_	_
5	futura	sum	AUX	N2|modD|tem3|grp1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Tense=Fut|VerbForm=Part|Voice=Act	7	cop	_	_
6	erunt	sum	AUX	N3|modA|tem3|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	aux	_	_
7	agilia	agilis	ADJ	C1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


