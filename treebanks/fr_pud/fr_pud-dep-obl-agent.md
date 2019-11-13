---
layout: base
title:  'Statistics of obl:agent in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fr_pud-dep-obl-mod.html">obl:mod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 27 obl:agent	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	charte	_	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	permit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	la	_	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	création	_	NOUN	NN	Gender=Fem|Number=Sing	3	obj	_	_
6	d'	_	ADP	IN	_	8	case	_	SpaceAfter=No
7	une	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	guilde	_	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
9	de	_	ADP	IN	_	10	case	_	_
10	marchands	_	NOUN	NN	Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	12	punct	_	_
12	dirigée	_	VERB	VBN	Gender=Fem|Number=Sing|VerbForm=Part	8	acl	_	_
13	par	_	ADP	IN	_	15	case	_	_
14	la	_	DET	DT	Gender=Fem|Number=Sing	15	det	_	_
15	bourgeoisie	_	NOUN	NN	Gender=Fem|Number=Sing	12	obl	_	_
16	de	_	ADP	IN	_	18	case	_	_
17	la	_	DET	DT	Gender=Fem|Number=Sing	18	det	_	_
18	ville	_	NOUN	NN	Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
19	,	_	PUNCT	,	_	12	punct	_	_
20	qui	_	PRON	WP	Gender=Fem|Number=Sing	22	nsubj:caus	_	_
21	faisait	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp	22	aux:caus	_	_
22	payer	_	VERB	VB	_	8	acl:relcl	_	_
23	un	_	DET	DT	Gender=Masc|Number=Sing	24	det	_	_
24	impôt	_	NOUN	NN	Gender=Masc|Number=Sing	22	obj	_	_
25	à	à	ADP	INDT	_	27	case	_	_
26	les	le	DET	_	Gender=Fem|Number=Plur	27	det	_	_
27	personnes	_	NOUN	NN	Gender=Fem|Number=Plur	22	obl:agent	_	_
28	traversant	_	VERB	VBG	VerbForm=Part	27	acl	_	_
29	le	_	DET	DT	Gender=Masc|Number=Sing	30	det	_	_
30	quartier	_	NOUN	NN	Gender=Masc|Number=Sing	28	obj	_	SpaceAfter=No
31	.	_	PUNCT	.	_	3	punct	_	_

~~~


