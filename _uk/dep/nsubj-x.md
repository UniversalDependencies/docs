---
layout: relation
title: 'nsubj:x'
shortdef: 'controlling subject (enhanced dependency)'
udver: '2'
---

`nsubj:x` is an Enhanced dependency which distinguishes subjects of controlled verbs as described in _Controlled/raised subjects_ section of the Enhanced Dependencies [documentation](http://universaldependencies.org/u/overview/enhanced-syntax.html) and in [`xcomp`](../../u/dep/xcomp.html). This does not cover cases when `xcomp` is used for secondary predication, for which there is a separate [`xcomp:sp`](xcomp-sp.html) accompanied by [`nsubj:sp`](nsubj-sp.html).

~~~ conllu
# visual-style 4 1 nsubj:x color:blue
1	Вінстон	він	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	4:nsubj:x	LTranslit=vin|Translit=vin
2	не	не	PART	_	Polarity=Neg	3	advmod	_	LTranslit=ne|Translit=ne
3	звик	звикнути	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	LTranslit=zvyknuty|Translit=zvyk
4	писати	писати	VERB	_	Aspect=Imp|VerbForm=Inf	3	xcomp	_	LTranslit=pysaty|Translit=pysaty
5	рукою	рука	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	obl	_	LTranslit=ruka|SpaceAfter=No|Translit=ruky
6	.	.	PUNCT	_	_	3	punct	_	LTranslit=.|Translit=.

# visual-style 4 1 nsubj:x color:blue
1	Winston 	_	_	_	_	3	nsubj	4:nsubj:x	_
2	not	_	_	_	_	0	root	_	_
3	got-used	_	_	_	_	0	root	_	_
4	to-write	_	_	_	_	3	xcomp	_	_
5	by-hand	_	_	_	_	0	root	_	_
6	.	_	_	_	_	0	root	_	_

~~~

~~~ conllu
# visual-style 3 2 nsubj:x color:blue
1	Прошу	просити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	тебе	ти	PRON	_	Animacy=Anim|Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	3:nsubj:x	_
3	лишитись	лишитися	VERB	_	Aspect=Perf|Reverse=Yes|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

# visual-style 3 2 nsubj:x color:blue
1	I-ask	_	_	_	_	0	root	_	_
2	you	_	_	_	_	1	obj	3:nsubj:x	_
3	to-stay	_	_	_	_	1	xcomp	_	_
4	.	_	_	_	_	1	punct	_	_

~~~

### Naming

This relation is sometimes called `nsubj:xsubj` (like in [Schuster and Manning, 2016](https://nlp.stanford.edu/pubs/schuster2016enhanced.pdf)) as a legacy from times when `xsubj` was a separate relation.

<!-- `nsubj:x` is used when the controlling subject is overt. -->

<!-- For related discussions, see issues [#567](https://github.com/UniversalDependencies/docs/issues/567) and [#568](https://github.com/UniversalDependencies/docs/issues/568). -->

 <!-- If the subject is not overt but is deducible from the form of the verb, there is no `nsubj:x`. -->
<!-- Interlanguage links updated St lis 3 20:59:02 CET 2021 -->
