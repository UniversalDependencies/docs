---
layout: relation
title: 'flat:range'
shortdef: 'range'
udver: '2'
---

Ukrainian uses `flat:range` for numerical, spacial and time ranges. Ranges are **not** [`conj`es](../../u/dep/conj.html).

~~~ conllu
# visual-style 4 6 flat:range color:green
1	Обід	обід	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Id=3bwl|LTranslit=obid|Translit=Obid
2	обходиться	обходитися	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=3bwm|LTranslit=obchodytyśа|Translit=obchodyťśа
3	в	в	ADP	Spsa	Case=Acc	7	case	_	Id=3bwn|LTranslit=v|Translit=v
4	4	4	NUM	Mlc-a	Case=Acc|NumType=Card|Uninflect=Yes	7	nummod:gov	_	Id=3bwo|LTranslit=4|SpaceAfter=No|Translit=4
5	-	-	PUNCT	U	PunctType=Ndash	6	punct	_	Id=3bwp|LTranslit=-|SpaceAfter=No|Translit=-
6	5	5	NUM	Mlc-a	Case=Acc|NumType=Card|Uninflect=Yes	4	flat:range	_	Id=3bwq|LTranslit=5|Translit=5
7	€	€	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur|Uninflect=Yes	2	obl	_	Id=3bwr|LTranslit=€|Translit=€
8	.	.	PUNCT	U	_	2	punct	_	LTranslit=.|Translit=.

# visual-style 3 5 flat:range color:green
1	A-lunch	_	_	_	_	0	root	_	_
2	costs-you	_	_	_	_	0	root	_	_
3	4	_	_	_	_	0	root	_	_
4	–	_	_	_	_	0	root	_	_
5	5	_	_	_	_	3	flat:range	_	_
6	€	_	_	_	_	0	root	_	_
7	.	_	_	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2 4 flat:range color:green
1	поїзд	поїзд	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Київ	Київ	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	flat:title	_	SpaceAfter=No
3	—	—	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Одеса	Одеса	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	flat:range	_	_

# visual-style 2 4 flat:range color:green
1	the-train	поїзд	NOUN	_	_	0	root	_	_
2	Kyiv	_	_	_	_	0	root	_	SpaceAfter=No
3	—	—	PUNCT	_	_	0	root	_	SpaceAfter=No
4	Odesa	_	_	_	_	2	flat:range	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:32 CEST 2020 -->
