---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

896 nodes (0%) are attached to their parents as `iobj`.

887 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49553571428571.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (869; 97% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (27; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	wordform=cela
2	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	donne	donner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	aspect	aspect	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	«	«	PUNCT	_	_	7	punct	_	_
7	formel	formel	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	j'	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	SpaceAfter=No
2	en	en	PRON	_	Emph=No|Person=3|PronType=Prs	5	iobj	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	très	très	ADV	_	_	5	advmod	_	_
5	contente	content	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


