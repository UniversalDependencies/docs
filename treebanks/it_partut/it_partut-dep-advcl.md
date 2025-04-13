---
layout: base
title:  'Statistics of advcl in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `advcl`

This relation is universal.

698 nodes (1%) are attached to their parents as `advcl`.

517 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.25358166189112.

The following 16 pairs of parts of speech are connected with `advcl`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (526; 75% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (80; 11% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (26; 4% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (18; 3% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (14; 2% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	Dopo	dopo	SCONJ	CS	_	3	mark	_	_
2	aver	avere	AUX	VA	VerbForm=Inf	3	aux	_	_
3	sporulato	sporulato	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	marciscono	marcire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 advcl	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	Ucraina	Ucraina	PROPN	SP	_	3	nsubj	_	_
3	resisterà	resistere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	a	a	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	prepotenza	prepotenza	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
7	-	-	PUNCT	FF	_	3	punct	_	_
8	da	da	ADP	E	_	9	case	_	_
9	sola	solo	ADJ	A	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	3	punct	_	_
11	se	se	SCONJ	CS	_	12	mark	_	_
12	necessario	necessario	ADJ	A	Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	_

~~~


