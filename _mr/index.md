---
layout: base
title:  'Marathi UD'
udver: '2'
---

# UD for Marathi <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others (e.g., the sentence-terminating danda) are not.
  We tokenize punctuation as separate tokens (words).

## Morphology

### Tags

* Marathi uses all 17 universal POS categories, including particles ([PART]()).
  (But [SYM]() and [X]() do not occur in the current data.)
* Marathi has the following auxiliary verbs ([AUX]()):
  * असणे _asaṇe_ (“to be”) is used as copula and in periphrastic tenses. The form नाही is treated as a negative form of असणे (they share the lemma).
  * येणे _yeṇe_ (“to come”) for the passive (with a non-finite form of the main verb).
  * जाणे _jāṇe_ (“to go”) for the passive (with a non-finite form of the main verb).
  * Modal auxiliaries:
    * शकणे _śakaṇe_ (“be able, can”)
    * पाहिजे _pāhije_ (“needed, should, ought to”)
  * There are other verbs that are semantically weak and combine with non-finite forms of other verbs but they should not be analyzed as auxiliaries in UD.
    Instead the lexically more salient verb is attached as an [xcomp]() of the less salient verb. Phase verbs, such as to begin/end, are an example:
    * लागणे _lāgaṇe_ (“to start”) combines with a non-finite form of the lexical verb; this should be analyzed as a control verb construction ([xcomp]()) rather than an auxiliary
    * देणे _deṇe_ (“to give”) combines with a non-finite form of the lexical verb; has the meaning of “let it (be)”; should be analyzed as a control verb construction ([xcomp]()) rather than an auxiliary

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
