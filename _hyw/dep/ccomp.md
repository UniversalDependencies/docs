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
# visual-style 10 9 ccomp color:blue
1	Օր	օր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obl	_	Translit=Òr|LTranslit=òr
2	մը	մը	DET	_	PronType=Art	1	det	_	Translit=më|LTranslit=më
3	տղուն	տղայ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	nmod:poss	_	Translit=tġown|LTranslit=tġay
4	մէկը	մէկ	PRON	_	Case=Nom|Definite=Def|PronType=Ind	5	nsubj	_	Translit=mēkë|LTranslit=mēk
5	կապուեցաւ	կապուիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kapowec’aw|LTranslit=kapowil
6	անոր	ան	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	5	obl	_	Translit=anor|LTranslit=an
7	ու	ու	CCONJ	_	_	10	cc	_	Translit=ow|LTranslit=ow
8	հետը	հետ	ADP	_	AdpType=Post|Person[psor]=3	9	obl	_	Translit=hetë|LTranslit=het
9	ամուսնանալ	ամուսնանալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	10	ccomp	_	Translit=amowsnanal|LTranslit=amowsnanal
10	առաջարկեց	առաջարկել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	Translit=aṙaǰarkec’|LTranslit=aṙaǰarkel|SpaceAfter=No
11	.	.	PUNCT	_	_	19	punct	_	Translit=.|LTranslit=.
~~~


~~~ conllu
# visual-style 10 9 ccomp color:blue
1	յիմարապահներուն	յիմարապահ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	3	iobj	_	Translit=yimarapahnerown|LTranslit=yimarapah
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	30	aux	_	Translit=kë|LTranslit=kë
3	պատուիրէին	պատուիրել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	25	conj	_	Translit=patowirēin|LTranslit=patowirel
4	«	«	PUNCT	_	_	5	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
5	սատկեցնել	սատկեցնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	xcomp	_	Translit=satkec’nel|LTranslit=satkec’nel
6	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	7	det	_	Translit=ayd|LTranslit=ayd
7	շուները	շուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	obj	_	Translit=šownerë|LTranslit=šown|SpaceAfter=No
8	»	»	PUNCT	_	_	5	punct	_	Translit=»|LTranslit=»
~~~

The key difference here is that, while it is possible to interpret the first sentence to mean that the boss will not be doing any digging, in the second sentence it is clear that the subject of **digging** can only be **we**. This is what distinguishes `ccomp` and `xcomp`.

Note that in constructions such as _բանն այն է, որ…_/_bann ayn ē, or…_ “the fact is that…”, the complement clause introduced by _որ_/_or_ is analyzed as [acl]() rather than `ccomp`. More generally, `ccomp` is not used with nominal heads, since nominals do not normally take core arguments.
