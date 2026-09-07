---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](INTJ) and other discourse [particles](PART) and elements, which are not clearly linked to the structure of the sentence, except in an expressive way.

We also use `discourse` for list enumerators (e.g. *1.*, *1)*, *[1]*, *1.4*, *II*, *ա)*, *ա.*, *ԺԳ* marking an item in a sequence). (Bullets, by contrast, are considered [punctuation](hy-pos/PUNCT) and attach as [punct]().)

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

~~~ conllu
# visual-style 7 1 discourse color:blue
1	Ցաւօք	ցաւօք	PART	_	ExtPos=PART	7	discourse	_	Translit=C’awòk’|LTranslit=c’awòk’
2	սրտի	սիրտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	1	fixed	_	Translit=srti|LTranslit=sirt
3	Շահինեանէն	Շահինեան	PROPN	_	Animacy=Hum|Case=Abl|Definite=Def|NameType=Sur|Number=Sing	7	obl	_	Translit=Šahineanēn|LTranslit=Šahinean
4	ոչ	ոչ	PART	_	ExtPos=DET|Polarity=Neg	6	det	_	Translit=oč|LTranslit=oč
5	մի	մի	DET	_	PronType=Art	4	fixed	_	Translit=mi|LTranslit=mi
6	լուսանկար	լուսանկար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Translit=lowsankar|LTranslit=lowsankar
7	չունէին	ունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=čownēin|LTranslit=ownim|SpaceAfter=No
8	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 13 1 discourse color:blue
# visual-style 13 7 discourse color:blue
1	Այո	այո	INTJ	_	_	13	discourse	_	Translit=Ayo|LTranslit=ayo|SpaceAfter=No
2	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
3	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	6	det	_	Translit=ayd|LTranslit=ayd
4	իմ	ես	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Translit=im|LTranslit=es
5	գտած	գտնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	6	acl	_	Translit=gtaç|LTranslit=gtnel
6	լուսանկարներով	լուսանկար	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	11	obl	_	Translit=lowsankarnerov|LTranslit=lowsankar
7	անպայման	անպայման	PART	_	_	13	discourse	_	Translit=anpayman|LTranslit=anpayman
8	Երեւանի	Երեւան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	11	obl	_	Translit=Erewani|LTranslit=Erewan
9	մէջ	մէջ	ADP	_	AdpType=Post	8	case	_	Translit=mēǰ|LTranslit=mēǰ
10	ցուցահանդէս	ցուցահանդէս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	obj	_	Translit=c’owc’ahandēs|LTranslit=c’owc’ahandēs
11	կազմակերպել	կազմակերպել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	13	xcomp	_	Translit=kazmakerpel|LTranslit=kazmakerpel
12	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	13	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
13	ուզեմ	ուզել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=owzem|LTranslit=owzel|SpaceAfter=No
14	։	։	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.
~~~

