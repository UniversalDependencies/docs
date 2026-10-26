---
layout: base
title:  'Statistics of flat in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_porttinari-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_porttinari-dep-flat-name.html">flat:name</a></tt>.

90 nodes (0%) are attached to their parents as `flat`.

90 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01111111111111.

The following 1 pairs of parts of speech are connected with `flat`: <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (90; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Lucro	lucro	NOUN	_	Gender=Masc|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
2	acima	acima	ADV	_	_	1	advmod	1:advmod	_
3	de	de	ADP	_	_	4	case	4:case	_
4	R$	R$	SYM	_	_	2	obl	2:obl:de	_
5	35	35	NUM	_	NumType=Card	4	nummod	4:nummod	_
6	mil	mil	NUM	_	NumType=Card	5	flat	5:flat	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	8:aux:pass	_
8	tributado	tributar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
9	por	por	ADP	_	_	11	case	11:case	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	Receita	Receita	PROPN	_	_	8	obl:agent	8:obl:agent	_
12	em	em	ADP	_	_	14	case	14:case	_
13	15	15	NUM	_	NumType=Card	14	nummod	14:nummod	SpaceAfter=No
14	%	%	SYM	_	_	8	obl	8:obl:em	_
15	sim	sim	ADV	_	_	8	advmod	8:advmod	SpaceAfter=No
16	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


