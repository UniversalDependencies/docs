---
layout: base
title:  'Statistics of compound:plur in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `compound:plur`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-compound.html">compound</a></tt>.

679 nodes (1%) are attached to their parents as `compound:plur`.

679 instances of `compound:plur` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99410898379971.

The following 10 pairs of parts of speech are connected with `compound:plur`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (533; 78% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (37; 5% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (33; 5% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (28; 4% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-DET.html">DET</a></tt> (26; 4% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (16; 2% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="id_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound:plur	color:blue
1	Sebagian	sebagian	DET	ASP	Degree=Pos|Number=Sing	4	det	_	MorphInd=^sebagian<a>_ASP$
2	besar	besar	ADJ	ASP	Degree=Pos|Number=Sing	1	amod	_	MorphInd=^besar<a>_ASP$
3	dari	dari	ADP	R--	_	4	case	_	MorphInd=^dari<r>_R--$
4	teks	teks	NOUN	NSD	Number=Sing	8	nsubj:pass	_	MorphInd=^teks<n>_NSD$
5	-	-	PUNCT	Z--	_	4	punct	_	MorphInd=^-<z>_Z--$
6	teks	teks	NOUN	NSD	Number=Sing	4	compound:plur	_	MorphInd=^teks<n>_NSD$
7	ini	ini	DET	B--	PronType=Dem	4	det	_	MorphInd=^ini<b>_B--$
8	ditulis	ditulis	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	MorphInd=^di+tulis<v>_VSP$
9	setelah	setelah	ADP	R--	_	10	case	_	MorphInd=^setelah<r>_R--$
10	abad	abad	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^abad<n>_NSD$
11	ke	ke	NUM	R--	NumType=Card	13	det	_	MorphInd=^ke<r>_R--$
12	-	-	PUNCT	Z--	_	13	punct	_	MorphInd=^-<z>_Z--$
13	11	11	NUM	CC-	NumType=Card	10	nummod	_	SpaceAfter=No|MorphInd=^11<c>_CC-$
14	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:plur	color:blue
1	Kira	kira	ADV	VSA	Number=Sing|Voice=Act	0	root	_	MorphInd=^kira<v>_VSA$
2	kira	kira	ADV	VSA	Number=Sing|Voice=Act	1	compound:plur	_	MorphInd=^kira<v>_VSA$
3	antara	antara	ADP	R--	_	4	case	_	MorphInd=^antara<r>_R--$
4	Tadase	tadase	PROPN	X--	_	1	nmod	_	MorphInd=^tadase<x>_X--$
5	dan	dan	CCONJ	H--	_	6	cc	_	MorphInd=^dan<h>_H--$
6	Ikuto	ikuto	PROPN	X--	_	4	conj	_	MorphInd=^ikuto<x>_X--$
7	mana	mana	ADP	NSD	Number=Sing	1	case	_	MorphInd=^mana<n>_NSD$
8	yang	yang	PRON	S--	PronType=Rel	10	nsubj	_	MorphInd=^yang<s>_S--$
9	Amu	a	ADV	F--+PS2	Number[psor]=Sing|Person[psor]=2	10	nsubj	_	MorphInd=^a<f>_F--+kamu<p>_PS2$
10	pilih	pilih	VERB	VSA	Number=Sing|Voice=Act	1	acl	_	SpaceAfter=No|MorphInd=^pilih<v>_VSA$
11	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:plur	color:blue
1	Teori	teori	PROPN	NSD	Number=Sing	7	nsubj	_	MorphInd=^teori<n>_NSD$
2	-	-	PUNCT	Z--	_	1	punct	_	MorphInd=^-<z>_Z--$
3	teori	teori	NOUN	NSD	Number=Sing	1	compound:plur	_	MorphInd=^teori<n>_NSD$
4	sosial	sosial	ADJ	NSD	Number=Sing	1	amod	_	MorphInd=^sosial<n>_NSD$
5	melulu	menlulu	ADV	VSA	Number=Sing|Voice=Act	7	advmod	_	MorphInd=^meN+lulu<f>_VSA$
6	ingin	ingin	ADV	VSA	Number=Sing|Voice=Act	7	advmod	_	MorphInd=^ingin<v>_VSA$
7	menyalin	mensalin	VERB	VSA	Number=Sing|Voice=Act	0	root	_	MorphInd=^meN+salin<v>_VSA$
8	fakta	fakta	NOUN	NSD	Number=Sing	7	obj	_	MorphInd=^fakta<n>_NSD$
9	masa	masa	NOUN	NSD	Number=Sing	8	amod	_	MorphInd=^masa<n>_NSD$
10	kini	kini	ADJ	D--	_	9	amod	_	SpaceAfter=No|MorphInd=^kini<d>_D--$
11	.	.	PUNCT	Z--	_	7	punct	_	MorphInd=^.<z>_Z--$

~~~


