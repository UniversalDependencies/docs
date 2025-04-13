---
layout: base
title:  'Statistics of nummod in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `nummod`

This relation is universal.

4600 nodes (2%) are attached to their parents as `nummod`.

2802 instances of `nummod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49152173913043.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (3489; 76% instances), <tt><a href="it_vit-pos-SYM.html">SYM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (517; 11% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (205; 4% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (160; 3% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (157; 3% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (38; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="it_vit-pos-SYM.html">SYM</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-SYM.html">SYM</a></tt> (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	tesoro	tesoro	NOUN	S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	mette	mettere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	su	su	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	mercato	mercato	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	51	51	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
9	%	%	SYM	SYM	_	3	obj	_	_
10	a	a	ADP	E	_	12	case	_	_
11	2	2	NUM	N	NumType=Card	12	nummod	_	_
12	lire	lira	NOUN	S	Gender=Fem|Number=Plur	3	obl	_	_
13	per	per	ADP	E	_	14	case	_	_
14	azione	azione	NOUN	S	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	3	punct	_	_

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


