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
1	La	le	DET	DT	Gender=Fem|Number=Sing	2	det	_	wordform=la
2	charte	charte	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	permit	permettre	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	la	le	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	création	création	NOUN	NN	Gender=Fem|Number=Sing	3	obj	_	_
6	d'	de	ADP	IN	_	8	case	_	SpaceAfter=No
7	une	un	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	guilde	guilde	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
9	de	de	ADP	IN	_	10	case	_	_
10	marchands	marchand	NOUN	NN	Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	dirigée	diriger	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	8	acl	_	_
13	par	par	ADP	IN	_	15	case	_	_
14	la	le	DET	DT	Gender=Fem|Number=Sing	15	det	_	_
15	bourgeoisie	bourgeoisie	NOUN	NN	Gender=Fem|Number=Sing	12	obl	_	_
16	de	de	ADP	IN	_	18	case	_	_
17	la	le	DET	DT	Gender=Fem|Number=Sing	18	det	_	_
18	ville	ville	NOUN	NN	Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
19	,	,	PUNCT	,	_	12	punct	_	_
20	qui	qui	PRON	WP	Gender=Fem|Number=Sing	22	nsubj:caus	_	_
21	faisait	faire	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	aux:caus	_	_
22	payer	payer	VERB	VB	VerbForm=Inf	8	acl:relcl	_	_
23	un	un	DET	DT	Gender=Masc|Number=Sing	24	det	_	_
24	impôt	impôt	NOUN	NN	Gender=Masc|Number=Sing	22	obj	_	_
25	à	à	ADP	INDT	_	27	case	_	_
26	les	le	DET	_	Gender=Fem|Number=Plur	27	det	_	_
27	personnes	personne	NOUN	NN	Gender=Fem|Number=Plur	22	obl:agent	_	_
28	traversant	traverser	VERB	VBG	Tense=Pres|VerbForm=Part	27	acl	_	_
29	le	le	DET	DT	Gender=Masc|Number=Sing	30	det	_	_
30	quartier	quartier	NOUN	NN	Gender=Masc|Number=Sing	28	obj	_	SpaceAfter=No
31	.	.	PUNCT	.	_	3	punct	_	_

~~~


