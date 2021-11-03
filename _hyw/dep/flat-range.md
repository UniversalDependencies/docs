---
layout: relation
title: 'flat:range'
shortdef: 'range'
udver: '2'
---

Western Armenian uses `flat:range` for numerical, spacial and time ranges.

~~~ conllu
# visual-style 4 5 flat:range color:blue
1	Վերջի	վերջի	ADJ	_	Degree=Pos|Style=Coll	2	amod	_	Translit=verǰi|LTranslit=verǰi
2	շրջանին	շրջան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	obl	_	Translit=šrǰanin|LTranslit=šrǰan
3	ուժեղ	ուժեղ	ADJ	_	Degree=Pos	6	amod	_	Translit=owžeġ|LTranslit=owžeġ
4	մէկ	մէկ	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	Translit=mēk|LTranslit=mēk
5	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	4	flat:range	_	Translit=erkow|LTranslit=erkow
6	բախում	բախում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Translit=baxowm|LTranslit=baxowm
7	ունեցած	ունենալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	2	root	_	Translit=ownec’aç|LTranslit=ownenal
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
9	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~

~~~ conllu
# visual-style 5 7 flat:range color:blue
# visual-style 5 9 flat:range color:blue
1	մինչ	մինչ	SCONJ	_	_	4	mark	_	Translit=minč|LTranslit=minč
2	Պաքուն	Պաքու	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	4	nsubj	_	Translit=Pak’own|LTranslit=Pak’ow
3	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
4	առաջադրէ	առաջադրել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=aṙaǰadrē|LTranslit=aṙaǰadrel
5	Երեւան	Երեւան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	11	nmod	_	Translit=Erewan|LTranslit=Erewan|SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
7	Պաքու	Պաքու	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	5	flat:range	_	Translit=Pak’ow|LTranslit=Pak’ow|SpaceAfter=No
8	-	-	PUNCT	_	_	9	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
9	Մոսկուա	Մոսկուա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	5	flat:range	_	Translit=Moskowa|LTranslit=Moskowa
10	եռակողմ	եռակողմ	ADJ	_	_	11	amod	_	Translit=eṙakoġm|LTranslit=eṙakoġm
11	ձեւաչափը	ձեւաչափ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	obj	_	Translit=jewačap’ë|LTranslit=jewačap’

~~~
<!-- Interlanguage links updated St lis 3 20:58:55 CET 2021 -->
