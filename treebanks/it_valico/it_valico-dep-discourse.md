---
layout: base
title:  'Statistics of discourse in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `discourse`

This relation is universal.

13 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07692307692308.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt> (6; 46% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (2; 15% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt> (2; 15% instances), <tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 22 discourse	color:blue
1	Sembrava	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	molto	molto	ADV	B	_	3	advmod	_	_
3	brutto	brutto	ADJ	A	Gender=Masc|Number=Sing	1	xcomp	_	_
4	e	e	CCONJ	CC	_	8	cc	_	_
5	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	donna	donna	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
7	stava	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	gridando	gridare	VERB	V	VerbForm=Ger	1	conj	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	8	punct	_	SpaceAfter=No
10	«	«	PUNCT	FB	_	17	punct	_	_
11	No	no	INTJ	I	Polarity=Neg	17	discourse	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	17	punct	_	_
13	no	no	INTJ	I	Polarity=Neg	17	discourse	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	17	punct	_	_
15	Marco	Marco	PROPN	SP	_	17	vocative	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	17	punct	_	_
17	lascia	lasciare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
18	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	17	obj	_	_
19	!	!	PUNCT	FS	_	17	punct	_	_
20	Aiuto	Aiuto	INTJ	I	_	17	discourse	_	SpaceAfter=No
21	!	!	PUNCT	FS	_	17	punct	_	_
22	Aiuto	Aiuto	INTJ	I	_	17	discourse	_	SpaceAfter=No
23	!	!	PUNCT	FS	_	17	punct	_	SpaceAfter=No
24	»	»	PUNCT	FB	_	17	punct	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Ma	ma	CCONJ	CC	_	2	discourse	_	_
2	sorpesa	sorpesa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	!	!	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ah	ah	INTJ	I	_	4	discourse	_	_
2	ma	ma	CCONJ	CC	_	4	discourse	_	_
3	che	che	DET	DE	PronType=Exc	4	det	_	_
4	umanità	umanità	NOUN	S	Gender=Fem	0	root	_	SpaceAfter=No
5	..	..	PUNCT	FS	_	4	punct	_	SpaceAfter=\n

~~~


