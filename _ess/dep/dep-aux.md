---
layout: relation
title:  'dep:aux'
shortdef : 'derivational auxiliary dependency'
udver: '2'
---

`dep:aux` is used for auxiliary-like derivational suffixes such as @lleqe(V→V) (will V) and ~(g)aqe(V→V) (to be currently V-ing) for the morpheme-level annotations.

~~~ conllu
# sent_id = Jacobson.Ch7.gold:11
# text = Esghaghlleqamken.
# gloss = I will see you.
# labels = complete-dep anno-hayley
1-4	Esghaghlleqamken	_	_	_	_	_	_	_	Analysis=esghagh(V)^@lleqe(V→V)^[Ind.Trns]^[1Sg.2Sg]|Gloss=I-will-see-you|SpaceAfter=No
1	esghagh	esghagh	VERB	_	_	0	root	_	Analysis=esghagh(V)|Gloss=to-see
2	lleq	lleq	VERB	_	Tense=Fut	1	dep:aux	_	Analysis=@lleqe(V→V)|Gloss=will-V
3	a	a	X	_	Mood=Ind|Subcat=Tran	2	dep:infl	_	Analysis=[Ind.Trns]
4	mken	mken	X	_	Number[obj]=Sing|Number[subj]=Dual,Plur,Sing|Person[obj]=2|Person[subj]=1	2	dep:infl	_	Analysis=[1Sg.2Sg]
5	.	.	PUNCT	_	_	1	punct	_	Analysis=.
~~~
