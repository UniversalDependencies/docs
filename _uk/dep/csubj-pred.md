---
layout: relation
title: 'csubj:pred'
shortdef: 'clausal subject of a secondary predicate (enhanced dependency)'
udver: '2'
---


`csubj:pred` denotes a clausal subject in a secondary predication and is always headed by either [`xcomp:pred`](xcomp-pred.html) or [`advcl:pred`](advcl-pred.html). `csubj:pred` is an [**Enhanced**](http://universaldependencies.org/u/overview/enhanced-syntax.html) dependency. It is not a part of basic syntax tree.

~~~ conllu
# visual-style 3 1 csubj:pred color:blue
1	Працювати	працювати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	2	csubj	3:csubj:pred	LTranslit=praćuvaty|Translit=praćuvaty|Translate=To_work
2	значить	значити	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LTranslit=značyty|SpaceAfter=No|Translit=značyť|Translate=means
3	боротись	боротися	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	2	xcomp:pred	_	LTranslit=borotyśа|Translit=borotyś|Translate=to_fight
4	.	.	PUNCT	U	_	2	punct	_	LTranslit=.|Translit=.

# visual-style 3 1 csubj:pred color:blue
1	To_work	_	_	_	_	2	csubj	3:csubj:pred	_
2	means	_	_	_	_	0	root	_	_
3	to_fight	_	_	_	_	2	xcomp:pred	_	_
4	.	_	_	_	_	0	root	_	_

~~~

For non-clausal cases, there is [`nsubj:pred`](nsubj-pred.html).
<!-- Interlanguage links updated Po lis 14 15:35:20 CET 2022 -->
