---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

A relative clause modifier of a noun is a relative clause that modifies the noun. The `acl:relcl` relation points from the noun that is modified to the head of the relative clause.

~~~ conllu
# visual-style 1 8 acl:relcl color:blue
1	խանութ	խանութ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	Translit=xanowt’|LTranslit=xanowt’
2	մը	մը	DET	_	PronType=Art	7	det	_	Translit=më|LTranslit=më
3	կար	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kar|LTranslit=kam|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
5	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	8	nsubj	_	Translit=or|LTranslit=or
6	քասեթներ	քասեթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur|Style=Coll	8	obj	_	Translit=k’aset’ner|LTranslit=k’aset’
7	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	8	aux	_	Translit=kë|LTranslit=kë
8	ծախէր	ծախել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	1	acl:relcl	_	Translit=çaxēr|LTranslit=çaxel
~~~
