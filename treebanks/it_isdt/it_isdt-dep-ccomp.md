---
layout: base
title:  'Statistics of ccomp in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `ccomp`

This relation is universal.

1456 nodes (0%) are attached to their parents as `ccomp`.

1434 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77678571428571.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1116; 77% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (100; 7% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (96; 7% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (42; 3% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (35; 2% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (22; 2% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (15; 1% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	stessa	stesso	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	0	root	0:root|4:nsubj	_
3	che	che	PRON	PR	PronType=Rel	4	nsubj	2:ref	_
4	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	anche	anche	ADV	B	_	6	advmod	6:advmod	_
6	stendere	stendere	VERB	V	VerbForm=Inf	4	ccomp	4:ccomp	_
7	su	su	ADP	E	_	9	case	9:case	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	pavimento	pavimento	NOUN	S	Gender=Masc|Number=Sing	6	obl	6:obl:su	_
10	pelli	pelle	NOUN	S	Gender=Fem|Number=Plur	6	obj	6:obj	_
11	di	di	ADP	E	_	12	case	12:case	_
12	tigre	tigre	NOUN	S	Gender=Fem|Number=Sing	10	nmod	10:nmod:di	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	essere	essere	AUX	VA	VerbForm=Inf	3	cop	3:cop	_
3	corretti	corretto	ADJ	A	Gender=Masc|Number=Plur	1	ccomp	1:ccomp	_
4	con	con	ADP	E	_	6	case	6:case	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	pubblico	pubblico	NOUN	S	Gender=Masc|Number=Sing	3	obl	3:obl:con	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 ccomp	color:blue
1	Sappiamo	sapere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	1	nsubj	1:nsubj	_
3	che	che	SCONJ	CS	_	8	mark	8:mark	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	terra	terra	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
7	in	in	ADP	E	_	8	case	8:case	_
8	pericolo	pericolo	NOUN	S	Gender=Masc|Number=Sing	1	ccomp	1:ccomp	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


