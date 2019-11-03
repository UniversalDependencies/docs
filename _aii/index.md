---
layout: base
title:  '<Assyrian> UD'
udver: '2'
---

# UD for Assyrian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-AII.svg" /></span>


## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.
* Punctuation marks are attached to the neighboring word. We always tokenize them as separate tokens.
* Coordinating conjunction and prepositions are separated from the words that follows them in a sentence.
* Multiword tokens are not used in Assyrian.


## Morphology

### Tags

* The tags INT, SYM and X are not used.
* In this Assyrian treebank, 13 universal tags have been used.
* Certain words like "ܒܜ , ܩܡ ,ܟܝ , ܚܘܫ , ܫܘܩ" are tagged as PART and have a dependency relation as AUX. Together with the following VERB, these words change the verb tense.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Nominal words (NOUN, PROPN and PRON) have an inherent Gender feature with values Masc or Fem.
* Verbs inflect for Gender, Number and Person.
* Number has 2 possible values: Sing and Plur.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [0](../treebanks/LCODE-comparison.html) Assyrian UD treebanks:

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
