---
layout: base
title:  'Statistics of flat in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_porttinari-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_porttinari-dep-flat-name.html">flat:name</a></tt>.

92 nodes (0%) are attached to their parents as `flat`.

92 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02173913043478.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (90; 98% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (2; 2% instances).


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
16	.	.	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	Vamos	ir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux	2:aux	_
2	traduzir	traduzir	VERB	_	VerbForm=Inf	0	root	0:root	_
3	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	4:det	_
4	expressão	expressão	NOUN	_	Gender=Fem|Number=Sing	2	obj	2:obj	SpaceAfter=No
5	:	:	PUNCT	_	_	7	punct	7:punct	_
6	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	noblesse	noblesse	X	_	Foreign=Yes	12	nsubj	12:nsubj	_
8	de	de	X	_	Foreign=Yes	7	flat	7:flat	_
9	robe	robe	X	_	Foreign=Yes	7	flat	7:flat	SpaceAfter=No
10	"	"	PUNCT	_	_	7	punct	7:punct	_
11	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	nobreza	nobreza	NOUN	_	Gender=Fem|Number=Sing	2	parataxis	2:parataxis	_
13	togada	togado	ADJ	_	Gender=Fem|Number=Sing	12	amod	12:amod	_
14	em	em	ADP	_	_	15	case	15:case	_
15	português	português	NOUN	_	Gender=Masc|Number=Sing	12	nmod	12:nmod:em	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


