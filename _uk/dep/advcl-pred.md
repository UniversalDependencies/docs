---
layout: relation
title: 'advcl:pred'
shortdef: 'optional depictive'
udver: '2'
---

Ukrainian uses the `advcl:pred` relation for optional depictives. See issue [#476](https://github.com/UniversalDependencies/docs/issues/476) for full explanation. The secondary predication is encoded at the Enhanced level with [`nsubj:pred`](nsubj-pred.html)/[`csubj:pred`](csubj-pred.html). See also [`xcomp:pred`](xcomp-pred.html).

~~~ conllu
# visual-style 2 3 advcl:pred color:green
# visual-style 3 1 nsubj:pred color:blue
1	Я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	3:nsubj:pred	LTranslit=ja|Translit=ja
2	пробудився	пробудитися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=probudytyśа|Translit=Probudyvśа
3	голодний	голодний	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	advcl:pred	_	LTranslit=holodnyj|SpaceAfter=No|Translit=holodnyj
4	.	.	PUNCT	U	_	2	punct	_	LTranslit=.|Translit=.

# visual-style 2 3 advcl:pred color:green
# visual-style 3 1 nsubj:pred color:blue
1	I	_	_	_	_	2	nsubj	3:nsubj:pred	_
2	woke_up	_	_	_	_	0	root	_	_
3	hungry	_	_	_	_	2	advcl:pred	_	_
4	.	_	_	_	_	0	root	_	_

~~~
<!-- Interlanguage links updated Po lis 14 15:35:04 CET 2022 -->
