---
layout: base
title:  'Statistics of obl:mod in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_partut-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_partut-dep-obl-arg.html">obl:arg</a></tt>.

1 nodes (0%) are attached to their parents as `obl:mod`.

1 instances of `obl:mod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 obl:mod	color:blue
1	Monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	7	vocative	_	_
2	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	président	président	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	notre	son	DET	AP	Gender=Fem|Number=Sing|PronType=Prs	6	det	_	_
6	commission	commission	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
7	traite	traiter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	ces	ce	DET	DD	Number=Plur|PronType=Dem	9	det	_	_
9	questions	question	NOUN	S	Gender=Fem|Number=Plur	7	obj	_	_
10	sous	sous	ADP	E	_	11	case	_	_
11	bien	bien	ADV	B	_	7	obl:mod	_	_
12	de	de	ADP	E	_	14	case	_	_
13	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	angles	angle	NOUN	S	Gender=Masc|Number=Plur	11	obl:arg	_	_
15	différents	différent	ADJ	A	Gender=Masc|Number=Plur	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	21	punct	_	_
17	et	et	CCONJ	CC	_	21	cc	_	_
18	pour	pour	ADP	E	_	19	mark	_	_
19	commencer	commencer	VERB	V	VerbForm=Inf	21	advcl	_	_
20	je	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	21	nsubj	_	_
21	parlerai	parler	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	7	conj	_	_
22	de	de	ADP	E	_	24	case	_	_
23	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	24	det	_	SpaceAfter=No
24	angle	angle	NOUN	S	Gender=Fem|Number=Sing	21	obl	_	_
25	de	de	ADP	E	_	27	case	_	_
26	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	recherche	recherche	NOUN	S	Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
28	.	.	PUNCT	FS	_	7	punct	_	_

~~~


