---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-ccomp.html">ccomp</a></tt>.

3 nodes (0%) are attached to their parents as `ccomp:pmod`.

3 instances of `ccomp:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 ccomp:pmod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Cat	cât	ADV	_	PronType=Int,Rel|Typo=Yes	4	advmod	_	CorrectForm=cât
3	as	avea	AUX	_	Number=Sing|Person=1|Typo=Yes	4	aux	_	CorrectForm=aș
4	vrea	vrea	VERB	_	Tense=Pres|VerbForm=Inf	0	root	_	_
5	sa	să	PART	_	Mood=Sub|Typo=Yes	7	mark	_	CorrectForm=să
6	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:pv	_	_
7	pisi	pișa	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Typo=Yes|VerbForm=Fin	4	ccomp	_	CorrectForm=piși
8	în	în	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	gura	gură	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	_
10	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
11	și	și	CCONJ	_	Polarity=Pos	14	cc	_	_
12	sa	să	PART	_	Mood=Sub|Typo=Yes	14	mark	_	CorrectForm=să
13	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	14	expl:pv	_	_
14	ling	linge	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	conj	_	_
15	sa	să	PART	_	Mood=Sub|Typo=Yes	16	mark	_	CorrectForm=să
16	curat	curăța	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin	14	ccomp:pmod	_	CorrectForm=curăț
17	tot	tot	ADV	_	Degree=Pos	16	advmod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp:pmod	color:blue
1	Îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	2	iobj	_	_
2	urez	ura	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	noapte	noapte	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
5	că	că	SCONJ	_	Polarity=Pos	8	mark	_	_
6	dacă	dacă	SCONJ	_	Polarity=Pos	8	mark	_	_
7	era	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	erai	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	2	ccomp:pmod	_	_
11	în	în	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	pat	pat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	_
13	cu	cu	ADP	_	AdpType=Prep|Case=Acc	14	case	_	_
14	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


