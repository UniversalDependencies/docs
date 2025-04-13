---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="es_gsd-dep-expl-pv.html">expl:pv</a></tt>.

10 nodes (0%) are attached to their parents as `expl:pass`.

5 instances of `expl:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (10; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 expl:pass	color:blue
1	Los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	instrumentos	instrumento	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	_
3	que	que	SCONJ	_	_	6	mark	_	_
4	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	pueden	poder	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	usar	usar	VERB	_	VerbForm=Inf	2	acl:relcl	_	_
7	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	muchos	mucho	PRON	_	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	PunctType=Comm	13	punct	_	_
10	como	como	CCONJ	_	_	13	cc	_	_
11	también	también	ADV	_	_	13	advmod	_	_
12	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	superficie	superficie	NOUN	_	Gender=Fem|Number=Sing	8	conj	_	_
14	donde	donde	ADV	_	PronType=Rel	17	advmod	_	_
15	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	17	expl:pass	_	_
16	puede	poder	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
17	hacer	hacer	VERB	_	VerbForm=Inf	13	acl:relcl	_	SpaceAfter=No
18	.	.	PUNCT	_	PunctType=Peri	8	punct	_	_

~~~


