---
layout: relation
title: 'obl'
shortdef: 'oblique argument or adjunct'
udver: '2'
---

The `obl` relation is used for oblique nominal arguments and adjuncts
of verbs, adjectives or adverbs.
The `obl` relation is further specified
by the [Case](tr-feat/Case) feature or [case]() relation.

Typically, argument with non-accusative case marking are ``obl``.

~~~ conllu
# I read the book on the plane
1	Kitabı	kitap	NOUN	_	Case=Acc	3	obj
2	uçakta	uçak	NOUN	_	Case=Loc	3	obl
3	okudum	oku	VERB	_	Number=Sing|Person=1|Tense=Past	0	root
~~~

~~~ conllu
# I read the book with glasses
1	Kitabı	kitap	NOUN	_	Case=Acc	3	obj
2	gözlükle	gözlük	_	NOUN	Case=Ins	3	obl
3	okudum	oku	VERB	_	Number=Sing|Person=1|Tense=Past	0	root
~~~

~~~ conllu
# I read the book out of curiosity
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	obj
2	meraktan	merak	NOUN	NOUN	Case=Abl	3	obl
3	okudum	oku	VERB	VERB	Number=Sing|Person=1|Tense=Past	0	root
~~~

~~~ conllu
# I read the book to the children
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	obj
2	çocuklara	çocuk	NOUN	NOUN	Case=Dat	3	obl
3	okudum	oku	VERB	VERB	Number=Sing|Person=1|Tense=Past	0	root
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
