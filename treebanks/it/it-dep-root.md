---
layout: base
title:  'Statistics of root in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `root`

This relation is universal.

13884 nodes (5%) are attached to their parents as `root`.

13884 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.67278882166523.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="it-pos-VERB.html">VERB</a></tt> (9609; 69% instances), -<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (2393; 17% instances), -<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (758; 5% instances), -<tt><a href="it-pos-PRON.html">PRON</a></tt> (692; 5% instances), -<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (245; 2% instances), -<tt><a href="it-pos-NUM.html">NUM</a></tt> (92; 1% instances), -<tt><a href="it-pos-ADV.html">ADV</a></tt> (75; 1% instances), -<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (7; 0% instances), -<tt><a href="it-pos-X.html">X</a></tt> (6; 0% instances), -<tt><a href="it-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="it-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), -<tt><a href="it-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	I	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	tre	tre	NUM	N	NumType=Card	6	nsubj	_	Propagate=Yes
3	avevano	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	aux	_	_
4	da	da	ADP	E	_	5	case	_	_
5	poco	poco	ADV	B	_	6	advmod	_	_
6	lasciato	lasciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	cima	cima	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	_
9	e	e	CCONJ	CC	_	11	cc	_	_
10	stavano	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	11	aux	_	_
11	cominciando	cominciare	VERB	V	VerbForm=Ger	6	conj	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	discesa	discesa	NOUN	S	Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	in	in	ADP	E	_	4	case	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


