---
layout: base
title:  'Statistics of case:adv in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `case:adv`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-case.html">case</a></tt>.

120 nodes (0%) are attached to their parents as `case:adv`.

98 instances of `case:adv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25833333333333.

The following 6 pairs of parts of speech are connected with `case:adv`: <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (66; 55% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (43; 36% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (7; 6% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case:adv	color:blue
1	Asal	asal	NOUN	NSD	Number=Sing	8	nsubj:pass	_	MorphInd=^asal<n>_NSD$
2	-	-	PUNCT	Z--	_	3	punct	_	MorphInd=^-<z>_Z--$
3	usul	usul	NOUN	VSA	_	1	nmod	_	MorphInd=^usul<v>_VSA$
4	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	3	nmod:poss	_	MorphInd=^dia<p>_PS3$
5	tari	tari	NOUN	NSD	Number=Sing	1	nmod	_	MorphInd=^tari<n>_NSD$
6	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
7	tidak	tidak	PART	G--	Polarity=Neg	8	advmod	_	MorphInd=^tidak<g>_G--$
8	diketahui	ketahui	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+ketahui<v>_VSP$
9	secara	secara	ADP	R--	_	10	case:adv	_	MorphInd=^secara<r>_R--$
10	jelas	jelas	ADJ	ASP	_	8	advmod	_	SpaceAfter=No|MorphInd=^jelas<a>_ASP$
11	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case:adv	color:blue
1	Sebaliknya	sebaliknya	SCONJ	S--	_	6	mark	_	SpaceAfter=No|MorphInd=^sebaliknya<s>_S--$
2	,	,	PUNCT	Z--	_	1	punct	_	MorphInd=^,<z>_Z--$
3	polisakarida	polisakarida	NOUN	X--	_	6	nsubj:pass	_	MorphInd=^polisakarida<x>_X--$
4	cadangan	cadang	NOUN	NSD	Number=Sing	3	compound	_	MorphInd=^cadang<v>+an_NSD$
5	mudah	mudah	ADJ	ASP	_	6	amod	_	MorphInd=^mudah<a>_ASP$
6	diurai	urai	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+urai<v>_VSP$
7	secara	secara	ADP	R--	_	6	case:adv	_	MorphInd=^secara<r>_R--$
8	biologis	biologis	ADJ	NSD	_	6	amod	_	SpaceAfter=No|MorphInd=^biologis<n>_NSD$
9	.	.	PUNCT	Z--	_	6	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case:adv	color:blue
1	Data	data	NOUN	NSD	Number=Sing	3	nsubj:pass	_	MorphInd=^data<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	MorphInd=^ini<b>_B--$
3	didapatkan	dapat	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+dapat<v>+kan_VSP$
4	dari	dari	ADP	R--	_	5	case	_	MorphInd=^dari<r>_R--$
5	hasil	hasil	NOUN	NSD	Number=Sing	3	obl	_	MorphInd=^hasil<n>_NSD$
6	sensus	sensus	NOUN	X--	_	5	compound	_	MorphInd=^sensus<x>_X--$
7	yang	yang	PRON	S--	PronType=Rel	8	nsubj	_	MorphInd=^yang<s>_S--$
8	dilakukan	laku	VERB	VSP	Mood=Ind|Voice=Pass	5	acl:relcl	_	MorphInd=^di+laku<a>+kan_VSP$
9	secara	secara	ADP	R--	_	10	case:adv	_	MorphInd=^secara<r>_R--$
10	teratur	teratur	ADV	ASP	_	8	xcomp	_	MorphInd=^teratur<a>_ASP$
11	dan	dan	CCONJ	H--	_	12	cc	_	MorphInd=^dan<h>_H--$
12	transparan	transparan	ADJ	ASP	_	10	conj	_	SpaceAfter=No|MorphInd=^transparan<a>_ASP$
13	.	.	PUNCT	Z--	_	3	punct	_	MorphInd=^.<z>_Z--$

~~~


