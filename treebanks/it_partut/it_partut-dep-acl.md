---
layout: base
title:  'Statistics of acl in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_partut-dep-acl-relcl.html">acl:relcl</a></tt>.

791 nodes (1%) are attached to their parents as `acl`.

768 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3527180783818.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (748; 95% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Generano	generare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	humus	humus	NOUN	S	_	1	obj	_	_
4	in	in	ADP	E	_	6	case	_	_
5	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	terre	terra	NOUN	S	Gender=Fem|Number=Plur	1	obl	_	_
7	emerse	emergere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	_
8	di	di	ADP	E	_	11	case	_	_
9	tutta	tutto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	11	det:predet	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	terra	terra	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	importanza	importanza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
3	di	di	ADP	E	_	5	mark	_	_
4	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
5	noiosi	noioso	ADJ	A	Gender=Masc|Number=Plur	2	acl	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Parte	parte	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
2	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	fegato	fegato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	di	di	ADP	E	_	5	case	_	_
5	delfino	delfino	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	7	punct	_	_
7	parte	parte	NOUN	S	Gender=Fem|Number=Sing	3	conj	_	_
8	grasso	grasso	NOUN	S	Gender=Masc|Number=Sing	7	acl	_	_
9	di	di	ADP	E	_	10	case	_	_
10	delfino	delfino	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


