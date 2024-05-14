---
layout: base
title:  'Statistics of expl in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `expl`

This relation is universal.

733 nodes (0%) are attached to their parents as `expl`.

588 instances of `expl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (732; 100% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	São	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	muitas	muito	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
3	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	vozes	voz	NOUN	_	Gender=Fem|Number=Plur	2	nsubj	_	_
5	que	que	PRON	_	PronType=Rel	9	nsubj	_	_
6	não	não	ADV	_	_	9	advmod	_	_
7	irão	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	aux	_	_
8	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	9	expl	_	_
9	calar	calar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	4	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 expl	color:blue
1	Em	em	ADP	_	_	2	case	_	_
2	novembro	novembro	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Kéfera	Kéfera	PROPN	_	_	5	nsubj	_	_
5	estreia	estrear	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	novo	novo	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
8	longa	longa	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	Gosto	Gosto	PROPN	_	_	8	appos	_	_
12	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	13	expl	_	Proper=Yes
13	Discute	Discute	PROPN	_	_	11	flat:name	_	SpaceAfter=No
14	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


