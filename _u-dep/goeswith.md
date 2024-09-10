---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two or more parts of a word that are separated in text that is not well edited.
These parts should be written together as one word according to the orthographic rules of a given language.
The head is always the first part, the other parts are attached to it with the `goeswith` relation
(for consistency, similarly as in [flat](), [fixed]() and [conj]()).

The first part of the word is given the part of speech that the word would have been given if written together,
while the later parts of the word are given the POS `X`. Similarly, only the first part can have a lemma
and morphological features. And while the annotation of morphological features is optional, if the treebank
does have features, then [Typo]()`=Yes` must be used with the `goeswith` head.

Note also that only the last word part may be annotated with `SpaceAfter=No`.

~~~ sdparse
They come here with/ADP[Typo=Yes] out/X legal permission
goeswith(with-4, out-5)
~~~

~~~ sdparse
never/ADV[Typo=Yes] the/X less/X[SpaceAfter=No] ,
goeswith(never, the)
goeswith(never, less)
~~~

~~~ sdparse
For/VERB[Mood=Imp|Typo=Yes|VerbForm=Fin] get/X that !
goeswith(For, get)
obj(For, that)
punct(For, !)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:16 CEST -->
