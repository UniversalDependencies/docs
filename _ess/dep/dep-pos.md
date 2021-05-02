---
layout: relation
title:  'dep:pos'
shortdef : 'postural root dependency'
udver: '2'
---

`dep:pos` is used for the relation between a postural root and its postbase for the morpheme-level annotations.

```
...	ingagh-nga-ghpek			...
...	ingagh*(POS)-nga(POS→STATIVE)-[2Sg]	...
"... lying down ..."
```

~~~ conllu
# sent_id = Jacobson.Ch12.gold:3
# text = Sangavek atightughaqsin ingaghngaghpek eflugami?
# gloss = Why are you reading laying on your back on the floor?
# labels = complete-dep anno-hayley
1	Sangavek	sangavek	ADV	_	PronType=Int	2	advmod	_	Analysis=sangavek(WH)|Gloss=why
2-4	atightughaqsin	_	_	_	_	_	_	_	Analysis=atightugh(V)^~(g)aqe(V→V)^[Intrg.Intr.2Sg]|Gloss=are-you-reading?
2	atightugh	atightugh	VERB	_	_	0	root	_	Analysis=atightugh(V)|Gloss=to-read
3	aq	aq	VERB	_	Aspect=Prog|Tense=Pres	2	aux	_	Analysis=~(g)aqe(V→V)|Gloss=to-be-currently-V-ing
4	sin	sin	X	_	Mood=Int|Number[subj]=Sing|Person[subj]=2|Subcat=Intr	3	dep:infl	_	Analysis=[Intrg.Intr.2Sg]
5-7	ingaghngaghpek	_	_	_	_	_	_	_	Analysis=ingagh*(POS)^~fnga(POS→STATIVE)^[2Sg]|Gloss=lying-down
5	ingagh	ingagh	X	_	_	6	dep:pos	_	Analysis=ingagh*(POS)|Gloss=lying-down
6	nga	nga	VERB	_	_	2	advcl	_	Analysis=~fnga(POS→STATIVE)|Gloss=to-be-in-the-R-posture
7	gpek	gpek	X	_	Number[subj]=Sing|Person[subj]=2	6	dep:infl	_	Analysis=[2Sg]
8-9	eflugami	_	_	_	_	_	_	_	Analysis=eflugagh(N)^[Loc.Sg]|Gloss=on-the-floor|SpaceAfter=No
8	efluga	efluga	NOUN	_	_	5	obl	_	Analysis=eflugagh(N)|Gloss=floor
9	mi	mi	X	_	Case=Loc|Number=Sing	8	dep:infl	_	Analysis=[Loc.Sg]
10	?	?	PUNCT	_	_	2	punct	_	Analysis=?
~~~
