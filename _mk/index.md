---
layout: base
title:  'Macedonian UD'
udver: '2'
---

# UD for Macedonian <span class="flagspan"><img class="flag" src="../../flags/svg/MK.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* The numbers are analyzed as one token when used as expression without spaces (20000) or with an internal comma as indicator (10,434).



## Morphology

### Tags

* Macedonian uses 15 universal POS categories. It does not make use of ([SYM]()) and ([X]()).
* Negative particles are analyzed as ([PART]()). Infinitive markers / complementizers _да_ / da (“to, that”) are tagged as subordinating conjunctions ([SCONJ]()).
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is handled as follows:
  * as pronouns – personal and reflexive pronouns, and all entity-pointing other pronouns (demonstrative, interrogative, relative, indefinite, collective, negative).
  * as determiners – the attributive and possessive atributive forms of the demonstrative, interrogative, relative, indefinite, collective, negative pronouns; the long forms of the possessive pronouns.
* Macedonian has just one auxiliary verb ([AUX]()), _сум_ / sum (“to be”), but the lemmas _биде_ / bide, _би_ / bi (“would”) are also possible.
* Modal verbs are analyzed as ([VERB]()).
* The following POS are tagged as ([ADJ]()): adjectives; ordinal numerals; partciples in adjectival usage adjectives derived from family names.
* The following POS are tagged as ([VERB]()): personal and impersonal verbs; participles when used as verbal forms – indicators of evidentiality; and converbs.

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

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
