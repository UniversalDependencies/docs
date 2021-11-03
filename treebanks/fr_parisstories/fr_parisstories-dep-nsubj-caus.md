---
layout: base
title:  'Statistics of nsubj:caus in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_parisstories-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:caus`.

1 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj:caus	_	_
3	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	SpaceAfter=No
4	ai	avoir	AUX	_	_	6	aux	_	_
5	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux:caus	_	_
6	patienter	patienter	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	16	punct	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	me	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	10	obj	_	_
10	semble	sembler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	discourse	_	_
11	à	à	ADP	_	_	12	case	_	_
12	peu	peu	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	_
13	près	près	ADV	_	_	12	advmod	_	_
14	quarante	quarante	NUM	_	Number=Plur	16	nummod	_	_
15	cinq	cinq	NUM	_	Number=Plur	14	nmod	_	_
16	minutes	minute	NOUN	_	Gender=Fem|Number=Plur	6	obj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	tout	tout	ADV	_	_	19	advmod	_	_
19	seul	seul	ADJ	_	Gender=Masc|Number=Sing	6	advcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	_
21	en	en	ADP	_	_	22	case	_	_
22	bas	bas	NOUN	_	Gender=Masc	6	obl:mod	_	_
23	dans	dans	ADP	_	_	25	case	_	_
24	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	pluie	pluie	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	SpaceAfter=No
26	.	.	PUNCT	_	_	6	punct	_	_

~~~


