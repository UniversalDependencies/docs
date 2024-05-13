---
layout: base
title:  'Statistics of expl:pass in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_isdt-dep-expl-impers.html">expl:impers</a></tt>.

374 nodes (0%) are attached to their parents as `expl:pass`.

335 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22727272727273.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (374; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pass	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	lana	lana	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	fibra	fibra	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root|8:nsubj:pass	_
6	che	che	PRON	PR	PronType=Rel	8	nsubj:pass	5:ref	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl:pass	8:expl:pass	_
8	tinge	tingere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	5:acl:relcl	_
9	molto	molto	ADV	B	_	10	advmod	10:advmod	_
10	facilmente	facilmente	ADV	B	_	8	advmod	8:advmod	SpaceAfter=No
11	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


