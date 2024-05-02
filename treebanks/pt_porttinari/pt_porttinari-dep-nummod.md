---
layout: base
title:  'Statistics of nummod in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `nummod`

This relation is universal.

1794 nodes (1%) are attached to their parents as `nummod`.

1629 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08528428093645.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1340; 75% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (429; 24% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	A	a	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	lado	lado	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	_
4	de	de	ADP	_	_	6	case	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	mulher	mulher	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Inge	Inge	PROPN	_	_	6	appos	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	brincou	brincar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	Votei	votar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	10	ccomp:speech	_	_
14	duas	dois	NUM	_	Gender=Fem|NumType=Card	15	nummod	_	_
15	vezes	vez	NOUN	_	Gender=Fem|Number=Plur	13	obl	_	SpaceAfter=No
16	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
17	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Doria	Doria	PROPN	_	_	2	nsubj	_	_
2	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	31	31	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
4	%	%	SYM	_	_	2	obj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	preferências	preferência	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	votação	votação	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	aconteceu	acontecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	em	em	ADP	_	_	6	case	_	_
5	900	900	NUM	_	NumType=Card	6	nummod	_	_
6	cidades	cidade	NOUN	_	Gender=Fem|Number=Plur	3	obl	_	_
7	de	de	ADP	_	_	10	case	_	_
8	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
9	três	três	NUM	_	NumType=Card	10	nummod	_	_
10	Estados	Estados	PROPN	_	_	6	nmod	_	_
11	de	de	ADP	_	_	13	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Sul	Sul	PROPN	_	_	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


