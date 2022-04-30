---
layout: base
title:  'Statistics of acl:relcl in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-acl.html">acl</a></tt>.

2723 nodes (2%) are attached to their parents as `acl:relcl`.

2716 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91700330517811.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1823; 67% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (440; 16% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (283; 10% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (130; 5% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (31; 1% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Bau	bau	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^bau<n>_NSD$
2	apa	apa	ADV	W--	PronType=Int	1	advmod	_	MorphInd=^apa<w>_W--$
3	kah	kah	PART	T--	_	2	advmod:emph	_	MorphInd=^kah<t>_T--$
4	yang	yang	PRON	S--	PronType=Rel	5	nsubj:pass	_	MorphInd=^yang<s>_S--$
5	tercium	cium	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	MorphInd=^ter+cium<v>_VSP$
6	oleh	oleh	ADP	R--	_	7	case	_	MorphInd=^oleh<r>_R--$
7	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	obl	_	MorphInd=^aku<p>_PS1$
8	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Liburan	libur	NOUN	NSD	Number=Sing	4	nsubj	_	MorphInd=^libur<n>+an_NSD$
2	yang	yang	PRON	S--	PronType=Rel	3	nsubj	_	MorphInd=^yang<s>_S--$
3	indah	indah	ADJ	ASP	_	1	acl:relcl	_	MorphInd=^indah<a>_ASP$
4	mendadak	mendadak	VERB	ASP	_	0	root	_	MorphInd=^mendadak<a>_ASP$
5	menjadi	jadi	VERB	VSA	Mood=Ind|Voice=Act	4	xcomp	_	MorphInd=^meN+jadi<a>_VSA$
6	penuh	penuh	ADJ	ASP	_	5	obj	_	MorphInd=^penuh<a>_ASP$
7	darah	darah	NOUN	NSD	Number=Sing	6	compound	_	SpaceAfter=No|MorphInd=^darah<n>_NSD$
8	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Fungsi	fungsi	NOUN	NSD	Number=Sing	6	nsubj	_	MorphInd=^fungsi<n>_NSD$
2	utama	utama	ADJ	ASP	_	1	amod	_	MorphInd=^utama<a>_ASP$
3	silika	silika	NOUN	NSD	Number=Sing	1	nmod	_	MorphInd=^silika<n>_NSD$
4	adalah	adalah	AUX	O--	_	6	cop	_	MorphInd=^adalah<o>_O--$
5	sebagai	sebagai	ADP	R--	_	6	case	_	MorphInd=^sebagai<r>_R--$
6	asam	asam	PROPN	ASP	_	0	root	_	SpaceAfter=No|MorphInd=^asam<a>_ASP$
7	,	,	PUNCT	Z--	_	9	punct	_	MorphInd=^,<z>_Z--$
8	yang	yang	PRON	S--	PronType=Rel	9	nsubj	_	MorphInd=^yang<s>_S--$
9	membentuk	bentuk	VERB	VSA	Mood=Ind|Voice=Act	6	acl:relcl	_	MorphInd=^meN+bentuk<n>_VSA$
10	silikat	silikat	NOUN	X--	_	9	obj	_	SpaceAfter=No|MorphInd=^silikat<x>_X--$
11	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


