---
layout: base
title:  'Statistics of obl:arg in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="es_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="es_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

53 nodes (0%) are attached to their parents as `obl:arg`.

46 instances of `obl:arg` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13207547169811.

The following 1 pairs of parts of speech are connected with `obl:arg`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (53; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:arg	color:blue
1	Le	él	PRON	PRP	Case=Dat|Number=Sing|Person=3|PronType=Prs	2	obl:arg	_	_
2	apasiona	apasionar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	guitarra	guitarra	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	dio	dar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
7	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concierto	concierto	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	allí	ADV	RB	_	6	advmod	_	_
10	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
11	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


