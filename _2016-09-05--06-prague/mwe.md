---
layout: base
title:  'Multiword Expressions in UD v2'
---

# Multiword Expressions in UD v2

The proposed change is to change the label `mwe` (multiword expressions) to `fixed`, keeping the guidelines as they are (namely, [u/mwe](`fixed') is used for certain fixed grammaticized expressions that behave like function words or short adverbials).

It seems that the label `mwe` (multiword expressions) led to a lot of confusion. It was never intended for multiword expressions like "kick the bucket", or Fr. "pommme de terre" (potato). It has always been restricted to the *fixed expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf), excluding any relations in scope of [u/name]() or [u/compound](). The label `fixed` might reflect this fact better.

For consistency with other relations (see ), we also suggest changing the direction of the arrows. We will keep a flat structure but all the words in the expression will modify the last one (instead of the first one). For example:

~~~ sdparse
I like dogs as well as cats
fixed(as-6, well-5)
fixed(as-6, as-4)
~~~

~~~ sdparse
He cried because of you
fixed(of, because)
~~~

~~~ sdparse
Je préfère prendre un dessert plutôt qu' une entrée \n I prefer getting a dessert rather than an appetizer
fixed(qu', plutôt)
~~~
