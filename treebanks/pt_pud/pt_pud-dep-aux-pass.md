---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-aux.html">aux</a></tt>.

241 nodes (1%) are attached to their parents as `aux:pass`.

241 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2655601659751.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (232; 96% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
1	Anteriormente	_	ADV	RB	_	8	advmod	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	os	_	DET	DT	Gender=Masc|Number=Plur	4	det	_	_
4	jatos	_	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj:pass	_	_
5	só	_	ADV	RB	_	8	advmod	_	_
6	tinham	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past	8	aux	_	_
7	sido	_	VERB	VBN	Aspect=Perf	8	aux:pass	_	_
8	vistos	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Plur	0	root	_	_
9	por	por	ADP	INDT	_	11	case	_	_
10	os	o	DET	_	Gender=Masc|Number=Plur	11	det	_	_
11	blogueiros	_	NOUN	NN	Gender=Masc|Number=Plur	8	obl	_	SpaceAfter=No
12	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:pass	color:blue
1	O	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	estudo	_	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj:pass	_	_
3	de	de	ADP	INDT	_	5	case	_	_
4	os	o	DET	_	Gender=Masc|Number=Plur	5	det	_	_
5	vulcões	_	NOUN	NN	Gender=Masc|Number=Plur	2	nmod	_	_
6	é	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
7	chamado	_	AUX	VBN	Aspect=Perf|Gender=Masc|Number=Sing	8	cop	_	_
8	vulcanologia	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Winstone	_	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
2	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
3	declarado	_	AUX	VBN	Aspect=Perf|Gender=Masc|Number=Sing	4	cop	_	_
4	falido	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
5	em	_	ADP	IN	_	6	case	_	_
6	4	_	NUM	CD	_	4	obl	_	_
7	de	_	ADP	IN	_	8	case	_	_
8	outubro	_	NOUN	NN	Gender=Masc|Number=Sing	6	nmod	_	_
9	de	_	ADP	IN	_	10	case	_	_
10	1988	_	NUM	CD	Gender=Masc	8	nmod	_	_
11	e	_	CCONJ	CC	_	6	cc	_	ToDo=ex-adp-child,cc-without-conj
12	novamente	_	ADV	RB	_	14	advmod	_	ToDo=ex-adp-child
13	em	_	ADP	IN	_	14	case	_	ToDo=ex-adp-child
14	19	_	NUM	CD	_	6	nmod	_	_
15	de	_	ADP	IN	_	16	case	_	_
16	março	_	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
17	de	_	ADP	IN	_	18	case	_	_
18	1993	_	NUM	CD	Gender=Masc	16	nmod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	4	punct	_	_

~~~


