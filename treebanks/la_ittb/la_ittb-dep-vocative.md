---
layout: base
title:  'Statistics of vocative in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `vocative`

This relation is universal.

19 nodes (0%) are attached to their parents as `vocative`.

17 instances of `vocative` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.89473684210526.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (10; 53% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (5; 26% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 vocative	color:blue
1	tu	tu	PRON	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs	8	nsubj	_	_
2	autem	autem	CCONJ	O4	_	8	cc	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	8	punct	_	_
4	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	3	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	3	punct	_	_
6	in	in	ADP	S4	AdpType=Prep	7	case	_	_
7	aeternum	aeternus	ADJ	B1|grn1|casD|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	obl	_	_
8	permanes	permaneo	VERB	K3|modA|tem1|gen5	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 vocative	color:blue
1	omnia	omnis	PRON	C1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	2	nmod	_	_
2	opera	opus	NOUN	B1|grn1|casM|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	obj	_	_
3	nostra	noster	ADJ	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Poss=Yes	2	nmod	_	_
4	operatus	operor	VERB	J2|modM|tem4|grp1|casA|gen1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	es	sum	AUX	N3|modA|tem1|gen5	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
6	in	in	ADP	S4	AdpType=Prep	7	case	_	_
7	nobis	nos	PRON	F1|grn1|casO|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Plur|PronType=Prs	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	4	punct	_	_
9	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	deus	deus	NOUN	F1|grn1|casE|gen1	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	quis	quis	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Ind,Int	4	nsubj	_	_
4	similis	similis	ADJ	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	erit	sum	AUX	N3|modA|tem3|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	4	cop	_	_
6	tibi	tu	PRON	F1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs	4	nmod	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	4	punct	_	_

~~~


