---
layout: base
title:  'Statistics of acl in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_valico-dep-acl-relcl.html">acl:relcl</a></tt>.

28 nodes (0%) are attached to their parents as `acl`.

26 instances of `acl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.32142857142857.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (25; 89% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	visto	vedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	palestrato	palestrato	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
6	portando	portare	VERB	V	VerbForm=Ger	4	acl	_	_
7	su	su	ADP	E	_	9	case	_	_
8	le	le	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	spalle	spalla	NOUN	S	Gender=Fem|Number=Plur	6	obl	_	_
10	a	a	ADP	E	_	12	case	_	_
11	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 acl	color:blue
1	Ogni	ogni	DET	DI	Number=Sing|PronType=Ind	2	det	_	_
2	volta	volta	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	Marco	Marco	PROPN	SP	_	6	nsubj	_	_
5	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	vedeva	vedere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	8	punct	_	_
8	dava	dare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	conj	_	_
9	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	pugno	pugno	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	a	a	ADP	E	_	13	case	_	_
12	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	16	punct	_	_
15	e	e	CCONJ	CC	_	16	cc	_	_
16	andava	andare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	conj	_	_
17	via	via	ADV	B	_	16	advmod	_	_
18	con	con	ADP	E	_	20	case	_	_
19	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	donna	donna	NOUN	S	Gender=Fem|Number=Sing	16	obl	_	_
21	bionda	biondo	ADJ	A	Gender=Fem|Number=Sing	20	amod	_	SpaceAfter=No
22	:	:	PUNCT	FC	_	6	punct	_	_
23	a	a	ADP	E	_	24	case	_	_
24	Marco	Marco	PROPN	SP	_	25	obl	_	_
25	piaceva	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	parataxis	_	_
26	l'	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	SpaceAfter=No
27	idea	idea	NOUN	S	Gender=Fem|Number=Sing	25	nsubj	_	_
28	d'	di	ADP	E	_	31	mark	_	SpaceAfter=No
29	essere	essere	AUX	V	VerbForm=Inf	31	cop	_	_
30	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	salvatore	salvatore	NOUN	S	Gender=Masc|Number=Sing	27	acl	_	_
32	coraggioso	coraggioso	ADJ	A	Gender=Masc|Number=Sing	31	amod	_	_
33	d'	di	ADP	E	_	35	case	_	SpaceAfter=No
34	una	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
35	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	31	nmod	_	_
36	così	così	ADV	B	_	37	advmod	_	_
37	bella	bello	ADJ	A	Gender=Fem|Number=Sing	35	amod	_	SpaceAfter=No
38	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
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


