---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---


A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The mark is a dependent of the subordinate clause head.

Most subordinate clauses in Turkish are introduced by morphological means.
However, there are also a few words that introduce subordinate clauses,
and should be indicated by `mark` relation.

~~~ sdparse
Okusun diye kitaplar aldım . \n I bought books for him to read .
mark(Okusun, diye)
~~~

~~~ sdparse
Okudum ki öğreneyim . \n I read in order to learn.
mark(öğreneyim, ki)
~~~

~~~ sdparse
Başladın mı ,  gerisi gelir. \n Once you start, the rest would follow
mark(Başladın, mı)
~~~

~~~ sdparse
Okudum da anladım . \n I understood by reading
mark(Okudum, da)
~~~

Following [universal guidlienes](u-dep/case) `mark` 
is also used [adpositions](tr-pos/ADP) that attach to verbal nouns.
For example, although the the adposiotn  _kadar_ below
does not introduce subordination,
but specifies the case of the resulting verbal noun
(the construction is paralel to
_Gül kadar güzel mi?_ "is it as beatiful as a rose",
where ``case`` is used),
``mark`` is used for cross-linguistic compatibility.

~~~ sdparse
Göründüğü kadar güzel mi ? \n Is it as good as it looks?
mark(Göründüğü, kadar)
~~~

``mark`` is also used for a few redundant markers (mostly borrowings),
such as _eğer_ and _şayet_.

~~~ sdparse
Eğer okumazsan , öğrenemezsin \n If you do not read you cannot learn
mark(okumazsan, Eğer)
advcl(öğrenemezsin, okumazsan)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
