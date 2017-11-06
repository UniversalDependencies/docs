---
layout: base
title:  'Statistics of aux:pass in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_pud-dep-aux.html">aux</a></tt>.

222 nodes (1%) are attached to their parents as `aux:pass`.

222 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21171171171171.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (216; 97% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (6; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Furono	essere	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Pass	2	aux:pass	_	_
2	uccise	uccidere	VERB	VBN	Gender=Fem|Number=Plur|Tense=Past	0	root	_	_
3	molte	molto	DET	DT	Gender=Fem|Number=Plur	4	det	_	_
4	persone	persona	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:pass	color:blue
1	Il	il	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	confine	confine	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj:pass	_	_
3	orientale	orientale	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
4	macedone	macedone	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	Proper=True
5	con	con	ADP	IN	_	7	case	_	_
6	la	il	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
7	Tracia	Tracia	PROPN	NNP	Gender=Fem|Number=Sing	2	nmod	_	_
8	era	essere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	11	aux:pass	_	_
9	quindi	quindi	ADV	RB	_	11	advmod	_	_
10	ora	ora	ADV	RB	_	11	advmod	_	_
11	fissato	fissare	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
12	a	a	ADP	IN	_	14	case	_	_
13	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	fiume	fiume	NOUN	NN	Gender=Masc|Number=Sing	11	obl	_	_
15	Nesta	Nesta	PROPN	NNP	Gender=Masc|Number=Sing	14	nmod	_	_
16	(	(	PUNCT	(	_	17	punct	_	SpaceAfter=No
17	Mesta	Mesta	PROPN	NNP	Gender=Masc|Number=Sing	15	appos	_	SpaceAfter=No
18	)	)	PUNCT	)	_	17	punct	_	SpaceAfter=No
19	.	.	PUNCT	.	_	11	punct	_	_

~~~


