---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](u-pos/NUM) phrase that serves to modify the meaning of the noun with a quantity.

~~~ conllu
# visual-style 2 1 nummod color:blue
1	Քսան	քսան	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	Translit=K’san|LTranslit=k’san
2	տարի	տարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tari|LTranslit=tari
3	առաջ	առաջ	ADP	_	AdpType=Post	2	case	_	Translit=aṙaǰ|LTranslit=aṙaǰ
~~~

~~~ conllu
# visual-style 5 4 nummod color:blue
1	Աշխարհաբար	աշխարհաբար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	3	nmod	_	Translit=Ašxarhabar|LTranslit=ašxarhabar
2	առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	3	amod	_	Translit=aṙaǰin|LTranslit=aṙaǰin
3	հրատարակութենէն	հրատարակութիւն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	5	nmod:npmod	_	Translit=hratarakowt’enēn|LTranslit=hratarakowt’iwn
4	117	117	NUM	_	NumForm=Digit|NumType=Card	5	nummod	_	Translit=117|LTranslit=117
5	տարի	տարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tari|LTranslit=tari
6	անց	անց	ADP	_	AdpType=Post	5	case	_	Translit=anc’|LTranslit=anc’
~~~

~~~ conllu
# visual-style 2 1 nummod color:blue
1	2020	2020	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	Translit=2020|LTranslit=2020
2	թուականը	թուական	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=t’owakanë|LTranslit=t’owakan
3	իսկապէս	իսկապէս	ADV	_	_	4	advmod	_	Translit=iskapēs|LTranslit=iskapēs
4	ծանր	ծանր	ADJ	_	Degree=Pos	5	amod	_	Translit=çanr|LTranslit=çanr
5	տարի	տարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tari|LTranslit=tari
6	մըն	մը	DET	_	PronType=Art	5	det	_	Translit=mën|LTranslit=më
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
8	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.
~~~

Note that indefinite quantifiers such as _մը_/_më_ “a (one)”, _քանի մը_/_kʼani më_ “another” are tagged [DET]() rather than [NUM](). Therefore their relation to the quantified noun is not `nummod` but [det]():

~~~ conllu
# visual-style 3 1 det color:blue
1	Քանի	քանի	DET	_	ExtPos=DET|PronType=Int	3	det	_	Translit=K’ani|LTranslit=k’ani
2	մը	մը	DET	_	PronType=Art	1	fixed	_	Translit=më|LTranslit=më
3	ամիս	ամիս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	obl	_	Translit=amis|LTranslit=amis
4	առաջ	առաջ	ADP	_	AdpType=Post	3	case	_	Translit=aṙaǰ|LTranslit=aṙaǰ
~~~

## Additional remarks

Note that two numeral words are joined using the [flat]() relation.
Also note that intensifiers are attached to the head of the phrase and not to the number.
This is in accord with the UD guidelines.


## Dates

Dates are annotated as follows: if present, the day is the head, the month is _nmod:poss_ and the year is _nummod_:


## Numbered objects

House number in address is attached as `nmod` to the name of the street:

