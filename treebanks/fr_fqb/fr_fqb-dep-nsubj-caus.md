---
layout: base
title:  'Statistics of nsubj:caus in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_fqb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_fqb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:caus`.

1 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:caus	color:blue
1	J'	il	PRON	_	Number=Sing|Person=1	4	nsubj:caus	_	SpaceAfter=No
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:caus	_	_
4	construire	construire	VERB	_	VerbForm=Inf	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	maison	maison	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	advcl	_	SpaceAfter=No
9	-je	il	PRON	_	Number=Sing|Person=1	8	nsubj	_	_
10	droit	droit	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
11	à	à	ADP	_	_	13	case	_	_
12	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	exonération	exonération	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	_
14	de	de	ADP	_	_	15	case	_	_
15	taxe	taxe	NOUN	_	Gender=Fem|Number=Sing	13	nmod	_	_
16	foncière	foncier	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	_
17	?	?	PUNCT	_	_	4	punct	_	_

~~~


