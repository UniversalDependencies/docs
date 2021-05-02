---
layout: relation
title:  'dep:cop'
shortdef : 'derivational copular dependency'
udver: '2'
---

`dep:cop` is used for the copular-like derivational suffix, ~:(ng)u(N→V) (to be N), for the morpheme-level annotations.

```
Qikmi-i-gu-q					.
qikmigh(N)-~:(ng)u(N→V)-[Ind.Intr]-[3Sg]	.
"It is a dog."
```

~~~ conllu
# sent_id = Jacobson.Ch4.gold:23
# text = Qikmiiguq.
# gloss = It is a dog.
# labels = complete-dep anno-hayley
1-4	Qikmiiguq	_	_	_	_	_	_	_	Analysis=qikmigh(N)^~:(ng)u(N→V)^[Ind.Intr]^[3Sg]|Gloss=it-is-a-dog|SpaceAfter=No
1	qikmi	qikmi	NOUN	_	_	0	root	_	Analysis=qikmigh(N)|Gloss=dog
2	i	i	VERB	_	_	1	dep:cop	_	Analysis=~:(ng)u(N→V)|Gloss=to-be-N
3	gu	gu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5	.	.	PUNCT	_	_	1	punct	_	Analysis=.
~~~
