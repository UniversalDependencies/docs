---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-cc.html">cc</a></tt>.

13 nodes (0%) are attached to their parents as `cc:preconj`.

12 instances of `cc:preconj` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.53846153846154.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (6; 46% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (5; 38% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc:preconj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Și	și	CCONJ	_	Polarity=Pos	4	cc:preconj	_	_
3	cum	cum	ADV	_	PronType=Int,Rel	4	advmod	_	_
4	facem	face	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	_	Mood=Sub	7	mark	_	_
6	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:poss	_	_
7	văd	vedea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	corpul	corp	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Păcat	păcat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	6	mark	_	_
4	iar	iar	ADV	_	_	6	cc:preconj	_	_
5	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	6	expl:pv	_	_
6	distrezi	distra	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
7	cu	cu	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	naivitatea	naivitate	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
9	bărbaților	bărbat	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 46 cc:preconj	color:blue
1	Ies	ieși	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	afara	afară	ADV	_	Degree=Pos|Typo=Yes	1	advmod	_	CorrectForm=afară
3	din	din	ADP	_	AdpType=Prep|Case=Acc	4	case	_	_
4	supermarket	supermarket	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	am	avea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	carucior	cărucior	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	6	obj	_	CorrectForm=cărucior|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No
9	vad	vedea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin	1	parataxis	_	CorrectForm=văd
10	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	13	mark	_	CorrectForm=că
11	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	barbat	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	13	nsubj	_	CorrectForm=bărbat
13	cauta	căuta	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	9	ccomp	_	CorrectForm=căuta
14	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	15	case	_	CorrectForm=în
15	portmoneu	portmoneu	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	13	obl	_	_
16	dupa	după	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	17	case	_	CorrectForm=după
17	fisa	fisă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	13	obl	_	CorrectForm=fisă|SpaceAfter=No
18	.	.	PUNCT	_	_	9	punct	_	SpaceAfter=No
19	zic	zice	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
20	lui	lui	PRON	_	Case=Dat,Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	19	iobj	_	SpaceAfter=No
21	:	:	PUNCT	_	_	26	punct	_	_
22	acest	acest	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	23	det	_	_
23	carucior	cărucior	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	26	nsubj	_	CorrectForm=cărucior
24	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	_
25	fara	fără	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	26	case	_	CorrectForm=fără
26	fisa	fisă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	19	parataxis	_	CorrectForm=fisă|SpaceAfter=No
27	.	.	PUNCT	_	_	19	punct	_	SpaceAfter=No
28	a	avea	AUX	_	Number=Sing|Person=3	29	aux	_	_
29	facut	face	VERB	_	Gender=Masc|Number=Sing|Typo=Yes|VerbForm=Part	1	parataxis	_	CorrectForm=făcut
30	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	31	det	_	_
31	fata	față	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	29	obj	_	CorrectForm=față|SpaceAfter=No
32	:	:	PUNCT	_	_	34	punct	_	SpaceAfter=No
33	cum	cum	ADV	_	PronType=Int,Rel	34	advmod	_	_
34	indraznesc	îndrăzni	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	29	conj	_	CorrectForm=îndrăznesc
35	sa	să	PART	_	Mood=Sub|Typo=Yes	36	mark	_	CorrectForm=să
36	vorbesc	vorbi	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	34	ccomp	_	_
37	unui	un	DET	_	Case=Dat,Gen|Gender=Masc|Number=Sing|PronType=Ind	38	det	_	_
38	strain	străin	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	36	iobj	_	CorrectForm=străin
39	fiind	fi	AUX	_	VerbForm=Ger	40	cop	_	_
40	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	29	advcl	_	SpaceAfter=No
41	.	.	PUNCT	_	_	29	punct	_	SpaceAfter=No
42	boul	bou	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	43	nsubj	_	_
43	ia	lua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
44	caruciorul	cărucior	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Typo=Yes	43	obj	_	CorrectForm=căruciorul|SpaceAfter=No
45	,	,	PUNCT	_	_	54	punct	_	_
46	nici	nici	ADV	_	PronType=Neg	48	cc:preconj	_	_
47	buna	bună	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	48	amod	_	CorrectForm=bună
48	ziua	zi	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	54	obj	_	_
49	nici	nici	ADV	_	PronType=Neg	50	cc	_	_
50	multumesc	mulțumesc	INTJ	Typo=Yes	_	54	obj	_	CorrectForm=mulțumesc
51	nu	nu	PART	_	Polarity=Neg	54	advmod	_	_
52	mi-	eu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	54	iobj	_	SpaceAfter=No
53	a	avea	AUX	_	Number=Sing|Person=3	54	aux	_	_
54	zis	zice	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	43	conj	_	_
55	si	și	CCONJ	_	Polarity=Pos	56	cc	_	CorrectForm=și
56	pleaca	pleca	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	54	conj	_	CorrectForm=pleacă|SpaceAfter=No
57	.	.	PUNCT	_	_	43	punct	_	_

~~~


