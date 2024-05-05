---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "en/pos/AUX.html"
---

`AUX` covers auxiliaries, that is, function words which characteristically accompany a main predicate 
in a clause and help convey information such as tense, aspect, and modality.
In English, there is a class of modal auxiliaries (PTB MD), and there are several non-modal auxiliaries as well 
(tagged in PTB as regular verbs: VB, VBP, VBG, VBN, VBD, VBZ). All of these fall under `AUX`.
Clausal negation words and infinitival marker *to* are treated separately: see [PART]().

The list of allowed auxiliaries is [registered with the validator](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_auxiliary.pl?lcode=en).
The following lexemes can be **modal** auxiliaries:
* _can_, _could_, _may_, _might_, _shall_, _should_, _will_, _would_, _must_, _ought_, _need_, _dare_

The following can be **non-modal** auxiliaries:
* _be_, _have_, _do_, and _get_ (we count passive _get_ as an auxiliary)


The prototypical function of an auxiliary word is modifying the main predicate in an [aux](), [aux:pass](), or [cop]() relation.
However, in certain circumstances, a word tagged as `AUX` may assume the status of the main predicate of a clause (promotion).
Auxiliaries can be coordinated but do not normally take modifiers.
See the [syntax overview](/u/overview/syntax.html#the-status-of-function-words) for details.

### Ambiguity with `VERB`

Note that some lexemes are ambiguous between `AUX` and [VERB]().
Both tags are frequent for _have_ and _do_.
_Get_, _need_, and _dare_ are usually tagged [VERB](), but in rare cases act as auxiliaries:

- _The grass <b>got</b> trampled (by the bison)._ [passive]
   * But: _I got it fixed._ [causative] is [VERB]()
- _I <b>have</b> eaten the plums._ [perfect]
   * But: _Now I have to buy some more._ is [VERB]()
- _<b>Need</b> I say more?_
- _You <b>need</b>n't shout._
   * But: _You (don't) need to shout._ is [VERB]()

_Be_ is almost always an `AUX`, whether functioning as a copula, or as a progressive or passive marker.
However, we consider _be_ to be a full [VERB]() when, instead of turning a nonverbal item into a predicate, 
it resembles the lexical verb _exist_, most notably in an existential sentence.

- _We have <b>been</b> naughty._ [copula]
- _We <b>are</b> magicians._ [copula]
- _Magicians <b>are</b> in this act._ [copula]
   * But: [VERB]() in _There are magicians in this act._ [existential]
- _The grass <b>was</b> trampled (by the bison)._ [passive]
- _We <b>are</b> eating cake._ [progressive]

### Morphological Features

Non-modal auxiliaries bear inflectional features like ordinary verbs.
At present, modal auxiliaries have [VerbForm]()`=Fin` as their only feature (though some traditions ascribe them present or past tense).

<!-- Interlanguage links updated Ne 5. května 2024, 18:19:34 CEST -->
