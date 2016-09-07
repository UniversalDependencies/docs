---
layout: base
title:  'POS tags'
---

# Part-of-speech tags in UD v2

For related discussion see

* [Morphology overview page](../u/overview/morphology.html) has a section on POS tags
* [Current guidelines for POS tags](../u/pos/index.html)
* [Form vs. function in POS tags](../v2/form_vs_function.html)
* [Issue 159](http://github.com/UniversalDependencies/docs/issues/159) (`PRON` vs. `DET`) and the [Uppsala report on determiners](../2015-08-23-uppsala/determiners.html)
* [Issue 178](http://github.com/UniversalDependencies/docs/issues/178#issuecomment-212822810) (question particles)
* [Issue 237](http://github.com/UniversalDependencies/docs/issues/237) (`ADV` vs. `CONJ`)
* [Issue 275](http://github.com/UniversalDependencies/docs/issues/275) (copula `VERB` vs. `AUX`)

## Rename CONJ to CCONJ

We propose to rename the `CONJ` tag to `CCONJ` _(coordinating conjunction)_
and thus make it analogous to `SCONJ` _(subordinating conjunction)._
That will hopefully reduce the confusion that we observed in v1:
people have assumed that the `CONJ` tag would correspond to the `conj` relation,
while in fact it usually went with the relation `cc` and practically never with `conj`.

## Keep PROPN

We considered removing `PROPN` as a separate POS tag because
1. the motivation to have it is weak in some languages (no grammatical implications except for capital letters);
2. the possibility to say that a language does not have `PROPN` does not really solve anything – these languages indeed have the category and typically will want to use it if it exists, to increase cross-linguistic parallelism;
3. disambiguation from `NOUN` is hard in many languages;
4. it would be better to have phrase-level named entity annotation, which would include non-noun words (adjectives) and nesting.

We decided to keep the tag in v2 because
1. the category has been traditionally distinguished in a significant number of languages and tagsets, and people do not want to lose it there;
2. the reasons above do not seem strong enough to remove it;
3. we are not going to have named entity annotation in UD v2.

## Keep PART but minimize its usage

We considered removing `PART` because it is a very small category, which is defined mostly negatively (it is particle if it is not anything else). We decided to keep it because
1. we would have to take the current particles one-by-one in each language and decide where to put them;
2. in some instances it would still be hard to find a suitable category;
3. which may actually lead to creation of several new and even smaller categories.

However, the lists of particles in individual languages should be reviewed anyways. Language-specific documentation must list all particles in the language, and ideally also explain why they are particles.

Note that the current guidelines say that [en] _not_, [de] _nicht_ etc. are negative particles (but negative determiners like [en] _no_, or negative auxiliary verbs like [cs] _není_ are not particles). This is the only positive part of the current `PART` definition at the language-universal level, because such words were traditionally tagged as adverbs in some languages, and they could be adverbs in the other languages too, had we decided to remove `PART`.

## Remove AUX

For justification see below.

Removing the tag means changing it to `VERB` in data, removing all the `AUX` pages from the documentation, and also remove references to it from other parts of the documentation (probably from `VERB`, `aux` and `auxpass`; quite likely also from elsewhere).

(NB: If this proposal is not approved by the core group, we should consider re-classifying copula verbs as auxiliaries.)

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
    be used as main verbs. Their paradigm may be defective but the forms they have usually do
    not distinguish auxiliary usage from full-verb usage, so the `AUX` tag can only be
    inferred from the syntactic relation `aux`.
    There is no reasonable solution similar to the `PRON`/`DET` proposal, therefore we propose
    to remove the `AUX` tag from v2.
    If it is desirable to keep the morphological distinction in a treebank
    (e.g. because a verb is _only_ auxiliary in a language, and it differs morphologically from normal verbs),
    the language-specific feature `VerbType=Aux` (or `Mod` or `Cop`) can be used, but there will be no dedicated POS tag.

