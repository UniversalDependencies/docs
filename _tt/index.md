---
layout: base
title:  'Tatar UD'
udver: '2'
---

# UD for Tatar <span class="flagspan"><img class="flag" src="../../flags/svg/RU-TA.svg" /></span>

This is a **work-in-progress** overview of the UD annotation for Tatar.

## Tokenization and Word Segmentation

* In general, words are delimited by white spaces or punctuation,
    Whitespaces or punctuation may appear in some abbreviations
    or numeric expressions.

---

## Morphology

Tatar is an agglutinative language with suffixation, and has a rich inflectional and derivational morphology.
This morphological complexities cause some conflicts with the current UD v2 feature inventory.
For example, a verb's voice can contain more than one values.
To this problem, the treebank temporarily employs a manner proposed by the Turkish treebanks,
and just concatenates the values together in the alphabetical order.

### Tags and Features

This is an overview only. For more detailed discussion and examples,
see the list of [Tatar POS tags](pos/index.html).

* ``PART`` is not currently used in the treebank.
* Negation particle _түгел_ is marked as ``AUX``.
* Copular and modal _иде_ is marked as ``AUX``.
* Non-firsthand evidentiality particle _икән_ is marked as ``AUX``.
* In a certain set of grammaticalized converb construction, the finite verb is marked as ``AUX``.
* There are four main (de)verbal forms, distinguished by the value of the [VerbForm]() feature. They are always tagged as `VERB`:
  * Finite verb `Fin`
  * Participle `Part`
  * Converb `Conv`
  * Infinitive `Inf`
  * Verbal noun `Vnoun`

---

## Syntax

* Subject `nsubj` is typically an actor of the predicate and is marked with a nominative case.
* Object `obj` is typically an undergoer of the transitive predicate and is marked with an accusative case when it is definite, but is not marked (bare form) when it is indefinite.
* Oblique `obl` is an argument that directly modifies the predicate and is marked with dative, locative, ablative, and equative case. Also, time expressions and other adverbial expressions in nominative (e.g., _ике тапкыр_ "two times") are categorized as `obl`. Note that this notion of oblique is rather optimized for UD, and is not precisely the best categorization with regard to descriptive linguistics of Tatar.
* Tatar is a partly zero-copula language; the copula is usually zero in the present tense, but in the past tense it is expressed by means of an auxiliary `AUX` _иде_ and in the future tense a verb `VERB` _бул-_. Note that the latter _бул-_ is tagged as `VERB`, not `AUX`, and the relation from nominal or adjectival predicate is `xcomp`, though this needs cross-linguistic discussions in detail.

### Relations Overview

* The following relation subtypes are currently used in Tatar:
  * [compound:lvc]()

However, more relation subtypes are considered to be used in later versions, such as:
  * `advmod:emph`
  * `nmod:poss`
  * `obl:tmod`

---

## Treebanks

There is [one](../treebanks/tt-comparison.html) Tatar UD treebank:

  * [Tatar-NMCTT](../treebanks/tt_nmctt/index.html)

---