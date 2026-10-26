---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two or more parts of a word that are separated in text that is not well edited.
These parts should be written together as one word according to the ortographic rules of Armenian.
The head is the first or in some sense the _main_ part, the other parts are attached to it with the `goeswith` relation (for consistency, similarly as in [flat](), [fixed]() and [conj]()).

The first part of the word is given the part of speech that the word would have been given if written together, while the later parts of the word are given the POS `X`. Similarly, only the first part can have a lemma and morphological features. And while the annotation of morphological features is optional, if the treebank does have features, then [Typo]()`=Yes` must be used with the `goeswith` head.

Note also that only the last word part may be annotated with `SpaceAfter=No`.

1	դատարանը	դատարան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=dataranë|LTranslit=dataran
2	Պ	պարզել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|Typo=Yes|VerbForm=Fin|Voice=Act	0	root	_	Translit=P|LTranslit=parzel
3	Ա	ա	X	_	_	2	goeswith	_	Translit=A|LTranslit=a
4	Ր	ր	X	_	_	2	goeswith	_	Translit=R|LTranslit=r
5	Զ	զ	X	_	_	2	goeswith	_	Translit=Z|LTranslit=z
6	Ե	ե	X	_	_	2	goeswith	_	Translit=E|LTranslit=e
7	Ց	ց	X	_	_	2	goeswith	_	Translit=C’|LTranslit=c’|SpaceAfter=No
8	.	.	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:12 CEST -->
