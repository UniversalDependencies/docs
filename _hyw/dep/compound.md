---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being [fixed]() and [flat]()). It is used:

- for any kind of X<sup>0</sup> compounding: bare noun compounds (e.g., *phone book*)

~~~ conllu
# visual-style	4	5	compound	color:blue
1	Խումբ	խումբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=Xowmb|LTranslit=xowmb
2	մը	մը	DET	_	PronType=Art	1	det	_	Translit=më|LTranslit=më
3	երախաներ	երախայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	7	nsubj	_	Translit=eraxaner|LTranslit=eraxay
4	ձիւնէ	ձիւն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Coll	7	obj	_	Translit=jiwnē|LTranslit=jiwn
5	գնդակ	գնդակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	compound	_	Translit=gndak|LTranslit=gndak
6	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=kë|LTranslit=kë
7	խաղան	խաղալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=xaġan|LTranslit=xaġal|SpaceAfter=No
8	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
~~~

- for adjective/adverb compounds

~~~ conllu
# visual-style	2	4	compound	color:blue
1	Հոգաբարձութիւնը	հոգաբարձութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	7	nsubj	_	Translit=Hogabarjowt’iwnë|LTranslit=hogabarjowt’iwn
2	մենծ	մենծ	ADJ	_	Degree=Pos|Style=Coll	5	nmod	_	Translit=menç|LTranslit=menç|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	աղա	աղա	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	2	compound	_	Translit=aġa|LTranslit=aġa
5	թաղականին	թաղական	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	6	nmod:poss	_	Translit=t’aġakanin|LTranslit=t’aġakan
6	ձեռքը	ձեռք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	obl	_	Translit=jeṙk’ë|LTranslit=jeṙk’
7	խաղալիք	խաղալիք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=xaġalik’|LTranslit=xaġalik’
8	մըն	մը	DET	_	PronType=Art	7	det	_	Translit=mën|LTranslit=më
9	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
~~~

~~~ conllu
# visual-style	5	6	compound	color:blue
1	Զինուորական	զինուորական	ADJ	_	_	2	amod	_	Translit=Zinoworakan|LTranslit=zinoworakan
2	քայլերգ	քայլերգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=k’aylerg|LTranslit=k’aylerg
3	եւ	եւ	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
4	ահա	ահա	PART	_	_	7	discourse	_	Translit=aha|LTranslit=aha
5	կարմիր	կարմիր	ADJ	_	Degree=Pos	7	nmod:poss	_	Translit=karmir|LTranslit=karmir
6	բանակայիններու	բանակային	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	5	compound	_	Translit=banakayinnerow|LTranslit=banakayin
7	երթը	երթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	conj	_	Translit=ert’ë|LTranslit=ert’|SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~ conllu
# visual-style	4	5	compound	color:blue
1	Յայտնի	յայտնի	ADJ	_	Degree=Pos	0	root	_	Translit=Yaytni|LTranslit=yaytni
2	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	cop	_	Translit=ēr|LTranslit=em
3	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
4	քիչ	քիչ	ADV	_	_	7	advmod	_	Translit=k’ič|LTranslit=k’ič
5	շատ	շատ	ADV	_	_	4	compound	_	Translit=šat|LTranslit=šat
6	ամենուն	ամէնը	PRON	_	Case=Dat|PronType=Tot	7	obl	_	Translit=amenown|LTranslit=amēnë
7	հաճելի	հաճելի	ADJ	_	Degree=Pos	8	amod	_	Translit=hač̣eli|LTranslit=hač̣eli
8	սպասաւոր	սպասաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	1	csubj	_	Translit=spasawor|LTranslit=spasawor
9	մըն	մը	DET	_	PronType=Art	8	det	_	Translit=mën|LTranslit=më
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
11	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~

`compound` in Western Armenian is used also for serial verbs (with the subtype [compound:svc]()), for light verbs (with the subtype [compound:lvc]()).

<!-- Interlanguage links updated Út 30. června 2026, 10:59:49 CEST -->
