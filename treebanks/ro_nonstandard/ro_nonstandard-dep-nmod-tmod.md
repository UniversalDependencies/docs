---
layout: base
title:  'Statistics of nmod:tmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_nonstandard-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ro_nonstandard-dep-nmod-pmod.html">nmod:pmod</a></tt>.

80 nodes (0%) are attached to their parents as `nmod:tmod`.

57 instances of `nmod:tmod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 9 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (57; 71% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (4; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 nmod:tmod	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=MATT9.22
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	ref=MATT9.22
3	vindecă	vindeca	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT9.22
4	muiarea	muiere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	ref=MATT9.22
5	într-	întru	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	7	case	_	ref=MATT9.22
6	acela	acela	DET	Dd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	det	_	ref=MATT9.22
7	ceas	ceas	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nmod:tmod	_	ref=MATT9.22|SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT9.22

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	Aseară	aseară	ADV	Rg	_	13	advmod:tmod	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	vremea	vreme	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod:tmod	_	_
4	cinii	cină	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	Rhyme=ID10,18|SpaceAfter=No|Type=Mono
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	Când	când	ADV	Rw	PronType=Int,Rel	7	advmod:tmod	_	_
7	treceam	trece	VERB	Vmii1p	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	1	advcl:tcl	_	_
8	gardul	gard	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	spinii	spin	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nmod	_	Rhyme=ID4,18|SpaceAfter=No|Type=Mono
11	,	,	PUNCT	COMMA	_	7	punct	_	_
12	M-	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	13	obj	_	SpaceAfter=No
13	amuțai	amuța	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
14	,	,	PUNCT	COMMA	_	15	punct	_	_
15	mândră	mândră	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	vocative	_	SpaceAfter=No
16	,	,	PUNCT	COMMA	_	15	punct	_	_
17	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
18	cânii	câine	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	13	obl	_	Rhyme=ID4,10|SpaceAfter=No|Type=Mono
19	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nmod:tmod	color:blue
1	El	el	PRON	Pp3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	ref=MATT19.4
2	răspunzînd	răspunde	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	4	advcl	_	ref=MATT19.4|SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	ref=MATT19.4
4	zisă	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT19.4
5	lor	el	PRON	Pp3-pd--------s	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Strong	4	nmod	_	ref=MATT19.4|SpaceAfter=No
6	:	:	PUNCT	COLON	_	10	punct	_	ref=MATT19.4
7	Au	au	INTJ	I	_	10	discourse	_	ref=MATT19.4
8	n-	nu	ADV	Qz	Polarity=Neg	10	advmod	_	ref=MATT19.4|SpaceAfter=No
9	ați	avea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	10	aux	_	ref=MATT19.4
10	cetit	citi	VERB	Vmp	VerbForm=Part	4	parataxis	_	ref=MATT19.4
11	că	că	SCONJ	Csssp	Polarity=Pos	14	mark	_	ref=MATT19.4
12	Făcătoriul	făcător	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	14	nsubj	_	ref=MATT19.4
13	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	14	aux	_	ref=MATT19.4
14	făcut	face	VERB	Vmp	VerbForm=Part	10	ccomp	_	ref=MATT19.4
15	dintîi	dintâi	NUM	Mo-s-r	Number=Sing|NumForm=Roman|NumType=Ord	14	nmod:tmod	_	ref=MATT19.4
16	bărbatu	bărbat	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	14	obj	_	ref=MATT19.4
17	și	și	CCONJ	Ccssp	Polarity=Pos	18	cc	_	ref=MATT19.4
18	muiarea	muiere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	conj	_	ref=MATT19.4|SpaceAfter=No
19	?	?	PUNCT	QUEST	_	10	punct	_	ref=MATT19.4

~~~


