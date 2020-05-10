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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Dvacet	dvacet	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	2:nummod:gov	_
2	minut	minuta	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Ale	ale	CCONJ	J^-------------	_	10	cc	10:cc	_
2	jen	jen	PART	TT-------------	_	3	advmod:emph	3:advmod:emph	_
3	pár	pár	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	4:nummod:gov	_
4	jich	on	PRON	PPMP2--3-------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj	10:nsubj	_
5	toho	ten	DET	PDIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
6	"	"	PUNCT	Z:-------------	_	8	punct	8:punct	SpaceAfter=No
7	odpadního	odpadní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	materiálu	materiál	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	obl:arg	10:obl:arg:gen	SpaceAfter=No
9	"	"	PUNCT	Z:-------------	_	8	punct	8:punct	_
10	využilo	využít	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


