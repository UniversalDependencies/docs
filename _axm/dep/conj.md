---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as _և_/_ev_, _ու_/_ow_ (and), _կամ_/_kam_ (or), or a comma or other punctuation.
We treat coordination asymmetrically. The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ conllu
# visual-style 2 5 conj color:blue
1	Առ	առնել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
2	գխտոր	գխտոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	obj	_	_
3	եւ	եւ	CCONJ	_	_	5	cc	_	_
4	նռան	նուռ|նուռն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	_
5	ծաղիկ	ծաղիկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	conj	_	_
~~~

~~~ sdparse
Եւ զդստերսն իրաւունք է ՝ որ ի նահապետութեան տուն կարգեն , որ է թագաւոր կամ բրինձ կամ մարգիզ կամ այսպիսիքն ։ \n Ew zdstersn irawownk’ ē՝ or i nahapetowt’ean town kargen, or ē t’agawor kam brinj kam margiz kam ayspisik’n . \n ARegarding the daughters , the law requires that they be married into noble families , such as those of a King , or a Prince , or a Marquis , or those-of-similar-rank .
conj(թագաւոր, բրինձ)
cc(բրինձ, կամ)
conj(թագաւոր, մարգիզ)
cc(մարգիզ, կամ)
conj(թագաւոր, այսպիսիքն)
cc(այսպիսիքն, կամ)
conj(King, Prince)
cc(Prince, or)
conj(King, Marquis)
cc(Marquis, or)
conj(King, those-of-similar-rank)
cc(those-of-similar-rank, or)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ conllu
# visual-style 3 7 conj color:blue
# visual-style 3 10 conj color:blue
# visual-style 1 14 conj color:blue
1	ծախեն	ծախել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2-3	զինքն	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	ինքն	ինք	PRON	_	Case=Acc|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
4	ու	ու	CCONJ	_	_	7	cc	_	_
5-6	զիր	_	_	_	_	_	_	_	_
5	զ	զ	ADP	_	AdpType=Prep	7	case	_	_
6	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss	7	det:poss	_	_
7	տունն	տուն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	3	conj	_	_
8	ու	ու	CCONJ	_	_	10	cc	_	_
9	զինչ	զինչ	PRON	_	PronType=Ind	10	obj	_	_
10	ուննայ	ուննալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	ու	ու	CCONJ	_	_	14	cc	_	_
12	ի	ի	ADP	_	AdpType=Prep	13	case	_	_
13	գինն	գին	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	14	obl	_	_
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.
<!-- Interlanguage links updated St 6. května 2026, 20:46:09 CEST -->
