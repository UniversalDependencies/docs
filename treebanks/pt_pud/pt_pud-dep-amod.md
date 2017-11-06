---
layout: base
title:  'Statistics of amod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `amod`

This relation is universal.

1333 nodes (6%) are attached to their parents as `amod`.

984 instances of `amod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16879219804951.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1285; 96% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (38; 3% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	$5,000	_	NUM	CD	_	0	root	_	OrigForm=$5000
2	por	_	ADP	IN	_	3	case	_	_
3	pessoa	_	NOUN	NN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	6	punct	_	_
5	o	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	máximo	_	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
7	permitido	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Isto	_	PRON	PDEM	Gender=Masc|Number=Sing	2	nsubj	_	_
2	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	barco	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	a	_	ADP	IN	_	9	case	_	_
6	partir	_	VERB	VB	_	5	fixed	_	_
7	de	de	ADP	INDT	_	5	fixed	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	7	det	_	_
9	Europa	_	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
10	continental	_	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	Em	_	ADP	IN	_	3	case	_	_
2	uma	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	ocasião	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	é	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:pass	_	_
6	insinuado	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	0	root	_	_
7	que	_	ADP	IN	_	11	mark	_	_
8	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
9	é	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
10	um	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	agente	_	NOUN	NN	Gender=Masc|Number=Sing	6	csubj:pass	_	_
12	secreto	_	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
13	cujo	_	PRON	WP	Gender=Masc|Number=Sing	14	amod	_	_
14	alvo	_	NOUN	NN	Gender=Masc|Number=Sing	16	nsubj	_	_
15	é	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	_
16	Homer	_	PROPN	NNP	Gender=Masc|Number=Sing	11	acl:relcl	_	SpaceAfter=No
17	.	_	PUNCT	.	_	6	punct	_	_

~~~


