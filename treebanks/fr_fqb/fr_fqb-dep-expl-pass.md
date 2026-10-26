---
layout: base
title:  'Statistics of expl:pass in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_fqb-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_fqb-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_fqb-dep-expl-subj.html">expl:subj</a></tt>.

9 nodes (0%) are attached to their parents as `expl:pass`.

9 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77777777777778.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (9; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl:pass	color:blue
1	Quand	quand	ADV	_	PronType=Int	9	advmod	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Guerre	guerre	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	_
4	civile	civil	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
5	américaine	américain	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
6	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	9	expl:pass	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:tense	_	SpaceAfter=No
8	-elle	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	expl:subj	_	_
9	terminée	terminer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	?	?	PUNCT	_	_	9	punct	_	_

~~~


