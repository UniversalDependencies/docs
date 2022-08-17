---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

In Slovene, this relation is typically used for adjectival or relative clauses:

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

The relation is also used for optional depictives. The adjective is taken to modify the nominal of which it provides a secondary predication. In contrast to the obligatory predicatives ([`xcomp`]()), optional depictives can be omitted without the clause becoming ungrammatical, only its meaning changes. In such cases, the adjective is taken to modify the nominal of which it provides a secondary predication.

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

Note that this relation is only used for the annotation of optional depictives with overtly expressed nominals. If the nominal is not explicitely present, the depicative is analyzed as an adverbial clause modifier ([advcl]()).
