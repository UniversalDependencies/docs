---
layout: base
title:  'Statistics of det in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `det`

This relation is universal.

4758 nodes (17%) are attached to their parents as `det`.

4753 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09962168978562.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (4478; 94% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (125; 3% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (42; 1% instances), <tt><a href="fr_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (35; 1% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (34; 1% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (23; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="fr_partut-pos-DET.html">DET</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="fr_partut-pos-X.html">X</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	voudrais	vouloir	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	encore	encore	ADV	B	_	4	advmod	_	_
4	aborder	aborder	VERB	V	VerbForm=Inf	0	root	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	dernier	dernier	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	point	point	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	savons	savoir	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	tous	tout	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	2	obl	_	_
4	que	que	SCONJ	CS	_	9	mark	_	_
5	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Terre	Terre	PROPN	SP	_	9	nsubj	_	_
7	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	en	en	ADP	E	_	9	case	_	_
9	danger	danger	NOUN	S	Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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


