---
layout: base
title:  'Statistics of ccomp in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `ccomp`

This relation is universal.

1420 nodes (0%) are attached to their parents as `ccomp`.

1398 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.79929577464789.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1095; 77% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (98; 7% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (85; 6% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (40; 3% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (33; 2% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (23; 2% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (15; 1% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	stessa	stesso	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
3	che	che	PRON	PR	PronType=Rel	4	nsubj	_	_
4	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	anche	anche	ADV	B	_	6	advmod	_	_
6	stendere	stendere	VERB	V	VerbForm=Inf	4	ccomp	_	_
7	su	su	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	pavimento	pavimento	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
10	pelli	pelle	NOUN	S	Gender=Fem|Number=Plur	6	obj	_	_
11	di	di	ADP	E	_	12	case	_	_
12	tigre	tigre	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	essere	essere	AUX	V	VerbForm=Inf	3	cop	_	_
3	corretti	corretto	ADJ	A	Gender=Masc|Number=Plur	1	ccomp	_	_
4	con	con	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	pubblico	pubblico	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 ccomp	color:blue
1	Sappiamo	sapere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	1	nsubj	_	_
3	che	che	SCONJ	CS	_	8	mark	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	terra	terra	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	in	in	ADP	E	_	8	case	_	_
8	pericolo	pericolo	NOUN	S	Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


