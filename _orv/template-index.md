---
layout: base
title:  'Old Russian UD'
udver: '2'
---

# UD for Old Russian <span class="flagspan"><img class="flag" src="../../flags/svg/RU-IVAN.svg" /></span>

## Tokenization and Word Segmentation
This is an overview of tokenisation in UD_Old_Russian-TOROT:

* In general tokens are delimited by spaces. 
* It should be noted that many of the texts are based on manuscripts in scripta continua, i.e. words are not separated by spaces. The spaces are therefore editorial. When texts are based on independent editions, the spacing may differ from our general tokenisation policy. This sometimes causes tokens with spaces.
* Punctuation is not included in UD_Old_Russian-TOROT.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags
This is a brief overview of the use of POS tags in UD_Old_Russian-TOROT:

* The POS category PART is not in use, instead we use ADV for particle-like items.
* DET is used for traditional demonstrative and indefinite pronouns. All other pronouns, including possessive pronouns, are tagged PRON.
* Verbal forms, including participles, are tagged VERB or AUX. Only deverbal nouns with clearly nominal properties are tagged NOUN.
* Only быти and не быти (with incorporated negation) are analysed as auxiliaries and have the AUX tag.
* TOROT was originally tagged in the PROIEL dependency format, an overview of the tagset can be found here: https://proiel.github.io/handbook/developer/#the-proiel-xml-format


---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features
This is a brief overview of the features used in UD_Old_Russian-TOROT:

* VERB:

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
