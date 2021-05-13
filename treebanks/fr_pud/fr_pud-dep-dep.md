---
layout: base
title:  'Statistics of dep in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `dep`

This relation is universal.

2 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (1; 50% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 dep	color:blue
1	Elle	il	PRON	PRP	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=elle
2	débute	débuter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	_	_
4	carrière	carrière	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	à	à	ADP	IN	_	7	case	_	_
6	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	RSC	RSC	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
8	à	à	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	milieu	milieu	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
11	de	de	ADP	INDT	_	13	case	_	_
12	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	années	année	NOUN	NN	Gender=Fem|Number=Plur	10	nmod	_	_
14	soixante	soixante	NUM	CD	_	13	appos	_	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	_	_
16	jouant	jouer	VERB	VBG	Tense=Pres|VerbForm=Part	2	ccomp	_	_
17	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	rôle	rôle	NOUN	NN	Gender=Masc|Number=Sing	16	obj	_	_
19	d’	de	ADP	IN	_	21	case	_	SpaceAfter=No|wordform=d'
20	une	un	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	patiente	patient	NOUN	NN	Gender=Fem|Number=Sing	18	nmod	_	_
22	dans	dans	ADP	IN	_	24	case	_	_
23	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	asile	asile	NOUN	NN	Gender=Masc|Number=Sing	21	nmod	_	_
25	d’	de	ADP	IN	_	26	case	_	SpaceAfter=No|wordform=d'
26	aliénés	aliéné	NOUN	NN	Gender=Masc|Number=Plur	24	nmod	_	_
27	dans	dans	ADP	IN	_	29	case	_	_
28	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	pièce	pièce	NOUN	NN	Gender=Fem|Number=Sing	16	obl	_	_
30	de	de	ADP	IN	_	31	case	_	_
31	Marat	Marat	PROPN	NNP	Gender=Masc|Number=Sing	29	nmod	_	SpaceAfter=No
32	/	/	SYM	SYM	_	31	dep	_	SpaceAfter=No
33	Sade	Sade	PROPN	NNP	Gender=Masc|Number=Sing	31	conj	_	SpaceAfter=No
34	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 dep	color:blue
1	«	«	PUNCT	``	_	3	punct	_	_
2	ETA	ETA	PROPN	NNP	Number=Sing	3	nsubj	_	_
3	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
4	totalement	totalement	ADV	RB	_	3	advmod	_	_
5	à	à	ADP	IN	_	6	case	_	_
6	terre	terre	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
7	»	»	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	confirme	confirmer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
10	-t-on	on	PRON	PRP	Number=Sing|Person=3|PronType=Ind	9	nsubj	_	_
11	côté	côté	NOUN	NN	Gender=Masc|Number=Sing	9	dep	_	_
12	français	français	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	9	punct	_	_

~~~


