---
layout: base
title:  'Statistics of nsubj:outer in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nsubj:outer	color:blue
1	Heather	heather	PROPN	_	_	2	nsubj	_	_
2	debutó	debutar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	música	música	NOUN	_	Gender=Fem|Number=Sing	2	obl	_	_
6	en	en	ADP	_	_	7	case	_	_
7	Octubre	octubre	PROPN	_	_	2	obl	_	_
8	de	de	ADP	_	_	9	case	_	_
9	2002	2002	NUM	_	NumType=Card	7	nmod	_	_
10	con	con	ADP	_	_	12	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Álbum	álbum	PROPN	_	Gender=Masc|Number=Sing	2	obl	_	_
13	This	this	PRON	_	Foreign=Yes|Number=Sing|PronType=Dem	15	nsubj:outer	_	Lang=en
14	Is	be	AUX	_	Foreign=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	Lang=en
15	Who	who	PRON	_	Foreign=Yes|PronType=Int,Rel	12	appos	_	Lang=en
16	I	I	PRON	_	Case=Nom|Foreign=Yes|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	Lang=en
17	Am	be	AUX	_	Foreign=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	_	Lang=en|SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	de	de	ADP	_	_	21	case	_	_
20	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	disquera	disquera	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
22	RCA	rca	PROPN	_	_	21	appos	_	SpaceAfter=No
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


