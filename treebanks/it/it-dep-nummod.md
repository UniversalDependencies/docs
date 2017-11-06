---
layout: base
title:  'Statistics of nummod in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `nummod`

This relation is universal.

3394 nodes (1%) are attached to their parents as `nummod`.

2108 instances of `nummod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01001767825575.

The following 16 pairs of parts of speech are connected with `nummod`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2539; 75% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (475; 14% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (165; 5% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (79; 2% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (46; 1% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (32; 1% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (25; 1% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="it-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-DET.html">DET</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Clemente	Clemente	PROPN	SP	_	11	nsubj	_	_
2	Mimun	Mimun	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	direttore	direttore	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	_
5	di	di	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Tg	Tg	PROPN	SP	_	4	nmod	_	_
8	2	2	NUM	N	NumType=Card	7	nummod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	1	punct	_	_
10	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	11	expl	_	_
11	scusa	scusare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
12	;	;	PUNCT	FC	_	11	punct	_	_

~~~


