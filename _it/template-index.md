---
layout: base
title:  'Italian UD'
udver: '2'
---

# UD for ITALIAN <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation: *1.1.1970*, or 1/1/1970, *11:00*, *2,5%*, *2-3*.
  * Abbreviations are treated as single words and may contain punctuation: *U.S.A.*.
* Multiword tokens are not used.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Italian uses all 17 universal tags.
* The use of [PART](pos/PART.md) is limited to possessive markers, in English names: [en] ‘s. Examples: Wendy 's, McDonald 's.
* Auxiliaries ([AUX](pos/AUX_.md)) can be grouped into five types:
  * the copula *essere* (be).
  * tense auxiliaries, used to form compound tenses represented by _avere_ "to have" and _essere_ "to be";
  * passive auxiliaries, used to form passive verb forms represented by _essere_ "to be" and _venire_ lit. "to come";
  * auxiliaries in progressive form, represented by _stare_ followed by a gerund. Ex. _sto arrivando_ "I am coming";
  * modal verbs are also handled as auxiliaries (e.g. _potere_ "can", _dovere_ "must", _volere_ "want"). 
  
  The language-specific part-of-speech tag is VM for modal verb and VA for other auxiliary verbs.
* The tag [DET](pos/DET.md) is used for articles and pronominal words used to modify nouns or noun phrases, including possessives, for example _Mio padre_ "my father". Predeterminers (or addeterminers), are also tagged `DET`. For example: _<b>Tutti</b> gli amici_ "<b>All</b> the friends". 
* The tag [PRON](pos/PRON.md) is reserved for words that substitute for nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. Specializations of pronouns correspond to different language specific PoS leading to different values for the [PronType](feat/PronType.md) feature.
* Participles (both present and past) are rendered as participial adjectives, and are generally tagged [ADJ](), when they do not introduce a subordinate. 

<!--For more information, see the list of [Italian POS tags](pos-index.md).-->

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Nouns have inherent [Gender](feat/Gender.md) (Masc or Fem) and inflect for [Number](feat/Number.md) (Sing or Plur).
* Verbs inflect for [Mood](feat/Mood.md) (indicative, imperative, conditional, subjunctive); for [Tense](feat/Tense.md) (past, present, future or imperfect). There are three types of nonfinite forms: infinitives, participles (present and past), and gerund [VerbForm](feat/VerbForm.md).
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender](feat/Gender.md) and [Number](feat/Number.md). In addition, many adjectives inflect for [Degree](feat/Degree.md) (comparative and superlative).
* Adverbs inflect only for [Degree](feat/Degree.md).
* Pronouns, determiners, pronominal numerals (quantifiers) and pronominal adverbs may have a [PronType](feat/PronType.md) feature, marking them as personal (Prs) or possessive (Poss). The boolean feature [Reflex](feat/Relfex.md) applies to pronouns. The feature [Clitic]() is language specific and marks clitic pronouns.
* Determiners agree with nouns in the same way as adjectives. They can be definite or indefinite [Definite](feat/Definite.md).

<!--For more information, see the list of [Italian features](feat-index.md).-->

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* Subjects have the following characteristics:
  * Word order: ...
  * Case marking: ...
  * Passivization: ...
  * Control: ...
  * Relativization: ...
* Objects have the following characteristics:
  * Word order: ...
  * Case marking: ...
  * Passivization: ...
* The copula verb *essere* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. 
* The following subtypes are used in Italian:
  * [acl:relcl](dep/acl-relcl.md) for relative clauses
  * [aux:pass](dep/auxpass.md) for passive auxiliaries
  * [csubj:pass](dep/csubjpass.md) for clausal subjects of passive verbs
  * [det:poss](dep/detposs.md) possessive determiner
  * [det:predet](dep/det-predet.md) appears in front of another determiner
  * [discourse:emo]() emoticons/emojis and other pictographic elements
  * [expl:impers](dep/expl-impers.md) for impersonal clitics
  * [expl:pass](dep/expl-pass.md) for reflexive clitics in reflexive passives
  * [flat:foreign]() for non-first words in quoted foreign phrases
  * [flat:name]() for proper names
  * [nsubj:pass](dep/nsubjpass.md) for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [parataxis:appos]() appositive sentences
  * [parataxis:discourse]() semantically-void sentences used as discourse markers 
  * [parataxis:hashtag]() hashtags that are not syntactically integrated into the sentence
  * [parataxis:insert]() parenthetical clauses that cannot be considered independent from the governing predicate
  * [parataxis:nsubj]() paratactic sentences with an implicit nsubj role with respect to the governing predicate
  * [parataxis:obj]() the paratactic sentence is an object (often used with direct speech)
  * [vocative:mention]() Twitter @-mentions, when they are not syntactically integrated into the sentence

<!--For more information, see the list of [Italian relations](dep-index.md).-->

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
