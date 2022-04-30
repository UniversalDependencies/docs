---
layout: base
title:  'Statistics of xcomp in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `xcomp`

This relation is universal.

118 nodes (2%) are attached to their parents as `xcomp`.

118 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (77; 65% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (27; 23% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (4; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Finse	Fingere	VERB	V	_	0	root	_	_
2	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	xcomp	_	_
3	paura	paura	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	rapito	rapito	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Sembrava	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	così	così	ADV	B	_	1	advmod	_	_
3	spaventata	spaventato	ADJ	A	Gender=Fem|Number=Sing	1	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	7	punct	_	_
5	quindi	quindi	CCONJ	CC	_	7	cc	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	pensato	pensare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	conj	_	_
8	di	di	ADP	E	_	9	mark	_	_
9	aiutar	aiutare	VERB	V	VerbForm=Inf	7	xcomp	_	_
10	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Comunque	comunque	ADV	B	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Giorgia	Giorgia	PROPN	SP	_	6	nsubj	_	_
4	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
5	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	felice	felice	ADJ	A	Number=Sing	0	root	_	_
7	d'	di	ADP	E	_	9	mark	_	SpaceAfter=No
8	essere	essere	AUX	VA	VerbForm=Inf	9	aux:pass	_	_
9	salvato	salvare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


