---
layout: base
title:  'Statistics of amod in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `amod`

This relation is universal.

24973 nodes (5%) are attached to their parents as `amod`.

19539 instances of `amod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37172145917591.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (23527; 94% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (829; 3% instances), <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (187; 1% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (151; 1% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (95; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (78; 0% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (53; 0% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (18; 0% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-PART.html">PART</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-X.html">X</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	També	també	ADV	_	_	4	advmod	_	_
2	s'	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	obj	_	SpaceAfter=No
3	ha	haver	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	fet	fer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	una	un	NUM	_	Gender=Fem|Number=Sing|NumType=Card	6	nummod	_	_
6	ofrena	ofrena	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
7	simbòlica	simbòlic	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	a	a	ADP	_	_	11	case	_	_
9	'	'	SYM	_	_	11	nmod	_	SpaceAfter=No
10	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Moreneta	Moreneta	PROPN	_	_	4	obj	_	SpaceAfter=No
12	'	'	SYM	_	_	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	popular	popular	ADJ	_	Number=Sing	3	amod	_	_
3	Dr.	Dr.	PROPN	_	_	5	nsubj	_	MWE=Dr._Soler|MWEPOS=PROPN
4	Soler	Soler	PROPN	_	_	3	flat	_	_
5	interpreta	interpretar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	Salvador	Salvador	PROPN	_	_	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	PunctType=Comm	8	punct	_	_
8	amo	amo	NOUN	_	Gender=Masc|Number=Sing	6	appos	_	_
9	d'	de	ADP	_	_	11	case	_	SpaceAfter=No
10	una	un	DET	_	Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	botiga	botiga	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 amod	color:blue
1	Es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	obj	_	_
2	van	anar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fer	fer	VERB	_	VerbForm=Inf	0	root	_	_
4	un	un	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	7	nmod	_	_
5	total	total	ADJ	_	Number=Sing	7	amod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	1.808	1808	NUM	_	NumForm=Digit|NumType=Card	8	nummod	_	_
8	enquestes	enquesta	NOUN	_	Gender=Fem|Number=Plur	3	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


