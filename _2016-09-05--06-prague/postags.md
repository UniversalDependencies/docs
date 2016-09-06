---
layout: base
title:  'POS tags'
---

# Part-of-speech tags in UD v2

Tentative conclusion for part-of-speech tags:
We recommend keeping PROPN and PART.

## Rename CONJ to CCONJ

We propose to rename the `CONJ` tag to `CCONJ` _(coordinating conjunction)_
and thus make it analogous to `SCONJ` _(subordinating conjunction)._
That will hopefully reduce the confusion that we observed in v1:
people have assumed that the `CONJ` tag would correspond to the `conj` relation,
while in fact it usually went with the relation `cc` and practically never with `conj`.

## Borderline between categories

We should move away from completely functional guidelines for part-of-speech tags that make the tag completely predictable from the syntactic function.
In addition to the obvious argument that such guidelines make (some) tags uninformative, they also make it harder to find interesting cross-lingual differences.
For example, language X allows words of category A to have syntactic function b, but language Y doesn’t.

We admit that there are ambiguous words that cannot be tagged without considering the context.
However, we prefer distinctions based on word form, dictionary and *prevailing* syntactic behavior.
We should avoid the extreme where (almost) all ambiguities between two categories are resolved
solely by syntactic structure.
We have identified two such extremes in the v1 guidelines:

  * Pronouns vs. determiners. Here the current definition of `PRON` and `DET` should be loosened.
    It will be possible in many languages to enumerate words in both classes, and preferably
    the lists should be based on morphological properties and prevailing syntactic function,
    rather than the actual context in each sentence.
    The functional approach is not banned though, if there is no better way (reportedly Turkic languages).
    See below for more details.
  * Main verbs vs. auxiliary verbs. In many languages, (some of) the auxiliary verbs may also
    be used as main verbs. Their form usually does not differ, so the `AUX` tag can only be
    inferred from the syntactic relation `aux`.
    There is no reasonable solution similar to the `PRON`/`DET` proposal, therefore we propose
    remove the `AUX` tag from v2.