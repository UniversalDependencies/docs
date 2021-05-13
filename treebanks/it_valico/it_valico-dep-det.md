---
layout: base
title:  'Statistics of det in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_valico-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_valico-dep-det-predet.html">det:predet</a></tt>.

908 nodes (13%) are attached to their parents as `det`.

908 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18061674008811.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (885; 97% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-SYM.html">SYM</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	degli	degli	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	_
3	occhiali	occhiale	NOUN	S	Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	ma	ma	CCONJ	CC	_	4	cc	_	_
2	che	che	DET	DQ	PronType=Int	3	det	_	_
3	cosa	cosa	PRON	PQ	Number=Sing|PronType=Int	4	nsubj	_	_
4	succeva	succere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	provviso	provviso	ADJ	A	Gender=Masc|Number=Sing	4	obl	_	LOC=adv
4	venne	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	tizio	tizio	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
7	con	con	ADP	E	_	9	case	_	_
8	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	viso	viso	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	furiosissimo	furioso	ADJ	A	Degree=Abs|Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	!	!	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


