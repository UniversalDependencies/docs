---
layout: base
title:  'Statistics of fixed in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `fixed`

This relation is universal.

173 nodes (0%) are attached to their parents as `fixed`.

173 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (55; 32% instances), <tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (55; 32% instances), <tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (49; 28% instances), <tt><a href="pl_lfg-pos-PART.html">PART</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (9; 5% instances), <tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_lfg-pos-SCONJ.html">SCONJ</a></tt> (5; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Na	Na	ADV	adv	_	5	advmod	5:advmod	_
2	pewno	pewno	ADV	adv	_	1	fixed	1:fixed	_
3	nie	nie	PART	qub	Polarity=Neg	5	advmod	5:advmod	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	wrogiem	wróg	NOUN	subst:sg:inst:m1	Case=Ins|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	_
6	socjalizmu	socjalizm	NOUN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	5	nmod:poss	5:nmod:poss	_
7	ani	ani	CCONJ	conj	_	8	cc	8:cc	_
8	Polski	Polska	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	conj	5:nmod:poss|6:conj	_
9	Ludowej	ludowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Ale	ale	CCONJ	conj	_	5	cc	5:cc	_
2	i	i	CCONJ	conj	_	1	fixed	1:fixed	_
3	tutaj	tutaj	ADV	adv	PronType=Dem	5	advmod	5:advmod	_
4	lekarze	lekarz	NOUN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	5	nsubj	5:nsubj	_
5	rozkładają	rozkładać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	bezradnie	bezradnie	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	_
7	ręce	ręka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Jak	jak	ADV	adv:pos	Degree=Pos|PronType=Int	2	advmod	2:advmod	_
2	podaje	podawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	_
3	PAP	PAP	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
5	brak	brak	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
6	danych	dana	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	5	obl	5:obl	_
7	na	na	ADP	prep:gen	AdpType=Prep	9	case	9:case	_
8	temat	temat	ADP	prep:gen	AdpType=Prep	7	fixed	7:fixed	Case=Gen
9	liczebności	liczebność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod:na_temat	_
10	załogi	załoga	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	9	nmod:poss	9:nmod:poss	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


