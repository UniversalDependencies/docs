---
layout: base
title:  'Statistics of cop in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `cop`

This relation is universal.

2196 nodes (1%) are attached to their parents as `cop`.

1924 instances of `cop` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0591985428051.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (1636; 74% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (233; 11% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (151; 7% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (98; 4% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (28; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (27; 1% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	A	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	ser	AUX	AUX	_	5	cop	_	_
4	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	chance	chance	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	ser	VERB	VERB	_	5	nmod	_	_
9	feliz	feliz	ADJ	ADJ	_	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	É	ser	AUX	AUX	_	2	cop	_	_
2	um	_	PRON	PRON	_	0	root	_	_
3	de	de	ADP	ADP	_	6	case	_	_
4	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
5	três	_	NUM	NUM	NumType=Card	6	nummod	_	_
6	ácidos	ácido	NOUN	NOUN	_	2	nmod	_	_
7	ftálicos	ftálico	ADJ	ADJ	_	6	amod	_	_
8	isoméricos	isomérico	ADJ	ADJ	_	6	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	E	e	CCONJ	_	_	7	cc	_	_
2	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
3	meus	meu	DET	_	Gender=Masc|Number=Plur|PronType=Prs	4	det	_	_
4	pais	pai	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	_
5	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	muito	muito	ADV	_	_	7	advmod	_	_
7	legais	legal	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
8	também	também	ADV	_	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	assim	assim	ADV	_	_	12	cc	_	_
11	como	como	ADP	_	_	10	fixed	_	_
12	os	o	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	7	conj	_	_
13	de	de	ADP	_	_	14	case	_	_
14	ele	ele	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nmod	_	_
15	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


