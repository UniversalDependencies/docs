---
layout: base
title:  'Statistics of aux:caus in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `aux:caus`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_sequoia-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_sequoia-dep-aux-tense.html">aux:tense</a></tt>.

34 nodes (0%) are attached to their parents as `aux:caus`.

34 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08823529411765.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (34; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:caus	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conteur	conteur	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:caus	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	jouer	jouer	VERB	_	VerbForm=Inf	0	root	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	enfants	enfant	NOUN	_	Number=Plur	5	obj:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


