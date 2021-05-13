---
layout: base
title:  'Statistics of csubj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

23 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.39130434782609.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (15; 65% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (7; 30% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	difficile	difficile	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
4	de	de	ADP	IN	_	5	mark	_	_
5	penser	penser	VERB	VB	VerbForm=Inf	3	csubj	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	l'	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	Italie	Italie	PROPN	NNP	Gender=Fem|Number=Sing	9	nsubj	_	_
9	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	moins	moins	ADV	RBR	_	12	advmod	_	_
11	de	de	ADP	IN	_	10	fixed	_	_
12	kilomètres	kilomètre	NOUN	NN	Gender=Masc|Number=Plur	9	obj	_	_
13	de	de	ADP	IN	_	14	case	_	_
14	ligne	ligne	NOUN	NN	Gender=Fem|Number=Sing	12	nmod	_	_
15	de	de	ADP	IN	_	16	case	_	_
16	métro	métro	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
17	que	que	ADP	IN	_	18	case	_	_
18	Madrid	Madrid	PROPN	NNP	Number=Sing	12	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	Dans	dans	ADP	IN	_	3	case	_	wordform=dans
2	ce	ce	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	contexte	contexte	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	fulminer	fulminer	VERB	VB	VerbForm=Inf	9	csubj	_	_
6	contre	contre	ADP	IN	_	8	case	_	_
7	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	commerce	commerce	NOUN	NN	Gender=Masc|Number=Sing	5	obl	_	_
9	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	tout	tout	ADJ	PDT	Gender=Masc|Number=Sing	12	amod	_	_
11	son	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	sens	sens	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 csubj	color:blue
1	«	«	PUNCT	``	_	3	punct	_	_
2	Je	il	PRON	PRP	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	wordform=je
3	dois	devoir	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	féliciter	féliciter	VERB	VB	VerbForm=Inf	3	xcomp	_	_
5	Andy	Andy	PROPN	NNP	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_
7	Devenir	devenir	VERB	VB	VerbForm=Inf	14	csubj	_	wordform=devenir
8	numéro	numéro	NOUN	NN	Gender=Masc|Number=Sing	7	obj	_	_
9	un	un	NUM	CD	_	8	appos	_	_
10	mondial	mondial	ADJ	JJ	Gender=Masc|Number=Sing	8	amod	_	_
11	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
12	vraiment	vraiment	ADV	RB	_	14	advmod	_	_
13	quelque	quelque	ADJ	JJ	Gender=Fem|Number=Sing	14	amod	_	_
14	chose	chose	NOUN	NN	Gender=Fem|Number=Sing	3	parataxis	_	_
15	»	»	PUNCT	''	_	3	punct	_	SpaceAfter=No
16	,	,	PUNCT	,	_	3	punct	_	_
17	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux:tense	_	_
18	constaté	constater	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	parataxis	_	_
19	l’	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	SpaceAfter=No|wordform=l'
20	américain	américain	NOUN	NN	Gender=Masc|Number=Sing	18	nsubj	_	SpaceAfter=No
21	.	.	PUNCT	.	_	18	punct	_	_

~~~


