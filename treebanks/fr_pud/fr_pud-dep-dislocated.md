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
1	Légitime	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
2	et	_	CCONJ	CC	_	3	cc	_	_
3	horrible	_	ADJ	JJ	Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	5	punct	_	_
5	ça	_	PRON	PDEM	_	1	dislocated	_	_
6	!	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 20 dislocated	color:blue
1	«	_	PUNCT	``	_	29	punct	_	_
2	Alors	_	ADV	RB	_	12	mark	_	_
3	que	_	SCONJ	IN	_	2	fixed	_	_
4	la	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
5	plus	_	ADV	RBR	_	6	advmod	_	_
6	grande	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	partie	_	NOUN	NN	Gender=Fem|Number=Sing	12	nsubj	_	_
8	de	_	ADP	IN	_	10	case	_	_
9	la	_	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	transition	_	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	_
11	numérique	_	ADJ	JJ	Gender=Fem|Number=Sing	10	amod	_	_
12	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	29	advcl	_	_
13	sans	_	ADP	IN	_	14	case	_	_
14	précédent	_	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
15	à	à	ADP	INDT	_	17	case	_	_
16	les	le	DET	_	Gender=Masc|Number=Plur	17	det	_	_
17	États-Unis	_	PROPN	NN	Gender=Masc|Number=Plur	12	obl	_	Proper=True|SpaceAfter=No
18	,	_	PUNCT	,	_	12	punct	_	_
19	la	_	DET	DT	Gender=Fem|Number=Sing	20	det	_	_
20	transition	_	NOUN	NN	Gender=Fem|Number=Sing	29	dislocated	_	_
21	sereine	_	ADJ	JJ	Gender=Fem|Number=Sing	20	amod	_	_
22	de	de	ADP	INDT	_	24	case	_	_
23	le	le	DET	_	Gender=Masc|Number=Sing	24	det	_	_
24	pouvoir	_	NOUN	NN	Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	_	PUNCT	,	_	26	punct	_	_
26	elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	29	nsubj	_	SpaceAfter=No
27	,	_	PUNCT	,	_	26	punct	_	_
28	ne	_	ADV	RB	Polarity=Neg	29	advmod	_	_
29	l'	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	35	parataxis	_	SpaceAfter=No
30	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	29	cop	_	_
31	pas	_	ADV	RB	Polarity=Neg	29	advmod	_	SpaceAfter=No
32	,	_	PUNCT	,	_	29	punct	_	SpaceAfter=No
33	»	_	PUNCT	''	_	29	punct	_	_
34	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	35	aux:tense	_	_
35	publié	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
36	Kori	_	PROPN	NNP	Gender=Fem|Number=Sing	35	nsubj	_	_
37	Schulman	_	PROPN	NNP	Gender=Fem|Number=Sing	36	flat:name	_	SpaceAfter=No
38	,	_	PUNCT	,	_	39	punct	_	_
39	assistante	_	NOUN	NN	Gender=Fem|Number=Sing	36	appos	_	_
40	spéciale	_	ADJ	JJ	Gender=Fem|Number=Sing	39	amod	_	_
41	d'	_	ADP	IN	_	42	case	_	SpaceAfter=No
42	Obama	_	PROPN	NNP	Gender=Masc|Number=Sing	39	nmod	_	SpaceAfter=No
43	,	_	PUNCT	,	_	39	punct	_	_
44	dans	_	ADP	IN	_	46	case	_	_
45	un	_	DET	DT	Gender=Masc|Number=Sing	46	det	_	_
46	blog	_	NOUN	NN	Gender=Masc|Number=Sing	35	obl	_	_
47	ce	_	DET	DT	Gender=Masc|Number=Sing	48	det	_	_
48	lundi	_	NOUN	NNP	Gender=Masc|Number=Sing	35	obl:mod	_	SpaceAfter=No
49	.	_	PUNCT	.	_	35	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 dislocated	color:blue
1	Ça	_	PRON	PDEM	_	2	nsubj	_	_
2	marche	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	pour	_	ADP	IN	_	4	case	_	_
4	toi	_	PRON	PRP	Number=Sing|Person=2	2	obl	_	_
5	jusqu’	_	ADP	IN	_	7	case	_	OrigForm=jusqu'|SpaceAfter=No
6	à	_	ADP	IN	_	7	case	_	_
7	présent	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	,	_	PUNCT	,	_	11	punct	_	_
9	la	_	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	deuxième	_	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	_
11	saison	_	NOUN	NN	Gender=Fem|Number=Sing	2	dislocated	_	_
12	?	_	PUNCT	.	_	2	punct	_	_

~~~


