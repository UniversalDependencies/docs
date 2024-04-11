---
layout: base
title:  'Slovenian UD'
udver: '2'
---

# UD for Slovenian <span class="flagspan"><img class="flag" src="../../flags/svg/SI.svg" /></span>

## Tokenization and Word Segmentation

In Slovenian UD treebanks, tokens are generally delimited by whitespace or punctuation, with the following exceptions being treated as single tokens:
  * words with an apostrophe, e.g. *O'Brian*
  * numerical expressions, e.g. *30:00*, *200.000,000*
  * words with hyphens before suffixes, e.g. "OZN-ovski* ("UN-like"), *a-ju* ("to the letter a"), *15-i* ("the 15th")
  * abbreviations without whitespace, e.g. *dr.*

Multiword tokens are not used in Slovenian UD treebanks. This means that fused words, such as bound pronouns (e.g. *name* "on me"), multi-word abbreviations (e.g. *npr.* "for example") and colloquial contractions (e.g. *nauš* "won't"), are currently treated as single tokens.

For more details, see the Slovenian [tokenization](tokenization.html) description page.

## Morphology

### Tags

* Slovenian uses all 17 universal part-of-speech tags.
* With a few exceptions, the UD POS categorization principles are similar to the original [JOS](http://nl.ijs.si/jos/index-en.html) annotation scheme for Slovenian. 
* As a JOS legacy, the [PART]() tag is used for [more than 60 different words](https://universaldependencies.org/treebanks/sl-comparison.html) annotated as JOS particles in the original corpora. Therefore, words, such as _ne_ "no", are currently always tagged as PART regardless whether they are used as modal particles (_Ne motiš se._ "You are not wrong") or as syntactically independent feedback particles (_Ne, motiš se._ "No, you are wrong.").
* The [AUX]() tag is only used for verb *biti* (be), when used as an auxiliary or a copula verb.
* The [DET]() tag is used for JOS pronouns and adverbs that predominantly occurr as nominal premodifiers, regardless of their actual function in context, e.g. *moj* "my", *tak* "such", *ta* "this"; *dosti* "enough", *manj* "less", *veliko* "many", etc.
* Most (de)verbal forms are annotated as [VERB]() or [AUX](), with the exception of adverbial participles ([ADV](), e.g. *rekoč*, *hote*, *upoštevaje*), adjectival participles ([ADJ](), e.g. *prepričan*, *sprejet*, *ostal*), and gerunds ([NOUN](), e.g. *sedenje*, *igranje*, *plavanje*). 

For more details, see the language-specific guidelines for individual tags with a detailed explanation of the JOS-to-UD conversion rules, and the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the tagset distribution.


### Features
* The Slovenian UD tagset includes all features from the universal tagset except for `Voice`, `Typo`, `NounClass`, `Evident`, `Polite` and `Clusivity`. In addition to that, the set of universal features has been extended with four additional features to either describe language-specific features (such as [Gender[psor]](../../sl/feat/Gender-psor.html), [Number[psor]](../../sl/feat/Number-psor.html) and [Variant](../../sl/feat/Variant.html)) or preserve some finer-grained morphological information encoded in the original ssj500k treebank (such as [NumForm](../../sl/feat/NumForm.html)).
* Nouns have inherent [Gender]() (feminine, masculine and neutral) and inflect for [Number]() (singular, dual or plural), [Case]() (nominative, genitive, dative, accusative, locative, instrumental), [Animacy](animate or inanimate) and [Definite]() (indefinite or definite).
* Verbs have inherent [Aspect](). Non-finite forms include infinitives, supine forms and l-participles. Finite forms inflect for [Gender]() (feminine, masculine and neutral), [Number]() (singular, dual or plural), [Mood]() (indicative and imperative) and [Person]() (first, second and third). The verb *biti* (be) also inflects for conditional [Mood]() and future [Tense](), while the verbs *biti* (be), *imeti* (have) and *hoteti* (want) also inflect for [Polarity]() (positive and negative).

For more details on all other morphological features see the language-specific guidelines for individual features with a detailed explanation of the JOS-to-UD conversion rules, and the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the tagset distribution.

## Syntax

* Nominal subjects ([nsubj]()) are nominal phrases typically occurring in nominative or (negated) genitive case. 
* Nominal objects ([obj]()) are non-adpositional predicate arguments in all other cases, regardless of semantic role.
* In case of two objects in a sentence, one is considered to be indirect object ([iobj]()), typically the phrase in dative case.
* All prepositional phrases are annotated as oblique arguments ([obl]()), regardless of semantic role.
* The copula ([cop]()) label is used for verb *biti* (be) in all non-existential uses. The only exception are *biti*-constructions with prepositional phrases, which are currently always labelled as obliques, even in attributive role (e.g. *biti v škripcih* "to be in trouble").
* The following subtypes are used in Slovenian treebanks:
  * [cc:preconj]() for preconjuncts (e.g. *tako* in *tako X kot Y* "both X and Y")
  * [discourse:filler]() for filled pauses (e.g. *eee* "uhm")
  * [flat:foreign]() for non-first words in quoted foreign phrases (e.g. *Chamber of torture*)
  * [flat:name]() for exocentric complex names (e.g. *Novak* in *Janez Novak*)
  * [parataxis:discourse]() for clausal discourse markers (e.g. *a veš* "you know")
  * [parataxis:restart]() for repaired sentence beginnings (e.g. *sits* in *the image is- ... this man sits*)
* The Slovenian treebanks do not use the `clf]` and `compound]` relations.

For more details on the syntactic annotation, see the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the dependency relation distribution.

## Treebanks

There are [two](../treebanks/sl-comparison.html) Slovenian UD treebanks:

  * [Slovenian-SSJ](../treebanks/sl_ssj/) written language treebank 
  * [Slovenian-SST](../treebanks/sl_sst/) spoken language treebank


