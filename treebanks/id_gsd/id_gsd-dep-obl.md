---
layout: base
title:  'Statistics of obl in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `obl`

This relation is universal.

6346 nodes (5%) are attached to their parents as `obl`.

5142 instances of `obl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92152537031201.

The following 15 pairs of parts of speech are connected with `obl`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (4604; 73% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1569; 25% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (141; 2% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 obl	color:blue
1	Dibawah	dibawah	ADP	VSP	Number=Sing|Voice=Pass	2	case	_	MorphInd=^di+bawah<n>_VSP$
2	Pimpinan	pimpinan	NOUN	NSD	Number=Sing	10	obl	_	MorphInd=^pimpin<v>+an_NSD$
3	beliau	beliau	PRON	PS3	Number=Sing|Person=3|Polite=Form|PronType=Prs	2	det	_	MorphInd=^beliau<p>_PS3$
4	pun	pun	PART	T--	_	2	advmod	_	MorphInd=^pun<t>_T--$
5	SMA	sma	PROPN	NSD	Number=Sing	10	nsubj	_	MorphInd=^sma<n>_NSD$
6	Negeri	negeri	PROPN	NSD	Number=Sing	5	flat	_	MorphInd=^negeri<n>_NSD$
7	3	3	PROPN	CC-	_	8	nummod	_	MorphInd=^3<c>_CC-$
8	Madiun	madiun	PROPN	X--	_	6	flat	_	MorphInd=^madiun<x>_X--$
9	terus	terus	ADV	ASP	Degree=Pos|Number=Sing	10	advmod	_	MorphInd=^terus<a>_ASP$
10	berkembang	berkembang	VERB	VSA	Number=Sing|Voice=Act	0	root	_	SpaceAfter=No|MorphInd=^ber+kembang<v>_VSA$
11	.	.	PUNCT	Z--	_	10	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 obl	color:blue
1	Bagaimana	bagaimana	ADV	W--	PronType=Int	8	advmod	_	MorphInd=^bagaimana<w>_W--$
2	dengan	dengan	ADP	R--	_	3	case	_	MorphInd=^dengan<r>_R--$
3	Bu	bu	PROPN	X--	_	8	obl	_	MorphInd=^bu<x>_X--$
4	Acih	acih	PROPN	X--	_	3	flat	_	MorphInd=^acih<x>_X--$
5	yang	yang	PRON	S--	PronType=Rel	7	nsubj	_	MorphInd=^yang<s>_S--$
6	juga	juga	ADV	D--	_	7	advmod	_	MorphInd=^juga<d>_D--$
7	telanjur	telanjur	ADJ	X--	_	3	amod	_	MorphInd=^telanjur<x>_X--$
8	sayang	sayang	VERB	NSD	Number=Sing	0	root	_	MorphInd=^sayang<n>_NSD$
9	kepada	kepada	ADP	R--	_	10	case	_	MorphInd=^kepada<r>_R--$
10	Sinar	sinar	PROPN	NSD	Number=Sing	8	obl	_	SpaceAfter=No|MorphInd=^sinar<n>_NSD$
11	?	?	PUNCT	Z--	_	8	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Apakah	apa	PRON	W--+T--	PronType=Int	0	root	_	MorphInd=^apa<w>_W--+kah<t>_T--$
2	yang	yang	PRON	S--	PronType=Rel	4	obj	_	MorphInd=^yang<s>_S--$
3	engkau	engkau	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	4	nsubj	_	MorphInd=^engkau<p>_PS2$
4	serukan	serukan	VERB	VSA	Number=Sing|Voice=Act	1	acl	_	MorphInd=^seru<a>+kan_VSA$
5	kepada	kepada	ADP	R--	_	6	case	_	MorphInd=^kepada<r>_R--$
6	kami	kami	PRON	PP1	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	4	obl	_	SpaceAfter=No|MorphInd=^kami<p>_PP1$
7	?	?	PUNCT	Z--	_	1	punct	_	MorphInd=^?<z>_Z--$

~~~


