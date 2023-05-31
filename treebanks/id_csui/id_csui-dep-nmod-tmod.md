---
layout: base
title:  'Statistics of nmod:tmod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_csui-dep-nmod-poss.html">nmod:poss</a></tt>.

321 nodes (1%) are attached to their parents as `nmod:tmod`.

302 instances of `nmod:tmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.51090342679128.

The following 12 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (187; 58% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (64; 20% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (26; 8% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (20; 6% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (10; 3% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nmod:tmod	color:blue
1	Perkembangan	kembang	NOUN	NN	Number=Sing	9	obl	_	_
2	sektor	sektor	NOUN	NN	Number=Sing	1	nmod	_	_
3	riil	riil	ADJ	JJ	_	1	amod	_	_
4	di	di	ADP	IN	_	5	case	_	_
5	bulan	bulan	NOUN	NN	Number=Sing	1	nmod:tmod	_	_
6	Juni	Juni	PROPN	NNP	_	5	nmod:tmod	_	_
7	2007	2007	NUM	CD	NumType=Card	5	nummod	_	_
8	sangat	sangat	ADV	RB	_	9	advmod	_	_
9	positif	positif	ADJ	JJ	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:tmod	color:blue
1	Perkembangan	kembang	NOUN	NN	Number=Sing	9	obl	_	_
2	sektor	sektor	NOUN	NN	Number=Sing	1	nmod	_	_
3	riil	riil	ADJ	JJ	_	1	amod	_	_
4	di	di	ADP	IN	_	5	case	_	_
5	bulan	bulan	NOUN	NN	Number=Sing	1	nmod:tmod	_	_
6	Juni	Juni	PROPN	NNP	_	5	nmod:tmod	_	_
7	2007	2007	NUM	CD	NumType=Card	5	nummod	_	_
8	sangat	sangat	ADV	RB	_	9	advmod	_	_
9	positif	positif	ADJ	JJ	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:tmod	color:blue
1	"	"	PUNCT	``	_	12	punct	_	SpaceAfter=No
2	Sepanjang	Sepanjang	NOUN	NN	Number=Sing	3	nmod	_	_
3	Januari	Januari	PROPN	NNP	_	12	obl:tmod	_	SpaceAfter=No
4	-	-	PUNCT	:	_	5	punct	_	SpaceAfter=No
5	September	September	PROPN	NNP	_	3	nmod:tmod	_	_
6	2007	2007	NUM	CD	NumType=Card	3	nummod	_	_
7	produksi	produksi	NOUN	NN	Number=Sing	12	nsubj	_	_
8	TBS	TBS	PROPN	NNP	_	7	nmod	_	_
9	AALI	AALI	PROPN	NNP	_	7	nmod	_	_
10	yang	yang	PRON	IN	PronType=Rel	11	nsubj:pass	_	_
11	dipanen	dipanen	VERB	VB	Mood=Ind|Voice=Pass	7	acl:relcl	_	_
12	mencapai	capai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
13	2.618.080	2.618.080	NUM	CD	NumType=Card	14	nummod	_	_
14	ton	ton	NOUN	NN	Number=Sing	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	,	_	12	punct	_	SpaceAfter=No
16	"	"	PUNCT	''	_	12	punct	_	_
17	jelas	jelas	VERB	VB	Mood=Ind|Voice=Act	12	parataxis	_	_
18	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
19	.	.	PUNCT	.	_	12	punct	_	_

~~~


