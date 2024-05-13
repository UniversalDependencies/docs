---
layout: base
title:  'Statistics of aux in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `aux`

This relation is universal.

3154 nodes (3%) are attached to their parents as `aux`.

3109 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.03868103994927.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (2941; 93% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (93; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (78; 2% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (31; 1% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	både	både	ADV	_	_	5	advmod	_	_
4	været	være	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	værnepligtig	værnepligtig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	medlem	medlem	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	conj	_	_
8	af	af	ADP	_	AdpType=Prep	9	case	_	_
9	Hjemmeværnet	hjemmeværn	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Dette	denne	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
3	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	været	være	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	6	cop	_	_
5	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	overraskelses-angreb	overraskelses-angreb	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


