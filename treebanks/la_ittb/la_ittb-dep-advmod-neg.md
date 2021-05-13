---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>.

1662 nodes (0%) are attached to their parents as `advmod:neg`.

1620 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.00361010830325.

The following 9 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1103; 66% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (240; 14% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (112; 7% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (103; 6% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (59; 4% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (24; 1% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (14; 1% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (6; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:neg	color:blue
1	multa	multus	ADJ	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	4	obj	_	_
2	habeo	habeo	VERB	K3|modA|tem1|gen4	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	uobis	uos	PRON	F1|grn1|casL|gen1|vgr1	Case=Dat|Gender=Masc|Number=Plur|PronType=Prs	4	obl:arg	_	_
4	dicere	dico	VERB	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	sed	sed	CCONJ	O4|vgr1	_	8	cc	_	_
7	non	non	PART	O4	Polarity=Neg	8	advmod:neg	_	_
8	potestis	possum	VERB	N3|modA|tem1|gen8	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	2	conj	_	_
9	portare	porto	VERB	J3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	eam	is	PRON	F1|grn1|casD|gen2	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem,Prs	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advmod:neg	color:blue
1	quod	quod	SCONJ	5|gen2	_	7	mark	_	_
2	distinctio	distinctio	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
3	rerum	res	NOUN	E1|grn1|casK|gen2	Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	_
4	non	non	PART	O4	Polarity=Neg	7	advmod:neg	_	_
5	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	a	ab	ADP	S4|vgr1	AdpType=Prep	7	case	_	_
7	casu	casus	NOUN	D1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:neg	color:blue
1	ipse	ipse	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	6	nsubj	_	_
2	etiam	etiam	ADV	O4|vgr1	_	1	advmod:emph	_	_
3	non	non	PART	O4	Polarity=Neg	4	advmod:neg	_	_
4	solum	solum	ADV	B1|grn1|casG	Degree=Pos	5	advmod	_	_
5	seipsum	seipsum	PRON	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs|Reflex=Yes	6	obj	_	_
6	clarificat	clarifico	VERB	J3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	10	punct	_	_
8	sed	sed	CCONJ	O4|vgr1	_	10	cc	_	_
9	etiam	etiam	ADV	O4|vgr1	_	10	advmod:emph	_	_
10	patrem	pater	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	6	punct	_	_

~~~


