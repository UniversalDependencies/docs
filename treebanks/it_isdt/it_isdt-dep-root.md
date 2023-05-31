---
layout: base
title:  'Statistics of root in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `root`

This relation is universal.

14167 nodes (5%) are attached to their parents as `root`.

14167 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.70290110820922.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (9841; 69% instances), -<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2430; 17% instances), -<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (773; 5% instances), -<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (692; 5% instances), -<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (246; 2% instances), -<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (92; 1% instances), -<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (75; 1% instances), -<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (7; 0% instances), -<tt><a href="it_isdt-pos-X.html">X</a></tt> (7; 0% instances), -<tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), -<tt><a href="it_isdt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	I	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	2:det	_
2	tre	tre	NUM	N	NumType=Card	6	nsubj	6:nsubj|11:nsubj	_
3	avevano	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	aux	6:aux	_
4	da	da	ADP	E	_	5	case	5:case	_
5	poco	poco	ADV	B	_	6	advmod	6:advmod	_
6	lasciato	lasciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	cima	cima	NOUN	S	Gender=Fem|Number=Sing	6	obj	6:obj	_
9	e	e	CCONJ	CC	_	11	cc	11:cc	_
10	stavano	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	11	aux	11:aux	_
11	cominciando	cominciare	VERB	V	VerbForm=Ger	6	conj	6:conj:e	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	13:det	_
13	discesa	discesa	NOUN	S	Gender=Fem|Number=Sing	11	obj	11:obj	SpaceAfter=No
14	.	.	PUNCT	FS	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root	_
2	in	in	ADP	E	_	4	case	4:case	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
4	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	1	nmod	1:nmod:in	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	7:nsubj:pass	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


