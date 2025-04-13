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
1	Além	além	ADV	_	_	6	advmod	6:advmod	_
2	de	de	ADP	_	_	3	case	3:case	_
3	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	obl	1:obl:de	_
4	,	,	PUNCT	_	_	1	punct	1:punct	_
5	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	investigado	investigar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	se	se	SCONJ	_	_	8	mark	8:mark	_
8	houve	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	csubj:pass	6:csubj:pass	_
9	negligência	negligência	NOUN	_	Gender=Fem|Number=Sing	8	obj	8:obj	_
10	em	em	ADP	_	_	11	mark	11:mark	_
11	fazer	fazer	VERB	_	VerbForm=Inf	9	acl	9:acl:em	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	13:det	_
13	busca	busca	NOUN	_	Gender=Fem|Number=Sing	11	obj	11:obj	_
14	pessoal	pessoal	ADJ	_	Number=Sing	13	amod	13:amod	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No

~~~


