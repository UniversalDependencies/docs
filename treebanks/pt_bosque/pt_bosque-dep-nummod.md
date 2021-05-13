---
layout: base
title:  'Statistics of nummod in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `nummod`

This relation is universal.

2629 nodes (1%) are attached to their parents as `nummod`.

2141 instances of `nummod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16622289844047.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2003; 76% instances), <tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (415; 16% instances), <tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (133; 5% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (42; 2% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	estava	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	acompanhados	acompanhado	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
4	de	de	ADP	_	_	6	case	_	_
5	três	três	NUM	_	NumType=Card	6	nummod	_	_
6	agentes	agente	NOUN	_	Gender=Masc|Number=Plur	3	obl	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	PF	PF	PROPN	_	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	E	e	CCONJ	_	_	4	cc	_	_
2	alguns	algum	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	4	nsubj	_	_
3	vão	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	ter	ter	VERB	_	VerbForm=Inf	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	30	30	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	_	_	4	obl	_	SpaceAfter=No
8	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Descida	descida	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	20	20	NUM	_	NumType=Card	4	nummod	_	_
4	por	por	ADP	_	_	1	nmod	_	MWE=por_cento|MWEPOS=NOUN
5	cento	cento	NUM	_	Gender=Masc|Number=Sing|NumType=Mult	4	compound	_	_
6	registada	registar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	em	em	ADP	_	_	8	case	_	_
8	Abril	abril	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_

~~~


