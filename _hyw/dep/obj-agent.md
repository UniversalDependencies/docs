---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction, the `obj:agent` relation attaches the content verb to his agent, when the latter is the syntactic object of the sentence
(this initial agent has been demoted and became the object of the causative construction).
For example, in the following sentence, _իրաւունք_ and _արդարութիւն_ are the semantic agents of the causative construction _իշխել տալ_/_išxel tal_ 'to allow to reign' (_իրաւունքն ու արդարութիւնը իշխեցին_/_irawownk’n ow ardarowt’iwnë išxec’in_ 'Right and justice reigned.').
Note that synthetic causatives derived from middle verbs are treated as regular active verbs rather than causative verbs; therefore, the `obj:agent` relation is not used with them.

~~~ conllu
# visual-style 4 7 obj:agent color:blue
1	կարելի	կարելի	ADJ	_	_	0	root	_	Translit=kareli|LTranslit=kareli
2	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	1	aux	_	Translit=piti|LTranslit=piti
3	ըլլայ	ըլլալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ëllay|LTranslit=ëllal
4	իրաւունքն	իրաւունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	obj:agent	_	Translit=irawownk’n|LTranslit=irawownk’
5	ու	ու	CCONJ	_	_	6	cc	_	Translit=ow|LTranslit=ow
6	Արդարութիւնը	արդարութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	4	conj	_	Translit=Ardarowt’iwnë|LTranslit=ardarowt’iwn
7	իշխել	իշխել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	1	csubj	_	Translit=išxel|LTranslit=išxel
8	տալ	տալ	AUX	_	Polarity=Pos|VerbForm=Inf|Voice=Cau	7	aux:caus	_	Translit=tal|LTranslit=tal
9	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	7	obl	_	Translit=Hayastani|LTranslit=Hayastan
10	մէջ	մէջ	ADP	_	AdpType=Post	9	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation.
<!-- Interlanguage links updated St 6. května 2026, 20:47:55 CEST -->
