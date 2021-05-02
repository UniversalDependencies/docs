---
layout: relation
title:  'dep:infl'
shortdef : 'inflectional dependency'
udver: '2'
---

`dep:infl` is used for inflectional suffixes for the morpheme-level annotations.

```
Afsengaq-0		negh-tu-q			pagunghagh-meng			.
afsengagh*(N)-[Abs.Sg]	negh(V)-[Ind.Intr]-[3Sg]	pagunghagh*(N)-[Abl_Mod.Sg]	.
"A mouse ate crowberries."
```
~~~ conllu
# sent_id = Jacobson.Ch3.gold:1
# text = Afsengaq neghtuq pagunghaghmeng.
# gloss = A mouse ate crowberries.
# labels = complete-dep anno-hayley
1	Afsengaq	afsengaq	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Analysis=afsengagh*(N)^[Abs.Sg]|Gloss=a-vole
2-4	neghtuq	_	_	_	_	_	_	_	Analysis=negh(V)^[Ind.Intr]^[3Sg]|Gloss=it-ate
2	negh	negh	VERB	_	_	0	root	_	Analysis=negh(V)|Gloss=to-eat
3	tu	tu	X	_	Mood=Ind|Subcat=Intr	2	dep:infl	_	Analysis=[Ind.Intr]
4	q	q	X	_	Number[subj]=Sing|Person[subj]=3	2	dep:infl	_	Analysis=[3Sg]
5-6	pagunghaghmeng	_	_	_	_	_	_	_	Analysis=pagunghagh*(N)^[Abl_Mod.Sg]|Gloss=by-the-means-of-crowberry|SpaceAfter=No
5	pagunghagh	pagunghagh	NOUN	_	_	2	obl:mod	_	Analysis=pagunghagh*(N)|Gloss=crowberry
6	meng	meng	X	_	Case=Abl|Number=Sing	5	dep:infl	_	Analysis=[Abl_Mod.Sg]
7	.	.	PUNCT	_	_	2	punct	_	Analysis=.
~~~
