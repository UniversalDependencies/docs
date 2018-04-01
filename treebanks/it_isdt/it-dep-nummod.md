---
layout: base
title:  'Statistics of nummod in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `nummod`

This relation is universal.

3508 nodes (1%) are attached to their parents as `nummod`.

2185 instances of `nummod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.00712656784493.

The following 16 pairs of parts of speech are connected with `nummod`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2624; 75% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (490; 14% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (166; 5% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (84; 2% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (48; 1% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (35; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (25; 1% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="it-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-DET.html">DET</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	flat:name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nummod	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	usufruttuario	usufruttuario	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	inoltre	inoltre	ADV	B	_	5	advmod	_	_
5	dare	dare	VERB	V	VerbForm=Inf	0	root	_	_
6	idonea	idoneo	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
7	garanzia	garanzia	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	(	(	PUNCT	FB	_	9	punct	_	SpaceAfter=No
9	1179	1179	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
10	)	)	PUNCT	FB	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Feb	Feb	PROPN	SP	_	0	root	_	_
2	26	26	NUM	N	NumType=Card	1	nummod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	2014	2014	NUM	N	NumType=Card	2	compound	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	1	punct	_	_

~~~


