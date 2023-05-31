---
layout: base
title:  'Statistics of csubj in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="it_isdt-dep-csubj-pass.html">csubj:pass</a></tt>.

313 nodes (0%) are attached to their parents as `csubj`.

256 instances of `csubj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53674121405751.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (131; 42% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (104; 33% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (42; 13% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	duro	duro	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	_
3	ammetter	ammettere	VERB	V	VerbForm=Inf	2	csubj	2:csubj	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	3:obj	_
5	,	,	PUNCT	FF	_	10	punct	10:punct	_
6	ma	ma	CCONJ	CC	_	10	cc	10:cc	_
7	qualcuno	qualcuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	10:nsubj	_
8	insostituibile	insostituibile	ADJ	A	Number=Sing	7	amod	7:amod	_
9	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	10	expl	10:expl	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	2:conj:ma	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	12:nsubj	_
2	e	e	CCONJ	CC	_	3	cc	3:cc	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	1:conj:e|12:nsubj	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	6:punct	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	6:iobj	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	12:parataxis	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	6:csubj	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj	_
9	,	,	PUNCT	FF	_	12	punct	12:punct	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	12:obl	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
13	in	in	ADP	E	_	14	case	14:case	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	12:obl:in	_
15	qui	qui	ADV	B	_	12	advmod	12:advmod	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
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


