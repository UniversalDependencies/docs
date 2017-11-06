---
layout: base
title:  'Statistics of vocative in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `vocative`

This relation is universal.

99 nodes (0%) are attached to their parents as `vocative`.

83 instances of `vocative` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5959595959596.

The following 12 pairs of parts of speech are connected with `vocative`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (69; 70% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (11; 11% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="it-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 vocative	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
2	No	no	INTJ	I	Polarity=Neg	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	cattolici	cattolico	NOUN	S	Gender=Masc|Number=Plur	7	vocative	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	2	punct	_	_
6	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	obj	_	_
7	sposa	sposare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	cardinale	cardinale	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
10	Puljic	Puljic	PROPN	SP	_	9	nmod	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	_	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	sarà	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	_	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	_	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 vocative	color:blue
1	Signor	signore	NOUN	S	Gender=Masc|Number=Sing	11	vocative	_	_
2	presidente	presidente	NOUN	S	Number=Sing	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	in	in	ADP	E	_	6	case	_	_
5	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	tipo	tipo	NOUN	S	Gender=Masc|Number=Sing	11	obl	_	_
7	di	di	ADP	E	_	8	case	_	_
8	regolamentazioni	regolamentazione	NOUN	S	Gender=Fem|Number=Plur	6	nmod	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	molto	molto	ADV	B	_	11	advmod	_	_
11	importante	importante	ADJ	A	Number=Sing	0	root	_	_
12	sforzar	sforzare	VERB	V	VerbForm=Inf	11	csubj	_	_
13	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	12	expl	_	_
14	di	di	ADP	E	_	16	mark	_	_
15	essere	essere	AUX	V	VerbForm=Inf	16	cop	_	_
16	flessibili	flessibile	ADJ	A	Number=Plur	12	xcomp	_	SpaceAfter=No
17	;	;	PUNCT	FC	_	11	punct	_	_

~~~


