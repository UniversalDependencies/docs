---
layout: base
title:  'Statistics of aux:pass in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_valico-dep-aux.html">aux</a></tt>.

2 nodes (0%) are attached to their parents as `aux:pass`.

2 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Comunque	comunque	ADV	B	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Giorgia	Giorgia	PROPN	SP	_	6	nsubj	_	_
4	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
5	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	felice	felice	ADJ	A	Number=Sing	0	root	_	_
7	d'	di	ADP	E	_	9	mark	_	SpaceAfter=No
8	essere	essere	AUX	VA	VerbForm=Inf	9	aux:pass	_	_
9	salvato	salvare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


