---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and the [coordinating conjunction](CCONJ) that precedes it.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ conllu
# visual-style 3 2 cc color:blue
# visual-style 5 4 cc color:blue
1	Ադամ	ադամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	0	root	_	_
2	եւ	եւ	CCONJ	_	_	3	cc	_	_
3	Եւայ	եւայ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	1	conj	_	_
4	եւ	եւ	CCONJ	_	_	5	cc	_	_
5	պատուիրանքն	պատուիրան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	1	conj	_	_
6	տեառն	տեառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nmod:npmod	_	_
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a `cc`, and it depends on the root predicate of the sentence.
(In fact there is a coordination that spans multiple sentences. We cannot attach a word to the first conjunct because it is in another sentence. Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ conllu
# visual-style 7 1 cc color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	թէ	թէ	SCONJ	_	_	5	mark	_	_
3	այլազգի	այլազգի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
4	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
6	՝	՝	PUNCT	_	_	7	punct	_	_
7	մեռնի	մեռնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:35 CEST -->
