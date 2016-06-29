---
layout: base
title:  'Core Dependents in UD v2'
---

# Core Dependents in UD v2

The distinction between core dependents and the rest is fundamental to the whole taxonomy.
Having specific and cross-linguistically consistent guidelines for core dependents is therefore
crucial for putting the whole enterprise on a solid footing. This involves clarifying the
treatment of (among other things) double objects, reflexives, expletives, copula constructions
and valency-changing operations.
Relevant reports from the Uppsala meeting includes:
[copula](../2015-08-23-uppsala/copula.html),
[clitics](../2015-08-23-uppsala/clitics.html).

## What are core arguments?

The UD guidelines depend heavily on the notion of core arguments, yet they lack a good definition of core arguments. What are the tests to distinguish a core argument from a non-core one? We say that we avoid distinguishing arguments from adjuncts because the borderline is fuzzy and semantic role labeling is difficult. Distinguishing core arguments from other arguments and adjuncts is supposed to be easier, but without the definition it isn't.

In English UD, arguments that use prepositions are considered _oblique_, i.e. non-core. As a result, _John_ is indirect object (`iobj`) in _I gave John the book_ but only a modifier (`nmod`) in _I gave the book to John_, although the two sentences do not differ syntactically. The mere presence of a preposition cannot destroy the “coreness” of the argument, definitely not cross-linguistically. (After all we like to claim that adpositions and case affixes are the same thing, don't we?) So in other UD treebanks we may encounter objects with prepositions.

Dan's note: Natalia told me that the idea was that a core argument must use a coding strategy that is never used for adjuncts in the given language. I find it too restrictive. It may be acceptable in English (although I'm not particularly happy with the _John_ inconsistency mentioned above). But in other languages it would wipe out core arguments completely. In Czech, even the accusative case (which is arguably the most widely used coding of a direct object) would be excluded because it is also used for temporal adjuncts. Not to mention that the Czech grammar denotes noun phrases in various other morphological cases (with or without prepositions) as objects.

If there is no good, exact and cross-linguistically applicable rule (and I would be surprised if it existed), maybe we can increase the degree of freedom here and come up with a set of less sharply described principles and recommendations? For example, if the most natural way of querying the dependent is using interrogative adverbs such as _where, when, how, why,_ the dependent is adjunct and thus `nmod` or `advmod` (or `advcl`). If the query uses interrogative pronoun (_who, whom, what, on what_) AND an adverb is not suitable, we probably have a (core?) argument, i.e. `nsubj`, `dobj`, `iobj`. Hence, _on Saturday_ would be `nmod` in _I'm leaving on Saturday_ (when?) but `dobj` in _I rely on Saturday_ (what on?) It is quite likely that there are tough border cases in all languages. But I like this approach better than the vacuum we have now, and definitely better than banning prepositions.

## Valency-changing operations

* Joakim's take on valency-changing operations: The current guidelines distinguish [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() from [u-dep/nsubj](), [u-dep/csubj]() and [u-dep/aux]() to capture the fact that the subject of a passive has a different role than the subject of the corresponding active verb. While I can clearly see the usefulness of this convention for many IE-type practical applications, it seems to go against the general spirit in UD of annotating syntactic functions rather than semantic roles. A possible counterargument would be that passive is a grammaticalized process and therefore part of syntax, but the counter-counterargument to this is that the same should then be true of causative, antipassive, etc. in many languages. First of all, I don't think we want a proliferation of grammatical relations like "dobjcaus", etc. Secondly, I think the lexicalist stance in UD actually speaks in favor of a lexicalist account of these operations (as in LFG, for example). My proposal is therefore that we get rid of [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() and instead treat all valency-changing operations as derivations (which we have agreed to do for Turkish causatives, for example). If we want to capture the grammatically regular shifts in valency, we can do so (optionally) in the enhanced dependencies. See examples for passive in English and causative in Japanese below. (I am unsure what relations should be used for the "deep" relations, so I just put "dobj:prom" [for "promoted dobj"] and "nsubj:dem" [for "demoted nsubj" for now].) An alternative approach would be to make [u-dep/nsubjpass]() a language-specific subtype (thus, "nsubj:pass"). In this way, treebanks that don't make this distinction (and I think we have a significant number) would be legitimate, and languages that don't have a passive wouldn't have to worry about it. Languages that have a grammaticalized causative could conceivable add "dobj:caus", etc. This is in many ways a simpler solution, but I am afraid we would be overloading the language-specific relations with too many distinctions.

<div id="s1a" class="sd-parse">
The cat chased the dog .
nsubj(chased, cat)
dobj(chased, dog)
</div>

<div id="s1b" class="sd-parse">
The dog was chased by the cat .
nsubj(chased, dog)
nmod(chased, cat)
dobj:prom(chased, dog)
nsubj:dem(chased, cat)

</div>
<div id="s1c" class="sd-parse">
The dog was chased from the room .
nsubj(chased, dog)
dobj:prom(chased, dog)
nmod(chased, room)
</div>

<div id="s2" class="sd-parse">
Kanako ga Ziroo o ikaseta . \n Kanako made Ziro go .
nsubj(ikaseta, Kanako)
dobj(ikaseta, Ziroo)
nsubj:dem(ikaseta, Ziroo)
</div>




