---
layout: base
title:  'Statistics of discourse in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `discourse`

This relation is universal.

50 nodes (0%) are attached to their parents as `discourse`.

39 instances of `discourse` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.58.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (33; 66% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (9; 18% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	No	no	INTJ	I	Polarity=Neg	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	6	punct	_	_
3	adesso	adesso	ADV	B	_	6	advmod	_	_
4	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
5	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	expl	_	SpaceAfter=No
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	10	punct	_	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	in	in	ADP	E	_	10	case	_	_
10	caserma	caserma	NOUN	S	Gender=Fem|Number=Sing	6	conj	_	_
11	...	...	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 discourse	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	comitato	comitato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	di	di	ADP	E	_	4	case	_	_
4	bioetica	bioetica	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	2	punct	_	_
6	no	no	INTJ	I	Polarity=Neg	2	discourse	_	_
7	a	a	ADP	E	_	9	case	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	eutanasia	eutanasia	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 discourse	color:blue
1	Egli	egli	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
3	a	a	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	sicuro	sicuro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	7	punct	_	_
7	sì	sì	INTJ	I	Polarity=Pos	5	discourse	_	SpaceAfter=No
8	,	,	PUNCT	FC	_	7	punct	_	_
9	centinaia	centinaia	NUM	N	NumType=Card	13	nsubj	_	_
10	di	di	ADP	E	_	11	case	_	_
11	chilometri	chilometro	NOUN	S	Gender=Masc|Number=Plur	9	nmod	_	_
12	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	separavano	separare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	5	conj	_	_
14	da	da	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	colombre	colombre	NOUN	S	Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	5	punct	_	_

~~~


