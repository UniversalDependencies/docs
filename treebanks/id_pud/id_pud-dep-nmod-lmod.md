---
layout: base
title:  'Statistics of nmod:lmod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="id_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

107 nodes (1%) are attached to their parents as `nmod:lmod`.

107 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24299065420561.

The following 7 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (67; 63% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (21; 20% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (13; 12% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:lmod	color:blue
1	Rusia	Rusia	PROPN	_	_	2	nsubj	_	_
2	mengumumkan	umum	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	penangguhan	tangguh	NOUN	_	Number=Sing	2	obj	_	_
4	kontrak	kontrak	NOUN	_	Number=Sing	3	nmod	_	_
5	pada	pada	ADP	_	_	7	case	_	_
6	awal	awal	NOUN	_	Number=Sing	7	nmod:lmod	_	_
7	bulan	bulan	NOUN	_	Number=Sing	2	obl:tmod	_	_
8	Oktober	Oktober	PROPN	_	_	7	nmod:tmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:lmod	color:blue
1	Suatu	suatu	DET	_	Definite=Ind|PronType=Art	2	det	_	_
2	level	level	NOUN	_	Number=Sing	0	root	_	_
3	yang	yang	PRON	_	PronType=Rel	8	nsubj	_	_
4	dalam	dalam	ADP	_	_	6	case	_	_
5	kedua	dua	NUM	_	NumType=Card	6	nummod	_	_
6	kasus	kasus	NOUN	_	Number=Sing	8	obl	_	_
7	ini	ini	DET	_	PronType=Dem	6	det	_	_
8	berada	ada	VERB	_	Mood=Ind|Voice=Act	2	acl:relcl	_	_
9	di	di	ADP	_	_	12	case	_	_
10	bagian	bagi	NOUN	_	Number=Sing	12	nmod:lmod	_	_
11	teratas	atas	ADJ	_	Degree=Sup	10	amod	_	_
12	UE	UE	PROPN	_	Abbr=Yes	8	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:lmod	color:blue
1	Sekarang	sekarang	ADV	_	_	4	advmod	_	_
2	cuma	cuma	ADV	_	_	4	advmod	_	_
3	tidak	tidak	PART	_	Polarity=Neg	4	advmod	_	_
4	jelas	jelas	ADJ	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	di	di	ADP	_	_	8	case	_	_
7	dalam	dalam	NOUN	_	Number=Sing	8	nmod:lmod	_	_
8	yang	yang	PRON	_	PronType=Rel	4	obl	_	_
9	mana	mana	PRON	_	PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


