---
layout: base
title:  'Statistics of det in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_partut-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_partut-dep-det-predet.html">det:predet</a></tt>.

8863 nodes (16%) are attached to their parents as `det`.

8856 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19011621347174.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (7992; 90% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (406; 5% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (209; 2% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (105; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (50; 1% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (36; 0% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (34; 0% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="it_partut-pos-ADP.html">ADP</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (8; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj:pass	_	_
2	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	scoperto	scoprire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	per	per	ADP	E	_	7	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	prima	primo	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	volta	volta	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
8	in	in	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	1859	1859	NUM	N	NumType=Card	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


