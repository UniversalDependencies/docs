---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
# visual-style 20 5 csubj:outer color:blue
1	Սակայն	սակայն	CCONJ	_	_	20	cc	_	Translit=Sakayn|LTranslit=sakayn|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|ExtPos=PRON|Number=Sing|PronType=Rel	5	nsubj	_	Translit=inč|LTranslit=inč
4	որ	որ	PART	_	_	3	fixed	_	Translit=or|LTranslit=or
5	անհեթեթ	անհեթեթ	ADJ	_	Degree=Pos	20	csubj:outer	_	Translit=anhet’et’|LTranslit=anhet’et’
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=ē|LTranslit=em
7	ու	ու	CCONJ	_	_	8	cc	_	Translit=ow|LTranslit=ow
8	ծիծաղելի	ծիծաղելի	ADJ	_	Degree=Pos	5	conj	_	Translit=çiçaġeli|LTranslit=çiçaġeli|SpaceAfter=No
9	՝	՝	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
10	սովորական	սովորական	ADJ	_	Degree=Pos	11	amod	_	Translit=sovorakan|LTranslit=sovorakan
11	կեանքի	կեանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	15	nmod:poss	_	Translit=keank’i|LTranslit=keank’
12	եւ	եւ	CCONJ	_	_	13	cc	_	Translit=ew|LTranslit=ew
13	անհատներու	անհատ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	11	conj	_	Translit=anhatnerow|LTranslit=anhat
14	առօրեայ	առօրեայ	ADJ	_	_	15	amod	_	Translit=aṙòreay|LTranslit=aṙòreay
15	յարաբերութեանց	յարաբերութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	5	obl	_	Translit=yaraberowt’eanc’|LTranslit=yaraberowt’iwn
16	համար	համար	ADP	_	AdpType=Post	15	case	_	Translit=hamar|LTranslit=hamar|SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
18	անհեթեթ	անհեթեթ	ADJ	_	Degree=Pos	20	xcomp	_	Translit=anhet’et’|LTranslit=anhet’et’
19	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	20	aux	_	Translit=či|LTranslit=em
20	նկատուի	նկատուիլ	VERB	_	Aspect=Imp|Connegative=Yes|Subcat=Intr|Typo=Yes|VerbForm=Part|Voice=Mid	0	root	_	Translit=nkatowi|LTranslit=nkatowil
21	Մամուլի	մամուլ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	22	nmod:poss	_	Translit=Mamowli|LTranslit=mamowl
22	ազատութեան	ազատութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	23	nmod:poss	_	Translit=azatowt’ean|LTranslit=azatowt’iwn
23	տեսակէտով	տեսակէտ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	20	obl	_	Translit=tesakētov|LTranslit=tesakēt|SpaceAfter=No
24	։	։	PUNCT	_	_	20	punct	_	Translit=.|LTranslit=.
~~~

The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ conllu
# Visual-style 1 3 csubj coclor:blue
1	Նպատակն	նպատակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=Npatakn|LTranslit=npatak
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em
3	տապալել	տապալել	VERB	_	Case=Nom|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=tapalel|LTranslit=tapalel
4	կուսակցութիւնը	կուսակցութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=kowsakc’owt’iwnë|LTranslit=kowsakc’owt’iwn
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:57 CEST -->
