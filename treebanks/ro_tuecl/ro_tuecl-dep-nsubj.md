---
layout: base
title:  'Statistics of nsubj in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ro_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

250 nodes (6%) are attached to their parents as `nsubj`.

198 instances of `nsubj` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.7.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (112; 45% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (81; 32% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (16; 6% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 5% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nsubj	color:blue
1	încep	începe	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	să	să	PART	_	Mood=Sub	4	mark	_	_
3	mă	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	topesc	topi	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	după	după	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	tine	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	cum	cum	ADV	_	PronType=Int,Rel	11	advmod	_	_
9	s-	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	11	expl:pv	_	SpaceAfter=No
10	a	avea	AUX	_	Person=3	11	aux	_	_
11	topit	topi	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
12	butter	butter	NOUN	_	Foreign=Yes|Number=Sing	11	nsubj	_	Lang=en
13	într-	întru	ADP	_	AdpType=Prep|Case=Acc|Variant=Short	15	case	_	SpaceAfter=No
14	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	15	det	_	_
15	oră	ora	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	11	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 nsubj	color:blue
1	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
2	mare	mare	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	amod	_	_
3	parte	parte	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	_	_
4	a	al	DET	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	5	det	_	_
5	bărbaților	bărbat	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod	_	_
6	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	de	de	ADP	_	AdpType=Prep|Case=Acc	9	advmod	_	_
8	fapt	fapt	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	fixed	_	_
9	javre	javră	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_

~~~


