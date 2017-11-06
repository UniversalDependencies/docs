---
layout: base
title:  'Statistics of csubj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_sequoia-dep-csubj-pass.html">csubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 1 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 csubj	color:blue
1	Monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	18	vocative	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Président	président	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	chers	cher	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	_
6	collègues	collègue	NOUN	_	Number=Plur	1	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Madame	monsieur	NOUN	_	Gender=Fem|Number=Sing	1	conj	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	rapporteur	rapporteur	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	comme	comme	SCONJ	_	_	13	mark	_	_
13	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	proverbe	proverbe	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
16	:	:	PUNCT	_	_	13	punct	_	_
17	mieux	mieux	ADV	_	_	18	advmod	_	_
18	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	prévenir	prévenir	VERB	_	VerbForm=Inf	18	csubj	_	_
20	que	que	SCONJ	_	_	21	mark	_	_
21	guérir	guérir	VERB	_	VerbForm=Inf	18	advcl	_	SpaceAfter=No
22	.	.	PUNCT	_	_	18	punct	_	_

~~~


