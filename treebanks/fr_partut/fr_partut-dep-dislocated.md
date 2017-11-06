---
layout: base
title:  'Statistics of dislocated in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `dislocated`

This relation is universal.
There are 1 language-specific subtypes of `dislocated`: <tt><a href="fr_partut-dep-dislocated-cleft.html">dislocated:cleft</a></tt>.

8 nodes (0%) are attached to their parents as `dislocated`.

6 instances of `dislocated` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated	color:blue
1	Ça	ce	PRON	PD	PronType=Dem	5	nsubj	_	_
2	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	être	être	AUX	V	VerbForm=Inf	5	cop	_	_
4	très	très	ADV	B	_	5	advmod	_	_
5	compliqué	compliqué	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	océan	océan	NOUN	S	Gender=Masc|Number=Sing	5	dislocated	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Ces	ce	DET	DD	Number=Plur|PronType=Dem	2	det	_	_
2	femelles	femelle	NOUN	S	Gender=Fem|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	elles	elle	PRON	PE	Gender=Fem|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
5	n'	ne	PART	PART	Polarity=Neg	7	advmod	_	SpaceAfter=No
6	y	y	ADV	B	_	7	advmod	_	_
7	sont	être	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	pour	pour	ADP	E	_	9	case	_	_
9	rien	rien	PRON	PI	PronType=Ind	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 dislocated	color:blue
1	Et	et	CCONJ	CC	_	8	cc	_	_
2	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	prédateur	prédateur	NOUN	S	Gender=Masc|Number=Sing	8	dislocated	_	_
4	suprême	suprême	ADJ	A	Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	c'	ce	PRON	PD	PronType=Dem	8	nsubj	_	SpaceAfter=No
7	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	0	root	_	_
9	bien	bien	ADV	B	_	10	advmod	_	_
10	sûr	sûr	ADV	B	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_

~~~


