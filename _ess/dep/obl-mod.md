---
layout: relation
title:  'obl:mod'
shortdef : 'oblique nominal in the ablative-modalis case'
udver: '2'
---

The `obl:mod` relation is used for a nominal in the ablative-modalis case when it is used as an object of an intransitive verb (an indefinite object).

~~~ conllu
# sent_id = Jacobson.Ch3.gold:6
# text = Ukaziq alinguq kaviighmeng.
# gloss = The rabbit became afraid of foxes.
# labels = complete-dep anno-hayley
1	Ukaziq	ukaziq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=ukazigh(N)^[Abs.Sg]|Gloss=the-hare
2-4	alinguq	_	_	_	_	_	_	_	Analysis=alinge(V)^[Ind.Intr]^[3Sg]|Gloss=it-became-afraid
2	aling	aling	VERB	_	_	0	root	_	Analysis=alinge(V)|Gloss=to-be-afraid
3	u	u	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5-6	kaviighmeng	_	_	_	_	_	_	_	Analysis=kaviigh(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-fox|SpaceAfter=No
5	kaviigh	kaviigh	NOUN	_	_	2	obl:mod	_	Analysis=kaviigh(N)|Gloss=fox
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.
~~~

