---
layout: relation
title:  'nmod:npmod'
shortdef: 'noun phrase as nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which captures the cases where something syntactically a noun phrase is used as a nominal modifier in a sentence.

~~~ conllu
# visual-style 2 4 nmod:npmod color:blue
text = Ամէն կողմ շլացուցիչ սպիտակութիւն։ \n ...
1	Ամէն	ամէն	DET	_	PronType=Tot	2	det	_	Translit=Amēn|LTranslit=amēn
2	կողմ	կողմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nmod:npmod	_	Translit=koġm|LTranslit=koġm
3	շլացուցիչ	շլացուցիչ	ADJ	_	Degree=Pos	4	amod	_	Translit=šlac’owc’ič|LTranslit=šlac’owc’ič
4	սպիտակութիւն	սպիտակութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	0	root	_	Translit=spitakowt’iwn|LTranslit=spitakowt’iwn|SpaceAfter=No
5	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
text = Հրաւիրեալներէն հազիւ մէկ երկուքը գիտէին այդ հանգամանքը։ \n ...
# visual-style 1 3 nmod:npmod color:blue
1	Հրաւիրեալներէն	հրաւիրեալ	NOUN	_	Animacy=Hum|Case=Abl|Definite=Def|Number=Plur	3	nmod:npmod	_	Translit=Hrawirealnerēn|LTranslit=hrawireal
2	հազիւ	հազիւ	ADV	_	_	3	advmod:emph	_	Translit=haziw|LTranslit=haziw
3	մէկ	մէկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	Translit=mēk|LTranslit=mēk
4	երկուքը	երկուք	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	3	flat:range	_	Translit=erkowk’ë|LTranslit=erkowk’
5	գիտէին	գիտեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=gitēin|LTranslit=gitem
6	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	7	det	_	Translit=ayd|LTranslit=ayd
7	հանգամանքը	հանգամանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	obj	_	Translit=hangamank’ë|LTranslit=hangamank’|SpaceAfter=No
8	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.
~~~

In conjunction with the [case]() relation, `nmod:npmod` provides a uniform analysis:

~~~ conllu
# visual-style 4 7 nmod:npmod color:blue
text =  Համբուրեց զայն, աչքին մէջ արցունքէ կաթիլով մը: \n ...
1	Համբուրեց	համբուրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=Hambowrec’|LTranslit=hambowrel
2	զայն	ան	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	1	obj	_	Translit=zayn|LTranslit=an|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	աչքին	աչք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	nmod:npmod	_	Translit=ačk’in|LTranslit=ačk’
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ
6	արցունքէ	արցունք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	7	nmod	_	Translit=arc’ownk’ē|LTranslit=arc’ownk’
7	կաթիլով	կաթիլ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	1	obl	_	Translit=kat’ilov|LTranslit=kat’il
8	մը	մը	DET	_	PronType=Art	7	det	_	Translit=më|LTranslit=më|SpaceAfter=No
9	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
