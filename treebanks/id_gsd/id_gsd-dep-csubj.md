---
layout: base
title:  'Statistics of csubj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

26 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.53846153846154.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (14; 54% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	Pada	pada	ADP	R--	_	3	case	_	MorphInd=^pada<r>_R--$
2	16	16	NUM	CC-	NumType=Card	3	nummod	_	MorphInd=^16<c>_CC-$
3	Juli	juli	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^juli<n>_NSD$
4	berita	berita	NOUN	NSD	Number=Sing	5	nsubj	_	MorphInd=^berita<n>_NSD$
5	adanya	adanya	VERB	B--	PronType=Ind	8	csubj	_	MorphInd=^adanya<b>_B--$
6	pembantaian	penbantaian	NOUN	NSD	Number=Sing	5	obj	_	MorphInd=^peN+bantai<v>+an_NSD$
7	mulai	mulai	ADV	VSA	Number=Sing|Voice=Act	8	advmod	_	MorphInd=^mulai<v>_VSA$
8	tersebar	tersebar	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	SpaceAfter=No|MorphInd=^ter+sebar<v>_VSP$
9	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 csubj	color:blue
1	Yang	yang	PRON	S--	PronType=Rel	2	nsubj	_	MorphInd=^yang<s>_S--$
2	membedakan	menbedakan	VERB	VSA	Number=Sing|Voice=Act	9	csubj	_	MorphInd=^meN+beda<a>+kan_VSA$
3	RE	re	NOUN	F--	_	2	obj	_	MorphInd=^re<f>_F--$
4	sarkoplasmik	sarkoplasmik	ADJ	X--	_	3	amod	_	MorphInd=^sarkoplasmik<x>_X--$
5	dari	dari	ADP	R--	_	6	case	_	MorphInd=^dari<r>_R--$
6	RE	re	PROPN	F--	_	3	nmod	_	MorphInd=^re<f>_F--$
7	halus	halus	ADJ	ASP	Degree=Pos|Number=Sing	6	amod	_	MorphInd=^halus<a>_ASP$
8	adalah	adalah	AUX	O--	_	9	cop	_	MorphInd=^adalah<o>_O--$
9	kandungan	kandungan	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^kandung<v>+an_NSD$
10	proteinnya	protein	NOUN	NSD+PS3	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	compound	_	SpaceAfter=No|MorphInd=^protein<n>_NSD+dia<p>_PS3$
11	.	.	PUNCT	Z--	_	9	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 25 csubj	color:blue
1	Dengan	dengan	ADP	R--	_	2	case	_	MorphInd=^dengan<r>_R--$
2	mengetik	menketik	VERB	VSA	Number=Sing|Voice=Act	14	xcomp	_	MorphInd=^meN+ketik<v>_VSA$
3	secara	secara	ADP	R--	_	4	case	_	MorphInd=^secara<r>_R--$
4	acak	acak	NOUN	ASP	Degree=Pos|Number=Sing	2	obl	_	SpaceAfter=No|MorphInd=^acak<a>_ASP$
5	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
6	peluang	peluang	NOUN	NSD	Number=Sing	11	nsubj	_	MorphInd=^peluang<n>_NSD$
7	huruf	huruf	NOUN	NSD	Number=Sing	6	compound	_	MorphInd=^huruf<n>_NSD$
8	pertama	pertama	ADJ	CO-	_	7	nummod	_	MorphInd=^pertama<c>_CO-$
9	yang	yang	PRON	S--	PronType=Rel	10	nsubj:pass	_	MorphInd=^yang<s>_S--$
10	diketik	diketik	VERB	VSP	Number=Sing|Voice=Pass	6	acl	_	MorphInd=^di+ketik<v>_VSP$
11	merupakan	merupakan	VERB	O--	_	14	csubj	_	MorphInd=^merupakan<o>_O--$
12	b	b	NOUN	F--	_	11	obj	_	MorphInd=^b<f>_F--$
13	adalah	adalah	AUX	O--	_	14	cop	_	MorphInd=^adalah<o>_O--$
14	1	1	NUM	CC-	NumType=Card	0	root	_	MorphInd=^1<c>_CC-$
15	/	/	SYM	Z--	_	29	punct	_	MorphInd=^/<z>_Z--$
16	50	50	NUM	CC-	NumType=Card	14	nummod	_	SpaceAfter=No|MorphInd=^50<c>_CC-$
17	,	,	PUNCT	Z--	_	29	punct	_	MorphInd=^,<z>_Z--$
18	dan	dan	CCONJ	H--	_	29	cc	_	MorphInd=^dan<h>_H--$
19	kemungkinan	kemungkinan	NOUN	NSD	Number=Sing	25	nsubj	_	MorphInd=^kemungkinan<n>_NSD$
20	huruf	huruf	NOUN	NSD	Number=Sing	19	compound	_	MorphInd=^huruf<n>_NSD$
21	ke	ke	NUM	R--	NumType=Card	22	det	_	MorphInd=^ke<r>_R--$
22	dua	dua	NUM	CC-	NumType=Card	20	nummod	_	MorphInd=^dua<c>_CC-$
23	yang	yang	PRON	S--	PronType=Rel	24	nsubj:pass	_	MorphInd=^yang<s>_S--$
24	diketik	diketik	VERB	VSP	Number=Sing|Voice=Pass	19	acl	_	MorphInd=^di+ketik<v>_VSP$
25	merupakan	merupakan	VERB	O--	_	29	csubj	_	MorphInd=^merupakan<o>_O--$
26	a	a	NOUN	F--	_	25	obj	_	MorphInd=^a<f>_F--$
27	juga	juga	ADV	D--	_	29	advmod	_	MorphInd=^juga<d>_D--$
28	adalah	adalah	AUX	O--	_	29	cop	_	MorphInd=^adalah<o>_O--$
29	1	1	NUM	CC-	NumType=Card	14	conj	_	MorphInd=^1<c>_CC-$
30	/	/	SYM	Z--	_	29	punct	_	MorphInd=^/<z>_Z--$
31	50	50	NUM	CC-	NumType=Card	29	nummod	_	SpaceAfter=No|MorphInd=^50<c>_CC-$
32	,	,	PUNCT	Z--	_	33	punct	_	MorphInd=^,<z>_Z--$
33	dst	dst	NOUN	X--	_	14	conj	_	SpaceAfter=No|MorphInd=^dst<x>_X--$
34	.	.	PUNCT	Z--	_	14	punct	_	MorphInd=^.<z>_Z--$

~~~


