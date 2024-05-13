---
layout: base
title:  'Statistics of dep in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (1; 33% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 dep	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Narod	narod	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	sve	sve	PART	_	_	5	advmod	_	_
5	nezadovoljniji	nezadovoljan	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	5	parataxis	_	_
9	lider	lider	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
10	pokreta	pokret	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	Vetvendosje	Vetvendosje	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	10	flat	_	_
12	Aljbin	Aljbin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	flat	_	_
13	Kurti	Kurti	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	12	flat	_	_
14	tells	tells	ADP	_	_	8	dep	_	_
15	SETimes	SETimes	ADP	_	_	8	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 12 dep	color:blue
1	Takođe	takođe	ADV	_	Degree=Pos	3	advmod	_	_
2	u	u	ADP	_	Case=Loc	3	case	_	_
3	vestima	vest	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	8	parataxis	_	_
4	iz	iz	ADP	_	Case=Gen	5	case	_	_
5	kulture	kultura	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
6	:	:	PUNCT	_	_	3	punct	_	_
7	Istanbul	Istanbul	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	domaćin	domaćin	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
9	37.	37.	NUM	_	NumType=Ord	8	nummod	_	_
10	Međunarodnog	međunarodni	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
11	muzičkog	muzički	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	festivala	festival	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	18	dep	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	a	a	CCONJ	_	_	18	cc	_	_
15	Kipar	Kipar	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
16	i	i	CCONJ	_	_	17	cc	_	_
17	Grčka	Grčka	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	_
18	potpisali	potpisati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	8	conj	_	_
19	sporazum	sporazum	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obj	_	_
20	o	o	ADP	_	Case=Loc	21	case	_	_
21	saradnji	saradnja	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 dep	color:blue
1	Građani	građanin	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	misle	misliti	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	5	mark	_	_
4	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
5	dobro	dobro	ADV	_	Degree=Pos	2	ccomp	_	_
6	primenjivati	primenjivati	VERB	_	VerbForm=Inf	5	csubj	_	_
7	zakon	zakon	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
8	protiv	protiv	ADP	_	Case=Gen	9	case	_	_
9	mobinga	mobing	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	ali	ali	CCONJ	_	_	12	cc	_	_
12	sumnjaju	sumnjati	VERB	_	Number=Plur|Person=3|Tense=Pres	2	conj	_	_
13	da	da	SCONJ	_	_	16	mark	_	_
14	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	16	aux	_	_
15	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	16	nsubj	_	_
16	sprečiti	sprečiti	VERB	_	VerbForm=Inf	12	ccomp	_	_
17	sprečiti	sprečiti	VERB	_	VerbForm=Inf	16	dep	_	_
18	poslodavce	poslodavac	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	16	obj	_	_
19	da	da	SCONJ	_	_	22	mark	_	_
20	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	22	compound	_	_
21	loše	loše	ADV	_	Degree=Pos	22	advmod	_	_
22	ponašaju	ponašati	VERB	_	Number=Plur|Person=3|Tense=Pres	16	ccomp	_	SpaceAfter=No
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


