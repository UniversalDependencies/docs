---
layout: base
title:  'Danish UD'
udver: '2'
---

# UD for Danish <span class="flagspan"><img class="flag" src="../../flags/svg/DK.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace: *1.1.1970*, *11:00*, *2 000*.
* Multiword tokens are not used in Danish.

## Morphology

### Tags

* Danish uses all 17 universal tags.
* The only words tagged [PART]() are the infinitive marker *at* and the negation particle *ikke*.
* Auxiliaries ([AUX]()) are all verbal in Danish and can be grouped into four types:
  * The copula *være* (be).
  * The temporal auxiliary *have* (have), which combines with the participle of the main verb to form perfect tenses.
  * The passive auxiliary *blive* (get/become), which combines with the past participle of the main verb to form passives.
  * Modal and aspectual verbs that combine with the bare infinitive of the main verb, such as *måtte* (must) and *kunne* (could).
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.
* Participles (both present and past) are mainly used adjectivally in Danish and are generally tagged [ADJ](). The only exception is that past participles used to form periphrastic passives are tagged [VERB]().

For more information, see the list of [Danish POS tags](pos/index.html).

### Features

* Nouns have inherent [Gender]() and inflect for [Number]() (singular or plural), [Definite]() (indefinite or definite) and [Case]() (nominative or genitive).
* Verbs inflect for [Voice]() (active or passive). Finite forms in indicative mood in addition inflect for [Tense]() (present or paste). There are two types of nonfinite forms: infinitives and participles (present and past).
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender](), [Number]() and [Definite](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative) and for [Case]() when used to head noun phrases.
* Adverbs inflect only for [Degree]().
* Personal pronouns inflect for [Case]() with three values (nominative, accusative, genitive).
* Determiners agree with nouns in the same way as adjectives.

## Syntax

* Subjects have the following characteristics:
  * Word order: Subjects immediately follow the finite verb and precede negation in verb-initial main clauses.
  * Case marking: Subjects occur in nominative case without adpositions.
  * Passivization: Subjects are suppressed when verbs (both intransitive and transitive) are passivized.
  * Control: Subjects control the subjects of absolute adverbials.
  * Relativization: Relative pronouns with subject function cannot be omitted.
* Objects have the following characteristics:
  * Word order: Objects immediately follow the main verb unless topicalized.
  * Case marking: Objects occur in nominative case (if nouns) or accusative case (if pronouns) without adpositions.
  * Passivization: Objects become (non-expletive) subjects when verbs are passivized.
* The copula verb *være* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. Existential clauses use the same verb but with different syntax, with the expletive *der* (there).
* The following subtypes are used in Danish:
  * [acl:relcl]() for relative clauses
  * [advmod:lmod]() for adverbial modifiers expressing location
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for verb particles
  * [csubj:pass]() for clausal subjects of passive verbs
  * [nmod:poss]() for possessive/genitive modifiers
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:lmod]() for oblique modifiers expressing location
  * [obl:tmod]() for oblique modifiers expressing time

## Treebanks

There is 1 Danish UD treebank:

  * [Danish-DDT](../treebanks/da_ddt/index.html)
