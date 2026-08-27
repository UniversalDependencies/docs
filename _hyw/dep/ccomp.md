---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.

~~~ conllu
# visual-style 2 5 ccomp color:blue
1	Փորձառութիւնը	փորձառութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=P’orjaṙowt’iwnë|LTranslit=p’orjaṙowt’iwn
2	հաստատեց	հաստատել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hastatec’|LTranslit=hastatel
3	թէ	թէ	SCONJ	_	_	5	mark	_	Translit=t’ē|LTranslit=t’ē
4	միշտ	միշտ	ADV	_	_	5	advmod:emph	_	Translit=mišt|LTranslit=mišt
5	ոսկի	ոսկի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	2	ccomp	_	Translit=oski|LTranslit=oski
6	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
7	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 6 ccomp color:blue
1	Կը	կը	AUX	_	Aspect=Imp|Mood=Ind	2	aux	_	Translit=Kë|LTranslit=kë
2	զգաս	զգալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=zgas|LTranslit=zgal
3	որ	որ	SCONJ	_	_	6	mark	_	Translit=or|LTranslit=or
4	մարդիկ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	6	nsubj	_	Translit=mardik|LTranslit=mard
5	իրար	իրար	PRON	_	Case=Acc|Number=Plur|PronType=Rcp	6	obj	_	Translit=irar|LTranslit=irar
6	կապուած	կապուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	2	ccomp	_	Translit=kapowaç|LTranslit=kapowil
7	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=en|LTranslit=em
~~~

Such clausal complements may be finite or nonfinite. However, if the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is [xcomp]().

~~~ conllu
# visual-style 4 6 ccomp color:blue
1	հոս	հոս	ADV	_	Deixis=Prox|PronType=Dem	2	advmod	_	Translit=hos|LTranslit=hos
2	ըլլալ	ըլլալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	csubj	_	Translit=ëllal|LTranslit=ëllal
3	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=kë|LTranslit=kë
4	նշանակէ	նշանակել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=nšanakē|LTranslit=nšanakel
5	մաս	մաս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	compound:lvc	_	Translit=mas|LTranslit=mas
6	կազմել	կազմել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	ccomp	_	Translit=kazmel|LTranslit=kazmel
7	քու	քու	DET	_	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	8	det:poss	_	Translit=k’ow|LTranslit=k’ow
8	միջավայրիդ	միջավայր	NOUN	_	Animacy=Nhum|Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=2	6	obj	_	Translit=miǰavayrid|LTranslit=miǰavayr
~~~

~~~ conllu
# visual-style 3 5 ccomp color:blue
1	յիմարապահներուն	յիմարապահ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	3	iobj	_	Translit=yimarapahnerown|LTranslit=yimarapah
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	30	aux	_	Translit=kë|LTranslit=kë
3	պատուիրէին	պատուիրել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	25	conj	_	Translit=patowirēin|LTranslit=patowirel
4	«	«	PUNCT	_	_	5	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
5	սատկեցնել	սատկեցնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	xcomp	_	Translit=satkec’nel|LTranslit=satkec’nel
6	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	7	det	_	Translit=ayd|LTranslit=ayd
7	շուները	շուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	obj	_	Translit=šownerë|LTranslit=šown|SpaceAfter=No
8	»	»	PUNCT	_	_	5	punct	_	Translit=»|LTranslit=»
~~~

The key difference here is that, while the subject of the infinitive _կազմել_/_kazmel_ “to constitute, form part of” cannot be unambiguously identified with an argument of the higher predicate, in the second sentence the subject of _սատկեցնել_/_satkecʼnel_ can only be _յիմարապահներուն_/_yimarapahnerown_. This is what distinguishes ccomp and xcomp.

Note that in constructions such as _բանն այն է, որ…_/_bann ayn ē, or…_ “the fact is that…”, the complement clause introduced by _որ_/_or_ is analyzed as [acl]() rather than `ccomp`. More generally, `ccomp` is not used with nominal heads, since nominals do not normally take core arguments.
