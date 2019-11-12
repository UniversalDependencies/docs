---
layout: base
title:  'Statistics of flat:name in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

227 nodes (1%) are attached to their parents as `flat:name`.

227 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07929515418502.

The following 6 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (210; 93% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (12; 5% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Eugénie	_	PROPN	NNP	Gender=Fem|Number=Sing	4	nsubj	_	_
2	Bouchard	_	PROPN	NNP	Gender=Fem|Number=Sing	1	flat:name	_	_
3	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:tense	_	_
4	subi	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	défaite	_	NOUN	NN	Gender=Fem|Number=Sing	4	obj	_	_
7	en	_	ADP	IN	_	9	case	_	_
8	trois	_	NUM	CD	_	9	nummod	_	_
9	manches	_	NOUN	NN	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	De	_	ADP	IN	_	3	case	_	_
2	son	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	côté	_	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	Mme	_	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj	_	_
6	Clinton	_	PROPN	NNP	Gender=Fem|Number=Sing	5	flat:name	_	_
7	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:tense	_	_
8	eu	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	,	_	PUNCT	,	_	13	punct	_	_
10	ces	_	DET	DT	Gender=Fem|Number=Plur	13	det	_	_
11	vingt	_	NUM	CD	_	13	nummod	_	_
12	dernières	_	ADJ	JJ	Gender=Fem|Number=Plur	13	amod	_	_
13	années	_	NOUN	NN	Gender=Fem|Number=Plur	8	obl:mod	_	SpaceAfter=No
14	,	_	PUNCT	,	_	13	punct	_	_
15	des	_	DET	DT	Gender=Fem|Number=Plur	16	det	_	_
16	relations	_	NOUN	NN	Gender=Fem|Number=Plur	8	obj	_	_
17	moins	_	ADV	RBR	_	18	advmod	_	_
18	reluisantes	_	ADJ	JJ	Gender=Fem|Number=Plur	16	amod	_	_
19	avec	_	ADP	IN	_	21	case	_	_
20	le	_	DET	DT	Gender=Masc|Number=Sing	21	det	_	_
21	continent	_	NOUN	NN	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
22	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 flat:name	color:blue
1	«	_	PUNCT	``	_	10	punct	_	_
2	Quand	_	ADV	WRB	_	4	mark	_	_
3	je	_	PRON	PRP	Gender=Masc|Number=Sing|Person=1	4	nsubj	_	_
4	joue	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	10	advcl	_	_
5	son	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	rôle	_	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	,	_	PUNCT	,	_	4	punct	_	_
8	je	_	PRON	PRP	Number=Sing|Person=1	10	nsubj	_	_
9	me	_	PRON	PRP	Gender=Masc|Number=Sing|Person=1	10	obj	_	_
10	sens	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
11	puissant	_	ADJ	JJ	Gender=Masc|Number=Sing	10	xcomp	_	SpaceAfter=No
12	,	_	PUNCT	,	_	10	punct	_	_
13	»	_	PUNCT	''	_	10	punct	_	_
14	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	aux:tense	_	_
15	expliqué	_	VERB	VBN	Gender=Masc|Number=Sing	10	parataxis	_	_
16	John	_	PROPN	NNP	Gender=Masc|Number=Sing	15	nsubj	_	_
17	Di	_	ADP	IN	_	16	flat:name	_	Proper=True
18	Domenico	_	PROPN	NNP	Gender=Masc|Number=Sing	16	flat:name	_	SpaceAfter=No
19	,	_	PUNCT	,	_	21	punct	_	_
20	l'	_	DET	DT	Gender=Masc|Number=Sing	21	det	_	SpaceAfter=No
21	imitateur	_	NOUN	NN	Gender=Masc|Number=Sing	16	appos	_	_
22	de	_	ADP	IN	_	23	case	_	_
23	Donald	_	PROPN	NNP	Gender=Masc|Number=Sing	21	nmod	_	_
24	Trump	_	PROPN	NNP	Gender=Masc|Number=Sing	23	flat:name	_	SpaceAfter=No
25	,	_	PUNCT	,	_	21	punct	_	_
26	à	_	ADP	IN	_	27	case	_	_
27	Slate	_	PROPN	NNP	Number=Sing	15	obl	_	_
28	l'	_	DET	DT	Gender=Fem|Number=Sing	29	det	_	SpaceAfter=No
29	année	_	NOUN	NN	Gender=Fem|Number=Sing	15	obl:mod	_	_
30	dernière	_	ADJ	JJ	Gender=Fem|Number=Sing	29	amod	_	SpaceAfter=No
31	.	_	PUNCT	.	_	15	punct	_	_

~~~


