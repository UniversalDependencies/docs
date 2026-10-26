---
layout: base
title:  'Statistics of expl in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="pt_porttinari-dep-expl-impers.html">expl:impers</a></tt>.

544 nodes (0%) are attached to their parents as `expl`.

472 instances of `expl` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (544; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	São	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	muitas	muito	ADJ	_	Gender=Fem|Number=Plur	0	root	0:root	_
3	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	4:det	_
4	vozes	voz	NOUN	_	Gender=Fem|Number=Plur	2	nsubj	2:nsubj|9:nsubj	_
5	que	que	PRON	_	PronType=Rel	9	nsubj	4:ref	_
6	não	não	ADV	_	_	9	advmod	9:advmod	_
7	irão	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	aux	9:aux	_
8	se	se	PRON	_	Case=Acc|Person=3|PronType=Prs	9	expl	9:expl	_
9	calar	calar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	4	acl:relcl	4:acl:relcl	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


