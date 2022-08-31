---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that modifies the noun. In Slovene, this relation is typically used for **relative clauses**, as illustrated below.

~~~ sdparse
Točno tako je s standardi , ki nastajajo v internetu . \n Exactly such is with standards which emerge on Internet .
acl(standardi, nastajajo)
acl(standards, emerge)
~~~

~~~ sdparse
V hiši , v kateri so stanovali , so imeli skupna stranišča . \n In the house in which they lived they had shared bathrooms .
acl(hiši,stanovali)
acl(house,lived)
~~~

~~~ sdparse
Kaj je tisto , kar bomo z vso odgovornostjo zapustili našim dedičem ? \n What is it that we will pass on to our heirs ?
acl(tisto,zapustili)
acl(it,pass)
~~~

The `acl` relation is currently also used for **optional depicatives**, where the adjective is taken to modify the nominal of which it provides a [secondary predication](https://universaldependencies.org/u/overview/complex-syntax.html#secondary-predicates). However, in line with recent [changes](https://universaldependencies.org/changes.html#optional-depictives) in the general UD guidelines, such constructions should be reanalyzed as adverbial clause modifiers ([advcl]()) in the future, as there is no longer a need to distinguish between optional predicatives with (`acl`) and without (`advcl`) overt nominal heads.


~~~ sdparse
Lase je imela pristrižene . \n She wore her hair cut short .
acl(Lase,pristrižene)
obj(imela,Lase)
acl(hair,cut)
obj(wore,hair)
~~~
~~~ sdparse
Vsa prestrašena je Mrvica stekla po pomoč . \n All scared Mrvica ran for help .
acl(Mrvica-4,prestrašena)
nsubj(stekla,Mrvica-4)
acl(Mrvica-11,scared)
nsubj(ran,Mrvica-11)
~~~
~~~ sdparse
Ponesrečeno žensko so hudo ranjeno odpeljali v UKC . \n The injured woman they drove to the hospital badly hurt .
acl(žensko,ranjeno)
obj(odpeljali,žensko)
acl(woman,hurt)
obj(drove,woman)
~~~
