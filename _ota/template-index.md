---
layout: base
title:  'Ottoman Turkish UD'
udver: '2'
---

# UD for Ottoman Turkish <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

This is a, work-in-progress, short introduction of the UD annotation for Ottoman Turkish.

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters and punctuation.
* Whitespaces or punctuation may appear in some abbreviations or numeric expressions.
* Arabic noun phrases that are transcribed without any space (e.g. ‘nizâmü’l-mülk’) are treated as two separate words. However, Idiomatic expressions such as ‘ve’s-selâm) have been considered as an exception to this rule.
* Clitics are treated as a separate words. This includes
    the clitics that follow word-internal processes (e.g., vowel
    harmony) such as question clitic  _mI_ and  adverbial _DA_.
    The rule applies even if the clitic is written together with the last morpheme
   without any space and multitoken words have been introduced for such cases.
* Due to the interaction of syntax and rich morphology,
    the following list  affixes introduce new "syntactic words".
        - Copular suffix attached to nouns or adverbs (if not null),
            including the conditional _-(y)sA_ and converbial _-(y)ken_
        - _-ki_
## Morphology



### Tags

*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

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

There are [N](../treebanks/ota-comparison.html) Ottoman Turkish UD treebanks:

  * [Ottoman Turkish-A](../treebanks/ota_a/index.html)
  * [Ottoman Turkish-B](../treebanks/ota_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
