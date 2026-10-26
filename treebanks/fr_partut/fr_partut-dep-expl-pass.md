---
layout: base
title:  'Statistics of expl:pass in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="fr_partut-dep-expl-pv.html">expl:pv</a></tt>.

27 nodes (0%) are attached to their parents as `expl:pass`.

27 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25925925925926.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (27; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pass	color:blue
1	Quel	quel	PRON	PQ	Gender=Masc|Number=Sing|PronType=Int	0	root	_	_
2	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	âge	âge	NOUN	S	Gender=Masc|Number=Sing	1	nsubj	_	_
5	minimal	minimal	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
6	requis	requérir	VERB	V	Gender=Masc|Tense=Past|VerbForm=Part	4	acl	_	_
7	pour	pour	ADP	E	_	9	mark	_	_
8	s'	soi	PRON	P	Person=3|PronType=Prs|Reflex=Yes	9	expl:pass	_	SpaceAfter=No
9	inscrire	inscrire	VERB	V	VerbForm=Inf	6	advcl	_	_
10	à	à	ADP	E	_	11	case	_	_
11	Facebook	Facebook	PROPN	SP	_	9	obl	_	_
12	?	?	PUNCT	FS	_	1	punct	_	_

~~~


