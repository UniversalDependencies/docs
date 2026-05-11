---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the three relations for MWE in UD. It is used for exocentric (headless) semi-fixed MWEs like names and dates. It contrasts with [fixed](), 
which applies to completely fixed grammaticized (function word-like) MWEs, and with [compound](), which applies to endocentric (headed) MWEs.

Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the first one using the `flat` label. The assumption is that
these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary.

## Names

In Middle Armenian the [flat:name]() relation as a specialization of `flat` is used to join the first (or middle) and the last name of a person. In general, names are
annotated in a `flat:name`, head-initial structure, in which all words in the name modify the head using the `flat:name` label.
Note, that the titles/honorifics, when immediately following the first noun, are analyzed using the `flat:name` relation. They are treated as a part of the names: (see also [nmod]() and [apposition](appos)):

~~~ conllu
# visual-style 1 2 flat:name color:blue
1	Մխիթար	Մխիթար	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	_
2	Հերացի	Հերացի	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Prs|Number=Sing	1	flat:name	_	_
~~~


## Dates and Complex Numerals

The `flat` relation is also used for numerals and numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers.

~~~ conllu
# visual-style 1 2 flat color:blue
1	հարոյր	հարոյր	NUM	_	NumForm=Word|NumType=Card	0	root	_	_
2	տասնուիաւթն	տասնուիաւթն	NUM	_	NumForm=Word|NumType=Card	1	flat	_	_
~~~

This relation is also used for synonymic or antonymic coordinative compounds. These are analytical constructions where two distinct words combine to form a single semantic unit with a collective or intensified meaning.

~~~ conllu
# visual-style 1 3 flat color:blue
1	ահ	ահ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
2	ու	ու	CCONJ	_	_	3	cc	_	_
3	դող	դող	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	flat	_	_
~~~

~~~ conllu
# visual-style 1 3 flat color:blue
1	չար	չար	ADJ	_	Degree=Pos	0	root	_	_
2	ու	ու	CCONJ	_	_	3	cc	_	_
3	բարի	բարի	ADJ	_	Degree=Pos	1	flat	_	_
~~~

Date expressions which have a very clear syntactic structure, should be annotated with regular dependency relations. In
other cases, they have a flat structure with no clearly discernible head.
<!-- Interlanguage links updated St 6. května 2026, 20:46:54 CEST -->
