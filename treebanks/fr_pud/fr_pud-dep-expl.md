---
layout: base
title:  'Statistics of expl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `expl`

This relation is universal.

85 nodes (0%) are attached to their parents as `expl`.

84 instances of `expl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02352941176471.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (63; 74% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (20; 24% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl	_	_
2	y	_	PRON	PRP	Person=3	3	advmod	_	_
3	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	encore	_	ADV	RB	_	3	advmod	_	_
5	des	_	DET	DT	Gender=Fem|Number=Plur	6	det	_	_
6	questions	_	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
7	qui	_	PRON	WP	Gender=Fem|Number=Plur	8	nsubj	_	_
8	demeurent	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	acl:relcl	_	_
9	sans	_	ADP	IN	_	10	case	_	_
10	réponse	_	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl	color:blue
1	Sinon	_	ADV	RB	_	10	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	ce	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	tarif	_	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
5	normal	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
6	ou	_	CCONJ	CC	_	7	cc	_	_
7	prépayé	_	ADJ	JJ	Gender=Masc|Number=Sing	5	conj	_	_
8	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	cop	_	SpaceAfter=No
9	-il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	10	expl	_	_
10	cher	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
11	?	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl	color:blue
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


