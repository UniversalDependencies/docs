---
layout: base
title:  'Statistics of vocative in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `vocative`

This relation is universal.

20 nodes (0%) are attached to their parents as `vocative`.

11 instances of `vocative` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (13; 65% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-INTJ.html">INTJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 vocative	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	_
2	tvé	tvůj	DET	P8FS2---------1	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	3	det	_	_
3	číše	číše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	poesie	poesie	NOUN	NNFS5-----A----	Case=Voc|Gender=Fem|Number=Sing	7	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	musím	muset	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	píti	pít	VERB	Vf--------A---2	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Blaze	blaze	ADV	Vi-P---2--A----	Polarity=Pos	0	root	_	_
2	tobě	ty	PRON	PH-S3--2-------	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	obl:arg	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	1	punct	_	_
4	nevinňátko	neviňátko	NOUN	NNFS5-----A----	Case=Voc|Gender=Neut|Number=Sing	1	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	Že	že	SCONJ	J,-------------	_	9	mark	_	_
7	tvůj	tvůj	DET	PSYS1-S1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	outlý	útlý	ADJ	AAMS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj	_	_
9	zvadnul	zvadnout	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	ccomp	_	_
10	květ	květ	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
11	;	;	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Ó	ó	INTJ	II-------------	_	6	dep	_	_
2	básníku	básník	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	ty	ty	PRON	Vi-S---2--A----	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
5	jsi	být	AUX	Vi-S---2--A----	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	6	aux	_	_
6	roven	rovný	ADJ	ACYS------A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	0	root	_	_
7	jemu	on	PRON	PPZS3--3-------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obl:arg	_	SpaceAfter=No
8	!	!	PUNCT	Z:-------------	_	6	punct	_	_

~~~


