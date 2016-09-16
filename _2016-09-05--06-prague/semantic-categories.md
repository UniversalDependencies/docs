---
layout: base
title:  'Semantic Categories in UD v2'
---

# Semantic Categories in UD v2

Some of our current relations (i.e., [u-dep/name]() and [u-dep/neg]() seem to primarily encode semantic distinctions (rather than syntactic). The question is whether we should eliminate these from the annotation scheme and encode the disctinctions with features.

## [u-dep/neg]()
We suggest getting rid of the [u-dep/neg]() relation which is not syntactic. Instead we will use
* ordinary syntactic relations like [u-dep/advmod](), [u-dep/aux](), etc.
* a feature Negative=Neg on the negative word to preserve the information about negation

## [u-dep/name]()
We suggest keeping a distinction for [u-dep/name]() but relabeling the relation as `flat`. The `name` label was another one that led to confusion. It was not intended to be used for all *named entities*, but only for proper nouns constituted of multiple nominal elements. 

The changes proposed are:
* Relabel `name` to `flat` (on the basis that such proper nouns constitued of multiple nominal elements do not have a clear head but are just in a flat structure)
* Include titles in the `flat` expressions
* Make the head the last element of the expression by default. Languages for which a head in the `flat` expression can be identified (because of morphology, such as in Finnish or Czech for instance) are allowed to choose another element as the head.

~~~ sdparse
Hillary Rohdam Clinton
flat(Clinton, Hillary)
flat(Clinton, Rohdam)
~~~

~~~ sdparse
Monsieur Louis Pignon
flat(Pignon, Monsieur)
flat(Pignon, Louis)
~~~

## Changes in the direction of arrows
For consistency, we also suggest changing the head in `fixed` (currently [u-dep/mwe]()) and [u-dep/foreign](). Insteand of having structures in which all the elements depend on the first one, all the elements will depend on the last one.

However we do not extend this change to the [u-dep/reparandum]() relation. In repairs, the material to the right will be the "correct" material, and it would seem strange to have something that the speaker of the utterance wanted to discard as a direct dependent of the other words in the sentence while the corrected word is buried down in the dependency graph.
As noted by Gerdes & Kahane (2016), there are of course borderline cases between elaboration and disfluency such as *I saw a room, a bright room, a room with red lights*, but it doesn't seem wrong to us to take the last element *a room with red ligths* as the governor of *a room* and *a bright room*.


