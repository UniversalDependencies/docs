---
layout: relation
title: 'flat:sibl'
shortdef: 'siblings'
udver: '2'
---

Whenever two or more tokens are supposed to be connected to the same head but cannot be connected in parallel, `flat:sibl` is used.

In the following example, the predicate consists of two uncoordinated adjectives. However, there can only be one [`root`](root.html) per sentence, so we threrefore connect the second adjective as `flat:sibl` to the first one to treat both of them as a single unit.

~~~ conllu
# visual-style 2 3 flat:sibl color:green
1	Листки	листок	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	Id=2053|LTranslit=lystok|Translit=Lystky
2	цілісні	цілісний	ADJ	Ao--pns	Case=Nom|Number=Plur	0	root	_	Id=2054|LTranslit=cilisnyj|Translit=cilisni
3	лінійні	лінійний	ADJ	Ao--pns	Case=Nom|Number=Plur	2	flat:sibl	_	Id=2055|LTranslit=linijnyj|SpaceAfter=No|Translit=linijni
4	.	.	PUNCT	U	_	2	punct	_	Id=2056|LTranslit=.|Translit=.

# visual-style 3 4 flat:sibl color:green
1	The-leaves	_	_	_	_	0	root	_	_
2	[are]	_	_	_	_	0	root	_	_
3	entire	_	_	_	_	0	root	_	_
4	linear	_	_	_	_	3	flat:sibl	_	_
5	.	_	_	_	_	0	root	_	_

~~~
(_Entire_ and _linear_ are the terms for the form of leaf’s edge and body respectively and do not depend on each other.)

In the second example, `flat:sibl` is used to pack uncoordinated modifiers into a single conjunct, that is, conjoined here are oil ‘specifications’.

~~~ conllu
# visual-style 4 5 flat:sibl color:green
1	Люблю	любити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	оливкову	оливковий	ADJ	_	Case=Acc|Gender=Fem|Number=Sing	6	amod	_	_
3	або	або	CCONJ	_	_	4	cc	_	_
4	справжню	справжній	ADJ	_	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	_
5	натуральну	натуральний	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	flat:sibl	_	_
6	олію	олія	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

# visual-style 4 5 flat:sibl color:green
1	I-like	_	_	_	_	0	root	_	_
2	olive	_	_	_	_	0	root	_	_
3	or	_	_	_	_	0	root	_	_
4	real	_	_	_	_	2	conj	_	_
5	organic	_	_	_	_	4	flat:sibl	_	_
6	oil	_	_	_	_	0	root	_	_
7	.	_	_	_	_	0	root	_	_

~~~

(In Ukrainian, ‘oil’ is sunflower by default.)

Mention that the following analysis is incorrect:
~~~ conllu
# visual-style 6 5 amod_(wrong) color:darkred
1	I-like	_	_	_	_	0	root	_	_
2	olive	_	_	_	_	6	amod	_	_
3	or	_	_	_	_	0	root	_	_
4	real	_	_	_	_	2	conj	_	_
5	organic	_	_	_	_	6	amod_(wrong)	_	_
6	oil	_	_	_	_	0	root	_	_
7	.	_	_	_	_	0	root	_	_

~~~

It’s incorrect because if you unroll the coordination, you will get
- _I like olive organic oil._ — wrong
- _I like real organic oil._

instead of
- _I like olive oil._ — correct
- _I like real organic oil._

Do not confuse `flat:sibl` with [`flat:abs`](flat-abs.html) used for absolutive constructions.

For the discussion on `flat:sibl`, see issue [#556](https://github.com/UniversalDependencies/docs/issues/556).
<!-- Interlanguage links updated Út zář 29 20:23:32 CEST 2020 -->
