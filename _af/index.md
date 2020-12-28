---
layout: base
title:  'Afrikaans UD'
udver: '2'
---

# UD for Afrikaans <span class="flagspan"><img class="flag" src="../../flags/svg/ZA.svg" /></span>


## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace: _1-1-1970_, _11:00_, _2 000_. This still needs be partially implemented.
  * Abbreviations are treated as single words and may contain punctuation or whitespace: _art._
* Contractions like _dis_ are considered to be one token.

## Morphology

### Tags

* Afrikaans uses all 17 universal POS categories. Currently interjections are not covered by the treebank, as it contains legal texts from government websites.
* Particle ([PART]()) is used for _te_ introducing an infinitive, for the negation particle _nie_, the contraction _dis_ (_dit is_), and the genitival particle _se_.
* The tag [DET]() is used for articles, demonstrative and indefinite pronouns. Other pronouns get the tag [PRON]().
* Auxiliaries ([AUX]()) are all verbal in Afrikaans and can be grouped into four types:
  * The copula _wees_.
  * The temporal auxiliary _het _(have), which combines with the past participle of the main verb to form perfect tenses.
  * The passive auxiliaries _word_ (present) and _wees_ (past), which combine with the past participle of the main verb passives.
  * The modal verbs  _sal_, _wil_, _mag_, _durf_, _kan_, _moet_, _moenie_, _behoort_, _hoef_.

### Features

* Nouns ([NOUN]()) and proper names ([PROPN]()) inflect for number and degree (diminutives).
* Most adjectives ([ADJ]()) have different forms in attributive and predicative positions, which is indicated by the `AdjType` feature. In addition, many adjectives inflect for `Degree` (positive, comparative, superlative), and rarely for Case, which could be genitive when used independently.
* Adverbs inflect only for `Degree`.
* Verbs can be Finite or Infinite (reflected in `VerbType`). Finite forms inflect for `Tense`. For auxiliaries, the type (copula, modal, temporal/passive) is reflected in `VerbType`.
* The type of determiner and pronoun is reflected in `PronType`. Articles are definite or indefinite (`Definite`ness). Personal pronouns are inflected for number, case (nominative or accusative/oblique) and person; possessive and reflexive pronouns for number and person.


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
* The copula verb _wees_ (be) is used in equational, attributional, locative, possessive, existential and benefactory nonverbal clauses.


### Relations Overview

* The following relation subtypes can be used in Afrikaans:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs (currently not present)
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for verb particles

## Treebanks

There is one Afrikaans UD treebank:

  * [Afrikaans](../treebanks/af_afribooms/index.html)
