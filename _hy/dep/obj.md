---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun that denotes the entity acted upon. Most often the direct object is in the [nominative case](Case) or in [dative](Case) (see the related feature [Animacy]()), sometimes in [ablative](case). Note that certain intransitive (middle voice) verbs take arguments in dative which should be regarded as core based on their syntactic behavior being parallel to the arguments of other transitive verbs (see also the related features [Voice]() and [Subcat]()).

Nominative example:

~~~ sdparse
Նա տեսավ մեքենա ։ \n He saw a-car .
obj(տեսավ, մեքենա)
obj(saw, a-car)
~~~

Dative example:

~~~ sdparse
Նա տեսավ իր աշակերտներին ։ \n He saw his pupils .
obj(տեսավ, աշակերտներին)
obj(saw, pupils)
~~~

Ablative example:

~~~ conllu
# visual-style 3 7 obj color:blue
1	Այդ	այդ	DET	_	Deixis=Med|PronType=Dem	2	det	_	Translit=Ayd|LTranslit=ayd
2	գրախանութից	գրախանութ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	3	obl	_	Translit=graxanowt’ic’|LTranslit=graxanowt’
3	գնել	գնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=gnel|LTranslit=gnel
4	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=em|LTranslit=em
5	Պատրիկ	Պատրիկ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	7	nmod:poss	_	Translit=Patrik|LTranslit=Patrik
6	Մոդիանոյի	Մոդիանո	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	5	flat:name	_	Translit=Modianoyi|LTranslit=Modiano
7	գրքերից	գիրք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	3	obl	_	Translit=grk’eric’|LTranslit=girk’
8	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~
##
IIf there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy as described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).
If there are two or more objects, one of them should be `obj` and the others should be [iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ When there is a [clausal complement](ccomp), then it is regarded as a “clausal direct object” and an object nominal will be an `iobj`.

There is more discussion of constructions with multiple objects on the page for [iobj]().
<!-- Interlanguage links updated St 6. května 2026, 20:47:53 CEST -->
