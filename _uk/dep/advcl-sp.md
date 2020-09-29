---
layout: relation
title: 'advcl:sp'
shortdef: 'optional depictive'
udver: '2'
---

Ukrainian uses the `advcl:sp` relation for optional depictives. See issue [#476](https://github.com/UniversalDependencies/docs/issues/476) for full explanation. The secondary predication is encoded at the Enhanced level with [`nsubj:sp`](nsubj-sp.html)/[`csubj:sp`](csubj-sp.html). See also [`xcomp:sp`](xcomp-sp.html).

~~~ conllu
# visual-style 2 3 advcl:sp color:green
# visual-style 3 1 nsubj:sp color:blue
1	Я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	3:nsubj:sp	LTranslit=ja|Translit=ja
2	пробудився	пробудитися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=probudytyśа|Translit=Probudyvśа
3	голодний	голодний	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	advcl:sp	_	LTranslit=holodnyj|SpaceAfter=No|Translit=holodnyj
4	.	.	PUNCT	U	_	2	punct	_	LTranslit=.|Translit=.

# visual-style 2 3 advcl:sp color:green
# visual-style 3 1 nsubj:sp color:blue
1	I	_	_	_	_	2	nsubj	3:nsubj:sp	_
2	woke-up	_	_	_	_	0	root	_	_
3	hungry	_	_	_	_	2	advcl:sp	_	_
4	.	_	_	_	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
