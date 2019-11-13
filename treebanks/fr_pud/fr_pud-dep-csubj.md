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
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	difficile	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
4	de	_	ADP	IN	_	5	mark	_	_
5	penser	_	VERB	VB	_	3	csubj	_	_
6	que	_	SCONJ	IN	_	9	mark	_	_
7	l'	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	SpaceAfter=No
8	Italie	_	PROPN	NNP	Gender=Fem|Number=Sing	9	nsubj	_	_
9	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	ccomp	_	_
10	moins	_	ADV	RBR	_	12	advmod	_	_
11	de	_	ADP	IN	_	10	fixed	_	_
12	kilomètres	_	NOUN	NN	Gender=Masc|Number=Plur	9	obj	_	_
13	de	_	ADP	IN	_	14	case	_	_
14	ligne	_	NOUN	NN	Gender=Fem|Number=Sing	12	nmod	_	_
15	de	_	ADP	IN	_	16	case	_	_
16	métro	_	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
17	que	_	ADP	IN	_	18	case	_	_
18	Madrid	_	PROPN	NNP	Number=Sing	12	nmod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	Dans	_	ADP	IN	_	3	case	_	_
2	ce	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	contexte	_	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	fulminer	_	VERB	VB	_	9	csubj	_	_
6	contre	_	ADP	IN	_	8	case	_	_
7	le	_	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	commerce	_	NOUN	NN	Gender=Masc|Number=Sing	5	obl	_	_
9	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	tout	_	ADJ	PDT	Gender=Masc|Number=Sing	12	amod	_	_
11	son	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	sens	_	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 csubj	color:blue
1	«	_	PUNCT	``	_	3	punct	_	_
2	Je	_	PRON	PRP	Number=Sing|Person=1	3	nsubj	_	_
3	dois	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	féliciter	_	VERB	VB	_	3	xcomp	_	_
5	Andy	_	PROPN	NNP	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	.	_	PUNCT	.	_	3	punct	_	_
7	Devenir	_	VERB	VB	_	14	csubj	_	_
8	numéro	_	NOUN	NN	Gender=Masc|Number=Sing	7	obj	_	_
9	un	_	NUM	CD	_	8	appos	_	_
10	mondial	_	ADJ	JJ	Gender=Masc|Number=Sing	8	amod	_	_
11	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	cop	_	_
12	vraiment	_	ADV	RB	_	14	advmod	_	_
13	quelque	_	ADJ	JJ	Gender=Fem|Number=Sing	14	amod	_	_
14	chose	_	NOUN	NN	Gender=Fem|Number=Sing	3	parataxis	_	_
15	»	_	PUNCT	''	_	3	punct	_	SpaceAfter=No
16	,	_	PUNCT	,	_	3	punct	_	_
17	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	aux:tense	_	_
18	constaté	_	VERB	VBN	Gender=Masc|Number=Sing	3	parataxis	_	_
19	l’	_	DET	DT	Gender=Masc|Number=Sing	20	det	_	OrigForm=l'|SpaceAfter=No
20	américain	_	NOUN	NN	Gender=Masc|Number=Sing	18	nsubj	_	SpaceAfter=No
21	.	_	PUNCT	.	_	18	punct	_	_

~~~


