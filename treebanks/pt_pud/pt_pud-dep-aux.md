---
layout: base
title:  'Statistics of aux in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_pud-dep-aux-pass.html">aux:pass</a></tt>.

275 nodes (1%) are attached to their parents as `aux`.

273 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58909090909091.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (250; 91% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (15; 5% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (10; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Ninguém	_	NOUN	NN	Gender=Masc|Number=Sing	2	nsubj	_	_
2	sabe	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	de	_	ADP	IN	_	5	case	_	_
4	que	_	DET	WDT	Gender=Fem|Number=Sing	5	det	_	_
5	maneira	_	NOUN	NN	Gender=Fem|Number=Sing	10	obl	_	_
6	ambos	_	DET	DT	Gender=Masc|Number=Plur	7	det	_	_
7	dramaturgos	_	NOUN	NN	Gender=Masc|Number=Plur	10	nsubj	_	_
8	teriam	_	VERB	VBC	Aspect=Imp|Mood=Cnd|Number=Plur|Person=3	10	aux	_	_
9	trabalhado	_	AUX	VBN	Aspect=Perf	10	cop	_	_
10	juntos	_	ADJ	JJ	Gender=Masc|Number=Plur	2	ccomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 aux	color:blue
1	Quando	_	ADP	IN	_	4	mark	_	_
2	as	_	DET	DT	Gender=Fem|Number=Plur	3	det	_	_
3	pessoas	_	NOUN	NN	Gender=Fem|Number=Plur	4	nsubj	_	_
4	morrem	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	15	advcl	_	_
5	por	_	ADP	IN	_	6	case	_	_
6	velhice	_	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	_
7	em	em	ADP	INDT	_	9	case	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	9	det	_	_
9	Índia	_	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	Proper=True|SpaceAfter=No
10	,	_	PUNCT	,	_	4	punct	_	_
11	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	15	nsubj	_	_
12	deveria	_	VERB	VBC	Aspect=Imp|Mood=Cnd|Number=Sing|Person=3	15	aux	_	_
13	ser	_	AUX	VB	_	15	cop	_	_
14	uma	_	DET	DT	Gender=Fem|Number=Sing	15	det	_	_
15	celebração	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
16	.	_	PUNCT	.	_	15	punct	_	_

~~~


