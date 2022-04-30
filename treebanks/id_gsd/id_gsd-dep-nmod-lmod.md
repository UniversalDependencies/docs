---
layout: base
title:  'Statistics of nmod:lmod in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_gsd-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="id_gsd-dep-nmod-tmod.html">nmod:tmod</a></tt>.

57 nodes (0%) are attached to their parents as `nmod:lmod`.

57 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01754385964912.

The following 5 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (34; 60% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (11; 19% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (9; 16% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:lmod	color:blue
1	Para	para	DET	B--	Number=Plur|PronType=Ind	2	det	_	MorphInd=^para<b>_B--$
2	rohaniwan	rohaniwan	NOUN	NSM	Number=Sing	6	nsubj	_	MorphInd=^rohani<n>+wan_NSM$
3	dari	dari	ADP	R--	_	4	case	_	MorphInd=^dari<r>_R--$
4	ordo	ordo	NOUN	X--	_	2	nmod	_	MorphInd=^ordo<x>_X--$
5	ini	ini	DET	B--	PronType=Dem	4	det	_	MorphInd=^ini<b>_B--$
6	menyandang	sandang	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^meN+sandang<v>_VSA$
7	nama	nama	NOUN	NSD	Number=Sing	6	obj	_	MorphInd=^nama<n>_NSD$
8	O	o	PROPN	F--	_	7	nmod	_	SpaceAfter=No|MorphInd=^o<f>_F--$
9	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$
10	Carm	carm	PROPN	X--	_	8	flat:name	_	MorphInd=^carm<x>_X--$
11	di	di	ADP	R--	_	13	case	_	MorphInd=^di<r>_R--$
12	belakang	belakang	NOUN	NSD	Number=Sing	13	nmod:lmod	_	MorphInd=^belakang<n>_NSD$
13	nama	nama	NOUN	NSD	Number=Sing	6	obl	_	MorphInd=^nama<n>_NSD$
14	mereka	mereka	PRON	PP3	Number=Plur|Person=3|PronType=Prs	13	nmod:poss	_	SpaceAfter=No|MorphInd=^mereka<p>_PP3$
15	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:lmod	color:blue
1	Di	di	ADP	R--	_	3	case	_	MorphInd=^di<r>_R--$
2	dalam	dalam	NOUN	NSD	Number=Sing	3	nmod:lmod	_	MorphInd=^dalam<n>_NSD$
3	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	4	obl	_	MorphInd=^dia<p>_PS3$
4	termasuk	termasuk	VERB	R--	_	0	root	_	MorphInd=^termasuk<r>_R--$
5	juga	juga	ADV	D--	_	4	advmod	_	MorphInd=^juga<d>_D--$
6	meteorologi	meteorologi	NOUN	NSD	Number=Sing	4	obj	_	SpaceAfter=No|MorphInd=^meteorologi<n>_NSD$
7	,	,	PUNCT	Z--	_	8	punct	_	MorphInd=^,<z>_Z--$
8	elektrisitas	elektrisitas	NOUN	X--	_	6	conj	_	MorphInd=^elektrisitas<x>_X--$
9	atmosferis	atmosferis	ADJ	X--	_	8	amod	_	MorphInd=^atmosferis<x>_X--$
10	dan	dan	CCONJ	H--	_	11	cc	_	MorphInd=^dan<h>_H--$
11	fisika	fisika	NOUN	NSD	Number=Sing	6	conj	_	MorphInd=^fisika<n>_NSD$
12	ionosfer	ionosfer	NOUN	X--	_	11	compound	_	SpaceAfter=No|MorphInd=^ionosfer<x>_X--$
13	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:lmod	color:blue
1	Untuk	untuk	ADP	R--	_	2	case	_	MorphInd=^untuk<r>_R--$
2	ukuran	ukur	NOUN	NSD	Number=Sing	14	obl	_	MorphInd=^ukur<v>+an_NSD$
3	kota	kota	NOUN	NSD	Number=Sing	2	compound	_	MorphInd=^kota<n>_NSD$
4	kabupaten	kabupaten	NOUN	NSD	Number=Sing	3	compound	_	MorphInd=^kabupaten<n>_NSD$
5	di	di	ADP	R--	_	7	case	_	MorphInd=^di<r>_R--$
6	luar	luar	NOUN	ASP	_	7	nmod:lmod	_	MorphInd=^luar<a>_ASP$
7	Pulau	pulau	PROPN	NSD	_	3	nmod	_	MorphInd=^pulau<n>_NSD$
8	Jawa	jawa	PROPN	NSD	_	7	flat:name	_	SpaceAfter=No|MorphInd=^jawa<n>_NSD$
9	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
10	keberadaan	keberadaan	NOUN	NSD	Number=Sing	14	nsubj	_	MorphInd=^keberadaan<n>_NSD$
11	Bandara	bandara	NOUN	NSD	Number=Sing	10	compound	_	MorphInd=^bandara<n>_NSD$
12	Iskandar	iskandar	PROPN	F--	_	11	nmod	_	MorphInd=^iskandar<f>_F--$
13	cukup	cukup	ADV	D--	_	14	advmod	_	MorphInd=^cukup<d>_D--$
14	memadai	memadai	VERB	ASP	_	0	root	_	SpaceAfter=No|MorphInd=^memadai<a>_ASP$
15	.	.	PUNCT	Z--	_	14	punct	_	MorphInd=^.<z>_Z--$

~~~


