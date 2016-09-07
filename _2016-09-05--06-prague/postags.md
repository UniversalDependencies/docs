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
* [List of open issues with the POS label](http://github.com/UniversalDependencies/docs/issues?q=is%3Aissue%20is%3Aopen%20label%3APOS)

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

There are many pairs of categories with unclear border zones, although not all of them in all languages:

* `NOUN` can be confused with `PROPN`, `PRON`, `ADJ` and some forms of `VERB` (gerunds, infinitives)
* `PROPN` can be confused with `NOUN` and `X` (foreign names)
* `ADJ` can be confused with `DET`, `NUM` (ordinals) and some forms of `VERB` (participles)
* `PRON` can be confused with `DET`, `NUM` (pronominal quantifiers), `ADV` (pronominal adverbs) and possibly `NOUN`
* `DET` can be confused with `PRON`, `NUM` (pronominal quantifiers), `ADV` (pronominal adverbs) and possibly `ADJ`
* `NUM` can be confused with `ADJ` (ordinals), `NOUN` (high-value cardinals, e.g. "million"), `PRON`, `DET` (pronominal quantifiers) and `ADV` (adverbs of degree/quantity, multiplicative numerals like [cs] _sedmkrát_ "seven times" etc.)
* `ADV` can be confused with `ADJ`, `PRON`, `DET` (pronominal adverbs), `NUM` (adverbial numerals and adverbs of degree/quantity) and some forms of `VERB` (transgressives/converbs); furthermore, some are on the border to `ADP`, `SCONJ` and `CCONJ`
* `VERB` can be confused with `AUX` (but we are proposing to remove `AUX`), `NOUN` (gerunds), `ADJ` (participles), `ADV` (transgressives/converbs)
* `ADP` can be confused with `SCONJ`, `ADV`, some secondary prepositions also with `NOUN` and other categories
* `SCONJ` can be confused with `ADP`, `ADV` and `CCONJ`
* `CCONJ` can be confused with `ADV` and `SCONJ`
* `PART` should in theory not be confused with anything because then it should not be `PART`; nevertheless, at least some traditional particles are now `ADP`, `ADV`, `SCONJ` or `CCONJ`, and the particle _not_ would be traditionally `ADV` in some languages
* `INTJ` can sometimes be confused with `NOUN`, `ADJ`, `VERB` or `ADV` if they are used like exclamations; but arguably these could then not be tagged `INTJ`
* `PUNCT` can be confused with `SYM`
* `SYM` can be confused with `PUNCT`
* `X` as a tag for foreign word can be confused with `PROPN` when the word itself is not a proper noun in the foreign language, but is a part of a longer book/movie title

Some pairs are less problematic than others because some categories are functionally more compatible than others.
It is acceptable if `PRON` and `DET` are pre-categorized and distinguished mostly by word list or morphology,
because they can be seen as two subcategories of a broader category of nominals; if a word is classified as `DET`
but it occurs in place of a noun phrase, it can be explained by ellipsis and it we do not have to switch the tag
to `PRON` in such contexts. However, some categories are not compatible and if a word occurs in both, it has to
be taken as two separate lemmas; consequently it has to be disambiguated according to sentence context.
A good example is [en] _that_ and [es] _que_ which can be both a relative pronoun and a subordinating conjunction
(complementizer). We cannot say that all occurrences are either `PRON` or `SCONJ` because a pronoun can
act as a core argument of a predicate, while complementizer cannot. So we have to distinguish the two functions,
although historically the complementizer may actually come from a grammaticalized pronoun.

It would be useful if the proposal for UD v2 also includes a list of category pairs that are considered incompatible
but we did not discuss this in detail in Prague.

## Proposed principles for UD v2

This text could be added to the [morphology overview page](../u/overview/morphology.html), section on POS tags:

* A word's category should be primarily determined by dictionary rather than by context of a particular sentence.
  Syntax still plays an important role, especially in cross-linguistic mapping of same-named categories.
  However, prototypical (expected) syntactic behavior is of more importance than function performed in exceptional contexts.
* Morphological behavior may be a good indicator in some languages.
  If, for example, a language uses distinct inflection patterns for nouns and adjectives, then morphology can be used
  to distinguish these two categories. Exceptions cannot be excluded but they should be really exceptional and well grounded;
  when in doubt, use the category determined by morphology.
* Ambiguous words (belonging to two or more categories) do exist. Sometimes by pure coincidence
  ([en] _the can_ vs. _can = to be able to_). Sometimes the two words are related but differ morphologically
  ([en] _the book(s)_ vs. _to book, booked, booking_).
* Perhaps the most difficult part are ambiguous function words that do not inflect (i.e. morphology does not help us),
  yet they perform two or more _significantly_ different syntactic functions, which we normally associate with different
  parts of speech. The two functions may not be equally frequent but each of them is more frequent than what could be labeled
  as a mere exception (i.e. the _wait for his ‘yes’_ example is exceptional).
  Disambiguating such pairs clearly depends on the context of the given sentence where the word is used.
  This sort of ambiguity should be minimized (because we want to decide as much as possible with dictionary) but it cannot be avoided.
  So how do we know that the difference is “significant enough”?
  One clue is that the word, when translated to another language, gets two different translations with different POS tags
  (e.g. the English _no_ as response interjection, vs. negative determiner).
  Another clue comes from contrasting the UD relations used for the two functions.
  For example, distinguishing `PRON` from `SCONJ` ([en] _that_, [es] _que_, [ru] _что_ / _čto_) is important because pronouns,
  unlike conjunctions, may become core arguments and fill valency slots of verbs.
  Distinguishing `SCONJ` from `ADP`, or `CCONJ` from `ADV` seems less crucial and we can probably
  keep just one POS tag for each such word, based on prototypical usage.

## Revised guidelines for pronominal words

This text could be added to the [morphology overview page](../u/overview/morphology.html), section on POS tags,
and it should also be reflected in the documentation of individual POS tags:

Pronominal words are [pronouns](/u/pos/PRON.html), [determiners](/u/pos/DET.html) (articles and pronominal adjectives),
pronominal [adverbs](/u/pos/ADV.html) _(where, when, how)_, and in traditional grammars of some languages also pronominal [numerals](/u/pos/NUM.html) _(how much)_.

* In most cases it is straightforward to determine whether a word is pronominal (see also the [PronType](/u/feat/PronType.html) feature)
  but the borderline between indefinite determiners and adjectives is slightly fuzzy. Related languages should synchronize the lists of words
  they treat as pronominal. The rest of these guidelines demarcate borders within the pronominal group.
* Pronominal adverbs are tagged `ADV`. Their pronominality is encoded using the `PronType` feature. Their typical syntactic function is to modify verbs.
* Articles _(the, a, an)_ are always tagged `DET`; their `PronType` is `Art`.
* Pronominal numerals (quantifiers) are tagged `DET`; besides `PronType`, they also use the [NumType](/u/feat/NumType.html) feature.
* Words that behave similar to adjectives are `DET`.
  (We understand the `DET` class as pro-adjectives, which is a slightly broader sense than what is usually regarded as determiners in English.
  In particular, it is possible that one nominal is modified by more than one determiner.) Similar behavior means:
  * They are more likely to be used attributively (modifying a noun phrase) than substantively (replacing a noun phrase). They may occur alone, though.
    If they do, it is either because of ellipsis, or because the hypothetical modified noun is something unspecified and general, as in _All [visitors] must pay._
  * Their inflection is similar to that of adjectives, and distinct from nouns. They agree with the nouns they modify.
    Especially the ability to inflect for gender is typical for adjectives and determiners.
    (Gender of nouns is determined lexically and determiners may be required by the grammar to agree with their nouns in gender; therefore they need to inflect for gender.)
* Non-possessive personal, reflexive or reciprocal pronouns are always tagged `PRON`.
* Possessives vary across languages. In some languages the above tests put them in the `DET` category.
  In others, they are more like a normal personal pronoun in a specific case (often the genitive), or a personal pronoun with an adposition; they are tagged `PRON`.
* When the above rules do not help, the category should be based on what the traditional grammar of the language says.
* Ideally, language-specific documentation should list pronominal words and their category. These are all closed classes so it should not be difficult.
