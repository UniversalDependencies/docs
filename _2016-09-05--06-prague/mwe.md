---
layout: base
title:  'Multiword Expressions in UD v2'
---

# Multiword Expressions in UD v2

Since UD does not allow "words with spaces" (but see a partly new proposal under [word segmentation](word-segmentation.html)), even completely fixed multiword expressions must be annotated with (dummy) dependency relations. To improve annotation consistency, we propose the following changes for v2:

* Rename [u-dep/mwe]() to **fixed** and make clear that this should only be used for completely fixed expressions
* Change the direction of arrows (right-to-left instead of left-to-right) for consistency with other non-dependency relations (see [semantic categories](semantic-categories.html))

## Rename mwe to fixed

It seems that the label `mwe` (multiword expression) has led to a lot of confusion. It was never intended for multiword expressions like "kick the bucket", or Fr. "pomme de terre" (potato). It has always been restricted to the *fixed expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf), excluding any relations in scope of [u-dep/name]() or [u-dep/compound](). The label `fixed` might reflect this fact better.

The proposed change is therefore to change the label `mwe` (multiword expression) to `fixed`, and making the guidelines more restrictive (namely, [fixed](u-dep/mwe) is used **only** for completely fixed grammaticized expressions that behave like function words or short adverbials).

## Change arrow direction

For consistency with other relations (see [semantic categories](semantic-categories.html) ), we also suggest changing the direction of the arrows. We will keep a flat structure but all the words in the expression will modify the last word (instead of the first one). For example:

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
