---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase that is the syntactic subject of a clause; in Western Armenian, the phrase is in the nominative [Case]().
See [csubj]() for clausal subjects.
See [nsubj:pass](), [csubj:pass](), and [nsubj:caus]() for subjects that are not proto-agent arguments due to valency-changing operations.
The governor of the `nsubj` relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun (including a noun marked by a preposition).

~~~ conllu
# visual-style 3 1 nsubj color:blue
1	Գնաճը	գնաճ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	3	nsubj	_	Translit=Gnač̣ë|LTranslit=gnač̣
2	գործնականօրէն	գործնականօրէն	ADV	_	_	3	advmod	_	Translit=gorçnakanòrēn|LTranslit=gorçnakanòrēn
3	հասած	հասնիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=hasaç|LTranslit=hasnil
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em
5	40	40	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	Translit=40|LTranslit=40
6	տոկոսի	տոկոս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	iobj	_	Translit=tokosi|LTranslit=tokos|SpaceAfter=No
7	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 3 4 nsubj color:blue
1	Թատրոնի	թատրոն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	xcomp	_	Translit=T’atroni|LTranslit=t’atron
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=kë|LTranslit=kë
3	վերածուի	վերածուիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=veraçowi|LTranslit=veraçowil
4	ամէն	ամէն	DET	_	ExtPos=PRON|PronType=Tot	3	nsubj	_	Translit=amēn|LTranslit=amēn
5	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind	4	fixed	_	Translit=inč|LTranslit=inč|SpaceAfter=No
6	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:22 CEST -->
