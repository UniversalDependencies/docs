---
layout: base
title:  'Statistics of nummod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nummod`

This relation is universal.

1118 nodes (0%) are attached to their parents as `nummod`.

722 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16100178890877.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (663; 59% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (325; 29% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (51; 5% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (46; 4% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (18; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	qui	qui	PRON	F1|grn1|casA|gen1|stPV	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	_
2	hoc	hic	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	_
3	probare	probo	VERB	J3|modH|tem1|stAE	Tense=Pres|VerbForm=Inf|Voice=Act	4	xcomp	_	_
4	intendit	intendo	VERB	L3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
5	ex	e	ADP	S4|vgr2|stRL	AdpType=Prep	6	case	_	_
6	parte	pars	NOUN	C1|grn1|casF|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
7	motus	motus	NOUN	D1|grn1|casB|gen1|stAN	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	nmod	_	_
8	duabus	duo	NUM	F1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur|NumType=Card	9	nummod	_	_
9	viis	via	NOUN	A1|grn1|casO|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	prov.	_	X	5|stPS	Abbr=Yes	0	root	_	_
2	8-7	_	NUM	G5	NumForm=Digit	1	nummod	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	ergo	ergo	ADV	O4|stRL	_	6	advmod	_	_
2	neutrum	neuter	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	_	_
3	illorum	ille	PRON	F1|grn1|casK|gen3|stPD	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	4	nmod	_	_
4	duorum	duo	NUM	F1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|NumType=Card	2	nummod	_	_
5	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	hoc	hic	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
7	quod	qui	PRON	F1|grn1|casD|gen3|stRL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	8	obj	_	_
8	intelligimus	intelligo	VERB	L3|modA|tem1|gen7|stAC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
9	nomine	nomen	NOUN	C1|grn1|casF|gen3|comH|stAE	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	8	obl	_	_
10	dei	deus	PROPN	F1|grn1|casB|gen1|stNP	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


