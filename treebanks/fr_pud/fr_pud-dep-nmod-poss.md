---
layout: base
title:  'Statistics of nmod:poss in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-nmod.html">nmod</a></tt>.

277 nodes (1%) are attached to their parents as `nmod:poss`.

277 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09747292418773.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (276; 100% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Notre	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
2	pays	_	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	n'	_	ADV	RB	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	pas	_	ADV	RB	Polarity=Neg	4	advmod	_	_
6	besoin	_	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
7	de	_	ADP	IN	_	8	case	_	_
8	ça	_	PRON	PDEM	_	4	obl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	11	punct	_	_
10	mes	_	PRON	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|PronType=Prs	11	nmod:poss	_	_
11	amis	_	NOUN	NN	Gender=Masc|Number=Plur	4	vocative	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	Dès	_	ADP	IN	_	4	case	_	_
2	le	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
3	troisième	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	jour	_	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	je	_	PRON	PRP	Gender=Masc|Number=Sing|Person=1	8	nsubj	_	_
7	suis	_	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	8	aux	_	_
8	remonté	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
9	sur	_	ADP	IN	_	11	case	_	_
10	mon	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|PronType=Prs	11	nmod:poss	_	_
11	EMicro	_	PROPN	NNP	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	_	PUNCT	.	_	8	punct	_	_

~~~


