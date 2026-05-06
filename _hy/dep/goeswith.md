---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two or more parts of a word that are separated in text that is not well edited.
These parts should be written together as one word according to the ortographic rules of Armenian.
The head is the first or in some sense the _main_ part, the other parts are attached to it with the `goeswith` relation (for consistency, similarly as in [flat](), [fixed]() and [conj]()).

The first part of the word is given the part of speech that the word would have been given if written together,
while the later parts of the word are given the POS `X`. Similarly, only the first part can have a lemma
and morphological features. And while the annotation of morphological features is optional, if the treebank
does have features, then [Typo]()`=Yes` must be used with the `goeswith` head.

Note also that only the last word part may be annotated with `SpaceAfter=No`.

~~~ conllu
# visual-style 4 5 goeswith color:blue
# visual-style 4 6 goeswith color:blue
# visual-style 4 7 goeswith color:blue
# visual-style 4 8 goeswith color:blue
# visual-style 4 9 goeswith color:blue
# visual-style 4 10 goeswith color:blue
1	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	2	nmod:poss	_	Translit=Hayastani|LTranslit=Hayastan
2	Հանրապետության	հանրապետություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=Hanrapetowt’yan|LTranslit=hanrapetowt’yown
3	կառավարությունը	կառավարություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=kaṙavarowt’yownë|LTranslit=kaṙavarowt’yown
4	ո	որոշել	VERB	_	Aspect=Imp|Subcat=Tran|Typo=Yes|VerbForm=Part|Voice=Act	0	root	_	Translit=o|LTranslit=orošel
5	ր	_	X	_	_	4	goeswith	_	Translit=r
6	ո	_	X	_	_	4	goeswith	_	Translit=o
7	շ	_	X	_	_	4	goeswith	_	Translit=š
8	ո	_	X	_	_	4	goeswith	_	Translit=o
9	ւ	_	X	_	_	4	goeswith	_	Translit=w
10	մ	_	X	_	_	4	goeswith	_	Translit=m
11	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
12	.	.	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.

~~~
<!-- Interlanguage links updated St 6. května 2026, 20:47:05 CEST -->
