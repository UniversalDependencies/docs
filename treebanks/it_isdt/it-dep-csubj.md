---
layout: base
title:  'Statistics of csubj in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="it-dep-csubj-pass.html">csubj:pass</a></tt>.

315 nodes (0%) are attached to their parents as `csubj`.

258 instances of `csubj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61587301587302.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (131; 42% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (107; 34% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (41; 13% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	duro	duro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	ammetter	ammettere	VERB	V	VerbForm=Inf	2	csubj	_	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	,	,	PUNCT	FF	_	10	punct	_	_
6	ma	ma	CCONJ	CC	_	10	cc	_	_
7	qualcuno	qualcuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	_	_
8	insostituibile	insostituibile	ADJ	A	Number=Sing	7	amod	_	_
9	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	10	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	,	,	PUNCT	FF	_	12	punct	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	in	in	ADP	E	_	14	case	_	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
15	qui	qui	ADV	B	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
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


