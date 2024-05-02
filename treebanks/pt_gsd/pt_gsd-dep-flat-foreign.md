---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_gsd-dep-flat-name.html">flat:name</a></tt>.

9 nodes (0%) are attached to their parents as `flat:foreign`.

9 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55555555555556.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (8; 89% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Mantemos	manter	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	17	parataxis	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	meta	meta	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	de	de	ADP	_	_	5	case	_	_
5	produção	produção	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
6	e	e	CCONJ	_	_	8	cc	_	_
7	de	de	ADP	_	_	8	case	_	_
8	market	market	X	_	ExtPos=NOUN|Gender=Masc|Number=Sing	5	conj	_	_
9	share	share	X	_	_	8	flat:foreign	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	mas	mas	CCONJ	_	_	12	cc	_	_
12	tem	ter	VERB	_	ExtPos=AUX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
13	de	de	SCONJ	_	_	14	mark	_	_
14	haver	haver	VERB	_	VerbForm=Inf	12	xcomp	_	_
15	projeto	projeto	NOUN	_	Gender=Masc|Number=Sing	14	obj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	1	punct	_	_
17	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Brasil	Brasil	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	ainda	ainda	ADV	_	_	4	advmod	_	_
4	conseguiu	conseguir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	salvar	salvar	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	três	três	NUM	_	NumType=Card	7	nummod	_	_
7	set	set	NUM	_	NumType=Card	5	obj	_	_
8	points	points	NOUN	_	Gender=Masc|Number=Plur	7	flat:foreign	_	_
9	antes	antes	ADV	_	ExtPos=SCONJ	14	mark	_	_
10	de	de	ADP	_	_	9	fixed	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	seleção	seleção	NOUN	_	Gender=Fem|Number=Sing	14	nsubj	_	_
13	cubana	cubano	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
14	fechar	fechar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	5	advcl	_	_
15	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	parcial	parcial	NOUN	_	Gender=Fem|Number=Sing	14	obj	_	_
17	em	em	ADP	_	_	18	case	_	_
18	25	25	NUM	_	NumType=Card	14	obl	_	_
19	/	/	PUNCT	_	_	20	punct	_	_
20	19	19	NUM	_	NumType=Card	18	conj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


