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

~~~ sdparse
նա ի զուր էր այդքան անհանգստանում
goeswith(ի, զուր)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:17 CEST -->
