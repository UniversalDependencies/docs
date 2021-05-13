---
layout: base
title:  'Statistics of iobj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `iobj`

This relation is universal.

22 nodes (0%) are attached to their parents as `iobj`.

21 instances of `iobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.90909090909091.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (7; 32% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (7; 32% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (3; 14% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (1; 5% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (1; 5% instances).


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
8	dibeli	dibeli	VERB	VSP	Number=Sing|Voice=Pass	4	acl	_	MorphInd=^di+beli<v>_VSP$
9	Greenpeace	greenpeace	PROPN	X--	_	8	obj	_	MorphInd=^greenpeace<x>_X--$
10	empat	empat	NUM	CC-	NumType=Card	11	nummod	_	MorphInd=^empat<c>_CC-$
11	tahun	tahun	NOUN	NSD	Number=Sing	8	iobj	_	MorphInd=^tahun<n>_NSD$
12	setelah	setelah	ADP	R--	_	13	case	_	MorphInd=^setelah<r>_R--$
13	kapal	kapal	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^kapal<n>_NSD$
14	pertama	pertama	NUM	CO-	NumType=Card	13	nummod	_	MorphInd=^pertama<c>_CO-$
15	tenggelam	tenggelam	VERB	ASP	Degree=Pos|Number=Sing	13	advmod	_	SpaceAfter=No|MorphInd=^tenggelam<a>_ASP$
16	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Bandar	bandar	NOUN	NSD	Number=Sing	4	nsubj:pass	_	MorphInd=^bandar<n>_NSD$
2	udara	udara	NOUN	NSD	Number=Sing	1	compound	_	MorphInd=^udara<n>_NSD$
3	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
4	diberi	diberi	VERB	VSP	Number=Sing|Voice=Pass	0	root	_	MorphInd=^di+beri<v>_VSP$
5	nama	nama	NOUN	NSD	Number=Sing	4	obj	_	MorphInd=^nama<n>_NSD$
6	Venustiano	venustiano	PROPN	X--	_	4	iobj	_	MorphInd=^venustiano<x>_X--$
7	Carranza	carranza	PROPN	X--	_	6	flat	_	SpaceAfter=No|MorphInd=^carranza<x>_X--$
8	,	,	PUNCT	Z--	_	10	punct	_	MorphInd=^,<z>_Z--$
9	seorang	seorang	DET	B--	PronType=Ind	10	det	_	MorphInd=^seorang<b>_B--$
10	presiden	presiden	NOUN	NSD	Number=Sing	6	appos	_	MorphInd=^presiden<n>_NSD$
11	Meksiko	meksiko	PROPN	NSD	Number=Sing	10	flat	_	SpaceAfter=No|MorphInd=^meksiko<n>_NSD$
12	.	.	PUNCT	Z--	_	4	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	Maukah	mau	ADV	D--+T--	_	4	advmod	_	MorphInd=^mau<d>_D--+kah<t>_T--$
2	kalian	kalian	PRON	PP2	Number=Plur|Person=2|PronType=Prs	4	iobj	_	MorphInd=^kalian<p>_PP2$
3	aku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	4	nsubj	_	MorphInd=^aku<p>_PS1$
4	ceritakan	ceritakan	VERB	VSA	Number=Sing|Voice=Act	0	root	_	MorphInd=^cerita<n>+kan_VSA$
5	kisah	kisah	NOUN	NSD	Number=Sing	4	obj	_	MorphInd=^kisah<n>_NSD$
6	tentang	tentang	ADP	VSA	Number=Sing|Voice=Act	7	case	_	MorphInd=^tentang<v>_VSA$
7	masuk	masuk	VERB	VSA	Number=Sing|Voice=Act	4	xcomp	_	MorphInd=^masuk<v>_VSA$
8	Islamnya	islam	NOUN	NSD+PS3	Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	MorphInd=^islam<n>_NSD+dia<p>_PS3$
9	Abu	abu	PROPN	NSD	Number=Sing	7	nsubj	_	MorphInd=^abu<n>_NSD$
10	Dzar	dzar	PROPN	X--	_	9	flat	_	SpaceAfter=No|MorphInd=^dzar<x>_X--$
11	?	?	PUNCT	Z--	_	4	punct	_	MorphInd=^?<z>_Z--$

~~~


