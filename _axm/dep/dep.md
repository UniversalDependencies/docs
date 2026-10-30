---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a more precise dependency relation between two words cannot be determined. This may be due to an unusual grammatical construction, a limitation of the annotation software, a parser error, or an unresolved long-distance dependency.

In Middle Armenian, the `dep` relation is also used in certain cases where the standard dependency analysis would result in crossing dependencies.

The accusative preposition _զ_/_z_ is written together with the noun it marks. When the noun is modified by an adjective or a pronoun, the preposition is attached orthographically to the modifier instead. In UD annotation, _զ_ is segmented as a separate token and normally attached to the head noun with the `case` relation, regardless of its orthographic position. However, when a noun has coordinated adjectival or pronominal modifiers, each preceded by _զ_, attaching all instances of the preposition to the head noun may result in crossing dependencies. To avoid this, the preposition preceding the second modifier is attached to that modifier with the `dep` relation rather than to the head noun with `case`.

The following example illustrates this convention:

~~~ conllu
# visual-style 5 4 dep color:blue
1	Զ	զ	ADP	_	AdpType=Prep	8	case	_	SpaceAfter=No|Translit=Z|LTranslit=z
2	երջանիկ	երջանիկ	ADJ	_	Degree=Pos	8	amod	_	Translit=erǰanik|LTranslit=erǰanik
3	եւ	եւ	CCONJ	_	_	5	cc	_	Translit=ew|LTranslit=ew
4	զ	զ	ADP	_	AdpType=Prep	5	dep	_	SpaceAfter=No|Translit=z|LTranslit=z
5	հանճարեղ	հանճարեղ	ADJ	_	_	2	conj	_	Translit=hančareġ|LTranslit=hančareġ
6	նորընծա	նորընծայ	ADJ	_	Style=Var	8	amod	_	Translit=norënça|LTranslit=norënçay
7	սուրբ	սուրբ	ADJ	_	_	8	amod	_	Translit=sowrb|LTranslit=sowrb
8	րաբունին	րաբունի	NOUN	_	Case=Nom|Definite=Def|Number=Sing	0	root	_	SpaceAfter=No|Translit=rabownin|LTranslit=rabowni

~~~

For more details see the [tokenization page](http://universaldependencies.org/hy/tokenization.html).

<!-- Interlanguage links updated Út 30. června 2026, 10:59:58 CEST -->
