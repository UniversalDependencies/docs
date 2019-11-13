---
layout: base
title:  'Statistics of iobj:agent in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-iobj.html">iobj</a></tt>.

1 nodes (0%) are attached to their parents as `iobj:agent`.

1 instances of `iobj:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj:agent	color:blue
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3	5	nsubj:caus	_	_
2	lui	lui	PRON	_	Number=Sing|Person=3	5	iobj:agent	_	_
3	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	subir	subir	VERB	_	VerbForm=Inf	0	root	_	_
6	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	7	det	_	_
7	chocs	choc	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	électriques	électrique	ADJ	_	Number=Plur	7	amod	_	_
9	sur	sur	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	parties	partie	NOUN	_	Gender=Fem|Number=Plur	5	obl:mod	_	_
12	sensibles	sensible	ADJ	_	Number=Plur	11	amod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	son	son	DET	_	Number=Sing|Poss=Yes	15	det	_	_
15	corps	corps	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


