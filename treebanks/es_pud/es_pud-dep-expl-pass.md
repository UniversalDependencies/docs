---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="es_pud-dep-expl-pv.html">expl:pv</a></tt>.

2 nodes (0%) are attached to their parents as `expl:pass`.

2 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pass	color:blue
1	No	no	ADV	RB	Polarity=Neg	3	advmod	_	_
2	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	sabe	saber	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	que	que	DET	WDT	Gender=Masc|Number=Sing|PronType=Int,Rel	6	det	_	_
6	modo	modo	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
7	han	haber	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	trabajado	trabajar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	csubj:pass	_	_
9	juntos	junto	ADJ	JJ	Gender=Masc|Number=Plur	11	acl	_	_
10	ambos	ambo	DET	DT	Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	11	det	_	_
11	dramaturgos	dramaturgo	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


