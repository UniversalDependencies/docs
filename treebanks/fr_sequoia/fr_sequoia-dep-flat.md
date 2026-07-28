---
layout: base
title:  'Statistics of flat in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="fr_sequoia-dep-flat-name.html">flat:name</a></tt>.

2 nodes (0%) are attached to their parents as `flat`.

2 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `flat`: <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	7	7	NUM	_	Number=Sing|NumType=Card	13	obl:mod	_	Exponence[Number]=Inherent
3	août	août	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
6	neuf	neuf	NUM	_	Number=Plur|NumType=Card	9	nummod	_	Exponence[Number]=Inherent
7	cent	cent	NUM	_	NumType=Card	6	flat	_	_
8	vingt	vingt	NUM	_	NumType=Card	6	flat	_	_
9	photos	photo	NOUN	_	Gender=Fem|Number=Plur	13	nsubj:pass	_	Exponence[Gender]=Inherent
10	de	de	ADP	_	_	11	case	_	_
11	Hajj	Hajj	PROPN	_	_	9	nmod	_	_
12	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	_
13	retirées	retirer	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
14	de	de	ADP	_	_	16	case	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	base	base	NOUN	_	Gender=Fem|Number=Sing	13	obl:arg	_	Exponence[Gender]=Inherent
17	de	de	ADP	_	_	18	case	_	_
18	données	donnée	NOUN	_	Gender=Fem|Number=Plur	16	nmod	_	Exponence[Gender]=Inherent
19	de	de	ADP	_	_	20	case	_	_
20	Reuters	Reuters	PROPN	_	_	16	nmod	_	_
21	[	[	PUNCT	_	_	22	punct	_	SpaceAfter=No
22	8	8	NUM	_	Number=Sing|NumType=Card	13	obl:mod	_	Exponence[Number]=Inherent|SpaceAfter=No
23	]	]	PUNCT	_	_	22	punct	_	SpaceAfter=No
24	.	.	PUNCT	_	_	13	punct	_	_

~~~


