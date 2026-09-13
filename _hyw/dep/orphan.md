---
layout: relation
title: 'orphan'
shortdef: 'orphan in ellipsis'
udver: '2'
---

The `orphan` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis) where simple promotion would result in unnatural and misleading dependency relation (in the case of gapping and stripping, where a predicational or verbal head gets elided).

~~~ conllu
# visual-style 7 8 orphan color:blue
1	Մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	det:poss	_	Translit=Mer|LTranslit=menk’
2	շրթները	շուրթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	Translit=šrt’nerë|LTranslit=šowrt’
3	մաքուր	մաքուր	ADJ	_	Degree=Pos	0	root	_	Translit=mak’owr|LTranslit=mak’owr
4	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=en|LTranslit=em
5	ու	ու	CCONJ	_	_	7	cc	_	Translit=ow|LTranslit=ow
6	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=mer|LTranslit=menk’
7	թաթիկները	թաթիկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur|Style=Expr	3	conj	_	Translit=t’at’iknerë|LTranslit=t’at’ik
8	անմեղ	անմեղ	ADJ	_	Degree=Pos	7	orphan	_	Translit=anmeġ|LTranslit=anmeġ|SpaceAfter=No
9	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~

In this example...
<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
