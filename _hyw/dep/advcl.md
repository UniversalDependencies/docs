---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 6 12 advcl color:blue
1	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	4	det:poss	_	Translit=ir|LTranslit=ir
2	չորս	չորս	NUM	_	NumForm=Word|NumType=Card	4	nummod	_	Translit=čors|LTranslit=čors
3	հազար	հազար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	flat	_	Translit=hazar|LTranslit=hazar
4	ղրուշը	ղրուշ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obj	_	Translit=ġrowšë|LTranslit=ġrowš
5	կու	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kow|LTranslit=kë
6	տար	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=tar|LTranslit=tal
7	իրեն	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Emp	6	iobj	_	Translit=iren|LTranslit=ink’|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
9	եթէ	եթէ	SCONJ	_	_	12	mark	_	Translit=et’ē|LTranslit=et’ē
10	զինքը	ինք	PRON	_	Case=Acc|Number=Sing|Person[psor]=3|PronType=Emp	12	obj	_	Translit=zink’ë|LTranslit=ink’
11	կնութեան	կնութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	12	compound:lvc	_	Translit=knowt’ean|LTranslit=knowt’iwn
12	առնէր	առնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	6	advcl	_	Translit=aṙnēr|LTranslit=aṙnel|SpaceAfter=No
~~~

~~~ conllu
# visual-style 4 3 advcl color:blue
1	Մեքենագրուհին	մեքենագրուհի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=Mek’enagrowhin|LTranslit=mek’enagrowhi
2	ուսերը	ուս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	obj	_	Translit=owserë|LTranslit=ows
3	շարժելով	շարժել	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	advcl	_	Translit=šarželov|LTranslit=šaržel
4	ժպտեցաւ	ժպտիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=žptec’aw|LTranslit=žptil
5	ու	ու	CCONJ	_	_	6	cc	_	Translit=ow|LTranslit=ow
6	անցաւ	անցնիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	4	conj	_	Translit=anc’aw|LTranslit=anc’nil
7	աշխատանքին	աշխատանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	6	obj	_	Translit=ašxatank’in|LTranslit=ašxatank’|SpaceAfter=No
8	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

## Optional Depictives

This relation is also used for optional depictive adjectives, where the adjective is introduced in clause structure independently of the nominal it describes (contrast: [acl]() if the adjective is an adnominal predicate). The depictive adjective is treated as an adverbial clause modifier of the higher clause. The adjective also provides a secondary predication, where the nominal predicand may or may not be overt; if it is overt, the secondary predication can be represented with an enhanced dependency. See [xcomp]() for further discussion of resultatives and depictives.

~~~ conllu
# visual-style 4 2 advcl color:blue
1	Ամէնը	ամէնը	PRON	_	Case=Nom|PronType=Tot	4	nsubj	_	Translit=Amēnë|LTranslit=amēnë
2	երջանիկ	երջանիկ	ADJ	_	Degree=Pos	4	advcl	_	Translit=erǰanik|LTranslit=erǰanik
3	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=kë|LTranslit=kë
4	ժպտէին	ժպտել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=žptēin|LTranslit=žptel
~~~

*երջանիկ*/*erǰanik* “happy” describes the persons smiling, not the manner of smiling—but is still taken to modify the verb.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:28 CEST -->
