---
layout: base
title:  'Statistics of obl:agent in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_czesl-dep-obl-arg.html">obl:arg</a></tt>.

1 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 obl:agent	color:blue
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


