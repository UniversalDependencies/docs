---
layout: base
title:  'Statistics of parataxis in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `parataxis`

This relation is universal.

7 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 parataxis	color:blue
1	Elle	elle	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj:pass	_	_
2	sera	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	8	aux:pass	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	l'	le	PRON	P	Number=Sing|Person=3|PronType=Prs	6	obj	_	SpaceAfter=No
6	espère	espérer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	examinée	examiner	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	dans	dans	ADP	E	_	11	case	_	_
10	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	esprit	esprit	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
12	positif	positif	ADJ	A	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	femelles	femelle	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
3	après	après	ADP	E	_	5	mark	_	_
4	avoir	avoir	AUX	VA	VerbForm=Inf	5	aux	_	_
5	sevré	sevrer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
6	leur	leur	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	7	det	_	_
7	petit	petit	ADJ	A	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	2	punct	_	_
9	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	quantité	quantité	NOUN	S	Gender=Fem|Number=Sing	2	parataxis	_	_
11	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	peu	peu	ADV	B	_	13	advmod	_	_
13	moindre	moindre	ADJ	A	_	10	amod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	Certains	certain	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	_	_
2	étaient	être	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	de	de	ADP	E	_	5	case	_	_
4	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	viande	viande	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	E	_	7	case	_	_
7	baleine	baleine	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
8	illégale	illégal	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	5	punct	_	_
10	soit	être	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	dit	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	parataxis	_	_
12	en	en	ADP	E	_	13	mark	_	_
13	passant	passer	VERB	V	Tense=Pres|VerbForm=Part	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


