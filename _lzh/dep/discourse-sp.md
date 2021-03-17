---
layout: relation
title: 'discourse:sp'
shortdef: 'sentence particle'
udver: '2'
---

Sentence particles, also commonly known as "sentence-final particles" in Chinese linguistics, occur at the end of clauses and sentences in Classical Chinese and have a wide range of functions including modifying the modality of a sentence or its proposition, and expressing discourse and pragmatic information. They are linked to the main predicate as `discourse:sp` dependents (we place them under an extension of [`discourse`]() under a loose interpretation of "discourse").

Common sentence-final particles in Classical Chinese include: 也, 哉, 已, 兮, 乎, 歟, 矣, 焉.

~~~ conllu
# visual-style 5 7 discourse:sp	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# text = 賢者亦樂此乎
1	賢	賢	VERB	v,動詞,描写,態度	Degree=Pos	2	amod	_	Gloss=worthy|SpaceAfter=No
2	者	者	PART	p,助詞,提示,*	_	4	nsubj	_	Gloss=that-which|SpaceAfter=No
3	亦	亦	ADV	v,副詞,頻度,重複	_	4	advmod	_	Gloss=also|SpaceAfter=No
4	樂	樂	VERB	v,動詞,行為,態度	_	0	root	_	Gloss=enjoy|SpaceAfter=No
5	此	此	PRON	n,代名詞,指示,*	PronType=Dem	4	obj	_	Gloss=this|SpaceAfter=No
6	乎	乎	PART	p,助詞,句末,*	_	4	discourse:sp	_	Gloss=[Q]|SpaceAfter=No
~~~

