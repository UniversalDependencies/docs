---
layout: base
title:  'Statistics of compound in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `compound`

This relation is universal.

78 nodes (0%) are attached to their parents as `compound`.

52 instances of `compound` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17948717948718.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (42; 54% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (31; 40% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Le	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	site	_	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
3	internet	_	NOUN	NN	Gender=Masc|Number=Sing	2	compound	_	_
4	de	_	ADP	IN	_	8	case	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
6	Yas	_	PROPN	NNP	Number=Sing	8	compound	_	_
7	Marina	_	PROPN	NNP	Number=Sing	8	compound	_	_
8	Circuit	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	Proper=True
9	fournit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	un	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	minutage	_	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	_
12	exact	_	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:tense	_	_
3	parlé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	de	_	ADP	IN	_	6	case	_	_
5	son	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	expérience	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
7	à	_	ADP	IN	_	9	case	_	_
8	CCN	_	PROPN	NNP	Number=Sing	9	compound	_	_
9	Style	_	NOUN	NN	Number=Sing	6	nmod	_	Proper=True|SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 compound	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	s'	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	obj	_	SpaceAfter=No
3	agit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	de	_	ADP	IN	_	7	case	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
6	seule	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	région	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
8	d'	_	ADP	IN	_	9	case	_	SpaceAfter=No
9	Alaska	_	PROPN	NNP	Gender=Masc|Number=Sing	7	nmod	_	_
10	où	_	ADV	WRB	_	16	advmod	_	_
11	la	_	DET	DT	Gender=Fem|Number=Sing	12	det	_	_
12	température	_	NOUN	NN	Gender=Fem|Number=Sing	16	nsubj	_	_
13	moyenne	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
14	de	_	ADP	IN	_	15	case	_	_
15	jour	_	NOUN	NN	Gender=Masc|Number=Sing	12	nmod	_	_
16	dépasse	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	acl:relcl	_	_
17	0	_	NUM	CD	_	18	nummod	_	SpaceAfter=No
18	°	_	SYM	SYM	_	16	obj	_	SpaceAfter=No
19	C	_	NOUN	NN	_	18	compound	_	_
20	en	_	ADP	IN	_	21	case	_	_
21	hiver	_	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
22	.	_	PUNCT	.	_	3	punct	_	_

~~~


