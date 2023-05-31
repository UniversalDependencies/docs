---
layout: base
title:  'Statistics of punct in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `punct`

This relation is universal.

5467 nodes (10%) are attached to their parents as `punct`.

4389 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.84177794036949.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (2531; 46% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1734; 32% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (353; 6% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (311; 6% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (266; 5% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (140; 3% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (103; 2% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="it_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="it_partut-pos-ADP.html">ADP</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-DET.html">DET</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Vorrei	volere	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	infine	infine	ADV	B	_	3	advmod	_	_
3	soffermar	soffermare	VERB	V	VerbForm=Inf	0	root	_	_
4	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
5	su	su	ADP	E	_	8	case	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	ultimo	ultimo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	8	amod	_	_
8	punto	punto	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	1	1	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Definizioni	definizione	NOUN	S	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	,	,	PUNCT	FF	_	6	punct	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	in	in	ADP	E	_	14	case	_	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
15	qui	qui	ADV	B	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_

~~~


