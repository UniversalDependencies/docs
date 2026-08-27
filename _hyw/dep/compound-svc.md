---
layout: relation
title: 'compound:svc'
shortdef: 'serial compound verb'
udver: '2'
---

The `compound:svc` relation is used for serial verb constructions in non-nominal complex predicates. In Western Armenian, both verbs are typically finite. The verb that controls the argument structure of the construction is treated as the head; it is also often the semantic head of the clause.

~~~ conllu
# visual-style 3 1 compound:svc color:blue
1	Եկուր	գալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	0	root	_	Translit=Ekowr|LTranslit=gal|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	տես	տեսնել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	1	compound:svc	_	Translit=tes|LTranslit=tesnel|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
5	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
6	ընթացքը	ընթացք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	Translit=ënt’ac’k’ë|LTranslit=ënt’ac’k’
7	բոլորովին	բոլորովին	ADV	_	_	8	advmod	_	Translit=bolorovin|LTranslit=bolorovin
8	տարբեր	տարբեր	ADJ	_	Degree=Pos	1	advcl	_	Translit=tarber|LTranslit=tarber
9	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
10	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 6 7 compound:svc color:blue
1	Իրենց	իրենց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Emp	2	det:poss	_	Translit=Irenc’|LTranslit=irenc’
2	հարցումներուն	հարցում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	iobj	_	Translit=harc’owmnerown|LTranslit=harc’owm
3	պատասխան	պատասխան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	_	Translit=patasxan|LTranslit=patasxan
4	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=čen|LTranslit=em
5	տրուած	տալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=trowaç|LTranslit=tal
6	եկող	գալ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	8	acl	_	Translit=ekoġ|LTranslit=gal
7	անցնող	անցնիլ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	6	compound:svc	_	Translit=anc’noġ|LTranslit=anc’nil
8	իշխանութիւններուն	իշխանութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	obl:agent	_	Translit=išxanowt’iwnnerown|LTranslit=išxanowt’iwn
9	կողմէ	կողմէ	ADP	_	AdpType=Post	8	case	_	Translit=koġmē|LTranslit=koġmē
~~~

~~~ conllu
# visual-style 2 4 compound:svc color:blue
1	Տղաքը	տղայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	Translit=Tġak’ë|LTranslit=tġay
2	կարդալ	կարդալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	obj	_	Translit=kardal|LTranslit=kardal|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	գրել	գրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	2	compound:svc	_	Translit=grel|LTranslit=grel
5	մը	մը	DET	_	PronType=Art	2	det	_	Translit=më|LTranslit=më
6	սորվին	սորվիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	csubj	_	Translit=sorvin|LTranslit=sorvil|SpaceAfter=No
7	՝	՝	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
8	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	9	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
9	օգտէ	օգտել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ògtē|LTranslit=ògtel
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:52 CEST -->
