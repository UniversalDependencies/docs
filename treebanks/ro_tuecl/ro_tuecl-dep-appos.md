---
layout: base
title:  'Statistics of appos in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `appos`

This relation is universal.

15 nodes (0%) are attached to their parents as `appos`.

15 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86666666666667.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 33% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	6	vocative:mention	_	_
2	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	6	nsubj	_	_
3	iubita	iubit	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	appos	_	_
4	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
5	te	te	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	6	obj	_	_
6	pup	pupa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	dulce	dulce	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	xcomp	_	_
8	la	la	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	păsărica	păsărică	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	10	obl	_	CorrectForm=păsărică
10	vrei	vrea	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	conj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	@Utilizator_x1	@Utilizator_x1	SYM	_	_	4	vocative:mention	_	_
2	Utilizator_x2	Utilizator_x2	SYM	_	_	4	vocative:mention	_	_
3	Îs	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	misogini	misogin	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
5	doar	doar	ADV	_	Degree=Pos	7	advmod	_	_
6	cu	cu	ADP	_	AdpType=Prep|Case=Acc	7	case	_	_
7	femeile	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	vorba	vorba	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	appos	_	_
10	lui	lui	DET	_	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	@Utilizator_x3	@Utilizator_x3	PROPN	_	_	9	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	ce	ce	ADV	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	2	advmod	_	_
2	ușor	ușor	ADV	_	Degree=Pos	0	root	_	_
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	sa	să	PART	_	Mood=Sub	6	mark	_	CorrectForm=să
5	fii	fi	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	csubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	tot	tot	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	appos	_	_
9	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	obj	_	_
10	trebuie	trebuie	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
11	să	să	PART	_	Mood=Sub	12	mark	_	_
12	faci	face	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	csubj	_	_
13	e	fi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
14	să	să	PART	_	Mood=Sub	16	mark	_	_
15	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	16	expl:poss	_	_
16	pui	pune	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	xcomp	_	_
17	gene	geană	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	16	obj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	unghii	unghie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	17	conj	_	_
20	și	și	CCONJ	_	_	23	cc	_	_
21	să	să	PART	_	Mood=Sub	23	mark	_	_
22	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	23	obj	_	_
23	superi	supăra	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	16	conj	_	_
24	din	din	ADP	_	AdpType=Prep|Case=Acc	25	case	_	_
25	orice	orice	PRON	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Ind	23	obl	_	_

~~~


