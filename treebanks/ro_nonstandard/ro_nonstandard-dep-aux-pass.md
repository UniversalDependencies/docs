---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-aux.html">aux</a></tt>.

63 nodes (0%) are attached to their parents as `aux:pass`.

55 instances of `aux:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (57; 90% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (6; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:pass	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT4.12
2	cum	cum	ADV	Rw	PronType=Int,Rel	3	advmod	_	ref=MATT4.12
3	auzi	auzi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	ref=MATT4.12
4	Iisus	Iisus	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	ref=MATT4.12
5	că	că	SCONJ	Csssp	Polarity=Pos	8	ccomp	_	ref=MATT4.12
6	iaste	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	ref=MATT4.12
7	Ioan	Ioan	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nsubj:pass	_	ref=MATT4.12
8	prins	prinde	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	3	ccomp	_	ref=MATT4.12|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT4.12
10	mearse	merge	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT4.12
11	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT4.12
12	Galilea	Galileea	PROPN	Npfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	10	obl	_	ref=MATT4.12|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	10	punct	_	ref=MATT4.12

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	Atuncea	atunci	ADV	Rg	_	3	advmod:tmod	_	ref=MATT2.17
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	ref=MATT2.17
3	împlu	umple	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT2.17
4	carea	care	PRON	Pw3fsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Int,Rel	6	nsubj:pass	_	ref=MATT2.17
5	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	ref=MATT2.17
6	zisă	zice	VERB	Vmp--sf-p--r	Case=Acc,Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part	3	nsubj	_	ref=MATT2.17
7	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT2.17
8	Eremia	Ieremia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	ref=MATT2.17
9	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	appos	_	ref=MATT2.17
10	zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	6	advcl	_	ref=MATT2.17|SpaceAfter=No
11	:	:	PUNCT	COLON	_	10	punct	_	ref=MATT2.17

~~~


