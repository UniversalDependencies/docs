---
layout: base
title:  'Statistics of acl:relcl in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-acl.html">acl</a></tt>.

1 nodes (0%) are attached to their parents as `acl:relcl`.

1 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl:relcl	color:blue
1	Město	město	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	_
2	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	3	case	_	_
3	kterém	který	DET	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	6	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	_
5	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	cítí	cítit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
7	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
9	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	_
10	každého	každý	DET	AAIS2----1A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	11	obl	_	_
11	svoje	svůj	DET	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


