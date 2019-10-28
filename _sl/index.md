---
layout: base
title:  'Slovenian UD'
udver: '2'
---

# UD for Slovenian <span class="flagspan"><img class="flag" src="../../flags/svg/SI.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation, with the following exceptions:
  * words with an apostrophe, e.g. *O'Brian*
  * numerical expressions, e.g. *30:00*, *200.000,000*
  * words with hyphens before suffixes, e.g. "OZN-ovski* ("UN-like"), *a-ju* ("to the letter a"), *15-i* ("the 15th")
  * abbreviations without whitespace, e.g. *dr.*
* Multiword tokens are not used in the Slovenian UD treebanks. This means that fused words, such as bound pronouns (e.g. *name* "on me"), multi-word abbreviations (e.g. *npr.* "for example") and colloquial contractions (e.g. *nauš* "won't"), are currently treated as single tokens.

For more details, see the Slovenian [tokenization](tokenization.html) description page.

## Morphology

### Tags

* Slovenian uses 16 universal part-of-speech tags out of 17 possible. Although the list of non-alphabetic characters belonging to the [SYM]() UPOS has been defined, no such tokens occur in the Slovenian UD Treebanks.
* With a few exceptions, the POS categorization follows the principles of the reference [JOS annotation scheme](http://nl.ijs.si/jos/index-en.html). 
* Thus, the tag [PART]() is used for [more than 60 different words](https://universaldependencies.org/treebanks/sl-comparison.html) annotated as JOS particles in the original corpora. Particles, such as _ja_ "yes" and _ne_ "no", are currently always tagged as PART regardless whether they are used as as modal particles (_Ne motiš se._ "You are not wrong") or as feedback particles that are _not_ associated with another word or phrase (_Ne, motiš se._ "No, you are wrong.").
* The tag [AUX]() is only used for verb *biti* (be), when used as an auxiliary or a copula verb.
* The tag [DET]() is used for JOS pronouns and adverbs that predominantly occurr as nominal premodifiers, regardless of their actual function in context, e.g. *moj* "my", *tak* "such", *ta* "this"; *dosti* "enough", *manj* "less", *veliko* "many", etc.
* Most (de)verbal forms are annotated as [VERB]() or [AUX](), with the exception of adverbial participles ([ADV]()), e.g. *rekoč*, *hote*, *upoštevaje*, adjectival participles ([ADJ]()), e.g. *prepričan*, *sprejet*, *ostal*, and gerunds ([NOUN]()), e.g. *sedenje*, *igranje*, *plavanje*. 

For more details, see the list of [Slovenian UPOS tags](pos/index.html) with a detailed explanation of the JOS-to-UD conversion rules, and the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the tagset distribution.


### Features

* Nouns have inherent [Gender]() (feminine, masculine and neutral) and inflect for [Number]() (singular, dual or plural), [Case]() (nominative, genitive, dative, accusative, locative, instrumental), [Animacy](animate or inanimate) and [Definite]() (indefinite or definite).
* Verbs have inherent [Aspect](). Non-finite forms include infinitives, supine forms and l-participles. Finite forms inflect for [Gender]() (feminine, masculine and neutral), [Number]() (singular, dual or plural), [Mood]() (indicative and imperative) and [Person]() (first, second and third). The verb *biti* (be) also inflects for conditional [Mood]() and future [Tense](), while the verbs *biti* (be), *imeti* (have) and *hoteti* (want) also inflect for [Polarity]() (positive and negative).

For more details on all other morphological features, see the list of [Slovenian features](feat/index.html) with a detailed explanation of the JOS-to-UD conversion rules, and the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the tagset distribution.

## Syntax

* Nominal subjects ([nsubj]()) are nominal phrases typically occurring in nominative or (negated) genitive case. 
* Nominal objects ([obj]()) are non-adpositional predicate arguments in all other cases, regardless of semantic role.
* In case of two objects in a sentence, one is considered to be indirect object ([iobj]()), typically the phrase in dative case.
* All prepositional phrases are annotated as oblique arguments ([obl]()), regardless of heir semantic role.
* The copula ([cop]()) label is used for verb *biti* (be) in all non-existential uses. The only exception are *biti*-constructions with prepositional phrases, which are currently always labelled as obliques, even in attributive role (e.g. *biti v škripcih* "to be in trouble").
* The following subtypes are used in Slovenian treebanks:
  * [cc:preconj] for preconjuncts (e.g. *tako* in *tako X kot Y* "both X and Y")
  * [conj:extend] for general extenders (e.g. *in tako naprej* "and so on")
  * [discourse:filler] for filled pauses (e.g. *eee* "uhm")
  * [flat:foreign] for non-first words in quoted foreign phrases (e.g. *Chamber of torture*)
  * [flat:name] for exocentric complex names (e.g. *Novak* in *Janez Novak*)
  * [parataxis:discourse] for clausal discourse markers (e.g. *a veš* "you know")
  * [parataxis:restart] for repaired sentence beginning (e.g. *sits* in *the image is- ... this man sits*)
* The Slovenian treebanks do not use the [clf], [compound] and [list] relations.

For more details on the syntactic annotation, see the [Slovenian UD treebanks overview](https://universaldependencies.org/treebanks/sl-comparison.html) with statistical details on the dependency relation distribution.

## Treebanks

There are [two](../treebanks/sl-comparison.html) Slovenian UD treebanks:

  * [Slovenian-SSJ](../treebanks/sl_ssj/index.html) written language treebank
  * [Slovenian-SST](../treebanks/sl_sst/index.html) spoken language treebank


