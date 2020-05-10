---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.83333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (6; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 csubj:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	devise	devise	NOUN	_	Gender=Fem|Number=Sing	21	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	régiment	régiment	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
6	:	:	PUNCT	_	_	8	punct	_	_
7	«	«	PUNCT	_	_	8	punct	_	_
8	Honni	honnir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	parataxis	_	wordform=honni
9	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
10	qui	qui	PRON	_	PronType=Rel	13	nsubj	_	_
11	mal	mal	ADV	_	_	13	advmod	_	_
12	y	y	PRON	_	_	13	iobj	_	_
13	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	csubj:pass	_	_
14	»	»	PUNCT	_	_	8	punct	_	_
15	(	(	PUNCT	_	_	17	punct	_	SpaceAfter=No
16	en	en	ADP	_	_	17	case	_	_
17	français	français	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
18	)	)	PUNCT	_	_	17	punct	_	_
19	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	cop	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	devise	devise	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
22	de	de	ADP	_	_	24	case	_	_
23	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
24	Royal	Royal	PROPN	_	_	21	nmod	_	_
25	Horse	Horse	PROPN	_	_	24	flat:name	_	_
26	Guards	Guards	PROPN	_	_	25	flat:name	_	SpaceAfter=No
27	.	.	PUNCT	_	_	21	punct	_	_

~~~


