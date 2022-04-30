---
layout: base
title:  'Statistics of mark in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `mark`

This relation is universal.

240 nodes (4%) are attached to their parents as `mark`.

239 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47083333333333.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (118; 49% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (85; 35% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (13; 5% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (13; 5% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Matteo	Matteo	PROPN	SP	_	4	nsubj	_	_
2	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
3	poteva	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	veder	vedere	VERB	V	VerbForm=Inf	0	root	_	_
5	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	senza	senza	SCONJ	CS	_	7	mark	_	_
7	fare	fare	VERB	V	VerbForm=Inf	4	advcl	_	_
8	niente	niente	PRON	PI	PronType=Ind	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	donna	donna	NOUN	S	Gender=Fem|Number=Sing	4	nsubj	_	_
4	cominzava	cominzare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	a	a	ADP	E	_	6	mark	_	_
6	gridare	gridare	VERB	V	VerbForm=Inf	4	xcomp	_	_
7	e	e	CCONJ	CC	_	10	cc	_	_
8	Io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
10	sapiava	sapiare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	conj	_	_
11	perchè	perchè	NOUN	S	Gender=Masc	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 mark	color:blue
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


