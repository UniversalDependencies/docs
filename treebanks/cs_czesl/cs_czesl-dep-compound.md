---
layout: base
title:  'Statistics of compound in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `compound`

This relation is universal.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound	color:blue
1	prava	právo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	9	parataxis	_	_
2	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	_
3	Karlov	Karlův	ADJ	AUFS6M---------	Case=Loc|Gender=Fem|Gender[psor]=Masc|Hyph=Yes|NameType=Giv|Number=Sing|Poss=Yes	5	compound	_	_
4	–	–	PUNCT	Z:-------------	_	3	punct	_	_
5	Ferdinandové	Ferdinandův	ADJ	AUFS6M---------	Case=Loc|Gender=Fem|Gender[psor]=Masc|NameType=Giv|Number=Sing|Poss=Yes	6	amod	_	_
6	Univerzitě	univerzita	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	1	punct	_	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
9	čeho	co	PRON	PQ--2----------	Case=Gen|PronType=Int,Rel	11	obl:arg	_	_
10	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	aux:pass	_	_
11	přinucen	přinucený	ADJ	VsYS---XX-AP---	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
12	otcem	otec	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	11	obl:agent	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Můj	můj	DET	PSYS1-S1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
2	diploma	diploma	NOUN	NNIS1-----A----	Foreign=Yes|Number=Sing	3	compound	_	Lang=en
3	thesis	thesis	NOUN	NNFS1-----A----	Foreign=Yes|Number=Sing	7	nsubj	_	Lang=en
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
6	česku	Česko	PROPN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	7	nmod	_	_
7	literatuře	literatura	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


