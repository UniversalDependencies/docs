---
layout: base
title:  'Statistics of dislocated in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `dislocated`

This relation is universal.

3 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.33333333333333.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dislocated	color:blue
1	Légitime	légitime	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	wordform=légitime
2	et	et	CCONJ	CC	_	3	cc	_	_
3	horrible	horrible	ADJ	JJ	Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	ça	ça	PRON	PDEM	_	1	dislocated	_	_
6	!	!	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 20 dislocated	color:blue
1	«	«	PUNCT	``	_	29	punct	_	_
2	Alors	alors	ADV	RB	_	12	mark	_	wordform=alors
3	que	que	SCONJ	IN	_	2	fixed	_	_
4	la	le	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
5	plus	plus	ADV	RBR	_	6	advmod	_	_
6	grande	grand	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	partie	partie	NOUN	NN	Gender=Fem|Number=Sing	12	nsubj	_	_
8	de	de	ADP	IN	_	10	case	_	_
9	la	le	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	transition	transition	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	_
11	numérique	numérique	ADJ	JJ	Gender=Fem|Number=Sing	10	amod	_	_
12	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	advcl	_	_
13	sans	sans	ADP	IN	_	14	case	_	_
14	précédent	précédent	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
15	à	à	ADP	INDT	_	17	case	_	_
16	les	le	DET	_	Gender=Masc|Number=Plur	17	det	_	_
17	États-Unis	États-Unis	PROPN	NN	Gender=Masc|Number=Plur	12	obl	_	Proper=True|SpaceAfter=No
18	,	,	PUNCT	,	_	12	punct	_	_
19	la	le	DET	DT	Gender=Fem|Number=Sing	20	det	_	_
20	transition	transition	NOUN	NN	Gender=Fem|Number=Sing	29	dislocated	_	_
21	sereine	serein	ADJ	JJ	Gender=Fem|Number=Sing	20	amod	_	_
22	de	de	ADP	INDT	_	24	case	_	_
23	le	le	DET	_	Gender=Masc|Number=Sing	24	det	_	_
24	pouvoir	pouvoir	NOUN	NN	Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	,	_	26	punct	_	_
26	elle	il	PRON	PRP	Gender=Fem|Number=Sing|Person=3	29	nsubj	_	SpaceAfter=No
27	,	,	PUNCT	,	_	26	punct	_	_
28	ne	ne	ADV	RB	Polarity=Neg	29	advmod	_	_
29	l'	le	PRON	PRP	Gender=Fem|Number=Sing|Person=3	35	parataxis	_	SpaceAfter=No
30	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	cop	_	_
31	pas	pas	ADV	RB	Polarity=Neg	29	advmod	_	SpaceAfter=No
32	,	,	PUNCT	,	_	29	punct	_	SpaceAfter=No
33	»	»	PUNCT	''	_	29	punct	_	_
34	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	aux:tense	_	_
35	publié	publier	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
36	Kori	Kori	PROPN	NNP	Gender=Fem|Number=Sing	35	nsubj	_	_
37	Schulman	Schulman	PROPN	NNP	Gender=Fem|Number=Sing	36	flat:name	_	SpaceAfter=No
38	,	,	PUNCT	,	_	39	punct	_	_
39	assistante	assistante	NOUN	NN	Gender=Fem|Number=Sing	36	appos	_	_
40	spéciale	spécial	ADJ	JJ	Gender=Fem|Number=Sing	39	amod	_	_
41	d'	de	ADP	IN	_	42	case	_	SpaceAfter=No
42	Obama	Obama	PROPN	NNP	Gender=Masc|Number=Sing	39	nmod	_	SpaceAfter=No
43	,	,	PUNCT	,	_	39	punct	_	_
44	dans	dans	ADP	IN	_	46	case	_	_
45	un	un	DET	DT	Gender=Masc|Number=Sing	46	det	_	_
46	blog	blog	NOUN	NN	Gender=Masc|Number=Sing	35	obl	_	_
47	ce	ce	DET	DT	Gender=Masc|Number=Sing	48	det	_	_
48	lundi	lundi	NOUN	NNP	Gender=Masc|Number=Sing	35	obl:mod	_	SpaceAfter=No
49	.	.	PUNCT	.	_	35	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 dislocated	color:blue
1	Ça	ça	PRON	PDEM	_	2	nsubj	_	wordform=ça
2	marche	marcher	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	IN	_	4	case	_	_
4	toi	soi	PRON	PRP	Number=Sing|Person=2	2	obl	_	_
5	jusqu’	jusqu’	ADP	IN	_	7	case	_	SpaceAfter=No|wordform=jusqu'
6	à	à	ADP	IN	_	7	case	_	_
7	présent	présent	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	la	le	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	deuxième	deuxième	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	_
11	saison	saison	NOUN	NN	Gender=Fem|Number=Sing	2	dislocated	_	_
12	?	?	PUNCT	.	_	2	punct	_	_

~~~


