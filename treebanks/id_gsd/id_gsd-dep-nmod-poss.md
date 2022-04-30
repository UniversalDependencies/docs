---
layout: base
title:  'Statistics of nmod:poss in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_gsd-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_gsd-dep-nmod-tmod.html">nmod:tmod</a></tt>.

1441 nodes (1%) are attached to their parents as `nmod:poss`.

1440 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0735600277585.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1354; 94% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (42; 3% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (34; 2% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	Dibawah	dibawah	ADP	VSP	Typo=Yes	2	case	_	MorphInd=^di+bawah<n>_VSP$
2	Pimpinan	pimpin	NOUN	NSD	Number=Sing	10	obl	_	MorphInd=^pimpin<v>+an_NSD$
3	beliau	beliau	PRON	PS3	Number=Sing|Person=3|Polite=Form|PronType=Prs	2	nmod:poss	_	MorphInd=^beliau<p>_PS3$
4	pun	pun	PART	T--	_	2	advmod:emph	_	MorphInd=^pun<t>_T--$
5	SMA	sma	PROPN	NSD	_	10	nsubj	_	MorphInd=^sma<n>_NSD$
6	Negeri	negeri	PROPN	NSD	_	5	flat:name	_	MorphInd=^negeri<n>_NSD$
7	3	3	NUM	CC-	NumType=Card	8	nummod	_	MorphInd=^3<c>_CC-$
8	Madiun	madiun	PROPN	X--	_	6	flat:name	_	MorphInd=^madiun<x>_X--$
9	terus	terus	ADV	ASP	_	10	advmod	_	MorphInd=^terus<a>_ASP$
10	berkembang	kembang	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No|MorphInd=^ber+kembang<v>_VSA$
11	.	.	PUNCT	Z--	_	10	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:poss	color:blue
1	Setelah	setelah	ADP	R--	_	4	case	_	MorphInd=^setelah<r>_R--$
2	itu	itu	DET	B--	PronType=Dem	4	det	_	MorphInd=^itu<b>_B--$
3	Rianti	rianti	PROPN	X--	_	4	nsubj	_	MorphInd=^rianti<x>_X--$
4	bermain	main	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^ber+main<v>_VSA$
5	dalam	dalam	ADP	ASP	_	6	case	_	MorphInd=^dalam<a>_ASP$
6	Ini	ini	PRON	B--	PronType=Dem	4	obl	_	MorphInd=^ini<b>_B--$
7	kah	kah	PART	T--	_	6	advmod:emph	_	MorphInd=^kah<t>_T--$
8	Rasa	rasa	PROPN	NSD	_	6	nmod	_	MorphInd=^rasa<n>_NSD$
9	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	8	nmod:poss	_	MorphInd=^dia<p>_PS3$
10	Cinta	cinta	PROPN	NSD	_	8	flat:name	_	SpaceAfter=No|MorphInd=^cinta<n>_NSD$
11	?	?	PUNCT	Z--	_	4	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	Penggambaran	gambar	NOUN	NSD	Number=Sing	9	nsubj	_	MorphInd=^peN+gambar<n>+an_NSD$
2	diri	diri	PRON	NSD	PronType=Prs|Reflex=Yes	1	det	_	MorphInd=^diri<n>_NSD$
3	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	MorphInd=^dia<p>_PS3$
4	dalam	dalam	ADP	ASP	_	5	case	_	MorphInd=^dalam<a>_ASP$
5	dunia	dunia	NOUN	NSD	Number=Sing	1	nmod	_	MorphInd=^dunia<n>_NSD$
6	seni	seni	NOUN	NSD	Number=Sing	5	compound	_	MorphInd=^seni<n>_NSD$
7	sangat	sangat	ADV	D--	_	9	advmod	_	MorphInd=^sangat<d>_D--$
8	lah	lah	PART	T--	_	7	advmod:emph	_	MorphInd=^lah<t>_T--$
9	beragam	ragam	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No|MorphInd=^ber+ragam<n>_VSA$
10	.	.	PUNCT	Z--	_	9	punct	_	MorphInd=^.<z>_Z--$

~~~


