---
layout: base
title:  'Statistics of xcomp in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `xcomp`

This relation is universal.

263 nodes (1%) are attached to their parents as `xcomp`.

258 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85551330798479.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (208; 79% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (28; 11% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Ela	el	PRON	PP3FS000	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	tamén	tamén	ADV	RG	_	4	advmod	_	_
3	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
4	acusada	acusado	VERB	VMP00SF	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	SP	AdpType=Prep	6	case	_	_
6	tentar	tentar	VERB	VMN0000	VerbForm=Inf	4	xcomp	_	_
7	matar	matar	VERB	VMN0000	VerbForm=Inf	6	xcomp	_	_
8	a	a	ADP	SP	AdpType=Prep	11	case	_	_
9	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	11	det	_	_
11	filla	fillo	NOUN	NCFS000	Gender=Fem|Number=Sing	7	obj	_	_
12	de	de	ADP	SP	AdpType=Prep	14	case	_	_
13	dous	2	NUM	Z	NumType=Card	14	nummod	_	_
14	anos	ano	NOUN	NCMP000	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Xoga	xogar	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	forte	forte	ADJ	AQ0CS	_	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	Fc	_	6	punct	_	_
4	pero	pero	CCONJ	CC	_	6	cc	_	_
5	tamén	tamén	ADV	RG	_	6	advmod	_	_
6	ten	ter	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	conj	_	_
7	unhas	un	DET	DI0FP0	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	mans	man	NOUN	NCFP000	Gender=Fem|Number=Plur	6	obj	_	_
9	delicadas	delicado	ADJ	AQ0FP	_	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	Fp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Ramsés	Ramsés	PROPN	NP00000	_	11	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Fc	_	4	punct	_	_
3	loxisticamente	loxístico	ADV	RG	_	4	advmod	_	_
4	incapaz	incapaz	ADJ	AQ0CS	_	1	amod	_	_
5	de	de	ADP	SP	AdpType=Prep	6	case	_	_
6	manter	manter	VERB	VMN0000	VerbForm=Inf	4	xcomp	_	_
7	un	un	DET	DI0MS0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	longo	longo	ADJ	AQ0MS	_	9	amod	_	_
9	cerco	cerco	NOUN	NCMS000	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
10	,	,	PUNCT	Fc	_	4	punct	_	_
11	regresou	regresar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
12	a	a	ADP	SP	AdpType=Prep	13	case	_	_
13	Exipto	exipto	PROPN	NP00000	_	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	Fp	_	11	punct	_	_

~~~


