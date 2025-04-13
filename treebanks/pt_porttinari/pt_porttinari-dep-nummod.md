---
layout: base
title:  'Statistics of nummod in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `nummod`

This relation is universal.

1793 nodes (1%) are attached to their parents as `nummod`.

1628 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08533184606804.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1340; 75% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (429; 24% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	A	a	ADP	_	_	3	case	3:case	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	lado	lado	NOUN	_	Gender=Masc|Number=Sing	10	obl	10:obl:a	_
4	de	de	ADP	_	_	6	case	6:case	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	mulher	mulher	NOUN	_	Gender=Fem|Number=Sing	3	nmod	3:nmod:de	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	Inge	Inge	PROPN	_	_	6	appos	6:appos	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	brincou	brincar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	13:punct	_
12	"	"	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
13	Votei	votar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	10	ccomp:speech	10:ccomp:speech	_
14	duas	dois	NUM	_	Gender=Fem|NumType=Card	15	nummod	15:nummod	_
15	vezes	vez	NOUN	_	Gender=Fem|Number=Plur	13	obl	13:obl	SpaceAfter=No
16	"	"	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
17	.	.	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Doria	Doria	PROPN	_	_	2	nsubj	2:nsubj	_
2	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	31	31	NUM	_	NumType=Card	4	nummod	4:nummod	SpaceAfter=No
4	%	%	SYM	_	_	2	obj	2:obj	_
5	de	de	ADP	_	_	7	case	7:case	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	7:det	_
7	preferências	preferência	NOUN	_	Gender=Fem|Number=Plur	4	nmod	4:nmod:de	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	votação	votação	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	aconteceu	acontecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	em	em	ADP	_	_	6	case	6:case	_
5	900	900	NUM	_	NumType=Card	6	nummod	6:nummod	_
6	cidades	cidade	NOUN	_	Gender=Fem|Number=Plur	3	obl	3:obl:em	_
7	de	de	ADP	_	_	10	case	10:case	_
8	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	10:det	_
9	três	três	NUM	_	NumType=Card	10	nummod	10:nummod	_
10	Estados	Estados	PROPN	_	_	6	nmod	6:nmod:de	_
11	de	de	ADP	_	_	13	case	13:case	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
13	Sul	Sul	PROPN	_	_	10	nmod	10:nmod:de	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


