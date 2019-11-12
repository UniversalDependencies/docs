---
layout: base
title:  'Statistics of appos in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `appos`

This relation is universal.

394 nodes (0%) are attached to their parents as `appos`.

394 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.45431472081218.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (258; 65% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (67; 17% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (34; 9% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (19; 5% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Na	na	ADP	Sl	Case=Loc	2	case	_	Dep=2|Rel=Atr
2	naperi	napera	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	9	obl	_	Dep=8|Rel=AdvO
3	(	(	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root
4	špici	špica	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	2	appos	_	SpaceAfter=No|Dep=0|Rel=Root
5	)	)	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root
6	kolesa	kolo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
7	pa	pa	CCONJ	Cc	_	9	advmod	_	Dep=0|Rel=Root
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Dep=0|Rel=Root
9	pritrjen	pritrjen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=8|Rel=Atr
10	magnet	magnet	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No|Dep=8|Rel=Sb
11	.	.	PUNCT	Z	_	9	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 appos	color:blue
1	Še	še	PART	Q	_	2	advmod	_	Dep=0|Rel=Root
2	grše	grd	ADJ	Agcnsn	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	Dep=4|Rel=Atr
3	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	2	aux	_	Dep=4|Rel=PPart
4	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	2	cop	_	SpaceAfter=No|Dep=0|Rel=Root
5	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
6	če	če	SCONJ	Cs	_	9	mark	_	Dep=9|Rel=Conj
7	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
8	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=9|Rel=PPart
9	srečal	srečati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	2	csubj	_	Dep=4|Rel=Sb
10	z	z	ADP	Si	Case=Ins	11	case	_	Dep=11|Rel=Atr
11	Damjanom	Damjan	PROPN	Npmsi	Case=Ins|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No|Dep=9|Rel=Obj
12	,	,	PUNCT	Z	_	15	punct	_	Dep=0|Rel=Root
13	z	z	ADP	Si	Case=Ins	15	case	_	Dep=15|Rel=Atr
14	njenim	njen	DET	Ps3msisf	Case=Ins|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	15	det	_	Dep=15|Rel=Atr
15	možem	mož	NOUN	Ncmsi	Case=Ins|Gender=Masc|Number=Sing	11	appos	_	SpaceAfter=No|Dep=0|Rel=Root
16	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Tam	tam	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvO
2	konča	končati	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	gimnazijo	gimnazija	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	Dep=2|Rel=Obj
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root
5	Poljane	Poljane	PROPN	Npfpn	Case=Nom|Gender=Fem|Number=Plur	3	appos	_	SpaceAfter=No|Dep=0|Rel=Root
6	)	)	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root
7	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


