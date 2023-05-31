---
layout: base
title:  'Statistics of parataxis in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `parataxis`

This relation is universal.

99 nodes (0%) are attached to their parents as `parataxis`.

98 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5555555555556.

The following 16 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (59; 60% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (11; 11% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	"	"	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Amavo	amare	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	0	root	_	_
3	i	il	DET	DT	Gender=Masc|Number=Plur	4	det	_	_
4	colori	colore	NOUN	NN	Gender=Masc|Number=Plur	2	obj	_	_
5	tropicali	tropicale	ADJ	JJ	Gender=Masc|Number=Plur	4	amod	_	SpaceAfter=No
6	"	"	PUNCT	''	_	2	punct	_	SpaceAfter=No
7	,	,	PUNCT	,	_	2	punct	_	_
8	dice	dire	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 parataxis	color:blue
1	Altri	altro	DET	DT	Gender=Masc|Number=Plur	2	det	_	_
2	quattro	quattro	NUM	CD	_	3	nsubj	_	_
3	danno	danno	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	le	il	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	declinazioni	declinazione	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	minime	minimo	ADJ	JJS	Degree=Abs|Gender=Fem|Number=Sing	5	amod	_	_
7	e	e	CCONJ	CC	_	8	cc	_	_
8	massime	massima	ADJ	JJS	Degree=Abs|Gender=Fem|Number=Plur	6	conj	_	_
9	di	di	ADP	IN	_	11	case	_	_
10	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	luna	luna	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
12	piena	pieno	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
13	:	:	PUNCT	:	_	3	punct	_	_
14	in	in	ADP	IN	_	15	case	_	_
15	estate	estate	NOUN	NN	Gender=Fem|Number=Sing	3	parataxis	_	_
16	e	e	CCONJ	CC	_	18	cc	_	_
17	in	in	ADP	IN	_	18	case	_	_
18	inverno	inverno	NOUN	NN	Gender=Masc|Number=Sing	15	conj	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis	color:blue
1	"	"	PUNCT	``	_	6	punct	_	SpaceAfter=No
2	ETA	ETA	PROPN	NNP	Number=Sing	6	nsubj	_	_
3	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	_	_
4	a	a	ADP	IN	_	6	case	_	_
5	gli	il	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	sgoccioli	sgocciolo	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	"	"	PUNCT	''	_	6	punct	_	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	_	_
9	ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	aux	_	_
10	rivelato	rivelare	VERB	VBN	Tense=Past	6	parataxis	_	_
11	un	uno	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	contingente	contingente	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
13	francese	francese	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	Proper=True|SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


