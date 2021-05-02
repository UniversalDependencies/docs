---
layout: relation
title:  'dep:emo'
shortdef : 'emotional root dependency'
udver: '2'
---

`dep:emo` is used for the relation between an emotional root and its postbase for the morpheme-level annotations.

```
Qugina-k-a-nka					...
quginag(EMO)–ke(EMO→V)-[Ind.Trns]-[1Sg.3Pl]	...
"I am spooked out from them."
```
~~~ conllu
# sent_id = Jacobson.Ch13.gold:4
# text = Quginakanka
# gloss = I am spooked out from them.
# labels = complete-dep anno-hayley
1-4	Quginakanka	_	_	_	_	_	_	_	Analysis=quginag(EMO)^~–ke(EMO→V)^[Ind.Trns]^[1Sg.3Pl]|Gloss=I-am-spooked-from-them-
1	qugina	qugina	X	_	_	2	dep:emo	_	Analysis=quginag(EMO)|Gloss=spooked
2	k	k	VERB	_	_	0	root	_	Analysis=~–ke(EMO→V)|Gloss=to-feel-R-toward-object
3	a	a	X	_	Mood=Ind|Subcat=Tran	2	dep:infl	_	Analysis=[Ind.Trns]
4	nka	nka	X	_	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1	2	dep:infl	_	Analysis=[1Sg.3Pl]
~~~
