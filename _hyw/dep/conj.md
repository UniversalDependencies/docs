---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a coordinating conjunction, such as _եւ_ (and), _կամ_ (or), or by a comma or other punctuation.
We treat coordination asymmetrically.
The head of the relation is the first conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ conllu
# visual-style 1 3 conj color:blue
# visual-style 1 5 conj color:blue
# visual-style 1 9 conj color:blue
1	Բռնարարքներ	բռնարարք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	0	root	_	Translit=Bṙnarark’ner|LTranslit=bṙnarark’|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	ջարդեր	ջարդ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	1	conj	_	Translit=ǰarder|LTranslit=ǰard|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	սպանութիւններ	սպանութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	1	conj	_	Translit=spanowt’iwnner|LTranslit=spanowt’iwn
6	եւ	եւ	CCONJ	_	_	9	cc	_	Translit=ew|LTranslit=ew
7	կանխամտածուած	կանխամտածել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	9	acl	_	Translit=kanxamtaçowaç|LTranslit=kanxamtaçel
8	զանգուածային	զանգուածային	ADJ	_	_	9	amod	_	Translit=zangowaçayin|LTranslit=zangowaçayin
9	սովամահութիւն	սովամահութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	1	conj	_	Translit=sovamahowt’iwn|LTranslit=sovamahowt’iwn|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ conllu
# visual-style 11 14 conj color:blue
# visual-style 11 19 conj color:blue
1	Տարօրինակ	տարօրինակ	ADJ	_	Degree=Pos	4	amod	_	Translit=Taròrinak|LTranslit=taròrinak|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	նոր	նոր	ADJ	_	Degree=Pos	1	conj	_	Translit=nor|LTranslit=nor
4	մտածում	մտածում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=mtaçowm|LTranslit=mtaçowm|SpaceAfter=No
5	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
6	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	11	nsubj	_	Translit=or|LTranslit=or
7	մէկէն	մէկէն	ADV	_	ExtPos=ADV	11	advmod	_	Translit=mēkēn|LTranslit=mēkēn
8	ի	ի	ADP	_	AdpType=Prep	7	fixed	_	Translit=i|LTranslit=i
9	մէկ	մէկ	ADV	_	_	7	fixed	_	Translit=mēk|LTranslit=mēk
10	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	11	aux	_	Translit=kë|LTranslit=kë
11	բուսնի	բուսնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=bowsni|LTranslit=bowsnil|SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	Translit=,|LTranslit=,
13	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	14	aux	_	Translit=kë|LTranslit=kë
14	փայլի	փայլիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	11	conj	_	Translit=p’ayli|LTranslit=p’aylil
15	երկվայրկեան	երկվայրկեան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	obl	_	Translit=erkvayrkean|LTranslit=erkvayrkean
16	մը	մը	DET	_	PronType=Art	15	det	_	Translit=më|LTranslit=më
17	եւ	եւ	CCONJ	_	_	19	cc	_	Translit=ew|LTranslit=ew
18	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	19	aux	_	Translit=kë|LTranslit=kë
19	սուզուի	սուզուիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	11	conj	_	Translit=sowzowi|LTranslit=sowzowil
20	գրքին	գիրք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	nmod:poss	_	Translit=grk’in|LTranslit=girk’
21	խաւարին	խաւար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	19	obl	_	Translit=xawarin|LTranslit=xawar
22	մէջ	մէջ	ADP	_	AdpType=Post	21	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
23	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

Coordination may be _asyndetic_, which means that the coordinating conjunction is omitted. In such cases, conjuncts are typically delimited by commas or other punctuation marks.

~~~ conllu
# visual-style 1 3 conj color:blue
# visual-style 1 5 conj color:blue
# visual-style 1 7 conj color:blue
1	Տարագրութիւն	տարագրութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Taragrowt’iwn|LTranslit=taragrowt’iwn|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	անապատ	անապատ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	conj	_	Translit=anapat|LTranslit=anapat|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	Պոլիս	Պոլիս	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	1	conj	_	Translit=Polis|LTranslit=Polis|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	Փարիզ	Փարիզ	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	1	conj	_	Translit=P’ariz|LTranslit=P’ariz
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:54 CEST -->
