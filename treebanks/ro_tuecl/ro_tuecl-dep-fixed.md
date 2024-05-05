---
layout: base
title:  'Statistics of fixed in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `fixed`

This relation is universal.

82 nodes (2%) are attached to their parents as `fixed`.

82 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07317073170732.

The following 17 pairs of parts of speech are connected with `fixed`: <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (21; 26% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (13; 16% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (10; 12% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (7; 9% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (5; 6% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-DET.html">DET</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	De	de	ADP	_	AdpType=Prep|Case=Acc	4	advmod	_	_
2	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	1	fixed	_	_
3	vă	tu	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	4	iobj	_	_
4	faceți	face	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	machiaj	machiaj	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	obj	_	_
6	de	de	ADP	_	AdpType=Prep|Case=Acc	7	case	_	_
7	nuntă	nuntă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
8	doar	doar	ADV	_	Degree=Pos	10	advmod	_	_
9	să	să	PART	_	Mood=Sub	10	mark	_	_
10	mergeți	merge	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	_
11	până	până	SCONJ	_	Polarity=Pos	13	case	_	_
12	în	în	ADP	_	AdpType=Prep|Case=Acc	11	fixed	_	_
13	mall	mall	NOUN	_	Degree=Pos|Foreign=Yes|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No|Lang=en
14	???	???	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	nu	nu	PART	_	Polarity=Neg	2	advmod	_	_
2	zic	zice	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	5	mark	_	_
4	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	grasă	gras	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	_	_	16	punct	_	_
7	dar	dar	CCONJ	_	Polarity=Pos	16	cc	_	_
8	pe	pe	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
9	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	scară	scară	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obl	_	_
11	de	de	ADP	_	AdpType=Prep|Case=Acc	13	case	_	_
12	la	la	ADP	_	AdpType=Prep|Case=Acc	11	fixed	_	_
13	1	1	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
14	la	la	ADP	_	AdpType=Prep|Case=Acc	15	case	_	_
15	10	10	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	16	nummod	_	_
16	rupi	rupe	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
17	9	9	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	18	nummod	_	_
18	trepte	treaptă	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	16	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Oooooo	Oooooo	INTJ	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	sa	să	PART	_	Mood=Sub|Typo=Yes	7	mark	_	CorrectForm=să
5	ne	eu	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	7	iobj	_	_
6	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	7	advmod	_	CorrectForm=și
7	dam	da	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin	2	conj	_	CorrectForm=dăm
8	drumul	drum	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Typo=Yes	7	fixed	_	_
9	pe	pe	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
10	sanii	sân	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|Typo=Yes	7	obl	_	CorrectForm=sânii
11	tai	tău	DET	_	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs|Typo=Yes	10	det	_	CorrectForm=tăi|SpaceAfter=No
12	!	!	PUNCT	_	_	2	punct	_	_

~~~


