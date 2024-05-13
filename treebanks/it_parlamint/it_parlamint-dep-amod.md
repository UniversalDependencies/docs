---
layout: base
title:  'Statistics of amod in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `amod`

This relation is universal.

895 nodes (4%) are attached to their parents as `amod`.

628 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26480446927374.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (867; 97% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	intento	intento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
5	di	di	ADP	E	_	8	case	_	_
6	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
7	intero	intero	ADJ	A	Gender=Masc|Number=Sing	8	amod	_	_
8	disegno	disegno	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
9	di	di	ADP	E	_	10	case	_	_
10	legge	legge	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 amod	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	per	per	ADP	E	_	3	case	_	_
3	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	1	nmod	_	_
4	che	che	SCONJ	CS	_	5	mark	_	_
5	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	assolutamente	assolutamente	ADV	B	_	7	advmod	_	_
7	indispensabile	indispensabile	ADJ	A	Number=Sing	5	xcomp	_	_
8	modificare	modificare	VERB	V	VerbForm=Inf	5	ccomp	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	capoverso	capoverso	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	5	5	NUM	N	NumType=Card	10	nummod	_	SpaceAfter=No
12	-	-	PUNCT	FF	_	11	punct	_	_
13	bis	bis	ADJ	NO	NumType=Ord	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 amod	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	semplice	semplice	ADJ	A	Number=Sing	0	root	_	_
4	per	per	ADP	E	_	5	case	_	_
5	nessuno	nessuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	11	punct	_	_
7	ma	ma	CCONJ	CC	_	11	cc	_	_
8	ce	ce	PRON	PC	Clitic=Yes|PronType=Prs	11	expl	_	_
9	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
10	stiamo	stare	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	mettendo	mettere	VERB	V	VerbForm=Ger	3	conj	_	_
12	tutta	tutto	ADJ	A	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\s\n

~~~


