---
layout: relation
title:  'nmod:arg'
shortdef : 'nominal modifier used as an argument'
udver: '2'
---

`nmod:arg` is used for a nominal modifier which used as an argument of the following derivational suffix. This relation is used for the morpheme level annotations only.

```
...	pagungha-ligh-naq-a-qa						.
...	pagunghagh*(N)-ligh(N→V)-@~fnaqe(V→V)-[Ind.Trns]-[1Sg.3Sg]	.
"... I am going to put crowberries in it."
```

~~~ conllu
# sent_id = Jacobson.Ch11.gold:1
# text = Naagpek sagnegha pagunghalighnaqaqa.
# gloss = I am going to add crowberries in your mother's bowl.
# labels = complete-dep anno-hayley
1-2	Naagpek	_	_	_	_	_	_	_	Analysis=naa(N)^[Rel.2SgPoss.Sg]|Gloss=your-mother's
1	naa	naa	NOUN	_	_	3	nmod	_	Analysis=naa(N)|Gloss=mother
2	gpek	gpek	X	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2	1	dep:infl	_	Analysis=[Rel.2SgPoss.Sg]
3-4	sagnegha	_	_	_	_	_	_	_	Analysis=sagnegh(N)^[Abs.3SgPoss.Sg]|Gloss=her-bowl
3	sagnegh	sagnegh	NOUN	_	_	6	obj	_	Analysis=sagnegh(N)|Gloss=bowl
4	a	a	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	dep:infl	_	Analysis=[Abs.3SgPoss.Sg]
5-9	pagunghalighnaqaqa	_	_	_	_	_	_	_	Analysis=pagunghagh*(N)^–ligh(N→V)^@~fnaqe(V→V)^[Ind.Trns]^[1Sg.3Sg]|Gloss=I-am-going-to-put-crowberries-in-it|SpaceAfter=No
5	pagungha	pagungha	NOUN	_	_	6	nmod:arg	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	ligh	ligh	VERB	_	_	0	root	_	Analysis=–ligh(N→V)|Gloss=to-put-N-in
7	naq	naq	VERB	_	Tense=Fut	6	aux	_	Analysis=@~fnaqe(V→V)|Gloss=to-be-going-to-V
8	a	a	X	_	Mood=Ind|Subcat=Tran	7	dep:infl	_	Analysis=[Ind.Trns]
9	qa	qa	X	_	Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1	7	dep:infl	_	Analysis=[1Sg.3Sg]
10	.	.	PUNCT	_	_	6	punct	_	Analysis=.
~~~

