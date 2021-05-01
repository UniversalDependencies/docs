---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

The tag `X` is used for inflectional suffixes.

### Examples
```
Kaamg-ek		ifla-a-k				.
kameg(N)-[Abs.Du]	ifla(V)-[Ind.Trns]-[3Sg.3Du]	.
"He/she lost the boots."
```
~~~ conllu
1-2	Kaamgek	_	_	_	_	_	_	_	Analysis=kameg(N)^[Abs.Du]|Gloss=skin-boot
1	Kaamg	kaamg	NOUN	_	_	3	obj	_	Analysis=kameg(N)|Gloss=skin-boot
2	ek	ek	X	_	Case=Abs|Number=Dual	1	dep:infl	_	Analysis=[Abs.Du]
3-5	iflaak	_	_	_	_	_	_	_	Analysis=ifla(V)^[Ind.Trns]^[3Sg.3Du]|Gloss=he-lost-them|SpaceAfter=No
3	ifla	ifla	VERB	_	_	0	root	_	Analysis=ifla(V)|Gloss=to-lose
4	a	a	X	_	Mood=Ind|Subcat=Tran	3	dep:infl	_	Analysis=[Ind.Trns]
5	k	k	X	_	Number[obj]=Dual|Number[subj]=Sing|Person[obj]=3|Person[subj]=3	3	dep:infl	_	Analysis=[3Sg.3Du]
6	.	.	PUNCT	_	_	3	punct	_	Analysis=.
~~~