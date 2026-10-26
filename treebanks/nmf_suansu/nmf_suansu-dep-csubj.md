---
layout: base
title:  'Statistics of csubj in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="nmf_suansu-dep-csubj-outer.html">csubj:outer</a></tt>.

7 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.85714285714286.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (6; 86% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Mazokwoan	mazokwoan	VERB	_	VerbForm=Inf	2	xcomp	2:xcomp	_
2	ngamme	ngamme	VERB	_	VerbForm=Inf	6	csubj	6:csubj	_
3	di	di	SCONJ	NMLZ	_	2	mark	2:mark	_
4	li	li	ADV	ASC	_	2	advmod:emph	2:advmod:emph	_
5	kumda	kum	NOUN	_	Case=Abl|Number=Sing	6	obl	6:obl	_
6	phungle	phung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Tye	tye	DET	_	Deixis=Remt|PronType=Dem	3	det	3:det	_
2	galhwa	galhwa	NOUN	_	Number=Sing	3	nsubj	3:nsubj	_
3	puima	pui	VERB	_	Polarity=Neg|VerbForm=Inf	5	csubj	5:csubj	_
4	di	di	SCONJ	NMLZ	_	3	mark	3:mark	_
5	thuza	thuza	PRON	_	Number=Sing|PronType=Int	0	root	0:root	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


