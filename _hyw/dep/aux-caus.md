---
layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation links the infinitive verb (i.e. the governor) and the finite causative [AUX]() _տալ_ “to make” in a causative construction.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will be anotated with an [iobj:agent]() relation.

~~~ conllu
# visual-style 6 7 aux:caus color:blue
1	Բայց	բայց	CCONJ	_	_	6	cc	_	Translit=Bayc’|LTranslit=bayc’
2	ընտանեկան	ընտանեկան	ADJ	_	_	3	amod	_	Translit=ëntanekan|LTranslit=ëntanekan
3	պատճառներով	պատճառ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	6	obl	_	Translit=patč̣aṙnerov|LTranslit=patč̣aṙ
4	մայրս	մայր	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj:caus	_	Translit=mayrs|LTranslit=mayr
5	զինքը	ինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Emp|Style=Coll	6	iobj:agent	_	Translit=zink’ë|LTranslit=ink’
6	բերել	բերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=berel|LTranslit=berel
7	տուած	տալ	AUX	_	Aspect=Perf|Polarity=Pos|VerbForm=Part|Voice=Cau	6	aux:caus	_	Translit=towaç|LTranslit=tal
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=ē|LTranslit=em
9	Կովկասէն	Կովկաս	PROPN	_	Animacy=Nhum|Case=Abl|Definite=Def|NameType=Geo|Number=Sing	6	obl	_	Translit=Kovkasēn|LTranslit=Kovkas|SpaceAfter=No
19	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~

For more details see [specific-syntax](http://universaldependencies.org/hyw/overview/specific-syntax.html).
<!-- Interlanguage links updated Čt lis 12 09:43:14 CET 2020 -->
