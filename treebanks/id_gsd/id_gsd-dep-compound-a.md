---
layout: base
title:  'Statistics of compound:a in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `compound:a`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-compound.html">compound</a></tt>.

9 nodes (0%) are attached to their parents as `compound:a`.

9 instances of `compound:a` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound:a`: <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (9; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:a	color:blue
1	Program	program	NOUN	NSD	Number=Sing	6	nsubj:pass	_	MorphInd=^program<n>_NSD$
2	awal	awal	ADJ	NSD	_	1	amod	_	MorphInd=^awal<n>_NSD$
3	harus	harus	AUX	VSA	_	6	aux	_	MorphInd=^harus<v>_VSA$
4	susah	susah	ADJ	ASP	_	6	advmod	_	MorphInd=^susah<a>_ASP$
5	payah	payah	ADJ	ASP	_	4	compound:a	_	MorphInd=^payah<a>_ASP$
6	dibuat	buat	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+buat<v>_VSP$
7	dengan	dengan	SCONJ	R--	_	8	mark	_	MorphInd=^dengan<r>_R--$
8	menggunakan	guna	VERB	VSA	Mood=Ind|Voice=Act	6	xcomp	_	MorphInd=^meN+guna<n>+kan_VSA$
9	instruksi	instruksi	NOUN	NSD	Number=Sing	8	obj	_	MorphInd=^instruksi<n>_NSD$
10	(	(	PUNCT	Z--	_	11	punct	_	SpaceAfter=No|MorphInd=^(<z>_Z--$
11	operasi	operasi	NOUN	NSD	Number=Sing	9	appos	_	MorphInd=^operasi<n>_NSD$
12	dasar	dasar	ADJ	NSD	_	11	amod	_	SpaceAfter=No|MorphInd=^dasar<n>_NSD$
13	)	)	PUNCT	Z--	_	11	punct	_	MorphInd=^)<z>_Z--$
14	dari	dari	ADP	R--	_	15	case	_	MorphInd=^dari<r>_R--$
15	mesin	mesin	NOUN	NSD	Number=Sing	6	obl	_	MorphInd=^mesin<n>_NSD$
16	tertentu	tertentu	DET	B--	PronType=Dem	15	det	_	SpaceAfter=No|MorphInd=^tertentu<b>_B--$
17	,	,	PUNCT	Z--	_	21	punct	_	MorphInd=^,<z>_Z--$
18	sering	sering	ADV	D--	_	19	advmod	_	MorphInd=^sering<d>_D--$
19	kali	kali	NOUN	NSD	Number=Sing	21	nmod	_	MorphInd=^kali<n>_NSD$
20	dalam	dalam	ADP	ASP	_	21	case	_	MorphInd=^dalam<a>_ASP$
21	notasi	notasi	NOUN	X--	_	6	obl	_	MorphInd=^notasi<x>_X--$
22	biner	biner	NOUN	X--	_	21	compound	_	SpaceAfter=No|MorphInd=^biner<x>_X--$
23	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


