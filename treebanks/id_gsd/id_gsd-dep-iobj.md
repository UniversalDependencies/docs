---
layout: base
title:  'Statistics of iobj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `iobj`

This relation is universal.

20 nodes (0%) are attached to their parents as `iobj`.

20 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (8; 40% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (6; 30% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (2; 10% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (1; 5% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Bandar	bandar	NOUN	NSD	Number=Sing	4	nsubj:pass	_	MorphInd=^bandar<n>_NSD$
2	udara	udara	NOUN	NSD	Number=Sing	1	compound	_	MorphInd=^udara<n>_NSD$
3	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
4	diberi	beri	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+beri<v>_VSP$
5	nama	nama	NOUN	NSD	Number=Sing	4	obj	_	MorphInd=^nama<n>_NSD$
6	Venustiano	venustiano	PROPN	X--	_	4	iobj	_	MorphInd=^venustiano<x>_X--$
7	Carranza	carranza	PROPN	X--	_	6	flat:name	_	SpaceAfter=No|MorphInd=^carranza<x>_X--$
8	,	,	PUNCT	Z--	_	10	punct	_	MorphInd=^,<z>_Z--$
9	seorang	orang	DET	B--	Definite=Ind|PronType=Art	10	det	_	MorphInd=^seorang<b>_B--$
10	presiden	presiden	NOUN	NSD	Number=Sing	6	appos	_	MorphInd=^presiden<n>_NSD$
11	Meksiko	meksiko	PROPN	NSD	_	10	nmod	_	SpaceAfter=No|MorphInd=^meksiko<n>_NSD$
12	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 iobj	color:blue
1	Kapal	kapal	NOUN	NSD	Number=Sing	4	nsubj	_	MorphInd=^kapal<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
3	adalah	adalah	AUX	O--	_	4	cop	_	MorphInd=^adalah<o>_O--$
4	kapal	kapal	NOUN	NSD	Number=Sing	0	root	_	MorphInd=^kapal<n>_NSD$
5	pukat	pukat	NOUN	X--	_	4	compound	_	MorphInd=^pukat<x>_X--$
6	ikan	ikan	NOUN	NSD	Number=Sing	5	compound	_	MorphInd=^ikan<n>_NSD$
7	yang	yang	PRON	S--	PronType=Rel	8	obj	_	MorphInd=^yang<s>_S--$
8	dibeli	beli	VERB	VSP	Mood=Ind|Voice=Pass	4	acl:relcl	_	MorphInd=^di+beli<v>_VSP$
9	Greenpeace	greenpeace	PROPN	X--	_	8	obj	_	MorphInd=^greenpeace<x>_X--$
10	empat	empat	NUM	CC-	NumType=Card	11	nummod	_	MorphInd=^empat<c>_CC-$
11	tahun	tahun	NOUN	NSD	Number=Sing	8	iobj	_	MorphInd=^tahun<n>_NSD$
12	setelah	setelah	ADP	R--	_	13	case	_	MorphInd=^setelah<r>_R--$
13	kapal	kapal	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^kapal<n>_NSD$
14	pertama	pertama	ADJ	CO-	NumType=Ord	13	amod	_	MorphInd=^pertama<c>_CO-$
15	tenggelam	tenggelam	VERB	ASP	_	13	acl	_	SpaceAfter=No|MorphInd=^tenggelam<a>_ASP$
16	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 iobj	color:blue
1	Kota	kota	NOUN	NSD	Number=Sing	3	nsubj	_	MorphInd=^kota<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
3	memiliki	milik	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^meN+milik<v>+i_VSA$
4	kode	kode	NOUN	NSD	Number=Sing	3	obj	_	MorphInd=^kode<n>_NSD$
5	pos	pos	NOUN	VSA	_	4	compound	_	MorphInd=^pos<v>_VSA$
6	38019	38019	NUM	CC-	NumType=Card	3	iobj	_	SpaceAfter=No|MorphInd=^38019<c>_CC-$
7	.	.	PUNCT	Z--	_	3	punct	_	MorphInd=^.<z>_Z--$

~~~


