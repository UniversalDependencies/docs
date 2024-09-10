---
layout: base
title:  'Statistics of nmod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `nmod`

This relation is universal.

127 nodes (3%) are attached to their parents as `nmod`.

124 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14173228346457.

The following 9 pairs of parts of speech are connected with `nmod`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (104; 82% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (13; 10% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Felul	fel	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	întâi	întâi	NUM	_	Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	_
3	sarmale	sarma	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
4	iar	iar	CCONJ	_	_	6	cc	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	desert	desert	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	_
7	buzele	buză	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	_
8	tale	tău	PRON	_	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	O	o	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nsubj	_	_
3	copilăroasă	copilăros	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
4	e	fi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	și	și	CCONJ	_	Polarity=Pos	6	advmod	_	_
6	una	unu	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	4	obj	_	_
7	cu	cu	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
8	multe	mult	DET	_	Gender=Fem|Number=Plur|Person=3|PronType=Ind	9	det	_	_
9	probleme	problemă	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	6	nmod	_	_
10	pe	pe	ADP	_	AdpType=Prep|Case=Acc	11	case	_	_
11	cap	cap	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


