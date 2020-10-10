---
layout: base
title:  'South Levantine Arabic UD'
udver: '2'
---

# UD for South Levantine Arabic <span class="flagspan"><img class="flag" src="../../flags/svg/JO.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words); that holds even for hyphenated compounds and for abbreviations.
* Enclitic pronouns (such as ـهُم (--hum)), proclitic conjunctions (such as فَـ (fa--)) and prepositions (such as و (u--)) are cut off during tokenization and marked as multi-word tokens.
* Definite articles are treated as bound morphemes and they are not cut off during tokenization.


## Morphology

### Tags

* South Levantine Arabic uses 16 universal POS categories; at present where subordinating [SCONJ]() and coordinating conjunctions [CCONJ]() are distinguished
* South Levantine Arabic auxiliaries are similar in their function to that of Arabic "weak verbs الأفعال الناقصة". Most inflect like verbs, few don't. The following six auxiliaries are found in the data: 
  * The copulas كَان _(kān)_ and عم _('ām)_. 
  * Modal particle راح _(rāḥ)_ "will" (which some people may substitute with the clitic version حَ _(ḥa)_, but is not found in the data). 
  * Modal auxiliaries,  قِدِر _(qidir)_ "can", حَب _(ḥab)_ "would (like to)", ممكن _(mumkin)_ "could", and the deontic modal لَازِم _(lāzim)_ "must".

Words tagged as PART are function words and include: 
* Negation particles مش _(mish)_ and ما _(mā)_.
* Accusative particle إنَّ _(inna)_ which functions as a marker.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---


### Features

Morphological features FEAT are not available in this release, though they may be in the future. 

## Syntax


### Core Arguments, Oblique Arguments and Adjuncts
* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
* For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj]() and oblique objects, labeled [obl:arg]().
* All prepositional objects are considered oblique.

### Non-verbal Clauses

* Besides the auxiliary copulas mentioned above, a personal pronoun can also serve as a copula.


### Relations Overview

* The following relation subtypes are used in South Levantine Arabic:
  * [nmod:poss]() for possessive/genitive modifiers
  * [obl:arg]() for prepositional objects
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [flat:foreign]() for non-first words in quoted foreign phrases
  

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [one](../treebanks/ajp-comparison.html) South Levantine Arabic UD treebank:

  * [South Levantine Arabic](../treebanks/ajp_madar/index.html)

