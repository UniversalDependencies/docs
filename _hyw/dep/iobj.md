---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of exchange:

~~~ conllu
# visual-style 4 3 iobj color:blue
1	Աստուածաշունչը	Աստուածաշունչ	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Pro|Number=Sing	2	obj	_	Translit=Astowaçašownčë|LTranslit=Astowaçašownč
2	գրող	գրել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	3	acl	_	Translit=groġ|LTranslit=grel
3	անձերուն	անձ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	4	iobj	_	Translit=anjerown|LTranslit=anj
4	շնորհուած	շնորհել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=šnorhowaç|LTranslit=šnorhel
5	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=en|LTranslit=em
6	յայտնութիւններ	յայտնութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	4	nsubj:pass	_	Translit=yaytnowt’iwnner|LTranslit=yaytnowt’iwn|SpaceAfter=No
7	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.
~~~


If there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy as described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).
For example, _բացատրել_/_bacʼatrel_ “to explain” may occur with [obj](), [iobj](), or both:

~~~ conllu
# visual-style 3 5 obj color:blue
1	Եւ	եւ	CCONJ	_	_	3	cc	_	Translit=EW|LTranslit=ew
2	Թորգոմ	Թորգոմ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	nsubj	_	Translit=T’orgom|LTranslit=T’orgom
3	բացատրեց	բացատրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=bac’atrec’|LTranslit=bac’atrel
4	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	5	det:poss	_	Translit=ir|LTranslit=ir
5	կացութիւնը	կացութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=kac’owt’iwnë|LTranslit=kac’owt’iwn|SpaceAfter=No
6	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.


~~~ conllu
# visual-style 6 5 obj color:blue
# visual-style 6 7 iobj color:blue
1	Ինչպէս	ինչպէս	ADV	_	PronType=Int	3	advmod	_	Translit=Inčpēs|LTranslit=inčpēs
2	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	3	aux	_	Translit=piti|LTranslit=piti
3	կարենամ	կարենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=karenam|LTranslit=karenal
4	այս	այս	DET	_	Deixis=Prox|PronType=Dem	5	det	_	Translit=ays|LTranslit=ays
5	ամբողջը	ամբողջը	PRON	_	Case=Nom|PronType=Tot	6	obj	_	Translit=amboġǰë|LTranslit=amboġǰë
6	բացատրել	բացատրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	xcomp	_	Translit=bac’atrel|LTranslit=bac’atrel
7	ուսանողներու	ուսանող	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	6	iobj	_	Translit=owsanoġnerow|LTranslit=owsanoġ|SpaceAfter=No
~~~

When there is a [clausal complement](ccomp), then it is regarded as a “clausal direct object” and an object nominal will be an `iobj`, parallel to the simple ditransitive case:

~~~ conllu
# visual-style 5 8 ccomp color:blue
# visual-style 5 2 iobj color:blue
1	Եթէ	եթէ	SCONJ	_	_	5	mark	_	Translit=Et’ē|LTranslit=et’ē
2	բարեկամի	բարեկամ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	5	iobj	_	Translit=barekami|LTranslit=barekam
3	մը	մը	DET	_	PronType=Art	2	det	_	Translit=më|LTranslit=më
4	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	5	aux	_	Translit=piti|LTranslit=piti
5	բացատրենք	բացատրել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=bac’atrenk’|LTranslit=bac’atrel
6	թէ	թէ	SCONJ	_	_	8	mark	_	Translit=t’ē|LTranslit=t’ē
7	որքան	որքան	ADV	_	PronType=Exc	8	advmod	_	Translit=ork’an|LTranslit=ork’an
8	բազմազբաղ	բազմազբաղ	ADJ	_	Degree=Pos	5	ccomp	_	Translit=bazmazbaġ|LTranslit=bazmazbaġ
9	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Translit=enk’|LTranslit=em
10	այս	այս	DET	_	Deixis=Prox|PronType=Dem	11	det	_	Translit=ays|LTranslit=ays
11	օրերուն	օր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	8	obl	_	Translit=òrerown|LTranslit=òr|
~~~


If there are two or more objects, one of them should be [obj]() and the others should be `iobj`. In such cases it is necessary to decide what is the most directly affected object _(patient)._

<!-- Interlanguage links updated Út 30. června 2026, 11:00:12 CEST -->
