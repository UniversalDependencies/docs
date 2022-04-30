---
layout: base
title:  'Statistics of case in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="id_gsd-dep-case-adv.html">case:adv</a></tt>.

11119 nodes (9%) are attached to their parents as `case`.

10910 instances of `case` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22529004406871.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (7372; 66% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (2873; 26% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (322; 3% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (210; 2% instances), <tt><a href="id_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (191; 2% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (100; 1% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (25; 0% instances), <tt><a href="id_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (15; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="id_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Bagaimana	bagaimana	ADV	W--	PronType=Int	8	advmod	_	MorphInd=^bagaimana<w>_W--$
2	dengan	dengan	ADP	R--	_	3	case	_	MorphInd=^dengan<r>_R--$
3	Bu	bu	PROPN	X--	_	8	obl	_	MorphInd=^bu<x>_X--$
4	Acih	acih	PROPN	X--	_	3	flat:name	_	MorphInd=^acih<x>_X--$
5	yang	yang	PRON	S--	PronType=Rel	7	nsubj	_	MorphInd=^yang<s>_S--$
6	juga	juga	ADV	D--	_	7	advmod	_	MorphInd=^juga<d>_D--$
7	telanjur	telanjur	ADJ	X--	_	3	acl:relcl	_	MorphInd=^telanjur<x>_X--$
8	sayang	sayang	VERB	NSD	_	0	root	_	MorphInd=^sayang<n>_NSD$
9	kepada	kepada	ADP	R--	_	10	case	_	MorphInd=^kepada<r>_R--$
10	Sinar	sinar	PROPN	NSD	_	8	obl	_	SpaceAfter=No|MorphInd=^sinar<n>_NSD$
11	?	?	PUNCT	Z--	_	8	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 case	color:blue
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


