---
layout: relation
title: 'det:poss'
shortdef: 'possessive determiner'
udver: '2'
---

Whenever there is a possessive determiner, `det:poss` should be used instead of [det](). All possessive determiners have the feature [Possessive](Poss) defined as `Yes`.

~~~ conllu
# visual-style 2 1 det:poss color:blue
1	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	2	det:poss	_	_
2	թոյնքն	թոյն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	_
3	տաք	տաք	ADJ	_	Degree=Pos	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
~~~

~~~ conllu
# visual-style 7 6 det:poss color:blue
1	ծախեն	ծախել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2-3	զինքն	_	_	_	_	_	_	_	_
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	_
3	ինքն	ինք	PRON	_	Case=Acc|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
4	ու	ու	CCONJ	_	_	7	cc	_	_
5-6	զիր	_	_	_	_	_	_	_	_
5	զ	զ	ADP	_	AdpType=Prep	7	case	_	_
6	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss	7	det:poss	_	_
7	տունն	տուն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	3	conj	_	_
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:02 CEST -->
