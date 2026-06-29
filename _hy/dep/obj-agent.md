---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction, the `obj:agent` relation attaches the content verb to his agent, when the latter is the syntactic object of the sentence
(this initial agent has been demoted and became the object of the causative construction).
For example, in the following sentence, _աշակերտին_/_ašakertin_ 'the student(Dat)' is the semantic agent of the analytical causative verb _մտնել տվեց_/_mtnel tvec’_ “caused to enter” (_Աշակերտը մտավ։_/_Ašakertë mtav._ 'The student entered').
This nominal phrase can be pronominalized as follows: _Ուսուցիչը մտնել տվեց նրան դասարան_. The use of the pronoun _նրան_ clearly shows that _աշակերտին_ is the syntactical object of the sentence.
Note that synthetic causatives derived from middle verbs (_մտցրեց_/_mtc’rec’_) are treated as regular active verbs rather than causative verbs; therefore, the `obj:agent` relation is not used with them.

~~~ conllu
# visual-style 2 4 obj:agent color:blue
1	ուսուցիչը	ուսուցիչ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=owsowc’ič|LTranslit=owsowc’ič
2	աշակերտին	աշակերտ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	obj:agent	_	Translit=owsowc’ič|LTranslit=owsowc’ič
3	դասարան	դասարան	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	4	obl	_	Translit=dasaranowm|LTranslit=dasaran
4	մտնել	մտնել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	0	root	_	Translit=mtnel|LTranslit=mtnel
5	տվեց	տալ	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	aux:caus	_	Translit=tvec’|LTranslit=tal
~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation.
<!-- Interlanguage links updated Po 29. června 2026, 17:01:17 CEST -->
