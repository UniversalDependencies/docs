---
layout: base
title:  'Statistics of iobj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `iobj`

This relation is universal.

27 nodes (0%) are attached to their parents as `iobj`.

27 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55555555555556.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (8; 30% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (8; 30% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (7; 26% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (1; 4% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 iobj	color:blue
1	Kapal	kapal	NOUN	NSD	Number=Sing	4	nsubj	_	Morf=^kapal<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	Morf=^ini<b>_B--$
3	adalah	adalah	AUX	O--	_	4	cop	_	Morf=^adalah<o>_O--$
4	kapal	kapal	NOUN	NSD	Number=Sing	0	root	_	Morf=^kapal<n>_NSD$
5	pukat	pukat	NOUN	X--	_	4	compound	_	Morf=^pukat<x>_X--$
6	ikan	ikan	NOUN	NSD	Number=Sing	5	compound	_	Morf=^ikan<n>_NSD$
7	yang	yang	PRON	S--	PronType=Rel	8	nsubj:pass	_	Morf=^yang<s>_S--$
8	dibeli	beli	VERB	VSP	Voice=Pass	4	acl:relcl	_	Morf=^di+beli<v>_VSP$
9	Greenpeace	greenpeace	PROPN	X--	_	8	obj	_	Morf=^greenpeace<x>_X--$
10	empat	empat	NUM	CC-	NumType=Card	11	nummod	_	Morf=^empat<c>_CC-$
11	tahun	tahun	NOUN	NSD	Number=Sing	8	iobj	_	Morf=^tahun<n>_NSD$
12	setelah	setelah	ADP	R--	_	13	case	_	Morf=^setelah<r>_R--$
13	kapal	kapal	NOUN	NSD	Number=Sing	8	obl	_	Morf=^kapal<n>_NSD$
14	pertama	pertama	ADJ	CO-	NumType=Ord	13	amod	_	Morf=^pertama<c>_CO-$
15	tenggelam	tenggelam	VERB	ASP	_	13	acl	_	SpaceAfter=No|Morf=^tenggelam<a>_ASP$
16	.	.	PUNCT	Z--	_	4	punct	_	Morf=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Bandar	bandar	NOUN	NSD	Number=Sing	4	nsubj:pass	_	Morf=^bandar<n>_NSD$
2	udara	udara	NOUN	NSD	Number=Sing	1	compound	_	Morf=^udara<n>_NSD$
3	ini	ini	DET	B--	PronType=Dem	1	det	_	Morf=^ini<b>_B--$
4	diberi	beri	VERB	VSP	Voice=Pass	0	root	_	Morf=^di+beri<v>_VSP$
5	nama	nama	NOUN	NSD	Number=Sing	4	obj	_	Morf=^nama<n>_NSD$
6	Venustiano	venustiano	PROPN	X--	_	4	iobj	_	Morf=^venustiano<x>_X--$
7	Carranza	carranza	PROPN	X--	_	6	flat:name	_	SpaceAfter=No|Morf=^carranza<x>_X--$
8	,	,	PUNCT	Z--	_	10	punct	_	Morf=^,<z>_Z--$
9	seorang	orang	DET	B--	Definite=Ind|PronType=Art	10	det	_	Morf=^seorang<b>_B--$
10	presiden	presiden	NOUN	NSD	Number=Sing	6	appos	_	Morf=^presiden<n>_NSD$
11	Meksiko	meksiko	PROPN	NSD	_	10	nmod	_	SpaceAfter=No|Morf=^meksiko<n>_NSD$
12	.	.	PUNCT	Z--	_	4	punct	_	Morf=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	Firaun	firaun	PROPN	NSD	_	2	nsubj	_	Morf=^firaun<n>_NSD$
2	melihat	lihat	VERB	VSA	Voice=Act	0	root	_	Morf=^meN+lihat<v>_VSA$
3	kebijaksanaan	bijaksana	NOUN	NSD	Number=Sing	2	obj	_	Morf=^ke+bijaksana<a>+an_NSD$
4	Yusuf	yusuf	PROPN	NSD	_	3	nmod	_	SpaceAfter=No|Morf=^yusuf<n>_NSD$
5	,	,	PUNCT	Z--	_	7	punct	_	Morf=^,<z>_Z--$
6	lalu	lalu	SCONJ	ASP	_	7	mark	_	Morf=^lalu<a>_ASP$
7	menjadikan	jadi	VERB	VSA	Voice=Act	2	advcl	_	Morf=^meN+jadi<a>+kan_VSA$
8	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	7	iobj	_	Morf=^dia<p>_PS3$
9	Perdana	perdana	PROPN	ASP	_	7	obj	_	Morf=^perdana<a>_ASP$
10	Menteri	menteri	PROPN	NSD	_	9	flat:name	_	SpaceAfter=No|Morf=^menteri<n>_NSD$
11	,	,	PUNCT	Z--	_	12	punct	_	Morf=^,<z>_Z--$
12	orang	orang	NOUN	NSD	Number=Sing	9	appos	_	Morf=^orang<n>_NSD$
13	nomor	nomor	NOUN	NSD	Number=Sing	12	compound	_	Morf=^nomor<n>_NSD$
14	dua	dua	NUM	CC-	NumType=Card	13	nummod	_	Morf=^dua<c>_CC-$
15	seluruh	seluruh	DET	B--	PronType=Tot	16	det	_	Morf=^seluruh<b>_B--$
16	Mesir	mesir	PROPN	NSD	_	12	amod	_	SpaceAfter=No|Morf=^mesir<n>_NSD$
17	.	.	PUNCT	Z--	_	2	punct	_	Morf=^.<z>_Z--$

~~~


