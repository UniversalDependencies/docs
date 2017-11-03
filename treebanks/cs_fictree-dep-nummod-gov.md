---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-nummod.html">nummod</a></tt>.

295 nodes (0%) are attached to their parents as `nummod:gov`.

290 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28135593220339.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (287; 97% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (8; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	"	"	PUNCT	Z:-------------	_	2	punct	_	_
2	Beru	brát	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	2	expl:pv	_	_
4	ho	on	PRON	PHIS4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	2	obj	_	_
5	jednou	jednou	ADV	Cv-------------	NumType=Mult	2	obl	_	_
6	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	_	_
7	pár	pár	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	8	nummod:gov	_	_
8	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	obl	_	_
9	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Ale	ale	CCONJ	J^-------------	_	10	cc	_	_
2	jen	jen	PART	TT-------------	_	3	advmod:emph	_	_
3	pár	pár	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	_	_
4	jich	on	PRON	PPMP2--3-------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
5	toho	ten	DET	PDIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
6	"	"	PUNCT	Z:-------------	_	8	punct	_	_
7	odpadního	odpadní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	materiálu	materiál	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
9	"	"	PUNCT	Z:-------------	_	8	punct	_	_
10	využilo	využít	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


