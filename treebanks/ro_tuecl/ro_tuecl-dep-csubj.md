---
layout: base
title:  'Statistics of csubj in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `csubj`

This relation is universal.

18 nodes (0%) are attached to their parents as `csubj`.

18 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83333333333333.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (7; 39% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (6; 33% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Înseamnă	însemna	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	4	mark	_	_
4	faci	face	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	csubj	_	_
5	cu	cu	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	4	obl	_	_
7	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	8	det	_	_
8	69	69	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	@Utilizator_fem1	@Utilizator_fem1	SYM	_	_	5	vocative:mention	_	_
2	@Utilizator_fem2	@Utilizator_fem2	SYM	_	_	5	vocative:mention	_	_
3	Cât	cât	ADV	_	PronType=Int,Rel	5	advmod	_	_
4	de	de	ADP	_	AdpType=Prep|Case=Acc	3	case	_	_
5	superb	suberb	ADV	_	Degree=Pos	0	root	_	_
6	este	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	să	să	PART	_	Mood=Sub	8	mark	_	_
8	vezi	vedea	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	csubj	_	_
9	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	obj	_	_
11	frumoasă	frumos	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
12	făcută	face	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
13	sandviș	sandviș	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	xcomp	_	SpaceAfter=No
14	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 40 csubj	color:blue
1	Există	exista	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	în	în	ADP	_	AdpType=Prep|Case=Acc	3	case	_	_
3	România	România	PROPN	_	_	1	obl	_	_
4	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	soi	soi	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	nsubj	_	_
6	de	de	ADP	_	AdpType=Prep|Case=Acc	7	case	_	_
7	stereotip	stereotip	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
8	al	al	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	_
9	femeilor	femeie	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	7	nmod	_	_
10	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	17	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	13	expl:pv	_	_
13	cred	crede	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	17	parataxis	_	_
14	ele	el	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	13	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	13	punct	_	_
16	că	că	SCONJ	_	Polarity=Pos	17	mark	_	_
17	sunt	fi	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
18	de	de	ADP	_	AdpType=Prep|Case=Acc	19	case	_	_
19	succes	succes	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	1	punct	_	_
21	Machiate	machiat	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	parataxis	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	vopsite	vopsi	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	21	conj	_	_
24	la	la	ADP	_	AdpType=Prep|Case=Acc	25	case	_	_
25	păr	păr	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	23	obl	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	_
27	țâțe	țâță	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	21	conj	_	_
28	puse	pus	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	27	amod	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	gene	geană	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	21	conj	_	_
31	artificiale	artificial	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	30	amod	_	SpaceAfter=No
32	.	.	PUNCT	_	_	21	punct	_	_
33	Pula	pulă	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	37	discourse	_	_
34	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	33	det	_	SpaceAfter=No
35	,	,	PUNCT	_	_	33	punct	_	_
36	sunt	fi	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	37	cop	_	_
37	sigur	sigur	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	parataxis	_	_
38	că	că	SCONJ	_	Polarity=Pos	40	mark	_	_
39	le	el	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	40	iobj	_	_
40	vedeți	vedea	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	37	csubj	_	_
41	și	și	CCONJ	_	Polarity=Pos	42	advmod	_	_
42	voi	tu	PRON	_	Case=Acc,Nom|Number=Plur|Person=2|PronType=Prs|Strength=Strong	40	nsubj	_	SpaceAfter=No
43	.	.	PUNCT	_	_	37	punct	_	_
44	Rar	rar	ADV	_	Degree=Pos	49	advmod:tmod	_	_
45	spre	spre	ADP	_	AdpType=Prep|Case=Acc	47	case	_	_
46	foarte	foarte	ADV	_	_	47	advmod	_	_
47	rar	rar	ADV	_	Degree=Pos	49	advmod:tmod	_	_
48	mai	mai	ADV	_	_	49	advmod	_	_
49	vezi	vedea	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
50	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	51	det	_	_
51	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	49	obj	_	_
52	naturală	natural	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	51	amod	_	SpaceAfter=No
53	,	,	PUNCT	_	_	57	punct	_	_
54	chiar	chiar	ADV	_	Degree=Pos	57	advmod	_	_
55	și	și	CCONJ	_	Polarity=Pos	54	fixed	_	_
56	pe	pe	ADP	_	AdpType=Prep|Case=Acc	57	case	_	_
57	stradă	stradă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	49	obl	_	SpaceAfter=No
58	.	.	PUNCT	_	_	49	punct	_	_

~~~


