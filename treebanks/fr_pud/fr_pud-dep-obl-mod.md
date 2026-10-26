---
layout: base
title:  'Statistics of obl:mod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_pud-dep-obl-arg.html">obl:arg</a></tt>.

81 nodes (0%) are attached to their parents as `obl:mod`.

43 instances of `obl:mod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.14814814814815.

The following 6 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (33; 41% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (25; 31% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (17; 21% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:mod	color:blue
1	Guitariste	guitariste	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	wordform=guitariste
2	passionné	passionner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	_	_
4	il	lui	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	appos	_	_
5	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
6	participé	participer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	à	à	ADP	IN	_	9	case	_	_
8	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	concert	concert	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	_
10	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	même	même	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
12	année	année	NOUN	NN	Gender=Fem|Number=Sing	6	obl:mod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:mod	color:blue
1	Elle	lui	PRON	PRP	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=elle
2	contient	contenir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
4	très	très	ADV	RB	_	5	advmod	_	_
5	petit	petit	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	_
6	lagon	lagon	NOUN	NN	Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	aujourd'hui	aujourd'hui	ADV	RB	_	9	obl:mod	_	_
9	desséché	dessécher	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 obl:mod	color:blue
1	Il	lui	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	terminé	terminer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	ses	son	DET	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	5	det	_	_
5	études	étude	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	et	et	CCONJ	CC	_	8	cc	_	_
7	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
8	obtenu	obtenir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
9	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	10	det	_	_
10	maitrise	maitrise	NOUN	NN	Gender=Fem|Number=Sing	8	obj	_	_
11	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	21	21	NUM	CD	_	3	obl:mod	_	_
13	avril	avril	NOUN	NNP	Gender=Masc|Number=Sing	12	nmod	_	_
14	1882	1882	NUM	CD	_	13	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


