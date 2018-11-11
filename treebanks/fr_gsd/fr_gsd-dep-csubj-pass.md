---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj:pass	color:blue
1	Can	can	AUX	_	_	3	aux	_	_
2	You	you	PRON	_	Person=2|PronType=Prs	3	nsubj	_	_
3	Feel	feel	VERB	_	_	7	csubj:pass	_	_
4	It	it	PRON	_	Number=Sing|PronType=Prs	3	obj	_	_
5	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	_
7	enregistré	enregistrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	en	en	ADP	_	_	9	case	_	_
9	mars	mars	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
10	1980	1980	NUM	_	_	9	nmod	_	_
11	et	et	CCONJ	_	_	13	cc	_	_
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	sorti	sortir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	conj	_	_
14	en	en	ADP	_	_	15	case	_	_
15	single	single	NOUN	_	Gender=Masc|Number=Sing	13	obl	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	23	23	NUM	_	_	13	obl	_	_
18	septembre	septembre	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
19	1980	1980	NUM	_	_	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	7	punct	_	_

~~~


