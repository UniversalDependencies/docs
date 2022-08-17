---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that modifies the noun.

In Slovene, this relation is typically used for **relative clauses**:

~~~ sdparse
Točno tako je s standardi , ki nastajajo v internetu . \n Exactly like-this is with standards , which emerge on Internet
acl(standardi, nastajajo)
acl(standards, emerge)
~~~

~~~ sdparse
V hiši , v kateri so stanovali , so imeli skupna stranišča .
acl(hiši,stanovali)
~~~

~~~ sdparse
Kaj je tisto , kar bomo z vso odgovornostjo zapustili našim dedičem ?
acl(tisto,zapustili)
~~~

The `acl` relation is currently also used for **optional depicatives**, where the adjective is taken to modify the nominal of which it provides a [secondary predication](https://universaldependencies.org/u/overview/complex-syntax.html#secondary-predicates). However, in line with recent [changes in the general UD guidelines](https://universaldependencies.org/changes.html#optional-depictives), such constructions should be reanalyzed as adverbial clause modifiers ([advcl]()) in the future, as there is no longer a need to distinguish between optional predicatives with (`acl`) and without (`advcl`) overt nominal heads.


~~~ sdparse
Lase je imela pristrižene .
acl(Lase,pristrižene)
obj(imela,Lase)
~~~
~~~ sdparse
Vsa prestrašena je Mrvica stekla po pomoč .
acl(Mrvica,prestrašena)
nsubj(stekla,Mrvica)
~~~
~~~ sdparse
Ponesrečeno žensko so hudo ranjeno odpeljali v UKC .
acl(žensko,ranjeno)
obj(odpeljali,žensko)
~~~
