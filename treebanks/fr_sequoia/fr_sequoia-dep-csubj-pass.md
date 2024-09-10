---
layout: base
title:  'Statistics of csubj:pass in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-csubj.html">csubj</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 csubj:pass	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	solution	solution	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
3	n'	ne	ADV	_	Polarity=Neg	7	advmod	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	cependant	cependant	ADV	_	_	7	advmod	_	_
6	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
7	suffisante	suffisant	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	étant	être	AUX	_	Tense=Pres|VerbForm=Part	10	aux:pass	_	_
10	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	advcl	_	_
11	que	que	SCONJ	_	_	15	mark	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	avions	avion	NOUN	_	Gender=Masc|Number=Plur	15	nsubj:pass	_	_
14	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux:pass	_	_
15	produits	produire	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	10	csubj:pass	_	_
16	sur	sur	ADP	_	_	18	case	_	_
17	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	marché	marché	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
19	mondial	mondial	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 csubj:pass	color:blue
1	Étant	être	AUX	_	Tense=Pres|VerbForm=Part	2	aux:pass	_	_
2	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	25	advcl	_	_
3	que	que	SCONJ	_	_	15	mark	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	durée	durée	NOUN	_	Gender=Fem|Number=Sing	15	nsubj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	avions	avion	NOUN	_	Gender=Masc|Number=Plur	5	nmod	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
12	approximativement	approximativement	ADV	_	_	15	advmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	trente	trente	NUM	_	NumType=Card	15	nummod	_	_
15	ans	an	NOUN	_	Gender=Masc|Number=Plur	2	csubj:pass	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	18	det	_	SpaceAfter=No
18	effet	effet	NOUN	_	Gender=Masc|Number=Sing	25	nsubj:caus	_	_
19	de	de	ADP	_	_	21	case	_	_
20	ces	ce	DET	_	Number=Plur|PronType=Dem	21	det	_	_
21	améliorations	amélioration	NOUN	_	Gender=Fem|Number=Plur	18	nmod	_	_
22	techniques	technique	ADJ	_	Number=Plur	21	amod	_	_
23	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	25	obj	_	_
24	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux:caus	_	_
25	attendre	attendre	VERB	_	VerbForm=Inf	0	root	_	Subject=Generic
26	longtemps	longtemps	ADV	_	_	25	advmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	26	punct	_	_

~~~


