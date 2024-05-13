---
layout: base
title:  'Statistics of det:predet in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-det.html">det</a></tt>.

20 nodes (0%) are attached to their parents as `det:predet`.

20 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95.

The following 4 pairs of parts of speech are connected with `det:predet`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (16; 80% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	Tout	_	DET	PDT	Gender=Masc|Number=Sing	3	det:predet	_	_
2	le	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	monde	_	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	ne	_	ADV	RB	Polarity=Neg	5	advmod	_	_
5	peut	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	pas	_	ADV	RB	Polarity=Neg	5	advmod	_	_
7	s'	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
8	élever	_	VERB	VB	_	5	xcomp	_	_
9	à	à	ADP	IN	_	13	case	_	_
10	le	le	DET	_	_	9	fixed	_	_
11	dessus	_	X	GW	_	9	fixed	_	_
12	de	_	ADP	IN	_	9	fixed	_	_
13	ça	_	PRON	PDEM	_	8	obl	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 det:predet	color:blue
1	Après	_	ADP	IN	_	5	mark	_	_
2	qu'	_	SCONJ	IN	_	1	fixed	_	SpaceAfter=No
3	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
4	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	_
5	devenu	_	VERB	VBN	Gender=Masc|Number=Sing	28	advcl	_	_
6	évident	_	ADJ	JJ	Gender=Masc|Number=Sing	5	xcomp	_	_
7	que	_	SCONJ	IN	_	11	mark	_	_
8	l'	_	DET	DT	Gender=Masc|Number=Sing	9	det	_	SpaceAfter=No
9	Empire	_	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	Proper=True
10	ottoman	_	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	Proper=True
11	perdrait	_	VERB	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	5	ccomp	_	_
12	toute	_	DET	PDT	Gender=Fem|Number=Sing	14	det:predet	_	_
13	la	_	DET	DT	Gender=Fem|Number=Sing	14	det	_	_
14	Macédoine	_	PROPN	NNP	Gender=Fem|Number=Sing	11	obj	_	_
15	et	_	CCONJ	CC	_	17	cc	_	_
16	son	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	17	nmod:poss	_	_
17	rattachement	_	NOUN	NN	Gender=Masc|Number=Sing	14	conj	_	_
18	territorial	_	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	_
19	avec	_	ADP	IN	_	21	case	_	_
20	l'	_	DET	DT	Gender=Fem|Number=Sing	21	det	_	SpaceAfter=No
21	Albanie	_	PROPN	NNP	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
22	,	_	PUNCT	,	_	11	punct	_	_
23	les	_	DET	DT	Gender=Fem|Number=Plur	25	det	_	_
24	grandes	_	ADJ	JJ	Gender=Fem|Number=Plur	25	amod	_	_
25	puissances	_	NOUN	NN	Gender=Fem|Number=Plur	28	nsubj	_	_
26	se	_	PRON	PRP	Gender=Fem|Number=Plur|Person=3	28	obj	_	_
27	sont	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	28	aux	_	_
28	rendues	_	VERB	VBN	Gender=Fem|Number=Plur	0	root	_	_
29	compte	_	NOUN	NN	Gender=Masc|Number=Sing	28	obj	_	_
30	qu'	_	SCONJ	IN	_	32	mark	_	SpaceAfter=No
31	elles	_	PRON	PRP	Gender=Fem|Number=Plur|Person=3	32	nsubj	_	_
32	devaient	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	28	ccomp	_	_
33	changer	_	VERB	VB	_	32	xcomp	_	_
34	leur	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|PronType=Prs	35	nmod:poss	_	_
35	décision	_	NOUN	NN	Gender=Fem|Number=Sing	33	obj	_	SpaceAfter=No
36	.	_	PUNCT	.	_	28	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 det:predet	color:blue
1	Deux	_	NUM	CD	_	2	nummod	_	_
2	civilisations	_	NOUN	NN	Gender=Fem|Number=Plur	10	nsubj	_	_
3	méditéranéennes	_	ADJ	JJ	Gender=Fem|Number=Plur	2	amod	_	_
4	importantes	_	ADJ	JJ	Gender=Fem|Number=Plur	2	amod	_	_
5	de	_	ADP	IN	_	7	case	_	_
6	l'	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	SpaceAfter=No
7	antiquité	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
8	étaient	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	10	cop	_	_
9	les	_	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	Grecs	_	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
11	et	_	CCONJ	CC	_	13	cc	_	_
12	les	_	DET	DT	Gender=Masc|Number=Plur	13	det	_	_
13	Phéniciens	_	NOUN	NN	Gender=Masc|Number=Plur	10	conj	_	SpaceAfter=No
14	,	_	PUNCT	,	_	20	punct	_	_
15	qui	_	PRON	WP	Gender=Masc|Number=Plur	20	nsubj	_	_
16	ont	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	20	aux	_	_
17	tous	_	DET	DT	Gender=Masc|Number=Plur	18	det:predet	_	_
18	deux	_	NUM	CD	_	20	obl	_	_
19	amplement	_	ADV	RB	_	20	advmod	_	_
20	colonisé	_	VERB	VBN	Gender=Masc|Number=Sing	10	acl:relcl	_	_
21	les	_	DET	DT	Gender=Masc|Number=Plur	22	det	_	_
22	littoraux	_	NOUN	NN	Gender=Masc|Number=Plur	20	obj	_	_
23	de	_	ADP	IN	_	25	case	_	_
24	la	_	DET	DT	Gender=Fem|Number=Sing	25	det	_	_
25	Méditerranée	_	PROPN	NNP	Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
26	.	_	PUNCT	.	_	10	punct	_	_

~~~


