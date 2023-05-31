---
layout: base
title:  'Statistics of dislocated in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `dislocated`

This relation is universal.

11 nodes (0%) are attached to their parents as `dislocated`.

9 instances of `dislocated` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.72727272727273.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (4; 36% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 dislocated	color:blue
1	Moi	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	_
2	non	non	ADV	BN	PronType=Neg	1	advmod	_	_
3	plus	plus	ADV	B	_	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
6	ne	ne	PART	PART	Polarity=Neg	10	advmod	_	_
7	m'	me	PRON	P	Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
8	avez	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	pas	pas	ADV	BN	Polarity=Neg	10	advmod	_	_
10	donné	donner	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	parole	parole	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated	color:blue
1	Ça	ce	PRON	PD	PronType=Dem	2	nsubj	_	_
2	peut	pouvoir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	être	être	AUX	V	VerbForm=Inf	5	cop	_	_
4	très	très	ADV	B	_	5	advmod	_	_
5	compliqué	compliqué	ADJ	A	Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	océan	océan	NOUN	S	Gender=Masc|Number=Sing	5	dislocated	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

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


