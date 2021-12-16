---
layout: base
title:  'Statistics of csubj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

28 nodes (0%) are attached to their parents as `csubj`.

28 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.03571428571429.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (17; 61% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	Pada	pada	ADP	R--	_	2	case	_	MorphInd=^pada<r>_R--$
2	16	16	NUM	CC-	NumType=Card	7	obl:tmod	_	MorphInd=^16<c>_CC-$
3	Juli	juli	NOUN	NSD	Number=Sing	2	flat	_	MorphInd=^juli<n>_NSD$
4	berita	berita	NOUN	NSD	Number=Sing	5	nsubj	_	MorphInd=^berita<n>_NSD$
5	adanya	adanya	VERB	B--	Voice=Act	8	csubj	_	MorphInd=^adanya<b>_B--$
6	pembantaian	bantai	NOUN	NSD	Number=Sing	5	obj	_	MorphInd=^peN+bantai<v>+an_NSD$
7	mulai	mulai	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^mulai<v>_VSA$
8	tersebar	sebar	VERB	VSP	Mood=Ind|Voice=Pass	7	xcomp	_	SpaceAfter=No|MorphInd=^ter+sebar<v>_VSP$
9	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 csubj	color:blue
1	Yang	yang	PRON	S--	PronType=Rel	2	nsubj	_	MorphInd=^yang<s>_S--$
2	membedakan	beda	VERB	VSA	Mood=Ind|Voice=Act	9	csubj	_	MorphInd=^meN+beda<a>+kan_VSA$
3	RE	re	NOUN	F--	_	2	obj	_	MorphInd=^re<f>_F--$
4	sarkoplasmik	sarkoplasmik	ADJ	X--	_	3	amod	_	MorphInd=^sarkoplasmik<x>_X--$
5	dari	dari	ADP	R--	_	6	case	_	MorphInd=^dari<r>_R--$
6	RE	re	PROPN	F--	_	3	nmod	_	MorphInd=^re<f>_F--$
7	halus	halus	ADJ	ASP	_	6	amod	_	MorphInd=^halus<a>_ASP$
8	adalah	adalah	AUX	O--	_	9	cop	_	MorphInd=^adalah<o>_O--$
9	kandungan	kandung	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^kandung<v>+an_NSD$
10	protein	protein	NOUN	NSD	Number=Sing	9	compound	_	MorphInd=^protein<n>_NSD$
11	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	MorphInd=^dia<p>_PS3$
12	.	.	PUNCT	Z--	_	9	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 25 csubj	color:blue
1	Dengan	dengan	SCONJ	R--	_	2	mark	_	MorphInd=^dengan<r>_R--$
2	mengetik	ketik	VERB	VSA	Mood=Ind|Voice=Act	14	xcomp	_	MorphInd=^meN+ketik<v>_VSA$
3	secara	secara	ADP	R--	_	4	case	_	MorphInd=^secara<r>_R--$
4	acak	acak	NOUN	ASP	_	2	obl	_	SpaceAfter=No|MorphInd=^acak<a>_ASP$
5	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
6	peluang	peluang	NOUN	NSD	Number=Sing	11	nsubj	_	MorphInd=^peluang<n>_NSD$
7	huruf	huruf	NOUN	NSD	Number=Sing	6	compound	_	MorphInd=^huruf<n>_NSD$
8	pertama	pertama	ADJ	CO-	NumType=Ord	7	amod	_	MorphInd=^pertama<c>_CO-$
9	yang	yang	PRON	S--	PronType=Rel	10	nsubj:pass	_	MorphInd=^yang<s>_S--$
10	diketik	ketik	VERB	VSP	Mood=Ind|Voice=Pass	6	acl:relcl	_	MorphInd=^di+ketik<v>_VSP$
11	merupakan	merupakan	VERB	O--	_	14	csubj	_	MorphInd=^merupakan<o>_O--$
12	b	b	NOUN	F--	_	11	obj	_	MorphInd=^b<f>_F--$
13	adalah	adalah	AUX	O--	_	14	cop	_	MorphInd=^adalah<o>_O--$
14	1	1	NUM	CC-	NumType=Card	0	root	_	MorphInd=^1<c>_CC-$
15	/	/	PUNCT	Z--	_	16	punct	_	MorphInd=^/<z>_Z--$
16	50	50	NUM	CC-	NumType=Card	14	nummod	_	SpaceAfter=No|MorphInd=^50<c>_CC-$
17	,	,	PUNCT	Z--	_	29	punct	_	MorphInd=^,<z>_Z--$
18	dan	dan	CCONJ	H--	_	29	cc	_	MorphInd=^dan<h>_H--$
19	kemungkinan	kemungkinan	NOUN	NSD	Number=Sing	25	nsubj	_	MorphInd=^kemungkinan<n>_NSD$
20	huruf	huruf	NOUN	NSD	Number=Sing	19	compound	_	MorphInd=^huruf<n>_NSD$
21	ke	ke	NUM	R--	NumType=Card	22	nummod	_	MorphInd=^ke<r>_R--$
22	dua	dua	NUM	CC-	NumType=Card	20	nummod	_	MorphInd=^dua<c>_CC-$
23	yang	yang	PRON	S--	PronType=Rel	24	nsubj:pass	_	MorphInd=^yang<s>_S--$
24	diketik	ketik	VERB	VSP	Mood=Ind|Voice=Pass	19	acl:relcl	_	MorphInd=^di+ketik<v>_VSP$
25	merupakan	merupakan	VERB	O--	_	29	csubj	_	MorphInd=^merupakan<o>_O--$
26	a	a	NOUN	F--	_	25	obj	_	MorphInd=^a<f>_F--$
27	juga	juga	ADV	D--	_	29	advmod	_	MorphInd=^juga<d>_D--$
28	adalah	adalah	AUX	O--	_	29	cop	_	MorphInd=^adalah<o>_O--$
29	1	1	NUM	CC-	NumType=Card	14	conj	_	MorphInd=^1<c>_CC-$
30	/	/	PUNCT	Z--	_	29	punct	_	MorphInd=^/<z>_Z--$
31	50	50	NUM	CC-	NumType=Card	29	nummod	_	SpaceAfter=No|MorphInd=^50<c>_CC-$
32	,	,	PUNCT	Z--	_	33	punct	_	MorphInd=^,<z>_Z--$
33	dst	dst	NOUN	X--	_	14	conj	_	SpaceAfter=No|MorphInd=^dst<x>_X--$
34	.	.	PUNCT	Z--	_	14	punct	_	MorphInd=^.<z>_Z--$

~~~


