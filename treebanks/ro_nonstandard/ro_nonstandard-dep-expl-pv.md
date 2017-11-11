---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>.

395 nodes (2%) are attached to their parents as `expl:pv`.

347 instances of `expl:pv` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19240506329114.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (394; 100% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pv	color:blue
1	Iara	iar	CCONJ	Ccssp	Polarity=Pos	7	cc	_	ref=MATT2.10
2	deaca	dacă	SCONJ	Cscsp	Compound=Yes|Polarity=Pos	3	mark	_	ref=MATT2.10
3	văzură	vedea	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	advcl	_	ref=MATT2.10
4	steaoa	stea	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	obj	_	ref=MATT2.10|SpaceAfter=No
5	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT2.10
6	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	ref=MATT2.10
7	bucurară	bucura	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT2.10
8	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	ref=MATT2.10
9	bucurie	bucurie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	obl	_	ref=MATT2.10
10	mare	mare	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	ref=MATT2.10
11	foarte	foarte	ADV	Rg	_	10	advmod	_	ref=MATT2.10|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	7	punct	_	ref=MATT2.10

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pv	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	7	cc	_	ref=MATT8.2
2	iaca	iaca	INTJ	I	_	7	discourse	_	ref=MATT8.2
3	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	ref=MATT8.2
4	bubos	bubos	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	ref=MATT8.2
5	venind	veni	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	7	advcl	_	ref=MATT8.2
6	să	să	PART	Qs	PartType=Sub	7	expl:pv	_	ref=MATT8.2
7	închină	închina	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT8.2
8	lui	el	PRON	Pp3msd--------s	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	iobj	_	ref=MATT8.2|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	ref=MATT8.2
10	zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	7	advcl	_	ref=MATT8.2|SpaceAfter=No
11	:	:	PUNCT	COLON	_	12	punct	_	ref=MATT8.2
12	Doamne	domn	NOUN	Ncmsvn	Case=Voc|Definite=Ind|Gender=Masc|Number=Sing	20	vocative	_	ref=MATT8.2|SpaceAfter=No
13	,	,	PUNCT	COMMA	_	12	punct	_	ref=MATT8.2
14	de	de	SCONJ	Csssp	Polarity=Pos	16	mark	_	ref=MATT8.2
15	vei	vrea	AUX	Vaip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres	16	aux	_	ref=MATT8.2
16	vrea	vrea	VERB	Vmn	VerbForm=Inf	20	advcl	_	ref=MATT8.2|SpaceAfter=No
17	,	,	PUNCT	COMMA	_	16	punct	_	ref=MATT8.2
18	poți	putea	AUX	Vaip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres	20	aux	_	ref=MATT8.2
19	mă	eu	PRON	Pp1-pa--------w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	20	obj	_	ref=MATT8.2
20	curăți	curăți	VERB	Vmn	VerbForm=Inf	10	parataxis	_	ref=MATT8.2|SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	7	punct	_	ref=MATT8.2

~~~


