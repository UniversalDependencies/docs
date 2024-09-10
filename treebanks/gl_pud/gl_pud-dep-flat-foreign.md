---
layout: base
title:  'Statistics of flat:foreign in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="gl_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="gl_pud-dep-flat-name.html">flat:name</a></tt>.

58 nodes (0%) are attached to their parents as `flat:foreign`.

58 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36206896551724.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (56; 97% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-ADP.html">ADP</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 flat:foreign	color:blue
1	Winstone	winstone	PROPN	NP00000	_	2	nsubj	_	_
2	coñeceu	coñecer	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	5	det	_	_
5	muller	muller	NOUN	NCFS000	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
6	,	,	PUNCT	Fc	_	7	punct	_	_
7	Elaine	elaine	PROPN	NP00000	_	5	appos	_	SpaceAfter=No
8	,	,	PUNCT	Fc	_	7	punct	_	_
9	en	en	ADP	SP	AdpType=Prep	11	case	_	_
10	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	rodaxe	rodaxe	NOUN	NCFS000	Gender=Fem|Number=Sing	2	obl	_	_
12	de	de	ADP	SP	AdpType=Prep	13	case	_	_
13	That	that	PROPN	NP00000	_	11	nmod	_	_
14	Summer	summer	PROPN	NP00000	_	13	flat:foreign	_	_
15	en	en	ADP	SP	AdpType=Prep	16	case	_	_
16	1979	1979	NUM	Z	NumType=Card	2	obl	_	SpaceAfter=No
17	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 flat:foreign	color:blue
1	Martin	martin	PROPN	NP00000	_	5	nsubj	_	_
2	aínda	aínda	ADV	RG	_	5	advmod	_	_
3	ten	ter	AUX	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	_
4	que	que	SCONJ	CS	_	5	mark	_	_
5	terminar	terminar	VERB	VMN0000	VerbForm=Inf	0	root	_	_
6	dous	2	NUM	Z	NumType=Card	5	obj	_	_
7	de	de	ADP	SP	AdpType=Prep	9	case	_	_
8	os	o	DET	DA0MP0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	libros	libro	NOUN	NCMP000	Gender=Masc|Number=Plur	6	nmod	_	_
10	restantes	restante	ADJ	AQ0CP	_	9	amod	_	_
11	de	de	ADP	SP	AdpType=Prep	15	case	_	_
12	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
13	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	15	det	_	_
14	aclamada	aclamar	VERB	VMP00SF	Gender=Fem|Number=Sing|VerbForm=Part	15	amod	_	_
15	serie	serie	NOUN	NCFS000	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
16	,	,	PUNCT	Fc	_	18	punct	_	_
17	actualmente	actual	ADV	RG	_	18	advmod	_	_
18	presentados	presentar	VERB	VMP00PM	Gender=Masc|Number=Plur|VerbForm=Part	9	acl	_	_
19	como	como	ADP	SP	AdpType=Prep	21	case	_	_
20	"	"	PUNCT	Fe	_	21	punct	_	SpaceAfter=No
21	The	the	PROPN	NP00000	_	18	obl	_	_
22	Winds	winds	PROPN	NP00000	_	21	flat:foreign	_	_
23	of	of	ADP	NP00000	_	21	flat:foreign	_	_
24	Winter	winter	PROPN	NP00000	_	21	flat:foreign	_	SpaceAfter=No
25	"	"	PUNCT	Fe	_	24	punct	_	_
26	e	e	CCONJ	CC	_	28	cc	_	_
27	"	"	PUNCT	Fe	_	28	punct	_	SpaceAfter=No
28	A	a	PROPN	NP00000	_	21	conj	_	_
29	Dream	dream	PROPN	NP00000	_	28	flat:foreign	_	_
30	of	of	ADP	NP00000	_	28	flat:foreign	_	_
31	Spring	spring	PROPN	NP00000	_	28	flat:foreign	_	SpaceAfter=No
32	"	"	PUNCT	Fe	_	28	punct	_	SpaceAfter=No
33	.	.	PUNCT	Fp	_	5	punct	_	_

~~~


