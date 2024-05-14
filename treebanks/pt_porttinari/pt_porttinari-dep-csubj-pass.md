---
layout: base
title:  'Statistics of csubj:pass in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="pt_porttinari-dep-csubj-outer.html">csubj:outer</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:pass	color:blue
1	Além	além	ADV	_	_	6	advmod	_	_
2	de	de	ADP	_	_	3	case	_	_
3	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	obl	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	aux:pass	_	_
6	investigado	investigar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	se	se	SCONJ	_	_	8	mark	_	_
8	houve	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	csubj:pass	_	_
9	negligência	negligência	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
10	em	em	ADP	_	_	11	mark	_	_
11	fazer	fazer	VERB	_	VerbForm=Inf	9	acl	_	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	busca	busca	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
14	pessoal	pessoal	ADJ	_	Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


