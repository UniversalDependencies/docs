---
layout: relation
title:  'dep:mark'
shortdef : 'derivational marker dependency'
udver: '2'
---

`dep:mark` is used for marker-like derivational suffixes such as @~fna(V→V) (in order to V) for the morpheme-level annotations.

```
...	negh-na-lu-ku				...
...	negh(V)-@~fna(V→V)-[Sbrd.Trns]-[_.3Sg]	...
"... in order to eat it ..."
```

~~~ conllu
# sent_id = Jacobson.Ch16.gold:8
# text = Amaa aagken tagimalghii neghnaluku nefkuuraq.
# gloss = The wolf over there came to me in order to eat the dried meat.
# labels = complete-dep anno-hayley
1	Amaa	amaa	NOUN	_	Case=Abs|Number=Sing	3	nsubj	_	Analysis=amaa(N)^[Abs.Sg]|Gloss=the-wolf
2	aagken	aagken	ADV	_	Case=Abl	3	obl	_	Analysis=aagken(DEM.ADV.Abl_Mod)|Gloss=over-there
3-5	tagimalghii	_	_	_	_	_	_	_	Analysis=tagi(V)^@~:(i/u)ma(V→V)^[Ptcp.Intr]^[3Sg]|Gloss=it-came-to-me
3	tagi	tagi	VERB	_	_	0	root	_	Analysis=tagi(V)|Gloss=to-come
4	ma	ma	VERB	_	Tense=Past	3	dep:aux	_	Analysis=@~:(i/u)ma(V→V)|Gloss=to-have-V-ed
5	lghii	lghii	X	_	Number[subj]=Sing|Person[subj]=3	4	dep:infl	_	Analysis=[Ptcp.Intr]^[3Sg]
6-9	neghnaluku	_	_	_	_	_	_	_	Analysis=negh(V)^@~fna(V→V)^[Sbrd.Trns]^[_.3Sg]|Gloss=in-order-to-eat-it
6	negh	negh	VERB	_	_	3	advcl	_	Analysis=negh(V)|Gloss=to-eat
7	na	na	VERB	_	_	6	dep:mark	_	Analysis=@~fna(V→V)|Gloss=in-order-to-V
8	lu	lu	X	_	Mood=Sbr|Subcat=Tran	7	dep:infl	_	Analysis=[Sbrd.Trns]
9	ku	ku	X	_	Number[obj]=Sing|Person[obj]=3	7	dep:infl	_	Analysis=[_.3Sg]
10	nefkuuraq	nefkuuraq	NOUN	_	Case=Abs|Number=Sing	6	obj	_	Analysis=nefkuuragh(N)^[Abs.Sg]|Gloss=the-dried-meat|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	Analysis=.
~~~
