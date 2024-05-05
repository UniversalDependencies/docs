---
layout: base
title:  'Statistics of xcomp in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `xcomp`

This relation is universal.

36 nodes (1%) are attached to their parents as `xcomp`.

35 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11111111111111.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (11; 31% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (11; 31% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (10; 28% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 xcomp	color:blue
1	Ok	Ok	ADV	_	Degree=Pos	4	advmod	_	_
2	Alex	Alex	PROPN	_	_	4	vocative	_	_
3	am	avea	AUX	_	Number=Sing|Person=1	4	aux	_	_
4	înțeles	înțelege	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	8	mark	_	CorrectForm=că
6	te-	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	8	obj	_	SpaceAfter=No
7	a	avea	AUX	_	Number=Sing|Person=3	8	aux	_	_
8	refuzat	refuza	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	ccomp	_	_
9	Maria	Maria	PROPN	_	_	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	dar	dar	CCONJ	_	Polarity=Pos	14	cc	_	_
12	asta	acesta	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
13	nu	nu	PART	_	Polarity=Neg	14	advmod	_	_
14	inseamna	înseamnă	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	4	conj	_	CorrectForm=înseamnă
15	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	17	mark	_	CorrectForm=că
16	ii	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	17	cop	_	CorrectForm=îi
17	curva	curvă	NOUN	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	14	xcomp	_	CorrectForm=curvă|SpaceAfter=No
18	😭	😭	SYM	_	_	4	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Ești	fi	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ceea	acela	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	6	obj	_	_
4	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel|Typo=Yes	3	fixed	_	CorrectForm=ce-și
5	și	și	PRON	_	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	6	expl:poss	_	_
6	dorește	dori	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	xcomp	_	_
7	orice	orice	DET	_	Case=Acc,Nom|Person=3|Position=Prenom|PronType=Ind	8	det	_	_
8	bărbat	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
9	!	!	PUNCT	_	_	2	punct	_	_

~~~


