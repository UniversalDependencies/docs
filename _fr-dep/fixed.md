---
layout: relation
title: 'fixed'
shortdef: 'fixed'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being flat and compound). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.
Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label.

In FrenchSpoken we try to use the `fixed` relation as little as possible and instead to syntactically analyse as many expression as we can.

However the `fixed` relation is sometimes very useful. For example it enables us to differenciate between the temporal use of _il y a_ (i.e. when _il y a_ works like an adposition) and the other uses of _il y a_:
The _il y a_ that works like an adposition will be annotated with `fixed`:

~~~ sdparse
Paul est arrivé il y a trois jours . \n Paul arrived three days ago.
fixed(il, y)
fixed(il, a)
case(jours, il)
~~~

~~~ sdparse
Il y a trois livres sur la table. \n There are three books on the table.
nsubj:expl(a, Il)
advmod(a, y)
~~~
