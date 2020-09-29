---
layout: relation
title: 'xcomp:sp'
shortdef: 'open clausal complement for secondary predication'
udver: '2'
---

Ukrainian uses the `xcomp:sp` relation to distinguish the cases where `xcomp` is used for [secondary predication](http://universaldependencies.org/u/dep/xcomp.html#secondary-predicates). The secondary predication is encoded at the Enhanced level with [`nsubj:sp`](nsubj-sp.html)/[`csubj:sp`](csubj-sp.html). For optional depictives, see [`advcl:sp`](advcl-sp.html).

~~~ conllu
#	visual-style 6 2 nsubj:sp color:blue
#	visual-style 3 6 xcomp:sp color:green
1	Ці	цей	DET	Pd---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	2	det	_	LTranslit=cej|Translit=Ci
2	землі	земля	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	3	obj	6:nsubj:sp	LTranslit=zemľа|Translit=zemli
3	вважали	вважати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=vvažaty|Translit=vvažaly
4	останнім	останній	ADJ	Afpmsif	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	LTranslit=ostannij|Translit=ostannim
5	нехристиянізованим	нехристиянізований	ADJ	Ap-msif-ep	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	6	amod	_	LTranslit=nechrystyjanizovanyj|Translit=nechrystyjanizovanym
6	закутком	закуток	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	xcomp:sp	_	LTranslit=zakutok|Translit=zakutkom
7	Європи	Європа	PROPN	Npfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	LTranslit=Ěvropa|SpaceAfter=No|Translit=Ěvropy
8	.	.	PUNCT	U	_	3	punct	_	LTranslit=.|Translit=.

#	visual-style 3 6 xcomp:sp color:green
#	visual-style 6 2 nsubj:sp color:blue
1	These	_	_	_	_	0	root	_	_
2	lands	_	_	_	_	3	obj	6:nsubj:sp	_
3	they-considered	_	_	_	_	0	root	_	_
4	[the]-last	_	_	_	_	0	root	_	_
5	non-christianized	_	_	_	_	0	root	_	_
6	part	_	_	_	_	3	xcomp:sp	_	_
7	of-Europe	_	_	_	_	0	root	_	_
8	.	_	_	_	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:38 CEST 2020 -->
