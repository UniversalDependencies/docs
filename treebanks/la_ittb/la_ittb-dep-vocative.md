---
layout: base
title:  'Statistics of vocative in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `vocative`

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

9 instances of `vocative` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7; 70% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	tu	tu	PRON	F1|grn1|casA|gen1|stPD	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs	8	nsubj	_	_
2	autem	autem	CCONJ	O4|stRL	_	8	cc	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	8	punct	_	_
4	domine	dominus	NOUN	B1|grn1|casE|gen1|comH|stRS	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	in	in	ADP	S4|stRL	AdpType=Prep	7	case	_	_
7	aeternum	aeternus	ADJ	B1|grn1|casD|gen3|vgr1|stAN	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	obl	_	_
8	permanes	permaneo	VERB	K3|modA|tem1|gen5|stAV	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 vocative	color:blue
1	beati	beatus	ADJ	B1|grn1|casB|gen1|stAM	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
2	qui	qui	PRON	F1|grn1|casJ|gen1|stPV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|PronType=Rel	3	nsubj	_	_
3	habitant	habito	VERB	J3|modA|tem1|gen9|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
4	in	in	ADP	S4|stRL	AdpType=Prep	5	case	_	_
5	domo	domus	NOUN	F1|grn1|casF|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
6	tua	tuus	DET	A1|grn1|casF|gen2|stPV	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	domine	dominus	NOUN	B1|grn1|casE|gen1|comH|stRS	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 vocative	color:blue
1	elevata	elevo	VERB	J2|modM|tem4|grp1|casA|gen2|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
3	magnificentia	magnificentia	NOUN	A1|grn1|casA|gen2|vgr1|stAM	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	nsubj:pass	_	_
4	tua	tuus	DET	A1|grn1|casA|gen2|stPV	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
5	super	super	ADP	S4|stRL	AdpType=Prep	6	case	_	_
6	caelos	caelum	NOUN	B1|grn1|casM|gen1|vgr1|stRS	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	1	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	1	punct	_	_
8	deus	deus	PROPN	F1|grn1|casE|gen1|stNP	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


