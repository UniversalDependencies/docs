---
layout: base
title:  'Statistics of cc in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `cc`

This relation is universal.

3571 nodes (3%) are attached to their parents as `cc`.

3352 instances of `cc` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70820498459815.

The following 17 pairs of parts of speech are connected with `cc`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1387; 39% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1111; 31% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (798; 22% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (158; 4% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (42; 1% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (21; 1% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (13; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (12; 0% instances), <tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (8; 0% instances), <tt><a href="id_gsd-pos-PART.html">PART</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="id_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Stres	stres	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^stres<n>_NSD$
2	atau	atau	CCONJ	H--	_	3	cc	_	MorphInd=^atau<h>_H--$
3	penyalah-gunaan	penyalah-gunaan	NOUN	_	_	1	conj	_	MorphInd=^peN+salah<a>_NSD$DASH^guna<n>+an_NSD$
4	zat	zat	NOUN	NSD	Number=Sing	3	compound	_	SpaceAfter=No|MorphInd=^zat<n>_NSD$
5	?	?	PUNCT	Z--	_	1	punct	_	SpaceAfter=No|MorphInd=^?<z>_Z--$
6	?	?	PUNCT	Z--	_	1	punct	_	SpaceAfter=No|MorphInd=^?<z>_Z--$
7	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Sampai	sampai	ADP	R--	_	3	case	_	MorphInd=^sampai<r>_R--$
2	akhir	akhir	NOUN	NSD	Number=Sing	3	amod	_	MorphInd=^akhir<n>_NSD$
3	hidupnya	hidup	NOUN	NSD+PS3	Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	MorphInd=^hidup<n>_NSD+dia<p>_PS3$
4	Whistler	whistler	PROPN	F--	_	5	nsubj	_	MorphInd=^whistler<f>_F--$
5	tinggal	tinggal	VERB	VSA	Number=Sing|Voice=Act	0	root	_	MorphInd=^tinggal<v>_VSA$
6	dan	dan	CCONJ	H--	_	7	cc	_	MorphInd=^dan<h>_H--$
7	hidup	hidup	VERB	NSD	Number=Sing	5	conj	_	MorphInd=^hidup<n>_NSD$
8	di	di	ADP	R--	_	9	case	_	MorphInd=^di<r>_R--$
9	Eropa	eropa	PROPN	NSD	Number=Sing	5	obl	_	SpaceAfter=No|MorphInd=^eropa<n>_NSD$
10	.	.	PUNCT	Z--	_	5	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Lalu	lalu	SCONJ	ASP	Degree=Pos|Number=Sing	3	mark	_	MorphInd=^lalu<a>_ASP$
2	bagaimana	bagaimana	ADV	W--	PronType=Int	3	advmod	_	MorphInd=^bagaimana<w>_W--$
3	dengan	dengan	ADP	R--	_	0	root	_	MorphInd=^dengan<r>_R--$
4	kisah	kisah	NOUN	NSD	Number=Sing	3	nmod	_	MorphInd=^kisah<n>_NSD$
5	cinta	cinta	NOUN	NSD	Number=Sing	4	compound	_	MorphInd=^cinta<n>_NSD$
6	Mutia	mutia	PROPN	X--	_	5	flat	_	MorphInd=^mutia<x>_X--$
7	dan	dan	CCONJ	H--	_	8	cc	_	MorphInd=^dan<h>_H--$
8	Fadel	fadel	PROPN	F--	_	6	conj	_	SpaceAfter=No|MorphInd=^fadel<f>_F--$
9	?	?	PUNCT	Z--	_	3	punct	_	MorphInd=^?<z>_Z--$

~~~


