---
layout: base
title:  'Statistics of aux:pass in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_sequoia-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_sequoia-dep-aux-tense.html">aux:tense</a></tt>.

756 nodes (1%) are attached to their parents as `aux:pass`.

756 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18386243386243.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (756; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	Comment	comment	ADV	_	PronType=Int	5	advmod	_	_
2	Angiox	Angiox	PROPN	_	_	5	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	SpaceAfter=No
4	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	expl:subj	_	_
5	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


