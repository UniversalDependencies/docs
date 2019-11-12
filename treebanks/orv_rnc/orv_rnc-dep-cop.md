---
layout: base
title:  'Statistics of cop in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `cop`

This relation is universal.

45 nodes (0%) are attached to their parents as `cop`.

31 instances of `cop` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.04444444444444.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (26; 58% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (9; 20% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (6; 13% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (3; 7% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 cop	color:blue
1	Да	да	CCONJ	_	_	6	cc	_	SpaceAfter=Yes
2	по	по	ADP	_	_	5	case	_	SpaceAfter=Yes
3	твоему	твой	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Prs	5	det	_	SpaceAfter=Yes
4	государеву	государевъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	5	amod	_	SpaceAfter=Yes
5	указу	указъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=Yes
6	велено	велѣти	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=Yes
7	быть	быти	AUX	_	VerbForm=Inf|Voice=Act	11	cop	_	SpaceAfter=Yes
8	Янке	Янка	PROPN	OOV	Case=Dat|Gender=Masc|Number=Sing	6	iobj	_	SpaceAfter=Yes
9	Трубачю	Трубачь	PROPN	OOV	Case=Dat|Gender=Masc|Number=Sing	8	flat:name	_	SpaceAfter=Yes
10	в	въ	ADP	_	_	11	case	_	SpaceAfter=Yes
11	конюхах	конюхъ	NOUN	OOV	Case=Loc|Gender=Masc|Number=Plur	6	csubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	А	а	CCONJ	_	_	9	cc	_	SpaceAfter=Yes
2	в	въ	ADP	_	_	3	case	_	SpaceAfter=Yes
3	деревню	деревня	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=Yes
5	г.	государь	NOUN	OOV	Abbr=Yes	3	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=Yes
7	ходить	ходити	VERB	_	VerbForm=Inf|Voice=Act	9	csubj	_	SpaceAfter=Yes
8	будет	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=Yes
9	далеко	далекий	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 cop	color:blue
1	А	а	CCONJ	_	_	5	cc	_	_
2	добра	добро	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	5	obj	_	_
3	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	5	iobj	_	_
4	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	5	iobj	_	_
5	хотѣти	хотѣти	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
6	вездѣ	вездѣ	ADV	_	Degree=Pos	5	advmod	_	SpaceAfter=No
7	,	.	PUNCT	_	_	9	punct	_	_
8	во	въ	ADP	_	_	9	case	_	_
9	всем	все	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	5	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	гдѣ	гдѣ	ADV	_	Degree=Pos	5	advcl	_	_
12	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	11	aux	_	_
13	ни	ни	PART	_	_	11	advmod	_	_
14	было	быти	AUX	_	Gender=Neut|Mood=Cnd|Number=Sing|Tense=Past|VerbForm=PartRes	11	cop	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


