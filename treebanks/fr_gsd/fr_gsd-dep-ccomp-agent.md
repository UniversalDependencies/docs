---
layout: base
title:  'Statistics of ccomp:agent in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `ccomp:agent`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="fr_gsd-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="fr_gsd-dep-ccomp-obl.html">ccomp:obl</a></tt>, <tt><a href="fr_gsd-dep-ccomp-pred.html">ccomp:pred</a></tt>.

1 nodes (0%) are attached to their parents as `ccomp:agent`.

1 instances of `ccomp:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `ccomp:agent`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 ccomp:agent	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	fédération	fédération	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	italienne	italien	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	se	se	PRON	_	Person=3|PronType=Prs	5	dep:comp	_	_
5	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	choquée	choquer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	xcomp:pred	_	_
7	que	que	SCONJ	_	_	13	mark	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	joueur	joueur	NOUN	_	Gender=Masc|Number=Sing	13	nsubj:pass	_	_
10	français	français	ADJ	_	Gender=Masc	9	amod	_	_
11	ait	avoir	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
12	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	aux:pass	_	_
13	choisi	choisir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	ccomp:agent	_	_
14	pour	pour	ADP	_	_	15	mark	_	_
15	remettre	remettre	VERB	_	VerbForm=Inf	13	advcl	_	_
16	symboliquement	symboliquement	ADV	_	_	15	advmod	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	Coupe	coupe	NOUN	_	Gender=Fem|Number=Sing	15	obj	_	wordform=coupe
19	à	à	ADP	_	_	21	case	_	_
20	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	21	det	_	SpaceAfter=No
21	Afrique	Afrique	PROPN	_	Number=Sing	15	obl:arg	_	_
22	de	de	ADP	_	_	24	case	_	_
23	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	Sud	sud	NOUN	_	Gender=Masc|Number=Sing	21	nmod	_	wordform=sud
25	jeudi	jeudi	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
26	dernier	dernier	ADJ	_	Gender=Masc|Number=Sing	25	amod	_	_
27	lors	lors	ADV	_	_	15	advmod	_	_
28	de	de	ADP	_	_	30	case	_	_
29	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	concert	concert	NOUN	_	Gender=Masc|Number=Sing	27	obl:arg	_	_
31	à	à	ADP	_	_	32	case	_	_
32	Soweto	Soweto	PROPN	_	_	30	nmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	5	punct	_	_

~~~


