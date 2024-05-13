---
layout: base
title:  'Statistics of nummod in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `nummod`

This relation is universal.

312 nodes (1%) are attached to their parents as `nummod`.

174 instances of `nummod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.08653846153846.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (180; 58% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (66; 21% instances), <tt><a href="fr_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (33; 11% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (14; 4% instances), <tt><a href="fr_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (10; 3% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (9; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	1	1	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	_	_
3	Définitions	définition	NOUN	S	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nummod	color:blue
1	1	1	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Tout	tout	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
4	individu	individu	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
5	a	avoir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	droit	droit	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
7	à	à	ADP	E	_	9	case	_	_
8	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	nationalité	nationalité	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	convient	convenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	par	par	ADP	E	_	2	advmod	_	_
4	conséquent	conséquent	ADJ	A	Gender=Masc|Number=Sing	3	fixed	_	_
5	d'	de	ADP	E	_	6	mark	_	SpaceAfter=No
6	abroger	abroger	VERB	V	VerbForm=Inf	2	csubj	_	_
7	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	directive	directive	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	_
9	78	78	NUM	N	NumType=Card	8	nummod	_	SpaceAfter=No
10	/	/	PUNCT	FF	_	9	punct	_	SpaceAfter=No
11	170	170	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
12	/	/	PUNCT	FF	_	9	punct	_	SpaceAfter=No
13	CEE	CEE	PROPN	SP	_	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	_

~~~


