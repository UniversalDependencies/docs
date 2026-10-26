---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun that denotes the entity acted upon. Most often the direct object is in the [nominative case](Case), or in [dative](Case), sometimes in [ablative](case). Note that certain intransitive (middle voice) verbs take arguments in dative which should be regarded as core based on their syntactic behavior being parallel to the arguments of other transitive verbs (see also the related features [Voice]() and [Subcat]()).

~~~ conllu
# visual-style 9 8 obj color:blue
1	Քեզի	դուն	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	3	iobj	_	Translit=K’ezi|LTranslit=down
2	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
3	ուզէի	ուզել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=owzēi|LTranslit=owzel
4	անցած	անցնիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	Translit=anc’aç|LTranslit=anc’nil
5	տարուան	տարի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	9	obl	_	Translit=tarowan|LTranslit=tari
6	մասին	մասին	ADP	_	AdpType=Post	5	case	_	Translit=masin|LTranslit=masin
7	լաւ	լաւ	ADJ	_	Degree=Pos	8	amod	_	Translit=law|LTranslit=law
8	լուր	լուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	Translit=lowr|LTranslit=lowr
9	տալ	տալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	ccomp	_	Translit=tal|LTranslit=tal
~~~

~~~ conllu
# visual-style 3 5 obj color:blue
1	Թերթի	թերթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	obl	_	Translit=T’ert’i|LTranslit=t’ert’
2	միջոցաւ	միջոցաւ	ADP	_	AdpType=Post	1	case	_	Translit=miǰoc’aw|LTranslit=miǰoc’aw
3	հրատարակեցինք	հրատարակել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hratarakec’ink’|LTranslit=hratarakel
4	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp	5	det:poss	_	Translit=ir|LTranslit=ir
5	կոչը	կոչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=kočë|LTranslit=koč
~~~

##
If there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy as described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).
If there are two or more objects, one of them should be `obj` and the others should be [iobj](). In such cases it is necessary to decide what is the most directly affected object _(patient)._ When there is a [clausal complement](ccomp), then it is regarded as a “clausal direct object” and an object nominal will be an `iobj`.

There is more discussion of constructions with multiple objects on the page for [iobj]().

<!-- Interlanguage links updated Út 30. června 2026, 11:00:28 CEST -->
