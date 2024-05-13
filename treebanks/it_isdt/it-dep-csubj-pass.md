---
layout: base
title:  'Statistics of csubj:pass in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="it-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 csubj:pass	color:blue
1	Durante	durante	ADP	E	_	3	case	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	preparazione	preparazione	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
4	di	di	ADP	E	_	6	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	relazione	relazione	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
8	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
9	interessante	interessante	ADJ	A	Number=Sing	0	root	_	_
10	discutere	discutere	VERB	V	VerbForm=Inf	9	csubj:pass	_	_
11	di	di	ADP	E	_	13	case	_	_
12	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	temi	tema	NOUN	S	Gender=Masc|Number=Plur	10	obl	_	_
14	generali	generale	ADJ	A	Number=Plur	13	amod	_	_
15	relativi	relativo	ADJ	A	Gender=Masc|Number=Plur	13	amod	_	_
16	a	a	ADP	E	_	18	case	_	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	politica	politica	NOUN	S	Gender=Fem|Number=Sing	15	obl	_	_
19	regionale	regionale	ADJ	A	Number=Sing	18	amod	_	_
20	di	di	ADP	E	_	22	case	_	_
21	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	22	det	_	_
22	Unione	Unione	PROPN	SP	_	18	nmod	_	_
23	Europea	Europea	PROPN	SP	_	22	flat:name	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 csubj:pass	color:blue
1	Alcuni	alcuno	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	2	det	_	_
2	studiosi	studioso	NOUN	S	Gender=Masc|Number=Plur	3	nsubj	_	_
3	sostengono	sostenere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	13	mark	_	_
5	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	membri	membro	NOUN	S	Gender=Masc|Number=Plur	13	nsubj	_	_
7	di	di	ADP	E	_	9	case	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	famiglia	famiglia	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	_
10	di	di	ADP	E	_	11	case	_	_
11	Shakespeare	Shakespeare	PROPN	SP	_	9	nmod	_	_
12	fossero	essere	AUX	V	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
13	cattolici	cattolico	NOUN	S	Gender=Masc|Number=Plur	3	ccomp	_	_
14	quando	quando	SCONJ	CS	_	19	mark	_	_
15	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	17	det	_	SpaceAfter=No
16	essere	essere	AUX	V	VerbForm=Inf	17	cop	_	_
17	cattolico	cattolico	ADJ	A	Gender=Masc|Number=Sing	19	csubj:pass	_	_
18	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	aux:pass	_	_
19	considerato	considerare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	advcl	_	_
20	illegale	illegale	ADJ	A	Number=Sing	19	xcomp	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	3	punct	_	_

~~~


