---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>.

6811 nodes (2%) are attached to their parents as `expl:pv`.

5919 instances of `expl:pv` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24122742622229.

The following 8 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (6685; 98% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (100; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=MATT17.23
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	ref=MATT17.23
3	întristară	întrista	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT17.23
4	foarte	foarte	ADV	Rg	_	3	advmod	_	ref=MATT17.23|SpaceAfter=No
5	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT17.23

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MARC3.5
2	tinse	întinde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MARC3.5
3	și	și	CCONJ	Ccssp	Polarity=Pos	5	cc	_	ref=MARC3.5
4	să	să	PART	Qs	PartType=Sub	5	expl:pv	_	ref=MARC3.5
5	întregi	întregi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MARC3.5
6	mîna	mână	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	ref=MARC3.5
7	lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	ref=MARC3.5|SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	ref=MARC3.5
9	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	ref=MARC3.5
10	și	și	CCONJ	Ccssp	Polarity=Pos	9	fixed	_	ref=MARC3.5
11	ceaialaltă	celălalt	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	obl	_	ref=MARC3.5|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MARC3.5

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 expl:pv	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	2	mark	_	ref=IOAN10.20
2	zicea	zice	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	ref=IOAN10.20
3	mulți	mult	PRON	Pi3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	2	nsubj	_	ref=IOAN10.20
4	dentr-	dintre	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	5	case	_	ref=IOAN10.20|SpaceAfter=No
5	înși	însul	PRON	Pp3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	nmod	_	ref=IOAN10.20|SpaceAfter=No
6	:	:	PUNCT	COLON	_	8	punct	_	ref=IOAN10.20
7	Drac	drac	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	ref=IOAN10.20
8	arе	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	ref=IOAN10.20
9	și	și	CCONJ	Ccssp	Polarity=Pos	14	cc	_	ref=IOAN10.20
10	nu	nu	ADV	Qz	Polarity=Neg	14	advmod	_	ref=IOAN10.20|SpaceAfter=No
11	-Şi	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Strength=Weak	14	expl:pv	_	ref=IOAN10.20
12	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	cop	_	ref=IOAN10.20
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	ref=IOAN10.20
14	fire	fire	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	conj	_	ref=IOAN10.20|SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	2	punct	_	ref=IOAN10.20

~~~


