---
layout: base
title:  'Faroese UD'
udver: '2'
---

# UD for Faroese <span class="flagspan"><img class="flag" src="../../flags/svg/FO.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace. Dot following the last digit of a number indicates an ordinal numeral in Faroese: *5.*, *1.1.1970*, *11:00*, *2.000*
  * Abbreviations are treated as single words: *m.a.*, *o.s.fr.*
* Words with spaces are not used.
* Imperative verbal forms are treated as multi-word tokens and segmented to individual syntactic words.

<!-- ---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available. -->

<!-- --- -->

## Morphology

The PoS-tags follow the universal tag set and do not add any language-specific PoS-tags. The language specific features were converted automatically to the UD scheme from other tagsets.

### Tags

* Faroese uses all 17 universal tags.
* The only word tagged with [PART]() is the infinitive marker *at*.
* Auxiliaries ([AUX]()) are all verbal in Faroese and can be grouped into four types:
  * The copula *vera* (be) and *blíva* (become).
  * The auxiliary *hava* (have), selects the supine form of the main.  
  <!-- verb to form perfect tenses. -->
  * The auxiliaries *verða* (become) and *fáa* (can) which select a verbal past participle.
  * Modal and aspectual verbs that combine with the bare infinitive of the main verb, such as *mega* (may), *vilja* (want), *munna* (will), *kunna* (be able to) and *skula* (shall).
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.
<!-- * Participles (both present and past) are tagged with [ADJ](). -->
* Foreign proper names are tagged [PROPN]().


### Features

* Nouns have inherent gender (masc, fem or neutral), inflect for number (singular or plural), case (nominative, accusative, dative or genitive) and can take indefinite or definite article.
* Verbs can be used in the passive and the active voice. Finite forms in indicative or subjunctive mood in addition inflect for Tense (present or past), person (1, 2 or 3) and number (singular or plural). The imperative mood inflects for number (singular or plural). There are three types of nonfinite forms: infinitives, participles (present and past), and supine (used to form perfect tenses together with the auxiliary have). The past participle additionally inflects for gender (masc, fem or neutral), number (singular or plural) and case (nom or acc).

<!-- --- -->

## Syntax

Subjects have the following characteristics:
* Word order: Faroese is an SVO language although although other structures may occur as well, such as OVS.
* Case marking: Subjects usually occur in nominative case but quirky subjects take accusative, dative or genitive case (rare).

Objects have the following characteristics:
* Word order: Objects usually follow the main verb unless topicalized.
* Case marking: Objects occur in accusative, dative or genitive case.
* Passivization: Objects become (non-expletive) subjects when verbs are passivized.

<!-- The copula verb *vera* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. 
Existential clauses normally use the verb participle til (vera til) or finnast. -->

The following subtypes are used:

* `acl:relcl` for relative clauses
* `compound:prt` for verb particles
* `flat:name` for exocentric complex names
* `flat:foreign` for foreign names
* `nmod:poss` for possessive/genitive modifiers
* `obl:arg` for oblique arguments that are not adjuncts


<!-- ---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any. -->

<!-- --- -->

## Treebanks

There are [2](../treebanks/fo-comparison.html) Faroese UD treebanks:

  * [Faroese-OFT](../treebanks/fo_oft/index.html)
  * [Faroese-FarPaHC](../treebanks/fo_farpahc/index.html)

<!-- ---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name. -->

<!-- --- -->
