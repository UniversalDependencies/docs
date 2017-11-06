---
layout: base
title:  'Statistics of aux:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-aux.html">aux</a></tt>.

227 nodes (1%) are attached to their parents as `aux:pass`.

227 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24669603524229.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (221; 97% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Auparavant	_	ADV	RB	_	7	advmod	_	_
2	les	_	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	jets	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:pass	_	_
4	avaient	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	7	aux	_	_
5	seulement	_	ADV	RB	_	7	advmod	_	_
6	été	_	VERB	VBN	Gender=Masc|Number=Sing	7	aux:pass	_	_
7	vus	_	VERB	VBN	Gender=Masc|Number=Plur	0	root	_	_
8	par	_	ADP	IN	_	10	case	_	_
9	des	_	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	bloggeurs	_	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 aux:pass	color:blue
1	A	_	ADP	IN	_	4	case	_	_
2	la	_	DET	DT	Gender=Fem|Number=Sing	4	det	_	_
3	Haute	_	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	Proper=True
4	Cour	_	NOUN	NN	Gender=Fem|Number=Sing	20	obl	_	Proper=True
5	de	_	ADP	IN	_	6	case	_	Proper=True
6	justice	_	NOUN	NN	Gender=Fem|Number=Sing	4	nmod	_	Proper=True
7	de	_	ADP	IN	_	8	case	_	_
8	Hong	_	PROPN	NNP	Number=Sing	4	nmod	_	_
9	Kong	_	PROPN	NNP	Number=Sing	8	flat:name	_	SpaceAfter=No
10	,	_	PUNCT	,	_	4	punct	_	_
11	deux	_	NUM	CD	_	12	nummod	_	_
12	ans	_	NOUN	NN	Gender=Masc|Number=Plur	13	obl:tmod	_	_
13	plus	_	ADV	RBR	_	14	advmod	_	_
14	tard	_	ADV	RB	_	20	advmod	_	SpaceAfter=No
15	,	_	PUNCT	,	_	14	punct	_	_
16	Jutting	_	PROPN	NNP	Gender=Masc|Number=Sing	20	nsubj:pass	_	_
17	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	20	aux:pass	_	_
18	apparu	_	AUX	VBN	Gender=Masc|Number=Sing	20	cop	_	_
19	très	_	ADV	RB	_	20	advmod	_	_
20	calme	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
21	.	_	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	4	nsubj:pass	_	_
2	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	été	_	VERB	VBN	Gender=Masc|Number=Sing	4	aux:pass	_	_
4	déclarée	_	AUX	VBN	Gender=Fem|Number=Sing	0	root	_	_
5	réserve	_	NOUN	NN	Gender=Fem|Number=Sing	4	xcomp	_	_
6	naturelle	_	ADJ	JJ	Gender=Fem|Number=Sing	5	amod	_	_
7	en	_	ADP	IN	_	8	case	_	_
8	1975	_	NUM	CD	_	4	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


