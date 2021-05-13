---
layout: base
title:  'Statistics of ccomp in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `ccomp`

This relation is universal.

220 nodes (1%) are attached to their parents as `ccomp`.

220 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.94090909090909.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (171; 78% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (20; 9% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (18; 8% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	pense	penser	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	CS	_	7	mark	_	_
4	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	vote	vote	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
6	se	se	PRON	P	Person=3|PronType=Prs	7	obj	_	_
7	déroule	dérouler	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	en	en	ADP	E	_	10	case	_	_
9	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	moment	moment	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
11	même	même	ADJ	A	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	crois	croire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu'	que	SCONJ	CS	_	5	mark	_	SpaceAfter=No
4	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	faut	falloir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	que	que	SCONJ	CS	_	9	mark	_	_
7	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	soyons	être	AUX	V	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	capables	capable	ADJ	A	Number=Plur	5	ccomp	_	_
10	de	de	ADP	E	_	12	mark	_	_
11	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
12	dire	dire	VERB	V	VerbForm=Inf	9	advcl	_	_
13	haut	haut	ADV	_	_	12	advmod	_	_
14	et	et	CCONJ	CC	_	15	cc	_	_
15	fort	fort	ADV	_	_	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
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


