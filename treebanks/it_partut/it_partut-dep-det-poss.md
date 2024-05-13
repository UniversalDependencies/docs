---
layout: base
title:  'Statistics of det:poss in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_partut-dep-det-predet.html">det:predet</a></tt>.

560 nodes (1%) are attached to their parents as `det:poss`.

550 instances of `det:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10178571428571.

The following 3 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (553; 99% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-DET.html">DET</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Captain	Captain	PROPN	SP	_	12	nsubj	_	_
4	Ahab	Ahab	PROPN	SP	_	3	flat:name	_	_
5	in	in	ADP	E	_	6	case	_	_
6	Moby	Moby	PROPN	SP	_	12	nmod	_	SpaceAfter=No
7	-	-	PUNCT	FF	_	6	punct	_	SpaceAfter=No
8	Dick	Dick	PROPN	SP	_	6	flat:name	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
10	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	classico	classico	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
12	eroe	eroe	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
13	tragico	tragico	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	12	punct	_	_
15	ispirato	ispirato	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
16	a	a	ADP	E	_	17	case	_	_
17	King	King	PROPN	SP	_	15	obl	_	_
18	Lear	Lear	PROPN	SP	_	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:poss	color:blue
1	Femmine	femmina	NOUN	S	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	dopo	dopo	ADP	E	_	5	case	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	svezzamento	svezzamento	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
6	di	di	ADP	E	_	10	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
8	loro	loro	DET	AP	Poss=Yes|PronType=Prs	10	det:poss	_	_
9	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	10	amod	_	_
10	piccolo	piccolo	ADJ	A	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	1	punct	_	_
12	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	tasso	tasso	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
14	inferiore	inferiore	ADJ	A	Degree=Cmp|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	1	punct	_	_

~~~


