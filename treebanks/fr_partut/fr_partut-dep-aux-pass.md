---
layout: base
title:  'Statistics of aux:pass in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_partut-dep-aux-caus.html">aux:caus</a></tt>.

241 nodes (1%) are attached to their parents as `aux:pass`.

241 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20746887966805.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (240; 100% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mycélium	mycélium	NOUN	S	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	doué	douer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	de	de	ADP	E	_	6	case	_	_
6	sensations	sensation	NOUN	S	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	stocks	stock	NOUN	S	Gender=Fem|Number=Plur	9	nsubj:pass	_	_
3	visés	viser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	_
4	à	à	ADP	E	_	6	case	_	_
5	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
7	1	1	NUM	N	NumType=Card	6	nummod	_	_
8	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
9	déduits	déduit	ADJ	A	Number=Plur	0	root	_	_
10	de	de	ADP	E	_	12	case	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	quantité	quantité	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
13	excédant	excéder	VERB	V	Tense=Pres|VerbForm=Part	12	acl	_	_
14	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	report	report	ADJ	A	Number=Sing	13	obj	_	_
16	normal	normal	ADJ	A	Gender=Masc|Number=Sing	15	amod	_	_
17	de	de	ADP	E	_	18	case	_	_
18	stocks	stock	ADJ	A	Number=Plur	15	obl	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	9	punct	_	_

~~~


