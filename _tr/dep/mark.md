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

``mark`` is also used for some redundant markers (mostly borrowings),
such as _eğer_ and _şayet_.

~~~ sdparse
Eğer okumazsan , öğrenemezsin \n If you do not read you cannot learn
mark(okumazsan, Eğer)
advcl(öğrenemezsin, okumazsan)
~~~

`mark` should not be confused with [case]() relation,
as [adpositions](tr-pos/ADP) can follow a verbal noun or participle.
For example, the adposiotn  _kadar_ below does not introduce subordination,
but specifies the case of the resulting nominal.
Unlike the examples above, the clause can be replaced with a noun,
e.g., _Gül kadar güzel mi?_

~~~ sdparse
Göründüğü kadar güzel mi ? \n Is it as good as it looks?
case(Göründüğü, kadar)
~~~

