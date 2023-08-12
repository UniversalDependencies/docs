---
layout: base
title:  'Statistics of aux in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_sequoia-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_sequoia-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_sequoia-dep-aux-tense.html">aux:tense</a></tt>.

1 nodes (0%) are attached to their parents as `aux`.

1 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	participants	participant	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	_
3	à	à	ADP	_	_	5	case	_	_
4	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	manifestation	manifestation	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
7	verront	voir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	8	aux	_	_
8	offrir	offrir	VERB	_	VerbForm=Inf	0	root	_	Subject=Generic
9	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	10	det	_	_
10	lunettes	lunette	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	protection	protection	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


