---
layout: base
title:  'Statistics of csubj:pass in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-csubj.html">csubj</a></tt>.

7 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.14285714285714.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (7; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj:pass	color:blue
1	Pada	pada	ADP	R--	_	2	case	_	MorphInd=^pada<r>_R--$
2	pihak	pihak	NOUN	NSD	Number=Sing	10	obl	_	MorphInd=^pihak<n>_NSD$
3	yang	yang	PRON	S--	PronType=Rel	4	nsubj	_	MorphInd=^yang<s>_S--$
4	lain	lain	ADJ	ASP	_	2	acl:relcl	_	SpaceAfter=No|MorphInd=^lain<a>_ASP$
5	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
6	berjenis	jenis	VERB	VSA	Mood=Ind|Voice=Act	10	csubj:pass	_	MorphInd=^ber+jenis<n>_VSA$
7	-	-	PUNCT	Z--	_	8	punct	_	MorphInd=^-<z>_Z--$
8	jenis	jenis	VERB	NSD	_	6	fixed	_	MorphInd=^jenis<n>_NSD$
9	ulat	ulat	NOUN	NSD	Number=Sing	6	obj	_	MorphInd=^ulat<n>_NSD$
10	diketahui	ketahui	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+ketahui<v>_VSP$
11	sebagai	sebagai	ADP	R--	_	12	case	_	MorphInd=^sebagai<r>_R--$
12	hama	hama	NOUN	X--	_	10	obl	_	MorphInd=^hama<x>_X--$
13	yang	yang	PRON	S--	PronType=Rel	14	nsubj	_	MorphInd=^yang<s>_S--$
14	rakus	rakus	ADJ	X--	_	12	acl:relcl	_	SpaceAfter=No|MorphInd=^rakus<x>_X--$
15	.	.	PUNCT	Z--	_	10	punct	_	MorphInd=^.<z>_Z--$

~~~


