---
layout: base
title:  'Statistics of nsubj:caus in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_pud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:caus`.

4 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 2 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	Les	le	DET	DT	Gender=Masc|Number=Plur	2	det	_	wordform=les
2	gens	gens	NOUN	NN	Gender=Masc|Number=Plur	6	nsubj:caus	_	_
3	s'	se	PRON	PRP	Gender=Masc|Number=Plur|Person=3	6	obj	_	SpaceAfter=No
4	y	y	PRON	PRP	Person=3	6	obl	_	_
5	font	faire	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:caus	_	_
6	tuer	tuer	VERB	VB	VerbForm=Inf	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:caus	color:blue
1	C'	ce	PRON	PDEM	_	3	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	PDEM	_	0	root	_	_
4	qui	qui	PRON	WP	_	7	nsubj:caus	_	_
5	nous	le	PRON	PRP	Number=Plur|Person=1	7	obj:agent	_	_
6	fait	faire	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
7	revenir	revenir	VERB	VB	VerbForm=Inf	3	acl:relcl	_	_
8	encore	encore	ADV	RB	_	7	advmod	_	_
9	et	et	CCONJ	CC	_	10	cc	_	_
10	encore	encore	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


