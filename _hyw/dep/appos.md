---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define or modify that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures.

~~~ conllu
# visual-style 8 3 appos color:blue
1	Բուն	բուն	ADJ	_	_	2	amod	_	Translit=Bown|LTranslit=bown
2	խանութը	խանութ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Translit=xanowt’ë|LTranslit=xanowt’
3	վարն	վար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=varn|LTranslit=var
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
6	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	7	nummod	_	Translit=erkow|LTranslit=erkow
7	փողոցներու	փողոց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	8	nmod:poss	_	Translit=p’oġoc’nerow|LTranslit=p’oġoc’
8	անկիւնը	անկիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	appos	_	Translit=ankiwnë|LTranslit=ankiwn|SpaceAfter=No
~~~

~~~ conllu
# visual-style 2 4 appos color:blue
1	Մեծ	մեծ	ADJ	_	Degree=Pos	2	amod	_	Translit=Meç|LTranslit=meç
2	հայրս	հայր	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	Translit=hayrs|LTranslit=hayr|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	Յակոբ	Յակոբ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	appos	_	Translit=Yakob|LTranslit=Yakob|SpaceAfter=No
~~~

There is a slight deviation from the [universal](u-dep/appos) standard in case of more than one appositive nominal. Instead of attaching them all to the first noun, all the appositive modifiers are put together in coordination, then attached as `appos` to the modified noun. This is done regardless whether the appositives are joined by a coordinating conjunction or just a comma.

~~~ conllu
# visual-style 3 1 appos color:blue
# visual-style 6 3 conj color:blue
1	Հոն	հոն	ADV	_	Deixis=Remt|PronType=Dem	12	advmod	_	Translit=Hon|LTranslit=hon|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	լոյսերուն	լոյս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	1	appos	_	Translit=loyserown|LTranslit=loys
4	մէջ	մէջ	ADP	_	AdpType=Post	3	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	դրամարկղին	դրամարկղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	conj	_	Translit=dramarkġin|LTranslit=dramarkġ
7	առջեւ	առջեւ	ADP	_	AdpType=Post	6	case	_	Translit=aṙǰew|LTranslit=aṙǰew
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:39 CEST -->
