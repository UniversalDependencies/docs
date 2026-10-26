---
layout: base
title:  'Statistics of expl:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_pud-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_pud-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_pud-dep-expl-subj.html">expl:subj</a></tt>.

13 nodes (0%) are attached to their parents as `expl:pass`.

13 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30769230769231.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (13; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	Et	et	CCONJ	CC	_	7	cc	_	wordform=et
2	ensuite	ensuite	ADV	RB	_	7	advmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	pub	pub	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
6	se	soi	PRON	PRP	Person=3|PronType=Prs|Reflex=Yes	7	expl:pass	_	_
7	termine	terminer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


