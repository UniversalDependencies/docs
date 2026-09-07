---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer clause nominal subject'
udver: '2'
---

This relation specifies a nominal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~conllu
# visual-style 19 3 nsubj:outer color:blue
# visual-style 19 15 nsubj color:blue
1	Երկրորդ	երկրորդ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	19	parataxis	_	Translit=Erkrord|LTranslit=erkrord|SpaceAfter=No
2	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
3	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	19	nsubj:outer	_	Translit=ayn|LTranslit=ayn|SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
5	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	9	obj	_	Translit=inč|LTranslit=inč
6	Թուրքիան	Թուրքիա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	9	nsubj	_	Translit=T’owrk’ian|LTranslit=T’owrk’ia
7	ու	ու	CCONJ	_	_	8	cc	_	Translit=ow|LTranslit=ow
8	Ազրպէյճանը	Ազրպէյճան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	6	conj	_	Translit=Azrpēyč̣anë|LTranslit=Azrpēyč̣an
9	կարող	կարող	ADJ	_	Degree=Pos	3	acl:relcl	_	Translit=karoġ|LTranslit=karoġ
10	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	cop	_	Translit=ēin|LTranslit=em
11	ընել	ընել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	9	xcomp	_	Translit=ënel|LTranslit=ënel
12	ու	ու	CCONJ	_	_	13	cc	_	Translit=ow|LTranslit=ow
13	չըրին	ընել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	Translit=čërin|LTranslit=ënel|SpaceAfter=No
14	,	,	PUNCT	_	_	19	punct	_	Translit=,|LTranslit=,
15	այդ	այդ	PRON	_	Deixis=Med|PronType=Dem	19	nsubj	_	Translit=ayd|LTranslit=ayd
16	ալ	ալ	ADV	_	_	15	advmod:emph	_	Translit=al|LTranslit=al
17	տարբերութիւն	տարբերութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	19	obj	_	Translit=tarberowt’iwn|LTranslit=tarberowt’iwn
18	չ՚	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	19	aux	_	Translit=č,|LTranslit=em|SpaceAfter=No
19	ըներ	ընել	VERB	_	Aspect=Imp|Connegative=Yes|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=ëner|LTranslit=ënel|SpaceAfter=No
20	։	։	PUNCT	_	_	19	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:25 CEST -->
