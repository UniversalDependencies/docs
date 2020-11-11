---
layout: base
title:  'Statistics of aux:pass in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_vit-dep-aux.html">aux</a></tt>.

1701 nodes (1%) are attached to their parents as `aux:pass`.

1696 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24279835390946.

The following 6 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (1688; 99% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Tale	tale	DET	DD	Number=Sing|PronType=Dem	2	det	_	_
2	documentazione	documentazione	NOUN	S	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	VA	VerbForm=Inf	5	aux:pass	_	_
5	presentata	presentare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	in	in	ADP	E	_	7	case	_	_
7	carta	carta	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
8	legale	legale	ADJ	A	Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 aux:pass	color:blue
1	E	e	CCONJ	CC	_	8	cc	_	_
2	a	a	ADP	E	_	3	case	_	_
3	luglio	luglio	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	8	punct	_	_
5	grazie	grazie	NOUN	S	Gender=Fem|Number=Plur	8	case	_	_
6	a	a	ADP	E	_	5	fixed	_	_
7	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	mondiali	mondiale	NOUN	S	Number=Plur	17	obl	_	_
9	di	di	ADP	E	_	10	case	_	_
10	calcio	calcio	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	8	punct	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	tasso	tasso	NOUN	S	Gender=Masc|Number=Sing	8	nsubj:pass	_	_
14	di	di	ADP	E	_	15	case	_	_
15	crescita	crescita	NOUN	S	Gender=Fem|Number=Sing	13	nmod	_	_
16	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
17	destinato	destinare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
18	a	a	ADP	E	_	19	mark	_	_
19	salire	salire	VERB	V	VerbForm=Inf	8	xcomp	_	_
20	ancora	ancora	ADV	B	_	8	advmod	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Solo	solo	ADV	B	_	3	advmod	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	tempo	tempo	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
4	dirà	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
5	se	se	SCONJ	CS	_	9	mark	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	cura	cura	NOUN	S	Gender=Fem|Number=Sing	9	nsubj:pass	_	_
8	sarà	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	aux:pass	_	_
9	adeguata	adeguato	ADJ	A	Gender=Fem|Number=Sing	4	ccomp	_	_
10	e	e	CCONJ	CC	_	14	cc	_	_
11	se	se	SCONJ	CS	_	14	mark	_	_
12	sarà	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	14	aux:pass	_	_
13	meticolosamente	meticolosamente	ADV	B	_	14	advmod	_	_
14	applicata	applicare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	conj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~


