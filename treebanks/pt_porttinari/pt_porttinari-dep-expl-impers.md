---
layout: base
title:  'Statistics of expl:impers in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-expl.html">expl</a></tt>.

154 nodes (0%) are attached to their parents as `expl:impers`.

88 instances of `expl:impers` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (154; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:impers	color:blue
1	Tudo	tudo	PRON	_	PronType=Ind	12	nsubj	4:nsubj|12:nsubj	_
2	que	que	PRON	_	PronType=Rel	4	nsubj	1:ref	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	emocional	emocional	ADJ	_	Number=Sing	1	acl:relcl	1:acl:relcl	_
5	em	em	ADP	_	_	7	mark	7:mark	_
6	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	7	expl:impers	7:expl:impers	_
7	tratando	tratar	VERB	_	VerbForm=Ger	12	advcl	12:advcl:em	_
8	de	de	ADP	_	_	9	case	9:case	_
9	adoção	adoção	NOUN	_	Gender=Fem|Number=Sing	7	obl	7:obl:de	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	7:punct	_
11	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	perigoso	perigoso	ADJ	_	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	12:punct	SpaceAfter=No

~~~


