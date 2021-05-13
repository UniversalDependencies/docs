---
layout: base
title:  'Statistics of nsubj:caus in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_partut-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:caus`.

4 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75.

The following 2 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:caus	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	conséquences	conséquence	NOUN	S	Gender=Fem|Number=Plur	7	nsubj:caus	_	_
3	ne	ne	PART	PART	Polarity=Neg	7	advmod	_	_
4	se	se	PRON	P	Person=3|PronType=Prs	7	obj:agent	_	_
5	font	faire	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
6	pas	pas	ADV	BN	Polarity=Neg	7	advmod	_	_
7	attendre	attendre	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:caus	color:blue
1	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj:caus	_	_
2	fait	faire	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:caus	_	_
3	s'	se	PRON	P	PronType=Prs	4	expl	_	SpaceAfter=No
4	effriter	effriter	VERB	V	VerbForm=Inf	0	root	_	_
5	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	rochers	rocher	NOUN	S	Gender=Fem|Number=Plur	4	obj:agent	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	13	punct	_	_
8	et	et	CCONJ	CC	_	13	cc	_	_
9	c'	ce	PRON	PD	PronType=Dem	13	nsubj	_	SpaceAfter=No
10	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	première	premier	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	13	amod	_	_
13	étape	étape	NOUN	S	Gender=Fem|Number=Sing	4	conj	_	_
14	dans	dans	ADP	E	_	16	case	_	_
15	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	production	production	NOUN	S	Gender=Fem|Number=Sing	13	nmod	_	_
17	de	de	ADP	E	_	18	case	_	_
18	sol	sol	ADJ	A	Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	4	punct	_	_

~~~


