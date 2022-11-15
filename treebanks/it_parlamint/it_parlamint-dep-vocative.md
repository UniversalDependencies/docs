---
layout: base
title:  'Statistics of vocative in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `vocative`

This relation is universal.

78 nodes (0%) are attached to their parents as `vocative`.

60 instances of `vocative` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.98717948717949.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (66; 85% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Accetto	accettare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Presidente	presidente	NOUN	S	Number=Sing	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	Però	però	ADV	B	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	4	punct	_	_
3	caro	caro	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
4	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	non	non	ADV	BN	PronType=Neg	8	advmod	_	_
7	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	accettabile	accettabile	ADJ	A	Number=Sing	0	root	_	_
9	nemmeno	nemmeno	ADV	BN	PronType=Neg	11	advmod	_	_
10	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	incompetenza	incompetenza	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	16	punct	_	_
13	oltre	oltre	CCONJ	CC	_	16	cc	_	_
14	che	che	SCONJ	CS	_	13	fixed	_	_
15	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	violenza	violenza	NOUN	S	Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Signor	signore	NOUN	S	Gender=Masc|Number=Sing	5	vocative	_	_
2	Presidente	presidente	NOUN	S	Number=Sing	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	ritiro	ritiro	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	SpacesAfter=\n

~~~


