---
layout: base
title:  'Statistics of aux in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_partut-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_partut-dep-aux-pass.html">aux:pass</a></tt>.

285 nodes (1%) are attached to their parents as `aux`.

285 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61754385964912.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (274; 96% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	sommes	être	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	entrés	entrer	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	dans	dans	ADP	E	_	7	case	_	_
5	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	sixième	sixième	ADJ	NO	Number=Sing|NumType=Ord	7	amod	_	_
7	X	X	X	X	_	3	obl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	D'	de	ADP	E	_	4	case	_	SpaceAfter=No
2	après	après	ADP	E	_	1	fixed	_	_
3	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	proposition	proposition	NOUN	S	Gender=Fem|Number=Sing	15	obl	_	_
5	de	de	ADP	E	_	7	case	_	_
6	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	commission	commission	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	4	punct	_	_
9	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	limite	limite	NOUN	S	Gender=Fem|Number=Sing	15	nsubj	_	_
11	de	de	ADP	E	_	12	case	_	_
12	­20º	-20º	NUM	N	NumType=Card	10	nummod	_	_
13	aurait	avoir	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	été	être	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	cop	_	_
15	suffisante	suffisant	ADJ	A	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
16	;	;	PUNCT	FC	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	L'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	élaboration	élaboration	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
3	de	de	ADP	E	_	5	case	_	_
4	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	rapport	rapport	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	a	avoir	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	été	être	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
8	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	occasion	occasion	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
10	de	de	ADP	E	_	11	mark	_	_
11	mener	mener	VERB	V	VerbForm=Inf	9	acl	_	_
12	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	intéressant	intéressant	ADJ	A	Gender=Masc|Number=Sing	14	amod	_	_
14	débat	débat	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
15	sur	sur	ADP	E	_	17	case	_	_
16	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	politique	politique	NOUN	S	Gender=Fem|Number=Sing	11	obl	_	_
18	régionale	régional	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	_
19	communautaire	communautaire	ADJ	A	Number=Sing	17	amod	_	_
20	en	en	ADP	E	_	17	advmod	_	_
21	général	général	ADJ	A	Gender=Masc|Number=Sing	20	fixed	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	9	punct	_	_

~~~


