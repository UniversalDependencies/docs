---
layout: base
title:  'Statistics of xcomp in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `xcomp`

This relation is universal.

457 nodes (1%) are attached to their parents as `xcomp`.

453 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.49671772428884.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (279; 61% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (92; 20% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (71; 16% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Spero	sperare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	di	di	ADP	E	_	3	mark	_	_
3	sfatare	sfatare	VERB	V	VerbForm=Inf	1	xcomp	_	_
4	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	pregiudizio	pregiudizio	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	_
6	per	per	ADP	E	_	7	case	_	_
7	sempre	sempre	ADV	B	_	3	advmod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	3	punct	_	_
9	con	con	ADP	E	_	10	case	_	_
10	voi	voi	PRON	PE	Number=Plur|Person=2|PronType=Prs	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Osservando	osservare	VERB	V	VerbForm=Ger	6	advcl	_	_
2	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
3	,	,	PUNCT	FF	_	1	punct	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	micelio	micelio	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
6	appare	apparire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	ramificato	ramificato	ADJ	A	Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Prototaxites	Prototaxites	PROPN	SP	_	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	restando	restare	VERB	V	VerbForm=Ger	8	advcl	_	_
5	bassi	basso	NOUN	S	Gender=Masc|Number=Plur	4	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	4	punct	_	_
7	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	alto	alto	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
9	circa	circa	ADV	B	_	10	advmod	_	_
10	1	1	NUM	N	NumType=Card	11	nummod	_	_
11	metro	metro	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


