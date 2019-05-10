---
layout: base
title:  'Statistics of nummod in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `nummod`

This relation is universal.

202 nodes (1%) are attached to their parents as `nummod`.

180 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03465346534653.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (149; 74% instances), <tt><a href="it_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (33; 16% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (14; 7% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (6; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	La	il	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	cifra	cifra	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
3	massima	massimo	ADJ	JJS	Degree=Abs|Gender=Fem|Number=Sing	2	amod	_	_
4	consentita	consentire	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|Voice=Pass	2	acl	_	_
5	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	cop	_	_
6	5.000	5.000	NUM	CD	_	7	nummod	_	_
7	dollari	dollaro	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
8	a	a	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Le	il	DET	DT	Gender=Fem|Number=Plur	2	det	_	_
2	fonti	fonte	NOUN	NN	Gender=Fem|Number=Plur	5	nsubj	_	_
3	consultate	consultare	VERB	VBN	Gender=Fem|Number=Plur|Tense=Past|Voice=Pass	2	acl	_	_
4	hanno	avere	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	aux	_	_
5	detto	dire	VERB	VBN	Tense=Past	0	root	_	_
6	che	che	SCONJ	IN	_	11	mark	_	_
7	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	cop	_	_
8	"	"	PUNCT	``	_	11	punct	_	SpaceAfter=No
9	100	100	NUM	CD	_	10	nummod	_	SpaceAfter=No
10	%	%	SYM	SYM	_	11	advmod	_	_
11	Cospedal	Cospedal	PROPN	NNP	Gender=Fem|Number=Sing	5	ccomp	_	SpaceAfter=No
12	"	"	PUNCT	''	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	1987	1987	NUM	CD	_	13	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	il	il	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	numero	numero	NOUN	NN	Gender=Masc|Number=Sing	13	nsubj	_	_
7	di	di	ADP	IN	_	8	case	_	_
8	beni	bene	NOUN	NN	Gender=Masc|Number=Plur	6	nmod	_	_
9	trasportati	trasportare	VERB	VBN	Gender=Masc|Number=Plur|Tense=Past|Voice=Pass	8	acl	_	_
10	su	su	ADP	IN	_	12	case	_	_
11	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Danubio	Danubio	PROPN	NNP	Gender=Masc|Number=Sing	9	obl	_	_
13	salì	salire	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
14	a	a	ADP	IN	_	17	case	_	_
15	quasi	quasi	ADV	RB	_	16	advmod	_	_
16	100	100	NUM	CD	_	17	nummod	_	_
17	milioni	milione	NUM	CD	_	13	obl	_	_
18	di	di	ADP	IN	_	19	case	_	_
19	tonnellate	tonnellata	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	13	punct	_	_

~~~


