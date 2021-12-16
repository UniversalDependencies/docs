---
layout: base
title:  'Statistics of obj in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `obj`

This relation is universal.

446 nodes (7%) are attached to their parents as `obj`.

355 instances of `obj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97533632286996.

The following 5 pairs of parts of speech are connected with `obj`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (277; 62% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (156; 35% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (9; 2% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	degli	degli	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	_
3	occhiali	occhiale	NOUN	S	Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	_
6	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	amo	amare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Strappava	strappare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	Marco	Marco	PROPN	SP	_	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	4	punct	_	_
4	toccava	toccare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	_
5	su	su	ADP	E	_	8	case	_	_
6	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
7	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	testa	testa	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
9	e	e	CCONJ	CC	_	11	cc	_	_
10	Marco	Marco	PROPN	SP	_	11	nsubj	_	_
11	cadeva	cadere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


