---
layout: base
title:  'Statistics of xcomp in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `xcomp`

This relation is universal.

940 nodes (1%) are attached to their parents as `xcomp`.

932 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17234042553191.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (644; 69% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (137; 15% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (98; 10% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (24; 3% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (17; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	@user	@user	SYM	SYM	_	6	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Mario	mario	PROPN	SP	_	6	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	flat:name	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	impennare	impennare	VERB	V	VerbForm=Inf	6	xcomp	_	_
8	hahaha	hahaha	INTJ	I	_	6	discourse	_	_
9	:D	:D	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	RT	retweet	NOUN	S	_	4	dep	_	_
2	@user1	@user1	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	@user2	@user2	SYM	SYM	_	0	root	_	_
5	number	number	X	SW	_	4	flat:foreign	_	_
6	one	one	X	SW	_	4	flat:foreign	_	_
7	da	da	ADP	E	_	8	case	_	_
8	Rocco	rocco	PROPN	SP	_	4	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_
10	Puoi	potere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	morire	morire	VERB	V	VerbForm=Inf	4	parataxis	_	_
12	felice	felice	ADJ	A	Number=Sing	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 xcomp	color:blue
1	@user	@user	SYM	SYM	_	7	vocative:mention	_	_
2	a	a	ADP	E	_	3	case	_	_
3	Roma	roma	PROPN	SP	_	7	obl	_	_
4	invece	invece	ADV	B	_	7	advmod	_	_
5	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	cosí	cosí	ADV	B	_	7	advmod	_	_
7	primavera	primavera	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
8	che	che	SCONJ	CS	_	9	mark	_	_
9	sembra	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
10	gia	gia	ADV	B	_	9	advmod	_	_
11	giov	giovedì	NOUN	S	_	9	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


