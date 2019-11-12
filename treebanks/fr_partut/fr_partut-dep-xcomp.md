---
layout: base
title:  'Statistics of xcomp in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `xcomp`

This relation is universal.

199 nodes (1%) are attached to their parents as `xcomp`.

198 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57286432160804.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (115; 58% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (60; 30% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (15; 8% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	3	obj	_	_
3	invite	inviter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	E	_	6	mark	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	6	obj	_	_
6	lever	lever	VERB	V	VerbForm=Inf	3	xcomp	_	_
7	pour	pour	ADP	E	_	9	case	_	_
8	cette	ce	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	minute	minute	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
10	de	de	ADP	E	_	11	case	_	_
11	silence	silence	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	créer	créer	VERB	V	VerbForm=Inf	0	root	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	reproduire	reproduire	VERB	V	VerbForm=Inf	1	conj	_	_
4	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	oeuvres	oeuvre	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
6	dites	dire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	5	acl	_	_
7	derivées	dérivé	ADJ	A	Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Même	même	ADV	B	_	6	advmod	_	_
2	si	si	SCONJ	CS	_	6	mark	_	_
3	ils	il	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
4	avaient	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	aux	_	_
5	été	être	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:pass	_	_
6	étiquetés	étiqueter	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	15	advcl	_	_
7	viande	viande	NOUN	S	Gender=Fem|Number=Sing	6	xcomp	_	_
8	de	de	ADP	E	_	9	case	_	_
9	baleine	baleine	NOUN	S	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	6	punct	_	_
11	c'	ce	PRON	PD	PronType=Dem	15	nsubj	_	SpaceAfter=No
12	était	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	_
13	de	de	ADP	E	_	15	case	_	_
14	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	viande	viande	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
16	de	de	ADP	E	_	17	case	_	_
17	dauphin	dauphin	NOUN	S	Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	15	punct	_	_

~~~


