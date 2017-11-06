---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-ccomp.html">ccomp</a></tt>.

9 nodes (0%) are attached to their parents as `ccomp:pmod`.

8 instances of `ccomp:pmod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55555555555556.

The following 2 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 ccomp:pmod	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=MATT 8.22
2	Iisus	Iisus	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	ref=MATT 8.22
3	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 8.22
4	lui	el	PRON	Pp3msd--------s 	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	3	iobj	_	ref=MATT 8.22
5	:	:	PUNCT	COLON	_	6	punct	_	ref=MATT 8.22
6	Vino	veni	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	3	parataxis	_	ref=MATT 8.22
7	după	după	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	8	case	_	ref=MATT 8.22
8	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	6	obl	_	ref=MATT 8.22
9	şi	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT 8.22
10	lasă	lăsa	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	6	conj	_	ref=MATT 8.22
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT 8.22
12	morţi	mort	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	10	nmod:pmod	_	ref=MATT 8.22
13	să	să	PART	Qs	PartType=Sub	15	mark	_	ref=MATT 8.22
14	-i	el	PRON	Pp3mpa--------w 	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	15	obj	_	ref=MATT 8.22
15	îngroape	îngropa	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp:pmod	_	ref=MATT 8.22
16	morţii	mort	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	15	nsubj	_	ref=MATT 8.22
17	lor	el	PRON	Pp3-po	Case=Dat, Gen|Number=Plur|Person=3|PronType=Prs	16	nmod	_	ref=MATT 8.22
18	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 8.22

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 ccomp:pmod	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT 8.8
2	răspunse	răspunde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 8.8
3	sutaşul	sutaș	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT 8.8
4	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT 8.8
5	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	appos	_	ref=MATT 8.8
6	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT 8.8
7	Doamne	domn	NOUN	Ncmsvn	Case=Voc|Definite=Ind|Gender=Masc|Number=Sing	11	vocative	_	ref=MATT 8.8
8	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT 8.8
9	nu	nu	ADV	Qz	Polarity=Neg	11	advmod	_	ref=MATT 8.8
10	sînt	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	ref=MATT 8.8
11	destoinic	destoinic	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	parataxis	_	ref=MATT 8.8
12	să	să	PART	Qs	PartType=Sub	13	mark	_	ref=MATT 8.8
13	întri	intra	VERB	Vmsp2s	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	ccomp:pmod	_	ref=MATT 8.8
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	ref=MATT 8.8
15	casa	casă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	ref=MATT 8.8
16	mea	meu	DET	Ds1fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|PronType=Poss	15	det	_	ref=MATT 8.8
17	,	,	PUNCT	COMMA	_	20	punct	_	ref=MATT 8.8
18	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		20	cc	_
19	numai	numai	ADV	Rg	_	20	advmod	_	ref=MATT 8.8
20	zi	zice	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	11	conj	_	ref=MATT 8.8
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	ref=MATT 8.8
22	cuvîntul	cuvânt	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	ref=MATT 8.8
23	şi	și	CCONJ	Ccssp	Polarity=Pos	26	cc	_	ref=MATT 8.8
24	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	26	expl:pv	_	ref=MATT 8.8
25	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	26	aux	_	ref=MATT 8.8
26	vindeca	vindeca	VERB	Vmn	Mood=Inf|VerbForm=Fin	11	conj	_	ref=MATT 8.8
27	feciorul	fecior	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	26	nsubj	_	ref=MATT 8.8
28	mieu	meu	DET	Ds3ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Poss	27	det	_	ref=MATT 8.8
29	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 8.8

~~~


