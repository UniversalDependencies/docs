---
layout: base
title:  'Swedish UD'
permalink: sv/overview/sv-hub.html
udver: '2'
---

# UD for Swedish <span class="flagspan"><img class="flag" src="../../flags/svg/SE.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace: *1.1.1970*, *11:00*, *2 000*.
  * Abbreviations are treated as single words and may contain punctuation or whitespace: *t.ex.*, *bl a*.
* Multiword tokens are not used in Swedish.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Swedish uses all 17 universal tags.
* The only word tagged [PART]() is the infinitive marker *att*.
* Auxiliaries ([AUX]()) are all verbal in Swedish and can be grouped into four types:
  * The copula *vara* (be).
  * The temporal auxiliary *ha* (have), which combines with the supine form of the main verb to form perfect tenses.
  * The passive auxiliar *bli* (get), which combines with the past participle of the main verb to form passives.
  * Modal and aspectual verbs that combine with the bare infinitive of the main verb, such as *måste* (must) and *kunde* (could).
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.
* Participles (both present and past) are mainly used adjectivally in Swedish and are generally tagged [ADJ](). The only exception is that past participles used to form periphrastic passives are tagged [VERB]().

For more information, see the list of [Swedish POS tags](../pos/index.html).

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ or NOUN. Include links to language-specific tag definitions if any.

---

### Features 

* Nouns have inherent [Gender]() and inflect for [Number]() (singular or plural), [Definiteness]() (indefinite or definite) and [Case]() (nominative or genitive). 
* Verbs inflect for [Voice]() (active or passive). Finite forms in indicative mood in addition inflect for [Tense]() (present or paste). There are three types of nonfinite forms: infinitives, participles (present and past), and supine (used to form perfect tenses together with the auxiliary *have*). 
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender](), [Number]() and [Definiteness](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative) and for [Case]() when used to head noun phrases.
* Adverbs inflect only for [Degree]().
* Personal pronouns inflect for [Case]() with three values (nominative, accusative, genitive).
* Determiners agree with nouns in the same way as adjectives.

For more information, see the list of [Swedish features](../feat/index.html).

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Swedish relations](../dep/index.html),
as well as Swedish-specific examples scattered across the documentation of constructions.

### Relations Overview

* The following relation subtypes are used in Swedish: 
