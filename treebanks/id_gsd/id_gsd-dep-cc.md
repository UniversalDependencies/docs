---
layout: base
title:  'Statistics of cc in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="id_gsd-dep-cc-preconj.html">cc:preconj</a></tt>.

3544 nodes (3%) are attached to their parents as `cc`.

3375 instances of `cc` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70457110609481.

The following 17 pairs of parts of speech are connected with `cc`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1365; 39% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1159; 33% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (765; 22% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (167; 5% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (35; 1% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (17; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (14; 0% instances), <tt><a href="id_gsd-pos-PART.html">PART</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Stres	stres	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^stres<n>_NSD$
2	atau	atau	CCONJ	H--	_	3	cc	_	MorphInd=^atau<h>_H--$
3	penyalah-gunaan	salah_NSD$DASH^guna	NOUN	_	_	1	conj	_	MorphInd=^peN+salah<a>_NSD$DASH^guna<n>+an_NSD$
4	zat	zat	NOUN	NSD	Number=Sing	3	compound	_	SpaceAfter=No|MorphInd=^zat<n>_NSD$
5	?	?	PUNCT	Z--	_	1	punct	_	SpaceAfter=No|MorphInd=^?<z>_Z--$
6	?	?	PUNCT	Z--	_	1	punct	_	SpaceAfter=No|MorphInd=^?<z>_Z--$
7	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Sampai	sampai	ADP	R--	_	3	case	_	MorphInd=^sampai<r>_R--$
2	akhir	akhir	NOUN	NSD	Number=Sing	3	amod	_	MorphInd=^akhir<n>_NSD$
3	hidup	hidup	NOUN	NSD	Number=Sing	6	obl	_	MorphInd=^hidup<n>_NSD$
4	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	3	nmod:poss	_	MorphInd=^dia<p>_PS3$
5	Whistler	whistler	PROPN	F--	_	6	nsubj	_	MorphInd=^whistler<f>_F--$
6	tinggal	tinggal	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^tinggal<v>_VSA$
7	dan	dan	CCONJ	H--	_	8	cc	_	MorphInd=^dan<h>_H--$
8	hidup	hidup	VERB	NSD	_	6	conj	_	MorphInd=^hidup<n>_NSD$
9	di	di	ADP	R--	_	10	case	_	MorphInd=^di<r>_R--$
10	Eropa	eropa	PROPN	NSD	_	6	obl	_	SpaceAfter=No|MorphInd=^eropa<n>_NSD$
11	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Lalu	lalu	SCONJ	ASP	_	3	mark	_	MorphInd=^lalu<a>_ASP$
2	bagaimana	bagaimana	ADV	W--	PronType=Int	3	advmod	_	MorphInd=^bagaimana<w>_W--$
3	dengan	dengan	ADP	R--	_	0	root	_	MorphInd=^dengan<r>_R--$
4	kisah	kisah	NOUN	NSD	Number=Sing	3	nmod	_	MorphInd=^kisah<n>_NSD$
5	cinta	cinta	NOUN	NSD	Number=Sing	4	compound	_	MorphInd=^cinta<n>_NSD$
6	Mutia	mutia	PROPN	X--	_	5	nmod	_	MorphInd=^mutia<x>_X--$
7	dan	dan	CCONJ	H--	_	8	cc	_	MorphInd=^dan<h>_H--$
8	Fadel	fadel	PROPN	F--	_	6	conj	_	SpaceAfter=No|MorphInd=^fadel<f>_F--$
9	?	?	PUNCT	Z--	_	3	punct	_	MorphInd=^?<z>_Z--$

~~~


