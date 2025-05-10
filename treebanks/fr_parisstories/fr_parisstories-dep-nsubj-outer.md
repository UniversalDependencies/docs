---
layout: base
title:  'Statistics of nsubj:outer in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_parisstories-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_parisstories-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sujet	sujet	NOUN	_	Gender=Masc|Number=Sing	5	dislocated	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:outer	_	SpaceAfter=No
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	peut	peut	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	-on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	_
7	se	soi	PRON	_	Person=3|PronType=Prs	8	obj	_	_
8	mettre	mettre	VERB	_	VerbForm=Inf	5	xcomp	_	Subject=SubjRaising
9	à	à	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	place	place	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	_
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	autrui	autrui	PRON	_	Number=Sing|Person=3|PronType=Ind	11	nmod	_	_
14	?	?	PUNCT	_	_	5	punct	_	_

~~~


