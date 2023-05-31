---
layout: base
title:  'Statistics of discourse in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `discourse`

This relation is universal.

15 nodes (0%) are attached to their parents as `discourse`.

15 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (7; 47% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (4; 27% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	Merci	merci	ADV	B	_	8	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	8	vocative	_	_
4	Segni	Segni	PROPN	SP	_	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	ferai	faire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
9	bien	bien	ADV	B	_	10	advmod	_	_
10	volontiers	volontiers	ADV	B	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	Mais	mais	CCONJ	CC	_	4	cc	_	_
2	voici	voici	ADP	E	_	4	discourse	_	_
3	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	champignon	champignon	ADJ	A	Number=Sing	0	root	_	_
5	qui	qui	PRON	PR	PronType=Rel	11	nsubj	_	_
6	n'	ne	PART	PART	Polarity=Neg	11	advmod	_	SpaceAfter=No
7	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
8	plus	plus	ADV	B	_	11	advmod	_	_
9	de	de	ADP	E	_	11	case	_	_
10	première	premier	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	11	amod	_	_
11	jeunesse	jeunesse	NOUN	S	Gender=Fem|Number=Sing	4	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	4	punct	_	_

~~~


