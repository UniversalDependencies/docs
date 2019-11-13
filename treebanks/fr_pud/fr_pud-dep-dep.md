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
1	«	_	PUNCT	``	_	3	punct	_	_
2	J’	_	PRON	PRP	Gender=Masc|Number=Sing|Person=1	3	nsubj	_	OrigForm=J'|SpaceAfter=No
3	adorais	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Imp	9	parataxis	_	_
4	les	_	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	couleurs	_	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	exotiques	_	ADJ	JJ	Gender=Fem|Number=Plur	5	amod	_	_
7	»	_	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	_	PUNCT	,	_	3	punct	_	_
9	affirme	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
10	-t	_	PART	RP	_	11	dep	_	SpaceAfter=No
11	-il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 dep	color:blue
1	Elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	débute	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	sa	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	_	_
4	carrière	_	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	à	_	ADP	IN	_	7	case	_	_
6	la	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
7	RSC	_	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
8	à	à	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	milieu	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
11	de	de	ADP	INDT	_	13	case	_	_
12	les	le	DET	_	Gender=Fem|Number=Plur	13	det	_	_
13	années	_	NOUN	NN	Gender=Fem|Number=Plur	10	nmod	_	_
14	soixante	_	NUM	CD	_	13	appos	_	SpaceAfter=No
15	,	_	PUNCT	,	_	16	punct	_	_
16	jouant	_	VERB	VBG	VerbForm=Part	2	ccomp	_	_
17	le	_	DET	DT	Gender=Masc|Number=Sing	18	det	_	_
18	rôle	_	NOUN	NN	Gender=Masc|Number=Sing	16	obj	_	_
19	d’	_	ADP	IN	_	21	case	_	OrigForm=d'|SpaceAfter=No
20	une	_	DET	DT	Gender=Fem|Number=Sing	21	det	_	_
21	patiente	_	NOUN	NN	Gender=Fem|Number=Sing	18	nmod	_	_
22	dans	_	ADP	IN	_	24	case	_	_
23	un	_	DET	DT	Gender=Masc|Number=Sing	24	det	_	_
24	asile	_	NOUN	NN	Gender=Masc|Number=Sing	21	nmod	_	_
25	d’	_	ADP	IN	_	26	case	_	OrigForm=d'|SpaceAfter=No
26	aliénés	_	NOUN	NN	Gender=Masc|Number=Plur	24	nmod	_	_
27	dans	_	ADP	IN	_	29	case	_	_
28	la	_	DET	DT	Gender=Fem|Number=Sing	29	det	_	_
29	pièce	_	NOUN	NN	Gender=Fem|Number=Sing	16	obl	_	_
30	de	_	ADP	IN	_	31	case	_	_
31	Marat	_	PROPN	NNP	Gender=Masc|Number=Sing	29	nmod	_	SpaceAfter=No
32	/	_	SYM	SYM	_	31	dep	_	SpaceAfter=No
33	Sade	_	PROPN	NNP	Gender=Masc|Number=Sing	31	conj	_	SpaceAfter=No
34	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 dep	color:blue
1	«	_	PUNCT	``	_	3	punct	_	_
2	ETA	_	PROPN	NNP	Number=Sing	3	nsubj	_	_
3	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	parataxis	_	_
4	totalement	_	ADV	RB	_	3	advmod	_	_
5	à	_	ADP	IN	_	6	case	_	_
6	terre	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
7	»	_	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	_	PUNCT	,	_	3	punct	_	_
9	confirme	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
10	-t	_	PART	RP	_	11	dep	_	SpaceAfter=No
11	-on	_	PRON	PRP	Number=Sing|Person=3	9	nsubj	_	_
12	côté	_	NOUN	NN	Gender=Masc|Number=Sing	9	dep	_	_
13	français	_	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	9	punct	_	_

~~~


