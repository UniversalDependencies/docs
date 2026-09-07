---
layout: relation
title: 'det:poss'
shortdef: 'possessive determiner'
udver: '2'
---

Whenever there is a possessive determiner, `det:poss` should be used instead of [det](). All possessive determiners have the feature [Possessive](Poss) defined as `Yes`.

~~~ conllu
# visual-style 2 1 det:poss color:blue
1	Իրենց	իրենց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Emp	2	det:poss	_	Translit=Irenc’|LTranslit=irenc’
2	հարցումներուն	հարցում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	iobj	_	Translit=harc’owmnerown|LTranslit=harc’owm
3	պատասխան	պատասխան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	_	Translit=patasxan|LTranslit=patasxan
4	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=čen|LTranslit=em
5	տրուած	տալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=trowaç|LTranslit=tal
~~~

~~~ conllu
# visual-style 5 4 det:poss color:blue
1	Թերթի	թերթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	obl	_	Translit=T’ert’i|LTranslit=t’ert’
2	միջոցաւ	միջոցաւ	ADP	_	AdpType=Post	1	case	_	Translit=miǰoc’aw|LTranslit=miǰoc’aw
3	հրատարակեցինք	հրատարակել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hratarakec’ink’|LTranslit=hratarakel
4	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp	5	det:poss	_	Translit=ir|LTranslit=ir
5	կոչը	կոչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=kočë|LTranslit=koč
~~~

~~~ conllu
# visual-style 9 5 det:poss color:blue
1	Ու	ու	CCONJ	_	_	4	cc	_	Translit=OW|LTranslit=ow
2	ատելով	ատել	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	advcl	_	Translit=atelov|LTranslit=atel
3	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
4	ոգեկոչէին	ոգեկոչել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=ogekočēin|LTranslit=ogekočel
5	անոնց	անոնց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Prs	9	det:poss	_	Translit=anonc’|LTranslit=anonc’
6	մունջ	մունջ	ADJ	_	_	9	amod	_	Translit=mownǰ|LTranslit=mownǰ
7	ու	ու	CCONJ	_	_	8	cc	_	Translit=ow|LTranslit=ow
8	նկուն	նկուն	ADJ	_	Degree=Pos	6	conj	_	Translit=nkown|LTranslit=nkown
9	նկարը	նկար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	obj	_	Translit=nkarë|LTranslit=nkar
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:02 CEST -->
