---
layout: base
title:  'Statistics of ccomp in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ro_art-dep-ccomp-pmod.html">ccomp:pmod</a></tt>.

9 nodes (2%) are attached to their parents as `ccomp`.

8 instances of `ccomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44444444444444.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Vârnu	vârnu	PRON	Pz3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
2	nu	nu	PART	Qz	Polarity=Neg	3	advmod	_	_
3	putea	pot	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	s-	să	PART	Qs	Mood=Sub	5	mark	_	SpaceAfter=No
5	ńeargă	nerg	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	s-	să	PART	Qs	Mood=Sub	8	mark	_	SpaceAfter=No
7	lu	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	8	obj	_	_
8	veadă	ved	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 ccomp	color:blue
1	Cari	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	nsubj	_	_
2	di	di	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	doľi	doi	NUM	Mcmprly	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	1	nummod	_	_
4	era	hiu	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	ccomp	_	_
5	ca	ca	SCONJ	Csssp	Polarity=Pos	9	mark	_	_
6	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	9	mark	_	SpaceAfter=No
7	hibă	hiu	AUX	Vasp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	cama	cama	ADV	Rgp	Degree=Pos	9	advmod	_	_
9	sănătos	sănătos	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	COMMA	_	4	punct	_	_
11	va	voi	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	SpaceAfter=No
12	-ĺi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	13	expl	_	_
13	arăţea	arăţescu	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
14	inima	inimă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
15	şi	şi	CCONJ	Crssp	Polarity=Pos	19	cc	_	_
16	era	hiu	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	aux	_	_
17	ca	ca	SCONJ	Csssp	Polarity=Pos	19	mark	_	_
18	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	19	mark	_	SpaceAfter=No
19	moară	mor	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	SpaceAfter=No
20	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


