---
layout: base
title:  'Statistics of nummod in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `nummod`

This relation is universal.

4085 nodes (1%) are attached to their parents as `nummod`.

2281 instances of `nummod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55397796817625.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (3486; 85% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (206; 5% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (165; 4% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (157; 4% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (38; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	come	come	ADP	E	_	4	case	_	_
3	un'	uno	NUM	N	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	SpaceAfter=No
4	energia	energia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	crescendo	crescere	VERB	V	VerbForm=Ger	4	acl:relcl	_	_
8	complessivamente	complessivamente	ADV	B	_	7	advmod	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nummod	color:blue
1	Invece	invece	CCONJ	CC	_	3	cc	_	_
2	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	investito	investire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	Sara	Sara	PROPN	SP	_	3	obj	_	_
5	procedendo	procedere	VERB	V	VerbForm=Ger	3	advcl	_	_
6	a	a	ADP	E	_	7	case	_	_
7	70	70	NUM	N	NumType=Card	5	nummod	_	_
8	a	a	ADP	E	_	10	case	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	ora	ora	NOUN	S	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	in	in	ADP	E	_	2	case	_	_
2	riunioni	riunione	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
3	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
4	previste	previsto	ADJ	A	Gender=Fem|Number=Plur	2	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	2	punct	_	_
6	per	per	ADP	E	_	9	case	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	altro	altro	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	10	10	NUM	N	NumType=Card	2	nummod	_	_
10	per	per	ADP	E	_	11	case	_	_
11	cento	cento	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
12	;	;	PUNCT	FC	_	2	punct	_	_

~~~


