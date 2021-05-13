---
layout: base
title:  'Statistics of csubj in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `csubj`

This relation is universal.

12 nodes (0%) are attached to their parents as `csubj`.

11 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41666666666667.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (5; 42% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 csubj	color:blue
1	«	«	PUNCT	FB	_	12	punct	_	SpaceAfter=No
2	Se	se	SCONJ	CS	_	5	mark	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	sempre	sempre	ADV	B	_	5	advmod	_	_
5	ho	avere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	_	_
6	qualcosa	qualcosa	PRON	PI	PronType=Ind	5	obj	_	_
7	da	da	ADP	E	_	8	mark	_	_
8	fare	fare	VERB	V	VerbForm=Inf	6	acl	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	5	punct	_	_
10	non	non	ADV	BN	PronType=Neg	12	advmod	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	possibile	possibile	ADJ	A	Number=Sing	21	parataxis	_	_
13	che	che	SCONJ	CS	_	17	mark	_	_
14	gli	gli	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	amici	amico	NOUN	S	Gender=Masc|Number=Plur	17	nsubj	_	_
16	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	17	iobj	_	_
17	mancano	mancare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	csubj	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	17	punct	_	SpaceAfter=No
19	»	»	PUNCT	FB	_	12	punct	_	_
20	lui	lui	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	21	nsubj	_	_
21	pensava	pensare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	21	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	Sai	sapere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	5	mark	_	_
3	non	non	ADV	BN	PronType=Neg	5	advmod	_	_
4	me	me	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	5	iobj	_	_
5	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	combattere	combattere	VERB	V	VerbForm=Inf	5	csubj	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	1	punct	_	_
8	ma	ma	CCONJ	CC	_	9	cc	_	_
9	penso	pensare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	_
10	che	che	SCONJ	CS	_	18	mark	_	_
11	per	per	ADP	E	_	13	case	_	_
12	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	sorpresa	sorpresa	NOUN	S	Gender=Fem|Number=Sing	18	obl	_	_
14	di	di	ADP	E	_	16	case	_	_
15	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	situazione	situazione	NOUN	S	Gender=Fem|Number=Sing	18	obl	_	_
17	o	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	reagito	reagire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
19	senza	senza	SCONJ	CS	_	20	mark	_	_
20	pensare	pensare	VERB	V	VerbForm=Inf	18	advcl	_	_
21	a	a	ADP	E	_	23	case	_	_
22	le	le	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	23	det	_	_
23	conseguenze	conseguenza	NOUN	S	Gender=Fem|Number=Plur	20	obl	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 csubj	color:blue
1	se	se	SCONJ	CS	_	6	mark	_	_
2	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	6	nsubj	_	_
4	era	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	advcl	_	_
5	i	in	ADP	E	_	6	case	_	_
6	difficoltà	difficoltà	NOUN	S	Gender=Fem	4	obl	_	_
7	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	dovere	dovere	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
11	aiutar	aiutare	VERB	V	VerbForm=Inf	10	csubj	_	_
12	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
13	.	.	PUNCT	FS	_	10	punct	_	SpacesAfter=\n

~~~


