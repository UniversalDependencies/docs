---
layout: base
title:  'Statistics of advcl in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="ro_tuecl-dep-advcl-tcl.html">advcl:tcl</a></tt>.

80 nodes (2%) are attached to their parents as `advcl`.

59 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.175.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (52; 65% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 advcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Nu	nu	PART	_	Polarity=Neg	3	advmod	_	_
2	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	bărbat	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	dacă	dacă	SCONJ	_	Polarity=Pos	7	mark	_	_
5	nu	nu	PART	_	Polarity=Neg	7	advmod	_	_
6	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:pv	_	_
7	uiți	uita	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
8	la	la	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	fotbal	fotbal	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	/	/	PUNCT	_	_	9	punct	_	SpaceAfter=No
11	football	football	NOUN	_	Foreign=Yes|Number=Sing	9	conj	_	Lang=en
12	!	!	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 advcl	color:blue
1	@Utilizator_x	@Utilizator_x	SYM	_	_	2	vocative:mention	_	_
2	stiau	ști	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin	0	root	_	CorrectForm=știau
3	cei	acela	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	2	nsubj	_	_
4	de	de	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	4	fixed	_	_
6	parazitii	Paraziții	PROPN	_	Typo=Yes	3	nmod	_	CorrectForm=Paraziții
7	cand	când	SCONJ	_	Typo=Yes	9	mark	_	CorrectForm=când
8	au	avea	AUX	_	Number=Plur|Person=3	9	aux	_	_
9	spus	spune	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	advcl:tcl	_	_
10	"	"	PUNCT	_	_	16	punct	_	SpaceAfter=No
11	idealul	ideal	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	16	nsubj	_	_
12	meu	meu	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	11	det	_	_
13	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	14	case	_	CorrectForm=în
14	viata	viață	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	11	nmod	_	CorrectForm=viață
15	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
16	femeia	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	advcl	_	_
17	cu	cu	ADP	_	AdpType=Prep|Case=Acc	18	case	_	_
18	mustata	mustață	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	16	nmod	_	CorrectForm=mustață|SpaceAfter=No
19	"	"	PUNCT	_	_	16	punct	_	_

~~~


