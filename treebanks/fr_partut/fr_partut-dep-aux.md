---
layout: base
title:  'Statistics of aux in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_partut-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_partut-dep-aux-pass.html">aux:pass</a></tt>.

547 nodes (2%) are attached to their parents as `aux`.

546 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78062157221207.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (520; 95% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (19; 3% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Cher	cher	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
2	collègue	collègue	NOUN	S	Gender=Masc|Number=Sing	5	vocative	_	_
3	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	allons	aller	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	vérifier	vérifier	VERB	V	VerbForm=Inf	0	root	_	_
6	tout	tout	DET	T	Gender=Masc|Number=Sing|PronType=Tot	7	det	_	_
7	cela	cela	PRON	PD	Number=Sing|Person=3|PronType=Dem	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	L'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	élaboration	élaboration	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
3	de	de	ADP	E	_	5	case	_	_
4	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	rapport	rapport	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	a	avoir	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	été	être	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
8	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	occasion	occasion	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
10	de	de	ADP	E	_	11	mark	_	_
11	mener	mener	VERB	V	VerbForm=Inf	9	acl	_	_
12	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	intéressant	intéressant	ADJ	A	Gender=Masc|Number=Sing	14	amod	_	_
14	débat	débat	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
15	sur	sur	ADP	E	_	17	case	_	_
16	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	politique	politique	NOUN	S	Gender=Fem|Number=Sing	11	obl	_	_
18	régionale	régional	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	_
19	communautaire	communautaire	ADJ	A	Number=Sing	17	amod	_	_
20	en	en	ADP	E	_	17	advmod	_	_
21	général	général	ADJ	A	Gender=Masc|Number=Sing	20	fixed	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	9	punct	_	_

~~~


