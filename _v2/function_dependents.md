---
layout: base
title:  'Function Dependents in UD v2'
---

# Function Dependents in UD v2

Crosslinguistic guidelines for the use of the functional labels such as `aux`, `det`, `cop`.
There is currently a lot of variation around this.
Representing lexical heads promotes crosslinguistic parallelism, but only if we can agree on what lexical heads *are*.

**Chris' thoughts on aux:** This is necessarily going to have difficulties. Because of processes of grammaticalization, there are always going to be verbs that are "semi-auxiliaries" or heading in the direction of being "light" verbs or auxiliaries. At best, some languages have clear syntactic tests for what their auxiliaries are. For the goals of maximizing clarity, maximizing cross-linguistic similarity and making it more deterministic how to classify things, I believe that the best practical decision will be to define things like [u-dep/aux]() and [u-dep/cop]() narrowly. That is, classic auxiliaries like _have_, _did_ are the only `aux` and we do not include the class to include all kinds of "light" verbs, such as the light/restructuring/complex predicate verbs of Romance languages with meanings like "begin", "stop", "go", "come", "try", etc. For each language, we still need to come to some practical hard line of when to stop. This is Kim Gerdes' "catastrophe" problem. E.g., for English, I'm tempted to say that the _get_ passive should be called an auxiliary ([u-dep/auxpass]()), but then it is not an auxiliary in the inchoative form where it means roughly "become":

<div id="a1" class="sd-parse">
Kim was arrested
nsubjpass(arrested, Kim)
auxpass(arrested, was)
</div>

<div id="a2" class="sd-parse">
Kim got arrested
nsubjpass(arrested, Kim)
auxpass(arrested, got)
</div>

<div id="a3" class="sd-parse">
Kim got interested in Buddhism
nsubj(got, Kim)
xcomp(got, interested)
case(Buddhism, in)
nmod(interested, Buddhism)
</div>

<div id="a4" class="sd-parse">
Kim became interested in Buddhism
nsubj(became, Kim)
xcomp(became, interested)
case(Buddhism, in)
nmod(interested, Buddhism)
</div>



## Copula

* Has been discussed in Uppsala 2015, see [http://universaldependencies.org/2015-08-23-uppsala/copula.html](http://universaldependencies.org/2015-08-23-uppsala/copula.html)
* The Uppsala solution has been criticized, and a change proposed in #329, see [https://github.com/UniversalDependencies/docs/issues/329](https://github.com/UniversalDependencies/docs/issues/329)

**Chris' thoughts on cop:** Range of predicates that are [u-dep/cop](): Similarly to `aux`, at one point in SD, we started allowing other traditional "copular verbs" to be treated as `cop`, such as _become_ or _appear_. This seemed to end up very problematic for us and our users. So I would argue for treating all such words as content words and using `cop` only for the basic "to be" verb or verbs of a language. Analysis of oblique/adverbial predication with `cop`: I support what @nschneid and @amir-zeldes are proposing in https://github.com/UniversalDependencies/docs/issues/329 and their arguments, which considerably mirror the changes made between SD and UD v1. I think those were improvements. (I've also added a few more comments in that Github issue.)
