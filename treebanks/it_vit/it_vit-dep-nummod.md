---
layout: base
title:  'Statistics of nummod in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `nummod`

This relation is universal.

4232 nodes (2%) are attached to their parents as `nummod`.

2310 instances of `nummod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66469754253308.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (3566; 84% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (237; 6% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (173; 4% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (168; 4% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (50; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (16; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Vertice	vertice	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	G	G	PROPN	SP	_	1	nmod	_	_
3	7	7	NUM	N	NumType=Card	2	nummod	_	_
4	(	(	PUNCT	FB	_	5	punct	_	SpaceAfter=No
5	dl	dl	NOUN	S	_	1	appos	_	_
6	195	195	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
7	)	)	PUNCT	FB	_	5	punct	_	_
8	-	-	PUNCT	FC	_	1	punct	_	_
9	39	39	NUM	N	NumType=Card	10	nummod	_	_
10	reiterato	reiterare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	parataxis	_	_
11	da	da	ADP	E	_	13	case	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	dm	dm	NOUN	S	Gender=Masc|Number=Sing	10	obl	_	_
14	di	di	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	20	20	NUM	N	NumType=Card	13	nmod	_	_
17	maggio	maggio	NOUN	S	Gender=Masc|Number=Sing	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	1	punct	_	_

~~~


