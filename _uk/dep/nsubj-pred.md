---
layout: relation
title: 'nsubj:pred'
shortdef: 'subject of a secondary predicate (enhanced dependency)'
udver: '2'
---


`nsubj:pred` denotes a subject in a secondary predication and is always headed by either [`xcomp:pred`](xcomp-pred.html) or [`advcl:pred`](advcl-pred.html). `nsubj:pred` is an [**Enhanced**](http://universaldependencies.org/u/overview/enhanced-syntax.html) dependency. It is not a part of basic syntax tree.

~~~ conllu
#	visual-style 6 2 nsubj:pred color:blue
1	Ці	цей	DET	Pd---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	2	det	_	LTranslit=cej|Translit=Ci
2	землі	земля	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	3	obj	6:nsubj:pred	LTranslit=zemľа|Translit=zemli
3	вважали	вважати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=vvažaty|Translit=vvažaly
4	останнім	останній	ADJ	Afpmsif	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	LTranslit=ostannij|Translit=ostannim
5	нехристиянізованим	нехристиянізований	ADJ	Ap-msif-ep	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	6	amod	_	LTranslit=nechrystyjanizovanyj|Translit=nechrystyjanizovanym
6	закутком	закуток	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	xcomp:pred	_	LTranslit=zakutok|Translit=zakutkom
7	Європи	Європа	PROPN	Npfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	LTranslit=Ěvropa|SpaceAfter=No|Translit=Ěvropy
8	.	.	PUNCT	U	_	3	punct	_	LTranslit=.|Translit=.

#	visual-style 6 2 nsubj:pred color:blue
1	These	_	_	_	_	0	root	_	_
2	lands	_	_	_	_	3	obj	6:nsubj:pred	_
3	they_considered	_	_	_	_	0	root	_	_
4	[the]_last	_	_	_	_	0	root	_	_
5	non_christianized	_	_	_	_	0	root	_	_
6	part	_	_	_	_	3	xcomp:pred	_	_
7	of_Europe	_	_	_	_	0	root	_	_
8	.	_	_	_	_	0	root	_	_

~~~

~~~ conllu
# visual-style 3 1 nsubj:pred color:blue
1	Я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	3:nsubj:pred	LTranslit=ja|Translit=ja
2	пробудився	пробудитися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=probudytyśа|Translit=Probudyvśа
3	голодний	голодний	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	advcl:pred	_	LTranslit=holodnyj|SpaceAfter=No|Translit=holodnyj
4	.	.	PUNCT	U	_	2	punct	_	LTranslit=.|Translit=.

# visual-style 3 1 nsubj:pred color:blue
1	I	_	_	_	_	2	nsubj	3:nsubj:pred	_
2	woke_up	_	_	_	_	0	root	_	_
3	hungry	_	_	_	_	2	advcl:pred	_	_
4	.	_	_	_	_	0	root	_	_

~~~

For clausal cases, there is [`csubj:pred`](csubj-pred.html). The basic subject is [`nsubj`](../../u/dep/nsubj.html).
<!-- Interlanguage links updated Út 9. května 2023, 20:04:24 CEST -->
