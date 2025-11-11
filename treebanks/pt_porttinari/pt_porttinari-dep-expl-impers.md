---
layout: base
title:  'Statistics of expl:impers in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-expl.html">expl</a></tt>.

161 nodes (0%) are attached to their parents as `expl:impers`.

92 instances of `expl:impers` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (160; 99% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
13	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 expl:impers	color:blue
1	Em	em	ADP	_	_	2	case	2:case	_
2	novembro	novembro	NOUN	_	Gender=Masc|Number=Sing	5	obl	5:obl:em	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	Kéfera	Kéfera	PROPN	_	_	5	nsubj	5:nsubj	_
5	estreia	estrear	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
7	novo	novo	ADJ	_	Gender=Masc|Number=Sing	8	amod	8:amod	_
8	longa	longa	NOUN	_	Gender=Masc|Number=Sing	5	obj	5:obj	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	11:punct	_
10	"	"	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No
11	Gosto	Gosto	PROPN	_	_	8	appos	8:appos	_
12	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	13	expl:impers	13:expl:impers	Proper=Yes
13	Discute	Discute	PROPN	_	_	11	flat:name	11:flat:name	SpaceAfter=No
14	"	"	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


