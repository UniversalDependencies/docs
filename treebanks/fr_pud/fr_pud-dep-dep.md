---
layout: base
title:  'Statistics of dep in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `dep`

This relation is universal.

8 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PART.html">PART</a></tt> (6; 75% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (1; 13% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
1	«	«	PUNCT	``	_	3	punct	_	_
2	J’	je	PRON	PRP	Gender=Masc|Number=Sing|Person=1	3	nsubj	_	SpaceAfter=No|wordform=j'
3	adorais	adorer	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	9	parataxis	_	_
4	les	le	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	couleurs	couleur	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	exotiques	exotique	ADJ	JJ	Gender=Fem|Number=Plur	5	amod	_	_
7	»	»	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	affirme	affirmer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
10	-t	t	PART	RP	_	11	dep	_	SpaceAfter=No
11	-il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 dep	color:blue
1	Elle	il	PRON	PRP	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	wordform=elle
2	débute	débuter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	_	_
4	carrière	carrière	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	à	à	ADP	IN	_	7	case	_	_
6	la	le	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
7	RSC	RSC	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
8	à	à	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	milieu	milieu	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
11	de	de	ADP	INDT	_	13	case	_	_
12	les	le	DET	_	Gender=Fem|Number=Plur	13	det	_	_
13	années	année	NOUN	NN	Gender=Fem|Number=Plur	10	nmod	_	_
14	soixante	soixante	NUM	CD	_	13	appos	_	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	_	_
16	jouant	jouer	VERB	VBG	Tense=Pres|VerbForm=Part	2	ccomp	_	_
17	le	le	DET	DT	Gender=Masc|Number=Sing	18	det	_	_
18	rôle	rôle	NOUN	NN	Gender=Masc|Number=Sing	16	obj	_	_
19	d’	de	ADP	IN	_	21	case	_	SpaceAfter=No|wordform=d'
20	une	un	DET	DT	Gender=Fem|Number=Sing	21	det	_	_
21	patiente	patient	NOUN	NN	Gender=Fem|Number=Sing	18	nmod	_	_
22	dans	dans	ADP	IN	_	24	case	_	_
23	un	un	DET	DT	Gender=Masc|Number=Sing	24	det	_	_
24	asile	asile	NOUN	NN	Gender=Masc|Number=Sing	21	nmod	_	_
25	d’	de	ADP	IN	_	26	case	_	SpaceAfter=No|wordform=d'
26	aliénés	aliéné	NOUN	NN	Gender=Masc|Number=Plur	24	nmod	_	_
27	dans	dans	ADP	IN	_	29	case	_	_
28	la	le	DET	DT	Gender=Fem|Number=Sing	29	det	_	_
29	pièce	pièce	NOUN	NN	Gender=Fem|Number=Sing	16	obl	_	_
30	de	de	ADP	IN	_	31	case	_	_
31	Marat	Marat	PROPN	NNP	Gender=Masc|Number=Sing	29	nmod	_	SpaceAfter=No
32	/	/	SYM	SYM	_	31	dep	_	SpaceAfter=No
33	Sade	Sade	PROPN	NNP	Gender=Masc|Number=Sing	31	conj	_	SpaceAfter=No
34	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 dep	color:blue
1	«	«	PUNCT	``	_	3	punct	_	_
2	ETA	ETA	PROPN	NNP	Number=Sing	3	nsubj	_	_
3	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
4	totalement	totalement	ADV	RB	_	3	advmod	_	_
5	à	à	ADP	IN	_	6	case	_	_
6	terre	terre	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
7	»	»	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	confirme	confirmer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
10	-t	t	PART	RP	_	11	dep	_	SpaceAfter=No
11	-on	on	PRON	PRP	Number=Sing|Person=3	9	nsubj	_	_
12	côté	côté	NOUN	NN	Gender=Masc|Number=Sing	9	dep	_	_
13	français	français	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


