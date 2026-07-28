---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction, the `obj:agent` relation attaches the content verb to his agent, when the latter is the syntactic object of the sentence
(this initial agent has been demoted and became the object of the causative construction).
For example, in the following sentence, _այրկանն_/_ayrkann_ is the semantic agent of the causative construction _ապաշխարել տալ_/_apašxarel tal_ 'to make repent' (_այրիկն ապաշխարէ_/_ayrikn apašxarē_ 'the man repents').
Note that synthetic causatives derived from middle verbs are treated as regular active verbs rather than causative verbs; therefore, the `obj:agent` relation is not used with them.

~~~ conllu
# visual-style 4 6 obj:agent color:blue
1	Բայց	բայց	CCONJ	_	_	4	cc	_	_
2	տարի	տարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	_
3	մի	մի	DET	_	PronType=Art	2	det	_	_
4	ապաշխարել	ապաշխարել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Mid	0	root	_	_
5	տան	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	4	aux:caus	_	_
6	այրկանն	այրիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	obj:agent	_	_
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:28 CEST -->
