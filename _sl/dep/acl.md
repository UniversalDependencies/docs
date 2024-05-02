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
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:14 CET -->
