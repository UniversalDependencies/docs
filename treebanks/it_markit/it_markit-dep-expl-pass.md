---
layout: base
title:  'Statistics of expl:pass in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_markit-dep-expl-impers.html">expl:impers</a></tt>.

3 nodes (0%) are attached to their parents as `expl:pass`.

3 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 expl:pass	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	VERO	VERO	PROPN	SP	_	0	root	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	capitare	capitare	VERB	V	VerbForm=Inf	2	csubj	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	avere	avere	VERB	V	VerbForm=Inf	5	xcomp	_	_
8	esperienze	esperienza	NOUN	S	Gender=Fem|Number=Plur	7	obj	_	_
9	negative	negativo	ADJ	A	Gender=Fem|Number=Plur	8	amod	_	_
10	,	,	PUNCT	FF	_	14	punct	_	_
11	ma	ma	CCONJ	CC	_	14	cc	_	_
12	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	14	expl:pass	_	_
13	possono	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	fare	fare	VERB	V	VerbForm=Inf	2	conj	_	_
15	incontri	incontro	NOUN	S	Gender=Masc|Number=Plur	14	obj	_	_
16	che	che	PRON	PR	_	17	nsubj	_	_
17	cambieranno	cambiare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	15	acl:relcl	_	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
19	nostra	nostro	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	20	det:poss	_	_
20	vita	vita	NOUN	S	Gender=Fem|Number=Sing	17	obj	_	_
21	in	in	ADP	E	_	22	case	_	_
22	positivo	positivo	ADJ	A	Gender=Masc|Number=Sing	17	obl	_	_
23	.	.	PUNCT	FS	_	2	punct	_	_

~~~


