---
layout: base
title:  'Statistics of advcl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `advcl`

This relation is universal.

60 nodes (2%) are attached to their parents as `advcl`.

39 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.86666666666667.

The following 11 pairs of parts of speech are connected with `advcl`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (37; 62% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (11; 18% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 advcl	color:blue
1	Ní	ní	PART	_	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	bheadh	bí	VERB	_	Form=Len|Mood=Cnd|Polarity=Neg	0	root	_	_
3	acht	ach	ADV	_	_	2	advmod	_	_
4	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	5	nmod:poss	_	_
5	leath	leath	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
6	agam	ag	ADP	_	Number=Sing|Person=1	2	xcomp:pred	_	_
7	marach	murach	SCONJ	_	_	9	mark	_	_
8	gur	gur	PART	_	PartType=Vb|Tense=Past	9	mark:prt	_	_
9	chailleas	caill	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	2	advcl	_	_
10	lúth	lúth	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
11	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	ghéag	géag	NOUN	_	Case=Gen|Form=Len|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	“	“	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Cinnte	cinnte	ADJ	_	VerbForm=Part	5	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	”	”	PUNCT	_	_	2	punct	_	_
5	arsa	arsa	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
6	'n	an	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	fear	fear	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	ag	ag	ADP	_	_	10	case	_	_
10	sáitheadh	sá	NOUN	_	VerbForm=Vnoun	5	advcl	_	_
11	na	na	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	tuaighe	tua	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	obj	_	_
13	isteach	isteach	ADV	_	_	10	advmod	_	_
14	eadar	idir	ADP	_	_	15	case	_	_
15	mhaidí	maide	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Plur	10	obl	_	_
16	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	bhocsa	bosca	NOUN	_	Case=Gen|Form=Len|Gender=Masc|Number=Sing	15	nmod	_	_
18	le	le	ADP	_	_	20	case	_	_
19	n-a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	20	nmod:poss	_	_
20	scathadh	scoitheadh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 advcl	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	fhreaguir	freagair	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	seision	seisean	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Emp	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	agus	agus	CCONJ	_	_	6	cc	_	_
6	adubhairt	abair	VERB	_	Mood=Ind|Tense=Past	2	conj	_	_
7	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	9	punct	_	_
9	cia	cé	PRON	_	PronType=Int	6	ccomp	_	_
10	hé	é	PRON	_	Form=HPref|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	a	a	PART	_	PartType=Voc	13	case:voc	_	_
13	thighearna	tiarna	NOUN	_	Case=Voc|Form=Len|Gender=Masc|Number=Sing	9	vocative	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	dochum	chun	ADP	_	_	17	case	_	_
16	gu	go	PART	_	PartType=Cmpl	17	mark:prt	_	_
17	gcreidfinn	creid	VERB	_	Form=Ecl|Mood=Cnd|Number=Sing|Person=1	9	advcl	_	_
18	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	17	obl	_	SpaceAfter=No
19	?	?	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


