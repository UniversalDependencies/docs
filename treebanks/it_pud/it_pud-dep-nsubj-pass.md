---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_pud-dep-nsubj.html">nsubj</a></tt>.

167 nodes (1%) are attached to their parents as `nsubj:pass`.

128 instances of `nsubj:pass` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.21556886227545.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (114; 68% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (28; 17% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (20; 12% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj:pass	color:blue
1	Furono	essere	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Pass	2	aux:pass	_	_
2	uccise	uccidere	VERB	VBN	Gender=Fem|Number=Plur|Tense=Past	0	root	_	_
3	molte	molto	DET	DT	Gender=Fem|Number=Plur	4	det	_	_
4	persone	persona	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Weiss	Weiss	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	venne	venire	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	3	aux:pass	_	_
3	onorato	onorare	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past	0	root	_	_
4	con	con	ADP	IN	_	5	case	_	_
5	premi	premio	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
6	per	per	ADP	IN	_	8	case	_	_
7	la	il	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	letteratura	letteratura	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
9	da	da	ADP	IN	_	11	case	_	_
10	le	il	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	città	città	NOUN	NN	Gender=Fem|Number=Plur	5	nmod	_	_
12	di	di	ADP	IN	_	13	case	_	_
13	Colonia	Colonia	PROPN	NNP	Gender=Fem|Number=Sing	11	nmod	_	_
14	e	e	CCONJ	CC	_	15	cc	_	_
15	Brema	Brema	PROPN	NNP	Gender=Fem|Number=Sing	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Questo	questo	PRON	PRP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	fu	essere	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	3	aux:pass	_	_
3	fatto	fatto	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past	0	root	_	_
4	in	in	ADP	IN	_	5	case	_	_
5	nave	nave	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
6	partendo	partire	VERB	VBG	Voice=Act	3	advcl	_	_
7	da	da	ADP	IN	_	9	case	_	_
8	l'	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Europa	Europa	PROPN	NNP	Gender=Fem|Number=Sing	6	obl	_	_
10	continentale	continentale	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


