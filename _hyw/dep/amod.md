---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

An adjectival modifier of a noun is any adjectival phrase that serves to modify the meaning of the noun. If the modifying adjectival word is pronominal (i.e. tagged [DET]()), the relation is [det]() instead of `amod`.

~~~ conllu
# visual-style 2 1 amod color:blue
1	Խեղճ	խեղճ	ADJ	_	Degree=Pos	2	amod	_	Translit=Xeġč̣|LTranslit=xeġč̣
2	կինը	կին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Translit=kinë|LTranslit=kin
3	աշխատեցաւ	աշխատիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ašxatec’aw|LTranslit=ašxatil|SpaceAfter=No
~~~

~~~ conllu
# visual-style 8 3 amod color:blue
# visual-style 3 5 conj color:blue
# visual-style 3 7 conj color:blue
1	Պետրոս	Պետրոս	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	8	nsubj	_	Translit=Petros|LTranslit=Petros
2	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	8	det:poss	_	Translit=ir|LTranslit=ir
3	լուրջ	լուրջ	ADJ	_	Degree=Pos	8	amod	_	Translit=lowrǰ|LTranslit=lowrǰ|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	խելօք	խելօք	ADJ	_	Degree=Pos	3	conj	_	Translit=xelòk’|LTranslit=xelòk’|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	սիրալիր	սիրալիր	ADJ	_	Degree=Pos	3	conj	_	Translit=siralir|LTranslit=siralir
8	տրամադրութեան	տրամադրութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=tramadrowt’ean|LTranslit=tramadrowt’iwn
9	մէջ	մէջ	ADP	_	AdpType=Post	8	case	_	Translit=mēǰ|LTranslit=mēǰ
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:38 CEST -->
