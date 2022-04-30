---
layout: base
title:  'Statistics of nmod:tmod in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_gsd-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_gsd-dep-nmod-poss.html">nmod:poss</a></tt>.

113 nodes (0%) are attached to their parents as `nmod:tmod`.

99 instances of `nmod:tmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53982300884956.

The following 10 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (70; 62% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (16; 14% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (13; 12% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (8; 7% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	Kepala	kepala	NOUN	NSD	Number=Sing	7	nsubj	_	MorphInd=^kepala<n>_NSD$
2	Sekolah	sekolah	NOUN	NSD	Number=Sing	1	compound	_	MorphInd=^sekolah<n>_NSD$
3	pada	pada	ADP	R--	_	4	case	_	MorphInd=^pada<r>_R--$
4	waktu	waktu	NOUN	NSD	Number=Sing	1	nmod:tmod	_	MorphInd=^waktu<n>_NSD$
5	itu	itu	DET	B--	PronType=Dem	4	det	_	MorphInd=^itu<b>_B--$
6	adalah	adalah	AUX	O--	_	7	cop	_	MorphInd=^adalah<o>_O--$
7	Drs	drs	PROPN	F--	_	0	root	_	SpaceAfter=No|MorphInd=^drs<f>_F--$
8	.	.	PUNCT	Z--	_	7	punct	_	MorphInd=^.<z>_Z--$
9	AS	as	PROPN	NSD	_	7	flat:name	_	MorphInd=^as<n>_NSD$
10	Setiadi	setiadi	PROPN	X--	_	7	flat:name	_	SpaceAfter=No|MorphInd=^setiadi<x>_X--$
11	.	.	PUNCT	Z--	_	7	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	Rektor	rektor	PROPN	X--	_	6	nsubj	_	MorphInd=^rektor<x>_X--$
2	pada	pada	ADP	R--	_	3	case	_	MorphInd=^pada<r>_R--$
3	tahun	tahun	NOUN	NSD	Number=Sing	1	nmod:tmod	_	MorphInd=^tahun<n>_NSD$
4	2006	2006	NUM	CC-	NumType=Card	3	nummod	_	MorphInd=^2006<c>_CC-$
5	adalah	adalah	AUX	O--	_	6	cop	_	MorphInd=^adalah<o>_O--$
6	Prof	prof	PROPN	F--	_	0	root	_	SpaceAfter=No|MorphInd=^prof<f>_F--$
7	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$
8	Drs	drs	PROPN	F--	_	6	flat:name	_	SpaceAfter=No|MorphInd=^drs<f>_F--$
9	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$
10	Satni	satni	PROPN	X--	_	8	flat:name	_	MorphInd=^satni<x>_X--$
11	Eka	eka	PROPN	F--	_	10	flat:name	_	MorphInd=^eka<f>_F--$
12	Putra	putra	NOUN	NSD	Number=Sing	11	compound	_	SpaceAfter=No|MorphInd=^putra<n>_NSD$
13	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:tmod	color:blue
1	Ini	ini	DET	B--	PronType=Dem	2	det	_	MorphInd=^ini<b>_B--$
2	dirlis	dirlis	NOUN	X--	_	0	root	_	MorphInd=^dirlis<x>_X--$
3	pada	pada	ADP	R--	_	4	case	_	MorphInd=^pada<r>_R--$
4	26	26	NUM	CC-	NumType=Card	2	nmod:tmod	_	MorphInd=^26<c>_CC-$
5	September	september	PROPN	NSD	_	4	flat	_	MorphInd=^september<n>_NSD$
6	2012	2012	NUM	CC-	NumType=Card	4	flat	_	MorphInd=^2012<c>_CC-$
7	di	di	ADP	R--	_	8	case	_	MorphInd=^di<r>_R--$
8	Jepang	jepang	PROPN	NSD	_	2	nmod	_	SpaceAfter=No|MorphInd=^jepang<n>_NSD$
9	.	.	PUNCT	Z--	_	2	punct	_	MorphInd=^.<z>_Z--$

~~~


