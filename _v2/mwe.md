---
layout: base
title:  'Multiword Expressions in UD v2'
udver: '2'
---

# Multiword Expressions in UD v2

Since UD does not allow "words with spaces" (but see a partly new proposal under [word segmentation](word-segmentation.html)), even completely fixed multiword expressions must be annotated with (dummy) dependency relations. To improve annotation consistency, we propose the following change for v2:

* Rename [u-dep/mwe]() to **fixed** and make clear that this should only be used for completely fixed expressions
<!--* Change the direction of arrows (right-to-left instead of left-to-right) for this relation as well as the other non-dependency relations [u-dep/name]() and [u-dep/foreign]() (see also [semantic categories](semantic-categories.html))-->
* Rename [u-dep/name]() to **flat** and extend its use to semi-fixed multiword expressions that do not have a clear syntactic head. (See [semantic categories](semantic-categories.html).)
* Add a new subtype of [u-dep/compound]() for handling serial verb constructions in analogy with particle verbs
and grammticized light verb constructions.

## Rename mwe to fixed

It seems that the label `mwe` (multiword expression) has led to a lot of confusion. It was never intended for multiword expressions like "kick the bucket", or Fr. "pomme de terre" (potato). It has always been restricted to the *fixed expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf), excluding any relations in scope of [u-dep/name]() or [u-dep/compound](). The label `fixed` reflects this fact better.

The proposed change is therefore to change the label `mwe` (multiword expression) to `fixed`, and making the guidelines more restrictive (namely, [fixed](u-dep/mwe) is used **only** for completely fixed grammaticized expressions that behave like function words or short adverbials).

## Serial verb constructions

Serial verb constructions are typologically important and inadequately covered by UD v1. In the absence of a deeper analysis of this class of expressions, which may be worth a special universal relation, we propose to treat them as a subtype of [compound](u-dep/compound) and use `compound:svc` in analogy with the existing subtypes `compound:prt` for particle verbs and `compound:lvc` for grammaticized light verb constructions. 

<!--## Change arrow direction

For non-dependency relations, it was (more or less) arbitrarily decided in v1 to draw arrows from left to right out of the first word. With hindsight, a more harmonious choice for most languages would have been to instead draw arrows from right to left out of the last word. We propose to make this change for `fixed` (currently [u-dep/mwe]()), [u-dep/foreign]() and `flat` (currently [u-dep/name]()). Examples:

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

~~~ sdparse
She said : ez esan lasai
parataxis(said, lasai)
foreign(lasai, esan)
foreign(lasai, ez)
~~~

~~~ sdparse
Usain Bolt won the race
nsubj(won, Bolt)
flat(Bolt, Usain)
~~~

However we do not extend this change to the [u-dep/reparandum]() relation. In repairs, the material to the right will be the "correct" material, and it would seem strange to have something that the speaker of the utterance wants to discard as a direct dependent of the other words in the sentence while the corrected word is buried down in the dependency graph.
As noted by Gerdes & Kahane (2016), there are of course borderline cases between elaboration and disfluency such as *I saw a room, a bright room, a room with red lights*, but it doesn't seem wrong to us to take the last element *a room with red lights* as the governor of *a room* and *a bright room*.-->


