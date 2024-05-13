---
layout: base
title:  'Statistics of csubj:pass in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 32 csubj:pass	color:blue
1	Suite	suite	NOUN	_	Gender=Fem|Number=Sing	24	obl	_	_
2	à	à	ADP	_	_	4	case	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	réunion	réunion	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Directoire	Directoire	PROPN	_	_	4	nmod	_	_
8	et	et	CCONJ	_	_	11	cc	_	_
9	de	de	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	7	conj	_	_
12	de	de	ADP	_	_	14	case	_	_
13	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	ministres	ministre	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
16	15	15	NUM	_	_	17	nummod	_	_
17	novembre	novembre	NOUN	_	Gender=Masc|Number=Sing	24	obl	_	_
18	1919	1919	NUM	_	_	17	nmod	_	_
19	à	à	ADP	_	_	20	case	_	_
20	Kamianets-Podilskyï	Kamianets-Podilskyï	PROPN	_	_	24	obl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	expl	_	_
23	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	aux:pass	_	_
24	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
25	qu'	que	SCONJ	_	_	32	mark	_	SpaceAfter=No
26	Andry	Andry	PROPN	_	_	32	nsubj	_	_
27	Makarenko	Makarenko	PROPN	_	_	26	flat:name	_	_
28	et	et	CCONJ	_	_	29	cc	_	_
29	Fedir	Fedir	PROPN	_	_	26	conj	_	_
30	Shvets	Shvets	PROPN	_	_	29	flat:name	_	_
31	seraient	être	AUX	_	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	32	aux	_	_
32	chargé	charger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	24	csubj:pass	_	_
33	de	de	ADP	_	_	35	case	_	_
34	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	35	det	_	_
35	affaires	affaire	NOUN	_	Gender=Fem|Number=Plur	32	obl	_	_
36	publiques	public	ADJ	_	Gender=Fem|Number=Plur	35	amod	_	SpaceAfter=No
37	.	.	PUNCT	_	_	24	punct	_	_

~~~


