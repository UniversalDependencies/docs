---
layout: relation
title: 'fixed'
shortdef: 'fixed'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()).
It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.
Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label.

~~~ sdparse
Marie était malade mais elle est quand même venue . \n Marie was sick but she came anyway.
fixed(quand, même)
advmod(venue, quand)
~~~

~~~ sdparse
Je suis sûre d'avoir vu Paul à Paris alors qu' il est censé être à Dubai ! \n I'm sure I've seen Paul in Paris but he's supposed to be in Dubai!
fixed(alors,qu')
mark(censé,alors)
~~~

_il y a_ corresponds to two frozen expressions: a particular marker of clefting (_il y a trois livres sur la table_) and an adposition (_Paul est arrivé il y a trois jours_).
The first is syntactically regular and is analyzed with regular relations.
The second is syntactically deviant and is analyzed with _fixed_:

~~~ sdparse
Il y a trois livres sur la table. \n There are three books on the table.
expl:subj(a, Il)
iobj(a, y)
~~~

~~~ sdparse
Paul est arrivé il y a trois jours . \n Paul arrived three days ago.
fixed(il, y)
fixed(il, a)
case(jours, il)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:26 CET 2020 -->
