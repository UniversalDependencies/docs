---
layout: relation
title:  'dep:emo'
shortdef : 'emotional root dependency'
udver: '2'
---

`dep:emo` is used for the relation between an emotional root and its postbase for the morpheme-level annotations.

~~~ conllu
# sent_id = Jacobson.Ch13.gold:4
# text = Quginakanka uyviinghet kaatfagilgata.
# gloss = I am spooked out from the evil-doing shamans before they arrive.
# labels = complete-dep anno-hayley
1-4	Quginakanka	_	_	_	_	_	_	_	Analysis=quginag(EMO)^~–ke(EMO→V)^[Ind.Trns]^[1Sg.3Pl]|Gloss=I-am-spooked-from-them-
1	qugina	qugina	X	_	_	2	dep:emo	_	Analysis=quginag(EMO)|Gloss=spooked
2	k	k	VERB	_	_	0	root	_	Analysis=~–ke(EMO→V)|Gloss=to-feel-R-toward-object
3	a	a	X	_	Mood=Ind|Subcat=Tran	2	dep:infl	_	Analysis=[Ind.Trns]
4	nka	nka	X	_	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1	2	dep:infl	_	Analysis=[1Sg.3Pl]
5-6	uyviinghet	_	_	_	_	_	_	_	Analysis=uyviinegh(N)^[Abs.Pl]|Gloss=the-evil-doing-shamans
5	uyviingh	uyviingh	NOUN	_	_	2	obj	_	Analysis=uyviinegh(N)|Gloss=shaman-who-can-work-evil
6	et	et	X	_	Case=Abs|Number=Plur	5	dep:infl	_	Analysis=[Abs.Pl]
7-9	kaatfagilgata	_	_	_	_	_	_	_	Analysis=kaate(V)^[Prec.Intr]^[3Pl]|Gloss=before-they-arrive|SpaceAfter=No
7	kaat	kaat	VERB	_	_	2	advcl	_	Analysis=kaate(V)|Gloss=to-arrive
8	fagilga	fagilga	X	_	Mood=Prc|Subcat=Intr	7	dep:infl	_	Analysis=[Prec.Intr]
9	ta	ta	X	_	Number[subj]=Plur|Person[subj]=3	7	dep:infl	_	Analysis=[3Pl]
10	.	.	PUNCT	_	_	2	punct	_	Analysis=.
~~~
