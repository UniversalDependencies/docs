---
layout: relation
title: 'flat:vv'
shortdef: 'serial verbs'
udver: '2'
---

Serial verbs in Classical Chinese are flat multiword expressions (MWEs) made of continuous verb-verb constructions. `flat:vv` is used for exocentric (headless) MWEs of verbs.

~~~ conllu
# visual-style 2 3 flat:vv	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	予	予	PRON	n,代名詞,人称,他	Person=1|PronType=Prs	2	nsubj	_	Gloss=[1PRON]|SpaceAfter=No
2	忖	忖	VERB	v,動詞,行為,態度	_	0	root	_	Gloss=ponder|SpaceAfter=No
3	度	度	VERB	v,動詞,行為,態度	_	2	flat:vv	_	Gloss=measure|SpaceAfter=No
4	之	之	PRON	n,代名詞,人称,止格	Person=3|PronType=Prs	2	obj	_	Gloss=[3PRON]|SpaceAfter=No
~~~

