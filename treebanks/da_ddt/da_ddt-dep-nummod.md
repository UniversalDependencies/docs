---
layout: base
title:  'Statistics of nummod in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `nummod`

This relation is universal.

1248 nodes (1%) are attached to their parents as `nummod`.

1044 instances of `nummod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95112179487179.

The following 13 pairs of parts of speech are connected with `nummod`: <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1031; 83% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (80; 6% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (43; 3% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (22; 2% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (21; 2% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (16; 1% instances), <tt><a href="da_ddt-pos-SYM.html">SYM</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-DET.html">DET</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	I	i	ADP	_	AdpType=Prep	2	case	_	_
2	1972	1972	NUM	_	NumType=Card	3	nummod	_	_
3	fik	få	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Skjern	Skjern	PROPN	_	_	3	nsubj	_	_
5	sit	sin	DET	_	Gender=Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
6	første	første	ADJ	_	Degree=Pos	7	amod	_	_
7	værtshus	værtshus	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	K.	K.	PROPN	_	_	0	root	_	_
2	J.	J.	PROPN	_	_	1	flat	_	_
3	Philipsen	Philipsen	PROPN	_	_	1	flat	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Hasselvej	Hasselvej	PROPN	_	_	1	list	_	_
6	6	6	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	3790	3790	NUM	_	NumType=Card	9	nummod	_	_
9	Hasle	Hasle	PROPN	_	_	1	list	_	_

~~~


