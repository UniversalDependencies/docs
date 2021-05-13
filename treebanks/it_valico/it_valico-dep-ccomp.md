---
layout: base
title:  'Statistics of ccomp in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `ccomp`

This relation is universal.

74 nodes (1%) are attached to their parents as `ccomp`.

74 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7972972972973.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (52; 70% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (9; 12% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (9; 12% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	ridere	ridere	VERB	V	VerbForm=Inf	2	ccomp	_	_
4	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	donna	donna	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	e	e	CCONJ	CC	_	9	cc	_	_
7	questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	9	nsubj	_	_
8	non	non	ADV	BN	PronType=Neg	9	advmod	_	_
9	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	_
10	piu	piu	ADV	B	_	9	advmod	_	_
11	paura	paura	NOUN	S	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Crede	credere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	6	mark	_	_
3	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	6	nsubj	_	_
5	fosse	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	alegre	alegre	ADJ	A	Number=Sing	1	ccomp	_	_
7	ma	ma	CCONJ	CC	_	10	cc	_	_
8	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	6	conj	_	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
12	pasò	pasare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	Paola	Paola	PROPN	SP	_	4	nsubj	_	_
3	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	ragazzo	ragazzo	NOUN	S	Gender=Masc|Number=Sing	4	iobj	_	_
6	che	che	SCONJ	CS	_	10	mark	_	_
7	Luca	Luca	PROPN	SP	_	10	nsubj	_	_
8	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
9	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


