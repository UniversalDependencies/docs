---
layout: base
title:  'Statistics of cc in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `cc`

This relation is universal.

552 nodes (2%) are attached to their parents as `cc`.

551 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49094202898551.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (229; 41% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (173; 31% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (52; 9% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (30; 5% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (25; 5% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (16; 3% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (14; 3% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	@user	@user	SYM	SYM	_	2	vocative:mention	_	_
2	Mario	mario	PROPN	SP	_	0	root	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	super	super	X	SW	_	2	appos	_	_
5	partes	partes	X	SW	_	4	flat:foreign	_	_
6	=	=	PUNCT	FF	_	7	punct	_	_
7	martirio	martirio	NOUN	S	Gender=Masc|Number=Sing	2	appos	_	_
8	o	o	CCONJ	CC	_	10	cc	_	_
9	superman	superman	PROPN	SP	_	10	nsubj	_	_
10	pesta	pestare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 cc	color:blue
1	Sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	ricco	ricco	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	8	punct	_	_
4	ma	ma	CCONJ	CC	_	8	cc	_	_
5	solo	solo	ADV	B	_	8	advmod	_	_
6	per	per	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	2	conj	_	_
9	Monti	Monti	PROPN	SP	_	8	nmod	_	_
10	...	...	PUNCT	FS	_	2	punct	_	_
11	Purtroppo	purtroppo	ADV	B	_	2	advmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 cc	color:blue
1	Mario	mario	PROPN	SP	_	5	nsubj	_	_
2	Monti	Monti	PROPN	SP	_	1	flat:name	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	di	di	ADP	E	_	7	case	_	_
7	Stato	Stato	PROPN	SP	_	5	nmod	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	5	punct	_	_
9	ma	ma	CCONJ	CC	_	12	cc	_	_
10	di	di	ADP	E	_	12	case	_	_
11	quale	quale	DET	DQ	PronType=Int	12	det	_	_
12	Stato	Stato	PROPN	SP	_	5	parataxis	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	12	punct	_	_

~~~


