---
layout: base
title:  'Statistics of aux in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-tense.html">aux:tense</a></tt>.

5 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (4; 80% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	_
3	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	fait	faire	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes
6	voir	voir	VERB	CAUSATIVE	VerbForm=Inf	0	root	_	SpaceAfter=No|Subject=OblRaising
7	…	…	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	et	et	CCONJ	_	_	5	cc	_	ExtPos=CCONJ|Idiom=Yes
2	puis	puis	CCONJ	_	_	1	fixed	_	InIdiom=Yes
3	nous	il	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Scrap=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	euh	euh	INTJ	_	_	5	discourse	_	SpaceAfter=No
8	…	…	PUNCT	_	_	5	punct	_	_

~~~


