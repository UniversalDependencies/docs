---
layout: base
title:  'Statistics of flat:name in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_partut-dep-flat-foreign.html">flat:foreign</a></tt>.

61 nodes (0%) are attached to their parents as `flat:name`.

61 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08196721311475.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (60; 98% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Voici	voici	ADP	E	_	3	discourse	_	_
2	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	microphotographies	microphotographie	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
4	de	de	ADP	E	_	5	case	_	_
5	Nick	Nick	PROPN	SP	_	3	nmod	_	_
6	Read	Read	PROPN	SP	_	5	flat:name	_	_
7	et	et	CCONJ	CC	_	8	cc	_	_
8	Patrick	Patrick	PROPN	SP	_	5	conj	_	_
9	Hickey	Hickey	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat:name	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	PCB	PCB	PROPN	SP	_	4	nsubj	_	_
3	s'	se	PRON	P	PronType=Prs	4	obj	_	SpaceAfter=No
4	accumulent	accumuler	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	chez	chez	ADP	E	_	7	case	_	_
6	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	dauphins	dauphin	NOUN	S	Gender=Masc|Number=Plur	4	obl	_	_
8	dans	dans	ADP	E	_	10	case	_	_
9	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	golfe	golfe	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
11	de	de	ADP	E	_	12	case	_	_
12	Sarasota	Sarasota	PROPN	SP	_	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	10	punct	_	_
14	à	à	ADP	E	_	16	case	_	_
15	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Texas	Texas	PROPN	SP	_	10	nmod	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	10	punct	_	_
18	en	en	ADP	E	_	19	case	_	_
19	Caroline	Caroline	PROPN	SP	_	10	nmod	_	_
20	du	du	ADP	E	_	19	flat:name	_	_
21	Nord	Nord	PROPN	SP	_	19	flat:name	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	4	punct	_	_

~~~


