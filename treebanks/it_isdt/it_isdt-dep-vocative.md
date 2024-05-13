---
layout: base
title:  'Statistics of vocative in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `vocative`

This relation is universal.

102 nodes (0%) are attached to their parents as `vocative`.

86 instances of `vocative` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.44117647058824.

The following 10 pairs of parts of speech are connected with `vocative`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (72; 71% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (11; 11% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 vocative	color:blue
1	"	"	PUNCT	FB	_	7	punct	7:punct	SpaceAfter=No
2	No	no	INTJ	I	Polarity=Neg	7	discourse	7:discourse	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	cattolici	cattolico	NOUN	S	Gender=Masc|Number=Plur	7	vocative	7:vocative	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	4:punct	_
6	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	obj	7:obj	_
7	sposa	sposare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	cardinale	cardinale	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
10	Puljic	Puljic	PROPN	SP	_	9	nmod	9:nmod	SpaceAfter=No
11	"	"	PUNCT	FB	_	7	punct	7:punct	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	2:amod	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	6:vocative	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	sarà	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	6:cop	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	6:csubj	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	9:det	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	"	"	PUNCT	FB	_	4	punct	4:punct	SpaceAfter=No
2	Chirac	Chirac	PROPN	SP	_	4	vocative	4:vocative	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	ricorda	ricordare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	4	expl	4:expl	_
6	Hiroshima	Hiroshima	PROPN	SP	_	4	obj	4:obj	SpaceAfter=No
7	"	"	PUNCT	FB	_	4	punct	4:punct	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


