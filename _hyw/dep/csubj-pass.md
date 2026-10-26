---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive clause.

~~~ conllu
# visual-style 4 7 color:blue
1	Բոլոր	բոլոր	DET	_	PronType=Tot	3	det	_	Translit=Bolor|LTranslit=bolor
2	ստորագրած	ստորագրել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	3	acl	_	Translit=storagraç|LTranslit=storagrel
3	եկեղեցականներուն	եկեղեցական	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	4	iobj	_	Translit=ekeġec’akannerown|LTranslit=ekeġec’akan
4	արգիլուած	արգիլել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=argilowaç|LTranslit=argilel
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=ē|LTranslit=em
6	հարցազրոյց	հարցազրոյց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Translit=harc’azroyc’|LTranslit=harc’azroyc’
7	տալ	տալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj:pass	_	Translit=tal|LTranslit=tal
8	կամ	կամ	CCONJ	_	_	10	cc	_	Translit=kam|LTranslit=kam
9	յօդուած	յօդուած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	obj	_	Translit=yòdowaç|LTranslit=yòdowaç
10	տպել	տպել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	conj	_	Translit=tpel|LTranslit=tpel|SpaceAfter=No
11	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 1 9 color:blue
1	Նախատեսուած	նախատեսել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=Naxatesowaç|LTranslit=naxatesel
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Translit=ē|LTranslit=em
3	2023	2023	NUM	_	NumForm=Digit|NumType=Card	9	obl	_	Translit=2023|LTranslit=2023|SpaceAfter=No
4	ին	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Hyph=Yes|Number=Sing	3	dep	_	Translit=in|LTranslit=ë
5	անտուն	անտուն	ADJ	_	_	8	amod	_	Translit=antown|LTranslit=antown
6	եւ	եւ	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
7	անօթեւան	անօթեւան	ADJ	_	_	5	conj	_	Translit=anòt’ewan|LTranslit=anòt’ewan
8	արցախցի	արցախցի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	Translit=arc’axc’i|LTranslit=arc’axc’i
9	չմնայ	մնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	1	csubj:pass	_	Translit=čmnay|LTranslit=mnal|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:57 CEST -->
