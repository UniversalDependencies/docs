---
layout: base
title:  'Statistics of acl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

28 nodes (0%) are attached to their parents as `acl`.

28 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57142857142857.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (24; 86% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 acl	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	série	_	NOUN	NN	Gender=Fem|Number=Sing	11	nsubj	_	_
3	d’	_	ADP	IN	_	4	case	_	OrigForm=d'|SpaceAfter=No
4	arrestations	_	NOUN	NN	Gender=Fem|Number=Plur	2	nmod	_	_
5	actuelle	_	ADJ	JJ	Gender=Fem|Number=Sing	2	amod	_	_
6	n’	_	ADV	RB	Polarity=Neg	11	advmod	_	OrigForm=n'|SpaceAfter=No
7	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
8	qu’	_	ADV	RB	_	11	advmod	_	OrigForm=qu'|SpaceAfter=No
9	une	_	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	«	_	PUNCT	``	_	11	punct	_	_
11	continuation	_	NOUN	NN	Gender=Fem|Number=Sing	21	parataxis	_	_
12	de	de	ADP	INDT	_	14	case	_	_
13	les	le	DET	_	Gender=Fem|Number=Plur	14	det	_	_
14	machinations	_	NOUN	NN	Gender=Fem|Number=Plur	11	nmod	_	_
15	menées	_	VERB	VBN	Gender=Fem|Number=Plur|VerbForm=Part	14	acl	_	_
16	contre	_	ADP	IN	_	17	case	_	_
17	nous	_	PRON	PRP	Number=Plur|Person=1	15	obl	_	_
18	»	_	PUNCT	''	_	11	punct	_	SpaceAfter=No
19	,	_	PUNCT	,	_	11	punct	_	_
20	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	21	aux	_	_
21	fustigé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
22	Dündar	_	PROPN	NNP	Gender=Masc|Number=Sing	21	nsubj	_	SpaceAfter=No
23	.	_	PUNCT	.	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	victoire	_	NOUN	NN	Gender=Fem|Number=Sing	6	nsubj	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	Donald	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nmod	_	_
5	Trump	_	PROPN	NNP	Gender=Masc|Number=Sing	4	flat:name	_	_
6	aurait	_	VERB	VBC	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	l'	_	DET	DT	Gender=Masc|Number=Sing	8	det	_	SpaceAfter=No
8	effet	_	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	immédiat	_	ADJ	JJ	Gender=Masc|Number=Sing	8	amod	_	_
10	de	_	ADP	IN	_	11	case	_	_
11	rendre	_	AUX	VB	_	8	acl	_	_
12	ce	_	DET	DT	Gender=Masc|Number=Sing	13	det	_	_
13	monde	_	NOUN	NN	Gender=Masc|Number=Sing	11	obj	_	_
14	plus	_	ADV	RBR	_	15	advmod	_	_
15	inquiétant	_	ADJ	JJ	Gender=Masc|Number=Sing	11	xcomp	_	_
16	et	_	CCONJ	CC	_	17	cc	_	_
17	incertain	_	ADJ	JJ	Gender=Masc|Number=Sing	11	conj	_	_
18	qu'	_	SCONJ	IN	_	22	mark	_	SpaceAfter=No
19	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	22	nsubj	_	_
20	ne	_	ADV	RB	Polarity=Neg	21	advmod	_	_
21	l'	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	22	expl	_	SpaceAfter=No
22	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	advcl	_	_
23	déjà	_	ADV	RB	_	22	advmod	_	SpaceAfter=No
24	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 acl	color:blue
1	Amazon	_	PROPN	NNP	Number=Sing	3	nsubj	_	_
2	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	devenu	_	AUX	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	la	_	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
5	quatrième	_	ADJ	JJ	Gender=Fem|Number=Sing	6	amod	_	_
6	compagnie	_	NOUN	NN	Gender=Fem|Number=Sing	3	xcomp	_	_
7	américaine	_	ADJ	JJ	Gender=Fem|Number=Sing	6	amod	_	_
8	avec	_	ADP	IN	_	12	case	_	_
9	la	_	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	plus	_	ADV	RBR	_	11	advmod	_	_
11	forte	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
12	capitalisation	_	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
13	boursière	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No
14	,	_	PUNCT	,	_	15	punct	_	_
15	dépassant	_	VERB	VBG	VerbForm=Part	3	acl	_	_
16	ExxonMobil	_	PROPN	NNP	Number=Sing	15	obj	_	SpaceAfter=No
17	.	_	PUNCT	.	_	3	punct	_	_

~~~


