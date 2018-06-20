---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-ccomp.html">ccomp</a></tt>.

33 nodes (0%) are attached to their parents as `ccomp:pmod`.

28 instances of `ccomp:pmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.78787878787879.

The following 5 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (27; 82% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:pmod	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MARC15.44
2	Pilat	Pilat	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MARC15.44
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	4	expl:pv	_	ref=MARC15.44
4	miră	mira	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MARC15.44
5	unde	unde	ADV	Rw	PronType=Int,Rel	7	advmod	_	ref=MARC15.44
6	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	aux	_	ref=MARC15.44
7	murit	muri	VERB	Vmp	VerbForm=Part	4	ccomp:pmod	_	ref=MARC15.44
8	așa	așa	ADV	Rg	_	9	advmod	_	ref=MARC15.44
9	curînd	cura	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	7	advcl:tcl	_	ref=MARC15.44|SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MARC15.44

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 ccomp:pmod	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT8.8
2	răspunse	răspunde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT8.8
3	sutașul	sutaș	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT8.8|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT8.8
5	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	appos	_	ref=MATT8.8|SpaceAfter=No
6	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT8.8
7	Doamne	domn	NOUN	Ncmsvn	Case=Voc|Definite=Ind|Gender=Masc|Number=Sing	11	vocative	_	ref=MATT8.8|SpaceAfter=No
8	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT8.8
9	nu	nu	ADV	Qz	Polarity=Neg	11	advmod	_	ref=MATT8.8
10	sînt	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	ref=MATT8.8
11	destoinic	destoinic	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	parataxis	_	ref=MATT8.8
12	să	să	PART	Qs	PartType=Sub	13	mark	_	ref=MATT8.8
13	întri	intra	VERB	Vmsp2s	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	ccomp:pmod	_	ref=MATT8.8
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	ref=MATT8.8
15	casa	casă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	ref=MATT8.8
16	mea	meu	DET	Ds1fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	15	det	_	ref=MATT8.8|SpaceAfter=No
17	,	,	PUNCT	COMMA	_	20	punct	_	ref=MATT8.8
18	ce	ci	CCONJ	Ccssp	Polarity=Pos	20	cc	_	ref=MATT8.8
19	numai	numai	ADV	Rg	_	20	advmod	_	ref=MATT8.8
20	zi	zice	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	11	conj	_	ref=MATT8.8
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	ref=MATT8.8
22	cuvîntul	cuvânt	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	ref=MATT8.8
23	și	și	CCONJ	Ccssp	Polarity=Pos	26	cc	_	ref=MATT8.8
24	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	26	expl:pv	_	ref=MATT8.8
25	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	26	aux	_	ref=MATT8.8
26	vindeca	vindeca	VERB	Vmn	VerbForm=Inf	11	conj	_	ref=MATT8.8
27	feciorul	fecior	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	26	nsubj	_	ref=MATT8.8
28	mieu	meu	DET	Ds3ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	27	det	_	ref=MATT8.8|SpaceAfter=No
29	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT8.8

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 ccomp:pmod	color:blue
1	Derept	drept	ADP	Spsa	AdpType=Prep|Case=Acc	3	obl	_	ref=LUCA11.35
2	aceaia	acela	DET	Dd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	1	case	_	ref=LUCA11.35
3	ia	lua	VERB	Vmm-2s--z	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	ref=LUCA11.35
4	aminte	aminte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obj	_	ref=LUCA11.35
5	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	15	mark	_	ref=LUCA11.35
6	lumina	lumină	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	nsubj	_	ref=LUCA11.35
7	carea	care	PRON	Pw3fsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Int,Rel	8	nsubj	_	ref=LUCA11.35
8	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	ref=LUCA11.35
9	întru	întru	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	ref=LUCA11.35
10	tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	8	obl	_	ref=LUCA11.35|SpaceAfter=No
11	,	,	PUNCT	COMMA	_	6	punct	_	ref=LUCA11.35
12	să	să	PART	Qs	PartType=Sub	14	mark	_	ref=LUCA11.35
13	nu	nu	ADV	Qz	Polarity=Neg	14	advmod	_	ref=LUCA11.35
14	fie	fi	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	ref=LUCA11.35
15	întunearec	întuneric	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	ccomp:pmod	_	ref=LUCA11.35|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	3	punct	_	ref=LUCA11.35

~~~


