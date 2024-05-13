---
layout: base
title:  'Statistics of orphan in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `orphan`

This relation is universal.

2 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 orphan	color:blue
1	La	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	natura	natura	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	parco	parco	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
7	sembra	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	piu	piu	ADV	B	_	9	advmod	_	_
9	verde	verde	ADJ	A	Number=Sing	7	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	7	punct	_	_
11	i	i	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	fiori	fiore	NOUN	S	Gender=Masc|Number=Plur	7	conj	_	_
13	piu	piu	ADV	B	_	14	advmod	_	_
14	aperte	aperto	ADJ	A	Gender=Fem|Number=Plur	12	orphan	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	7	punct	_	_
16	le	le	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	uccele	uccela	NOUN	S	Gender=Fem|Number=Plur	18	nsubj	_	_
18	cantarono	cantare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	l	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	parco	parco	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
4	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
5	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	6	expl	_	SpaceAfter=No
6	era	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	nessuno	nessuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	6	nsubj	_	SpaceAfter=No|CorrectSpaceAfter=Yes
8	solo	solo	ADV	B	_	9	advmod	_	_
9	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	6	orphan	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


