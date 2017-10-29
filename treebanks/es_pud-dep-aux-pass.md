---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-aux.html">aux</a></tt>.

94 nodes (0%) are attached to their parents as `aux:pass`.

94 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13829787234043.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (88; 94% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Hay	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	gente	_	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	_	PRON	REL	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
4	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	5	aux:pass	_	_
5	asesinada	_	VERB	VBN	Gender=Fem|Number=Sing	2	acl:relcl	_	_
6	allí	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:pass	color:blue
1	El	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	Ford	_	PROPN	NNP	Number=Sing	7	nsubj:pass	_	_
3	T	_	PROPN	NNP	Gender=Masc|Number=Sing	2	appos	_	_
4	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	7	aux:pass	_	_
5	nombrado	_	AUX	VBN	Gender=Masc|Number=Sing	7	cop	_	_
6	el	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	coche	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
8	más	_	ADV	RBR	_	9	advmod	_	_
9	influyente	_	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
10	de	de	ADP	INDT	_	12	case	_	_
11	el	el	DET	_	Gender=Masc|Number=Sing	12	det	_	_
12	siglo	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	_
13	XX	_	NUM	CD	Gender=Masc	12	appos	_	_
14	en	_	ADP	IN	_	16	case	_	_
15	los	_	DET	DT	Gender=Masc|Number=Plur	16	det	_	_
16	premios	_	NOUN	NN	Gender=Masc|Number=Plur	7	nmod	_	_
17	Automóvil	_	NOUN	NN	Gender=Masc|Number=Sing	16	appos	_	Proper=True
18	de	de	ADP	INDT	_	20	case	_	_
19	el	el	DET	_	Gender=Masc|Number=Sing	20	det	_	_
20	Siglo	_	NOUN	NN	Gender=Masc|Number=Sing	17	nmod	_	Proper=True|SpaceAfter=No
21	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 aux:pass	color:blue
1	Con	_	ADP	IN	_	3	case	_	_
2	la	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	caída	_	NOUN	NN	Gender=Fem|Number=Sing	14	obl	_	_
4	de	_	ADP	IN	_	6	case	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	dinastía	_	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
7	Qing	_	PROPN	NNP	Number=Sing	6	appos	_	_
8	en	_	ADP	IN	_	9	case	_	_
9	1911	_	NUM	CD	Gender=Masc	3	nmod	_	SpaceAfter=No
10	,	_	PUNCT	,	_	3	punct	_	_
11	Mongolia	_	PROPN	NNP	Number=Sing	14	nsubj:pass	_	_
12	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	14	aux:pass	_	_
13	declarada	_	AUX	VBN	Gender=Fem|Number=Sing	14	cop	_	_
14	independiente	_	ADJ	JJ	Number=Sing	0	root	_	_
15	por	_	ADP	IN	_	16	case	_	_
16	Bogd	_	PROPN	NNP	Gender=Masc|Number=Sing	14	obl	_	_
17	Khaan	_	PROPN	NNP	Gender=Masc|Number=Sing	16	flat:name	_	SpaceAfter=No
18	.	_	PUNCT	.	_	14	punct	_	_

~~~


