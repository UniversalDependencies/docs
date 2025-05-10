---
layout: base
title:  'Statistics of obl:agent in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-unmarked.html">obl:unmarked</a></tt>.

22 nodes (0%) are attached to their parents as `obl:agent`.

22 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.27272727272727.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (17; 77% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (5; 23% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 obl:agent	color:blue
1	Chaidh	rach	AUX	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
2	a	a	DET	Dp3sm	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nsubj:pass	_	_
3	thoirt	toir	NOUN	Nv	VerbForm=Inf	0	root	_	_
4	gu	gu	ADP	Sp	_	5	case	_	_
5	ospadal	ospadal	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	3	obl	_	_
6	à	à	ADP	Sp	_	7	case	_	_
7	Raig	Raig	PROPN	Nt	NounType=Top	3	obl	_	_
8	Mhor	mor	ADJ	Aq	_	7	amod	_	_
9	le	le	ADP	Sp	_	10	case	_	_
10	heileacoptair	heileacoptair	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	3	obl:agent	_	_
11	feachd	feachd	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	_
12	an	an	DET	Tdsmg	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	adhair	adhair	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Chaidh	rach	AUX	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
2	am	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	prògram	prògram	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
4	a	a	PART	Ug	PartType=Inf	5	mark:prt	_	_
5	dhèanamh	dèan	NOUN	Nv	VerbForm=Inf	0	root	_	_
6	le	le	ADP	Sp	_	7	case	_	_
7	Hummingbird	Hummingbird	PROPN	Nn	NounType=Prs	5	obl:agent	_	SpaceAfter=No
8	,	,	PUNCT	Fi	_	9	punct	_	_
9	companaidh	companaidh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
10	neo-eisimeileach	neo-eisimeileach	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	9	amod	_	_
11	ann	an	ADP	Sp	ExtPos=ADP	13	case	_	_
12	an	an	ADP	Sp	_	11	fixed	_	_
13	Éirinn	Éirinn	PROPN	Nt	NounType=Top	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	5	punct	_	_

~~~


