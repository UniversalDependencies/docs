---
layout: base
title:  'Statistics of expl:impers in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_kiparlaforest-dep-expl-pass.html">expl:pass</a></tt>.

24 nodes (0%) are attached to their parents as `expl:impers`.

22 instances of `expl:impers` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.125.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (24; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl:impers	color:blue
1	si	si	PRON	_	Person=3|PronType=Prs	2	expl:impers	_	Begin=117.739|Clitic=Yes|KID=78-0|PaceFast=Yes
2	sentiva	sentire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	KID=78-1|PaceFast=Yes
3	solo	solo	ADV	_	_	2	advmod	_	KID=78-2|PaceFast=Yes
4	pshhh	pshhh	INTJ	_	_	2	obj	_	End=118.879|KID=78-3|PaceFast=Yes
5	io	io	PRON	_	PronType=Rel	4	conj	_	Begin=119.054|KID=79-0
6	che	che	PRON	_	PronType=Rel	8	nsubj	_	KID=79-1
7	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	8	expl	_	Clitic=Yes|KID=79-2
8	siedo	sedere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	KID=79-3
9	su	su	ADP	_	_	11	case	_	KID=79-4a
10	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	KID=79-4b
11	sedia	sedia	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	KID=79-5
12	e	e	CCONJ	_	_	13	cc	_	KID=79-6
13	basta	bastare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	End=120.63|KID=79-7

~~~


