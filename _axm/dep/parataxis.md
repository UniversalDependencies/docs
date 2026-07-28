---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a relation between a word (often the main predicate of a sentence) and other elements, such as a sentential
parenthetical or a clause after a “.” (Armenian colon) or a “—”, placed side by side without any explicit coordination, subordination, or argument relation with the head word.
Parataxis is a discourse-like equivalent of coordination, and so usually obeys an iconic ordering. Hence it is normal for the first part of a sentence to be the head and the
second part to be the parataxis dependent, regardless of the headedness properties of the language. But things do get more complicated, such as cases of parentheticals,
which appear medially.

~~~ conllu
# visual-style 9 14 advcl:relcl color:blue
1	Եւ	եւ	CCONJ	_	_	9	cc	_	_
2	թէ	թէ	SCONJ	_	_	6	mark	_	_
3-4	յոչ	_	_	_	_	_	_	_	_
3	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
4	ոչ	ոչ	PART	_	Polarity=Neg	5	advmod:emph	_	_
5	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	6	obl	_	_
6	լինայ	լինալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	9	punct	_	_
8	հնար	հնար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	_
9	չկայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	14	punct	_	_
11-12	զկէս	_	_	_	_	_	_	_	_
11	զ	զ	ADP	_	AdpType=Prep	12	case	_	_
12	կէս	կէս	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	14	obj	_	_
13	գնոցն	գին	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	12	nmod:poss	_	_
14	տայ	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
15	ազգին	ազգ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	14	iobj	_	SpaceAfter=No
16	՝	՝	PUNCT	_	_	18	punct	_	_
17	եւ	եւ	CCONJ	_	_	18	cc	_	_
18	տուգանք	տուգանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	conj	_	SpaceAfter=No
19	։	։	PUNCT	_	_	9	punct	_	_
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
