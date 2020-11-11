---
layout: base
title:  'Statistics of nmod:poss in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="br_keb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="br_keb-dep-nmod-gen.html">nmod:gen</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:poss`.

4 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:poss	color:blue
1	En	en	AUX	vpart	Reflex=Yes	3	aux	_	_
2	em	em	X	x	_	1	fixed	_	_
3	walc'het	gwalc’hañ	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
4	on	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	e	e	ADP	pr	_	7	case	_	_
6	r	an	DET	det	_	7	det	_	_
7	sal	sal	NOUN	n	Gender=Fem|Number=Sing	3	obl	_	_
8	dour	dour	NOUN	n	Gender=Masc|Number=Sing	7	nmod:poss	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:poss	color:blue
1	P'	pa	SCONJ	cnjsub	_	4	mark	_	_
2	edon	bezañ	AUX	vbloc	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	cop	_	_
3	war	war	ADP	pr	_	4	case	_	_
4	bont	pont	NOUN	n	Gender=Masc|Number=Sing	0	root	_	_
5	an	an	DET	det	_	6	det	_	_
6	Naoned	Naoned	PROPN	np	Number=Sing	4	nmod:poss	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	4	punct	_	_
8	an	an	DET	det	_	9	det	_	_
9	deiz	deiz	NOUN	n	Gender=Masc|Number=Sing	4	obl	_	_
10	all	all	ADJ	adj	_	9	amod	_	_
11	o	o	AUX	vpart	_	12	aux	_	_
12	kanañ	kanañ	VERB	vblex	VerbForm=Inf	4	advcl	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	4	punct	_	_

~~~


