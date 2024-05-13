---
layout: base
title:  'Statistics of obl:pmod in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Relations: `obl:pmod`

This relation is a language-specific subtype of <tt><a href="ro_art-dep-obl.html">obl</a></tt>.

3 nodes (1%) are attached to their parents as `obl:pmod`.

2 instances of `obl:pmod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:pmod`: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:pmod	color:blue
1	Nâşi	năs	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	nsubj	_	_
2	vrea	voi	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	tora	tora	ADV	Rgp	Degree=Pos	2	advmod	_	_
4	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	5	mark	_	SpaceAfter=No
5	ascapă	ascap	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	di	di	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	nâsă	năs	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	5	obl:pmod	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	ş-	şi	CCONJ	Crssp	Polarity=Pos	11	cc	_	SpaceAfter=No
10	u	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	_
11	pitriţea	pitrec	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	_
12	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	lamńa	lamńe	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 obl:pmod	color:blue
1	Tut	tut	ADV	Rgp	Degree=Pos	2	advmod	_	_
2	imna	imnu	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	câtră	câtră	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	casă	casă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obl	_	_
5	şi	şi	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
6	s-	si	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	7	expl:pv	_	SpaceAfter=No
7	minduea	minduescu	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	cum	cum	ADV	Rw	PronType=Int,Rel	11	advmod	_	_
10	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	11	mark	_	SpaceAfter=No
11	facă	fac	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	SpaceAfter=No
12	,	,	PUNCT	COMMA	_	15	punct	_	_
13	cum	cum	ADV	Rw	PronType=Int,Rel	15	advmod	_	_
14	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	15	mark	_	SpaceAfter=No
15	adară	adar	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	conj	_	_
16	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	17	mark	_	SpaceAfter=No
17	ascapă	ascap	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	advcl	_	_
18	di	di	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	arap	arap	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl:pmod	_	SpaceAfter=No
20	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


