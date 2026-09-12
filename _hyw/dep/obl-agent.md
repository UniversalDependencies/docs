---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs. They are mainly expressed by a noun in genitive/dative with the following postposition _կողմից_. Note that in Armenian agents of passive verbs may also stand in ablative, rarely in instrumental and dative cases.

~~~ conllu
# visual-style 3 9 obl:agent color:blue
1	Ծրագիրը	ծրագիր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj:pass	_	Translit=Çragirë|LTranslit=çragir
2	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
3	իրագործուի	իրագործել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=iragorçowi|LTranslit=iragorçel
4	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	3	obl	_	Translit=Hayastani|LTranslit=Hayastan
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
7	Գալուստ	Գալուստ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	9	nmod	_	Translit=Galowst|LTranslit=Galowst
8	Կիւլպէնկեան	Կիւլպէնկեան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	7	flat:name	_	Translit=Kiwlpēnkean|LTranslit=Kiwlpēnkean
9	Հիմնարկութեան	հիմնարկութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	obl:agent	_	Translit=Himnarkowt’ean|LTranslit=himnarkowt’iwn
10	կողմէ	կողմէ	ADP	_	AdpType=Post	9	case	_	Translit=koġmē|LTranslit=koġmē
~~~

~~~ conllu
# visual-style 3 5 obl:agent color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	վերջինները	վերջին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	22	nsubj	_	Translit=verǰinnerë|LTranslit=verǰin
3	կանչուած	կանչել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	2	acl	_	Translit=kančowaç|LTranslit=kančel
4	իրենց	իրենց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	5	det:poss	_	Translit=irenc’|LTranslit=irenc’
5	հայրերէն	հայր	NOUN	_	Animacy=Hum|Case=Abl|Definite=Def|Number=Plur	3	obl:agent	_	Translit=hayrerēn|LTranslit=hayr
~~~

~~~ conllu
# visual-style 3 5 obl:agent color:blue
1	անցեալի	անցեալ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	2	nmod:poss	_	Translit=anc’eali|LTranslit=anc’eal
2	վերադարձի	վերադարձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=veradarji|LTranslit=veradarj
3	մերժումով	մերժում	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	5	obl:agent	_	Translit=meržowmov|LTranslit=meržowm
4	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	5	aux	_	Translit=kë|LTranslit=kë
5	պայմանաւորուի	պայմանաւորել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=paymanaworowi|LTranslit=paymanaworel
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:31 CEST -->
