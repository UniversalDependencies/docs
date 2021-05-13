---
layout: base
title:  'Statistics of flat:name in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

252 nodes (1%) are attached to their parents as `flat:name`.

252 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (240; 95% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (12; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Elle	il	PRON	PRP	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	wordform=elle
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	parlé	parler	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	son	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	expérience	expérience	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
7	à	à	ADP	IN	_	8	case	_	_
8	CCN	CCN	PROPN	NNP	_	6	nmod	_	_
9	Style	style	PROPN	NNP	_	8	flat:name	_	Proper=True|SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	De	de	ADP	IN	_	3	case	_	wordform=de
2	son	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	côté	côté	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	Mme	madame	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj	_	_
6	Clinton	Clinton	PROPN	NNP	Gender=Fem|Number=Sing	5	flat:name	_	_
7	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
8	eu	avoir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	ces	ce	DET	DT	Gender=Fem|Number=Plur	13	det	_	_
11	vingt	vingt	NUM	CD	_	13	nummod	_	_
12	dernières	dernier	ADJ	JJ	Gender=Fem|Number=Plur	13	amod	_	_
13	années	année	NOUN	NN	Gender=Fem|Number=Plur	8	obl:mod	_	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	_	_
15	des	un	DET	DT	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	16	det	_	_
16	relations	relation	NOUN	NN	Gender=Fem|Number=Plur	8	obj	_	_
17	moins	moins	ADV	RBR	_	18	advmod	_	_
18	reluisantes	reluisant	ADJ	JJ	Gender=Fem|Number=Plur	16	amod	_	_
19	avec	avec	ADP	IN	_	21	case	_	_
20	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	continent	continent	NOUN	NN	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	8	punct	_	_

~~~


