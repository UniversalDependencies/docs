---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-aux.html">aux</a></tt>.

94 nodes (0%) are attached to their parents as `aux:pass`.

94 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03191489361702.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (94; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Hay	haber	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	gente	gente	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	que	PRON	REL	Gender=Fem|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
4	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	asesinada	asesinar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
6	allí	allí	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	PunctType=Peri	1	punct	_	_

~~~


